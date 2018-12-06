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
var BJLTypeItem = (function (_super) {
    __extends(BJLTypeItem, _super);
    function BJLTypeItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "BJLTypeItemSkin";
        return _this;
    }
    BJLTypeItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    BJLTypeItem.prototype.dataChanged = function () {
        // console.log("------------------"+this.data);
    };
    return BJLTypeItem;
}(eui.ItemRenderer));
__reflect(BJLTypeItem.prototype, "BJLTypeItem");
//# sourceMappingURL=BJLTypeItem.js.map