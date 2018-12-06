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
var InfoBoxItem = (function (_super) {
    __extends(InfoBoxItem, _super);
    function InfoBoxItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "InfoBoxItemSkin";
        return _this;
    }
    InfoBoxItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    InfoBoxItem.prototype.dataChanged = function () {
        this.des_txt.text = this.data.name;
    };
    return InfoBoxItem;
}(eui.ItemRenderer));
__reflect(InfoBoxItem.prototype, "InfoBoxItem");
//# sourceMappingURL=InfoBoxItem.js.map