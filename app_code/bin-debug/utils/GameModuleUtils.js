var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var GameModuleUtils = (function () {
        function GameModuleUtils() {
        }
        GameModuleUtils.checkJsIsExist = function (url) {
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
        };
        GameModuleUtils.isLobbyMode = function () {
            return egret.getQualifiedClassName(xlLib.SceneMgr.instance.currentScene) == "LobbyScene" ? true : false;
        };
        GameModuleUtils.LoadGame = function (url, docClassStr, params, loadingGameUI, callBack, obj) {
            if (xlLib.ScreenUtils.landscape) {
                this.defaultDirect = xlLib.ScreenUtils.landscape;
            }
            url = RES.getVersionController().getVirtualUrl(url);
            var loaded = function (id) {
                if (loadingGameUI)
                    params.preloadUI = loadingGameUI;
                var gameMain = GameModuleUtils.getGameStage(docClassStr, params);
                if (gameMain) {
                    if (loadingGameUI) {
                        gameMain.preLoadCallBack = function () {
                            xlLib.UIMgr.instance.hideLoading(loadingGameUI);
                            //(<LobbyScene>SceneMgr.instance.currentScene).uiLayer.visible = false;
                        };
                    }
                    if (callBack) {
                        callBack.call(obj, gameMain);
                    }
                    else {
                        xlLib.SoundMgr.instance.stopBgMusic();
                    }
                    //else {
                    //    egret.MainContext.instance.stage.addChild(gameMain);
                    //}
                    if (xlLib.Global.isInGame == false) {
                        xlLib.Global.isInGame = true;
                        xlLib.SceneMgr.instance.currentScene.addGame(gameMain);
                        try {
                            var game = {};
                            game.gameId = params.gameId;
                            game.time = new Date().getTime();
                            xlLib.Utils.setLocalStorage(CommonConsts.LOBBY_LASTGAME, JSON.stringify(game));
                        }
                        catch (e) {
                            xlLib.Console.error("设置游戏GameId失败");
                        }
                    }
                }
            };
            xlLib.UIMgr.instance.clearOldSceneUis();
            if (this.lbscene == null) {
                this.lbscene = xlLib.getQualifiedClassName(xlLib.SceneMgr.instance.currentScene);
            }
            if (this.checkJsIsExist(url)) {
                loaded();
            }
            else {
                if (loadingGameUI) {
                    xlLib.UIMgr.instance.showLoadingTimeout(loadingGameUI, "", 0);
                }
                this.LoadGameJs(url, loaded);
            }
        };
        GameModuleUtils.LoadLobby = function (url, docClassStr, params, loadingGameUI, callBack, obj) {
            if (url == null) {
                url = "resource/main.min.js";
            }
            url = RES.getVersionController().getVirtualUrl(url);
            if (docClassStr == null) {
                docClassStr = "AppMain";
            }
            var loaded = function (id) {
                var LbCls = egret.getDefinitionByName(docClassStr);
                if (LbCls) {
                    xlLib.SceneMgr.instance.changeScene(LbCls, params);
                }
            };
            if (this.checkJsIsExist(url)) {
                loaded();
            }
            else {
                if (loadingGameUI) {
                    xlLib.UIMgr.instance.showLoadingTimeout(loadingGameUI, "", 0);
                }
                this.LoadGameJs(url, loaded);
            }
        };
        GameModuleUtils.ExitGame = function () {
            // if (Global.lobbyMode == true) {
            xlLib.Global.gameId = xlLib.Global.lobbyGameId;
            xlLib.Global.isInGame = false;
            // xlLib.NetMgr.http = null;
            // xlLib.NetMgr.closeSocket();
            //xlLib.NetMgr.logout();
            xlLib.SoundMgr.instance.stopSounds();
            xlLib.SoundMgr.instance.stopBgMusic();
            if (xlLib.ScreenUtils.landscape && this.defaultDirect != xlLib.ScreenUtils.landscape) {
                //if (this.defaultDirect == egret.OrientationMode.LANDSCAPE || this.defaultDirect == egret.OrientationMode.LANDSCAPE_FLIPPED) {
                //    ScreenUtils.landscape = true;
                //} else {
                //    ScreenUtils.landscape = false;
                //}
                xlLib.ScreenUtils.landscape = !xlLib.ScreenUtils.landscape;
            }
            if (xlLib.SceneMgr.instance.currentScene["removeGame"]) {
                xlLib.SceneMgr.instance.currentScene.removeGame();
                xlLib.SceneMgr.instance.currentScene.uiLayer.visible = true;
            }
            else {
                var sc = xlLib.getDefinitionByName(this.lbscene);
                xlLib.SceneMgr.instance.changeScene(sc);
            }
            xlLib.delDefinitionByName("Cmd");
            this.removeGameJs();
            xlLib.UIMgr.instance.clearOldSceneUis();
            xlLib.Utils.setLocalStorage(CommonConsts.LOBBY_LASTGAME, null);
            xlLib.Global.dispatchEvent(xlLib.ZqEvent.UPDATE_USER_INFO);
            xlLib.Global.dispatchEvent(xlLib.ZqEvent.CHECK_VERSION_UPDATE);
            // xlLib.DebugView.Instance.show();
            // }
        };
        GameModuleUtils.reloadGame = function (url, docClassStr, params, loadingGameUI, callBack, obj) {
            if (xlLib.Global.lobbyMode == true) {
                xlLib.Global.gameId = xlLib.Global.lobbyGameId;
                xlLib.Global.isInGame = false;
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
                xlLib.SoundMgr.instance.stopSounds();
                xlLib.SoundMgr.instance.stopBgMusic();
                if (xlLib.SceneMgr.instance.currentScene["removeGame"]) {
                    xlLib.SceneMgr.instance.currentScene.removeGame();
                    xlLib.SceneMgr.instance.currentScene.uiLayer.visible = true;
                }
                else {
                    //var sc = new xlLib.GameScene()
                    xlLib.SceneMgr.instance.changeScene(xlLib.LobbyScene);
                }
                xlLib.delDefinitionByName("Cmd");
                this.removeGameJs();
                xlLib.UIMgr.instance.clearOldSceneUis();
                xlLib.Utils.setLocalStorage(CommonConsts.LOBBY_LASTGAME, null);
                xlLib.Global.dispatchEvent(xlLib.ZqEvent.UPDATE_USER_INFO);
                xlLib.Global.dispatchEvent(xlLib.ZqEvent.CHECK_VERSION_UPDATE);
                this.LoadGame(url, docClassStr, params, loadingGameUI, callBack, obj);
            }
        };
        Object.defineProperty(GameModuleUtils, "lastGame", {
            get: function () {
                var gameId;
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
            },
            enumerable: true,
            configurable: true
        });
        GameModuleUtils.LoadGameJs = function (url, callBack, obj) {
            //if (!this.checkJsIsExist(url)) {
            // BrowersUtils.LoadJS("lobbygame", url, callBack, obj);
            //}
        };
        GameModuleUtils.getGameStage = function (docClassStr, params) {
            var clazz = egret.getDefinitionByName(docClassStr);
            if (clazz) {
                return new clazz(params);
            }
        };
        GameModuleUtils.removeGameJs = function () {
            if (xlLib.Global.isH5 == true) {
                var scriptTag = document.getElementById("lobbygame");
                var oHead = document.getElementsByTagName('HEAD').item(0);
                if (scriptTag)
                    oHead.removeChild(scriptTag);
            }
        };
        GameModuleUtils.egretLoaded = function () {
            var script = document.getElementById("loading");
            document.body.removeChild(script);
        };
        return GameModuleUtils;
    }());
    xlLib.GameModuleUtils = GameModuleUtils;
    __reflect(GameModuleUtils.prototype, "xlLib.GameModuleUtils");
})(xlLib || (xlLib = {}));
