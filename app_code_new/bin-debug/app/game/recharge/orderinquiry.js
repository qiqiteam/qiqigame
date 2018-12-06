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
 * 订单查询
 */
var orderinquiry = (function (_super) {
    __extends(orderinquiry, _super);
    function orderinquiry() {
        var _this = _super.call(this) || this;
        _this.skinName = "orderinquirySkin";
        _this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick1, _this);
        return _this;
    }
    orderinquiry.prototype.onClick1 = function (e) {
        if (e.target == this.btn_return) {
            console.log("btn_return");
            xlLib.PopUpMgr.removePopUp(orderinquiry, 1);
        }
    };
    orderinquiry.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    orderinquiry.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return orderinquiry;
}(eui.Component));
__reflect(orderinquiry.prototype, "orderinquiry", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=orderinquiry.js.map