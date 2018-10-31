var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var IGameConfig = (function () {
        function IGameConfig() {
            /**
             * 是否显示返回按钮
             */
            this.showBack = true;
            /**
            * 游戏默认朝向
            */
            this.defaultOrientation = "auto";
            /**
            * 是否体验币模式 true有体验币 false无体验币
            */
            this.hasTestChips = false;
        }
        return IGameConfig;
    }());
    xlLib.IGameConfig = IGameConfig;
    __reflect(IGameConfig.prototype, "xlLib.IGameConfig");
})(xlLib || (xlLib = {}));
