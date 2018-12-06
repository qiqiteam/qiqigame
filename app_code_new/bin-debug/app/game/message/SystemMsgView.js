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
 * 系统消息
 */
var SystemMsgView = (function (_super) {
    __extends(SystemMsgView, _super);
    function SystemMsgView() {
        var _this = _super.call(this) || this;
        _this.skinName = "SystemMsgViewSkin";
        _this._group_msg = null;
        _this._arr_msg = [];
        _this._ver_item = [];
        return _this;
    }
    SystemMsgView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        //this._image_notice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchMode, this);
        //this._image_push.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchMode, this);
        this._btn_select_all.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectAll, this);
        this._btn_delete.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);
        var dataArr = [{ name: "系统通知", down_url: "btn_notice_0_png", up_url: "btn_notice_1_png" },
            { name: "推送消息", down_url: "btn_push_0_png", up_url: "btn_push_1_png" }];
        this._tabBar_meun.dataProvider = new eui.ArrayCollection(dataArr);
        this._tabBar_meun.useVirtualLayout = true;
        this._tabBar_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this.arr_msg_1 = ["菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧",
            "菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧，菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧",
            "菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧，最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧"];
        this.arr_msg_2 = ["最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧",
            "菲斯塔中控台呈现“中间饱满，两边锋利”的造型，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧",
            "菲斯塔中控台呈现“中间饱满，两边锋利”的造型"];
        this._arr_msg = this.arr_msg_1;
        this._group_msg = this._group_msg_notice;
        this.onAcceptMessage();
    };
    SystemMsgView.prototype.onBarItemTap = function (e) {
        this._btn_viewStack.selectedIndex = e.itemIndex;
        if (e.itemIndex == 0) {
            this._arr_msg = this.arr_msg_1;
            this._group_msg = this._group_msg_notice;
            this.onAcceptMessage();
        }
        else {
            this._arr_msg = this.arr_msg_2;
            this._group_msg = this._group_msg_push;
            this.onAcceptMessage();
        }
    };
    /*
        public switchMode(event:egret.TouchEvent):void {
            if(event.target == this._image_notice) {
                this._arr_msg = this.arr_msg_1;
                this._btn_notice.visible = true;
                this._btn_push.visible = false;
                this.onAcceptMessage();
            } else {
                this._arr_msg = this.arr_msg_2;
                this._btn_notice.visible = false;
                this._btn_push.visible = true;
                this.onAcceptMessage();
            }
        }
    */
    SystemMsgView.prototype.onAcceptMessage = function () {
        this._ver_item = [];
        this._group_msg.removeChildren();
        var yy = 10;
        for (var i = 0; i < this._arr_msg.length; i++) {
            if (this._arr_msg[i] == null) {
                continue;
            }
            var item = new SystemMsgItem;
            item.getMsgContent(this._arr_msg[i]);
            item.x = 0;
            item.y = item.height * i + 40 * i + 10;
            item.y = yy;
            yy = item.y + item.height + 40;
            this._group_msg.addChild(item);
            this._ver_item.push(item);
        }
    };
    SystemMsgView.prototype.onSelectAll = function () {
        for (var i = 0; i < this._ver_item.length; i++) {
            this._ver_item[i].setSelectedState(true);
        }
    };
    SystemMsgView.prototype.onDelete = function () {
        var temArray = [];
        for (var i = 0; i < this._ver_item.length; i++) {
            if (this._ver_item[i].getSelectedState() == true) {
            }
            else {
                temArray.push(this._arr_msg[i]);
            }
        }
        this._arr_msg = temArray;
        this.onAcceptMessage();
    };
    SystemMsgView.prototype.dispose = function () {
        xlLib.PopUpMgr.removePopUp(this, 1);
    };
    SystemMsgView.prototype.destroy = function () {
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        //this._image_notice.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        //this._image_push.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        this._btn_select_all.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._btn_delete.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._tabBar_meun.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this._group_msg = null;
        this._arr_msg = [];
        this._ver_item = [];
    };
    return SystemMsgView;
}(eui.Component));
__reflect(SystemMsgView.prototype, "SystemMsgView");
//# sourceMappingURL=SystemMsgView.js.map