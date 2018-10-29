var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var initOptions = (function () {
        function initOptions() {
            /**
             * 日志级别
             */
            this.logLevel = 7;
            /**
             * 大厅模式
             */
            this.lobbyMode = false;
            this.scaleMode = "fixedWidth";
        }
        return initOptions;
    }());
    xlLib.initOptions = initOptions;
    __reflect(initOptions.prototype, "xlLib.initOptions");
    /**
    * 初始化库
    * @method xlLib.init
    */
    function init(param) {
        if (param instanceof Object) {
            xlLib.Console.init(param.debug, param.logLevel);
            // if (xlLib["ResUtils"]) 
            //     xlLib["ResUtils"].init();
            // if (xlLib["ZQGameSdk"]) {
            //     xlLib["ZQGameSdk"].getCallStatus(Global.PhoneCallStatus, Global);
            // }
            if (xlLib["ScreenUtils"])
                xlLib["ScreenUtils"].init(param.scaleMode);
            Global.lobbyMode = param.lobbyMode;
            if (param.nativeStorage) {
                Global.nativeStorage = param.nativeStorage;
            }
            if (param.platId) {
                Global.platId = param.platId;
            }
            if (param.appId)
                Global.appId = param.appId;
        }
    }
    xlLib.init = init;
    var Global = (function () {
        function Global() {
        }
        Global.PhoneCallStatus = function (msg) {
            if (msg.data.callState == "callDisconnected") {
                if (egret.Capabilities.supportVersion < "3.2.6") {
                    setTimeout(function () {
                        if (xlLib["ZQGameSdk"]) {
                            xlLib["ZQGameSdk"].speakerActive();
                        }
                    }, 4000);
                }
            }
        };
        //新建事件
        Global.Event = function (type, obj, bubbles, cancelable) {
            if (obj === void 0) { obj = null; }
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            return new xlLib.ZqEvent(type, obj);
        };
        //派发事件
        Global.dispatchEvent = function (type, obj, bubbles, cancelable) {
            if (obj === void 0) { obj = null; }
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            var event = new xlLib.ZqEvent(type, obj, bubbles, cancelable);
            xlLib.ZqListener.getInstance().dispatchEvent(event);
        };
        Global.hasEventListener = function (type) {
            return xlLib.ZqListener.getInstance().hasEventListener(type);
        };
        //监听事件
        Global.addEventListener = function (type, listener, thisObject, useCapture, priority) {
            if (useCapture === void 0) { useCapture = false; }
            if (priority === void 0) { priority = 0; }
            xlLib.ZqListener.getInstance().addEventListener(type, listener, thisObject, useCapture, priority);
        };
        //移除监听事件
        Global.removeEventListener = function (type, listener, thisObject, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            xlLib.ZqListener.getInstance().removeEventListener(type, listener, thisObject, useCapture);
        };
        Object.defineProperty(Global, "lobbyMode", {
            /**
            * 是否大厅模式
            */
            get: function () {
                return this._lobbyMode;
            },
            set: function (b) {
                this._lobbyMode = b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Global, "resVersion", {
            /**
            * 资源版本
            */
            get: function () {
                var vs = "";
                if (xlLib.Global.isH5) {
                    var elm = document.querySelector('meta[name="res-version"]');
                    if (elm != null)
                        vs = elm.getAttribute('content');
                    if (vs != null && vs != "") {
                        vs = "_" + vs;
                    }
                }
                return vs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Global, "thmVersion", {
            /**
            * 皮肤版本
            */
            get: function () {
                var vs = "";
                if (xlLib.Global.isH5) {
                    var elm = document.querySelector('meta[name="thm-version"]');
                    if (elm != null)
                        vs = elm.getAttribute('content');
                    if (vs != null && vs != "") {
                        vs = "_" + vs;
                    }
                }
                return vs;
            },
            enumerable: true,
            configurable: true
        });
        Global.setPlatInfo = function (str, platId, gameId) {
            xlLib.Utils.setLocalStorage(gameId + "|" + platId + "|platToken", str);
        };
        Global.setPlatToken = function (str, platId, gameId) {
            Global.platId = platId;
            Global.gameId = gameId;
            xlLib.Utils.setLocalStorage(gameId + "|" + platId + "|platToken", str);
        };
        /**
         * 打开代理系统地址
         * @param agentUrl
         * @param code
         * @param uid
         */
        Global.openAgent = function (agentUrl, code, platid, gameid, model) {
            var url = agentUrl + "?code=" + code + "&platid=" + platid + "&gameid=" + gameid; // + "&zoneid=" + this.zoneId;
            if (xlLib["ZQGameSdk"]) {
                xlLib["ZQGameSdk"].openWeb(url, model);
            }
        };
        /**判断原生传上来的是否是ios客户端 */
        Global.isIos = function () {
            if (this.sys_type == "ios") {
                return true;
            }
            else {
                return false;
                ;
            }
        };
        return Global;
    }());
    Global.isActive = true;
    Global.debugLevel = 0;
    /*** 版本号*/
    Global.version = "v1.1.1_161128235600";
    /**
     * 素材宽度
     */
    Global.designWidth = 1280;
    /**
     * 素材高度
     */
    Global.designHeight = 720;
    Global.isRestarting = false;
    Global.gameId = 0;
    Global.lobbyGameId = 0;
    Global.is_sandbox = 0;
    /**底层传上来的类型 ios or android*/
    Global.sys_type = "";
    /**手机类型 */
    Global.mtype = "unknown";
    Global.appId = "wx0e52b1eba8f9fb14";
    Global.thirdPlatDir = "thirdPlatDir/";
    //全局字体颜色表--可以扩展
    Global.TextColors = {
        white: 0xFFFFFF,
        milkWhite: 0xfbf1af,
        grayWhite: 0xceb6a2,
        yellow: 0xffff00,
        lightYellow: 0xffd375,
        orangeYellow: 0xff9900,
        red: 0xf11300,
        green: 0x00e500,
        blue: 0x1a94d7,
        grayBlue: 0x2f5177,
        purple: 0xe938f2,
        pink: 0xFF3030,
        black: 0x2e2d2d,
        golden: 0xFFD700 //金色
    };
    /**是否是测试模式 */
    Global.isTestModul = false;
    Global.isInGame = false;
    /**
    * 苹果bundleId
    */
    Global.bundleId = "";
    Global._lobbyMode = false;
    /**
    * 是否缓存token
    */
    Global.isCacheToken = true;
    /**
    * 日志地址
    */
    Global.logUrl = "http://server.login.bwgame.com.cn:8020/logger/clientlog";
    Global.platId = 0;
    Global.zoneId = 0;
    xlLib.Global = Global;
    __reflect(Global.prototype, "xlLib.Global");
})(xlLib || (xlLib = {}));
var global;
var testh5 = function () {
    var b;
    if (this["navigator"]) {
        b = true;
    }
    else {
        b = false;
    }
    try {
        if (global) {
            b = false;
        }
    }
    catch (e) {
    }
    return b;
};
xlLib.Global.isH5 = testh5();
//# sourceMappingURL=Global.js.map