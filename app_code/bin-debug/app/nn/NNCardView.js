var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*** 翻牌界面**/
var NNCardView = (function (_super) {
    __extends(NNCardView, _super);
    function NNCardView() {
        var _this = _super.call(this) || this;
        _this.skinName = "NNCardViewSkin";
        return _this;
    }
    NNCardView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    NNCardView.prototype.destroy = function () {
    };
    return NNCardView;
}(eui.Component));
__reflect(NNCardView.prototype, "NNCardView");
//# sourceMappingURL=NNCardView.js.map