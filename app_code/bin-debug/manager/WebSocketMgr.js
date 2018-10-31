var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var WebSocketMgr = (function () {
        /**
         * WebSocket管理器
         */
        function WebSocketMgr() {
            this._isConnecting = false;
            this._connected = false;
            /**
            * 是否打印消息日志
            **/
            this.useLog = true;
            /**
             * 重连间隔
             */
            this._host = "";
            this._port = "";
            /**
             * 注册接收事件回调
             */
            this.handlers = [];
            this.isPinging = false;
            this.actionTimeout = null; //操作间隔定时器(用来判断用户在一定时间不操作就断开网络)
            this.resetWebSocket();
        }
        /**
         * 重置websocket，之前请先断开连接
         */
        WebSocketMgr.prototype.resetWebSocket = function () {
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
        };
        /**
         * WebSocket管理器单例
         */
        WebSocketMgr.getInstance = function () {
            if (!this._instance) {
                this._instance = new WebSocketMgr();
            }
            return this._instance;
        };
        Object.defineProperty(WebSocketMgr.prototype, "isConnecting", {
            /**
            * 是否正在连接
            **/
            get: function () {
                return this._isConnecting;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WebSocketMgr.prototype, "connected", {
            /**
            * 是否已经连接
            **/
            get: function () {
                return this._connected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WebSocketMgr.prototype, "host", {
            get: function () {
                return this._host;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WebSocketMgr.prototype, "port", {
            get: function () {
                return this._port;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * 连接到指定的主机和端口
        * @param host {string} 主机ip或者域名
        * @param port {string} 主机端口号
        **/
        WebSocketMgr.prototype.connect = function (host, port, id) {
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
                xlLib.Console.log("连接: " + requrl + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
            }
        };
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
        WebSocketMgr.prototype.close = function () {
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
        };
        //**************************************************************************
        //注册网络事件处理函数
        //**************************************************************************
        WebSocketMgr.prototype.registerMsgHandler = function (msgid, callbackfuc, isonce) {
            var _this = this;
            if (isonce === void 0) { isonce = true; }
            if (this.handlers[msgid]) {
                console.log("消息ID为:" + msgid + "已经注册了相同的处理回调函数");
                return;
            }
            var handlerfunc = function (msgdata) {
                if (msgid != "disconnect" && typeof (msgdata) == "string") {
                    msgdata = JSON.parse(msgdata);
                }
                callbackfuc(msgdata);
                if (isonce) {
                    delete _this.handlers[msgid];
                }
            };
            // console.log("FWTcpClient绑定消息处理函数成功: msgid=" + msgid);
            this.handlers[msgid] = handlerfunc;
            // if (this.ws) {
            //     this.ws.on(msgid, handlerfunc);
            // }
        };
        /**
        * 发送数据给服务器
        * @param cmd {string} 命令
        * @param host {any} 数据
        **/
        WebSocketMgr.prototype.send = function (cmd, data, cb, thisArg, ecb, ishow) {
            if (ishow === void 0) { ishow = true; }
            if (this.ws.connected) {
                if (data != null && (typeof (data) == "object")) {
                    data.command = cmd;
                    data = JSON.stringify(data);
                }
                this.registerMsgHandler(cmd, function (msg) {
                    console.log("-----------------收到消息" + msg + "---", msg);
                    // if (msg.code == 200) {
                    cb.call(thisArg, msg);
                    // }
                    // else {
                    //     if (ecb) {
                    //         ecb.call(thisArg,msg);
                    //     }
                    //     if (ishow) {
                    //         xlLib.TipsUtils.showFloatWordTips(msg.err);
                    //     }
                    // }
                }, false);
                this.ws.writeUTF(data);
                this.ws.flush();
                console.log("开始发送消息---------------");
            }
            else {
                xlLib.TipsUtils.showFloatWordTips("服务器已断开，请检查网络环境");
            }
        };
        WebSocketMgr.prototype.onReceiveMessage = function (event) {
            var msg = this.ws.readUTF();
            var recvMsg = JSON.parse(msg);
            if (this.handlers[recvMsg.event]) {
                console.log("收到消息 = " + msg);
                this.handlers[recvMsg.event](msg);
            }
            else if (recvMsg.event == "socket_pong") {
                console.log("socket_pong");
                this.lastRecieveTime = this.appTimeStamp;
            }
            // var result: string = this.ws.readUTF();
            // var data:Object = JSON.parse(result);
            // console.log("-----------------收到消息"+recvMsg+"---",recvMsg);
        };
        WebSocketMgr.prototype.onSocketOpen = function (event) {
            this._isConnecting = false;
            this._connected = true;
            xlLib.Console.log("网络已连接" + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
        };
        WebSocketMgr.prototype.onSocketClose = function (event) {
            if (this._connected || this._isConnecting) {
                this._isConnecting = false;
                this._connected = false;
                xlLib.Console.log("网络已断开" + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
            }
        };
        return WebSocketMgr;
    }());
    xlLib.WebSocketMgr = WebSocketMgr;
    __reflect(WebSocketMgr.prototype, "xlLib.WebSocketMgr");
})(xlLib || (xlLib = {}));
