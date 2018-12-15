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
        WebSocketMgr.prototype.registerMsgHandler = function (msgid, callbackfuc, thisObject, isonce) {
            if (isonce === void 0) { isonce = false; }
            this.addEvent(msgid, callbackfuc, thisObject, isonce);
        };
        //**************************************************************************
        //移除网络事件处理函数
        //**************************************************************************
        WebSocketMgr.prototype.removeMsgHandler = function (msgid, callbackfuc, thisObject) {
            this.removeEvent(msgid, callbackfuc, thisObject);
        };
        /**
       * 监听事件
       * @type 事件类型
       * @listener 回调函数
       * @thisObject 回调执行对象
       */
        WebSocketMgr.prototype.addEvent = function (type, listener, thisObject, isonce) {
            if (isonce === void 0) { isonce = false; }
            var arr = this.handlers[type];
            if (arr == null) {
                arr = [];
                this.handlers[type] = arr;
            }
            else {
                var len = arr.length;
                for (var i = 0; i < len; i++) {
                    if (arr[i][0] == listener && arr[i][1] == thisObject) {
                        return;
                    }
                }
            }
            arr.push([listener, thisObject, isonce]);
        };
        /**
         * 移除事件
         * @type 事件类型
         * @listener 回调函数
         * @thisObject 回调执行对象
         */
        WebSocketMgr.prototype.removeEvent = function (type, listener, thisObject) {
            var arr = this.handlers[type];
            if (arr != null) {
                var len = arr.length;
                for (var i = len - 1; i >= 0; i--) {
                    if (arr[i][0] == listener && arr[i][1] == thisObject) {
                        arr.splice(i, 1);
                    }
                }
            }
            if (arr && arr.length == 0) {
                this.handlers[type] = null;
                delete this.handlers[type];
            }
        };
        /**
         * 发送数据给服务器
         * @param cmd {string} 命令
         * @param host {any} 数据
         **/
        WebSocketMgr.prototype.send = function (cmd, data, cb, thisArg, ecb, ishow) {
            if (ishow === void 0) { ishow = false; }
            this.sendMes(cmd, data, function (msg) {
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
        };
        /**
        * 发送数据给服务器
        * @param cmd {string} 命令
        * @param host {any} 数据
        **/
        WebSocketMgr.prototype.sendMes = function (cmd, data, cb, thisArg, ecb, ishow) {
            if (ishow === void 0) { ishow = false; }
            if (this.ws.connected) {
                if (data != null && (typeof (data) == "object")) {
                    data.command = cmd;
                    data = JSON.stringify(data);
                }
                this.registerMsgHandler(cmd, cb, thisArg, true);
                this.ws.writeUTF(data);
                this.ws.flush();
                console.log("开始发送消息---------------" + data);
            }
            else {
                xlLib.TipsUtils.showFloatWordTips("服务器已断开，请检查网络环境");
            }
        };
        WebSocketMgr.prototype.onReceiveMessage = function (event) {
            var msg = this.ws.readUTF();
            var recvMsg = JSON.parse(msg);
            if (this.handlers[recvMsg.command]) {
                console.log("收到消息 = " + msg);
                this.sendEvent(recvMsg.command, recvMsg);
            }
            // else if (recvMsg.command == "socket_pong") {
            //     console.log("socket_pong");
            //     this.lastRecieveTime = this.appTimeStamp;
            // }
            // var result: string = this.ws.readUTF();
            // var data:Object = JSON.parse(result);
            // console.log("-----------------收到消息"+recvMsg+"---",recvMsg);
        };
        /**
       * 发送事件
       * @type 事件类型
       * @args 携带数据
       */
        WebSocketMgr.prototype.sendEvent = function (type) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var arr = this.handlers[type];
            if (arr != null) {
                var len = arr.length;
                var listen = void 0;
                var thisObject = void 0;
                var isonce = void 0;
                for (var i = 0; i < len; i++) {
                    var msg = arr[i];
                    if (!msg) {
                        continue;
                    }
                    listen = msg[0];
                    if (!listen) {
                        continue;
                    }
                    thisObject = msg[1];
                    isonce = msg[2];
                    listen.apply(thisObject, args);
                    if (isonce) {
                        arr.splice(i, 1);
                    }
                }
            }
        };
        WebSocketMgr.prototype.onSocketOpen = function (event) {
            this._isConnecting = false;
            this._connected = true;
            EventUtil.dispatchEvent(EventConst.ON_SOCKET_SUC, {});
            xlLib.Console.log("网络已连接" + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
        };
        WebSocketMgr.prototype.onSocketClose = function (event) {
            if (this._connected || this._isConnecting) {
                this._isConnecting = false;
                this._connected = false;
                EventUtil.dispatchEvent(EventConst.ON_SOCKET_CLOSE, {});
                xlLib.Console.log("网络已断开" + "  time：" + xlLib.Utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss"));
            }
        };
        return WebSocketMgr;
    }());
    xlLib.WebSocketMgr = WebSocketMgr;
    __reflect(WebSocketMgr.prototype, "xlLib.WebSocketMgr");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=WebSocketMgr.js.map