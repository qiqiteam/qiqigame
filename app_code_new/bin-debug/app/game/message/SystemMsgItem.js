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
 * 消息Item
 */
var SystemMsgItem = (function (_super) {
    __extends(SystemMsgItem, _super);
    function SystemMsgItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "SystemMsgItemSkin";
        return _this;
    }
    SystemMsgItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    SystemMsgItem.prototype.getMsgContent = function (str) {
        this._label_content.text = str;
    };
    SystemMsgItem.prototype.getSelectedState = function () {
        return this._checkBox.selected;
    };
    SystemMsgItem.prototype.setSelectedState = function (state) {
        this._checkBox.selected = state;
    };
    return SystemMsgItem;
}(eui.Component));
__reflect(SystemMsgItem.prototype, "SystemMsgItem");
//# sourceMappingURL=SystemMsgItem.js.map