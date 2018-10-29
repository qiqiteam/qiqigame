var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var PomeloSocketMgr = (function () {
        function PomeloSocketMgr() {
            //跟真实的ip已建立起连接
            this.hasGetNewIp = false;
            this.pomelo = new Pomelo();
        }
        /**
        * WebSocket管理器单例
        */
        PomeloSocketMgr.getInstance = function () {
            if (!this._instance) {
                this._instance = new PomeloSocketMgr();
            }
            return this._instance;
        };
        PomeloSocketMgr.prototype.connect = function (host, port, data) {
            xlLib.Console.log("开始连接");
            this.loginServerData = data;
            var params = new Object();
            params.host = host;
            params.port = port;
            this.pomelo.init(params, false, this.onSocketSuc, this.onSocketFail, null, this);
        };
        PomeloSocketMgr.prototype.initPushMessage = function () {
            //服务器推送
            if (!GlobalData.isInitPush) {
                this.pomelo.on('server_push_message', function (response) {
                    xlLib.Console.log("服务器推包：" + JSON.stringify(response));
                    switch (response.route) {
                        case "OnUpdateLimitItem":
                            // GlobalFunction.initUpdateLimit(response.body);
                            break;
                        case "onGameLimitUpdated":
                            GlobalFunction.changeGameLimit(response.body);
                            break;
                        case "onGamePotsUpdated":
                            GlobalFunction.onGamePotsUpdated(response.body);
                            break;
                        case "onGameInformation":
                            GlobalFunction.updateTableData(response.body);
                            break;
                        case "onNewUserEnterGame":
                            GlobalFunction.onNewUserEnterGame(response.body);
                            break;
                        case "onUpdateUserBalance":
                            // GlobalFunction.onUpdateUserBalance(response.body);
                            break;
                        case "onUserBetOrderUpdate":
                            GlobalFunction.onUserBetOrderUpdate(response.body);
                            break;
                        case "onUserLeaveGame":
                            GlobalFunction.onUserLeaveGame(response.body);
                            break;
                        case "onGameStatusChange":
                            GlobalFunction.onGameStatusChange(response.body);
                            break;
                        case "onCheckout":
                            GlobalFunction.onCheckout(response.body);
                            break;
                        case "onCheckOutEx":
                            // GlobalFunction.onCheckOutEx(response.body);
                            break;
                        case "onBulletin":
                            GlobalFunction.onBulletin(response.body);
                            break;
                        case "onTimelyNotify":
                            GlobalFunction.onNotify(response.body);
                            break;
                        case "onGameLocateMessage":
                            GlobalFunction.onGameLocateMessage(response.body);
                            break;
                        case "onGameCardsJudge":
                            GlobalFunction.onGameCardsJudge(response.body);
                            break;
                        case "onGameCardsUpdated":
                            if (GlobalData.isShowCard) {
                                GlobalFunction.onGameCardsUpdated(response.body); //暂时不显示发牌
                            }
                            break;
                    }
                    GlobalData.isInitPush = true;
                });
            }
            this.pomelo.on('close', function (e) {
                // 连接关闭
                xlLib.Console.log("连接关闭");
                if (!GlobalData.isKick) {
                    GlobalFunction.onClose(e);
                }
            });
            this.pomelo.on('io-error', function (e) {
                // 连接关闭
                xlLib.Console.log("连接关闭");
                if (!GlobalData.isKick) {
                    GlobalFunction.onClose(e);
                }
            });
            this.pomelo.on("onKick", function (e) {
                // 被踢出
                xlLib.Console.log("被踢出");
                GlobalData.isKick = true;
                GlobalFunction.onKick(e);
            });
        };
        //请求服务request
        PomeloSocketMgr.prototype.request = function (route, msg, cb, thisArg, ecb, ishow) {
            if (ishow === void 0) { ishow = true; }
            xlLib.Console.log("请求接口：" + route + "--------" + JSON.stringify(msg));
            this.pomelo.request(route, msg, function (response) {
                xlLib.Console.log("接口数据：" + JSON.stringify(response));
                if (response.code == 200) {
                    cb.call(thisArg, response);
                }
                else {
                    if (ecb) {
                        ecb.call(thisArg, response);
                    }
                    if (ishow) {
                        xlLib.TipsUtils.showFloatWordTips(response.msg);
                    }
                }
            });
        };
        PomeloSocketMgr.prototype.requestGate = function () {
            var data = new Object;
            data.version = 0x02;
            this.request("gate.gateHandler.hello", data, this.getHellGateSucHandler, this, this.getHellGateFailHandler, false);
        };
        PomeloSocketMgr.prototype.requestToken = function (userName, passWord) {
            var data = new Object();
            data.userName = userName;
            data.passWord = passWord;
            this.request("connector.playerHandler.GetToken", data, this.getTokenHandler, this, this.getTokenErrorHandler);
        };
        PomeloSocketMgr.prototype.getTokenHandler = function (response) {
            EventUtil.dispatchEvent(EventConst.ON_GET_TOKEN_SUCCES, response);
            this.requestLogin(response.msg.token, this.loginServerData.userName);
        };
        PomeloSocketMgr.prototype.requestLogin = function (token, userName) {
            var data = new Object;
            data.userName = userName;
            data.token = token;
            if (xlLib.Utils.isAndroid) {
                data.deviceType = DeviceType.android;
            }
            else if (xlLib.Utils.isIOS) {
                data.deviceType = DeviceType.ios;
            }
            else {
                data.deviceType = DeviceType.win;
            }
            data.loginType = LoginType.normal;
            this.request("connector.playerHandler.LoginEx", data, this.loginSuccessFunc, this, this.loginFailFunc);
        };
        PomeloSocketMgr.prototype.loginSuccessFunc = function (response) {
            EventUtil.dispatchEvent(EventConst.ON_LOGIN_SUCCES, response);
            this.initPushMessage();
            xlLib.Console.log("用户登录成功");
        };
        PomeloSocketMgr.prototype.loginFailFunc = function (response) {
            EventUtil.dispatchEvent(EventConst.ON_LOGIN_FAIL, response);
            xlLib.Console.log("用户登录失败");
        };
        PomeloSocketMgr.prototype.getTokenErrorHandler = function (response) {
            EventUtil.dispatchEvent(EventConst.ON_GET_TOKEN_FAIL, response);
            this.pomelo.disconnect();
            // this.pomelo.off("server_push_message");
            // this.pomelo.off("close");
            // this.pomelo.off("onKick");
            // this.pomelo = null;
            GlobalData.isInitPush = false;
            // PomeloSocketMgr._instance = null;
            xlLib.Console.log("获取Token失败");
        };
        PomeloSocketMgr.prototype.onSocketSuc = function (response) {
            if (!this.hasGetNewIp) {
                this.requestGate();
            }
            else {
                // this.initPushMessage();
                this.requestToken(this.loginServerData.userName, this.loginServerData.passWord);
            }
            EventUtil.dispatchEvent(EventConst.ON_SOCKET_SUC, response);
            xlLib.Console.log("socket连接成功");
        };
        PomeloSocketMgr.prototype.onSocketFail = function (response) {
            EventUtil.dispatchEvent(EventConst.ON_SOCKET_FAIL, response);
            xlLib.Console.log("socket初始化失败");
        };
        PomeloSocketMgr.prototype.getHellGateSucHandler = function (response) {
            var params = new Object();
            params.host = response.msg.host;
            params.port = response.msg.port;
            Const.GAME_HOST = response.msg.host;
            Const.GAME_PORT = response.msg.port;
            this.pomelo.disconnect();
            this.hasGetNewIp = true;
            this.pomelo.init(params, false, this.onSocketSuc, this.onSocketFail, null, this);
        };
        PomeloSocketMgr.prototype.getHellGateFailHandler = function (response) {
            this.hasGetNewIp = false;
            if (response.msg && response.msg != "") {
                xlLib.TipsUtils.showFloatWordTips(response.msg);
            }
            else {
                xlLib.TipsUtils.showFloatWordTips("错误码：" + response.code);
            }
            // else {
            //     this.requestToken(this.loginServerData.userName, this.loginServerData.passWord);
            // }
        };
        //请求服务 notify  
        PomeloSocketMgr.prototype.notify = function (route, msg) {
            this.pomelo.notify(route, msg);
        };
        PomeloSocketMgr.prototype.disconnect = function () {
            this.pomelo.disconnect();
        };
        return PomeloSocketMgr;
    }());
    xlLib.PomeloSocketMgr = PomeloSocketMgr;
    __reflect(PomeloSocketMgr.prototype, "xlLib.PomeloSocketMgr");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=PomeloSocketMgr.js.map