var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var AndroidSDK = (function () {
        function AndroidSDK() {
        }
        AndroidSDK.init = function (call, thisObj) {
            egret.ExternalInterface.addCallback(AndroidSDK.SENDTOJS, function (message) {
                AndroidSDK.onNativeMessage(message);
            });
        };
        /**
         * 设置rtmp流
         */
        AndroidSDK.setRTMPUrl = function (mainUrl, subMainUrl, hallUrl) {
            var data = new YHVideoObj();
            data.cmd = AndroidSDK.livePlayer;
            data.main = mainUrl;
            data.sub = subMainUrl;
            data.hall = hallUrl;
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        };
        AndroidSDK.showVideo = function () {
            var data = new YHGameObj();
            data.cmd = AndroidSDK.showPlayer;
            data.data = "xixi";
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        };
        /**
         * 设置player不可见
         */
        AndroidSDK.setPlayerNull = function () {
            var data = new YHGameObj();
            data.cmd = AndroidSDK.clearPlayer;
            data.data = "xixi";
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        };
        /**
         * 跳转url
         */
        AndroidSDK.setGotoURL = function (url) {
            var data = new YHGameObj();
            data.cmd = AndroidSDK.gotoURL;
            data.data = url;
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        };
        /**
         * 设置游戏状态
         */
        AndroidSDK.setGameStatus = function (ingame) {
            var data = new YHGameObj();
            data.cmd = AndroidSDK.gameStatus;
            if (ingame) {
                data.data = "ingame";
            }
            else {
                data.data = "outgame";
            }
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        };
        AndroidSDK.onNativeMessage = function (value) {
            var msg = JSON.parse(value);
            switch (msg.cmd) {
                case "netinfo":
                    var hasNet = msg.value;
                    GlobalData.hasNetwork = hasNet;
                    // if (GlobalData.isInLoginView) {
                    //     return;
                    // }
                    // if (!hasNet) {
                    //     xlLib.UIMgr.instance.hideLoading(TipsLoading);
                    //     ReconnectManager.getIntance().clear();
                    //     let alertDialog: AlertDialog = xlLib.UIMgr.instance.showUI(AlertDialog);
                    //     alertDialog.showAlertDialog("网络原因重连失败，请重新登录", () => {
                    //         xlLib.SceneMgr.instance.changeScene(Lobby);
                    //         GlobalData.isOutLogin = true;
                    //         GlobalData.clearData();
                    //         xlLib.SceneMgr.instance.currentScene.uiLayer.addChild(new LoginView());
                    //     }, this);
                    // }
                    break;
            }
        };
        return AndroidSDK;
    }());
    AndroidSDK.SENDTONATIVE = "sendToNative";
    AndroidSDK.SENDTOJS = "sendToJS";
    AndroidSDK.livePlayer = "livePlayer";
    AndroidSDK.clearPlayer = "clearPlayer";
    AndroidSDK.showPlayer = "showPlayer";
    AndroidSDK.gotoURL = "gotoURL";
    AndroidSDK.gameStatus = "gameStatus";
    xlLib.AndroidSDK = AndroidSDK;
    __reflect(AndroidSDK.prototype, "xlLib.AndroidSDK");
    var YHGameObj = (function () {
        function YHGameObj() {
        }
        return YHGameObj;
    }());
    xlLib.YHGameObj = YHGameObj;
    __reflect(YHGameObj.prototype, "xlLib.YHGameObj");
    var YHVideoObj = (function () {
        function YHVideoObj() {
        }
        return YHVideoObj;
    }());
    xlLib.YHVideoObj = YHVideoObj;
    __reflect(YHVideoObj.prototype, "xlLib.YHVideoObj");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=AndroidSDK.js.map