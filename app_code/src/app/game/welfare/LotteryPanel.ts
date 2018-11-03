class LotteryPanel extends eui.Component {
    constructor() {
        super();
        this.skinName = "LotterySkin";
    }

    public warpCir: eui.Image;
    public inCir: eui.Image;
    public current: eui.Image;
    public btnClose: eui.Image;
    public btnCharge: eui.Image;
    public labTipsNum: eui.Label;
    private isLottering: boolean = false;
    private rewardArr = [];
    private deg: number;
    private duration: number;
    private clacTimer: egret.Timer;
    private curTimes: number = 0;//抽奖次数

    protected childrenCreated(): void {
        this.deg = 0;
        this.duration = 0;

        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this.current.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchLottery, this);

        //EventManage.addButtonEvent(this, this.btnClose, egret.TouchEvent.TOUCH_TAP, this.dispose.bind(this))
        //EventManage.addButtonEvent(this, this.current, egret.TouchEvent.TOUCH_TAP, this.onTouchLottery.bind(this))
        //EventManage.addButtonEvent(this, this.btnCharge, egret.TouchEvent.TOUCH_TAP, this.onTouchCharge.bind(this))
        //Net.send(Protocol.DIAL_GET_INFO, {}, this.getDialInfo.bind(this));
        let arr = ["1点券","1元红包","2点券","2元红包","3点券","3元红包","5点券","5元红包","10点券","10元红包","5百万金币","1千万金币"];
        this.getDialInfo(arr);
    }
    private getDialInfo(msg): void {
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
    }

    private onTouchCharge(): void {
        if (!this.isLottering) {
            //GlobalData.isTurnFromLottery = true;
            //PanelManage.openShop();
        }
    }

    private onTouchLottery(): void {
        if (!this.isLottering) {
            //Net.send(Protocol.DIAL_GET_AWARD, {}, this.onPostComplete.bind(this));
            this.onPostComplete(6);
        }
    }

    private onPostComplete(msg): void {
        //if (msg.code == 200) {
            this.curTimes = this.curTimes - 1;
            this.labTipsNum.text = '您当前剩余' + this.curTimes + '次抽奖机会！';
            this.isLottering = true;
            //let prize_id = msg.binggo;
            let prize_id = msg;
            this.deg = Math.ceil(Math.random() * 6 + 10) * 360 - (prize_id - 1) * 30; // 最少 720 -330 最多 5 * 360
            this.duration = this.calcDuration(this.deg);
            console.log("prize_id：", prize_id, "转动角度：", this.deg, "转动时间：", this.duration);
            return this.startTurn(() => { this.lotteryDone(this.rewardArr[prize_id - 1]) }); // 启动转盘
        //}
        //else {
            //TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
        //}
    }

    // 根据角度计算持续时间 deg -> duration
    private calcDuration(deg: number): number {
        return deg * 2;
    }

    private lotteryDone(info): void {
        egret.Tween.removeAllTweens();
        this.isLottering = false;
        //TipsManage.showTips('恭喜您获得了 ' + info);
        xlLib.TipsUtils.showFloatWordTips('恭喜您获得了 ' + info);
        // GlobalData.user.iscanDial = false;
        //PanelManage.hall.updateGold();

    }

    // 抽奖动画
    private startTurn(cb: Function): void {
        this.lightAni();
        this.current.touchEnabled = false;
        egret.Tween.get(this.inCir)
            .to({ rotation: this.deg }, this.duration, egret.Ease.cubicOut).call(() => {
                this.current.touchEnabled = true;
                cb();
            });
    }
    // 霓虹灯动画
    private lightAni(): void {
        egret.Tween.get(this.warpCir, { loop: true })
            .set({ source: RES.getRes('lottery.wrapcircle_bg2') })
            .wait(300)
            .set({ source: RES.getRes('lottery.wrapcircle_bg') })
            .wait(300);
    }

    private getGridID(reward): number {
        var gridId: number = 0;
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
    }

    public dispose(): void {
        if (this.isLottering)
            return;
        if (this.parent) {
            this.parent.removeChild(this);
        }
        //EventManage.removeEvent(this);
    }

    public setTouchEnabled(): void {
        //QuickManage.setTouchEnabled(this);
    }

    public destroy() {
        if (this.isLottering)
            return;
        if (this.parent) {
            this.parent.removeChild(this);
        }
		this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		this.current.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchLottery, this);
    }

}