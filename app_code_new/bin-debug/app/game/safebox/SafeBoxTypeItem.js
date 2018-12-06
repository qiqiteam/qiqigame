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
var SafeBoxTypeItem = (function (_super) {
    __extends(SafeBoxTypeItem, _super);
    function SafeBoxTypeItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "SafeBoxTypeItemSkin";
        return _this;
    }
    SafeBoxTypeItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    SafeBoxTypeItem.prototype.dataChanged = function () {
        // console.log("------------------"+this.data);
    };
    return SafeBoxTypeItem;
}(eui.ItemRenderer));
__reflect(SafeBoxTypeItem.prototype, "SafeBoxTypeItem");
//# sourceMappingURL=SafeBoxTypeItem.js.map