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
 * 每日任务奖励Item
 */
var AwardItem = (function (_super) {
    __extends(AwardItem, _super);
    function AwardItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "AwardItemSkin";
        return _this;
    }
    AwardItem.prototype.childrenCreated = function () {
        //EventManage.addButtonEvent(this, this.btnTouch, egret.TouchEvent.TOUCH_TAP, this.onTouchExchange.bind(this));
    };
    AwardItem.prototype.setData = function (data, type) {
        if (type == 1) {
            this.setExchange(data);
        }
        else if (type == 2) {
            this.setSelfRecord(data);
        }
        else if (type == 3) {
            this.setAllRecord(data);
        }
    };
    AwardItem.prototype.setExchange = function (data) {
    };
    AwardItem.prototype.setAllRecord = function (data) {
    };
    AwardItem.prototype.setSelfRecord = function (data) {
    };
    AwardItem.prototype.onTouchExchange = function () {
        //Net.send(Protocol.HALL_GIFT_EXCHANGE, { giftId: this._id }, this.exchangeCB.bind(this));
    };
    AwardItem.prototype.exchangeCB = function (msg) {
        if (msg.code == 200) {
            //lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.GIFT_ON_EXCHANGE, msg.data));
            //TipsManage.showTips('兑换奖品成功！');
        }
        else {
            //TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
        }
    };
    AwardItem.prototype.dispose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        //EventManage.removeEvent(this);
    };
    AwardItem.prototype.setTouchEnabled = function () {
        //QuickManage.setTouchEnabled(this);
    };
    return AwardItem;
}(eui.Component));
__reflect(AwardItem.prototype, "AwardItem");
//# sourceMappingURL=AwardItem.js.map