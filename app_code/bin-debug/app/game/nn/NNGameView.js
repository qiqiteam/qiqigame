var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NNGameView = (function (_super) {
    __extends(NNGameView, _super);
    function NNGameView(isReConnect) {
        if (isReConnect === void 0) { isReConnect = false; }
        var _this = _super.call(this) || this;
        _this.view = new NNView(isReConnect);
        _this.uiLayer.addChild(_this.view);
        return _this;
    }
    NNGameView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    /**
 * 添加适配
 * */
    NNGameView.prototype.resize = function () {
        if (this.view) {
            this.view.resize();
        }
    };
    return NNGameView;
}(xlLib.GameScene));
__reflect(NNGameView.prototype, "NNGameView");
//# sourceMappingURL=NNGameView.js.map