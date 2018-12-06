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
var QZNNScene = (function (_super) {
    __extends(QZNNScene, _super);
    function QZNNScene() {
        var _this = _super.call(this) || this;
        _this.QZNNView = new QZNNView();
        _this.uiLayer.addChild(_this.QZNNView);
        return _this;
    }
    QZNNScene.prototype.destroy = function () {
        this.QZNNView.destroy();
        _super.prototype.destroy.call(this);
    };
    /**
     * 添加适配
     * */
    QZNNScene.prototype.resize = function () {
        if (this.QZNNView) {
            this.QZNNView.resize();
        }
    };
    return QZNNScene;
}(xlLib.GameScene));
__reflect(QZNNScene.prototype, "QZNNScene");
//# sourceMappingURL=QZNNScene.js.map