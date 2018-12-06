var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var xlLib;
(function (xlLib) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        //构造方法
        function GameScene(param) {
            var _this = _super.call(this) || this;
            // 游戏界面层 游戏资源需要添加到这一层 否则会覆盖loading的显示
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
            _this.initBaseLayers();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.start, _this);
            return _this;
        }
        //初始化场景类
        GameScene.prototype.initBaseLayers = function () {
            this.addChild(this.uiLayer);
            this.addChild(this.effectLayer);
            this.addChild(this.topLayer);
            this.addChild(this.mainUILayer);
            this.addChild(this.maskLayer);
            this.addChild(this.tipsLayer);
            this.awake();
        };
        /**
         * 场景构造完成
         */
        GameScene.prototype.awake = function () {
        };
        /**
         * 场景初始化完成并添加到舞台
         */
        GameScene.prototype.start = function (e) {
            if (e === void 0) { e = null; }
        };
        GameScene.prototype.resize = function () {
        };
        /**
        * 场景销毁时
        */
        GameScene.prototype.destroy = function () {
        };
        GameScene.prototype.reConnectFail = function () {
        };
        return GameScene;
    }(egret.DisplayObjectContainer));
    xlLib.GameScene = GameScene;
    __reflect(GameScene.prototype, "xlLib.GameScene", ["xlLib.IScene"]);
})(xlLib || (xlLib = {}));
//# sourceMappingURL=GameScene.js.map