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
    var LobbyScene = (function (_super) {
        __extends(LobbyScene, _super);
        //构造方法
        function LobbyScene(param) {
            var _this = _super.call(this) || this;
            // 游戏界面层
            _this.uiLayer = new egret.DisplayObjectContainer();
            // 弹窗层 如 设置之类的
            _this.topLayer = new egret.DisplayObjectContainer();
            // 特效层 如 飘字之类的
            _this.effectLayer = new egret.DisplayObjectContainer();
            // 主UI层 如 底部功能栏
            _this.mainUILayer = new egret.DisplayObjectContainer();
            // 通讯遮罩层 
            _this.maskLayer = new egret.DisplayObjectContainer();
            // 旋转屏幕提示层 
            _this.tipsLayer = new egret.DisplayObjectContainer();
            /**
             * 游戏层
             */
            _this.gameLayer = new egret.DisplayObjectContainer();
            xlLib.SceneMgr.instance.init(_this);
            _this.initBaseLayers();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.start, _this);
            return _this;
        }
        //初始化场景类
        LobbyScene.prototype.initBaseLayers = function () {
            this.addChild(this.uiLayer);
            this.addChild(this.topLayer);
            //this.addChild(this.gameLayer);
            this.addChild(this.effectLayer);
            this.addChild(this.mainUILayer);
            this.addChild(this.maskLayer);
            this.addChild(this.tipsLayer);
            this.awake();
        };
        /**
         * 场景构造完成
         */
        LobbyScene.prototype.awake = function () {
        };
        /**
         * 场景初始化完成并添加到舞台
         */
        LobbyScene.prototype.start = function (e) {
            if (e === void 0) { e = null; }
            //super.$onAddToStage();
        };
        LobbyScene.prototype.resize = function () {
        };
        /**
        * 场景销毁时
        */
        LobbyScene.prototype.destroy = function () {
        };
        LobbyScene.prototype.reConnectFail = function () {
        };
        LobbyScene.prototype.addGame = function (game) {
            this.currentGame = game;
            if (this._bgMask == null) {
                this._bgMask = new egret.Sprite();
                this._bgMask.graphics.clear();
                this._bgMask.graphics.beginFill(0x000000, 0);
                this._bgMask.graphics.drawRect(0, 0, xlLib.Global.screenWidth, xlLib.Global.screenHeight);
                this._bgMask.graphics.endFill();
                this._bgMask.width = xlLib.Global.screenWidth;
                this._bgMask.height = xlLib.Global.screenHeight;
                this._bgMask.touchEnabled = true;
                //egret.Tween.get(this._bgMask).to({ alpha: 1 }, 100);
                this._bgMask.visible = true;
            }
            this.gameLayer.addChild(this._bgMask);
            //this.gameLayer.visible = true;
            this.gameLayer.addChild(game);
            this.addChildAt(this.gameLayer, 1);
            //game.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeGame, this);
        };
        LobbyScene.prototype.removeGame = function (e) {
            if (e === void 0) { e = null; }
            //this.currentGame.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeGame, this);
            var curGameScene = xlLib.SceneMgr.instance.currentScene.currentGame;
            //console.error(curGameScene);
            if (curGameScene) {
                if (curGameScene.parent)
                    curGameScene.parent.removeChild(curGameScene);
                curGameScene.destroy();
                curGameScene = null;
            }
            xlLib.DisplayUtils.removeFromParent(this.gameLayer);
            this.gameLayer.removeChildren();
            //if (this.currentGame.parent)
            //    this.currentGame.parent.removeChild(this.currentGame);
            //if (this.currentGame && this.currentGame.destroy) {
            //    this.currentGame.destroy();
            //}
            this.currentGame = null;
            //this.gameLayer.visible = false;
            // xlLib.GameModuleUtils.removeGameJs();
            //if (xlLib.Global.isH5) {
            //}
        };
        return LobbyScene;
    }(egret.DisplayObjectContainer));
    xlLib.LobbyScene = LobbyScene;
    __reflect(LobbyScene.prototype, "xlLib.LobbyScene", ["xlLib.IScene"]);
})(xlLib || (xlLib = {}));
//# sourceMappingURL=LobbyScene.js.map