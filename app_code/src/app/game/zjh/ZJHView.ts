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

    public labstatus0: eui.Label;
    public labstatus1: eui.Label;
    public labstatus2: eui.Label;
    public labstatus3: eui.Label;
    public labstatus4: eui.Label;

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
    public _btn_continuegame: eui.Button;

    public _btn_prepare: eui.Button;
    public grp_btncm: eui.Button;
    public grp_btncmbar: eui.Button;
    public _btn_jiacm_1: eui.Button;
    public _btn_jiacm_2: eui.Button;
    public _btn_jiacm_3: eui.Button;
    public _btn_jiacm_4: eui.Button;
    public _btn_jiacm_5: eui.Button;
    public _btn_jiacm_6: eui.Button;
    public timeTxt: eui.Label;
    private kanpaistatue: boolean;


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
    private time: number;
    private timer: egret.Timer;

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

        this.kanpaistatue = false;
        this.grpCard.visible = true;
        this._btn_prepare.visible = true;
        this._btn_jiazhu.visible = false;
        this._btn_kanpai.visible = false;
        this._btn_qipai.visible = false;
        this.grp_btncm.visible = false;
        this._btn_continuegame.visible = false;



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
        for (var index = 0; index < 5; index++) {
            // this['labCardResult' + index].text = '';
            this['labCardType' + index].text = '';
            this['labstatus' + index].text = '';
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
                this.kanpaistatue = true;
            }, this);
        } else if (e.target == this._btn_genzhu) {
            this.sendamessage(EventConst.botpour, 1);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("跟注");
            this._btn_genzhu.visible = false;
        } else if (e.target == this._btn_jiazhu) {
            this.grp_btncm.visible = true;
        } else if (e.target == this._btn_jiacm_1) {
            this.sendamessage(EventConst.botpour, 2);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注2金币");

            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        } else if (e.target == this._btn_jiacm_2) {
            this.sendamessage(EventConst.botpour, 3);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注3金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        } else if (e.target == this._btn_jiacm_3) {
            this.sendamessage(EventConst.botpour, 4);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注4金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        } else if (e.target == this._btn_jiacm_4) {
            this.sendamessage(EventConst.botpour, 5);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注5金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        } else if (e.target == this._btn_jiacm_5) {
            this.sendamessage(EventConst.botpour, 6);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注6金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        } else if (e.target == this._btn_jiacm_6) {
            this.sendamessage(EventConst.botpour, 7);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注7金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        } else if (e.target == this._btn_gendaodi) {
            xlLib.TipsUtils.showFloatWordTips("跟到底");
        } else if (e.target == this._btn_quanxia) {

            xlLib.TipsUtils.showFloatWordTips("全下");
        } else if (e.target == this._btn_qipai) {
            this.sendamessage2(EventConst.abandon);
            xlLib.TipsUtils.showFloatWordTips("弃牌");
        } else if (e.target == this._btn_bipai) {
            this._btn_qipai.visible = false;
            let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
            let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
            let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);

            let senddata: any = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token,
                playway: playway.id,
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.compareCard, senddata, (data) => {
                xlLib.TipsUtils.showFloatWordTips("比牌");

            }, this);

        } else if (e.target == this._btn_continuegame) {
            this.sendamessage(EventConst.joinroom, null);
            xlLib.SceneMgr.instance.changeScene(ZJHScene);
            xlLib.TipsUtils.showFloatWordTips("继续游戏");
        }

    }
    private residueGolds() {
        
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
                let val = poke.value[i];
                var card = this['grpCard' + 0 + '_' + i];
                card.source = '';
                egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                    this[0].source = 'card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
                }, [card, val]);
                xlLib.DisplayUtils.setComponentEnabled(card, false);
            }

        }, this);
        this._btn_kanpai.visible = false;
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
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.newplayer, this.playerJoinRoom, this);
        EventUtil.addEventListener(EventConst.play, this.playpai, this);
        EventUtil.addEventListener(EventConst.gambleType, this.gametype, this);
        EventUtil.addEventListener(EventConst.otherSeecard, this.kanpai, this);
        EventUtil.addEventListener(EventConst.compareCard, this.Thancard, this);
        EventUtil.addEventListener(EventConst.pressure, this.ALLIN, this);
        EventUtil.addEventListener(EventConst.otherBotpour, this.otherplayerxiazhu, this);
        EventUtil.addEventListener(EventConst.botpour, this.xiazhu, this);
        EventUtil.addEventListener(EventConst.otherAbandon, this.otherdiscard, this);
        EventUtil.addEventListener(EventConst.abandon, this.discard, this);
        EventUtil.addEventListener(EventConst.settlement, this.settleaccount, this);
        EventUtil.addEventListener(EventConst.gameOver, this.gameover, this);
        EventUtil.addEventListener(EventConst.leave, this.leaveroom, this);

        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._btn_prepare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_kanpai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiazhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_gendaodi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_quanxia.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_qipai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_bipai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_continuegame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);

    }
    private addtime: number;//计时器从0+到10
    /**开始倒计时*/
    private startCountDown(time: number): void {
        // this.timeTxt.text = 10-time + "";
        //this.timeTxt.visible = true;
        this.time = time;
        if (this.timer == null) {
            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    }
    /**倒计时处理*/
    private timerFunc(evt: egret.TimerEvent): void {
        if (this.time >= 0 && this.time <= 15) {

            this.time--;
            this.addtime = 15 - this.time;
            console.log("addtime", 15 - this.time);
            //console.log(this.time);

        }
        else {
            this.clearTime();
        }
    }
    /**清除倒计时*/
    private clearTime(): void {
        if (this.timer) {
            this.timer.stop();
            // this.timeTxt.visible = false;
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    }
    /**发牌 */
    private playpai(data: any): void {

        this.zhangIndex = UserInfo.getInstance().findSeatNumber(data.param.index);
        this.flyIndex0 = UserInfo.getInstance().findSeatNumber(data.param.index);
        this.cardEffect();//飞牌动动作

        this._btn_kanpai.touchEnabled = true;
    }
    /**看牌 */
    private kanpai(data: any): void {
        if (data.param.command == "otherSeecard" && UserInfo.getInstance().uid != data.param.userId) {
            let seatnum = UserInfo.getInstance().findSeatNumber(data.param.index);
            this['labstatus' + seatnum].text = '已看牌';
        }

    }
    private numtime: number;//剩余操作时间
    /**判断是否进行操作*/
    private gametype(data: any): void {
        this.numtime = data.param.seconds;
        console.log(data);
        if (this.kanpaistatue == false) {
            this.startCountDown(this.numtime);
        }
        this._btn_bipai.visible = true;


        let betarr: string[] = data.param.limit.split(",");
        if (betarr.length >= 1) {
            console.log("可以加注*********************************");
            this._btn_jiazhu.visible = true;
            /* if (betarr.length == 2) {
                 console.log("可以加注1.5倍，2倍");
                 this._btn_jiazhu.touchEnabled = true;
             }*/
        }
    }
    /**玩家下注*/
    private xiazhu(data: any): void {
        if (data.param.command == "botpour" && UserInfo.getInstance().uid == data.param.id) {
            UserInfo.getInstance().goldcoins=data.param.golds;
            this.labelGold0.text = "" + UserInfo.getInstance().goldcoins;

        }
    }
    /**其他玩家下注*/
    private otherplayerxiazhu(data: any): void {
        if (data.param.command == "otherBotpour" && UserInfo.getInstance().uid != data.param.id) {
            this.onPlayerGenZhu(data.param.index, 10000);
            if (data.param.code == "200") {
               
            }
        }
    }
    /**全压*/
    private ALLIN(data: any): void {
        if (data.param.command == "pressure" && UserInfo.getInstance().uid != data.param.id) {

        }
    }
    /*玩家比牌*/
    private Thancard(data: any): void {
        if (data.param.command == "compareCard" && UserInfo.getInstance().uid != data.param.id) {
            console.log("其他玩家比牌");

        } else if (data.param.command == "compareCard" && UserInfo.getInstance().uid == data.param.id) {
            console.log("玩家自己和其他玩家比");
            this._btn_bipai.visible = true;
        }
    }

    /**其他玩家弃牌*/
    private otherdiscard(data: any): void {
        if (data.param.command == "otherAbandon" && UserInfo.getInstance().uid != data.param.userId) {
            let seatnum = UserInfo.getInstance().findSeatNumber(data.param.index);
            this['labCardType' + seatnum].text = '弃牌';
            this['labstatus' + seatnum].text = '';
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
        }
    }
    /**玩家弃牌*///自己不进行任何操作超过操作时间 视为弃牌状态 
    private discard(data: any): void {
        if (data.param.command == "abandon" && UserInfo.getInstance().uid == data.param.userId && this.addtime >= this.numtime) {
            console.log(this.addtime);
            let poke = {
                type: data.param.cardGenre,//牌型
                value: data.param.cardtype //牌值
            };
            for (var i = 0; i < 3; i++) {
                let val = poke.value[i];
                var card = this['grpCard' + 0 + '_' + i];
                card.source = 'card_100';
                egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                    this[0].source = 'card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
                }, [card, val]);
                xlLib.DisplayUtils.setComponentEnabled(card, false);
            }
            xlLib.TipsUtils.showFloatWordTips("自动弃牌");
            this._btn_kanpai.visible = false;
        }
    }


    /**结算 */
    private settleaccount(data: any): void {
        console.log("结算");
        this.grpResult.visible = true;

    }
    /**游戏结束*/
    private gameover(data: any): void {
        console.log(data);
        this._btn_continuegame.visible = true;
    }
    /**离开房间*/
    private leaveroom(data: any): void {
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

    //获取结算数据，显示结果面板时设置
    private setGameResult(data): void {
        //this.grpCountdown.visible = false;
        this.cardResult = data;
        var poke = data.pokes;
    }

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
                    this._btn_qipai.visible=true;
                    return;
                }
            } else if (this.flyIndex0 == this.zhangIndex - 1) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                clearInterval(this.flyIntval);
                this._btn_kanpai.visible = true;
                this._btn_qipai.visible=true;
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
    //只更新玩家的金币
    private updateDataGold(): void {
        //EffectUtils.numEffect(this.titleLabMoney, parseInt(GlobalData.user.gold));
    }

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
        EventUtil.removeEventListener(EventConst.otherSeecard, this.kanpai, this);
        EventUtil.removeEventListener(EventConst.compareCard, this.Thancard, this);
        EventUtil.removeEventListener(EventConst.pressure, this.ALLIN, this);
        EventUtil.removeEventListener(EventConst.otherBotpour, this.otherplayerxiazhu, this);
        EventUtil.removeEventListener(EventConst.botpour, this.xiazhu, this);
        EventUtil.removeEventListener(EventConst.otherAbandon, this.otherdiscard, this);
        EventUtil.removeEventListener(EventConst.abandon, this.discard, this);
        EventUtil.removeEventListener(EventConst.settlement, this.settleaccount, this);
        EventUtil.removeEventListener(EventConst.gameOver, this.gameover, this);
        EventUtil.removeEventListener(EventConst.leave, this.leaveroom, this);
        this._btn_prepare.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_kanpai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiazhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_6.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_gendaodi.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_quanxia.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_qipai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_bipai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        if (this.cdTimer != null) {
            this.cdTimer.removeEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
        }
    }

}

