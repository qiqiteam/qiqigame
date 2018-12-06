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
var ComBoxItem = (function (_super) {
    __extends(ComBoxItem, _super);
    function ComBoxItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "ComBoxItemSkin";
        return _this;
    }
    ComBoxItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ComBoxItem.prototype.dataChanged = function () {
        this.des_txt.text = this.data.name;
    };
    return ComBoxItem;
}(eui.ItemRenderer));
__reflect(ComBoxItem.prototype, "ComBoxItem");
//# sourceMappingURL=ComBoxItem.js.map