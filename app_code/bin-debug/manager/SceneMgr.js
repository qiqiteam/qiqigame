var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    /**
    * 场景管理（单例）
    */
    var SceneMgr = (function () {
        function SceneMgr() {
            /**
             * 当前场景
             */
            this._currentScene = null;
            /**
             * 上一个场景
             */
            this._lastScene = null;
            /**
             * 抛出场景状态事件
             * iType: 事件类型
             * iData: 需要传递的数据
             */
            //public dispatchSceneStateEvent(iType: string, iData: any): void {
            //    var evt: SceneStateEvent = new SceneStateEvent(SceneStateEvent.EVENT_SCENE);
            //    var data = new EventData();
            //    data.iType = iType;
            //    data.iData = iData;
            //    evt.data = data;
            //    this.dispatchEvent(evt);
            //}
        }
        Object.defineProperty(SceneMgr, "instance", {
            get: function () {
                if (this._self == null) {
                    this._self = new SceneMgr();
                }
                return this._self;
            },
            enumerable: true,
            configurable: true
        });
        SceneMgr.prototype.init = function (scene) {
            if (this._currentScene == null)
                this._currentScene = scene;
        };
        /**
         * 改变当前场景
         */
        SceneMgr.prototype.changeScene = function (sceneClass, params, bMode) {
            //if (params == null) {
            //    params = { "addToStage": true }
            //}
            ////这里待优化
            //if (bMode) {
            //    var currentGameScene: any = (<LobbyScene>this._currentScene).currentGame;
            //    if (currentGameScene != null) {
            //        //this._lastScene = this._currentScene;
            //        if (currentGameScene.parent) {
            //            currentGameScene.parent.removeChild(currentGameScene);
            //        }
            //        currentGameScene.destroy();
            //    }
            //    currentGameScene = new sceneClass(params);
            //    if (params.hasOwnProperty("addToStage") == true) {
            //        (<LobbyScene>this._currentScene).gameLayer.addChild(currentGameScene);
            //    }
            //    return currentGameScene;
            //}
            //if (egret.getQualifiedClassName(sceneClass) == "LobbyScene" || (egret.getQualifiedClassName(this._currentScene) != "LobbyScene")) {
            var self = this;
            var onAddToStage = function (e) {
                e.currentTarget.removeEventListener(egret.Event.ADDED_TO_STAGE, onAddToStage, this);
                if (self._lastScene) {
                    self._lastScene.destroy();
                    //self._lastScene.removeChildren();
                    self._lastScene = null;
                }
            };
            if (bMode && xlLib.Global.isInGame) {
                var currentGameScene = this._currentScene.currentGame;
                if (currentGameScene != null) {
                    //this._lastScene = this._currentScene;
                    if (currentGameScene.parent) {
                        currentGameScene.parent.removeChild(currentGameScene);
                    }
                    currentGameScene.destroy();
                }
                currentGameScene = new sceneClass(params);
                if (currentGameScene.width > xlLib.Global.designWidth || currentGameScene.height > xlLib.Global.designHeight) {
                    currentGameScene.scaleX = xlLib.Global.designWidth / currentGameScene.width;
                    currentGameScene.scaleY = xlLib.Global.designHeight / currentGameScene.height;
                }
                this._currentScene.currentGame = currentGameScene;
                //if (params.hasOwnProperty("addToStage") == true) {
                this._currentScene.gameLayer.addChild(currentGameScene);
                //}
                xlLib.PopUpMgr.init();
                return currentGameScene;
            }
            else {
                //if (Global.isLobbyMode) {
                var newScene = new sceneClass(params);
                //xuyong 临时修改
                if (newScene.width > newScene.height) {
                    if (newScene.width > xlLib.Global.designHeight && newScene.height > xlLib.Global.designWidth) {
                        newScene.scaleX = 1136 / 1280;
                        newScene.scaleY = 640 / 720;
                    }
                }
                else {
                    if (newScene.width > xlLib.Global.designWidth && newScene.height > xlLib.Global.designHeight) {
                        newScene.scaleX = 640 / 720;
                        newScene.scaleY = 1136 / 1280;
                    }
                }
                // if (newScene.width > Global.designWidth && newScene.height > Global.designHeight) {
                //     if(newScene.width>newScene.height){
                //         newScene.scaleX = Global.designWidth / newScene.width;
                //         newScene.scaleY = Global.designHeight / newScene.height;
                //     }else{
                //         newScene.scaleX = Global.designHeight / newScene.width;
                //         newScene.scaleY = Global.designWidth / newScene.height;
                //     } 
                // }
                if (this._currentScene != null) {
                    this._lastScene = this._currentScene;
                    //if (this._lastScene.parent) {
                    //    this._lastScene.parent.removeChild(this._lastScene);
                    //}
                    //this._lastScene.removeChildren();
                    xlLib.DisplayUtils.removeFromParent(this._lastScene);
                }
                this._currentScene = newScene;
                //if (params.hasOwnProperty("addToStage") == true) {
                this._currentScene.addEventListener(egret.Event.ADDED_TO_STAGE, onAddToStage, this);
                egret.MainContext.instance.stage.addChild(this._currentScene);
                // DebugView.Instance.check();
                //}
                xlLib.PopUpMgr.init();
                //this._lastScene.destroy();
                return this._currentScene;
            }
            // if (Global.isInGame == false){
            // } else {
            // }
        };
        Object.defineProperty(SceneMgr.prototype, "currentScene", {
            /**
             * 获取当前场景
             */
            get: function () {
                return this._currentScene;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 新的场景加载完成后关闭上一个场景
         */
        SceneMgr.prototype.lastSceneLeave = function () {
            if (this._lastScene != null) {
                if (this._lastScene.parent) {
                    this._lastScene.parent.removeChild(this._lastScene);
                }
                this._lastScene.destroy();
                this._lastScene = null;
            }
        };
        return SceneMgr;
    }());
    SceneMgr._self = null;
    xlLib.SceneMgr = SceneMgr;
    __reflect(SceneMgr.prototype, "xlLib.SceneMgr");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=SceneMgr.js.map