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
 * 通比牛牛场景界面
 */
var TBNNScene = (function (_super) {
    __extends(TBNNScene, _super);
    function TBNNScene() {
        var _this = _super.call(this) || this;
        _this.TBNNView = new TBNNView();
        _this.uiLayer.addChild(_this.TBNNView);
        return _this;
    }
    TBNNScene.prototype.destroy = function () {
        this.TBNNView.destroy();
        _super.prototype.destroy.call(this);
    };
    /**
     * 添加适配
     * */
    TBNNScene.prototype.resize = function () {
        if (this.TBNNView) {
            this.TBNNView.resize();
        }
    };
    return TBNNScene;
}(xlLib.GameScene));
__reflect(TBNNScene.prototype, "TBNNScene");
//# sourceMappingURL=TBNNScene.js.map