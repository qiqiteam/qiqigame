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
 * 游戏中显示用户信息
 */
var BRNNframe = (function (_super) {
    __extends(BRNNframe, _super);
    function BRNNframe() {
        var _this = _super.call(this) || this;
        _this.skinName = "BRNNframeSkin";
        return _this;
    }
    BRNNframe.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    BRNNframe.prototype.dataChanged = function () {
        if (this.data) {
            this.imghead.source = this.data.img;
            this.labelName.text = this.data.name;
            this.labelGold.text = GlobalFunction.Formatconversion(this.data.gold);
        }
    };
    BRNNframe.prototype.destroy = function () {
    };
    return BRNNframe;
}(eui.ItemRenderer));
__reflect(BRNNframe.prototype, "BRNNframe");
//# sourceMappingURL=BRNNframe.js.map