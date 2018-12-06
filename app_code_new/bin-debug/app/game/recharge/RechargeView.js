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
 * 充值
 */
var RechargeView = (function (_super) {
    __extends(RechargeView, _super);
    function RechargeView() {
        var _this = _super.call(this) || this;
        _this.skinName = "RechargeViewSkin";
        return _this;
    }
    RechargeView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var dataArr = [{ name: "定额支付宝", down_url: "btn_fixationAlipay_1_png", up_url: "btn_fixationAlipay_0_png" },
            { name: "支付宝", down_url: "btn_Alipay_1_png", up_url: "btn_Alipay_0_png" },
            { name: "银联", down_url: "btn_Unionpay_1_png", up_url: "btn_Unionpay_0_png" },
            { name: "官方代理", down_url: "btn_Theofficialagent_1_png", up_url: "btn_Theofficialagent_0_png" }];
        this._recharge_meun.dataProvider = new eui.ArrayCollection(dataArr);
        this._recharge_meun.useVirtualLayout = true;
        this._recharge_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
        this.btn_ddcx.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
    };
    RechargeView.prototype.onBarItemTap = function (e) {
        this._viewlist.selectedIndex = e.itemIndex;
    };
    RechargeView.prototype.onClick1 = function (e) {
        if (e.target == this.btn_return) {
            console.log("btn_return");
            xlLib.PopUpMgr.removePopUp(RechargeView, 1);
        }
        else if (e.target == this.btn_ddcx) {
            console.log("btn_ddcx");
            xlLib.PopUpMgr.addPopUp(orderinquiry, null, true, true, null, 1);
        }
    };
    RechargeView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RechargeView.prototype.destroy = function () {
        this._recharge_meun.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBarItemTap, this);
        this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
        this.btn_ddcx.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
    };
    return RechargeView;
}(eui.Component));
__reflect(RechargeView.prototype, "RechargeView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RechargeView.js.map