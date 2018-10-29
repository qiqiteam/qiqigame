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
        WebSocketMgr.prototype.connect = function (host, port) {
            if (!this._connected && !this._isConnecting) {
                this._host = host;
                this._port = port;
                this.resetWebSocket();
                this._isConnecting = true;
                this._connected = false;
                // var protocol = window.location.toString().indexOf("https") != -1 ? "wss://" : "ws://";
                var protocol = "ws://";
                this.ws.connectByUrl(protocol + host + ":" + port);
                xlLib.Console.log("连接: " + host + port + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
            }
        };
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
        };
        /**
        * 发送数据给服务器
        * @param cmd {string} 命令
        * @param host {any} 数据
        **/
        WebSocketMgr.prototype.send = function (cmd, data) {
            if (this.ws.connected) {
            }
            else {
                xlLib.TipsUtils.showFloatWordTips("服务器已断开，请检查网络环境");
            }
        };
        WebSocketMgr.prototype.onReceiveMessage = function (event) {
            var result = this.ws.readUTF();
            var data = JSON.parse(result);
            console.log("-----------------收到消息" + data + "---", data);
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
//# sourceMappingURL=WebSocketMgr.js.map