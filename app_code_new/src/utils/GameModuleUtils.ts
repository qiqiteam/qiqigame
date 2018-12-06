module xlLib {

    export class GameModuleUtils {

        public static checkJsIsExist(url: string): boolean {
            if (xlLib.Global.isH5 == true) {
                document.body.setAttribute("style", "");
                var scripts = document.getElementsByTagName("script");
                //遍历查询页面中已存在有想要加载的js文件
                for (var i = 0; i < scripts.length; i++) {
                    if (scripts[i].src.indexOf(url) > -1) {
                        return true;
                    }
                }
            }

            return false;
        }

        public static isLobbyMode(): boolean {
            return egret.getQualifiedClassName(SceneMgr.instance.currentScene) == "LobbyScene" ? true : false;
        }

        public static lbscene: any;

        public static LoadGame(url: string, docClassStr: string, params?: IGameConfig, loadingGameUI?: any, callBack?: Function, obj?: any): void {
            if (xlLib.ScreenUtils.landscape) {
                this.defaultDirect = xlLib.ScreenUtils.landscape;
            }
            url = RES.getVersionController().getVirtualUrl(url);
            var loaded: Function = function (id?: any) {
                if (loadingGameUI)
                    params.preloadUI = loadingGameUI;
                var gameMain: any = GameModuleUtils.getGameStage(docClassStr, params);
                if (gameMain) {
                    if (loadingGameUI) {
                        gameMain.preLoadCallBack = function () {
                            UIMgr.instance.hideLoading(loadingGameUI);
                            //(<LobbyScene>SceneMgr.instance.currentScene).uiLayer.visible = false;
                        }
                    }
                    if (callBack) {
                        callBack.call(obj, gameMain);
                    } else {
                        SoundMgr.instance.stopBgMusic();
                    }
                    //else {
                    //    egret.MainContext.instance.stage.addChild(gameMain);
                    //}
                    if (Global.isInGame == false) {
                        Global.isInGame = true;
                        (<LobbyScene>SceneMgr.instance.currentScene).addGame(gameMain);
                        try {
                            var game: any = {};
                            game.gameId = params.gameId;
                            game.time = new Date().getTime();
                            Utils.setLocalStorage(CommonConsts.LOBBY_LASTGAME, JSON.stringify(game))
                        } catch (e) {
                            xlLib.Console.error("设置游戏GameId失败");
                        }
                    }
                    //SceneMgr.instance.changeScene(egret.getDefinitionByName(docClassStr), params, true);
                    //var gameMain: any = UIMgr.instance.showUI(egret.getDefinitionByName(docClassStr), params);
                    //if (loadingGameUI) {
                    //    gameMain.preLoadCallBack = function () {
                    //        UIMgr.instance.hideLoading(loadingGameUI);
                    //    }
                    //}
                    //if (callBack) {
                    //    callBack.call(obj, gameMain);
                    //}
                }

            }
            UIMgr.instance.clearOldSceneUis();
            if (this.lbscene == null) {
                this.lbscene = xlLib.getQualifiedClassName(SceneMgr.instance.currentScene);
            }

            if (this.checkJsIsExist(url)) {
                loaded();
            } else {
                if (loadingGameUI) {
                    UIMgr.instance.showLoadingTimeout(loadingGameUI, "", 0);
                }
                this.LoadGameJs(url, loaded);
            }
        }

        public static LoadLobby(url?: string, docClassStr?: string, params?: any, loadingGameUI?: any, callBack?: Function, obj?: any): void {
            if (url == null) {
                url = "resource/main.min.js";
            }
            url = RES.getVersionController().getVirtualUrl(url);
            if (docClassStr == null) {
                docClassStr = "AppMain";
            }
            var loaded: Function = function (id?: any) {
                var LbCls: any = egret.getDefinitionByName(docClassStr);
                if (LbCls) {
                    SceneMgr.instance.changeScene(LbCls, params);
                }

            }
            if (this.checkJsIsExist(url)) {
                loaded();
            } else {
                if (loadingGameUI) {
                    UIMgr.instance.showLoadingTimeout(loadingGameUI, "", 0);
                }
                this.LoadGameJs(url, loaded);
            }
        }

        public static ExitGame(): void {
            // if (Global.lobbyMode == true) {
                Global.gameId = Global.lobbyGameId;
                Global.isInGame = false;
                // xlLib.NetMgr.http = null;
                // xlLib.NetMgr.closeSocket();


                //xlLib.NetMgr.logout();
                SoundMgr.instance.stopSounds();
                SoundMgr.instance.stopBgMusic();
                if (xlLib.ScreenUtils.landscape && this.defaultDirect != xlLib.ScreenUtils.landscape) {
                    //if (this.defaultDirect == egret.OrientationMode.LANDSCAPE || this.defaultDirect == egret.OrientationMode.LANDSCAPE_FLIPPED) {
                    //    ScreenUtils.landscape = true;
                    //} else {
                    //    ScreenUtils.landscape = false;
                    //}
                    xlLib.ScreenUtils.landscape = !xlLib.ScreenUtils.landscape;
                }
                if ((<LobbyScene>SceneMgr.instance.currentScene)["removeGame"]) {
                    (<LobbyScene>SceneMgr.instance.currentScene).removeGame();
                    (<LobbyScene>SceneMgr.instance.currentScene).uiLayer.visible = true;
                } else {
                    var sc = xlLib.getDefinitionByName(this.lbscene);
                    SceneMgr.instance.changeScene(sc);
                }
                xlLib.delDefinitionByName("Cmd");
                this.removeGameJs();
                UIMgr.instance.clearOldSceneUis();
                Utils.setLocalStorage(CommonConsts.LOBBY_LASTGAME, null);
                Global.dispatchEvent(ZqEvent.UPDATE_USER_INFO);
                Global.dispatchEvent(ZqEvent.CHECK_VERSION_UPDATE);
                // xlLib.DebugView.Instance.show();
            // }
        }

        public static reloadGame(url: string, docClassStr: string, params?: IGameConfig, loadingGameUI?: any, callBack?: Function, obj?: any): void {
            if (Global.lobbyMode == true) {
                Global.gameId = Global.lobbyGameId;
                Global.isInGame = false;
                // xlLib.NetMgr.http = null;
                // xlLib.NetMgr.closeSocket();
                if (xlLib.ScreenUtils.landscape && this.defaultDirect != xlLib.ScreenUtils.landscape) {
                    //if (this.defaultDirect == egret.OrientationMode.LANDSCAPE || this.defaultDirect == egret.OrientationMode.LANDSCAPE_FLIPPED) {
                    //    ScreenUtils.landscape = true;
                    //} else {
                    //    ScreenUtils.landscape = false;
                    //}
                    xlLib.ScreenUtils.landscape = !xlLib.ScreenUtils.landscape;
                }
                //this.lbscene = xlLib.getQualifiedClassName(SceneMgr.instance.currentScene);
                //xlLib.NetMgr.logout();
                SoundMgr.instance.stopSounds();
                SoundMgr.instance.stopBgMusic();
                if ((<LobbyScene>SceneMgr.instance.currentScene)["removeGame"]) {
                    (<LobbyScene>SceneMgr.instance.currentScene).removeGame();
                    (<LobbyScene>SceneMgr.instance.currentScene).uiLayer.visible = true;
                } else {
                    //var sc = new xlLib.GameScene()
                    SceneMgr.instance.changeScene(LobbyScene);
                }
                xlLib.delDefinitionByName("Cmd");
                this.removeGameJs();
                UIMgr.instance.clearOldSceneUis();
                Utils.setLocalStorage(CommonConsts.LOBBY_LASTGAME, null);
                Global.dispatchEvent(ZqEvent.UPDATE_USER_INFO);
                Global.dispatchEvent(ZqEvent.CHECK_VERSION_UPDATE);
                this.LoadGame(url, docClassStr, params, loadingGameUI, callBack, obj);
            }
        }

        public static defaultDirect: boolean;

        public static get lastGame(): number {
            var gameId: number;
            //var game: any = JSON.parse(Utils.getLocalStorage(CommonConsts.LOBBY_LASTGAME));
            //if (game == null || game == undefined) {
            gameId = 0;
            //} else if (game.time) {
            //    var now: number = new Date().getTime();
            //    if (now - Number(game.time) >= 60000) {
            //        gameId = 0;
            //    } else {
            //        gameId = game.gameId;
            //    }
            //} else {
            //    gameId = 0;
            //    Utils.setLocalStorage(CommonConsts.LOBBY_LASTGAME, null)
            //}
            return gameId;
        }

        private static LoadGameJs(url: string, callBack?: Function, obj?: any): void {
            //if (!this.checkJsIsExist(url)) {
            // BrowersUtils.LoadJS("lobbygame", url, callBack, obj);
            //}
        }

        public static getGameStage(docClassStr, params?: IGameConfig): any {
            var clazz = egret.getDefinitionByName(docClassStr);
            if (clazz) {
                return new clazz(params);
            }
        }

        public static removeGameJs() {
            if (xlLib.Global.isH5 == true) {
                var scriptTag = document.getElementById("lobbygame");
                var oHead = document.getElementsByTagName('HEAD').item(0);
                if (scriptTag) oHead.removeChild(scriptTag);
            }
        }

        public static egretLoaded() {
            var script = document.getElementById("loading");
            document.body.removeChild(script);
        }
    }
}
