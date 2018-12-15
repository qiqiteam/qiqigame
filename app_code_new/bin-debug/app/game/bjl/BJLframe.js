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
var BJLframe = (function (_super) {
    __extends(BJLframe, _super);
    function BJLframe() {
        var _this = _super.call(this) || this;
        _this.skinName = "BJLframeSkin";
        return _this;
    }
    BJLframe.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    BJLframe.prototype.dataChanged = function () {
        if (this.data) {
            this.img_order.source = this.data.tp;
            this.label_index.visible = this.data.fot;
            this.label_index.text = this.data.index + '';
            this.imghead.source = this.data.img;
            this.labelName.text = this.data.name;
            this.labelGold.text = GlobalFunction.Formatconversion(this.data.gold);
            this.labelGold1.text = GlobalFunction.Formatconversion(this.data.gold1);
        }
    };
    BJLframe.prototype.destroy = function () {
    };
    return BJLframe;
}(eui.ItemRenderer));
__reflect(BJLframe.prototype, "BJLframe");
//# sourceMappingURL=BJLframe.js.map