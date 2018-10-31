var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var IosSDK = (function () {
        function IosSDK() {
        }
        IosSDK.init = function (call, thisObj) {
            egret.ExternalInterface.addCallback(IosSDK.SENDTOJS, function (message) {
                IosSDK.onNativeMessage(message);
            });
        };
        /**
          * 设置rtmp流
          */
        IosSDK.setRTMPUrl = function (mainUrl, subMainUrl, hallUrl) {
            var data = new xlLib.YHVideoObj();
            data.cmd = IosSDK.livePlayer;
            data.main = mainUrl;
            data.sub = subMainUrl;
            data.hall = hallUrl;
            egret.ExternalInterface.call(xlLib.AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        };
        IosSDK.showVideo = function () {
            var data = new xlLib.YHGameObj();
            data.cmd = IosSDK.showPlayer;
            data.data = "xixi";
            egret.ExternalInterface.call(xlLib.AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        };
        /**
         * 设置player不可见
         */
        IosSDK.setPlayerNull = function () {
            var data = new xlLib.YHGameObj();
            data.cmd = IosSDK.clearPlayer;
            data.data = "xixi";
            egret.ExternalInterface.call(IosSDK.SENDTONATIVE, JSON.stringify(data));
        };
        /**
         * 跳转url
         */
        IosSDK.setGotoURL = function (url) {
            var data = new xlLib.YHGameObj();
            data.cmd = IosSDK.gotoURL;
            data.data = url;
            egret.ExternalInterface.call(IosSDK.SENDTONATIVE, JSON.stringify(data));
        };
        /**
         * 设置游戏状态
         */
        IosSDK.setGameStatus = function (ingame) {
            var data = new xlLib.YHGameObj();
            data.cmd = IosSDK.gameStatus;
            if (ingame) {
                data.data = "ingame";
            }
            else {
                data.data = "outgame";
            }
            egret.ExternalInterface.call(IosSDK.SENDTONATIVE, JSON.stringify(data));
        };
        IosSDK.onNativeMessage = function (value) {
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
        return IosSDK;
    }());
    IosSDK.SENDTONATIVE = "sendToNative";
    IosSDK.SENDTOJS = "sendToJS";
    IosSDK.livePlayer = "livePlayer";
    IosSDK.clearPlayer = "clearPlayer";
    IosSDK.showPlayer = "showPlayer";
    IosSDK.gotoURL = "gotoURL";
    IosSDK.gameStatus = "gameStatus";
    xlLib.IosSDK = IosSDK;
    __reflect(IosSDK.prototype, "xlLib.IosSDK");
})(xlLib || (xlLib = {}));
