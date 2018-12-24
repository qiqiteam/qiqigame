/**
 * 百人牛牛
 */
class BRNNView extends eui.Component {
    constructor() {
        super();
        this.skinName = "BRNNViewSkin";
    }

    public _group_ding:eui.Group;
public _heguan:eui.Image;
public grpCoins:eui.Group;
public _nnwt_0:eui.Group;
public _playLight_0:eui.Image;
public grade_text_0_0:eui.BitmapLabel;
public grade_text_0_1:eui.BitmapLabel;
public effectTouch0:eui.Image;
public _nnwt_1:eui.Group;
public _playLight_1:eui.Image;
public grade_text_1_0:eui.BitmapLabel;
public grade_text_1_1:eui.BitmapLabel;
public effectTouch1:eui.Image;
public _nnwt_2:eui.Group;
public _playLight_2:eui.Image;
public grade_text_2_0:eui.BitmapLabel;
public grade_text_2_1:eui.BitmapLabel;
public effectTouch2:eui.Image;
public _nnwt_3:eui.Group;
public _playLight_3:eui.Image;
public grade_text_3_0:eui.BitmapLabel;
public grade_text_3_1:eui.BitmapLabel;
public effectTouch3:eui.Image;
public grpCard:eui.Group;
public _brnn_banker_txt:eui.Image;
public bankerCard_0:eui.Image;
public bankerCard_1:eui.Image;
public bankerCard_2:eui.Image;
public bankerCard_3:eui.Image;
public bankerCard_4:eui.Image;
public labCardTypeBanker_bg:eui.Image;
public labCardTypeBanker:eui.Image;
public grpCard_0_0:eui.Image;
public grpCard_0_1:eui.Image;
public grpCard_0_2:eui.Image;
public grpCard_0_3:eui.Image;
public grpCard_0_4:eui.Image;
public labCardType_bg_0:eui.Image;
public labCardType0:eui.Image;
public grpCard_1_0:eui.Image;
public grpCard_1_1:eui.Image;
public grpCard_1_2:eui.Image;
public grpCard_1_3:eui.Image;
public grpCard_1_4:eui.Image;
public labCardType_bg_1:eui.Image;
public labCardType1:eui.Image;
public grpCard_2_0:eui.Image;
public grpCard_2_1:eui.Image;
public grpCard_2_2:eui.Image;
public grpCard_2_3:eui.Image;
public grpCard_2_4:eui.Image;
public labCardType_bg_2:eui.Image;
public labCardType2:eui.Image;
public grpCard_3_0:eui.Image;
public grpCard_3_1:eui.Image;
public grpCard_3_2:eui.Image;
public grpCard_3_3:eui.Image;
public grpCard_3_4:eui.Image;
public labCardType_bg_3:eui.Image;
public labCardType3:eui.Image;
public grpCountdown:eui.Group;
public timeTxt:eui.BitmapLabel;
public _label_tip:eui.Label;
public grpSecondPanel:eui.Group;
public grpHistory:eui.Group;
public grpHistroy0:eui.Group;
public grpHistroy0_0:eui.Image;
public grpHistroy1_0:eui.Image;
public grpHistroy2_0:eui.Image;
public grpHistroy3_0:eui.Image;
public grpHistroy1:eui.Group;
public grpHistroy0_1:eui.Image;
public grpHistroy1_1:eui.Image;
public grpHistroy2_1:eui.Image;
public grpHistroy3_1:eui.Image;
public grpHistroy2:eui.Group;
public grpHistroy0_2:eui.Image;
public grpHistroy1_2:eui.Image;
public grpHistroy2_2:eui.Image;
public grpHistroy3_2:eui.Image;
public grpHistroy3:eui.Group;
public grpHistroy0_3:eui.Image;
public grpHistroy1_3:eui.Image;
public grpHistroy2_3:eui.Image;
public grpHistroy3_3:eui.Image;
public grpHistroy4:eui.Group;
public grpHistroy0_4:eui.Image;
public grpHistroy1_4:eui.Image;
public grpHistroy2_4:eui.Image;
public grpHistroy3_4:eui.Image;
public grpHistroy5:eui.Group;
public grpHistroy0_5:eui.Image;
public grpHistroy1_5:eui.Image;
public grpHistroy2_5:eui.Image;
public grpHistroy3_5:eui.Image;
public grpHistroy6:eui.Group;
public grpHistroy0_6:eui.Image;
public grpHistroy1_6:eui.Image;
public grpHistroy2_6:eui.Image;
public grpHistroy3_6:eui.Image;
public grpHistroy7:eui.Group;
public grpHistroy0_7:eui.Image;
public grpHistroy1_7:eui.Image;
public grpHistroy2_7:eui.Image;
public grpHistroy3_7:eui.Image;
public grpHistroy8:eui.Group;
public grpHistroy0_8:eui.Image;
public grpHistroy1_8:eui.Image;
public grpHistroy2_8:eui.Image;
public grpHistroy3_8:eui.Image;
public grpHistroy9:eui.Group;
public grpHistroy0_9:eui.Image;
public grpHistroy1_9:eui.Image;
public grpHistroy2_9:eui.Image;
public grpHistroy3_9:eui.Image;
public grpCardType:eui.Group;
public secondClose:eui.Image;
public grpResult:eui.Group;
public grpMax:eui.Group;
public grpMaxHead:eui.Image;
public grpMaxGold:eui.Label;
public grpMaxName:eui.Label;
public grpBankerHead:eui.Image;
public grpBankerType:eui.Image;
public labelBankerType:eui.Label;
public grpBankerBeishu:eui.Label;
public grpBankerGold:eui.Label;
public grpBankerName:eui.Label;
public labResult0_0:eui.Label;
public labResult1_0:eui.Label;
public labResult2_0:eui.Label;
public labResult0_1:eui.Label;
public labResult1_1:eui.Label;
public labResult2_1:eui.Label;
public labResult0_2:eui.Label;
public labResult1_2:eui.Label;
public labResult2_2:eui.Label;
public labResult0_3:eui.Label;
public labResult1_3:eui.Label;
public labResult2_3:eui.Label;
public labResultValue:eui.Label;
public resultType0:eui.Label;
public resultType1:eui.Label;
public resultType2:eui.Label;
public resultType3:eui.Label;
public _group_di:eui.Group;
public grpHead0:eui.Group;
public imghead0:eui.Image;
public labelHead0:eui.Label;
public labelGold0:eui.Label;
public _btn_switch:eui.Group;
public _btn_double_1:eui.Image;
public _btn_double_2:eui.Image;
public _btn_double_3:eui.Image;
public _btn_double_4:eui.Image;
public _btn_double_5:eui.Image;
public _xuanzho:eui.Image;
public wanjia:eui.Group;
public packup:eui.Image;
public scroller:eui.Scroller;
public userlist:eui.List;
public _xiPai_bg:eui.Rect;
public _btn_close:eui.Button;
public _btn_meun:eui.Button;
public wanjialist:eui.Button;
public _faPaiPos:eui.Image;










    public time: number;        //秒数
    public timer: egret.Timer;  //游戏计时器间隔

    public arr: number[] = [0, 0];

    public multipleList: number[] = [0, 0, 0, 0, 0];   //倍数表

    //public game_result: number = 0;                   //动画状态

    public isAction: boolean = false;               //能否下注

    //public isPaly: boolean = false;                 //是否下过注
    //public isWin: boolean = false;                  //是否输赢
    //public isScore: number = 0;                     //输赢金币

    private _tipGameEff:uiCore.Animator = null;
    //private  _faPaiEff:DragonBonesSprite;
    //private _faPai_arr = [];
    private brnnShuffle:BrnnShuffle = null;

    private _coin_arr_0 = [];
    private _coin_arr_1 = [];
    private _coin_arr_2 = [];
    private _coin_arr_3 = [];
    private _coin_banker_arr = [];
    private _win_arr = [];
    private _coin_total = [];

    //-----------------------------------------------
    private interval: number = -1;      // 游戏计时器间隔
    private cardResult = null;          // 结算扑克结果(最后展示处理)


    private betsNum: number = 0;        // 下注金额 self

    private orginBankerCardPos = [];    // 存储庄家扑克位置
    private orginPlayerCardPos = [];    // 存储玩家扑克位置

    private cdNum: number = 5;     //倒计时计数
    private cdTimer: egret.Timer;   //倒计时时间

    private lastTouchBetIndex: number = 1; //上一次点击的筹码

    protected childrenCreated(): void {

        this.getOrginCardPos();
        this.addEvent();
        this.initData();
        this.setCountdown();

        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);

    }
    /**设置金币最多的20个玩家数据 */
    private initGameIconList(data: any): void {

        let dataArr: any[] = [];
        let otherplayer: any;
        for (let i = 0; i < data._obj.player.length; i++) {
            otherplayer = new Object()
            otherplayer.name = data._obj.player[i].username;
            otherplayer.gold = data._obj.player[i].goldcoins;
            otherplayer.img = "women7_png";
            dataArr.push(otherplayer);
        }

        this.userlist.dataProvider = new eui.ArrayCollection(dataArr);
        this.scroller.viewport = this.userlist;
    }
    private initData(): void {
        this.grpSecondPanel.visible = false;
        this.grpResult.visible = false;
        this._brnn_banker_txt.visible = false;
        this.grpCardType.touchChildren = false;
        this.grpCardType.touchEnabled = false;

        this.grpCard.visible = true;
        this.isAction = false;
        for (let i = 0; i < 4; i++) {
            this['grade_text_' + i + '_0'].text = '';
            this['grade_text_' + i + '_1'].text = '';
            this["_playLight_" + i].visible = false;
        }
        this.wanjia.x = -237;
        //this.isPaly = false;
        //this.isWin = false;
        //this.isScore = 0;
        this._coin_arr_0 = [];
        this._coin_arr_1 = [];
        this._coin_arr_2 = [];
        this._coin_arr_3 = [];
        this._coin_banker_arr = [];
        this._win_arr = [];
        this._coin_total = [];
        this.interval = -1;
    }

    //获取原始扑克的位置
    private getOrginCardPos(): void {
        for (var i = 0; i < 5; i++) {
            var card: eui.Image = this['bankerCard_' + i];
            card.source = '';
            card.anchorOffsetX = card.width / 2;
            card.x += card.width / 2;
            var pos: egret.Point = new egret.Point;
            pos.x = card.x;
            pos.y = card.y;
            this.orginBankerCardPos[i] = pos;
        }
        this.labCardTypeBanker.visible = false;
        this.labCardTypeBanker_bg.visible = false;

        for (var index = 0; index < 4; index++) {

            this['labCardType' + index].visible = false;
            this['labCardType_bg_' + index].visible = false;
            var cardPos = [];
            for (var j = 0; j < 5; j++) {
                var card: eui.Image = this['grpCard_' + index + '_' + j];
                card.source = '';
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos: egret.Point = new egret.Point;
                pos.x = card.x;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayerCardPos[index] = cardPos;
        }
    }

    private addEvent(): void {
        this.wanjialist.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.packup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClose, this);
        this._btn_meun.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);

        this.effectTouch0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onUserList, this.initGameIconList, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.addEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.addEventListener(EventConst.onUserLeave, this.onleave, this);

        
    }
    /**游戏状态 */
    private GameStatus(data: any): void {
        console.log(data._obj.roomStatus);
        switch (data._obj.roomStatus) {
            case 1: this.onprepare(data); break;        //准备中
            case 4: this.onbetBack(data); break;        //下注
            case 5: this.onstopBack(data); break;        //停止下注(千人牛牛开牌)
            case 7: this.onjiesuan(data); break;        //结算、百人牛牛派奖中
            case 8: this.onrest(data); break;        //游戏结束,百人牛牛休息
            case 9: this.onshuffle(data); break;        //百人牛牛洗牌
            case 10: this.onfapai(data); break;       //百人牛牛发牌
        }
    }
/*
    public startGameEffect(e) {
        var t = this;
        this.brnn_gameEffImg.source = e,
        this.brnn_gameStart.alpha = 0,
        this.brnn_gameStart.horizontalCenter = -200,
        this.brnn_gameStart.visible = !0,
        this.pushEffectList("brnn_gameStart"),
        egret.Tween.get(this.brnn_gameStart).to({
            horizontalCenter: 0,
            alpha: 1
        },
        200, egret.Ease.bounceOut).wait(300).to({
            horizontalCenter: 200,
            alpha: 0
        },
        200, egret.Ease.bounceOut).call(function() {
            t.brnn_gameStart.visible = !1
        },
        this)
    }*/

    /**
     * 定时器
     */
    private setCountdown(): void {
        this.cdTimer = new egret.Timer(1000);
        this.cdTimer.addEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
    }

    private clacTimer(): void {
        if (this.cdNum > 0) {
            this.cdNum--;
        }
        else {
            this.stopTime();
        }
        this.timeTxt.text = this.cdNum + '';
        if(this.cdNum <= 0) {
            this.timeTxt.text = '';
        }
    }

    private stopTime():void {
        this.cdTimer.stop();
        this.timeTxt.text = "";
        this.cdNum = 0;
    }

    private setTiming(num:number) {
        this.cdNum = num;
        this.timeTxt.text = num+"";
        this.cdTimer.start();
    }

    /**准备 */
    private gameIndex:number = -1;
    private onprepare(data: any): void {
        this.setTiming(2);
        this._label_tip.text = "荷官准备中...";
        this.tipGameEff("brnn_effect_gamestart");
        this._brnn_banker_txt.visible = true;
        //this.gamePlayIndex = setInterval(this.waitLabelTurn.bind(this), 600);
    }
    /**下注 */
    private onbetBack(data: any): void {
        this.tipGameEff("brnn_effect_xiazhu");
        this.setTiming(20);
        this._label_tip.text = "请下注...";
        this.isAction = true;
        for (let i = 0; i < 4; i++) {
            if (data._obj.hogList[i].allow) {
            } else {
                this['_btn_double_' + i].touchEnabled = false;
                this['_btn_double_' + i].visible = false;
            }
            let img = this["_playLight_" + i];
            this.showLightEffect(img, true);
        }

        for (let i = 0; i < 5; i++) {
            this.multipleList[i] = data._obj.hogList[i].hogOrBet;
        }
    }
    /**停止下注(千人牛牛开牌) */
    private onstopBack(data: any): void {
        this.tipGameEff("brnn_effect_stop");
        this._label_tip.text = "停止下注...";
        this.isAction = false;
        this.setTiming(6);
        UserInfo.getInstance().goldcoins = data._obj.balance;
        this.cardResult = data._obj;
        for(let i=0; i<this.cardResult.players.length; i++) {
            if(i==0) {
                //this.labCardTypeBanker.source = "";
                //this.labCardTypeBanker_bg.source = "";
            } else {
                //this["labCardType_bg_" + (i-1)].source = "";
                //this["labCardType" + (i-1)].source = "";
            }
        }

        this.interval = setInterval(this.bankerCardRotation.bind(this), 800);

    }
    /**结算、百人牛牛派奖中 */
    private onjiesuan(data: any): void {
        this.setTiming(6);
        this._label_tip.text = data._obj.message;

        let _x = this._group_ding.x + this._heguan.x + this._heguan.width/2;
        let _y = this._group_ding.y + this._heguan.y + this._heguan.height/2;
        for(let i=1; i<5; i++){
            if(this.cardResult.players[i].win == false) {
                for(let j=0; j<this["_coin_arr_" + (i-1)].length; j++) {
                    this.coinFly(this["_coin_arr_" + (i-1)][j], _x, _y);
                }
            } else {
                this._win_arr.push(i);
            }
        }
        //this.removeChipIcon();
        if(this._win_arr.length > 0) {
            this.interval = setInterval(this.chouMaToGroup.bind(this), 1000);
        } else {
            this.interval = setInterval(this.showGameResult.bind(this), 2000);
        }
    }

    private chouMaToGroup():void {
        clearInterval(this.interval);
        //console.log("++++++++++++++++++++" + this._coin_banker_arr.length);
        let num = parseInt(this._coin_banker_arr.length/this._win_arr.length + "");
        for(let i=0; i<this._coin_banker_arr.length; i++) {
            if(this._win_arr[0] && i<num) {
                this.coinFlyPlayer(this._coin_banker_arr[i], this._win_arr[0]);
            } 
            if(this._win_arr[1] && (i>=num && i<2*num)) {
                this.coinFlyPlayer(this._coin_banker_arr[i], this._win_arr[1]);
            } 
            if(this._win_arr[2] && (i>=2*num && i<3*num)) {
                this.coinFlyPlayer(this._coin_banker_arr[i], this._win_arr[2]);
            } 
            if(this._win_arr[3] && i>=num*3) {
                this.coinFlyPlayer(this._coin_banker_arr[i], this._win_arr[3]);
            }
        }

        this.interval = setInterval(this.chouMaToGroup1.bind(this), 1000);
    }

    public chouMaToGroup1() {
        clearInterval(this.interval);
        for(let i=0; i<this._coin_total.length; i++) {
            egret.Tween.removeTweens(this._coin_total[i]);
            let x = 0 - this._coin_total[i].width - 10;
            let y = (Math.floor(Math.random() * (this.wanjia.height-50))*0.8 + 50 + this.wanjia.y);
            this.coinFly(this._coin_total[i], x, y);
        }
    }

    /** */
    private chouMaToUseEffect() {

    }


    /**游戏结束,百人牛牛休息 */
    private onrest(data: any): void {
        this.setTiming(data._obj.seconds);
        this._label_tip.text = "休息时间...";
        this.resetGame();
        //UserInfo.getInstance().isGameStart = false;
    }
    /**百人牛牛洗牌 */
    private onshuffle(data: any): void {
        this._label_tip.text = "荷官洗牌中...";
        this.brnnShuffle = new BrnnShuffle;
        this.addChild(this.brnnShuffle);
        this._xiPai_bg.visible = true;
        this.setTiming(3);
        //this.startCountDown(data._obj.seconds);
    }
    /**百人牛牛发牌 */
    private onfapai(data: any): void {
        this.setTiming(5);
        this._label_tip.text = "荷官发牌中...";
        this.tipGameEff("brnn_effect_begining");
        this.brnnShuffle.removeAllEffect();
        this.brnnShuffle.parent.removeChild(this.brnnShuffle);
        this._xiPai_bg.visible = false;
        //this.startCountDown(data._obj.seconds);
        this.cardEffect();
    }
    /**更新下注通知(所有人) */
    private OnBetUpdate(data: any): void {
        // console.log(data._obj.index + "号下注");
        console.log(UserInfo.getInstance().uid);
        console.log(data._obj.userid);

        if (data._obj.code == 200) {
            if (UserInfo.getInstance().uid == data._obj.userid) {
                UserInfo.getInstance().isGameStart = true;  //游戏状态
                this.onGenZhuClick(data._obj.money, data._obj.deskNum);
                this.onplaygrade(data._obj.myMoney, data._obj.deskNum);
                this.onJettongrade(data._obj.totalMoney, data._obj.deskNum);
                UserInfo.getInstance().goldcoins = data._obj.balance;
                this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
            } else {
                this.onPlayerGenZhu(data._obj.money, data._obj.deskNum);
                this.onJettongrade(data._obj.totalMoney, data._obj.deskNum);
            }
        } else {
            xlLib.TipsUtils.showFloatWordTips(data._obj.message);
        }


    }
    /**自己点击跟注 (丢筹码动作) */
    private onGenZhuClick(num: number, index: number) {
        var p: egret.Point = new egret.Point();
        p.x = 268;
        p.y = 792;
        this.showCoins(p, num, index);
    }
    /**其他玩家跟注 (丢筹码动作) */
    private onPlayerGenZhu(num: number, index: number) {
        var p: egret.Point = new egret.Point();
        p.x = 80;
        p.y = 400 + Math.random() * 80;
        this.showCoins(p, num, index);
    }
    /**筹码池分数(总分)  */
    private onJettongrade(num: number, index: number) {
        var str = this['grade_text_' + (index - 1) + '_0'].text;
        if (str == '') {
            this['grade_text_' + (index - 1) + '_0'].text = '' + num;
        } else {
            var type = parseInt(str);
            if (type < num) {
                this['grade_text_' + (index - 1) + '_0'].text = '' + num;
            }
        }
    }
    /**筹码池分数(自己)  */
    private onplaygrade(num: number, index: number) {
        var str = this['grade_text_' + (index - 1) + '_1'].text;
        if (str == '') {
            this['grade_text_' + (index - 1) + '_1'].text = '' + num;
        } else {
            var type = parseInt(str);
            if (type < num) {
                this['grade_text_' + (index - 1) + '_1'].text = '' + num;
            }
        }
    }
    /**准备 开始回调 */
    public onClick(e: egret.TouchEvent): void {
        if (e.target == this.wanjialist) {
            this.wanjialiebiao(EventConst.niuniu_player);
            this.wanjialist.visible = false;
            egret.Tween.get(this.wanjia).to({ x: 0 }, 400);
        } else if (e.target == this.packup) {
            egret.Tween.get(this.wanjia).to({ x: -237 }, 400).call(function () {
                this.wanjialist.visible = true;
            }, this);
        } else if (e.target == this._btn_double_1) {
            this.onTouchBet(1);
        } else if (e.target == this._btn_double_2) {
            this.onTouchBet(2);
        } else if (e.target == this._btn_double_3) {
            this.onTouchBet(3);
        } else if (e.target == this._btn_double_4) {
            this.onTouchBet(4);
        } else if (e.target == this._btn_double_5) {
            this.onTouchBet(5);
        } else if (e.target == this.effectTouch0) {
            console.log(this.lastTouchBetIndex);
            if (this.isAction) {
                this.sendamessage(EventConst.niuniu_dobet, 1, this.multipleList[this.lastTouchBetIndex - 1]);
            }
        } else if (e.target == this.effectTouch1) {
            console.log(this.lastTouchBetIndex);
            if (this.isAction) {
                this.sendamessage(EventConst.niuniu_dobet, 2, this.multipleList[this.lastTouchBetIndex - 1]);
            }
        } else if (e.target == this.effectTouch2) {
            console.log(this.lastTouchBetIndex);
            if (this.isAction) {
                this.sendamessage(EventConst.niuniu_dobet, 3, this.multipleList[this.lastTouchBetIndex - 1]);
            }
        } else if (e.target == this.effectTouch3) {
            console.log(this.lastTouchBetIndex);
            if (this.isAction) {
                this.sendamessage(EventConst.niuniu_dobet, 4, this.multipleList[this.lastTouchBetIndex - 1]);
            }
        } else if (e.target == this._btn_close) {
            this.buttonClose();
        } else if (e.target == this._btn_meun) {

            /*
            if(this._faPai_arr != []) {
                for(let i=0; i<this._faPai_arr.length; i++) {
                    this._faPai_arr[i].parent.removeChild(this._faPai_arr[i]);
                }
                this._faPai_arr = [];
            }
            this.numIndex = setInterval(this.faPaiEff.bind(this), 500);
            */
            this.cdNum = 20;
            this.timeTxt.text = "20";
            this.cdTimer.start();
        }
    }

    /**下注 sendstr 命令 bet 倍数 0~5*/
    private sendamessage(sendstr: string, num: number, bet: number): void {
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: num,
            money: bet
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {
        }, this);
    }
    /**请求玩家列表*/
    private wanjialiebiao(sendstr: string): void {
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {
        }, this);
    }
/**
 * 自己加入房间
 */
    private addPlayers(data): void {

        //设置自己信息
        var mask2: egret.Shape = new egret.Shape;
        mask2.graphics.beginFill(0xff0000);
        mask2.graphics.drawCircle(62, 62, 62);
        mask2.graphics.endFill();
        mask2.x = this.imghead0.x + 6;
        mask2.y = this.imghead0.y + 5;
        this.grpHead0.addChild(mask2);
        this.imghead0.mask = mask2;

        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
        this.imghead0.source = "F1_03_png";

    }

    /**退出房间成功 */
    private onleave(data: any) {
        if (data._obj.code == 200) {
            xlLib.PopUpMgr.removePopUp(Inthematch, 1);
            xlLib.SoundMgr.instance.stopBgMusic();
            let musicBg = ["hall_bg_mp3"];
            xlLib.SoundMgr.instance.playBgMusic(musicBg);
            xlLib.SceneMgr.instance.changeScene(Lobby);
        }
    }
    /**返回游戏大厅 */
    private buttonClose(): void {

        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        if (UserInfo.getInstance().isGameStart) {
            xlLib.PopUpMgr.addPopUp(Hint, this, true, true, null, 1);
            return;
        }

        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_leave, senddata, (data) => {
        }, this);
    }

    /**播放 胜利 通杀 通赔 动画 */
    public victoryEffect(): void {
        clearInterval(this.interval);
        this.interval = 0;
        /*
        if (this.game_result == 1) {
            // this.addNNVictoryEffect();
            this.game_result = 0;
        } else if (this.game_result == 2) {
            // this.addTongsha();
            this.game_result = 0;
        } else if (this.game_result == 3) {
            // this.addTongpei();
            this.game_result = 0;
        }*/

    }

    public resize(): void {

    }

    //筹码选择
    private onTouchBet(index): void {
        if (this.lastTouchBetIndex == index) {
            return;
        }
        this.lastTouchBetIndex = index;
        switch (index) {
            case 1: this._xuanzho.x = 92.49; break;
            case 2: this._xuanzho.x = 244.97; break;
            case 3: this._xuanzho.x = 396.51; break;
            case 4: this._xuanzho.x = 547.43; break;
            case 5: this._xuanzho.x = 695.9; break;
        }
    }

    private moneyStr(money: number): string {
        if (money >= 10000 && money < 100000000) {
            return this.get2Num(money / 10000) + "万";
        } else if (money >= 100000000) {
            return this.get2Num(money / 100000000) + "亿";
        } else {
            return money + "";
        }
    }

    private get2Num(num: number): string {
        var str = num.toFixed(3);
        str = str.substr(0, str.length - 1);;
        var arr = str.split(".");
        if (arr[1] + "" == "00") {
            return arr[0] + "";
        }
        return str + "";
    }

    //========================== Effect Show ===============================

    //显示筹码
    private showCoins(pos: egret.Point, num: number, msg: number): void {
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(8));
        var point: egret.Point = BRNNUtil.getInstance().getCoinsPos(msg);
        var coin = BRNNUtil.getInstance().coinsType(pos, num);
        var tx = point.x + Math.random() * 80;
        var ty = point.y + Math.random() * 80;
        this.grpCoins.addChild(coin);

        let _group = this["effectTouch" + (msg-1)];
        let _nnwt = this["_nnwt_" + (msg-1)];
        let _x = _group.x+_nnwt.x;
        let _y = _group.y+_nnwt.y;

        coin.anchorOffsetX = coin.width / 2,
        coin.anchorOffsetY = coin.height / 2;
        var l = Math.floor(700 * Math.random()) + 100;
        egret.Tween.get(coin).to({
            x: _x + Math.floor(Math.random() * _group.width * 0.8+20),
            y: _y + Math.floor(Math.random() * _group.height * 0.8+10),
            rotation: (360 * Math.random()).toFixed(2)
        },
        l, egret.Ease.cubicInOut);


        if(msg == 1) {
            this._coin_arr_0.push(coin);
        } else if(msg == 2) {
            this._coin_arr_1.push(coin);
        } else if(msg == 3) {
            this._coin_arr_2.push(coin);
        } else if(msg == 4) {
            this._coin_arr_3.push(coin);
        }
        this._coin_total.push(coin);
    }

    public coinFlyPlayer(coin, index):void {
        egret.Tween.removeTweens(coin);
        let _group = this["effectTouch" + (index-1)];
        let _nnwt = this["_nnwt_" + (index-1)];
        let _x = _group.x+_nnwt.x;
        let _y = _group.y+_nnwt.y;

        coin.anchorOffsetX = coin.width / 2,
        coin.anchorOffsetY = coin.height / 2;
        var l = Math.floor(700 * Math.random()) + 100;
        egret.Tween.get(coin).to({
            x: _x + Math.floor(Math.random() * _group.width * 0.8+20),
            y: _y + Math.floor(Math.random() * _group.height * 0.8+10),
            rotation: (360 * Math.random()).toFixed(2)
        },
        l, egret.Ease.cubicInOut);
    }

    public coinFly(coin, _x, _y):void {
        egret.Tween.removeTweens(coin);
        this._coin_banker_arr.push(coin);
        coin.anchorOffsetX = coin.width / 2;
        coin.anchorOffsetY = coin.height / 2;
        var s = Math.floor(600 * Math.random()) + 100;
        egret.Tween.get(coin).wait(Math.floor(100 * Math.random())).to({
            x: _x,
            y: _y,
            rotation: (360 * Math.random()).toFixed(2)
        },
        s, egret.Ease.cubicOut);
    }

//24940 BrnnGameEffectPanel

    private flyIntval_1: number = 0;  //
    private flyIntval_2: number = 0;  //
    private flyIntval_3: number = 0;  //
    private flyIntval_4: number = 0;  //
    private flyIntval_5: number = 0;  //

    private flyIndex_1: number = 0;
    private flyIndex_2: number = 0;
    private flyIndex_3: number = 0;
    private flyIndex_4: number = 0;
    private flyIndex_5: number = 0;

    private faPaiTime = 50;
    private flyPaiTime = 500;
    private pauseTime = 950;
    private expandPaiTime = 400;

    private cardEffect(): void {
        this.flyIntval_1 = setInterval(this.playCardFly_1.bind(this), this.faPaiTime);
        this.flyIntval_2 = setInterval(this.playCardFly_2.bind(this), this.faPaiTime);
        this.flyIntval_3 = setInterval(this.playCardFly_3.bind(this), this.faPaiTime);
        this.flyIntval_4 = setInterval(this.playCardFly_4.bind(this), this.faPaiTime);
        this.flyIntval_5 = setInterval(this.playCardFly_5.bind(this), this.faPaiTime);
    }

    private playCardFly_1(): void {
        this._brnn_banker_txt.visible = false;
        var card: eui.Image = this['bankerCard_'+ this.flyIndex_1];
        card.source = 'brnn_card_100_png';
        card.x = 930;
        card.y = 130;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        //card.alpha = 0;
        //card.scaleX = 0.2;
        //card.scaleY = 0.2;
        var pos = this.orginBankerCardPos[this.flyIndex_1];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).wait(0).to({ x: pos.x, y: pos.y/*, alpha: 1, scaleX: 1, scaleY: 1*/ }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);

        if (this.flyIndex_1 == 4) {
            this.flyIndex_1 = 0;
            clearInterval(this.flyIntval_1);
        } else {
            this.flyIndex_1++;
        }
    }

    private playCardFly_2(): void {
        var card: eui.Image = this['grpCard_' + 0 + '_' + this.flyIndex_2];
        card.source = 'brnn_card_100_png';
        card.x = 930;
        card.y = 130;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        //card.alpha = 0;
        //card.scaleX = 0.2;
        //card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[0][this.flyIndex_2];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).wait(200).to({ x: pos.x, y: pos.y/*, alpha: 1, scaleX: 1, scaleY: 1*/ }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_2 == 4) {
            this.flyIndex_2 = 0;
            clearInterval(this.flyIntval_2);
        } else {
            this.flyIndex_2++;
        }
    }

    private playCardFly_3(): void {
        var card: eui.Image = this['grpCard_' + 1 + '_' + this.flyIndex_3];
        card.source = 'brnn_card_100_png';
        card.x = 930;
        card.y = 130;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        //card.alpha = 0;
        //card.scaleX = 0.2;
        //card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[1][this.flyIndex_3];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).wait(400).to({ x: pos.x, y: pos.y/*, alpha: 1, scaleX: 1, scaleY: 1*/ }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_3 == 4) {
            this.flyIndex_3 = 0;
            clearInterval(this.flyIntval_3);
        } else {
            this.flyIndex_3++;
        }
    }

    private playCardFly_4(): void {
        var card: eui.Image = this['grpCard_' + 2 + '_' + this.flyIndex_4];
        card.source = 'brnn_card_100_png';
        card.x = 930;
        card.y = 130;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        //card.alpha = 0;
        //card.scaleX = 0.2;
        //card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[2][this.flyIndex_4];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).wait(600).to({ x: pos.x, y: pos.y/*, alpha: 1, scaleX: 1, scaleY: 1*/ }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_4 == 4) {
            this.flyIndex_4 = 0;
            clearInterval(this.flyIntval_4);
        } else {
            this.flyIndex_4++;
        }
    }

    private playCardFly_5(): void {
        var card: eui.Image = this['grpCard_' + 3 + '_' + this.flyIndex_5];
        card.source = 'brnn_card_100_png';
        card.x = 930;
        card.y = 130;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        //card.alpha = 0;
        //card.scaleX = 0.2;
        //card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[3][this.flyIndex_5];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).wait(800).to({ x: pos.x, y: pos.y/*, alpha: 1, scaleX: 1, scaleY: 1 */}, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_5 == 4) {
            this.flyIndex_5 = 0;
            clearInterval(this.flyIntval_5);
        } else {
            this.flyIndex_5++;
        }
    }

    private bankerCardRotation(): void {
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(7));
        clearInterval(this.interval);
        
        var poke = this.cardResult.players[0];
        let cardType = this.labCardTypeBanker;
        cardType.anchorOffsetX = cardType.width / 2;
        cardType.anchorOffsetY = cardType.height / 2;
        cardType.x = cardType.x + cardType.width / 2;
        cardType.y = cardType.y + cardType.height / 2;

        let cardTypeBg = this.labCardTypeBanker_bg;
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = 'brnn_card_100_png';
            var s = card.x;
            egret.Tween.get(card).to({
                x: this['bankerCard_' + 2].x
            },
            200).call(function() {
                this[0].source = 'brnn_card_' + this[1] + '_png';
            }, [card, poke.cardsList[i]]).wait(100).to({
                x: s
            },
            200).call(this.showAllCardType, this, [cardTypeBg, cardType]);
            this.playClickSound(BRNNUtil.getInstance().getSoundEffect(7));
        }

        this.effectPlayerIndex = 0;
        this.interval = setInterval(this.playerCardRotation.bind(this), 800);
    }


    private effectPlayerIndex = 0;
    private playerCardRotation(): void {
        if (this.effectPlayerIndex == 4) {
            clearInterval(this.interval)
            this.effectPlayerIndex = 0;
            return;
        }

        //this.playClickSound(BRNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.players;
        var index = this.effectPlayerIndex;

        let cardType = this["labCardType" + index];
        cardType.anchorOffsetX = cardType.width / 2;
        cardType.anchorOffsetY = cardType.height / 2;
        cardType.x = cardType.x + cardType.width / 2;
        cardType.y = cardType.y + cardType.height / 2;
        let cardTypeBg = this["labCardType_bg_" + index];
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + index + '_' + i];
            card.source = 'brnn_card_100_png';
            var s = card.x;
            egret.Tween.get(card).to({
                x: this['grpCard_' + index + '_' + 2].x
            },
            200).call(function() {
                this[0].source = 'brnn_card_' + this[1] + '_png';
            }, [card, poke[index + 1].cardsList[i]]).wait(100).to({
                x: s
            },
            200).call(this.showAllCardType, this, [cardTypeBg, cardType]);
            this.playClickSound(BRNNUtil.getInstance().getSoundEffect(7));
        }
        this.effectPlayerIndex++;
    }

    public showAllCardType(playerTypeBg, playerType) {
        playerTypeBg.visible = true;
        playerType.visible = true;
        playerType.scaleX = playerType.scaleY = 0;
        egret.Tween.get(playerType).to({
            scaleX: 1,
            scaleY: 1
        },
        200);
    }

    

    private blinkEffect(): void {
        clearInterval(this.interval);
        var result = this.cardResult.result;
        for (var i = 0; i < 4; i++) {
            if (result[i] == 1) {
                // this['effectSelect' + i].visible = true;
                // EffectUtils.blinkEffect(this['effectSelect' + i], 200);
            }
        }
        this.interval = setInterval(this.cardEffectEnd.bind(this), 2000);
    }

    private cardEffectEnd(): void {
        clearInterval(this.interval);
        var data = this.cardResult;
        var isShow: boolean = false;
        //显示比牌结果，显示是否通赔或者通杀
        if (data.result[0] == 1 && data.result[1] == 1 && data.result[2] == 1 && data.result[3] == 1) {
            isShow = true;
        }
        if (data.result[0] == 0 && data.result[1] == 0 && data.result[2] == 0 && data.result[3] == 0) {
            isShow = true;
        }
        if (isShow) {
            this.interval = setInterval(this.showGameResult.bind(this), 1000);
        }
        else {
            this.showGameResult();
        }
    }

    //============================================  Game Animation

    private tipGameEff(str:string):void
    {
        if(this._tipGameEff == null) {
            this._tipGameEff = new uiCore.Animator();
            this._tipGameEff.defentAnimationName = str;
            this._tipGameEff.source = str;
            this._tipGameEff.scaleX = 1;
            this._tipGameEff.scaleY = 1;
            this._tipGameEff.x = xlLib.Global.screenWidth / 2;
            this._tipGameEff.y = xlLib.Global.screenHeight / 2;
            this.addChild(this._tipGameEff);
        }
        
        this._tipGameEff.play(str, 1);
        this.startGameEffect(this._tipGameEff);
    }

    public startGameEffect(animation) {
        animation.alpha = 0;
        animation.horizontalCenter = -200;
        animation.visible = true;
        egret.Tween.get(animation).to({
            horizontalCenter: 0,
            alpha: 1
        },
        200, egret.Ease.bounceOut).wait(300).to({
            horizontalCenter: 200,
            alpha: 0
        },
        200, egret.Ease.bounceOut).call(function() {
            animation.visible = false;
            egret.Tween.removeTweens(animation);
            animation.parent.removeChild(animation);
        },
        [animation]);
        this._tipGameEff = null;
    }
    
    public showLightEffect(playLight, value) {
        playLight.visible = true;
        playLight.alpha = 0;
        if(value == true) {
            egret.Tween.get(playLight).to({
                alpha: 1
            },
            300).to({
                alpha: .5
            },
            200).to({
                alpha: 1
            },
            300).to({
                alpha: .5
            },
            200).to({
                alpha: 1
            },
            300).to({
                alpha: .5
            },
            200).to({
                alpha: 1
            },
            200).to({
                alpha: 0
            },
            300).call(function() {
                playLight.visible = false;
                egret.Tween.removeTweens(playLight);
            }, [playLight]);
        } else {
            egret.Tween.get(playLight).to({
                alpha: 1
            },
            300).to({
                alpha: .5
            },
            200).to({
                alpha: 1
            },
            300).to({
                alpha: .5
            },
            200).to({
                alpha: 1
            },
            200).to({
                alpha: 0
            },
            300).call(function() {
                playLight.visible = false;
                egret.Tween.removeTweens(playLight);
            }, [playLight]);
        }
    }

    /**筹码飞行特效 */
    public removeChipIcon(coin, t) {
        //void 0 === a && (a = 500),
        coin.anchorOffsetX = coin.width / 2,
        coin.anchorOffsetY = coin.height / 2;
        var s = Math.floor(600 * Math.random()) + 100;

        egret.Tween.get(coin).wait(Math.floor(100 * Math.random())).to({
            x: t.x,
            y: t.y,
            rotation: (360 * Math.random()).toFixed(2)
        },
        s, egret.Ease.cubicOut).call(function(e, t) {

        },
        this, [coin]);
    }




    //============================================  Game Result
    private showGameResult(): void {
        clearInterval(this.interval);
        
    }

    /**游戏场景重置 */
    private resetGame(): void {
        for (var i = 0; i < 5; i++) {
            let card: eui.Image = this['bankerCard_' + i];
            card.source = '';
            egret.Tween.removeTweens(card);

        }
        this.labCardTypeBanker.visible = false;
        this.labCardTypeBanker_bg.visible = false;
        for (var index = 0; index < 4; index++) {
            this['labCardType' + index].visible = false;
            this['labCardType_bg_' + index].visible = false;
            for (var j = 0; j < 5; j++) {
                let card: eui.Image = this['grpCard_' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
            }
        }

        this._brnn_banker_txt.visible = false;
        for(let i=0; i<this._coin_total.length; i++) {
            egret.Tween.removeTweens(this._coin_total[i]);
            this._coin_total[i].parent.removeChild(this._coin_total[i]);
        }

        this.initData();
    }

    //============================================红包
    public dispose(): void {
        //MusicManage.closeMuisc();
        if (this.parent) {
            this.parent.removeChild(this);
        }
        //EventManage.removeEvent(this);
    }

    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }

    public Onquit(): void {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        //if (UserInfo.getInstance().isGameStart) {
            //xlLib.PopUpMgr.addPopUp(Hint, this, true, true, null, 1);
            //return;
        //}

        xlLib.SoundMgr.instance.stopBgMusic();

        let musicBg = ["hall_bg_mp3"];
        xlLib.SoundMgr.instance.playBgMusic(musicBg);

        xlLib.SceneMgr.instance.changeScene(Lobby);
        UserInfo.getInstance().playes = [];
    }

    public destroy(): void {
        this.wanjialist.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.packup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClose, this);
        this._btn_meun.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);

        this.effectTouch0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onUserList, this.initGameIconList, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.removeEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.removeEventListener(EventConst.onUserLeave, this.onleave, this);

    }

}

