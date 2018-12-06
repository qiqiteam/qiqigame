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
var BRNNScene = (function (_super) {
    __extends(BRNNScene, _super);
    function BRNNScene() {
        var _this = _super.call(this) || this;
        _this.BRNNView = new BRNNView();
        _this.uiLayer.addChild(_this.BRNNView);
        return _this;
    }
    BRNNScene.prototype.destroy = function () {
        this.BRNNView.destroy();
        _super.prototype.destroy.call(this);
    };
    /**
     * 添加适配
     * */
    BRNNScene.prototype.resize = function () {
        if (this.BRNNView) {
            this.BRNNView.resize();
        }
    };
    return BRNNScene;
}(xlLib.GameScene));
__reflect(BRNNScene.prototype, "BRNNScene");
//# sourceMappingURL=BRNNScene.js.map