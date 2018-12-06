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
 *
 */
/**
 * 消息Item
 */
var SystemMsgTypeItem = (function (_super) {
    __extends(SystemMsgTypeItem, _super);
    //public icon_img:eui.Image;
    function SystemMsgTypeItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "SystemMsgTypeItemSkin";
        return _this;
    }
    SystemMsgTypeItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    SystemMsgTypeItem.prototype.dataChanged = function () {
        // console.log("------------------"+this.data);
    };
    return SystemMsgTypeItem;
}(eui.ItemRenderer));
__reflect(SystemMsgTypeItem.prototype, "SystemMsgTypeItem");
//# sourceMappingURL=SystemMsgTypeItem.js.map