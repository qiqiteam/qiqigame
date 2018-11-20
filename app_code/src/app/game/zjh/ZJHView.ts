/**
 * 扎金花
 */
class ZJHView extends eui.Component {
    constructor() {
        super();
        this.skinName = "ZJHViewSkin";
        //this.r = r;
    }
    private r: any = null;

    public pailist: any[] = [];//临时存储牌的信息
    public grpCoins: eui.Group;
    public grpCard: eui.Group;
    public bankerCard_0: eui.Image;
    public bankerCard_1: eui.Image;
    public bankerCard_2: eui.Image;
    public grpCard8_0: eui.Image;
    public grpCard8_1: eui.Image;
    public grpCard8_2: eui.Image;
    public grpCard7_0: eui.Image;
    public grpCard7_1: eui.Image;
    public grpCard7_2: eui.Image;
    public grpCard6_0: eui.Image;
    public grpCard6_1: eui.Image;
    public grpCard6_2: eui.Image;
    public grpCard5_0: eui.Image;
    public grpCard5_1: eui.Image;
    public grpCard5_2: eui.Image;
    public grpCard4_0: eui.Image;
    public grpCard4_1: eui.Image;
    public grpCard4_2: eui.Image;
    public grpCard3_0: eui.Image;
    public grpCard3_1: eui.Image;
    public grpCard3_2: eui.Image;
    public grpCard2_0: eui.Image;
    public grpCard2_1: eui.Image;
    public grpCard2_2: eui.Image;
    public grpCard1_0: eui.Image;
    public grpCard1_1: eui.Image;
    public grpCard1_2: eui.Image;
    public grpCard0_0: eui.Image;
    public grpCard0_1: eui.Image;
    public grpCard0_2: eui.Image;
    public labCardType0: eui.Label;
    public labCardType1: eui.Label;
    public labCardType2: eui.Label;
    public labCardType3: eui.Label;
    public labCardType4: eui.Label;
    public labCardType5: eui.Label;
    public labCardType6: eui.Label;
    public labCardType7: eui.Label;
    public labCardType8: eui.Label;
    public grpHead1: ZJHHead;
    public grpHead2: ZJHHead;
    public grpHead3: ZJHHead;
    public grpHead4: ZJHHead;
    public grpHead5: ZJHHead;
    public grpHead6: ZJHHead;
    public grpHead7: ZJHHead;
    public grpHead8: ZJHHead;
    public grpHead9: ZJHHead;
    public btnCharge: eui.Image;
    public titleName: eui.Label;
    public maskhead: eui.Group;
    public titleHead: eui.Image;
    public btnVip: eui.Image;
    public titleLabMoney: eui.BitmapLabel;
    public btnClose: eui.Image;
    public btnCardHistroy: eui.Image;
    public btnCardType: eui.Image;
    public grpBanker: eui.Group;
    public btnDownBanker: eui.Image;
    public btnBankerDown: eui.Image;
    public btnUpBanker: eui.Image;
    public bankerHead: eui.Image;
    public labBankerMoney: eui.BitmapLabel;
    public bankerName: eui.Label;
    public btnVip0: eui.Image;
    public effectTouch3: eui.Image;
    public effectTouch2: eui.Image;
    public effectTouch1: eui.Image;
    public effectTouch0: eui.Image;
    public grpCountdown: eui.Group;
    public labCountdown0: eui.BitmapLabel;
    public labCountdown1: eui.BitmapLabel;
    public btnBet0: eui.Image;
    public btnBet1: eui.Image;
    public btnBet2: eui.Image;
    public btnBet3: eui.Image;
    public btnBet4: eui.Image;
    public btnBet5: eui.Image;
    public labBet0: eui.Label;
    public labBet1: eui.Label;
    public labBet2: eui.Label;
    public labBet3: eui.Label;
    public labBet4: eui.Label;
    public labBet5: eui.Label;
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
    public secondClose: eui.Image;
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
    public grpResult: eui.Group;
    public grpMax: eui.Group;
    public grpMaxHead: eui.Image;
    public grpMaxGold: eui.Label;
    public grpMaxName: eui.Label;
    public grpBankerHead: eui.Image;
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
    public resultType0: eui.Label;
    public resultType1: eui.Label;
    public resultType2: eui.Label;
    public resultType3: eui.Label;
    public grpTips: eui.Group;
    public grpTipsbg: eui.Image;
    public grpTipsInfo: eui.Image;
    public grpHead0: eui.Group;
    public imghead0: eui.Image;
    public labelHead0: eui.Label;
    public labelGold0: eui.Label;
    public _btn_gendaodi: eui.Button;
    public _btn_genzhu: eui.Button;
    public _btn_jiazhu: eui.Button;
    public _btn_quanxia: eui.Button;
    public _btn_kanpai: eui.Button;
    public _btn_qipai: eui.Button;
    public _btn_bipai: eui.Button;
    public _btn_close: eui.Button;
    public _btn_meun: eui.Button;
    public _btn_chat: eui.Button;
    public _btn_voice: eui.Button;

    public _btn_prepare: eui.Button;
    public _btn_X0: eui.Button;
    public _btn_X1: eui.Button;
    public _btn_X2: eui.Button;



    public labHandsel: eui.BitmapLabel;
    public labTips: eui.Label;
    private labResultValue: eui.Label;
    private grpSelectBet: eui.Group;    //筹码底背景
    private grpBankerList: eui.Group;
    private labelBankerType: eui.Label;
    private labBankerLastNum: eui.Label;
    private labBankerRank: eui.Label;
    private imgBaoZhuang: eui.Image;
    private labTitleVip: eui.BitmapLabel;
    private labBankerVip: eui.BitmapLabel;
    private btnRedBox: eui.Image;
    //private labCardTypeBanker: eui.Label;
    //public grpCaijin: eui.Group;
    //public grpCaijinLabel: eui.Label;

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
    private banker_total_gold: number = 0;  // 庄家自身携带金币
    private isBoomBanker: boolean = false;  // 是否爆庄
    private resultCaijin: number = 0;   //结算玩家的彩金
    private totalCaijin: number = 0;    //彩金总数

    private cdNum: number = 10;     //倒计时计数
    private cdTimer: egret.Timer;   //倒计时时间

    private coinsNumArr = {}; //计数桌面4个方位的筹码个数

    private isCoinsReturn: boolean = true;
    private curRate: number = 0;
    private lastTouchBetTime: number = 0;

    private isCardEffectShow: boolean = false;
    // private testNum: number = 0;

    protected childrenCreated(): void {

        //this.setTouchEnabled();
        this.getOrginCardPos();
        this.addEvent();
        this.initData();
        //this.setCountdown();
        //this.onTouchBet(0);
        //this.setSelfInfo();
        // Net.send(Protocol.JOIN_GOLDEN_GAME, {}, this.joinCallback.bind(this));  //请求初始化数据
        //this.joinCallback(this.r);
        //PanelManage.openChat(this, 112, 315, "10002");
        //this.resize();

        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = "" + UserInfo.getInstance().goldcoins;
    }

    private initData(): void {
        this.labBankerRank.text = '';
        this.labBankerLastNum.text = '';
        //this.labCardTypeBanker.text = '';
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.grpBankerList.visible = false;
        this.grpCoins.touchEnabled = false;
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
        //this.grpCaijin.visible = false;
        this.grpCard.visible = true;

        this.grpCard.visible = true;

        this._btn_prepare.visible = true;

        //this._btn_gendaodi.touchEnabled = false;
        //this._btn_genzhu.touchEnabled = false;
        this._btn_jiazhu.visible = false;
        //this._btn_quanxia20.touchEnabled = false;
        this._btn_kanpai.visible = false;
        //this._btn_qipai.touchEnabled = false;
        this._btn_X0.visible = false;
        this._btn_X1.visible = false;
        this._btn_X2.visible = false;
    }

    //获取原始扑克的位置
    private getOrginCardPos(): void {
        /*
        for (var i = 0; i < 3; i++) {
            var card: eui.Image = this['bankerCard_' + i];
            card.source = '';
            card.anchorOffsetX = card.width / 2;
            card.x += card.width / 2;
            var pos: egret.Point = new egret.Point;
            pos.x = card.x;
            pos.y = card.y;
            this.orginBankerCardPos[i] = pos;
        }*/
        for (var index = 0; index < 10; index++) {
            // this['labCardResult' + index].text = '';
            this['labCardType' + index].text = '';
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
                var card: eui.Image = this['grpCard' + index + '_' + j];
                card.source = '';
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos: egret.Point = new egret.Point;
                pos.x = card.x + 24;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayerCardPos[index] = cardPos;
        }
    }

    public resize(): void {

    }
    private OnClick(e: egret.TouchEvent): void {
        if (e.target == this._btn_prepare) {
            console.log("_btn_prepare");

            let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
            let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
            let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);

            let senddata: any = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token,
                playway: playway.id
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.prepare, senddata, (data) => {
                xlLib.TipsUtils.showFloatWordTips("开始准备");
                console.log("开始准备");

                this._btn_prepare.visible = false;

            }, this);
        } else if (e.target == this._btn_kanpai) {
            console.log("_btn_kanpai");
            let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
            let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
            let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);

            let senddata: any = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token,
                playway: playway.id
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.seecard, senddata, (data) => {
                xlLib.TipsUtils.showFloatWordTips("看牌");
                console.log("看牌");
                let poke = {
                    type: data.cardGenre,//牌型
                    value: data.cardtype //牌值
                };
                this.onKanPaiClick(poke);
                this._btn_kanpai.visible = false;
            }, this);
        } else if (e.target == this._btn_genzhu) {
            this.sendamessage(EventConst.botpour, 1);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("跟注");
            this._btn_genzhu.visible = false;
            this._btn_X0.visible = false;
        } else if (e.target == this._btn_jiazhu) {
            this._btn_X1.visible = true;
            this._btn_X2.visible = true;
        } else if (e.target == this._btn_X1) {
            this.sendamessage(EventConst.botpour, 2);
            for (let i = 0; i < 6; i++) {
                this.onGenZhuClick();
            }
            xlLib.TipsUtils.showFloatWordTips("加注1.5倍");
            this._btn_jiazhu.visible = false;
            this._btn_X1.visible = false;
            this._btn_X2.visible = false;
        } else if (e.target == this._btn_X2) {
            this.sendamessage(EventConst.botpour, 3);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注2倍");
            this._btn_jiazhu.visible = false;
            this._btn_X1.visible = false;
            this._btn_X2.visible = false;
        } else if (e.target == this._btn_gendaodi) {

            xlLib.TipsUtils.showFloatWordTips("跟到底");
        } else if (e.target == this._btn_quanxia) {

            xlLib.TipsUtils.showFloatWordTips("全下");
        } else if (e.target == this._btn_qipai) {
            /*let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
            let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
            let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);

            let senddata: any = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token,
                playway: playway.id
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.seecard, senddata, (data) => {
                let poke = {
                    type: data.cardGenre,//牌型
                    value: data.cardtype //牌值
                };
                for (var i = 0; i < 3; i++) {
                    var card = this['grpCard' + 0 + '_' + i];
                    card.source = 'card_100';
                    egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                        this[0].source = 'card_' + this[1];
                        egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
                    }, [card, poke.value[i]]);
                    xlLib.DisplayUtils.setComponentEnabled(card, false);
                }

            }, this);*/
            //this.sendamessage2(EventConst.seecard);
            this.sendamessage2(EventConst.abandon);
            xlLib.TipsUtils.showFloatWordTips("弃牌");
        } else if (e.target == this._btn_bipai) {

            xlLib.TipsUtils.showFloatWordTips("比牌");
        }

    }
    private sendamessage(sendstr: string, bet: number): void {
        let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
        let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);

        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: playway.id,
            data: bet
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {

        }, this);
    }
    private sendamessage2(sendstr: string): void {
        let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
            let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
            let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);

            let senddata: any = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token,
                playway: playway.id
            };
            xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {
                let poke = {
                    type: data.cardGenre,//牌型
                    value: data.cardtype //牌值
                };
                for (var i = 0; i < 3; i++) {
                    let val=poke.value[i];
                    var card = this['grpCard' + 0 + '_' + i];
                    card.source = 'card_100';
                    egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                        this[0].source = 'card_' + this[1];
                        egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
                    }, [card, val]);
                    xlLib.DisplayUtils.setComponentEnabled(card, false);
                }

            }, this);
            this._btn_kanpai.visible=false;
    }
    private addEvent(): void {
        /*
         var data = {
             pokes: [{ num: 2, type: 2, value: [408, 308, 401] },
             { num: 1, type: 1, value: [112, 307, 305] },
             { num: 2, type: 2, value: [407, 207, 208] },
             { num: 2, type: 2, value: [103, 203, 311] },
             { num: 3, type: 4, value: [211, 410, 312] },
             { num: 3, type: 4, value: [211, 410, 312] },
             { num: 3, type: 4, value: [211, 410, 312] },
             { num: 3, type: 4, value: [211, 410, 312] },
             { num: 2, type: 2, value: [408, 308, 401] },
             { num: 2, type: 2, value: [408, 308, 401] }],
             result: [0, 0, 0, 1],
             bankerWin: 0,
             rate: "0.05",
             bomb: "0"
        };*/
        // this.cdNum = 5;

        //this.setGameResult(data);
        //this.setCountdown();
        //this.cardEffect();
        // this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.newplayer, this.playerJoinRoom, this);
        EventUtil.addEventListener(EventConst.play, this.playpai, this);
        EventUtil.addEventListener(EventConst.gambleType, this.gametype, this);
        EventUtil.addEventListener(EventConst.pressure, this.ALLIN, this);
        EventUtil.addEventListener(EventConst.seecard, this.kanpai, this);
        EventUtil.addEventListener(EventConst.botpour, this.otherplayerxiazhu, this);
        EventUtil.addEventListener(EventConst.abandon, this.discard, this);
        EventUtil.addEventListener(EventConst.settlement, this.settleaccount, this);




        this._btn_prepare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_kanpai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);

        this._btn_jiazhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_X1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_X2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_gendaodi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_quanxia.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_qipai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_bipai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);





    }
    /**发牌 */
    private playpai(data: any): void {

        this.zhangIndex = UserInfo.getInstance().findSeatNumber(data._obj.index);
        this.flyIndex0 = UserInfo.getInstance().findSeatNumber(data._obj.index);
        this.cardEffect();//飞牌动动作

        this._btn_kanpai.touchEnabled = true;
    }
    /**看牌 */
    private kanpai(data: any): void {
        if (data._obj.command == "seecard" && UserInfo.getInstance().uid != data._obj.userId) {
            let seatnum = UserInfo.getInstance().findSeatNumber(data._obj.index);

            this['labCardType' + seatnum].text = '看牌';

            var cardPos = [];
            for (var j = 0; j < 3; j++) {
                var card: eui.Image = this['grpCard' + seatnum + '_' + j];
                card.source = '';
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos: egret.Point = new egret.Point;
                pos.x = card.x + 24;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayerCardPos[seatnum] = cardPos;
        }

    }
    /**判断是否下注 */
    private gametype(data: any): void {
        console.log(data);
        //if (data._obj.command == "gambleType" && UserInfo.getInstance().uid == data._obj.id) {
        if (data._obj.followPour == 0)//不可以下注
        {
            this._btn_jiazhu.touchEnabled = false;
            this._btn_jiazhu.visible = false;
            this._btn_X1.visible = false;
            this._btn_X2.visible = false;

        } else if (data._obj.followPour == 1) {
            console.log("可以加注*********************************");
            this._btn_jiazhu.visible = true;
            //this._btn_jiazhu.touchEnabled=true;
            let betarr: string[] = data._obj.limit.split(",");
            if (betarr.length == 1) {
                console.log("可以加注1倍");
                this._btn_genzhu.touchEnabled = true;
            } else if (betarr.length == 2) {
                console.log("可以加注1.5倍，2倍");
                this._btn_jiazhu.touchEnabled = true;
            }
            // if (data._obj.limit == "2") {

            // } else if (data._obj.limit == "2,3") {
            //     this._btn_jiazhu.visible = true;
            //     let num = data._obj.limit.split(",");
            //     for (let i = 0; i < num.length; i++) {
            //         if (num[i] == 2) {
            //             console.log("加注1.5倍");

            //         } else if (num[i] == 2) {
            //             console.log("加注2倍");
            //         }
            //     }
            // }

        }
        // }

    }

    /**其他玩家下注*/
    private otherplayerxiazhu(data: any): void {
        if (data._obj.command == "botpour" && UserInfo.getInstance().uid != data._obj.id) {
            this.onPlayerGenZhu(data._obj.index, 10000);
        }
    }
    /**全压*/
    private ALLIN(data: any): void {
        if (data._obj.command == "pressure" && UserInfo.getInstance().uid != data._obj.id) {

        }
    }

    /*玩家弃牌*/
    private discard(data: any): void {
        if (data._obj.command == "abandon" && UserInfo.getInstance().uid != data._obj.userId) {
            let seatnum = UserInfo.getInstance().findSeatNumber(data._obj.index);

            this['labCardType' + seatnum].text = '弃牌';
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
                var card = this['grpCard' + seatnum + '_' + j];
                card.source = 'card_100';
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos: egret.Point = new egret.Point;
                pos.x = card.x + 24;
                pos.y = card.y;
                cardPos[j] = pos;
                xlLib.DisplayUtils.setComponentEnabled(card, false);
            }
            this.orginPlayerCardPos[seatnum] = cardPos;
            //xlLib.DisplayUtils.setComponentEnabled(card, false); 
            //自己不进行任何操作 视为弃牌状态 
        } else if (data._obj.command == "abandon" && UserInfo.getInstance().uid == data._obj.userId) {
            
            //this.sendamessage2(EventConst.seecard);
            this.sendamessage2(EventConst.abandon);
            xlLib.TipsUtils.showFloatWordTips("自动弃牌");

        }
    }
    /**结算 */
    private settleaccount(data: any): void {
        console.log("结算");

    }
    /**下注 */
    private bottompour(data: any): void {
        console.log(data);
    }
    //加入房间新玩家
    public playerJoinRoom(data): void {
        console.log(data._obj.player.id);
        console.log(UserInfo.getInstance().myPlayer.id);


        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {

        } else {
            this['grpHead' + data._obj.player.index].setUserInfo(data._obj.player.username, data._obj.player.goldcoins, "F4_03_png");
        }
    }

    /*  private sendamessage(sendstr: string, bet: number): void {
  
          let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
          let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
          let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
  
          let senddata: any = {
              userid: UserInfo.getInstance().uid,
              token: UserInfo.getInstance().token,
              playway: playway.id,
              data: bet
          };
          xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {
          }, this);
  
          // this._group_qiang.visible = false;
      }*/
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

        if (data._obj.player[0].id == UserInfo.getInstance().myPlayer.id) {
            this.labelHead0.text = UserInfo.getInstance().myPlayer.username;
            this.labelGold0.text = UserInfo.getInstance().myPlayer.goldcoins + "";
            this.imghead0.source = "F1_03_png";
        }

        //设置其他玩家信息  for (let i = 1; i < 10; i++) {
        for (let i = 1; i < 5; i++) {
            if (data._obj.player[i] != null) {
                this['grpHead' + i].setUserInfo(UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins, "F4_03_png");//data._obj.player[i].headimg
            } else {
                //this['grpHead' + i].setUserInfo("圣诞节回复", "100000", "F4_03_png");
                this['grpHead' + i].setUserInfo("", "", "");
            }
        }


    }

    //设置彩金
    //private setHandsel(num): void {
    //this.labHandsel.text = QuickManage.moneyStr(num);
    //}

    private setTips(): void {
        this.labTips.text = '';
    }

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


            this.cdNum = 5;
            this.cardEffect();
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

    /*
        //msg.state     1 free 禁止玩儿游戏   2 下注中  3 封盘倒计时
        private joinCallback(msg): void {
            if (msg.code == 200) {
                this.curRate = msg.data.rate;
                var data = msg.data;
                var seats = msg.data.seats;
                for (var i = 0; i < seats.length; i++) {
                    this['imghead' + seats[i].seat].source = seats[i].headurl;
                    this['labelHead' + seats[i].seat].text = seats[i].name;
                    this['imghead' + seats[i].seat].height = this['imghead' + seats[i].seat].width = 86;
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
            console.log('onMsgListen: ' + msg.type, '__zjh');
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
                    this.updateBankerRank(msg);
                    break;
            }
        }*/

    //获取结算数据，显示结果面板时设置
    private setGameResult(data): void {
        //this.grpCountdown.visible = false;
        this.cardResult = data;
        var poke = data.pokes;
    }

    //同步座位
    /*
    private updataSeat(type, data): void {
        if (type == 1) {
            this['imghead' + data.seat].source = data.headurl;
            this['imghead' + data.seat].height = this['imghead' + data.seat].width = 86;
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
    }

    //获取上庄列表
    private getBankerList(e): void {
        if (e.target && (e.target.name == 'btnUpBanker' || e.target.name == 'btnDownBanker')) {
            return;
        }
        Net.send(Protocol.GOLDEN_BANKER_LIST, {}, this.bankerListCallback.bind(this));
    }

    //上庄列表
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
    }

    private onTouchCloseBankerList(): void {
        this.grpBankerList.visible = false;
    }

    //同步下注消息
    private getBets(): void {
        Net.send(Protocol.GOLDEN_GET_BETS, {}, this.getBetsCallback.bind(this));
}*/

    //定时同步下注筹码
    /*
    private getBetsCallback(msg): void {
        if (msg.code == 200) {
            var list = msg.list;
            for (var i = 1; i < 5; i++) {
                if (list[i].score != 0) {
                    if (list[i].score == this.poolBetArray[i])
                        continue;
                    if (this.isCanBets) {
                        this.showCoins(list[i].score - this.poolBetArray[i], i);//list[i].score
                    }
                    if (parseInt(this['labBetsPool' + (i - 1)].text) < (list[i].score / 10000)) {
                        //this['labBetsPool' + (i - 1)].text = QuickManage.moneyStr(list[i].score);
                        this.poolBetArray[i] = list[i].score;
                    }
                }
            }
        }
    }*/

    //离开游戏判断
    /*
    private onTouchClose(): void {
        if (this.isBanker) {
            TipsManage.showTips('您是庄家，下庄后方可离开！');
            return;
        }
        if (this.isBets) {
            TipsManage.showTips('您已经下注，这局结束后方可离开！')
            return;
        }
        Net.send(Protocol.GOLDEN_LEAVE_GAME, {}, (function (msg) {
            if (msg.code == 200) {
                this.dispose();
            }
            else {
                TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
            }
        }).bind(this));
    }

    //充值
    private onTouchCharge(): void {
        //PanelManage.openShop(3);
    }

    //充值返回
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
        Net.send(Protocol.GOLDEN_UP_BANKER, {}, this.upBankerCallback.bind(this));
    }

    //上庄回调
    private upBankerCallback(msg): void {
        if (msg.code == 200) {
            TipsManage.showTips('申请上庄成功！');
            this.btnDownBanker.visible = true;
            this.btnUpBanker.visible = false;
            this.isApplyBanker = true;
            this.curBankerRanking = msg.pos;
            this.labBankerRank.text = '排庄' + this.curBankerRanking;
        }
    }

    //下庄
    private onTouchDownBank(): void {
        Net.send(Protocol.GOLDEN_DOWN_BANKER, {}, this.downBankerCallback.bind(this));
    }

    //下庄回调
    private downBankerCallback(msg): void {
        if (msg.code == 200) {
            TipsManage.showTips('申请下庄成功！');
            this.btnDownBanker.visible = false;
            this.btnUpBanker.visible = true;
            this.isApplyBanker = false;
            this.curBankerRanking = -1;
            this.labBankerRank.text = '';
        }
    }

    //vip 座位
    private onTouchSeat(index): void {
        if (this.isBanker) {
            TipsManage.showTips('当前您是庄，不能坐下！');
            return;
        }
        Net.send(Protocol.GOLDEN_SEAT_DOWN, { seat: index }, (function (msg) {
            if (msg.code != 200) {
                TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
            }
        }).bind(this));
    }

    //筹码选择
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
        this.grpSelectBet.x = -8 + 106 * index;
        this.betsNum = JinHuaUtil.getInstance().getBetNumber(index);
    }

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
            // this.testNum++
            // console.log('=======set    ' + this.testNum);
            Net.send(Protocol.GOLDEN_BET_GOLD, { betId: this.betsPostion, gold: this.betsNum }, this.betGlodCallback.bind(this), false);
        }
    }

    //下注
    private betGlodCallback(msg): void {
        // console.log('+++++++get    ' + this.testNum);
        this.isCoinsReturn = true;
        if (msg.code == 200) {
            this.isBets = true;
            GlobalData.user.gold = (parseInt(GlobalData.user.gold) - this.betsNum) + '';
            this.titleLabMoney.text = QuickManage.moneyStr(parseInt(GlobalData.user.gold));
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
            this.bankerHead.source = 'head';
            this.bankerName.text = '萌萌哒';
            this.labBankerMoney.text = QuickManage.moneyStr(88888880000);
            this.isSysBanker = true;
            this.labBankerLastNum.text = '剩余10次';
            this.lastGameBankerNum = 10;
            this.isBanker = false;
            this.labBankerVip.text = 'v10';
            this.btnUpBanker.visible = true;
            this.btnDownBanker.visible = false;
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
                    this.btnUpBanker.visible = true;
                    this.btnDownBanker.visible = false;
                }
                this.isBanker = false;
            }
            if (this.bankerName.text != '萌萌哒') {
                if (!this.isFirstSetBanker) {
                    PanelManage.chat.sendGameChat(this.bankerName.text + '下庄了');
                }
            }
            this.bankerHead.source = banker.headurl//GlobalData.user.headurl;
            this.bankerHead.width = this.bankerHead.height = 86;
            this.bankerName.text = banker.nick;
            this.labBankerMoney.text = QuickManage.moneyStr(banker.gold);
            this.labBankerLastNum.text = '剩余10次';
            this.lastGameBankerNum = 10;
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
        Net.send(Protocol.JINHUA_GET_GOLD, {}, this.getGoldCallback.bind(this));
    }

    private getGoldCallback(data): void {
        if (data.code == 200) {
            GlobalData.user.gold = data.data.gold;
            lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.UPDATE_MAIN));
        }
}*/

    //下注
    /*
    private betGlodCallback(msg): void {
        // console.log('+++++++get    ' + this.testNum);
        this.isCoinsReturn = true;
        if (msg.code == 200) {
            this.isBets = true;
            GlobalData.user.gold = (parseInt(GlobalData.user.gold) - this.betsNum) + '';
            this.titleLabMoney.text = QuickManage.moneyStr(parseInt(GlobalData.user.gold));
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
    }*/


    //============================ work Show ===============================

    /**自己点击跟注 */
    /*private onGenZhuClick(evt: egret.TouchEvent) {
        var p: egret.Point = new egret.Point();
        p.x = 268;
        p.y = 792;
        this.showCoins(p, 10000);
    }*/
    private onGenZhuClick() {
        var p: egret.Point = new egret.Point();
        p.x = 268;
        p.y = 792;
        this.showCoins(p, 10000);
    }


    /**其他玩家跟注 */
    private onPlayerGenZhu(index, gold) {
        var p: egret.Point = new egret.Point();
        p.x = this["grpHead" + index].x + 21;
        p.y = this["grpHead" + index].y + 110;
        this.showCoins(p, gold);
    }

    //========================== Effect Show ===============================
    //提示信息  2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    private showGameTips(type): void {
        this.grpTipsInfo.source = ZJHUtil.getInstance().getMsgSource(type);
        this.grpTips.visible = true;
        this.grpTipsbg.alpha = 0;
        this.grpTipsInfo.x = 640;
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(type));
        egret.Tween.get(this.grpTipsbg).to({ alpha: 1 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ alpha: 0 }, 400);
        }, this.grpTipsbg);
        egret.Tween.get(this.grpTipsInfo).to({ x: 0 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ x: -640 }, 400);
        }, this.grpTipsInfo);
    }

    //显示筹码
    private showCoins(pos: egret.Point, num): void {
        var isRemove: boolean = false;
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(8));
        //var point: egret.Point = ZJHUtil.getInstance().getCoinsPos(index);
        var point: egret.Point = ZJHUtil.getInstance().getCoinsPos();

        var arr = ZJHUtil.getInstance().coinsType(pos, num);
        //if (this.coinsNumArr[index] < 50) {
        //    this.coinsNumArr[index] = parseInt(this.coinsNumArr[index]) + arr.length;
        //    isRemove = false;
        //}
        //else {
        //    isRemove = true;
        //}
        for (var i = 0; i < arr.length; i++) {
            var tx = point.x + Math.random() * 80;
            var ty = point.y + Math.random() * 80;
            this.grpCoins.addChild(arr[i]);
            egret.Tween.get(arr[i]).to({ x: tx, y: ty }, 200).call(function () {
                if (this[0]) {
                    this[1].parent.removeChild(this[1]);
                }
            }, [isRemove, arr[i]]);
        }
    }

    private zhangIndex: number = 4;//庄的位置
    private flyIntval: number = 0;  //
    private flyIndex0: number = 4;  //扑克位置(东西南北)
    private flyIndex1: number = 0;  //扑克(指定位置1，2，3)
    //private flyBankerIndex: number = 0;

    private cardEffect(): void {
        this.isCardEffectShow = true;
        this.flyIntval = setInterval(this.playCardFly.bind(this), 200);
    }

    private playCardFly(data: any): void {
        var card: eui.Image = this['grpCard' + this.flyIndex0 + '_' + this.flyIndex1];
        card.source = 'card_100';
        card.x = 713.5;
        card.y = 300;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        var pos = this.orginPlayerCardPos[this.flyIndex0][this.flyIndex1];
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 300);
        // if (this.flyIndex0 == 9) {
        if (this.flyIndex1 == 2) {
            if (this.flyIndex0 == 4) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                if (this.zhangIndex == 0) {
                    clearInterval(this.flyIntval);
                    this._btn_kanpai.visible = true;
                    return;
                }
            } else if (this.flyIndex0 == this.zhangIndex - 1) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                clearInterval(this.flyIntval);
                this._btn_kanpai.visible = true;
                return;
            } else {
                this.flyIndex1 = 0;
                this.flyIndex0++;

            }
        }
        else {
            this.flyIndex1++;
        }
    }

    /**自己点击看牌 */
    private onKanPaiClick(poke: any) {
        //let poke = { num: 2, type: 2, value: [408, 308, 401] };
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(7));
        for (var i = 0; i < 3; i++) {
            var card = this['grpCard' + 0 + '_' + i];
            card.source = 'card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]]);
        }
        this['labCardType' + 0].text = ZJHUtil.getInstance().getCardType(poke.type);
    }

    /**其他玩家看牌 */
    private onPlayerKanPai(index: number, poke: any) {
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(7));
        for (var i = 0; i < 3; i++) {
            var card = this['grpCard' + index + '_' + i];
            card.source = 'card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]]);
        }
        this['labCardType' + index].text = ZJHUtil.getInstance().getCardType(poke.type);
    }








    /*
    
        private blinkEffect(): void {
            clearInterval(this.interval);
            var result = this.cardResult.result;
            for (var i = 0; i < 4; i++) {
                if (result[i] == 1) {
                    //this['effectSelect' + i].visible = true;
                    //EffectUtils.blinkEffect(this['effectSelect' + i], 200);
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
                //this.interval = setInterval(this.showGameResult.bind(this), 1000);
            }
            else {
                //this.showGameResult();
            }
            this.cdTimer.start();
        }*/

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
            this.grpMaxHead.width = this.grpMaxHead.height = 86;
            this.grpMaxGold.text = '赢' + QuickManage.moneyStr(this.maxUserData.gold);
            this.grpMaxName.text = this.maxUserData.name;
            if (this.maxUserData.name == GlobalData.user.nickname) {
		this.playClickSound(JinHuaUtil.getInstance().getSoundEffect(1));
            }
        }
        else {
            this.grpMax.visible = false;
        }

        this.grpBankerHead.source = this.bankerHead.source; //
        this.grpBankerName.text = this.bankerName.text;

        this.grpBankerBeishu.text = data.pokes[0].num + '倍';
        this.labelBankerType.text = JinHuaUtil.getInstance().getCardType(data.pokes[0].type);
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
        //0 庄
        for (var i = 0; i < 4; i++) {
            this['resultType' + i].text = JinHuaUtil.getInstance().getCardType(data.pokes[i + 1].type);
            this['labResult0_' + i].text = data.pokes[i + 1].num + '倍';//倍率
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
        this.setHandsel(this.totalCaijin);
        this.updateGold();
        //更新来自更新彩金时所带的庄家金币
        if (!this.isSysBanker) {
            this.labBankerMoney.text = QuickManage.moneyStr(this.banker_total_gold);
        }
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
    }
    */

    private setStartBet(): void {
        this.resetGame();
        this.grpResult.visible = false;
        clearInterval(this.interval);
        this.showGameTips(2);
        this.grpCountdown.visible = true;
        if (!this.isSysBanker && !this.isChangeBanker) {
            this.lastGameBankerNum--;
            this.labBankerLastNum.text = '剩余' + this.lastGameBankerNum + '次';
        }
        if (this.isChangeBanker) {
            this.isChangeBanker = false;
            //this.setBankerInfo(this.changeBankerObj);
            this.grpBankerList.visible = false; //切庄的时候隐藏庄家列表
        }
    }

    private resetGame(): void {
        //for (var i = 0; i < 4; i++) {
        //    this['labBetsPool' + i].text = '0';
        //    this['labBetsSelf' + i].text = '0';
        //    egret.Tween.removeTweens(this['effectSelect' + i]);
        //}
        /*
        for (var i = 0; i < 3; i++) {
            let card: eui.Image = this['bankerCard_' + i];
            card.source = '';
            egret.Tween.removeTweens(card);
        }
        */
        for (var index = 0; index < 9; index++) {
            // this['labCardResult' + index].text = '';
            this['labCardType' + index].text = '';
            for (var j = 0; j < 3; j++) {
                let card: eui.Image = this['grpCard' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
                // this['grpCard' + index + '_' + j].source = '';
            }
        }

        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };

        while (this.grpCoins.numChildren > 0) {
            this.grpCoins.removeChildAt(0);
        }
        //for (var i = 0; i < 4; i++) {
        //    this['effectSelect' + i].visible = false;
        //}
        //for (let i = 0; i < 4; i++) {
        //    this['labTipsClick' + i].visible = true;
        //}
        this.isCanBets = true;
        this.isBets = false;
        this.imgBaoZhuang.visible = false;
        //this.labCardTypeBanker.text = '';
        this.resultCaijin = 0;
        //this.grpCaijin.visible = false;
        this.isCoinsReturn = true;
        this.isCardEffectShow = false;
        this.labCountdown0.text = '0';
        this.labCountdown1.text = '0';
    }

    //========================== Second Panel ==============================
    //牌型
    private onTouchCardType(): void {
        this.grpSecondPanel.visible = true;
        this.grpCardType.visible = true;
        this.grpHistory.visible = false;
    }

    //走势
    private onTouchCardHistory(): void {
        //Net.send(Protocol.GOLDEN_GAME_RECORD, {}, this.getHistoryCallback.bind(this));
    }

    private getHistoryCallback(msg): void {
        var list = msg.data;
        for (var i = 0; i < 10; i++) {
            if (i < list.length) {
                this['grpHistroy' + i].visible = true;
                var arr = list[i];
                for (var j = 0; j < 4; j++) {
                    this['grpHistroy' + j + '_' + i].source = arr[j] == 1 ? 'a8' : 'a7';
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
    //private onTouchRedBox(): void {
    //    PanelManage.openRedBox(1, 1);
    //}

    //private operateBoxComplete(): void {
    //    lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.UPDATE_MAIN));
    //}

    //只更新玩家的金币
    private updateDataGold(): void {
        //EffectUtils.numEffect(this.titleLabMoney, parseInt(GlobalData.user.gold));
    }

    /*
    public dispose(): void {
        MusicManage.closeMuisc();
        if (this.parent) {
            this.parent.removeChild(this);
        }
        EventManage.removeEvent(this);
    }

    public setTouchEnabled(): void {
        QuickManage.setTouchEnabled(this);
    }
    */

    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }

    public dispose(): void {
        xlLib.SceneMgr.instance.changeScene(Lobby);
    }

    public destroy(): void {
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.newplayer, this.playerJoinRoom, this);
        EventUtil.removeEventListener(EventConst.play, this.playpai, this);
        EventUtil.removeEventListener(EventConst.gambleType, this.gametype, this);
        this._btn_prepare.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_kanpai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiazhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_X1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_X2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_gendaodi.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_quanxia.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_qipai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_bipai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        if (this.cdTimer != null) {
            this.cdTimer.removeEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
        }
    }

}

