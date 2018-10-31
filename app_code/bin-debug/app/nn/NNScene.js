var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 牛牛场景界面
 */
var NNScene = (function (_super) {
    __extends(NNScene, _super);
    function NNScene() {
        var _this = _super.call(this) || this;
        _this.nnlistView = new NNListView();
        _this.uiLayer.addChild(_this.nnlistView);
        return _this;
    }
    NNScene.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    /**
     * 添加适配
     * */
    NNScene.prototype.resize = function () {
        if (this.nnlistView) {
            this.nnlistView.resize();
        }
    };
    return NNScene;
}(xlLib.GameScene));
__reflect(NNScene.prototype, "NNScene");
