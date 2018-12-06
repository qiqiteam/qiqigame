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
var RechargeTypeItem = (function (_super) {
    __extends(RechargeTypeItem, _super);
    function RechargeTypeItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "RechargeTypeItemSkin";
        return _this;
    }
    RechargeTypeItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    RechargeTypeItem.prototype.dataChanged = function () {
        // console.log("------------------"+this.data);
    };
    return RechargeTypeItem;
}(eui.ItemRenderer));
__reflect(RechargeTypeItem.prototype, "RechargeTypeItem");
//# sourceMappingURL=RechargeTypeItem.js.map