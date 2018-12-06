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
 * 福利
 */
var WelfareView = (function (_super) {
    __extends(WelfareView, _super);
    function WelfareView() {
        var _this = _super.call(this) || this;
        _this.skinName = "WelfareViewSkin";
        return _this;
    }
    WelfareView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        //let lottery = new LotteryPanel;
        //lottery.x = 400;
        //lottery.y = 300;
        //this.addChild(lottery);
        var dataArr = [{ name: "精彩活动", down_url: "title_huodong_1_png", up_url: "title_huodong_0_png" },
            { name: "每日任务", down_url: "title_renwu_1_png", up_url: "title_renwu_0_png" },
            { name: "幸运轮盘", down_url: "title_zhuanpan_1_png", up_url: "title_zhuanpan_0_png" },
            { name: "每日签到", down_url: "title_qiandao_1_png", up_url: "title_qiandao_0_png" }];
        this._tabBar_meun.dataProvider = new eui.ArrayCollection(dataArr);
        this._tabBar_meun.useVirtualLayout = true;
        this._tabBar_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this.getTaskList();
    };
    WelfareView.prototype.getTaskList = function () {
        var arr = ["1", "1", "1", "1", "1", "1", "1"];
        for (var i = 0; i < arr.length; i++) {
            var task = new AwardItem;
            this._reward_area.addChild(task);
            task.x = 5;
            task.y = 125 * i;
        }
    };
    WelfareView.prototype.onBarItemTap = function (e) {
        this._viewlist.selectedIndex = e.itemIndex;
    };
    WelfareView.prototype.dispose = function () {
        xlLib.PopUpMgr.removePopUp(this, 1);
    };
    WelfareView.prototype.destroy = function () {
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._tabBar_meun.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
    };
    return WelfareView;
}(eui.Component));
__reflect(WelfareView.prototype, "WelfareView");
//# sourceMappingURL=WelfareView.js.map