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
/**
 * 牛牛场景界面
 */
var RBGScene = (function (_super) {
    __extends(RBGScene, _super);
    function RBGScene() {
        var _this = _super.call(this) || this;
        _this.RBGView = new RBGView();
        _this.uiLayer.addChild(_this.RBGView);
        return _this;
    }
    RBGScene.prototype.destroy = function () {
        this.RBGView.destroy();
        _super.prototype.destroy.call(this);
    };
    /**
     * 添加适配
     * */
    RBGScene.prototype.resize = function () {
        if (this.RBGView) {
            this.RBGView.resize();
        }
    };
    return RBGScene;
}(xlLib.GameScene));
__reflect(RBGScene.prototype, "RBGScene");
//# sourceMappingURL=RBGScene.js.map