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
        public connect(host: string, port: string): void {
            if (!this._connected && !this._isConnecting) {
                this._host = host;
                this._port = port;
                this.resetWebSocket();
                this._isConnecting = true;
                this._connected = false;

                // var protocol = window.location.toString().indexOf("https") != -1 ? "wss://" : "ws://";
                var protocol = "ws://";
                this.ws.connectByUrl(protocol + host +":"+ port);
                Console.log("连接: " + host + port + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
            }
        }
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
        }
        /** 
        * 发送数据给服务器
        * @param cmd {string} 命令
        * @param host {any} 数据
        **/
        public send(cmd: string, data?: any) {
            if (this.ws.connected) {
 
            }
            else {
                xlLib.TipsUtils.showFloatWordTips("服务器已断开，请检查网络环境");
            }
        }

        private onReceiveMessage(event: egret.ProgressEvent): void {
            var result: string = this.ws.readUTF();
            var data:Object = JSON.parse(result);
            console.log("-----------------收到消息"+data+"---",data);
            
        }
        private onSocketOpen(event: egret.Event): void {
            this._isConnecting = false;
            this._connected = true;
            Console.log("网络已连接" + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
        }
        private onSocketClose(event: egret.Event): void {
            if (this._connected || this._isConnecting) {
                this._isConnecting = false;
                this._connected = false;
                Console.log("网络已断开" + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
            }
        }
	}
}