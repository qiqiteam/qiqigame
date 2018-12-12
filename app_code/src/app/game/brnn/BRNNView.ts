/**
 * 百人牛牛
 */
class BRNNView extends eui.Component {
    constructor() {
        super();
        this.skinName = "BRNNViewSkin";
        //this.r = r;
    }
    //private r: any = null;

    public _btn_close: eui.Button;
    public _btn_meun: eui.Button;
    public grpCoins: eui.Group;
    public grade_text_0_0: eui.Label;
    public grade_text_0_1: eui.Label;
    public effectTouch0: eui.Image;
    public grade_text_1_0: eui.Label;
    public grade_text_1_1: eui.Label;
    public effectTouch1: eui.Image;
    public grade_text_2_0: eui.Label;
    public grade_text_2_1: eui.Label;
    public effectTouch2: eui.Image;
    public grade_text_3_0: eui.Label;
    public grade_text_3_1: eui.Label;
    public effectTouch3: eui.Image;
    public grpCard: eui.Group;
    public bankerCard_0: eui.Image;
    public bankerCard_1: eui.Image;
    public bankerCard_2: eui.Image;
    public bankerCard_3: eui.Image;
    public bankerCard_4: eui.Image;
    public grpCard_0_0: eui.Image;
    public grpCard_0_1: eui.Image;
    public grpCard_0_2: eui.Image;
    public grpCard_0_3: eui.Image;
    public grpCard_0_4: eui.Image;
    public grpCard_1_0: eui.Image;
    public grpCard_1_1: eui.Image;
    public grpCard_1_2: eui.Image;
    public grpCard_1_3: eui.Image;
    public grpCard_1_4: eui.Image;
    public grpCard_2_0: eui.Image;
    public grpCard_2_1: eui.Image;
    public grpCard_2_2: eui.Image;
    public grpCard_2_3: eui.Image;
    public grpCard_2_4: eui.Image;
    public grpCard_3_0: eui.Image;
    public grpCard_3_1: eui.Image;
    public grpCard_3_2: eui.Image;
    public grpCard_3_3: eui.Image;
    public grpCard_3_4: eui.Image;
    public labCardTypeBanker: eui.Image;
    public labCardType0: eui.Image;
    public labCardType1: eui.Image;
    public labCardType2: eui.Image;
    public labCurChip: eui.Label;
    public labCardType3: eui.Image;
    public btnCardHistroy: eui.Image;
    public btnCardType: eui.Image;
    public btnRedBox: eui.Image;
    public labHandsel: eui.BitmapLabel;
    public grpBankerInfo: eui.Group;
    public btnDownBanker: eui.Image;
    public btnBankerDown: eui.Image;
    public btnUpBanker: eui.Image;
    public bankerHead: eui.Image;
    public labBankerMoney: eui.BitmapLabel;
    public bankerName: eui.Label;
    public labBankerLastNum: eui.Label;
    public labBankerRank: eui.Label;
    public btnVip0: eui.Image;
    public labBankerVip: eui.Label;
    public grpCountdown: eui.Group;
    public timeTxt: eui.Label;
    public btnBet0y: eui.Image;
    public btnBet1y: eui.Image;
    public btnBet2y: eui.Image;
    public btnBet3y: eui.Image;
    public btnBet4y: eui.Image;
    public btnBet5y: eui.Image;
    public labBet0: eui.Label;
    public labBet1: eui.Label;
    public labBet2: eui.Label;
    public labBet3: eui.Label;
    public labBet4: eui.Label;
    public labBet5: eui.Label;
    public grpBankerList: eui.Group;
    public bankerListItem0: eui.Group;
    public itemRank0: eui.Label;
    public itemName0: eui.Label;
    public itemMoney0: eui.Label;
    public itemVip0: eui.BitmapLabel;
    public bankerListItem1: eui.Group;
    public itemRank1: eui.Label;
    public itemName1: eui.Label;
    public itemMoney1: eui.Label;
    public itemVip1: eui.BitmapLabel;
    public bankerListItem2: eui.Group;
    public itemRank2: eui.Label;
    public itemName2: eui.Label;
    public itemMoney2: eui.Label;
    public itemVip2: eui.BitmapLabel;
    public bankerListItem3: eui.Group;
    public itemRank3: eui.Label;
    public itemName3: eui.Label;
    public itemMoney3: eui.Label;
    public itemVip3: eui.BitmapLabel;
    public bankerListItem4: eui.Group;
    public itemRank4: eui.Label;
    public itemName4: eui.Label;
    public itemMoney4: eui.Label;
    public itemVip4: eui.BitmapLabel;
    public bankerListItem5: eui.Group;
    public itemRank5: eui.Label;
    public itemName5: eui.Label;
    public itemMoney5: eui.Label;
    public itemVip5: eui.BitmapLabel;
    public bankerListItem6: eui.Group;
    public itemRank6: eui.Label;
    public itemName6: eui.Label;
    public itemMoney6: eui.Label;
    public itemVip6: eui.BitmapLabel;
    public bankerListItem7: eui.Group;
    public itemRank7: eui.Label;
    public itemName7: eui.Label;
    public itemMoney7: eui.Label;
    public itemVip7: eui.BitmapLabel;
    public bankerListItem8: eui.Group;
    public itemRank8: eui.Label;
    public itemName8: eui.Label;
    public itemMoney8: eui.Label;
    public itemVip8: eui.BitmapLabel;
    public bankerListItem9: eui.Group;
    public itemRank9: eui.Label;
    public itemName9: eui.Label;
    public itemMoney9: eui.Label;
    public itemVip9: eui.BitmapLabel;
    public grpSecondPanel: eui.Group;
    public grpHistory: eui.Group;
    public grpHistroy0: eui.Group;
    public grpHistroy0_0: eui.Image;
    public grpHistroy1_0: eui.Image;
    public grpHistroy2_0: eui.Image;
    public grpHistroy3_0: eui.Image;
    public grpHistroy1: eui.Group;
    public grpHistroy0_1: eui.Image;
    public grpHistroy1_1: eui.Image;
    public grpHistroy2_1: eui.Image;
    public grpHistroy3_1: eui.Image;
    public grpHistroy2: eui.Group;
    public grpHistroy0_2: eui.Image;
    public grpHistroy1_2: eui.Image;
    public grpHistroy2_2: eui.Image;
    public grpHistroy3_2: eui.Image;
    public grpHistroy3: eui.Group;
    public grpHistroy0_3: eui.Image;
    public grpHistroy1_3: eui.Image;
    public grpHistroy2_3: eui.Image;
    public grpHistroy3_3: eui.Image;
    public grpHistroy4: eui.Group;
    public grpHistroy0_4: eui.Image;
    public grpHistroy1_4: eui.Image;
    public grpHistroy2_4: eui.Image;
    public grpHistroy3_4: eui.Image;
    public grpHistroy5: eui.Group;
    public grpHistroy0_5: eui.Image;
    public grpHistroy1_5: eui.Image;
    public grpHistroy2_5: eui.Image;
    public grpHistroy3_5: eui.Image;
    public grpHistroy6: eui.Group;
    public grpHistroy0_6: eui.Image;
    public grpHistroy1_6: eui.Image;
    public grpHistroy2_6: eui.Image;
    public grpHistroy3_6: eui.Image;
    public grpHistroy7: eui.Group;
    public grpHistroy0_7: eui.Image;
    public grpHistroy1_7: eui.Image;
    public grpHistroy2_7: eui.Image;
    public grpHistroy3_7: eui.Image;
    public grpHistroy8: eui.Group;
    public grpHistroy0_8: eui.Image;
    public grpHistroy1_8: eui.Image;
    public grpHistroy2_8: eui.Image;
    public grpHistroy3_8: eui.Image;
    public grpHistroy9: eui.Group;
    public grpHistroy0_9: eui.Image;
    public grpHistroy1_9: eui.Image;
    public grpHistroy2_9: eui.Image;
    public grpHistroy3_9: eui.Image;
    public grpCardType: eui.Group;
    public secondClose: eui.Image;
    public grpResult: eui.Group;
    public grpMax: eui.Group;
    public grpMaxHead: eui.Image;
    public grpMaxGold: eui.Label;
    public grpMaxName: eui.Label;
    public grpBankerHead: eui.Image;
    public grpBankerType: eui.Image;
    public labelBankerType: eui.Label;
    public grpBankerBeishu: eui.Label;
    public grpBankerGold: eui.Label;
    public grpBankerName: eui.Label;
    public labResult0_0: eui.Label;
    public labResult1_0: eui.Label;
    public labResult2_0: eui.Label;
    public labResult0_1: eui.Label;
    public labResult1_1: eui.Label;
    public labResult2_1: eui.Label;
    public labResult0_2: eui.Label;
    public labResult1_2: eui.Label;
    public labResult2_2: eui.Label;
    public labResult0_3: eui.Label;
    public labResult1_3: eui.Label;
    public labResult2_3: eui.Label;
    public labResultValue: eui.Label;
    public resultType0: eui.Label;
    public resultType1: eui.Label;
    public resultType2: eui.Label;
    public resultType3: eui.Label;
    public grpTips: eui.Group;
    public grpTipsbg: eui.Image;
    public grpTipsInfo: eui.Image;
    public imgBaoZhuang: eui.Image;
    public grpCaijin: eui.Group;
    public grpCaijinLabel: eui.Label;
    public _group_di: eui.Group;
    public grpHead0: eui.Group;
    public imghead0: eui.Image;
    public labelHead0: eui.Label;
    public labelGold0: eui.Label;
    public _btn_switch: eui.Group;
    public _btn_double_1: eui.Image;
    public _btn_double_2: eui.Image;
    public _btn_double_3: eui.Image;
    public _btn_double_4: eui.Image;
    public _btn_double_5: eui.Image;
    public _xuanzho: eui.Image;
    public wanjia: eui.Group;
    public packup: eui.Image;
    public scroller: eui.Scroller;
    public userlist: eui.List;
    public wanjialist: eui.Button;





    public time: number;        //秒数
    public timer: egret.Timer;  //游戏计时器间隔

    public arr: number[] = [0, 0];

    public multipleList: number[] = [0, 0, 0, 0, 0];   //倍数表

    public game_result: number = 0;                   //动画状态

    public isAction: boolean = false;               //能否下注

    public isPaly: boolean = false;                 //是否下过注
    public isWin: boolean = false;                  //是否输赢
    public isScore: number = 0;                     //输赢金币

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

    private lastTouchBetIndex: number = 1; //上一次点击的筹码

    private coinsNumArr = {}; //计数桌面4个方位的筹码个数

    private isCoinsReturn: boolean = true;
    private curRate: number = 0;
    private lastTouchBetTime: number = 0;

    private isCardEffectShow: boolean = false; //是否正在显示扑克动画
    protected childrenCreated(): void {

        this.getOrginCardPos();
        this.addEvent();
        this.initData();


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
        this.labBankerRank.text = '';
        this.labBankerLastNum.text = '';
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.grpBankerList.visible = false;
        this.grpTips.touchEnabled = false;
        this.grpTips.touchChildren = false;
        this.grpSecondPanel.visible = false;
        this.btnUpBanker.visible = true;
        this.btnDownBanker.visible = false;
        this.grpTips.visible = false;
        this.grpResult.visible = false;
        this.imgBaoZhuang.visible = false;
        this.grpCardType.touchChildren = false;
        this.grpCardType.touchEnabled = false;
        this.grpCaijin.visible = false;
        this.grpCard.visible = true;
        this.isAction = false;
        for (let i = 0; i < 4; i++) {
            this['grade_text_' + i + '_0'].text = '';
            this['grade_text_' + i + '_1'].text = '';
        }
        this.wanjia.x = -237;
        this.isPaly = false;
        this.isWin = false;
        this.isScore = 0;
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
        for (var index = 0; index < 4; index++) {

            this['labCardType' + index].visible = false;
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
        this._btn_double_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.effectTouch0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onUserList, this.initGameIconList, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.addEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);

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
    /**准备 */
    private onprepare(data: any): void {
        this.startCountDown(data._obj.seconds);
    }
    /**下注 */
    private onbetBack(data: any): void {
        this.startCountDown(data._obj.seconds);
        this.showGameTips(2);
        this.isAction = true;
        for (let i = 0; i < 4; i++) {
            if (data._obj.hogList[i].allow) {
            } else {
                this['_btn_double_' + i].touchEnabled = false;
                this['_btn_double_' + i].visible = false;
            }
        }

        for (let i = 0; i < 5; i++) {
            this.multipleList[i] = data._obj.hogList[i].hogOrBet;
        }
    }
    /**停止下注(千人牛牛开牌) */
    private onstopBack(data: any): void {
        this.isAction = false;
        this.showGameTips(3);
        this.startCountDown(data._obj.seconds);


        this.isPaly = data._obj.play;
        this.isWin = data._obj.win;
        UserInfo.getInstance().goldcoins = data._obj.balance;
        this.isScore = data._obj.score;


        this.game_result = data._obj.result;

        let result = {
            pokes: [],
            result: [1, 0, 0, 0],
            bankerWin: 0,
            rate: "0.05",
            bomb: "0"
        };
        for (let i = 0; i < data._obj.players.length; i++) {
            let err = {
                // num: data._obj.players[i].ratio,
                type: data._obj.players[i].pai.niu,
                value: data._obj.players[i].cardsList,
                // win: data._obj.players[i].win,
                // score: data._obj.players[i].score
            };
            result.pokes.push(err);
        }
        this.cardResult = result;

        this.interval = setInterval(this.playerCardRotation.bind(this), 800);

    }
    /**结算、百人牛牛派奖中 */
    private onjiesuan(data: any): void {
        this.startCountDown(data._obj.seconds);

        this.victoryEffect();

        if (this.isPaly) {
            //执行金币加减动画
            //this.isWin   //(代表输赢)
            //this.isScore //(代表输赢金币数量)
            //更新界面金币数量显示
            this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
        }

    }
    /**游戏结束,百人牛牛休息 */
    private onrest(data: any): void {
        this.startCountDown(data._obj.seconds);
        UserInfo.getInstance().isGameStart = true;
    }
    /**百人牛牛洗牌 */
    private onshuffle(data: any): void {

        this.resetGame();

        this.startCountDown(data._obj.seconds);
    }
    /**百人牛牛发牌 */
    private onfapai(data: any): void {
        this.startCountDown(data._obj.seconds);
        this.cardEffect();
    }
    /**更新下注通知(所有人) */
    private OnBetUpdate(data: any): void {
        // console.log(data._obj.index + "号下注");
        console.log(UserInfo.getInstance().uid);
        console.log(data._obj.userid);

        if (data._obj.code == 200) {
            if (UserInfo.getInstance().uid == data._obj.userid) {
                UserInfo.getInstance().isGameStart = false;  //游戏状态
                this.onGenZhuClick(data._obj.money, data._obj.deskNum);
                this.onplaygrade(data._obj.myMoney, data._obj.deskNum);
                this.onJettongrade(data._obj.totalMoney, data._obj.deskNum);
                // UserInfo.getInstance().goldcoins = data._obj.goldcoins;
                // this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
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

    /**返回游戏大厅 */
    private buttonClose(): void {

        // let senddata: any = {
        //     userid: UserInfo.getInstance().uid,
        //     token: UserInfo.getInstance().token,
        // };
        // xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_leave, senddata, (data) => {

        //     xlLib.SceneMgr.instance.changeScene(Lobby);
        // }, this);

        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        if (UserInfo.getInstance().isGameStart) {
            xlLib.PopUpMgr.addPopUp(Hint, this, true, true, null, 1);
            return;
        }

        xlLib.SoundMgr.instance.stopBgMusic();
        let musicBg = ["hall_bg_mp3"];
        xlLib.SoundMgr.instance.playBgMusic(musicBg);

        xlLib.SceneMgr.instance.changeScene(Lobby);

    }

    /**播放 胜利 通杀 通赔 动画 */
    public victoryEffect(): void {
        clearInterval(this.interval);
        this.interval = 0;
        if (this.game_result == 1) {
            // this.addNNVictoryEffect();
            this.game_result = 0;
        } else if (this.game_result == 2) {
            // this.addTongsha();
            this.game_result = 0;
        } else if (this.game_result == 3) {
            // this.addTongpei();
            this.game_result = 0;
        }

    }

    public resize(): void {

    }

    /**开始倒计时*/
    private startCountDown(time: number): void {

        this.timeTxt.visible = true;
        this.time = time;
        if (this.timer == null) {
            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    }

    /**倒计时处理*/
    private timerFunc(evt: egret.TimerEvent): void {
        if (this.time >= 0) {
            this.timeTxt.text = "" + this.time;
            this.time--;
        }
        else {
            this.timeTxt.text = "0";
            this.clearTime();
        }
    }
    /**清除倒计时*/
    private clearTime(): void {
        if (this.timer) {
            this.timer.stop();
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
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
    /*
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
        this.grpTipsInfo.source = BRNNUtil.getInstance().getMsgSource(type);
        this.grpTips.visible = true;
        this.grpTipsbg.alpha = 0;
        this.grpTipsInfo.x = 640;
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(type));
        egret.Tween.get(this.grpTipsbg).to({ alpha: 1 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ alpha: 0 }, 400);
        }, this.grpTipsbg);
        egret.Tween.get(this.grpTipsInfo).to({ x: 0 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ x: -1640 }, 400);
        }, this.grpTipsInfo);
    }

    //显示筹码
    private showCoins(pos: egret.Point, num: number, msg: number): void {
        var isRemove: boolean = false;
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(8));

        var point: egret.Point = BRNNUtil.getInstance().getCoinsPos(msg);

        var arr = BRNNUtil.getInstance().coinsType(pos, num);
        for (var i = 0; i < arr.length; i++) {
            var tx = point.x + Math.random() * 80;
            var ty = point.y + Math.random() * 80;
            this.grpCoins.addChild(arr[i]);

            egret.Tween.get(arr[i]).to({ x: tx, y: ty }, 200).call((mc) => {

            }, this, [arr[i]]);
        }
    }
    private flyIntval: number = 0;  //
    private flyIndex0: number = 0;  //扑克位置(东西南北)
    private flyIndex1: number = 0;  //扑克(指定位置1，2，3)
    private flyBankerIndex: number = 0;

    private cardEffect(): void {
        this.isCardEffectShow = true;
        this.flyIntval = setInterval(this.playCardFly.bind(this), 200);
    }

    private playCardFly(): void {
        var card: eui.Image = this['grpCard_' + this.flyIndex0 + '_' + this.flyIndex1];
        card.source = 'nn.card_100';
        card.x = 713.5;
        card.y = 250;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        var pos = this.orginPlayerCardPos[this.flyIndex0][this.flyIndex1];
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 300);
        if (this.flyIndex1 == 4) {
            if (this.flyIndex0 == 3) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                clearInterval(this.flyIntval);
                this.flyBankerIndex = 0;
                this.flyIntval = setInterval(this.bankerCardFly.bind(this), 200);
            }
            else {
                this.flyIndex1 = 0;
                this.flyIndex0++;
            }
        }
        else {
            this.flyIndex1++;
        }
    }

    private bankerCardFly(): void {
        if (this.flyBankerIndex == 5) {
            this.flyBankerIndex = 0;
            clearInterval(this.flyIntval);
            // this.interval = setInterval(this.playerCardRotation.bind(this), 800);
            return;
        }
        var card: eui.Image = this['bankerCard_' + this.flyBankerIndex];
        card.x = 713.5;
        card.y = 250;
        card.source = 'nn.card_100';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        this.orginBankerCardPos;
        var pos = this.orginBankerCardPos[this.flyBankerIndex];
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400);
        this.flyBankerIndex++;
    }

    private effectPlayerIndex = 0;

    private playerCardRotation(): void {
        if (this.effectPlayerIndex == 4) {
            clearInterval(this.interval)
            this.effectPlayerIndex = 0;
            this.bankerCardRotation();
            return;
        }
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes;
        var index = this.effectPlayerIndex;
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + index + '_' + i];
            card.source = 'nn.card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'nn.card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke[index + 1].value[i]]);
            // console.log('poke_' + this.effectPlayerIndex + ': ' + poke[this.effectPlayerIndex].value[i]);
        }
        this['labCardType' + index].source = BRNNUtil.getInstance().getCardType(poke[index + 1].type);
        this.playClickSound(BRNNUtil.getInstance().getCardMusicType(poke[index + 1].type));
        this['labCardType' + index].visible = true;;
        this['labCardType' + index].width = 98;
        this['labCardType' + index].height = 44;
        // this['labCardResult' + index].text = '';//this.cardResult.result[index] == 1 ? '赢' : '输';
        if (poke[index + 1].type != 0) {
            for (var i = 0; i < 5; i++) {
                var card = this['grpCard_' + index + '_' + i];
                if (i < 3) {
                    egret.Tween.get(card).wait(700).to({ x: card.x - 10 }, 100);
                }
                else {
                    egret.Tween.get(card).wait(700).to({ x: card.x + 10 }, 100);
                }
            }
        }
        this.effectPlayerIndex++;
    }

    private bankerCardRotation(): void {
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(7));
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
        this.labCardTypeBanker.source = BRNNUtil.getInstance().getCardType(poke.type);
        this.playClickSound(BRNNUtil.getInstance().getCardMusicType(poke.type));
        this.labCardTypeBanker.visible = true;
        this.labCardTypeBanker.width = 98;
        this.labCardTypeBanker.height = 44;
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
            this.showGameTips(5);
            isShow = true;
        }
        if (data.result[0] == 0 && data.result[1] == 0 && data.result[2] == 0 && data.result[3] == 0) {
            this.showGameTips(4);
            isShow = true;
        }
        if (isShow) {
            this.interval = setInterval(this.showGameResult.bind(this), 1000);
        }
        else {
            this.showGameResult();
        }
    }

    //============================================  Game Result
    private showGameResult(): void {
        clearInterval(this.interval);
        //lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.CHAT_GAME_RESULT));
        var data = this.cardResult;
        this.grpResult.visible = true;
        if (this.maxUserData != null) {
            this.grpMax.visible = true;
            this.grpMaxHead.source = this.maxUserData.headurl;
            this.grpMaxHead.width = this.grpMaxHead.height = 70;
            //this.grpMaxGold.text = '赢 ' + QuickManage.moneyStr(this.maxUserData.gold);
            this.grpMaxName.text = this.maxUserData.name;
            //if (this.maxUserData.name == GlobalData.user.nickname) {
            //    MusicManage.playMuisc(BRNNUtil.getInstance().getSoundEffect(1));
            //}
        }
        else {
            this.grpMax.visible = false;
        }

        this.grpBankerHead.source = this.bankerHead.source; //
        this.grpBankerName.text = this.bankerName.text;

        this.grpBankerBeishu.text = data.pokes[0].num + '倍';
        this.grpBankerType.source = '';//this.getCardType(data.pokes[0].type);//;
        this.labelBankerType.text = BRNNUtil.getInstance().getCardType2(data.pokes[0].type);
        if (parseInt(data.bankerWin) < 0) {
            //this.grpBankerGold.text = '输 ' + QuickManage.moneyStr(Math.abs(data.bankerWin));
            //PanelManage.chat.sendGameChat('庄家输了 ' + QuickManage.moneyStr(Math.abs(data.bankerWin)));
        }
        else {
            //this.grpBankerGold.text = '赢 ' + QuickManage.moneyStr(data.bankerWin);
            if (data.bankerWin != 0) {
                //PanelManage.chat.sendGameChat('庄家赢了 ' + QuickManage.moneyStr(Math.abs(data.bankerWin)));
            }
        }

        var userGold: number = 0;
        for (var i = 0; i < 4; i++) {
            var betss = parseInt(data.pokes[i + 1].num)
            this['resultType' + i].text = BRNNUtil.getInstance().getCardType2(data.pokes[i + 1].type);
            this['labResult0_' + i].text = betss + '倍';//倍率
            this['labResult1_' + i].text = this.moneyStr(this.selfbetsNum[i + 1]); //押注
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
            //this.labResultValue.text = '结算：' + QuickManage.moneyStr(userGold);
        }
        else {
            //this.labResultValue.text = '结算：-' + QuickManage.moneyStr(Math.abs(userGold));
        }
        // if (userGold > 0) {
        //     EffectUtils.coinsFly(this, 320, 500);
        // }
        //this.updateGold();
        //更新来自更新彩金时所带的庄家金币
        if (!this.isSysBanker) {
            //this.labBankerMoney.text = QuickManage.moneyStr(this.banker_total_gold);
        }
        //this.setHandsel(this.totalCaijin);
        if (userGold > 0 && this.resultCaijin > 0) {
            //this.interval = setInterval(this.caijinShow.bind(this), 3000);
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
        }
    */
    private setStartBet(): void {
        // this.resetGame();
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
    /**游戏场景重置 */
    private resetGame(): void {
        // for (var i = 0; i < 4; i++) {
        //     this['labBetsPool' + i].text = '';
        //     this['labBetsSelf' + i].text = '';
        //     egret.Tween.removeTweens(this['effectSelect' + i]);
        // }
        for (var i = 0; i < 5; i++) {
            // this['bankerCard_' + i].source = '';
            let card: eui.Image = this['bankerCard_' + i];
            card.source = '';
            egret.Tween.removeTweens(card);

        }
        for (var index = 0; index < 4; index++) {
            // this['labCardResult' + index].text = '';
            this['labCardType' + index].visible = false;
            this.labCardTypeBanker.visible = false;
            for (var j = 0; j < 5; j++) {
                // this['grpCard_' + index + '_' + j].source = '';
                let card: eui.Image = this['grpCard_' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
            }
        }
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };

        // while (this.grpCoins.numChildren > 0) {
        //     this.grpCoins.removeChildAt(0);
        // }
        // for (var i = 0; i < 4; i++) {
        //     this['effectSelect' + i].visible = false;
        // }
        // for (let i = 0; i < 4; i++) {
        //     this['labTipsClick' + i].visible = true;
        // }
        this.isCanBets = true;
        this.isBets = false;
        this.imgBaoZhuang.visible = false;
        this.resultCaijin = 0;
        this.grpCaijin.visible = false;
        this.isCoinsReturn = true;
        this.isCardEffectShow = false;

        // this.cdNum = 10;
        // this.cdTimer.start();

        this.initData();

    }

    //========================== Second Panel ==============================

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

    private onTouchCloseSecondPanel(): void {
        this.grpSecondPanel.visible = false;
    }

    //============================================红包
    //private redPanel: RedBoxPanel = null;
    private onTouchRedBox(): void {
        //PanelManage.openRedBox(2, 1);
    }

    private operateBoxComplete(): void {
        //lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.UPDATE_MAIN));
    }

    private updateDataGold(): void {
        //EffectUtils.numEffect(this.titleLabMoney, parseInt(GlobalData.user.gold));
    }


    public dispose(): void {
        //MusicManage.closeMuisc();
        if (this.parent) {
            this.parent.removeChild(this);
        }
        //EventManage.removeEvent(this);
    }

    public setTouchEnabled(): void {
        //QuickManage.setTouchEnabled(this);
    }


    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }

    public destroy(): void {
        this.wanjialist.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClose, this);
        this._btn_double_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this.effectTouch0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClose, this);

        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onUserList, this.initGameIconList, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.removeEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);

    }

}

