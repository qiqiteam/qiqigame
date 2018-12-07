module xlLib {
    export class WebSocketMgr {
        private static _instance: WebSocketMgr;
        /**
         * WebSocket管理器
         */
        public constructor() {
            this.resetWebSocket();
        }
        /**
         * 重置websocket，之前请先断开连接
         */
        public resetWebSocket(): void {
            if (this.ws) {
                this.ws.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
                this.ws.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
                this.ws.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
                this.ws.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketClose, this);
            }
            this.ws = new egret.WebSocket();
            this.ws.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            this.ws.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.ws.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.ws.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketClose, this);
        }
        /**
         * WebSocket管理器单例
         */
        public static getInstance(): WebSocketMgr {
            if (!this._instance) {
                this._instance = new WebSocketMgr();
            }
            return this._instance;
        }
        private ws: egret.WebSocket;
        private _isConnecting: boolean = false;
        private _connected: boolean = false;
        /** 
        * 是否打印消息日志
        **/
        public useLog: boolean = true;
        /** 
        * 是否正在连接
        **/
        public get isConnecting(): boolean {
            return this._isConnecting;
        }
        /** 
        * 是否已经连接
        **/
        public get connected(): boolean {
            return this._connected;
        }

        /**
         * 重连间隔
         */
        private _host: string = "";
        private _port: string = "";
        /**
         * 注册接收事件回调
         */
        public handlers = [];
        public lastRecieveTime: number;
        public appTimeStamp: number;
        public isPinging = false;
        public lastSendTime: number;
        public disconnectCallback: any;

        public token: string;
        public userid: string;

        public get host(): string {
            return this._host;
        }
        public get port(): string {
            return this._port;
        }
        private actionTimeout: number = null;//操作间隔定时器(用来判断用户在一定时间不操作就断开网络)
        /** 
        * 连接到指定的主机和端口
        * @param host {string} 主机ip或者域名
        * @param port {string} 主机端口号
        **/
        public connect(host: string, port: string, id: string): void {
            if (!this._connected && !this._isConnecting) {
                this._host = host;
                this._port = port;
                this.resetWebSocket();
                this._isConnecting = true;
                this._connected = false;
                // var protocol = window.location.toString().indexOf("https") != -1 ? "wss://" : "ws://";
                var protocol = "ws://";
                var requrl = protocol + host + ":" + port + "?userid=" + id;
                this.ws.connectByUrl(requrl);
                Console.log("连接: " + requrl + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
            }
        }


        // //**************************************************************************
        // //客户端心跳处理
        // //**************************************************************************
        // public startHeartBeat(): void {
        //     this.lastRecieveTime = this.appTimeStamp;;
        //     //服务器响应心跳的事件监听
        //     // this.ws.on("socket_pong", function () {
        //     //     console.log("socket_pong");
        //     //     this.lastRecieveTime = ClientApp.getInstance().appTimeStamp;
        //     // });
        //     //启动定时器开始ping服务器消息,连上后每2秒ping一次服务器
        //     if (!this.isPinging) {
        //         this.isPinging = true;

        //         //每2秒执行一次ping服务器操作
        //         setInterval(function () {
        //             if (this.ws) {
        //                 this.ping();
        //                 console.log("客户端ping了一次网络消息");
        //             }
        //         }.bind(this), 2000);

        //         //每7秒检查一次ping消息是否有效
        //         setInterval(function () {
        //             if (this.ws) {
        //                 var CurTime = this.appTimeStamp;
        //                 var misTime = CurTime - this.lastRecieveTime
        //                 if (misTime > 15000) {
        //                     this.close();
        //                 }
        //             }
        //         }.bind(this), 1000);
        //     }
        // }


        // //**************************************************************************
        // //和服务器端ping网络消息
        // //**************************************************************************
        // private ping(): void {
        //     if (this.ws) {
        //         this.lastSendTime = this.appTimeStamp;
        //         this.send("socket_ping", {});
        //     }
        // }

        /** 
        * 关闭连接
        **/
        public close(): void {
            if (this.actionTimeout) {
                egret.clearTimeout(this.actionTimeout);
                this.actionTimeout = null;
            }
            if (this.ws.connected) {
                this.ws.close();
                this._isConnecting = false;
                this._connected = false;
            }
            if (this.ws) {
                this.ws.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
                this.ws.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
                this.ws.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
                this.ws.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketClose, this);
            }
            this.ws = null;
        }

        //**************************************************************************
        //注册网络事件处理函数
        //**************************************************************************
        public registerMsgHandler(msgid: string, callbackfuc: Function,thisObject?: any,isonce:boolean=false): void {
            this.addEvent(msgid,callbackfuc,thisObject,isonce);
        }


        //**************************************************************************
        //移除网络事件处理函数
        //**************************************************************************
        public removeMsgHandler(msgid: string, callbackfuc: Function,thisObject: any): void {
            this.removeEvent(msgid,callbackfuc,thisObject);
        }
          /**
         * 监听事件
         * @type 事件类型
         * @listener 回调函数
         * @thisObject 回调执行对象
         */
        private addEvent(type:string, listener:Function, thisObject:any,isonce:boolean=false){
            var arr:Array<any> = this.handlers[type];
            if(arr == null){
                arr = [];
                this.handlers[type] = arr;
            }else{
                var len = arr.length;
                for(var i=0;i<len;i++){
                    if(arr[i][0] == listener && arr[i][1] == thisObject){
                        return;
                    }
                }
            }
            arr.push([listener,thisObject,isonce]);
        }

        /**
         * 移除事件
         * @type 事件类型
         * @listener 回调函数
         * @thisObject 回调执行对象
         */
        private removeEvent(type:string ,listener, thisObject:any){
            var arr:Array<any> = this.handlers[type];
            if(arr != null){
                var len = arr.length;
                for(var i = len-1; i>=0;i--){
                    if(arr[i][0] == listener && arr[i][1] == thisObject){
                        arr.splice(i,1);
                    }
                }
            }
            if(arr && arr.length == 0){
                this.handlers[type] = null;
                delete this.handlers[type];
            }
        }

        /** 
         * 发送数据给服务器
         * @param cmd {string} 命令
         * @param host {any} 数据
         **/
        public send(cmd: string, data: any, cb: Function, thisArg?: any, ecb?: Function, ishow: boolean = false) {
            this.sendMes(cmd, data, (msg) => {
                if (msg.code == 200) {
                    cb.call(thisArg, msg);
                }
                else {
                    if (ecb) {
                        ecb.call(thisArg, msg);
                    }
                    if (ishow) {
                        xlLib.TipsUtils.showFloatWordTips(msg.message);
                    }
                }
            }, thisArg, ecb, ishow);
        }

        /** 
        * 发送数据给服务器
        * @param cmd {string} 命令
        * @param host {any} 数据
        **/
        public sendMes(cmd: string, data: any, cb: Function, thisArg?: any, ecb?: Function, ishow: boolean = false) {
            if (this.ws.connected) {
                if (data != null && (typeof (data) == "object")) {
                    data.command = cmd;
                    data = JSON.stringify(data);
                }
                this.registerMsgHandler(cmd,cb,thisArg,true);
                this.ws.writeUTF(data);
                this.ws.flush();
                console.log("开始发送消息---------------" + data);
            }
            else {
                xlLib.TipsUtils.showFloatWordTips("服务器已断开，请检查网络环境");
            }
        }

        private onReceiveMessage(event: egret.ProgressEvent): void {
            var msg = this.ws.readUTF();
            let recvMsg = JSON.parse(msg);
            if (this.handlers[recvMsg.command]) {
                console.log("收到消息 = " + msg);
                this.sendEvent(recvMsg.command,recvMsg);
            }
            // else if (recvMsg.command == "socket_pong") {
            //     console.log("socket_pong");
            //     this.lastRecieveTime = this.appTimeStamp;
            // }
            // var result: string = this.ws.readUTF();
            // var data:Object = JSON.parse(result);
            // console.log("-----------------收到消息"+recvMsg+"---",recvMsg);
        }

          /**
         * 发送事件
         * @type 事件类型
         * @args 携带数据
         */
        private sendEvent(type:string,...args:any[]){
            let arr:Array<any> = this.handlers[type];
            if(arr != null){
                let len = arr.length;
                let listen:Function;
                let thisObject:any;
                let isonce:boolean;
                for(let i=0;i<len;i++){
                    let msg = arr[i];
                    if(!msg)
                    {
                       continue;
                    }
                    listen = msg[0];
                    if(!listen)
                    {
                       continue;
                    }
                    thisObject = msg[1];
                    isonce = msg[2];
                    listen.apply(thisObject, args);
                    if(isonce)
                    {
                        arr.splice(i,1);
                    }
                }
            }
        }

        private onSocketOpen(event: egret.Event): void {
            this._isConnecting = false;
            this._connected = true;
            EventUtil.dispatchEvent(EventConst.ON_SOCKET_SUC, {});
            Console.log("网络已连接" + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
        }

        private onSocketClose(event: egret.Event): void {
            if (this._connected || this._isConnecting) {
                this._isConnecting = false;
                this._connected = false;
                EventUtil.dispatchEvent(EventConst.ON_SOCKET_CLOSE, {});
                Console.log("网络已断开" + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
            }
        }
    }
}