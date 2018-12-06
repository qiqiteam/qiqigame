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
var ZJHScene = (function (_super) {
    __extends(ZJHScene, _super);
    function ZJHScene() {
        var _this = _super.call(this) || this;
        _this.ZJHView = new ZJHView();
        _this.uiLayer.addChild(_this.ZJHView);
        return _this;
    }
    ZJHScene.prototype.destroy = function () {
        this.ZJHView.destroy();
        _super.prototype.destroy.call(this);
    };
    /**
     * 添加适配
     * */
    ZJHScene.prototype.resize = function () {
        if (this.ZJHView) {
            this.ZJHView.resize();
        }
    };
    return ZJHScene;
}(xlLib.GameScene));
__reflect(ZJHScene.prototype, "ZJHScene");
//# sourceMappingURL=ZJHScene.js.map