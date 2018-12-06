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
 * 福利类型Item
 */
var WelfareTypeItem = (function (_super) {
    __extends(WelfareTypeItem, _super);
    function WelfareTypeItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "WelfareTypeItemSkin";
        return _this;
    }
    WelfareTypeItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    WelfareTypeItem.prototype.dataChanged = function () {
        // console.log("------------------"+this.data);
    };
    return WelfareTypeItem;
}(eui.ItemRenderer));
__reflect(WelfareTypeItem.prototype, "WelfareTypeItem");
//# sourceMappingURL=WelfareTypeItem.js.map