module xlLib {
    export class AndroidSDK {
        public static SENDTONATIVE: string = "sendToNative";
        public static SENDTOJS: string = "sendToJS";

        private static livePlayer: string = "livePlayer";
        private static clearPlayer: string = "clearPlayer";
        private static showPlayer: string = "showPlayer";
        private static gotoURL: string = "gotoURL";
        private static gameStatus: string = "gameStatus";

        public constructor() {

        }

        public static init(call?: Function, thisObj?: any): void {
            egret.ExternalInterface.addCallback(AndroidSDK.SENDTOJS, function (message: string) {
                AndroidSDK.onNativeMessage(message);
            });
        }

        /**
         * 设置rtmp流
         */
        public static setRTMPUrl(mainUrl: string, subMainUrl: string, hallUrl: string): void {
            var data: YHVideoObj = new YHVideoObj();
            data.cmd = AndroidSDK.livePlayer;
            data.main = mainUrl;
            data.sub = subMainUrl;
            data.hall = hallUrl;
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        }


        public static showVideo(): void {
            var data: YHGameObj = new YHGameObj();
            data.cmd = AndroidSDK.showPlayer;
            data.data = "xixi";
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        }

        /**
         * 设置player不可见
         */
        public static setPlayerNull(): void {
            var data: YHGameObj = new YHGameObj();
            data.cmd = AndroidSDK.clearPlayer;
            data.data = "xixi";
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        }

        /**
         * 跳转url
         */
        public static setGotoURL(url: string): void {
            var data: YHGameObj = new YHGameObj();
            data.cmd = AndroidSDK.gotoURL;
            data.data = url;
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        }

        /**
         * 设置游戏状态
         */
        public static setGameStatus(ingame: boolean): void {
            var data: YHGameObj = new YHGameObj();
            data.cmd = AndroidSDK.gameStatus;
            if (ingame) {
                data.data = "ingame";
            } else {
                data.data = "outgame";
            }
            egret.ExternalInterface.call(AndroidSDK.SENDTONATIVE, JSON.stringify(data));
        }

        private static onNativeMessage(value: any): void {
            var msg: any = JSON.parse(value);
            switch (msg.cmd) {
                case "netinfo": //网络信息
                    let hasNet: boolean = msg.value;
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
        }
    }

    export class YHGameObj {
        cmd: string;
        data: any;
    }

    export class YHVideoObj {
        cmd: string;
        main: string;
        sub: string;
        hall: string;
    }
}