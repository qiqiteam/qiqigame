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
var RoomTypeItem = (function (_super) {
    __extends(RoomTypeItem, _super);
    function RoomTypeItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "RoomTypeItemSkin";
        return _this;
    }
    RoomTypeItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    RoomTypeItem.prototype.dataChanged = function () {
        // console.log("------------------"+this.data);
    };
    return RoomTypeItem;
}(eui.ItemRenderer));
__reflect(RoomTypeItem.prototype, "RoomTypeItem");
//# sourceMappingURL=RoomTypeItem.js.map