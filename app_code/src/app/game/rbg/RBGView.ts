/**
 * 抢庄牛牛
 */
class RBGView extends eui.Component {
    constructor() {
        super();
        this.skinName = "RBGViewSkin";
        //this.r = r;
    }
    private r: any = null;







    public grpCoins:eui.Group;
public grpCard:eui.Group;
public grpCard_0_0:RBGMahjong;
public grpCard_0_1:RBGMahjong;
public labCardType0:eui.Image;
public grpCard_1_0:RBGMahjong;
public grpCard_1_1:RBGMahjong;
public labCardType1:eui.Image;
public grpCard_2_0:RBGMahjong;
public grpCard_2_1:RBGMahjong;
public labCardType2:eui.Image;
public grpCard_3_0:RBGMahjong;
public grpCard_3_1:RBGMahjong;
public labCardType3:eui.Image;
public grpHead1:RBGHead;
public grpHead2:RBGHead;
public grpHead3:RBGHead;
public _group_qiang_point_0:eui.Group;
public _label_qiang_0:eui.BitmapLabel;
public _group_qiang_point_1:eui.Group;
public _label_qiang_1:eui.BitmapLabel;
public _group_qiang_point_2:eui.Group;
public _label_qiang_2:eui.BitmapLabel;
public _group_qiang_point_3:eui.Group;
public _label_qiang_3:eui.BitmapLabel;
public _group_bet_point_0:eui.Group;
public _label_bet_0:eui.BitmapLabel;
public _group_bet_point_1:eui.Group;
public _label_bet_1:eui.BitmapLabel;
public _group_bet_point_2:eui.Group;
public _label_bet_2:eui.BitmapLabel;
public _group_bet_point_3:eui.Group;
public _label_bet_3:eui.BitmapLabel;
public btnCharge:eui.Image;
public titleName:eui.Label;
public maskhead:eui.Group;
public titleHead:eui.Image;
public btnVip:eui.Image;
public labTitleVip:eui.Label;
public titleLabMoney:eui.BitmapLabel;
public btnClose:eui.Image;
public btnCardHistroy:eui.Image;
public btnCardType:eui.Image;
public btnRedBox:eui.Image;
public grpBankerInfo:eui.Group;
public btnDownBanker:eui.Image;
public btnBankerDown:eui.Image;
public btnUpBanker:eui.Image;
public bankerHead:eui.Image;
public labBankerMoney:eui.BitmapLabel;
public bankerName:eui.Label;
public labBankerLastNum:eui.Label;
public labBankerRank:eui.Label;
public btnVip0:eui.Image;
public labBankerVip:eui.Label;
public grpCountdown:eui.Group;
public labCountdown0:eui.BitmapLabel;
public labCountdown1:eui.BitmapLabel;
public btnBet0:eui.Image;
public btnBet1:eui.Image;
public btnBet2:eui.Image;
public btnBet3:eui.Image;
public btnBet4:eui.Image;
public btnBet5:eui.Image;
public labBet0:eui.Label;
public labBet1:eui.Label;
public labBet2:eui.Label;
public labBet3:eui.Label;
public labBet4:eui.Label;
public labBet5:eui.Label;
public grpBankerList:eui.Group;
public bankerListItem0:eui.Group;
public itemRank0:eui.Label;
public itemName0:eui.Label;
public itemMoney0:eui.Label;
public itemVip0:eui.BitmapLabel;
public bankerListItem1:eui.Group;
public itemRank1:eui.Label;
public itemName1:eui.Label;
public itemMoney1:eui.Label;
public itemVip1:eui.BitmapLabel;
public bankerListItem2:eui.Group;
public itemRank2:eui.Label;
public itemName2:eui.Label;
public itemMoney2:eui.Label;
public itemVip2:eui.BitmapLabel;
public bankerListItem3:eui.Group;
public itemRank3:eui.Label;
public itemName3:eui.Label;
public itemMoney3:eui.Label;
public itemVip3:eui.BitmapLabel;
public bankerListItem4:eui.Group;
public itemRank4:eui.Label;
public itemName4:eui.Label;
public itemMoney4:eui.Label;
public itemVip4:eui.BitmapLabel;
public bankerListItem5:eui.Group;
public itemRank5:eui.Label;
public itemName5:eui.Label;
public itemMoney5:eui.Label;
public itemVip5:eui.BitmapLabel;
public bankerListItem6:eui.Group;
public itemRank6:eui.Label;
public itemName6:eui.Label;
public itemMoney6:eui.Label;
public itemVip6:eui.BitmapLabel;
public bankerListItem7:eui.Group;
public itemRank7:eui.Label;
public itemName7:eui.Label;
public itemMoney7:eui.Label;
public itemVip7:eui.BitmapLabel;
public bankerListItem8:eui.Group;
public itemRank8:eui.Label;
public itemName8:eui.Label;
public itemMoney8:eui.Label;
public itemVip8:eui.BitmapLabel;
public bankerListItem9:eui.Group;
public itemRank9:eui.Label;
public itemName9:eui.Label;
public itemMoney9:eui.Label;
public itemVip9:eui.BitmapLabel;
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
public grpTips:eui.Group;
public grpTipsbg:eui.Image;
public grpTipsInfo:eui.Image;
public imgBaoZhuang:eui.Image;
public grpCaijin:eui.Group;
public grpCaijinLabel:eui.Label;
public _group_di:eui.Group;
public grpHead0:eui.Group;
public imghead0:eui.Image;
public labelHead0:eui.Label;
public labelGold0:eui.Label;
public _my_img_zhuang:eui.Image;
public _btn_switch:eui.Group;
public _btn_double_1:eui.Button;
public _btn_double_2:eui.Button;
public _btn_double_3:eui.Button;
public _btn_double_4:eui.Button;
public _btn_double_5:eui.Button;
public _group_qiang:eui.Group;
public _btn_buqiang:eui.Button;
public _btn_qiang_1:eui.Button;
public _btn_qiang_2:eui.Button;
public _btn_qiang_3:eui.Button;
public _btn_qiang_4:eui.Button;
public _btn_record:eui.Button;
public _btn_close:eui.Button;
public _btn_meun:eui.Button;
public _btn_chat:eui.Button;
public _btn_voice:eui.Button;
public _btn_begin:eui.Button;



public _animation_start:uiCore.Animation;

    //public labHandsel: eui.BitmapLabel;
    //private grpSelectBet: eui.Group;    //筹码底背景
    //public labCurChip: eui.Label;


    //-----------------------------------------------
    private interval: number = -1;      // 游戏计时器间隔
    private selfbetsNum = {};           // 下注总计 
    private betsPostion: number = -1;   // 下注位置 self
    private betsNum: number = 0;        // 下注金额 self
    private cardResult = null;          // 结算扑克结果(最后展示处理)

    private isChangeBanker: boolean = false;    // 判断是否更换庄家
    private changeBankerObj: Object = {};       // 更换庄家消息(在下一句开始处理)
    private isCanBets: boolean = true;  // 是否可以下注(判断封盘)
    private poolBetArray = {};  // 奖池筹码

    private limitGold: number = 0;  // 上庄限制 金币
    private limitVip: number = 0;   // 上庄限制 Vip

    private curBankerRanking: number = -1;	// 当前庄的排位
    private isApplyBanker: boolean = false;	// 是否正在申请上庄

    private lastGameBankerNum: number = 0;	// 剩余坐庄次数
    private isSysBanker: boolean = false;	// 判断庄是否是系统

    private orginBankerCardPos = [];    // 存储庄家扑克位置
    private orginPlayerCardPos = [];    // 存储玩家扑克位置

    private isBanker: boolean = false; 	// 是否当庄 (判断是否可以退出)
    private isBets: boolean = false;	// 是否下注 (判断是否可以退出)

    private maxUserData = null;  // 最大玩家数据 (结算处理)
    private banker_total_gold: number = 0;  // 庄家自身携带的金币
    private isBoomBanker: boolean = false;  // 是否爆庄
    private resultCaijin: number = 0;
    private totalCaijin: number = 0;

    private cdNum: number = 10;     //倒计时计数
    private cdTimer: egret.Timer;   //倒计时时间

    private lastTouchBetIndex: number = -1; //上一次点击的筹码

    private coinsNumArr = {}; //计数桌面4个方位的筹码个数

    private isCoinsReturn: boolean = true;
    private curRate: number = 0;
    private lastTouchBetTime: number = 0;

    private isCardEffectShow: boolean = false; //是否正在显示扑克动画

    //-----------------------------------------------

    private zhaungIndex: number = 0;    //庄的位置

    private diceGroup:eui.Group;
    private dice0:eui.Image;
    private dice1:eui.Image;
    private diceBg:eui.Image;
    private diceBottom:eui.Image;
    private diceTop:eui.Image;

    //private timeList = [];
    //private effectList = [];
    //private intervalList = [];
    //private animationList = [];
    //private firstPlayerNo = -1;

    private table_0 = "bar_btn_table_bg_0_png";
    private roomSize = 4;
    private mySeatNo = 0;
    private blink = 0;
    private theFirstGame = false;
    private gameStartTimeout = -1;
    private gameIndex = 0;
    private round = 0;
    private roundId = "";
    private myBetNumber = 0;
    private totalBetNumber = 0;
    private chipPool = [];
    private chipList = [];
    private chipTotal = 0;
    private chipEffectTimeout = -1;
    private removeChipTimeout = -1;
    private chipPosList = [40, 40, 40, -130];
    private grabInterval = -1;
    private grabTime = 6;
    private totalTime = 0;
    private bankerInterval = -1;
    private runningTime = 0;
    private bankerList = [];
    private bankerChair = 0;
    private betInterval = -1;
    private betTime = 6;
    private diceInterval = -1;
    private startDiceTimeout = -1;
    private diceResultTimeout = -1;
    private firstPlayer = -1;
    private sendingInterval = -1;
    private sendCount = 0;
    private killTimeout = -1;
    private gameType = 1;
    private bankerFlag = false;
    private resultList = [];
    private resultDone = false;
    private continueInterval = -1;
    private continueTime = 5;
    private roomType = 0;
    private effectList = [];
    private timeList = [];
    private intervalList = [];
    private animationList = [];
    private isReconnect = false;

    //-----------------------------------------------

    protected childrenCreated(): void {
        //this.setTouchEnabled();
        this.getOrginCardPos();
        this.addEvent();
        this.initData();

        this.setCountdown();
        // //this.onTouchBet(0);
        // //PanelManage.openChat(this, 112, 300, "10003");
        // //this.joinCallback(this.r);
        // this.resize();

        //this.labelHead0.text = UserInfo.getInstance().username;
        //this.labelGold0.text = "" + UserInfo.getInstance().goldcoins;

    }
    /**
     * 数据初始化
     */
    private initData(): void {
        //this.labBankerRank.text = '';
        //this.labBankerLastNum.text = '';
        //this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.grpBankerList.visible = false;
        this.grpCoins.touchEnabled = false;
        this.grpTips.touchEnabled = false;
        this.grpTips.touchChildren = false;
        //this.grpSecondPanel.visible = false;
        //this.btnUpBanker.visible = true;
        //this.btnDownBanker.visible = false;
        this.grpTips.visible = false;
        this.grpResult.visible = false;
        this.imgBaoZhuang.visible = false;
        //this.grpCardType.touchChildren = false;
        //this.grpCardType.touchEnabled = false;
        //this.grpCaijin.visible = false;
        this.grpCard.visible = true;

        //this._btn_begin.visible = true;
        this._btn_switch.visible = false;
        this._group_qiang.visible = false;

        //-----------------------------------------------
        this.zhaungIndex = 0;   //庄的座位号（当前游戏的座位号）



        //-----------------------------------------------
    }

    /**
     * 获取原始扑克的位置
     */
    private getOrginCardPos(): void {
        for (var index = 0; index < 4; index++) {
            //this['labCardResult' + index].text = '';
            this['labCardType' + index].visible = false;
            var cardPos = [];
            for (var j = 0; j < 2; j++) {
                var card:RBGMahjong = this['grpCard_' + index + '_' + j];
                card.setPai(null);
                card.setAnPai(true);
                card.visible = false;
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos: egret.Point = new egret.Point;
                pos.x = card.x;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayerCardPos[index] = cardPos;
            
        }
        for (let i = 1; i < 4; i++) {
            this['grpHead' + i].setUserInfo("", "", "");
        }
    }

    public resize(): void {

    }
    /**准备 开始回调 */
    public onClick(e: egret.TouchEvent): void {

        if (e.target == this._btn_begin) {
            console.log("_btn_begin");
            let senddata: any = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token,
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.erbagang_start, senddata, (data) => {
                this._btn_begin.visible = false;
                // this._group_qiang.visible = true;
                UserInfo.getInstance().isGameStart = true;
            }, this);
        } else if (e.target == this._btn_buqiang) {
            console.log("_btn_buqiang");
            this.sendamessage(EventConst.erbagang_hog, 0);
        } else if (e.target == this._btn_qiang_1) {
            console.log("_btn_qiang_1");
            this.sendamessage(EventConst.erbagang_hog, 1);
        } else if (e.target == this._btn_qiang_2) {
            console.log("_btn_qiang_2");
            this.sendamessage(EventConst.erbagang_hog, 2);
        } else if (e.target == this._btn_qiang_3) {
            console.log("_btn_buqiang");
            this.sendamessage(EventConst.erbagang_hog, 3);
        } else if (e.target == this._btn_qiang_4) {
            console.log("_btn_qiang_4");
            this.sendamessage(EventConst.erbagang_hog, 4);
        } else if (e.target == this._btn_double_1) {
            console.log("_btn_double_1");
            this.sendamessage1(EventConst.erbagang_bet, 1);
            this._btn_switch.visible = false;
        } else if (e.target == this._btn_double_2) {
            console.log("_btn_double_2");
            this.sendamessage1(EventConst.erbagang_bet, 2);
            this._btn_switch.visible = false;
        } else if (e.target == this._btn_double_3) {
            console.log("_btn_double_3");
            this.sendamessage1(EventConst.erbagang_bet, 3);
            this._btn_switch.visible = false;
        } else if (e.target == this._btn_double_4) {
            console.log("_btn_double_4");
            this.sendamessage1(EventConst.erbagang_bet, 4);
            this._btn_switch.visible = false;
        } else if (e.target == this._btn_double_5) {
            console.log("_btn_double_5");
            this.sendamessage1(EventConst.erbagang_bet, 5);
            this._btn_switch.visible = false;
        }
    }

    private sendamessage(sendstr: string, bet: number): void {

        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {

        }, this);
        this._group_qiang.visible = false;
    }

    private sendamessage1(sendstr: string, bet: number): void {
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {

        }, this);

        //this._btn_double_1.touchEnabled = false;
        //this._btn_double_2.touchEnabled = false;
        //this._btn_double_3.touchEnabled = false;
        //this._btn_double_4.touchEnabled = false;
        //this._btn_double_5.touchEnabled = false;
    }
    /**注册事件 */
    private addEvent(): void {
        
	    this._btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_buqiang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_qiang_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_qiang_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_qiang_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_qiang_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        // this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);

        /**服务器回调 */
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);

        /**显示抢庄*/
        EventUtil.addEventListener(EventConst.hog, this.onHogBack, this);
        /**显示其他玩家抢庄倍数*/
        EventUtil.addEventListener(EventConst.hognum, this.onHognumBack, this);
        /**返回庄家 */
        EventUtil.addEventListener(EventConst.banker, this.acceptbanker, this);
        /**显示倍数*/
        EventUtil.addEventListener(EventConst.bet, this.onBetBack, this);
        /**返回其他用户下注倍数 */
        EventUtil.addEventListener(EventConst.betnum, this.onBetnumBack, this);
        /**返回骰子 */
        //EventUtil.addEventListener(EventConst.dice, this.onDiceBack, this);
        /**返回结算 */
        EventUtil.addEventListener(EventConst.summary, this.over, this);
        
        
        var data = {
             pokes: [{ num: 2, type: 2, value: [2, 3] },
             { num: 1, type: 1, value: [5, 6] },
             { num: 2, type: 2, value: [8, 7] },
             { num: 2, type: 2, value: [3, 3] }],
             result: [0, 0, 0, 1],
             bankerWin: 0,
             rate: "0.05",
             bomb: "0"
        };
        //this.cdNum = 5;

        //this.setGameResult(data);
        //this.setCountdown();
        //this.cardEffect();

        //var gameStartAnimator =  AnimationUtils.gameStartAnimator();
        //this.addChild(gameStartAnimator);
        //gameStartAnimator.play();
        //console.log(uiCore.StringUtils.format("bar_effect_start_{0}_png", 6));
        //this._btn_begin.visible = false;

        //var gameStartAnimator =  AnimationUtils.ItemAnimator_i();
        //this.addChild(gameStartAnimator);
        //gameStartAnimator.play("smail", 1);

        /*
        var a = new uiCore.Animator;
        a.source = "qznn_hall_effect_girl";
        a.defentAnimationName = "qznn_hall_effect_girl";
        a.autoPlay = true;
        a.playOnce = true;
        a.x = 700;
        a.y = 500;
        this.addChild(a);
        a.play("newAnimation", 1);*/

        //var e = new uiCore.Animator;
        //e.source = "qznn_hall_effect_girl",
        //e.defentAnimationName = "newAnimation",
        //e.horizontalCenter = -420.5,
        //e.bottom = 360,
        //e.autoPlay = true,
        //this.addChild(e);


        //this._animation_start.play();


        //this.diceGroup = AnimationUtils.diceGroup_i();
        //this.dice0 = AnimationUtils.dice0_i();
        //this.dice1 = AnimationUtils.dice1_i();
        //this.diceBg = AnimationUtils.diceBg_i();
        //this.diceBottom = AnimationUtils.diceBottom_i();
        //this.diceTop = AnimationUtils.diceTop_i();

        //let a = new eui.Image;
        //a.localToGlobal();
        //moveGoldTo

        //this.suiCoreGameEndScoreResultEffect(this, true);


        //var goldFlyAnimator = AnimationUtils.goldFlyAnimation("qznn_jinbi_1_0_{0}_png", 20);
        //this.addChild(goldFlyAnimator);
        //goldFlyAnimator.play();

/*
        var system = new particle.GravityParticleSystem(this._texture, this._config);
            this.addChild(system);
            system.start();
            system.y = 400;
            system.x = 300;
            
            var angle:number = 0;
            egret.startTick(function (timeStamp:number):boolean {
                angle += -2;
                
                system.emitterX = Math.sin(angle * Math.PI / 180) * 200;
                system.emitterY = Math.cos(angle * Math.PI / 180) * 200 / 2;
                
                return false;
            }, this);

*/
/*
        RES.getResByUrl("resource/assets/common/newParticle.png", function(texture:egret.Texture):void {
            this._texture = texture;
            
            this.create();
        }, this, RES.ResourceItem.TYPE_IMAGE);
        RES.getResByUrl("resource/assets/common/newParticle.json", function(data:any):void {
            this._config = data;
            
            this.create();
        }, this, RES.ResourceItem.TYPE_JSON);
        */

        var container = new egret.DisplayObjectContainer();
        this.addChild(container);
        container.x = 300;
        container.y = 0;

        //读取一个骨骼数据,并创建实例显示到舞台
        //var skeletonData = RES.getRes("qznn_hall_effect_girl_ske_json");
        //var textureData = RES.getRes("qznn_hall_effect_girl_tex_json");
        //var texture = RES.getRes("qznn_hall_effect_girl_tex_png");

        var skeletonData = RES.getRes("wzqp_ske_json");
        var textureData = RES.getRes("wzqp_tex_json");
        var texture = RES.getRes("wzqp_tex_png");

        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));

        //var armature = factory.buildArmature("qznn_hall_effect_girl");
        var armature = factory.buildArmature("wzqp");
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 100;
        armatureDisplay.y = 500;
        //armatureDisplay.scaleX = 0.5;
        //armatureDisplay.scaleY = 0.5;
        //actionFlag = 0;
        //启动骨骼动画播放
        //armature.animation.gotoAndPlay("newAnimation");
        armature.animation.gotoAndPlay("wzqp");
        egret.startTick(this.onTicker, this);

    }

    /*
    private _texture:egret.Texture;
    private _rock:egret.Texture;
    private _config:any;

    private create():void {
        if (this._texture && this._config ) {
            var system = new particle.GravityParticleSystem(this._texture, this._config);
            this.addChild(system);
            system.start();
            system.y = 400;
            system.x = 300;
            
            var angle:number = 0;
            egret.startTick(function (timeStamp:number):boolean {
                angle += -5;
                console.log(timeStamp);
                
                system.emitterX = Math.sin(angle) * 200;
                system.emitterY = Math.cos(angle) * 200 / 2;
                
                return false;
            }, this);
        }
    }*/






    private _time:number;
    private onTicker(timeStamp:number) {

        if(!this._time) {
            this._time = timeStamp;
        }

        var now = timeStamp;
        var pass = now - this._time;
        this._time = now;

        dragonBones.WorldClock.clock.advanceTime(pass / 1000);

        return false;
    }


/*

     t.prototype.suiCoreGameEndScoreResultEffect = function(e) {
        var t = e.isMyself() ? e.verticalCenter - .65 * e.head.height : e.verticalCenter - .75 * e.head.height
          , i = new eui.BitmapLabel;
        if (i.font = e.playerWinScore >= 0 ? "nn_gameOver0_fnt" : "nn_gameOver1_fnt",
        i.font = e.playerWinScore >= 0 ? "qznn_win_fnt" : "qznn_lose_fnt",
        i.text = e.playerWinScore >= 0 ? "+0" : "0",
        "QZNNPlayer0Skin" == e.skinName ? (i.verticalCenter = t - 22,
        i.horizontalCenter = e.horizontalCenter - 90,
        e.playerWinScore.toString().length > 6 && (i.horizontalCenter = e.horizontalCenter - 90 - 10 * (e.playerWinScore.toString().length - 6))) : (i.verticalCenter = t - 20,
        i.horizontalCenter = e.horizontalCenter,
        i.horizontalCenter = e.horizontalCenter),
        "QZNNPlayer2Skin" == e.skinName && (i.verticalCenter = t - 15,
        i.horizontalCenter = e.horizontalCenter - 10),
        i.scaleX = 1,
        i.scaleY = 1,
        this.addChild(i),
        this.gameOverEffects.push(i),
        e.playerWinScore) {
            if (e.isMyself()) {
                e.playerWinScore > 0 && (this.gameView.effectPlayers.tongsha || 3 == this.gameView.effectPlayers.bankerToPlayer.length || egret.Tween.get(this).wait(1e3).call(this.playGameAnimator, this, ["qznn_effect_win"]),
                uiCore.SoundManager.playEffect("nn_wingold_mp3"));
                var a = e.playerWinScore
                  , n = !1;
                if (a)
                    for (var s = 0; a > s; s++)
                        if (0 != a[s]) {
                            n = !0;
                            break
                        }
                n && uiCore.SoundManager.playEffect("nn_scrollnumber_mp3")
            }
            if (0 != e.playerWinScore) {
                var r = {
                    useEasing: !1,
                    useGrouping: !0,
                    separator: ",",
                    decimal: "."
                }
                  , o = /^[+-]?[1-9]?[0-9]*\.[0-9]*$/
                  , l = e.playerWinScore
                  , c = o.test(l.toString()) ? 2 : 0
                  , h = new CountUp(i,0,l,c,2.5,r);
                h.error || h.start(),
                egret.Tween.get(this).wait(2600).call(function(e, t) {
                    e.showPlayerMoney(e.chip);
                    var a = uiCore.Utils.formatCurrency(100 * t);
                    i.text = t >= 0 ? "+" + a : a
                }, this, [e, e.playerWinScore])
            }
        }
    }
    ,
    t.prototype.moveGoldToBanker = function(e) {
        var t = this;
        this.cleanAnimator(),
        egret.Tween.get(this).wait(300).call(function() {
            uiCore.SoundManager.playEffect("nn_Dcollectgold_mp3"),
            e.tongsha ? (uiCore.SoundManager.playEffect("qznn_win_all_mp3"),
            t.playGameOverAnimator("qznn_effect_tongsha")) : 3 == e.bankerToPlayer.length ? (uiCore.SoundManager.playEffect("qznn_tongpei_mp3"),
            t.playGameOverAnimator("qznn_effect_tongpei")) : t.moveGold()
        }, this)
    }
    ,
    t.prototype.moveGold = function() {
        var e = this;
        if (uiCore.Application.currentScene instanceof QZNNGameSceneView) {
            var t = uiCore.Application.currentScene
              , i = t.effectPlayers
              , a = t.bankerIndex - 1
              , n = i.playerToBanker.length
              , s = i.bankerToPlayer;
            switch (n) {
            case 0:
                for (var r = 0; r < s.length; r++)
                    this.moveAnimation(a, s[r]);
                uiCore.SoundManager.playEffect("nn_Dcollectgold_mp3");
                break;
            case 1:
                this.moveAnimation(i.playerToBanker[0], a),
                egret.Tween.get(this).wait(1100).call(function() {
                    for (var t = 0; t < s.length; t++)
                        e.moveAnimation(a, s[t])
                }),
                uiCore.SoundManager.playEffect("nn_collectgold_mp3");
                break;
            case 2:
                for (var r = 0; 2 > r; r++)
                    this.moveAnimation(i.playerToBanker[r], a);
                egret.Tween.get(this).wait(1100).call(function() {
                    e.moveAnimation(a, s[0])
                }),
                uiCore.SoundManager.playEffect("nn_collectgold_mp3");
                break;
            case 3:
                for (var r = 0; 3 > r; r++)
                    this.moveAnimation(i.playerToBanker[r], a);
                uiCore.SoundManager.playEffect("nn_Dcollectgold_mp3")
            }
        }
    }
    ,
    t.prototype.moveAnimation = function(e, t) {
        var i = this
          , a = new uiCore.Animator;
        switch (a.source = "qznn_showScore" + e + "-" + t,
        a.defentAnimationName = "qznn_showScore" + e + "-" + t,
        a.playOnce = !0,
        this.addChild(a),
        this.animatorList.push(a),
        a.verticalCenter = 0,
        a.horizontalCenter = 0,
        e) {
        case 0:
            1 == t ? (a.horizontalCenter = "-480",
            a.verticalCenter = "135") : 2 == t ? (a.horizontalCenter = "-215",
            a.verticalCenter = "20") : (a.horizontalCenter = "20",
            a.verticalCenter = "110");
            break;
        case 1:
            0 == t ? (a.horizontalCenter = "-480",
            a.verticalCenter = "135") : 2 == t ? (a.horizontalCenter = "-280",
            a.verticalCenter = "-120") : (a.horizontalCenter = "-20",
            a.verticalCenter = "-40");
            break;
        case 2:
            0 == t ? (a.horizontalCenter = "-270",
            a.verticalCenter = "30") : 1 == t ? (a.horizontalCenter = "-300",
            a.verticalCenter = "-110") : (a.horizontalCenter = "240",
            a.verticalCenter = "-90");
            break;
        case 3:
            0 == t ? (a.horizontalCenter = "0",
            a.verticalCenter = "160") : 1 == t ? (a.horizontalCenter = "0",
            a.verticalCenter = "0") : (a.horizontalCenter = "230",
            a.verticalCenter = "-130")
        }
        a.addHander(function(e) {
            i.removeChild(e);
            var t = i.animatorList.indexOf(e);
            -1 != t && i.animatorList.splice(t, 1)
        }, this, [a])
    }

*/





































/*
    public moveGoldTo(e) {
        var t = this,
        i = this.JackpotGroup,
        a = this["player" + e].playerGold;
        if (!uiCore.Application.isGameHide) for (var n = 0; 15 > n; n++) {
            var s = new eui.Image,
            r = i.parent.localToGlobal(i.x, i.y),
            o = a.parent.localToGlobal(a.x, a.y);
            s.source = "nn_cion_png",
            this.addChild(s),
            s.scaleX = .8,
            s.scaleY = .8,
            this.goldList.push(s),
            r = this.globalToLocal(r.x, r.y),
            o = this.globalToLocal(o.x, o.y),
            s.x = r.x + 0.5 * i.width,
            s.y = r.y + 0.3 * i.height,
            egret.Tween.get(s).wait(40 * n).to({
                x: o.x + 0.5 * a.width,
                y: o.y + 0.3 * a.height
            },
            300).call(function(e) {
                var i = t.goldList.indexOf(e); - 1 != i && (t.goldList.splice(i, 1), t.removeChild(e))
            },
            this, [s])
        }
    }*/

    //20338

    public getPlayerViewBySeatID = function(e) {
        //var t = this.getSeatID(e);
        //return this["player" + t]
    }

    public setFirstAnimation() {
        /*
        this.winNumberGroup.visible = !1,
        this.loseNumberGroup.visible = !1,
        this.firstFloat.visible = !0,
        this.deleteEffectList("firstFloat"),
        this.firstFloat.y = -70;
        var e = -70,
        t = e + 10;
        egret.Tween.get(this.firstFloat).to({
            y: t
        },
        300).to({
            y: e
        },
        300).to({
            y: t
        },
        300).to({
            y: e
        },
        300).to({
            y: t
        },
        300).to({
            y: e
        },
        300).to({
            y: t
        },
        300),
        this.pushEffectList("firstFloat")
        */
    }

    public setSice(e, t, i, a) {
        void 0 === a && (a = 4e3),
        this.dice0.source = "bar_sicbo_" + e + "_png",
        this.dice1.source = "bar_sicbo_" + t + "_png",
        this.firstPlayer = i,
        this.diceBottom.visible = false,
        this.dice0.visible = false,
        this.dice1.visible = false,
        this.diceTop.visible = false,
        a >= 4e3 ? (this.deleteIntervalList("diceInterval"), this.diceInterval = egret.setInterval(this.setDiceAnimation, this, 200), this.pushIntervalList("diceInterval"), this.deleteTimeList("startDiceTimeout"), this.startDiceTimeout = egret.setTimeout(function() {
            //uiCore.SoundManager.playEffect("bar_throw_dice_mp3")
        },
        this, 300), this.pushTimeList("startDiceTimeout"), this.deleteTimeList("diceResultTimeout"), this.diceResultTimeout = egret.setTimeout(this.playDiceResult, this, 2800), this.pushTimeList("diceResultTimeout")) : (this.diceBg.visible = false, this.diceBottom.visible = true, this.dice0.visible = true, this.dice1.visible = true, this.diceTop.visible = true, this.diceTop.horizontalCenter = 16, this.diceTop.verticalCenter = -102, this.diceTop.alpha = 1, this.getPlayerViewBySeatID(this.firstPlayer)/*.setFirstAnimation()*/)
    }

    public setDiceAnimation() {
        this.diceGroup.visible = true,
        this.deleteEffectList("diceBg"),
        this.diceBg.visible = true,
        this.diceBg.rotation = 0,
        this.pushEffectList("diceBg"),
        egret.Tween.get(this.diceBg).to({
            rotation: 20
        },
        50).to({
            rotation: 0
        },
        50).to({
            rotation: -20
        },
        50).to({
            rotation: 0
        },
        50)
    }

    public stopDiceAnimation() {
        this.deleteEffectList("diceBg"),
        this.deleteEffectList("diceTop"),
        this.diceBg.visible = false,
        this.diceTop.visible = false,
        this.dice0.visible = false,
        this.dice1.visible = false,
        this.diceBottom.visible = false,
        this.diceGroup.visible = false
    }

    public playDiceResult() {
        this.deleteIntervalList("diceInterval"),
        this.deleteEffectList("diceBg");
        var e = this.diceBg.verticalCenter;
        this.pushEffectList("diceBg"),
        egret.Tween.get(this.diceBg).to({
            verticalCenter: e - 10
        },
        150).to({
            verticalCenter: e
        },
        150).wait(100).call(function() {
            this.deleteEffectList("diceBg"),
            this.diceBg.visible = false,
            this.diceBottom.visible = true,
            this.dice0.visible = true,
            this.dice1.visible = true,
            this.diceTop.visible = true,
            this.diceTop.horizontalCenter = 16,
            this.diceTop.verticalCenter = -102,
            this.diceTop.alpha = 1,
            this.pushEffectList("diceTop"),
            egret.Tween.get(this.diceTop).to({
                rotation: 75,
                horizontalCenter: 500,
                verticalCenter: -400
            },
            400).to({
                alpha: 0
            },
            50),
            this.getPlayerViewBySeatID(this.firstPlayer).setFirstAnimation()
        },
        this)
    }

    public pushAnimation(e) {
        this.animationList.indexOf(e) < 0 && this.animationList.push(e)
    }

    public deleteAnimation(e) {
        var t = this.animationList.indexOf(e);
        t > -1 && (this[e].stop(), this[e].visible = false, this.animationList.splice(t, 1))
    }

    public removeAllAnimation() {
        for (var e = 0,
        t = this.animationList,
        i = t.length; i > e; e++) this[t[e]].stop(),
        this[t[e]].visible = !1;
        this.animationList = []
    }

    public pushEffectList(e) {
        this.effectList.indexOf(e) < 0 && this.effectList.push(e)
    }

    public deleteEffectList(e) {
        var t = this.effectList.indexOf(e);
        t > -1 && ( - 1 != this[e] && egret.Tween.removeTweens(this[e]), this.effectList.splice(t, 1))
    }

    public removeAllEffectList() {
        for (var e = 0,
        t = this.effectList,
        i = t.length; i > e; e++) - 1 != this[t[e]] && egret.Tween.removeTweens(this[t[e]]);
        this.effectList = []
    }

    public pushTimeList(e) {
        this.timeList.indexOf(e) < 0 && this.timeList.push(e)
    }

    public deleteTimeList(e) {
        var t = this.timeList.indexOf(e);
        t > -1 && ( - 1 != this[e] && (egret.clearTimeout(this[e]), this[e] = -1), this.timeList.splice(t, 1))
    }

    public removeAllTimeList() {
        for (var e = 0,
        t = this.timeList,
        i = t.length; i > e; e++) - 1 != this[t[e]] && (egret.clearTimeout(this[t[e]]), this[t[e]] = -1);
        this.timeList = []
    }

    public pushIntervalList(e) {
        this.intervalList.indexOf(e) < 0 && this.intervalList.push(e)
    }

    public deleteIntervalList(e) {
        var t = this.intervalList.indexOf(e);
        t > -1 && ( - 1 != this[e] && (egret.clearInterval(this[e]), this[e] = -1), this.intervalList.splice(t, 1))
    }

    public removeAllIntervalList() {
        for (var e = 0,
        t = this.intervalList,
        i = t.length; i > e; e++) - 1 != this[t[e]] && (egret.clearInterval(this[t[e]]), this[t[e]] = -1);
        this.intervalList = []
    }

    //-------------------------------服务器回调------------------------------

    /**
     * 自己加入房间
     */
    private addPlayers(data): void {

        //设置自己信息
        /*
        var mask2: egret.Shape = new egret.Shape;
        mask2.graphics.beginFill(0xff0000);
        mask2.graphics.drawCircle(62, 62, 62);
        mask2.graphics.endFill();
        mask2.x = this.imghead0.x + 6;
        mask2.y = this.imghead0.y + 5;
        this.grpHead0.addChild(mask2);
        this.imghead0.mask = mask2;

        if (data._obj.player[0].id == UserInfo.getInstance().myPlayer.id) {
            this.labelHead0.text = UserInfo.getInstance().myPlayer.username;
            this.labelGold0.text = UserInfo.getInstance().myPlayer.goldcoins + "";
            this.imghead0.source = "F1_03_png";
        }

        let dd = UserInfo.getInstance().playes;*/
        //设置其他玩家信息
        for (let i = 0; i < UserInfo.getInstance().playes.length; i++) {
            if (data._obj.player[i] != null) {
                this['grpHead' + i].setUserInfo(UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins, "women6_png");//data._obj.player[i].headimg
            } else {
                //this['grpHead' + i].setUserInfo("圣诞节回复", "100000", "F4_03_png");
                this['grpHead' + i].setUserInfo("", "", "");
            }
        }
    }

    //加入房间新玩家
    public playerJoinRoom(data): void {
        console.log(data._obj.player.id);
        console.log(UserInfo.getInstance().myPlayer.id);


        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {

        } else {
            this['grpHead' + data._obj.player.index].setUserInfo(data._obj.player.username, data._obj.player.goldcoins, "women6_png");
        }
    }

    private onHogBack(data: any): void {
        this._group_qiang.visible = true;
    }

    private onHognumBack(data: any): void {
        //console.log(data._obj.hogOrBet);
        this.qiangBetPointShow(data._obj.index, data._obj.hogOrBet);
    }

    private acceptbanker(data: any): void {

        let num = UserInfo.getInstance().findSeatNumber(data._obj.index);
        this.zhaungIndex = num;

        if (num == 0) {
            this._my_img_zhuang.visible = true;
        } else {
            this['grpHead' + num].setZhuang(true);
        }

    }

    private onBetBack(data: any): void {
        this.showGameTips(2);
        this._group_qiang.visible = false;
        this._btn_switch.visible = true;
    }

    private onBetnumBack(data: any): void {
        //console.log(data);
        //console.log("用户下注倍数===" + data._obj.hogOrBet);
        this.betPointShow(data._obj.index, data._obj.hogOrBet);
    }

    //private onDiceBack(data: any): void {
    //    console.log(data);
    //}

    private over(data: any): void {

        let result = {
            pokes: [],
            startPoint:0,      //发牌起点
            endPoint:0         //发牌终点
            //result: [1, 0, 0, 0],
            //bankerWin: 0,
            //rate: "0.05",
            //bomb: "0"
        };
        for (let i = 0; i < data._obj.players.length; i++) {
            let err = {
                num: data._obj.players[i].ratio,
                //type: data._obj.players[i].pai.niu,
                value: data._obj.players[i].cardsList,
                index: data._obj.players[i].index,
                win: data._obj.players[i].win,
                score: data._obj.players[i].score
            };
            result.pokes.push(err);
        }

        result.startPoint = data._obj.players[0].index;
        if(data._obj.players[0].index == 3) {
            result.endPoint = 0;
        } else {
            result.endPoint = data._obj.players[0].index + 1;
        }

        console.log(result);
        this.cardResult = result;
        this.cardEffect();
        UserInfo.getInstance().isGameStart = false;  //游戏状态
    }
    
    
    //-------------------------------方法------------------------------

    /**
     * 玩家抢庄倍数提示
     */
    private qiangBetPointShow(index:number, betNum) {
        let num = UserInfo.getInstance().findSeatNumber(index);
        if(betNum == 0) {
            this['_buqiang_point_' + num].visible = true;
            EffectUtils.playEffect5(this['_buqiang_point_' + num], 800, function() {
                //this['_group_qiang_point_' + num].visible = false;
            });
            return;
        }
        this['_group_qiang_point_' + num].visible = true;
        var point:eui.BitmapLabel = this['_label_qiang_' + num];
        point.text = "" + betNum;
        EffectUtils.playEffect5(this['_group_qiang_point_' + num], 800, function() {
            //this['_group_qiang_point_' + num].visible = false;
        });
    }

    /**玩家倍数显示 */
    private betPointShow(index:number, betNum) {
        let num = UserInfo.getInstance().findSeatNumber(index);
        this['_group_bet_point_' + num].visible = true;
        var point:eui.BitmapLabel = this['_label_bet_' + num];
        point.text = "" + betNum;
        EffectUtils.playEffect5(this['_group_bet_point_' + num], 800, function() {
            //this['_group_bet_point_' + num].visible = false;
        });
    }

    /**
     * 定时器
     */
    private setCountdown(): void {
        this.cdTimer = new egret.Timer(1000);
        this.cdTimer.addEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
    }

    private clacTimer(): void {
        //if (this.cdNum % 7 == 0) {
        //    this.getBets();
        //}
        if (this.cdNum > 0) {
            this.cdNum--;
        }
        else {
            this.cdTimer.stop();
            this.cdNum = 0;

            this.resetGame();


            //this.cdNum = 5;
            //this.cardEffect();
        }
        if (this.cdNum < 10) {
            this.labCountdown0.text = '0';
            this.labCountdown1.text = this.cdNum + '';
        }
        else {
            this.labCountdown0.text = (this.cdNum + '').split('')[0];
            this.labCountdown1.text = (this.cdNum + '').split('')[1];
        }
    }

    //msg.state     1 free 禁止玩儿游戏   2 下注中  3 封盘倒计时
    private joinCallback(msg): void {
        if (msg.code == 200) {
            this.curRate = msg.data.rate;
            var data = msg.data;
            var seats = msg.data.seats;
            for (var i = 0; i < seats.length; i++) {
                this['imghead' + seats[i].seat].source = seats[i].headurl;
                this['labelHead' + seats[i].seat].text = seats[i].name;
                this['imghead' + seats[i].seat].height = this['imghead' + seats[i].seat].width = 70;
            }
            this.limitGold = data.limitGold;
            this.limitVip = data.limitVip;
            //this.setHandsel(data.caijin);
            //设置庄信息
            //this.setBankerInfo(data.zhuang);
            //设置倒计时
            this.cdNum = data.time;
            this.cdTimer.start();
            if (msg.state == 1) {
                this.isCanBets = false;
            }
            else if (msg.state == 2) {
                this.isCanBets = true;
            }
            else if (msg.state == 3) {
                this.isCanBets = false;
            }
            console.log('join_game: ' + data.state);
        }
        else {
            //TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
        }
    }

    public onMsgListen(data): void {
        var msg = data.msg
        console.log('onMsgListen: ' + msg.type, '_niuniuMsgListen_');
        switch (msg.type) {
            case 0: //开始下注
                this.cdNum = parseInt(msg.time) + 3;
                this.cdTimer.start();
                break;
            case 1: //封盘
                this.isCanBets = false;
                this.showGameTips(3);
                break;
            case 2: //结算
                this.setGameResult(msg.data);
                break;
            case 3: //更换庄家
                this.changeBankerObj = msg.zhuang;
                this.isChangeBanker = true;
                break;
            case 4: //更新座位
                this.updataSeat(1, msg.data);
                break;
            case 5:	//离开座位
                this.updataSeat(2, msg.seat);
                break;
            case 6://同步彩金
                this.updateHandsel(msg);
                break;
            case 7://通知庄 名次
                //this.updateBankerRank(msg);
                break;
        }
    }

    /**
     * 获取结算数据，显示结果面板时设置
     */
    private setGameResult(data): void {
        //this.grpCountdown.visible = false;
        this.cardResult = data;

    }

    /**
     * 同步座位
     */
    private updataSeat(type, data): void {
        if (type == 1) {
            this['imghead' + data.seat].source = data.headurl;
            this['imghead' + data.seat].height = this['imghead' + data.seat].width = 70;
            this['labelHead' + data.seat].text = data.nick;
        }
        else {
            this['imghead' + data].source = '';
            this['labelHead' + data].text = '';
        }
    }

    //同步彩金 （包含庄结算输赢）
    private updateHandsel(data): void {
        if (this.cardResult == null)
            return;
        //this.resultCaijin = parseInt(data.data.gift);
        //this.totalCaijin = parseInt(data.data.caijin);
        // this.setHandsel(data.data.caijin);
        this.maxUserData = data.data.max;
        this.banker_total_gold = data.data.bankerTotalGold;
        for (let i = 0; i < 4; i++) {
            this['labTipsClick' + i].visible = false;
        }
        this.cardEffect();
    }

    //同步庄的顺位
    /*
    private updateBankerRank(data): void {
        if (!this.isApplyBanker)
            return;
        var id = GlobalData.openid + '@' + GlobalData.platform;
        if (data.id == id) {
            this.curBankerRanking = data.pos;
        }
        else if (data.pos < this.curBankerRanking || data.pos == this.curBankerRanking) {
            this.curBankerRanking++;
        }
        this.labBankerRank.text = '排庄' + this.curBankerRanking;
    }*/

    //获取上庄列表
    //private getBankerList(e): void {
    //    if (e.target && (e.target.name == 'btnUpBanker' || e.target.name == 'btnDownBanker')) {
    //        return;
    //    }
    //    Net.send(Protocol.NIUNIU_BANKER_LIST, {}, this.bankerListCallback.bind(this));
    //}

    //上庄列表
    /*
    private bankerListCallback(msg): void {
        if (msg.code == 200) {
            this.grpBankerList.visible = true;
            for (var i = 0; i < 10; i++) {
                if (i < msg.list.length) {
                    this['bankerListItem' + i].visible = true;
                    this['itemRank' + i].text = i + 1 + '';
                    this['itemName' + i].text = msg.list[i].name;
                    this['itemMoney' + i].text = QuickManage.moneyStr(msg.list[i].gold);
                    this['itemVip' + i].text = 'v' + msg.list[i].vip;
                }
                else {
                    if (i < 3) {
                        this['bankerListItem' + i].visible = true;
                        this['itemRank' + i].text = i + 1 + '';
                        this['itemName' + i].text = '';
                        this['itemMoney' + i].text = '';
                        this['itemVip' + i].text = '';
                    }
                    else {
                        this['bankerListItem' + i].visible = false;
                    }
                }
            }
        }
        else {
            TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
        }
    }*/

    //private onTouchCloseBankerList(): void {
    //    this.grpBankerList.visible = false;
    //}

    //同步下注消息
    //private getBets(): void {
    //    Net.send(Protocol.NIUNIU_GET_BETS, {}, this.getBetsCallback.bind(this));
    //}

    //定时同步下注筹码
    private getBetsCallback(msg): void {
        if (msg.code == 200) {
            var list = msg.list;
            // console.log('------------------- start ----------------------');
            for (var i = 1; i < 5; i++) {
                if (list[i].score != 0) {
                    // console.log('list ' + i + ':' + list[i].score);
                    // console.log('pool ' + i + ':' + this.poolBetArray[i]);
                    if (list[i].score == this.poolBetArray[i])
                        continue;
                    if (this.isCanBets) {
                        this.showCoins(list[i].score - this.poolBetArray[i], i);//list[i].score
                    }
                    if (parseInt(this['labBetsPool' + (i - 1)].text) < (list[i].score / 10000)) {
                        //this['labBetsPool' + (i - 1)].text = QuickManage.moneyStr(list[i].score);
                        this.poolBetArray[i] = list[i].score;
                    }
                    // this['labBetsPool' + (i - 1)].text = QuickManage.moneyStr(list[i].score);
                    // this.poolBetArray[i] = list[i].score;
                }
            }
            // console.log('------------------- end ----------------------');
        }
    }

    //离开游戏判断
    /*
    private onTouchClose(): void {
        if (this.isBanker) {
            //TipsManage.showTips('您是庄家，下庄后方可离开！');
            return;
        }
        if (this.isBets) {
            //TipsManage.showTips('您已经下注，这局结束后方可离开！')
            return;
        }
        Net.send(Protocol.NIUNIU_LEAVE_GAME, {}, (function (msg) {
            if (msg.code == 200) {
                this.dispose();
            }
            else {
                //TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
            }
        }).bind(this));
    }*/

    //充值
    private onTouchCharge(): void {
        //PanelManage.openShop(3);
    }

    //充值返回
    /*
    private updatePayData(data): void {
        GlobalData.user.gold = data.param.msg.gold;
        lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.UPDATE_MAIN));
        this.labTitleVip.text = 'v' + GlobalData.user.vip;
    }

    //上庄
    private onTouchUpBank(): void {
        if (parseInt(GlobalData.user.vip) < this.limitVip) {
            TipsManage.showTips('您的VIP等级未满' + this.limitVip + '级,不能上庄！');
            return;
        }
        if (parseInt(GlobalData.user.gold) < this.limitGold) {
            TipsManage.showTips('您的金币未满' + QuickManage.moneyStr(this.limitGold) + ',不能上庄！');
            return;
        }
        Net.send(Protocol.NIUNIU_UP_BANKER, {}, this.upBankerCallback.bind(this));
    }

    //上庄回调
    private upBankerCallback(msg): void {
        if (msg.code == 200) {
            TipsManage.showTips('申请上庄成功！');
            this.btnDownBanker.visible = true;
            this.btnUpBanker.visible = false;
            this.isApplyBanker = true;
        }
    }

    //下庄
    private onTouchDownBank(): void {
        Net.send(Protocol.NIUNIU_DOWN_BANKER, {}, this.downBankerCallback.bind(this));
    }

    //下庄回调
    private downBankerCallback(msg): void {
        if (msg.code == 200) {
            TipsManage.showTips('申请下庄成功！');
            this.btnDownBanker.visible = false;
            this.btnUpBanker.visible = true;
            this.isApplyBanker = false;
            this.curBankerRanking = -1;
        }
    }

    //vip 座位
    private onTouchSeat(index): void {
        if (this.isBanker) {
            TipsManage.showTips('当前您是庄，不能坐下！');
            return;
        }
        Net.send(Protocol.NIUNIU_SEAT_DOWN, { seat: index }, (function (msg) {
            if (msg.code != 200) {
                TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
            }
        }).bind(this));
    }*/

    //筹码选择
    /*
    private onTouchBet(index): void {
        if (this.isBanker) {
            TipsManage.showTips('您是庄家，不能下注！');
            return;
        }
        if (!this.isCoinsReturn) {
            console.log('touche  Bet++++++++++++++')
            TipsManage.showTips('操作过于频繁，请稍等！');
            return;
        }
        if (this.lastTouchBetIndex == index) {
            return;
        }
        if (this.lastTouchBetIndex != -1) {
            this['btnBet' + this.lastTouchBetIndex].scaleX = this['btnBet' + this.lastTouchBetIndex].scaleY = 1;
        }
        this.lastTouchBetIndex = index;
        this['btnBet' + index].scaleX = this['btnBet' + index].scaleY = 1.2;
        this.betsNum = RBGUtil.getInstance().getBetNumber(index);
        this.labCurChip.text = '注码：' + this['labBet' + index].text;
    }*/
    /*
        private onTouchSelectIndex(index): void {
            if (this.isCardEffectShow)
                return;
            let curTime: number = (new Date).getTime();
            if ((curTime - this.lastTouchBetTime) < 400) {
                return;
            }
            this.lastTouchBetTime = curTime;
            if (this.isBanker) {
                TipsManage.showTips('您是庄家，不能下注！');
                return;
            }
            if (!this.isCoinsReturn) {
                // console.log('touche  select ========================')
                TipsManage.showTips('操作过于频繁，请稍等！');
                return;
            }
            if (this.isCanBets) {
                this.betsPostion = index + 1;
                this.isCoinsReturn = false;
                // console.log('下注位置：' + this.betsPostion + '  金额：' + this.betsNum);
                Net.send(Protocol.NIUNIU_BET_GOLD, { betId: this.betsPostion, gold: this.betsNum }, this.betGlodCallback.bind(this), false);
            }
        }
    
        //下注
        private betGlodCallback(msg): void {
            this.isCoinsReturn = true;
            if (msg.code == 200) {
                this.isBets = true;
                GlobalData.user.gold = (parseInt(GlobalData.user.gold) - this.betsNum) + '';
                this.titleLabMoney.text = QuickManage.moneyStr(parseInt(GlobalData.user.gold));
                // console.log('下注成功 index：' + this.betsPostion + '  金额：' + this.betsNum);
                this.selfbetsNum[this.betsPostion] = parseInt(this.selfbetsNum[this.betsPostion]) + this.betsNum
                this.poolBetArray[this.betsPostion] = parseInt(this.poolBetArray[this.betsPostion]) + this.betsNum;
                this['labBetsPool' + (this.betsPostion - 1)].text = QuickManage.moneyStr(this.poolBetArray[this.betsPostion]);
                this.showCoins(this.betsNum, this.betsPostion);
                //同步自己的金币
                for (var i = 0; i < 4; i++) {
                    this['labBetsSelf' + i].text = QuickManage.moneyStr(this.selfbetsNum[i + 1]);
                }
            }
            else {
                TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
            }
        }
    
        private isFirstSetBanker: boolean = true;
        //设置庄家的消息
        private setBankerInfo(banker): void {
            if (banker.sys == 1) {
                this.bankerHead.source = 'nn.head';
                this.bankerHead.width = this.bankerHead.height = 55;
                this.bankerName.text = '萌萌哒';
                this.labBankerMoney.text = QuickManage.moneyStr(88888880000);
                this.isSysBanker = true;
                this.labBankerLastNum.text = '剩余' + parseInt(banker.num) + '次';
                this.lastGameBankerNum = banker.num;
                this.isBanker = false;
                this.labBankerVip.text = 'v10';
            }
            else {
                if (banker.id == GlobalData.openid + '@' + GlobalData.platform) {
                    this.isBanker = true;
                    this.labBankerRank.text = '';
                }
                else {
                    if (this.isApplyBanker) {
                        if (banker.pos < this.curBankerRanking) {
                            this.curBankerRanking--;
                            this.labBankerRank.text = '排庄' + this.curBankerRanking;
                        }
                    }
                    else {
                        this.labBankerRank.text = '';
                        this.btnDownBanker.visible = false;
                        this.btnUpBanker.visible = true;
                    }
                    this.isBanker = false;
                }
                if (this.bankerName.text != '萌萌哒') {
                    if (!this.isFirstSetBanker) {
                        PanelManage.chat.sendGameChat(this.bankerName.text + '下庄了');
                    }
                }
                this.bankerHead.source = banker.headurl//GlobalData.user.headurl;
                this.bankerHead.width = this.bankerHead.height = 55;
                this.bankerName.text = banker.nick;
                this.labBankerMoney.text = QuickManage.moneyStr(banker.gold);
                this.labBankerLastNum.text = '剩余' + parseInt(banker.num) + '次';
                this.lastGameBankerNum = banker.num;
                this.isSysBanker = false;
                this.labBankerVip.text = 'v' + banker.vip;
                if (!this.isFirstSetBanker) {
                    PanelManage.chat.sendGameChat(this.bankerName.text + '上庄了');
                }
            }
            this.isFirstSetBanker = false;
        }
    
        //设置开奖记录
        private setHistory(): void {
            for (var i = 0; i < 10; i++) {
                this['grpHistory' + i].visible = false;
                for (var m = 0; m < 4; m++) {
                    this['grpHistory' + m + '_' + i].source = '';
                }
            }
        }
    
        private updateGold(): void {
            Net.send(Protocol.NIUNIU_GET_GOLD, {}, this.getGoldCallback.bind(this));
        }
    
        private getGoldCallback(data): void {
            if (data.code == 200) {
                GlobalData.user.gold = data.data.gold;
                lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.UPDATE_MAIN));
            }
        }
    
    */
    //========================== Effect Show ===============================

    //提示信息  2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    private showGameTips(type): void {
        this.grpTipsInfo.source = RBGUtil.getInstance().getMsgSource(type);
        this.grpTips.visible = true;
        this.grpTipsbg.alpha = 0;
        this.grpTipsInfo.x = 640;
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(type));
        egret.Tween.get(this.grpTipsbg).to({ alpha: 1 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ alpha: 0 }, 400);
        }, this.grpTipsbg);
        egret.Tween.get(this.grpTipsInfo).to({ x: 0 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ x: -1640 }, 400);
        }, this.grpTipsInfo);
    }

    //显示筹码
    private showCoins(num, index): void {
        var isRemove: boolean = false;
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(8));
        var point: egret.Point = RBGUtil.getInstance().getCoinsPos(index);
        var arr = RBGUtil.getInstance().coinsType(num);
        if (this.coinsNumArr[index] < 50) {
            this.coinsNumArr[index] = parseInt(this.coinsNumArr[index]) + arr.length;
            isRemove = false;
        }
        else {
            isRemove = true;
        }
        for (var i = 0; i < arr.length; i++) {
            var tx = point.x + Math.random() * 50;
            var ty = point.y + Math.random() * 50;
            this.grpCoins.addChild(arr[i]);
            egret.Tween.get(arr[i]).to({ x: tx, y: ty }, 200).call(function () {
                if (this[0]) {
                    this[1].parent.removeChild(this[1]);
                }
            }, [isRemove, arr[i]]);
        }
    }
/*
    setSice = function(e, t, i, a) {
        void 0 === a && (a = 4),
        this.dice0.source = "bar_sicbo_" + e + "_png",
        this.dice1.source = "bar_sicbo_" + t + "_png",
        this.firstPlayerNo = i,
        this.diceBottom.visible = !1,
        this.dice0.visible = !1,
        this.dice1.visible = !1,
        this.diceTop.visible = !1,
        a >= 4 && !uiCore.Application.isGameHide ? (this.deleteIntervalList("diceInterval"), this.diceInterval = egret.setInterval(this.setDiceAnimation, this, 200), this.pushIntervalList("diceInterval"), this.deleteTimeList("startDiceTimeout"), this.startDiceTimeout = egret.setTimeout(function() {
            uiCore.SoundManager.playEffect("bar_throw_dice_mp3")
        },
        this, 300), this.pushTimeList("startDiceTimeout"), this.deleteTimeList("diceResultTimeout"), this.diceResultTimeout = egret.setTimeout(this.playDiceResult, this, 2800), this.pushTimeList("diceResultTimeout")) : (this.diceBg.visible = !1, this.diceBottom.visible = !0, this.dice0.visible = !0, this.dice1.visible = !0, this.diceTop.visible = !0, this.diceTop.horizontalCenter = 16, this.diceTop.verticalCenter = -102, this.diceTop.alpha = 1, this.getPlayerViewBySeatID(this.firstPlayerNo).setFirstAnimation())
    }*/

    private flyIntval: number = 0;  //
    private flyIndex0: number = 0;  //扑克位置(东西南北)
    private flyIndex1: number = 0;  //扑克(指定位置1，2，3)

    private effectPlayerIndex:number = 0;
    private effectCount:number = 0;
    //private flyBankerIndex: number = 0;
    /**
     * 显示发牌
     */
    private cardEffect(): void {
        this._btn_switch.visible = false;
        this._group_qiang.visible = false;

        this.isCardEffectShow = true;
        this.flyIndex0 = this.cardResult.startPoint;
        this.flyIntval = setInterval(this.playCardFly.bind(this), 200);
    }

    private playCardFly(): void {
        var card:RBGMahjong = this['grpCard_' + this.flyIndex0 + '_' + this.flyIndex1];
        card.setPai(null);
        card.setAnPai(true);
        card.visible = true;
        card.x = 713.5;
        card.y = 300;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        var pos = this.orginPlayerCardPos[this.flyIndex0][this.flyIndex1];
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 300);

        if (this.flyIndex1 == 1) {
            if(this.flyIndex0 == this.cardResult.endPoint) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                clearInterval(this.flyIntval);
                //this.flyBankerIndex = 0;
                //this.flyIntval = setInterval(this.bankerCardFly.bind(this), 200);
                this.effectPlayerIndex = this.cardResult.startPoint;
                this.effectCount = 0;
                this.interval = setInterval(this.playerCardRotation.bind(this), 800);
            }
            if(this.flyIndex0 == 0) {
                this.flyIndex1 = 0;
                this.flyIndex0 = 3;
            } else {
                this.flyIndex1 = 0;
                this.flyIndex0--;
            }
        }
        else {
            this.flyIndex1++;
        }
    }

    private playerCardRotation(): void {
        
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes;
        var index = this.effectCount;
        for (var i = 0; i < 2; i++) {
            var card = this['grpCard_' + this.effectPlayerIndex + '_' + i];
            card.setPai(null);
            card.setAnPai(true);
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].setPai(this[1]);
                this[0].setAnPai(false);
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke[index].value[i]]);
        }
        if(this.effectPlayerIndex == 0) {
            this.effectPlayerIndex = 3;
        } else {
            this.effectPlayerIndex--;
        }
        this.effectCount++;

        if (this.effectPlayerIndex == this.cardResult.startPoint) {
            this.effectPlayerIndex = 0;
            this.effectCount = 0;
            clearInterval(this.interval);
            this.interval = setInterval(this.cardEffectEnd.bind(this), 2000);
            return;
        }
    }

/*
    private bankerCardRotation(): void {
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes[0];
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = 'nn.card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'nn.card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]])
            // console.log('poke_banker: ' + poke.value[i]);
        }
        //this.labCardTypeBanker.source = RBGUtil.getInstance().getCardType(poke.type);
        this.playClickSound(RBGUtil.getInstance().getCardMusicType(poke.type));
        //this.labCardTypeBanker.visible = true;
        //this.labCardTypeBanker.width = 98;
        //this.labCardTypeBanker.height = 44;
        if (poke.type != 0) {
            for (var i = 0; i < 5; i++) {
                var card = this['bankerCard_' + i];
                if (i < 3) {
                    egret.Tween.get(card).wait(700).to({ x: card.x - 10 }, 100);
                }
                else {
                    egret.Tween.get(card).wait(700).to({ x: card.x + 10 }, 100);
                }
            }
        }
        this.interval = setInterval(this.blinkEffect.bind(this), 500);
    }
*/
    private blinkEffect(): void {
        clearInterval(this.interval);
        //var result = this.cardResult.result;
        //for (var i = 0; i < 4; i++) {
        //    if (result[i] == 1) {
        //        //this['effectSelect' + i].visible = true;
        //        //EffectUtils.blinkEffect(this['effectSelect' + i], 200);
        //    }
        //}
        this.interval = setInterval(this.cardEffectEnd.bind(this), 2000);
    }

    private cardEffectEnd(): void {
        clearInterval(this.interval);
        //var data = this.cardResult;
        //var isShow: boolean = false;
        //显示比牌结果，显示是否通赔或者通杀
        //if (data.result[0] == 1 && data.result[1] == 1 && data.result[2] == 1 && data.result[3] == 1) {
        //    this.showGameTips(5);
        //    isShow = true;
        //}
        //if (data.result[0] == 0 && data.result[1] == 0 && data.result[2] == 0 && data.result[3] == 0) {
        //    this.showGameTips(4);
        //    isShow = true;
        //}
        //if (isShow) {
        //    //this.interval = setInterval(this.showGameResult.bind(this), 1000);
        //}
        //else {
        //    //this.showGameResult();
        //}
        this.cdTimer.start();
        this.cdNum = 5;

        this.playClickSound(RBGUtil.getInstance().getSoundEffect(9));

        let zhuangPos = {
            x:this['grpHead' + this.zhaungIndex].x,
            y:this['grpHead' + this.zhaungIndex].y
        }
        if(this.zhaungIndex == 0) {
            zhuangPos.x = this._group_di.x + 15 + 145;
            zhuangPos.y = this._group_di.y - 35 + 103;
        } else {
            zhuangPos.x = zhuangPos.x + 21;
            zhuangPos.y = zhuangPos.y + 110;
        }
        let pos = {
            x:0,
            y:0
        }
        let numPos = {
            x:0,
            y:0
        }
        let aa = this.cardResult.pokes;
        for(let i=0; i<this.cardResult.pokes.length; i++) {
            let num = UserInfo.getInstance().findSeatNumber(this.cardResult.pokes[i].index);
            if(num == 0) {
                pos.x = this._group_di.x + 15 + 145;
                pos.y = this._group_di.y - 35 + 103;
                numPos.x = pos.x+42;
                numPos.y = pos.y+2;
            } else {
                pos.x = this['grpHead' + num].x + 21;
                pos.y = this['grpHead' + num].y + 110;
                numPos.x = pos.x + 30;
                numPos.y = pos.y + 5;
            }

            if(this.cardResult.pokes[i].win == true) {
                xlLib.TipsUtils.showTipsDownToUp("+" + this.cardResult.pokes[i].score, numPos.x, numPos.y, false);
                this.updatePlayerGold(num, this.cardResult.pokes[i].score, true);
            } else {
                xlLib.TipsUtils.showTipsDownToUp("-" + this.cardResult.pokes[i].score, numPos.x, numPos.y, false);
                this.updatePlayerGold(num, this.cardResult.pokes[i].score, false);
            }

            if(this.zhaungIndex == num) {
                continue;
            }
            
            if(this.cardResult.pokes[i].win == true) {
                EffectUtils.coinsFly_2(this, zhuangPos.x, zhuangPos.y, pos.x, pos.y);
            } else {
                EffectUtils.coinsFly_2(this, pos.x, pos.y, zhuangPos.x, zhuangPos.y);
            }
        }
    }

    /**更新玩家金币 */
    public updatePlayerGold(num:number, gold:number, result:boolean):void {

        let _gold = UserInfo.getInstance().playes[num].goldcoins;
        if(result == true) {
            _gold = _gold+gold;
        } else {
            _gold = _gold-gold;
        }
        UserInfo.getInstance().playes[num].goldcoins = _gold;
        if(num==0) {
            this.labelGold0.text = _gold + "";
        } else {
            this['grpHead' + num].setGold(_gold);
        }


        
    }

    public suiCoreGameEndScoreResultEffect(player, state, score) {
        let label = new eui.BitmapLabel;
        if(state == true) {
            label.font = "qznn_win_fnt";
            label.text = "+0";
        } else {
            label.font = "qznn_lose_fnt";
            label.text = "0";
        }
        label.scaleX = 1;
        label.scaleY = 1;
        label.x = 500;
        label.y = 500;
        player.addChild(label);
        //uiCore.LabelEffect.instance.playEffect(label, { time: 3000, initNum: 0, num: score, regulator: 50 });
    }


/*
    public suiCoreGameEndScoreResultEffect1(e) {
        var t = e.isMyself() ? e.verticalCenter - .65 * e.head.height : e.verticalCenter - .75 * e.head.height
          , i = new eui.BitmapLabel;
        if (i.font = e.playerWinScore >= 0 ? "nn_gameOver0_fnt" : "nn_gameOver1_fnt",
        i.font = e.playerWinScore >= 0 ? "qznn_win_fnt" : "qznn_lose_fnt",
        i.text = e.playerWinScore >= 0 ? "+0" : "0",
        "QZNNPlayer0Skin" == e.skinName ? (i.verticalCenter = t - 22,
        i.horizontalCenter = e.horizontalCenter - 90,
        e.playerWinScore.toString().length > 6 && (i.horizontalCenter = e.horizontalCenter - 90 - 10 * (e.playerWinScore.toString().length - 6))) : (i.verticalCenter = t - 20,
        i.horizontalCenter = e.horizontalCenter,
        i.horizontalCenter = e.horizontalCenter),
        "QZNNPlayer2Skin" == e.skinName && (i.verticalCenter = t - 15,
        i.horizontalCenter = e.horizontalCenter - 10),
        i.scaleX = 1,
        i.scaleY = 1,
        this.addChild(i),
        this.gameOverEffects.push(i),
        e.playerWinScore) {
            if (e.isMyself()) {
                e.playerWinScore > 0 && (this.gameView.effectPlayers.tongsha || 3 == this.gameView.effectPlayers.bankerToPlayer.length || egret.Tween.get(this).wait(1e3).call(this.playGameAnimator, this, ["qznn_effect_win"]),
                uiCore.SoundManager.playEffect("nn_wingold_mp3"));
                var a = e.playerWinScore
                  , n = !1;
                if (a)
                    for (var s = 0; a > s; s++)
                        if (0 != a[s]) {
                            n = !0;
                            break
                        }
                n && uiCore.SoundManager.playEffect("nn_scrollnumber_mp3")
            }
            if (0 != e.playerWinScore) {
                var r = {
                    useEasing: !1,
                    useGrouping: !0,
                    separator: ",",
                    decimal: "."
                }
                  , o = /^[+-]?[1-9]?[0-9]*\.[0-9]*$/
                  , l = e.playerWinScore
                  , c = o.test(l.toString()) ? 2 : 0
                  , h = new CountUp(i,0,l,c,2.5,r);
                h.error || h.start(),
                egret.Tween.get(this).wait(2600).call(function(e, t) {
                    e.showPlayerMoney(e.chip);
                    var a = uiCore.Utils.formatCurrency(100 * t);
                    i.text = t >= 0 ? "+" + a : a
                }, this, [e, e.playerWinScore])
            }
        }
    }
*/
    //============================================  Game 新特效=====================
    /*
    private setSice(e, t, i, a) {
        void 0 === a && (a = 4),
        this.dice0.source = "bar_sicbo_" + e + "_png",
        this.dice1.source = "bar_sicbo_" + t + "_png",
        this.firstPlayerNo = i,
        this.diceBottom.visible = !1,
        this.dice0.visible = !1,
        this.dice1.visible = !1,
        this.diceTop.visible = !1,
        a >= 4 && !uiCore.Application.isGameHide ? (this.deleteIntervalList("diceInterval"), this.diceInterval = egret.setInterval(this.setDiceAnimation, this, 200), this.pushIntervalList("diceInterval"), this.deleteTimeList("startDiceTimeout"), this.startDiceTimeout = egret.setTimeout(function() {
            uiCore.SoundManager.playEffect("bar_throw_dice_mp3")
        },
        this, 300), this.pushTimeList("startDiceTimeout"), this.deleteTimeList("diceResultTimeout"), this.diceResultTimeout = egret.setTimeout(this.playDiceResult, this, 2800), this.pushTimeList("diceResultTimeout")) : (this.diceBg.visible = !1, this.diceBottom.visible = !0, this.dice0.visible = !0, this.dice1.visible = !0, this.diceTop.visible = !0, this.diceTop.horizontalCenter = 16, this.diceTop.verticalCenter = -102, this.diceTop.alpha = 1, this.getPlayerViewBySeatID(this.firstPlayerNo).setFirstAnimation())
    }

    private pushTimeList(e) {
        this.timeList.indexOf(e) < 0 && this.timeList.push(e)
    }*/

    //=============================================================================






    //============================================  Game Result
    /*
    private showGameResult(): void {
        clearInterval(this.interval);
        lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.CHAT_GAME_RESULT));
        var data = this.cardResult;
        this.grpResult.visible = true;
        if (this.maxUserData != null) {
            this.grpMax.visible = true;
            this.grpMaxHead.source = this.maxUserData.headurl;
            this.grpMaxHead.width = this.grpMaxHead.height = 70;
            this.grpMaxGold.text = '赢 ' + QuickManage.moneyStr(this.maxUserData.gold);
            this.grpMaxName.text = this.maxUserData.name;
            if (this.maxUserData.name == GlobalData.user.nickname) {
                this.playClickSound(RBGUtil.getInstance().getSoundEffect(1));
            }
        }
        else {
            this.grpMax.visible = false;
        }

        this.grpBankerHead.source = this.bankerHead.source; //
        this.grpBankerName.text = this.bankerName.text;

        this.grpBankerBeishu.text = data.pokes[0].num + '倍';
        this.grpBankerType.source = '';//this.getCardType(data.pokes[0].type);//;
        this.labelBankerType.text = RBGUtil.getInstance().getCardType2(data.pokes[0].type);
        if (parseInt(data.bankerWin) < 0) {
            this.grpBankerGold.text = '输 ' + QuickManage.moneyStr(Math.abs(data.bankerWin));
            PanelManage.chat.sendGameChat('庄家输了 ' + QuickManage.moneyStr(Math.abs(data.bankerWin)));
        }
        else {
            this.grpBankerGold.text = '赢 ' + QuickManage.moneyStr(data.bankerWin);
            if (data.bankerWin != 0) {
                PanelManage.chat.sendGameChat('庄家赢了 ' + QuickManage.moneyStr(Math.abs(data.bankerWin)));
            }
        }

        var userGold: number = 0;
        for (var i = 0; i < 4; i++) {
            var betss = parseInt(data.pokes[i + 1].num)
            this['resultType' + i].text = RBGUtil.getInstance().getCardType2(data.pokes[i + 1].type);
            this['labResult0_' + i].text = betss + '倍';//倍率
            this['labResult1_' + i].text = QuickManage.moneyStr(this.selfbetsNum[i + 1]); //押注
            var gold = this.selfbetsNum[i + 1];
            if (gold != 0) {
                this['labResult2_' + i].text = '';
                if (data.result[i] == 1) {
                    var bets0 = 0;
                    if (this.isBanker) {
                        bets0 = parseInt(data.pokes[0].num)
                    }
                    else {
                        bets0 = parseInt(data.pokes[i + 1].num)
                    }
                    userGold += parseInt(gold) * (bets0 + 1);
                }
                else {
                    var bets1 = 0;//1倍不再减少
                    if (this.isBanker) {
                        bets1 = parseInt(data.pokes[i + 1].num)
                    }
                    else {
                        bets1 = parseInt(data.pokes[0].num)
                    }
                    if (bets1 == 1) {
                        // userGold -= parseInt(gold);
                    }
                    else {
                        userGold -= parseInt(gold) * (bets1 - 1);
                    }
                }
            }
            else {
                this['labResult2_' + i].text = 0;
            }
        }

        var betsGold = 0;
        for (var i = 1; i < 5; i++) {
            betsGold += this.selfbetsNum[i];
        }
        if (userGold > 0 || userGold == 0) {
            // userGold *= (1 - data.rate);
            userGold *= (1 - this.curRate);
        }
        userGold -= betsGold;
        if (userGold > 0 || userGold == 0) {
            this.labResultValue.text = '结算：' + QuickManage.moneyStr(userGold);
        }
        else {
            this.labResultValue.text = '结算：-' + QuickManage.moneyStr(Math.abs(userGold));
        }
        if (userGold > 0) {
            EffectUtils.coinsFly(this, 320, 500);
        }
        this.updateGold();
        //更新来自更新彩金时所带的庄家金币
        if (!this.isSysBanker) {
            this.labBankerMoney.text = QuickManage.moneyStr(this.banker_total_gold);
        }
        this.setHandsel(this.totalCaijin);
        if (userGold > 0 && this.resultCaijin > 0) {
            this.interval = setInterval(this.caijinShow.bind(this), 3000);
        }
        else {
            if (this.cardResult.bomb == 0) {
                this.interval = setInterval(this.setStartBet.bind(this), 4000);
            }
            else {
                this.interval = setInterval(this.boomShow.bind(this), 3000);
            }
        }
    }

    private boomShow(): void {
        this.grpCaijin.visible = false;
        this.imgBaoZhuang.visible = true;
        clearInterval(this.interval);
        this.interval = setInterval(this.setStartBet.bind(this), 4000);
    }
    */
    /*
    private caijinShow(msg): void {
        PanelManage.chat.sendGameChat('恭喜你获得彩金 ' + this.resultCaijin);
        this.grpCaijinLabel.text = '恭喜你获得' + this.resultCaijin + '彩金';
        this.grpCaijin.visible = true;
        clearInterval(this.interval);
        if (this.cardResult.bomb == 0) {
            this.interval = setInterval(this.setStartBet.bind(this), 4000);
        }
        else {
            this.interval = setInterval(this.boomShow.bind(this), 3000);
        }
    }*/
/*
    private setStartBet(): void {
        this.resetGame();
        this.grpResult.visible = false;
        clearInterval(this.interval);
        this.showGameTips(2);
        this.grpCountdown.visible = true;
        if (!this.isSysBanker && !this.isChangeBanker) {
            this.lastGameBankerNum--;
            this.labBankerLastNum.text = '剩余' + Math.round(this.lastGameBankerNum) + '次';
        }
        if (this.isChangeBanker) {
            this.isChangeBanker = false;
            //this.setBankerInfo(this.changeBankerObj);
            this.grpBankerList.visible = false; //切庄的时候隐藏庄家列表
        }
    }
*/

    private resetGame(): void {
        //for (var i = 0; i < 4; i++) {
        //    this['labBetsPool' + i].text = '0';
        //    this['labBetsSelf' + i].text = '0';
        //    egret.Tween.removeTweens(this['effectSelect' + i]);
        //}
        /*
        for (var i = 0; i < 5; i++) {
            // this['bankerCard_' + i].source = '';
            let card: eui.Image = this['bankerCard_' + i];
            card.source = '';
            egret.Tween.removeTweens(card);
        }
        */
        for (var index = 0; index < 4; index++) {
            //this['labCardResult' + index].text = '';
            this['labCardType' + index].visible = false;
            var cardPos = [];
            for (var j = 0; j < 2; j++) {
                var card:RBGMahjong = this['grpCard_' + index + '_' + j];
                card.setPai(null);
                card.setAnPai(true);
                card.visible = false;
            }
            if(index != 0) {
                this['grpHead' + index].setZhuang(false);
            }
        }
        this._my_img_zhuang.visible = false;
        this.zhaungIndex = 0;

        //this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };

        while (this.grpCoins.numChildren > 0) {
            this.grpCoins.removeChildAt(0);
        }
        //for (var i = 0; i < 4; i++) {
        //    this['effectSelect' + i].visible = false;
        //}
        //for (let i = 0; i < 4; i++) {
        //this['labTipsClick' + i].visible = true;
        //}
        this._my_img_zhuang.visible = false;
        this._btn_begin.visible = true;
        this.isCanBets = true;
        this.isBets = false;
        this.imgBaoZhuang.visible = false;
        this.resultCaijin = 0;
        this.grpCaijin.visible = false;
        this.isCoinsReturn = true;
        this.isCardEffectShow = false;
        this.labCountdown0.text = '0';
        this.labCountdown1.text = '0';
    }

    //========================== Second Panel ==============================
    //牌型
    //private onTouchCardType(): void {
    //    this.grpSecondPanel.visible = true;
    //    this.grpCardType.visible = true;
    //    this.grpHistory.visible = false;
    //}

    //走势
    //private onTouchCardHistory(): void {
    //    Net.send(Protocol.NIUNIU_GAME_RECORD, {}, this.getHistoryCallback.bind(this));
    //}

    private getHistoryCallback(msg): void {
        var list = msg.data;
        for (var i = 0; i < 10; i++) {
            if (i < list.length) {
                this['grpHistroy' + i].visible = true;
                var arr = list[i];
                for (var j = 0; j < 4; j++) {
                    this['grpHistroy' + j + '_' + i].source = arr[j] == 1 ? 'nn.a8' : 'nn.a7';
                }
            }
            else {
                this['grpHistroy' + i].visible = false;
            }
        }
        this.grpSecondPanel.visible = true;
        this.grpCardType.visible = false;
        this.grpHistory.visible = true;
    }

    //private onTouchCloseSecondPanel(): void {
    //    this.grpSecondPanel.visible = false;
    //}

    //============================================红包
    //private redPanel: RedBoxPanel = null;
    //private onTouchRedBox(): void {
    //    PanelManage.openRedBox(2, 1);
    //}

    //private operateBoxComplete(): void {
    //    lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.UPDATE_MAIN));
    //}

    private updateDataGold(): void {
        //EffectUtils.numEffect(this.titleLabMoney, parseInt(GlobalData.user.gold));
    }


    //public dispose(): void {
    //MusicManage.closeMuisc();
    //    if (this.parent) {
    //        this.parent.removeChild(this);
    //    }
    //EventManage.removeEvent(this);
    //}

    //public setTouchEnabled(): void {
    //QuickManage.setTouchEnabled(this);
    //}

    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }

    public Onquit(): void {
        if (UserInfo.getInstance().isGameStart) {
            xlLib.TipsUtils.showFloatWordTips("游戏中！");
            return;
        }
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_leave, senddata, (data) => {
            //if (this.parent) {
            //    this.parent.removeChild(this);
            //}
            UserInfo.getInstance().playes = [];
            xlLib.SceneMgr.instance.changeScene(Lobby);
        }, this);
    }

    public destroy(): void {
        this._btn_begin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_buqiang.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_qiang_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_qiang_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_qiang_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_qiang_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);

        /**清除服务器回调 */
        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);

        /**显示抢庄*/
        EventUtil.removeEventListener(EventConst.hog, this.onHogBack, this);
        /**显示其他玩家抢庄倍数*/
        EventUtil.removeEventListener(EventConst.hognum, this.onHognumBack, this);
        /**返回庄家 */
        EventUtil.removeEventListener(EventConst.banker, this.acceptbanker, this);
        /**显示倍数*/
        EventUtil.removeEventListener(EventConst.bet, this.onBetBack, this);
        /**返回其他用户下注倍数 */
        EventUtil.removeEventListener(EventConst.betnum, this.onBetnumBack, this);
        /**返回骰子 */
        //EventUtil.removeEventListener(EventConst.dice, this.onDiceBack, this);
        /**返回结算 */
        EventUtil.removeEventListener(EventConst.summary, this.over, this);

        if(this.cdTimer != null) {
            this.cdTimer.removeEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
        }
    }
}

