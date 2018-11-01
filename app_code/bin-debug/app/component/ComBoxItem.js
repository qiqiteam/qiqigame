var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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