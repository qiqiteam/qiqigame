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
var LotteryPanel = (function (_super) {
    __extends(LotteryPanel, _super);
    function LotteryPanel() {
        var _this = _super.call(this) || this;
        _this.isLottering = false;
        _this.rewardArr = [];
        _this.curTimes = 0; //抽奖次数
        _this.skinName = "LotterySkin";
        return _this;
    }
    LotteryPanel.prototype.childrenCreated = function () {
        this.deg = 0;
        this.duration = 0;
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this.current.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchLottery, this);
        //EventManage.addButtonEvent(this, this.btnClose, egret.TouchEvent.TOUCH_TAP, this.dispose.bind(this))
        //EventManage.addButtonEvent(this, this.current, egret.TouchEvent.TOUCH_TAP, this.onTouchLottery.bind(this))
        //EventManage.addButtonEvent(this, this.btnCharge, egret.TouchEvent.TOUCH_TAP, this.onTouchCharge.bind(this))
        //Net.send(Protocol.DIAL_GET_INFO, {}, this.getDialInfo.bind(this));
        var arr = ["1点券", "1元红包", "2点券", "2元红包", "3点券", "3元红包", "5点券", "5元红包", "10点券", "10元红包", "5百万金币", "1千万金币"];
        this.getDialInfo(arr);
    };
    LotteryPanel.prototype.getDialInfo = function (msg) {
        //if (msg.code == 200) {
        // if (parseInt(msg.times) == 0) {
        //     this.labTipsNum.text = '您当前没有抽奖次数！'
        // }
        // else {
        //this.curTimes = parseInt(msg.times);
        this.curTimes = 100;
        this.labTipsNum.text = '您当前剩余' + this.curTimes + '次抽奖机会！';
        // }
        this.rewardArr = msg;
        for (var i = 0; i < this.rewardArr.length; i++) {
            this['label' + i].text = this.rewardArr[i];
        }
        //}
        //else {
        //TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
        //}
    };
    LotteryPanel.prototype.onTouchCharge = function () {
        if (!this.isLottering) {
            //GlobalData.isTurnFromLottery = true;
            //PanelManage.openShop();
        }
    };
    LotteryPanel.prototype.onTouchLottery = function () {
        if (!this.isLottering) {
            //Net.send(Protocol.DIAL_GET_AWARD, {}, this.onPostComplete.bind(this));
            this.onPostComplete(6);
        }
    };
    LotteryPanel.prototype.onPostComplete = function (msg) {
        var _this = this;
        //if (msg.code == 200) {
        this.curTimes = this.curTimes - 1;
        this.labTipsNum.text = '您当前剩余' + this.curTimes + '次抽奖机会！';
        this.isLottering = true;
        //let prize_id = msg.binggo;
        var prize_id = msg;
        this.deg = Math.ceil(Math.random() * 6 + 10) * 360 - (prize_id - 1) * 30; // 最少 720 -330 最多 5 * 360
        this.duration = this.calcDuration(this.deg);
        console.log("prize_id：", prize_id, "转动角度：", this.deg, "转动时间：", this.duration);
        return this.startTurn(function () { _this.lotteryDone(_this.rewardArr[prize_id - 1]); }); // 启动转盘
        //}
        //else {
        //TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
        //}
    };
    // 根据角度计算持续时间 deg -> duration
    LotteryPanel.prototype.calcDuration = function (deg) {
        return deg * 2;
    };
    LotteryPanel.prototype.lotteryDone = function (info) {
        egret.Tween.removeAllTweens();
        this.isLottering = false;
        //TipsManage.showTips('恭喜您获得了 ' + info);
        xlLib.TipsUtils.showFloatWordTips('恭喜您获得了 ' + info);
        // GlobalData.user.iscanDial = false;
        //PanelManage.hall.updateGold();
    };
    // 抽奖动画
    LotteryPanel.prototype.startTurn = function (cb) {
        var _this = this;
        this.lightAni();
        this.current.touchEnabled = false;
        egret.Tween.get(this.inCir)
            .to({ rotation: this.deg }, this.duration, egret.Ease.cubicOut).call(function () {
            _this.current.touchEnabled = true;
            cb();
        });
    };
    // 霓虹灯动画
    LotteryPanel.prototype.lightAni = function () {
        egret.Tween.get(this.warpCir, { loop: true })
            .set({ source: RES.getRes('lottery.wrapcircle_bg2') })
            .wait(300)
            .set({ source: RES.getRes('lottery.wrapcircle_bg') })
            .wait(300);
    };
    LotteryPanel.prototype.getGridID = function (reward) {
        var gridId = 0;
        var arr = [];
        for (var i = 0; i < this.rewardArr.length; i++) {
            if (this.rewardArr[i] == reward) {
                arr.push(i);
            }
        }
        console.log('grid Arr : ' + arr);
        gridId = arr[Math.floor(Math.random() * arr.length)];
        console.log('grid id:  ' + gridId);
        return gridId;
    };
    LotteryPanel.prototype.dispose = function () {
        if (this.isLottering)
            return;
        if (this.parent) {
            this.parent.removeChild(this);
        }
        //EventManage.removeEvent(this);
    };
    LotteryPanel.prototype.setTouchEnabled = function () {
        //QuickManage.setTouchEnabled(this);
    };
    LotteryPanel.prototype.destroy = function () {
        if (this.isLottering)
            return;
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this.current.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchLottery, this);
    };
    return LotteryPanel;
}(eui.Component));
__reflect(LotteryPanel.prototype, "LotteryPanel");
//# sourceMappingURL=LotteryPanel.js.map