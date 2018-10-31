var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var xlLib;
(function (xlLib) {
    var GameDoc = (function (_super) {
        __extends(GameDoc, _super);
        function GameDoc(params) {
            var _this = _super.call(this) || this;
            _this.uiLayer = new egret.DisplayObjectContainer();
            _this.topLayer = new egret.DisplayObjectContainer();
            _this.effectLayer = new egret.DisplayObjectContainer();
            _this.mainUILayer = new egret.DisplayObjectContainer();
            _this.maskLayer = new egret.DisplayObjectContainer();
            _this.tipsLayer = new egret.DisplayObjectContainer();
            _this.thmLoaded = false;
            _this.resLoaded = false;
            if (params)
                _this._gameInfo = params;
            xlLib.SceneMgr.instance.init(_this);
            _this.initBaseLayers();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        //初始化场景类
        GameDoc.prototype.initBaseLayers = function () {
            this.addChild(this.uiLayer);
            this.addChild(this.topLayer);
            this.addChild(this.effectLayer);
            this.addChild(this.mainUILayer);
            this.addChild(this.maskLayer);
            this.addChild(this.tipsLayer);
            this.awake();
            //if(this._gameInfo.gameId == 150 && this._gameInfo.defaultOrientation != egret.OrientationMode.LANDSCAPE){
            //    this.scaleX = 1136 / 1280;
            //    this.scaleY = 640 / 720;
            //}
        };
        /**
         * 场景构造完成
         */
        GameDoc.prototype.awake = function () {
        };
        GameDoc.prototype.onAddToStage = function (e) {
            if (e === void 0) { e = null; }
            //初始化Resource资源加载库
            //initiate Resource loading library
            if (this._gameInfo) {
                this.preLoadAndInit();
            }
            else {
                this.start(e);
            }
        };
        GameDoc.prototype.preLoadAndInit = function () {
            if (this._gameInfo.gameTheme && this._gameInfo.gameTheme != "") {
                var theme = new eui.Theme(this._gameInfo.gameTheme, this.stage);
                theme.addEventListener(eui.UIEvent.COMPLETE, this.loadedthm, this);
            }
            else {
                this.thmLoaded = true;
            }
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.loadedCfg, this);
            RES.loadConfig(this._gameInfo.gameResConfigUrl, this._gameInfo.gameResRoot);
        };
        //private onUniThemeComplete(): void {
        //    this.loadCfg();
        //}
        GameDoc.prototype.loadedthm = function (event) {
            this.thmLoaded = true;
            this.cfgComplete();
        };
        GameDoc.prototype.loadedCfg = function (event) {
            this.resLoaded = true;
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.loadedCfg, this);
            this.cfgComplete();
        };
        GameDoc.prototype.start = function (e) {
            if (e === void 0) { e = null; }
        };
        /**
         * 配置文件加载完成,开始预加载preload资源组。
         * configuration file loading is completed, start to pre-load the preload resource group
         */
        GameDoc.prototype.cfgComplete = function () {
            if (this.thmLoaded == true && this.resLoaded == true) {
                if (this._gameInfo.preLoad && this._gameInfo.preLoad != "")
                    xlLib.ResLoadMgr.instance.load(this._gameInfo.preLoad, this.onResComplete, this.onResError, this, this._gameInfo.preloadUI);
                else {
                    this.preLoadEnd();
                    if (this["preLoadCallBack"])
                        this["preLoadCallBack"]();
                }
            }
        };
        /**
         * preload资源组加载完成
         * Preload resource group is loaded
         */
        GameDoc.prototype.onResComplete = function (event) {
            if (event.groupName == this._gameInfo.preLoad) {
                //this.stage.removeChild(this.loadingView);//通知大厅关闭Loading
                this.preLoadEnd();
                if (this["preLoadCallBack"])
                    this["preLoadCallBack"]();
            }
        };
        GameDoc.prototype.preLoadEnd = function () {
        };
        GameDoc.prototype.resize = function () {
        };
        GameDoc.prototype.destroy = function () {
        };
        /**
         * 资源组加载出错
         *  The resource group loading failed
         */
        GameDoc.prototype.onResError = function (event) {
            //TODO
            console.warn("Group:" + event.groupName + " has failed to load");
            //忽略加载失败的项目
            //Ignore the loading failed projects
            //this.onResourceLoadComplete(event);
        };
        /**
         * 返回大厅
         */
        GameDoc.prototype.backToLobby = function () {
            //this.parent.removeChild(this);
            if (egret.getQualifiedSuperclassName(xlLib.SceneMgr.instance.currentScene) == "LobbyScene") {
                xlLib.SceneMgr.instance.currentScene.removeGame();
            }
        };
        return GameDoc;
    }(egret.DisplayObjectContainer));
    xlLib.GameDoc = GameDoc;
    __reflect(GameDoc.prototype, "xlLib.GameDoc", ["xlLib.IGameDoc"]);
})(xlLib || (xlLib = {}));
