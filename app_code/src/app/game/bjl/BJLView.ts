/**
 * 百家乐
 */
class BJLView extends eui.Component {
    constructor() {
        super();
        this.skinName = "BJLViewSkin";
        //this.r = r;
    }
    private r: any = null;

    public sypai_0: eui.Label;
    public sypai_1: eui.Label;
    public dianshu_0: eui.Group;
    public dianshu_img_0: eui.Image;
    public dianshu_1: eui.Group;
    public dianshu_img_1: eui.Image;
    public jushu_bg: eui.Image;
    public js_shi: eui.Image;
    public js_ge: eui.Image;
    public tishi_zi_0: eui.Image;
    public tishi_zi_1: eui.Image;
    public grpCard: eui.Group;
    public grpCard_0_1: eui.Image;
    public grpCard_0_0: eui.Image;
    public grpCard_0_2: eui.Image;
    public grpCard_1_0: eui.Image;
    public grpCard_1_1: eui.Image;
    public grpCard_1_2: eui.Image;
    public grpCountdown0: eui.Group;
    public timeTxt: eui.Label;
    public _image_1: eui.Image;
    public xuanzho: eui.Image;
    public _image_2: eui.Image;
    public _image_3: eui.Image;
    public _image_4: eui.Image;
    public _image_5: eui.Image;
    public _image_6: eui.Image;
    public grpHead0: eui.Group;
    public imghead0: eui.Image;
    public labelHead0: eui.Label;
    public labelGold0: eui.Label;
    public _btn_close: eui.Button;
    public _btn_meun: eui.Button;
    public wanjialist: eui.Button;
    public grpCoins: eui.Group;
    public effectTouch0: eui.Image;
    public grade_text_0_0: eui.Label;
    public grade_text_0_1: eui.Label;
    public effectTouch1: eui.Image;
    public grade_text_1_0: eui.Label;
    public grade_text_1_1: eui.Label;
    public effectTouch2: eui.Image;
    public grade_text_2_0: eui.Label;
    public grade_text_2_1: eui.Label;
    public effectTouch3: eui.Image;
    public grade_text_3_0: eui.Label;
    public grade_text_3_1: eui.Label;
    public effectTouch4: eui.Image;
    public grade_text_4_0: eui.Label;
    public grade_text_4_1: eui.Label;
    public wjlistkuang: eui.Group;
    public packup: eui.Image;
    public scroller: eui.Scroller;
    public userlist: eui.List;
    public Themitoken: eui.Group;
    public _bei_puke_0_0: eui.Image;
    public _bei_puke_0_1: eui.Image;
    public puke_0_0: eui.Image;
    public puke_0_1: eui.Image;
    public _bei_puke_0_2: eui.Image;
    public puke_0_2: eui.Image;
    public _bei_puke_1_0: eui.Image;
    public _bei_puke_1_1: eui.Image;
    public puke_1_0: eui.Image;
    public puke_1_1: eui.Image;
    public _bei_puke_1_2: eui.Image;
    public puke_1_2: eui.Image;
    public xian_tishi: eui.Group;
    public xian_Label: eui.Label;
    public zhuang_tishi: eui.Group;
    public zhuang_Label: eui.Label;





    ///----------------------------------------------------------------

    public num: number = 0;    //下注数量
    public time: number;        //秒数
    public timer: egret.Timer;  //计时器
    public arrCoin = [];        //下注筹码池   
    public isAction: boolean = false;               //能否下注    
    public multipleList: number[] = [0, 0, 0, 0, 0, 0];   //倍数表

    private orginPlayePos = [];    // 存储玩家扑克位置

    public istzxzDh: boolean = false;

    private jiesuan_1: BJLjiesuan1;
    private jiesuan_2: BJLjiesuan2;
    private jiesuan_3: BJLjiesuan3;
    private tingzhi: BJLtingzhi;
    private xiazhu: BJLxiazhu;

    //----------------------------------------------------------------


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
        this.juegengxin(1);
    }

    /**数据初始化 */
    private initData(): void {

        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.grpCoins.touchEnabled = false;

        this.grpCard.visible = true;

        // this.lastTouchBetIndex = 1;
        UserInfo.getInstance().isGameStart = false;
        this.istzxzDh = false;

        this.isAction = false;
        for (let i = 0; i < 5; i++) {
            this['grade_text_' + i + '_0'].text = '';
            this['grade_text_' + i + '_1'].text = '';
            this['effectTouch' + i].alpha = 0;
        }

        //------------------------------------
        this.arrCoin = [];
        this.jushu_bg.visible = false;
        this.js_shi.visible = false;
        this.js_ge.visible = false;
        this.js_ge.x = 603;
        this.tishi_zi_0.visible = false;
        this.tishi_zi_1.visible = false;
        this.wjlistkuang.visible = false;
        this.dianshu_0.visible = false;
        this.dianshu_1.visible = false;
        this.dianshu_img_0.source = '';
        this.dianshu_img_1.source = '';

        this.Themitoken.visible = false;
        this.xian_tishi.visible = false;
        this.zhuang_tishi.visible = false;

        for (let i = 0; i < 3; i++) {
            this['puke_0_' + i].source = '';
            this['puke_0_' + i].visible = false;
            this['puke_1_' + i].source = '';
            this['puke_1_' + i].visible = false;
        }
        this._bei_puke_0_2.visible = false;
        this._bei_puke_1_2.visible = false;

        this.Themitoken.visible = false;

    }
    /**获取原始扑克的位置 */
    private getOrginCardPos(): void {

        for (var index = 0; index < 2; index++) {
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
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

        for (var index = 0; index < 2; index++) {
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
                var card: eui.Image = this['_bei_puke_' + index + '_' + j];
                card.source = '';
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos: egret.Point = new egret.Point;
                pos.x = card.x;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayePos[index] = cardPos;
        }

    }

    public resize(): void {

    }
    /**准备 开始回调 */
    public onClick(e: egret.TouchEvent): void {
        if (e.target == this.wanjialist) {
            this.wjlistkuang.visible = true;
            this.wanjialiebiao(EventConst.playersUserWin);
        } else if (e.target == this._image_1) {
            this.onTouchBet(1);
        } else if (e.target == this._image_2) {
            this.onTouchBet(2);
        } else if (e.target == this._image_3) {
            this.onTouchBet(3);
        } else if (e.target == this._image_4) {
            this.onTouchBet(4);
        } else if (e.target == this._image_5) {
            this.onTouchBet(5);
        } else if (e.target == this._image_6) {
            this.onTouchBet(6);
        } else if (e.target == this.effectTouch0) {
            if (this.isAction) {
                this.sendamessage(EventConst.baijialebeton, this.multipleList[this.lastTouchBetIndex - 1], 1);
            }
        } else if (e.target == this.effectTouch1) {
            if (this.isAction) {
                this.sendamessage(EventConst.baijialebeton, this.multipleList[this.lastTouchBetIndex - 1], 2);
            }
        } else if (e.target == this.effectTouch2) {
            if (this.isAction) {
                this.sendamessage(EventConst.baijialebeton, this.multipleList[this.lastTouchBetIndex - 1], 3);
            }
        } else if (e.target == this.effectTouch3) {
            if (this.isAction) {
                this.sendamessage(EventConst.baijialebeton, this.multipleList[this.lastTouchBetIndex - 1], 4);
            }
        } else if (e.target == this.effectTouch4) {
            if (this.isAction) {
                this.sendamessage(EventConst.baijialebeton, this.multipleList[this.lastTouchBetIndex - 1], 5);
            }
        } else if (e.target == this._btn_meun) {

        } else if (e.target == this.packup) {
            this.wjlistkuang.visible = false;
        } else if (e.target == this._btn_close) {
            this.Onquit();
        }
    }
    /**发送请求 sendstr：命令 extparams：{ "moneys": 金额, "types": 押注类型 }*/
    private sendamessage(sendstr: string, money: number, type: number): void {

        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: Const.PLAYWAY_CHUJICHANG,
            extparams: { "moneys": money, "types": type }
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {

        }, this);
    }

    /**监听服务器事件 */
    private addEvent(): void {

        this._image_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_meun.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.wanjialist.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.packup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        EventUtil.addEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.addEventListener(EventConst.onCheckout, this.bofangEffect, this);
        EventUtil.addEventListener(EventConst.onUpdateUserBalance, this.onAcquisitionGolbBack, this);
        EventUtil.addEventListener(EventConst.OnUpdateLimitItem, this.UpdateLimitItem, this);
        EventUtil.addEventListener(EventConst.onSendJetton, this.SendJetton, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.addEventListener(EventConst.userwin, this.initGameIconList, this);
        EventUtil.addEventListener(EventConst.onUserLeaveGame, this.ongameOverSuccesBack, this);

        EventUtil.addEventListener(EventConst.onTimelyNotify, this.TimelyNotify, this);
    }
    /**局数更新 */
    private juegengxin(index: number): void {
        this.jushu_bg.visible = true;
        if (index >= 10 && index < 20) {
            this.js_shi.visible = true;
            this.js_ge.visible = true;
            this.jushu_bg.source = 'baccarat_font_bureau_diju2_png';
            this.js_shi.source = 'baccarat_font_bureau_1_png';
            this.js_ge.source = 'baccarat_font_bureau_' + index % 10 + '_png';
            this.js_ge.x = 601;
        } else {
            this.js_shi.visible = true;
            this.js_ge.visible = true;
            this.jushu_bg.source = 'baccarat_font_bureau_diju1_png';
            this.js_ge.source = 'baccarat_font_bureau_' + index + '_png';
            this.js_ge.x = 593;
        }
    }
    /**个人限红通知 */
    private UpdateLimitItem(data: any) {
        xlLib.TipsUtils.showFloatWordTips("个人限红通知!");
    }
    /**游戏状态 */
    private GameStatus(data: any): void {
        console.log("收到----------------------------------------" + data._obj.roomStatus);
        switch (data._obj.roomStatus) {
            case 1: this.zhunbeizho(data); break;    //准备中
            case 2: this.onStartBetonBack(data); break;    //下注
            case 5: this.zitixianshi(data); break;    //发牌（动画）
            case 3: this.xianjiamipai(data); break;    //闲家咪牌（发牌）
            case 6: this.zhuangjiamipai(data); break;    //庄家咪牌（发牌）
            case 7: this.xianjiaBupai(data); break;    //闲家补牌
            case 8: this.zhuangjiaBupai(data); break;    //庄家补牌
            case 4: this.onBeginBteonBack(data); break;    //派奖（结算）
            case 9: this.Zhuangbeizho(data); break;    //第二轮开始

        }
    }
    /**发牌中 字体显示 */
    private zitixianshi(data: any): void {
        this.startCountDown(data._obj.seconds);
        this.tishi_zi_0.visible = true;
        this.tishi_zi_0.source = 'baccarat_font_stage_2_png';
        this.fapai();
    }
    /**准备中 */
    private zhunbeizho(data: any): void {
        this.startCountDown(data._obj.seconds);

        this.tishi_zi_0.visible = true;
        this.tishi_zi_0.source = 'baccarat_font_stage_3_png';

    }
    /**第二轮开始 */
    private Zhuangbeizho(data): void {
        this.startCountDown(data._obj.seconds);
        this.juegengxin(data._obj.jushu);
        this.sypai_0.text = data._obj.leftcardlh + '';
        this.sypai_1.text = data._obj.deskcards + '';
        this.resetGame();
    }
    /**(筹码) */
    private SendJetton(data: any): void {
        for (let i = 0; i < data._obj.betrules.length; i++) {
            this.multipleList[i] = data._obj.betrules[i];
        }
    }
    /**赔率 */
    private ononBJLjoinroomBack(data: any): void {
        console.log("赔率");
    }
    /**可以开始下注  倒计时*/
    private onStartBetonBack(data: any): void {
        console.log("可以开始下注  倒计时");
        this.tishi_zi_0.visible = true;
        this.tishi_zi_0.source = 'baccarat_font_stage_6_png';
        this.xiazhu_Effect();
        this.istzxzDh = true;
        this.startCountDown(data._obj.seconds);
        this.isAction = true;
        for (let i = 0; i < 5; i++) {
            this['effectTouch' + i].alpha = 1;
        }
    }
    /**更新下注通知(所有人) */
    private OnBetUpdate(data: any): void {
        console.log(UserInfo.getInstance().uid);
        console.log(data._obj.userid);
        if (data._obj.code == 200) {
            if (UserInfo.getInstance().uid == data._obj.userid) {
                UserInfo.getInstance().isGameStart = true;  //游戏状态
                this.onGenZhuClick(data._obj.money, data._obj.base);
                this.onJettongrade(data._obj.zongsocre, data._obj.base)
                this.onplaygrade(data._obj.playsocre, data._obj.base)
                UserInfo.getInstance().goldcoins = data._obj.golbcontis;
                this.labelGold0.text = GlobalFunction.Formatconversion(data._obj.golbcontis);

            } else {
                this.onPlayerGenZhu(data._obj.money, data._obj.base);
                this.onJettongrade(data._obj.zongsocre, data._obj.base)
            }
        }
    }
    /**闲家咪牌 */
    private xianjiamipai(data: any) {
        this.isAction = false;
        for (let i = 0; i < 5; i++) {
            this['effectTouch' + i].alpha = 0;
        }
        this.tishi_zi_0.visible = false;
        this.tishi_zi_1.visible = true;
        this.tishi_zi_1.source = 'baccarat_font_stage_5_png';

        this.istzxzDh = false;
        this.startCountDown(data._obj.seconds);

        this.dianshu_0.visible = true;
        this.dianshu_img_0.source = 'baccarat_game_point_' + data._obj.playersce + '_png';
        this.Themitoken.visible = true;
        this.xian_tishi.visible = true;
        this.xian_Label.text = "闲家咪牌中";
        this.zhuang_tishi.visible = false;
        this.grpCard_0_0.source = 'qznn_card_' + data._obj.playerCard[0];
        this.grpCard_0_1.source = 'qznn_card_' + data._obj.playerCard[1];
        this.puke_0_0.source = 'qznn_card_' + data._obj.playerCard[1];

        this.puke_0_0.x = this.orginPlayePos[0][0].x - 170;
        this.puke_0_0.visible = true;
        this.puke_0_1.source = 'qznn_card_' + data._obj.playerCard[0];

        this.puke_0_1.x = this.orginPlayePos[0][1].x - 170;
        this.puke_0_1.visible = true;

        for (let i = 0; i < 2; i++) {
            this['_bei_puke_0_' + i].visible = true;
            this['_bei_puke_1_' + i].visible = true;
        }

        this.fanpaixiaog(0);

    }
    /**庄家咪牌 */
    private zhuangjiamipai(data: any) {
        this.startCountDown(data._obj.seconds);
        this.tishi_zi_1.visible = true;
        this.tishi_zi_1.source = 'baccarat_font_stage_5_png';

        this.dianshu_1.visible = true;
        this.dianshu_img_1.source = 'baccarat_game_point_' + data._obj.bankersce + '_png';

        this.xian_tishi.visible = false;
        this.zhuang_tishi.visible = true;
        this.zhuang_Label.text = "庄家咪牌中";
        this.grpCard_1_0.source = 'qznn_card_' + data._obj.bankerCard[0];
        this.grpCard_1_1.source = 'qznn_card_' + data._obj.bankerCard[1];
        this.puke_1_0.source = 'qznn_card_' + data._obj.bankerCard[1];

        this.puke_1_0.x = this.orginPlayePos[1][0].x - 170;
        this.puke_1_0.visible = true;
        this.puke_1_1.source = 'qznn_card_' + data._obj.bankerCard[0];

        this.puke_1_1.x = this.orginPlayePos[1][1].x - 170;
        this.puke_1_1.visible = true;
        this._bei_puke_1_0.visible = true;
        this._bei_puke_1_1.visible = true;

        this.fanpaixiaog(1);
    }
    /**闲家补牌 */
    private xianjiaBupai(data: any) {
        this.startCountDown(data._obj.seconds);
        this.dianshu_img_0.source = 'baccarat_game_point_' + data._obj.playersce + '_png';
        this.xian_tishi.visible = true;
        this.xian_Label.text = "闲家补牌中";
        this.zhuang_tishi.visible = false;

        for (let i = 0; i < 2; i++) {
            this['puke_0_' + i].visible = false;
            this['puke_1_' + i].visible = false;
            this['_bei_puke_0_' + i].visible = false;
            this['_bei_puke_1_' + i].visible = false;
        }

        this.puke_0_2.source = 'qznn_card_' + data._obj.playerCard[0];
        this.puke_0_2.visible = true;
        this._bei_puke_0_2.visible = true;

        this.fapai2(0, data._obj.playerCard[0]);
    }
    /**庄家补牌 */
    private zhuangjiaBupai(data: any) {
        this.startCountDown(data._obj.seconds);
        this.dianshu_img_1.source = 'baccarat_game_point_' + data._obj.bankersce + '_png';
        this.xian_tishi.visible = false;
        this.zhuang_Label.text = "庄家补牌中";
        this.zhuang_tishi.visible = true;

        for (let i = 0; i < 2; i++) {
            this['puke_0_' + i].visible = false;
            this['puke_1_' + i].visible = false;
            this['_bei_puke_0_' + i].visible = false;
            this['_bei_puke_1_' + i].visible = false;
        }

        this.puke_1_2.source = 'qznn_card_' + data._obj.bankerCard[0];
        this.puke_1_2.visible = true;
        this._bei_puke_1_2.visible = true;
        this.fapai2(1, data._obj.bankerCard[0]);
    }

    /**金币变为** */
    private onAcquisitionGolbBack(data: any): void {
        if (data._obj.code == 200) {
            if (UserInfo.getInstance().uid == data._obj.userid) {
                UserInfo.getInstance().goldcoins = data._obj.wingolb;
                this.labelGold0.text = GlobalFunction.Formatconversion(data._obj.goldcoins);
            }
        }
    }
    /**结算（派奖） */
    private onBeginBteonBack(data: any): void {
        UserInfo.getInstance().isGameStart = false;
        this.dianshu_0.visible = false;
        this.dianshu_1.visible = false;

        this.Themitoken.visible = false;
        this.startCountDown(data._obj.seconds);

    }
    /**当前牌局的 庄赢 闲赢  和 */
    private bofangEffect(data: any) {
        this.startCountDown(data._obj.seconds);
        if (data._obj.base == 1) {
            this.addjiesuan_1Effect();
        } else if (data._obj.base == 2) {
            this.addjiesuan_2Effect();
        } else if (data._obj.base == 3) {
            this.addjiesuan_3Effect();
        }
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

    /**退出房间 */
    private ongameOverSuccesBack(data: any): void {
        if (data._obj.code == 200) {
            xlLib.SoundMgr.instance.stopBgMusic();
            let musicBg = ["hall_bg_mp3"];
            xlLib.SoundMgr.instance.playBgMusic(musicBg);
            xlLib.SceneMgr.instance.changeScene(Lobby);
        } else {
            xlLib.TipsUtils.showFloatWordTips(data._obj.reminder + "!");
        }
    }

    /**自己加入房间*/
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
            this.imghead0.source = "women7_png";
        }

    }
    /**设置金币最多的20个玩家数据 */
    private initGameIconList(data: any): void {
        let dataArr: any[] = [];
        let otherplayer: any;
        for (let i = 0; i < data._obj.subList.length; i++) {
            otherplayer = new Object()
            if (i == 0) {
                otherplayer.tp = 'baccarat_players_rank1_png';
                otherplayer.fot = false;
            } else if (i == 1) {
                otherplayer.tp = 'baccarat_players_rank2_png';
                otherplayer.fot = false;
            } else if (i == 2) {
                otherplayer.tp = 'baccarat_players_rank3_png';
                otherplayer.fot = false;
            } else {
                otherplayer.tp = 'baccarat_players_rankBg_png';
                otherplayer.fot = true;
            }
            otherplayer.index = data._obj.subList[i].index + 1;
            otherplayer.name = data._obj.subList[i].username;
            otherplayer.gold = data._obj.subList[i].goldcoins;
            otherplayer.gold1 = data._obj.subList[i].xss;
            otherplayer.img = "women7_png";
            dataArr.push(otherplayer);
        }

        this.userlist.dataProvider = new eui.ArrayCollection(dataArr);
        this.scroller.viewport = this.userlist;
    }
    /**通知类型 状态 */
    private TimelyNotify(data) {
        switch (data._obj.change) {
            case 1: ; break;    //当前房间状态不能下注
            case 2: ; break;    //余额不足
            case 3: ; break;
            case 4: this.tichufj(); break;    //5局不下注踢出房间
            case 5: ; break;    //3局不下注提示
            case 6: ; break;    //
            case 7: ; break;    //金币不足
        }
    }
    /**踢出房间 */
    private tichufj(): void {
        xlLib.SoundMgr.instance.stopBgMusic();
        let musicBg = ["hall_bg_mp3"];
        xlLib.SoundMgr.instance.playBgMusic(musicBg);
        xlLib.SceneMgr.instance.changeScene(Lobby);
    }

    /**胜利 */
    private addjiesuan_1Effect(): void {
        if (!this.jiesuan_1) {
            this.jiesuan_1 = new BJLjiesuan1();
            this.jiesuan_1.anchorOffsetX = this.jiesuan_1.width / 2;
            this.jiesuan_1.anchorOffsetY = this.jiesuan_1.height / 2;
            this.jiesuan_1.x = xlLib.Global.screenWidth / 2;
            this.jiesuan_1.y = xlLib.Global.screenHeight / 2;
        }
        this.jiesuan_1.play();
        this.addChild(this.jiesuan_1);
    }
    /**胜利 */
    private addjiesuan_2Effect(): void {
        if (!this.jiesuan_2) {
            this.jiesuan_2 = new BJLjiesuan2();
            this.jiesuan_2.anchorOffsetX = this.jiesuan_2.width / 2;
            this.jiesuan_2.anchorOffsetY = this.jiesuan_2.height / 2;
            this.jiesuan_2.x = xlLib.Global.screenWidth / 2;
            this.jiesuan_2.y = xlLib.Global.screenHeight / 2;
        }
        this.jiesuan_2.play();
        this.addChild(this.jiesuan_2);
    }
    /**胜利 */
    private addjiesuan_3Effect(): void {
        if (!this.jiesuan_3) {
            this.jiesuan_3 = new BJLjiesuan3();
            this.jiesuan_3.anchorOffsetX = this.jiesuan_3.width / 2;
            this.jiesuan_3.anchorOffsetY = this.jiesuan_3.height / 2;
            this.jiesuan_3.x = xlLib.Global.screenWidth / 2;
            this.jiesuan_3.y = xlLib.Global.screenHeight / 2;
        }
        this.jiesuan_3.play();
        this.addChild(this.jiesuan_3);
    }
    /**下注开始 */
    private xiazhu_Effect(): void {
        if (!this.xiazhu) {
            this.xiazhu = new BJLxiazhu();
            this.xiazhu.anchorOffsetX = this.xiazhu.width / 2;
            this.xiazhu.anchorOffsetY = this.xiazhu.height / 2;
            this.xiazhu.x = xlLib.Global.screenWidth / 2;
            this.xiazhu.y = xlLib.Global.screenHeight / 2;
        }
        this.xiazhu.play();
        this.addChild(this.xiazhu);
    }
    /**停止下注 */
    private tingzhi_Effect(): void {
        if (!this.tingzhi) {
            this.tingzhi = new BJLtingzhi();
            this.tingzhi.anchorOffsetX = this.tingzhi.width / 2;
            this.tingzhi.anchorOffsetY = this.tingzhi.height / 2;
            this.tingzhi.x = xlLib.Global.screenWidth / 2;
            this.tingzhi.y = xlLib.Global.screenHeight / 2;
        }
        this.tingzhi.play();
        this.addChild(this.tingzhi);
    }

    /**自己点击跟注 (丢筹码动作) */
    private onGenZhuClick(num: number, index: number) {
        var p: egret.Point = new egret.Point();
        p.x = 68;
        p.y = 762;
        this.showCoins(p, num, index);
    }
    /**其他玩家跟注 (丢筹码动作) */
    private onPlayerGenZhu(num: number, index: number) {
        var p: egret.Point = new egret.Point();
        p.x = 50;
        p.y = 604;
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
    /**开始倒计时*/
    private startCountDown(time: number): void {
        this.timeTxt.text = time + "";

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
            this.timeTxt.text = this.time + "";
            this.time--;
            if (this.time == 0) {
                if (this.istzxzDh) {
                    this.tingzhi_Effect();
                }
            }
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
            // this.timeTxt.visible = false;
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    }

    //筹码选择
    private onTouchBet(index): void {
        if (this.lastTouchBetIndex == index) {
            return;
        } else {
            this['_image_' + this.lastTouchBetIndex].y += 20;
        }
        this.lastTouchBetIndex = index;
        this['_image_' + index].y -= 20;
        switch (index) {
            case 1: this.xuanzho.x = 337.78; break;
            case 2: this.xuanzho.x = 475.16; break;
            case 3: this.xuanzho.x = 603.77; break;
            case 4: this.xuanzho.x = 736.77; break;
            case 5: this.xuanzho.x = 866.1; break;
            case 6: this.xuanzho.x = 997.77; break;
        }
    }

    /**翻牌动作效果 */
    private fanpaixiaog(index: number): void {
        for (let i = 0; i < 2; i++) {
            var square2: egret.Shape = new egret.Shape();
            square2.graphics.beginFill(0xff0000);
            square2.graphics.drawRect(0, 0, 170, 255);
            square2.graphics.endFill();
            this.Themitoken.addChild(square2);
            let _card2 = this["puke_" + index + "_" + i];
            square2.x = this.orginPlayePos[index][i].x;
            square2.y = this.orginPlayePos[index][i].y;

            _card2.mask = square2;
            egret.Tween.get(_card2).to({ x: _card2.x + 170, y: _card2.y }, 600);

            var square1: egret.Shape = new egret.Shape();
            square1.graphics.beginFill(0xff0000);
            square1.graphics.drawRect(0, 0, 170, 255);
            square1.graphics.endFill();
            this.Themitoken.addChild(square1);
            let _card1 = this["_bei_puke_" + index + "_" + i];
            square1.x = this.orginPlayePos[index][i].x;
            square1.y = this.orginPlayePos[index][i].x;

            _card1.mask = square1;
            egret.Tween.get(_card1).to({ x: _card1.x - 170, y: _card1.y }, 800);

        }

    }
    //设置彩金
    //private setHandsel(num): void {
    //this.labHandsel.text = QuickManage.moneyStr(num);
    //}
    /**
     * 定时器
     */
    // private setCountdown(): void {
    //     this.cdTimer = new egret.Timer(1000);
    //     this.cdTimer.addEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
    // }

    // private clacTimer(): void {
    //     //if (this.cdNum % 7 == 0) {
    //     //    this.getBets();
    //     //}
    //     if (this.cdNum > 0) {
    //         this.cdNum--;
    //     }
    //     else {
    //         this.cdTimer.stop();
    //         this.cdNum = 0;

    //         this.resetGame();


    //         this.cdNum = 5;
    //         this.cardEffect();
    //     }
    //     if (this.cdNum < 10) {
    //         this.labCountdown0.text = '0';
    //         this.labCountdown1.text = this.cdNum + '';
    //     }
    //     else {
    //         this.labCountdown0.text = (this.cdNum + '').split('')[0];
    //         this.labCountdown1.text = (this.cdNum + '').split('')[1];
    //     }
    // }

    // //msg.state     1 free 禁止玩儿游戏   2 下注中  3 封盘倒计时
    // private joinCallback(msg): void {
    //     if (msg.code == 200) {
    //         this.curRate = msg.data.rate;
    //         var data = msg.data;
    //         var seats = msg.data.seats;
    //         for (var i = 0; i < seats.length; i++) {
    //             this['imghead' + seats[i].seat].source = seats[i].headurl;
    //             this['labelHead' + seats[i].seat].text = seats[i].name;
    //             this['imghead' + seats[i].seat].height = this['imghead' + seats[i].seat].width = 70;
    //         }
    //         this.limitGold = data.limitGold;
    //         this.limitVip = data.limitVip;
    //         //this.setHandsel(data.caijin);
    //         //设置庄信息
    //         //this.setBankerInfo(data.zhuang);
    //         //设置倒计时
    //         this.cdNum = data.time;
    //         this.cdTimer.start();
    //         if (msg.state == 1) {
    //             this.isCanBets = false;
    //         }
    //         else if (msg.state == 2) {
    //             this.isCanBets = true;
    //         }
    //         else if (msg.state == 3) {
    //             this.isCanBets = false;
    //         }
    //         console.log('join_game: ' + data.state);
    //     }
    //     else {
    //         //TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
    //     }
    // }

    // public onMsgListen(data): void {
    //     var msg = data.msg
    //     console.log('onMsgListen: ' + msg.type, '_niuniuMsgListen_');
    //     switch (msg.type) {
    //         case 0: //开始下注
    //             this.cdNum = parseInt(msg.time) + 3;
    //             this.cdTimer.start();
    //             break;
    //         case 1: //封盘
    //             this.isCanBets = false;
    //             this.showGameTips(3);
    //             break;
    //         case 2: //结算
    //             this.setGameResult(msg.data);
    //             break;
    //         case 3: //更换庄家
    //             this.changeBankerObj = msg.zhuang;
    //             this.isChangeBanker = true;
    //             break;
    //         case 4: //更新座位
    //             this.updataSeat(1, msg.data);
    //             break;
    //         case 5:	//离开座位
    //             this.updataSeat(2, msg.seat);
    //             break;
    //         case 6://同步彩金
    //             this.updateHandsel(msg);
    //             break;
    //         case 7://通知庄 名次
    //             //this.updateBankerRank(msg);
    //             break;
    //     }
    // }

    // /**
    //  * 获取结算数据，显示结果面板时设置
    //  */
    // private setGameResult(data): void {
    //     //this.grpCountdown.visible = false;
    //     this.cardResult = data;

    // }

    // /**
    //  * 同步座位
    //  */
    // private updataSeat(type, data): void {
    //     if (type == 1) {
    //         this['imghead' + data.seat].source = data.headurl;
    //         this['imghead' + data.seat].height = this['imghead' + data.seat].width = 70;
    //         this['labelHead' + data.seat].text = data.nick;
    //     }
    //     else {
    //         this['imghead' + data].source = '';
    //         this['labelHead' + data].text = '';
    //     }
    // }

    // //同步彩金 （包含庄结算输赢）
    // private updateHandsel(data): void {
    //     if (this.cardResult == null)
    //         return;
    //     //this.resultCaijin = parseInt(data.data.gift);
    //     //this.totalCaijin = parseInt(data.data.caijin);
    //     // this.setHandsel(data.data.caijin);
    //     this.maxUserData = data.data.max;
    //     this.banker_total_gold = data.data.bankerTotalGold;
    //     for (let i = 0; i < 4; i++) {
    //         this['labTipsClick' + i].visible = false;
    //     }
    //     this.cardEffect();
    // }

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

    // //定时同步下注筹码
    // private getBetsCallback(msg): void {
    //     if (msg.code == 200) {
    //         var list = msg.list;
    //         // console.log('------------------- start ----------------------');
    //         for (var i = 1; i < 5; i++) {
    //             if (list[i].score != 0) {
    //                 // console.log('list ' + i + ':' + list[i].score);
    //                 // console.log('pool ' + i + ':' + this.poolBetArray[i]);
    //                 if (list[i].score == this.poolBetArray[i])
    //                     continue;
    //                 if (this.isCanBets) {
    //                     //this.showCoins(list[i].score - this.poolBetArray[i], i);//list[i].score
    //                 }
    //                 if (parseInt(this['labBetsPool' + (i - 1)].text) < (list[i].score / 10000)) {
    //                     //this['labBetsPool' + (i - 1)].text = QuickManage.moneyStr(list[i].score);
    //                     this.poolBetArray[i] = list[i].score;
    //                 }
    //                 // this['labBetsPool' + (i - 1)].text = QuickManage.moneyStr(list[i].score);
    //                 // this.poolBetArray[i] = list[i].score;
    //             }
    //         }
    //         // console.log('------------------- end ----------------------');
    //     }
    // }

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

    // //充值
    // private onTouchCharge(): void {
    //     //PanelManage.openShop(3);
    // }

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
        this.betsNum = BJLUtil.getInstance().getBetNumber(index);
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

    // //提示信息  2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    // private showGameTips(type): void {
    //     this.grpTipsInfo.source = BRNNUtil.getInstance().getMsgSource(type);
    //     this.grpTips.visible = true;
    //     this.grpTipsbg.alpha = 0;
    //     this.grpTipsInfo.x = 640;
    //     this.playClickSound(BRNNUtil.getInstance().getSoundEffect(type));
    //     egret.Tween.get(this.grpTipsbg).to({ alpha: 1 }, 400).wait(400).call(function () {
    //         egret.Tween.get(this).to({ alpha: 0 }, 400);
    //     }, this.grpTipsbg);
    //     egret.Tween.get(this.grpTipsInfo).to({ x: 0 }, 400).wait(400).call(function () {
    //         egret.Tween.get(this).to({ x: -1640 }, 400);
    //     }, this.grpTipsInfo);
    // }

    //显示筹码
    private showCoins(pos: egret.Point, num: number, msg: number): void {
        var isRemove: boolean = false;
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(8));
        //var point: egret.Point = BJLUtil.getInstance().getCoinsPos(index);
        var point: egret.Point = BJLUtil.getInstance().getCoinsPos(msg);

        var arr = BJLUtil.getInstance().coinsType(pos, num);
        for (var i = 0; i < arr.length; i++) {
            var tx = point.x + Math.random() * 250;
            var ty = point.y + Math.random() * 80;
            this.grpCoins.addChild(arr[i]);

            egret.Tween.get(arr[i]).to({ x: tx, y: ty }, 200).call((mc) => {
                // if (mc) {
                //     mc.parent.removeChild(mc);
                // }
            }, this, [arr[i]]);
            this.arrCoin.push(arr[i]);
        }
    }

    private fapai_0: number = 0;
    private fapai_1: number = 0;
    /**发牌动画 */
    private fapai() {
        var card: eui.Image = this['grpCard_' + this.fapai_0 + '_' + this.fapai_1];
        card.x = 713.5;
        card.y = 100;
        card.source = 'gf_poker0_png';
        var pos = this.orginPlayerCardPos[this.fapai_0][this.fapai_1];
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400).call(this.fapai1, this);
    }
    private fapai1() {
        if (this.fapai_0 == 1) {
            this.fapai_0 = 0;
            this.fapai_1++;
        } else {
            this.fapai_0++;
        }

        if (this.fapai_1 > 1) {
            this.fapai_0 = 0;
            this.fapai_1 = 0;
            if (this.fapai_1 != 0) {
                clearInterval(this.fapai_1);
            }
            return;
        }
        this.fapai();
    }
    /**补牌动画 */
    private fapai2(index: number, num: number) {
        var card: eui.Image = this['grpCard_' + index + '_2'];
        card.x = 713.5;
        card.y = 100;
        card.source = 'qznn_card_' + num;
        var pos = this.orginPlayerCardPos[index][2];
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400);

        var square2: egret.Shape = new egret.Shape();
        square2.graphics.beginFill(0xff0000);
        square2.graphics.drawRect(0, 0, 255, 170);
        square2.graphics.endFill();
        this.Themitoken.addChild(square2);
        let _card2 = this["puke_" + index + "_2"];

        square2.x = this.orginPlayePos[index][2].x;
        square2.y = this.orginPlayePos[index][2].y;

        _card2.mask = square2;
        egret.Tween.get(_card2).to({ x: _card2.x + 255, y: _card2.y }, 600);

        var square1: egret.Shape = new egret.Shape();
        square1.graphics.beginFill(0xff0000);
        square1.graphics.drawRect(0, 0, 255, 170);
        square1.graphics.endFill();
        this.Themitoken.addChild(square1);
        let _card1 = this["_bei_puke_" + index + "_2"];
        square1.x = this.orginPlayePos[index][2].x;
        square1.y = this.orginPlayePos[index][2].y;
        _card1.mask = square1;
        egret.Tween.get(_card1).to({ x: _card1.x - 255, y: _card1.y }, 800);




    }

    private flyIntval: number = 0;  //
    private flyBankerIndex: number = 0;


    private flyIndex0: number = 0;  //扑克位置(东西南北)
    private flyIndex1: number = 0;  //扑克(指定位置1，2，3)

    /**显示发牌 */
    private cardEffect(): void {

        //this.isCardEffectShow = true;
        //this.flyIntval = setInterval(this.playCardFly.bind(this), 200);
        this.flyIndex0 = 0;
        this.flyIndex1 = 0;
        this.playCardFly();
    }

    private playCardFly(): void {
        var card: eui.Image = this['grpCard_' + this.flyIndex0 + '_' + this.flyIndex1];
        card.x = 713.5;
        card.y = 100;
        card.source = 'gf_poker0_png';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        var pos = this.orginPlayerCardPos[this.flyIndex0][this.flyIndex1];
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400).call(this.playerCardRotation, this);

    }

    private playerCardRotation(): void {
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes;
        var card = this['grpCard_' + this.flyIndex0 + '_' + this.flyIndex1];
        card.source = 'gf_poker0_png';
        egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
            this[0].source = 'nn.card_' + this[1];
            egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
        }, [card, poke[this.flyIndex0].value[this.flyIndex1]]).call(this.cycleCallback, this);

    }

    private cycleCallback(): void {
        if (this.flyIndex0 == 1) {
            this.flyIndex0 = 0;
            this.flyIndex1++;
        } else {
            this.flyIndex0++;
        }

        if (this.cardResult.pokes[this.flyIndex0].value[this.flyIndex1] == -1) {
            //this.flyIndex0 = 0;
            //this.flyIndex1 = 0;
            this.cycleCallback();
            return;
        }

        if (this.flyIndex1 > 2) {
            this.flyIndex0 = 0;
            this.flyIndex1 = 0;
            if (this.flyIntval != 0) {
                clearInterval(this.flyIntval);
            }
            return;
        }
        this.playCardFly();
    }



    private bankerCardFly(): void {
        if (this.flyBankerIndex == 5) {
            this.flyBankerIndex = 0;
            clearInterval(this.flyIntval);
            this.interval = setInterval(this.playerCardRotation.bind(this), 800);
            return;
        }
        var card: eui.Image = this['bankerCard_' + this.flyBankerIndex];
        card.x = 713.5;
        card.y = 300;
        card.source = 'gf_poker0_png';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        this.orginBankerCardPos;
        var pos = this.orginBankerCardPos[this.flyBankerIndex];
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400);
        this.flyBankerIndex++;
    }

    private effectPlayerIndex = 0;
    /*
    private playerCardRotation(): void {
        if (this.effectPlayerIndex == this.cardResult.pokes.length - 1) {
            clearInterval(this.interval)
            this.effectPlayerIndex = 0;
            this.bankerCardRotation();
            return;
        }
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes;
        var index = this.effectPlayerIndex;
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + index + '_' + i];
            card.source = 'gf_poker0_png';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'nn.card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke[index + 1].value[i]]);
            // console.log('poke_' + this.effectPlayerIndex + ': ' + poke[this.effectPlayerIndex].value[i]);
        }
        this['labCardType' + index].source = BJLUtil.getInstance().getCardType(poke[index + 1].type);
        this.playClickSound(BJLUtil.getInstance().getCardMusicType(poke[index + 1].type));
        this['labCardType' + index].visible = true;;
        this['labCardType' + index].width = 98;
        this['labCardType' + index].height = 44;
        //this['labCardResult' + index].text = '';//this.cardResult.result[index] == 1 ? '赢' : '输';
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
    }*/

    // private bankerCardRotation(): void {
    //     this.playClickSound(BJLUtil.getInstance().getSoundEffect(7));
    //     var poke = this.cardResult.pokes[0];
    //     for (var i = 0; i < 5; i++) {
    //         var card = this['bankerCard_' + i];
    //         card.source = 'gf_poker0_png';
    //         egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
    //             this[0].source = 'nn.card_' + this[1];
    //             egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
    //         }, [card, poke.value[i]])
    //         // console.log('poke_banker: ' + poke.value[i]);
    //     }
    //     // this.labCardTypeBanker.source = BJLUtil.getInstance().getCardType(poke.type);
    //     // this.playClickSound(BJLUtil.getInstance().getCardMusicType(poke.type));
    //     // this.labCardTypeBanker.visible = true;
    //     // this.labCardTypeBanker.width = 98;
    //     // this.labCardTypeBanker.height = 44;
    //     if (poke.type != 0) {
    //         for (var i = 0; i < 5; i++) {
    //             var card = this['bankerCard_' + i];
    //             if (i < 3) {
    //                 egret.Tween.get(card).wait(700).to({ x: card.x - 10 }, 100);
    //             }
    //             else {
    //                 egret.Tween.get(card).wait(700).to({ x: card.x + 10 }, 100);
    //             }
    //         }
    //     }
    //     this.interval = setInterval(this.blinkEffect.bind(this), 500);
    // }

    // private blinkEffect(): void {
    //     clearInterval(this.interval);
    //     var result = this.cardResult.result;
    //     for (var i = 0; i < 4; i++) {
    //         if (result[i] == 1) {
    //             //this['effectSelect' + i].visible = true;
    //             //EffectUtils.blinkEffect(this['effectSelect' + i], 200);
    //         }
    //     }
    //     this.interval = setInterval(this.cardEffectEnd.bind(this), 2000);
    // }

    // private cardEffectEnd(): void {
    //     clearInterval(this.interval);
    //     var data = this.cardResult;
    //     var isShow: boolean = false;
    //     //显示比牌结果，显示是否通赔或者通杀
    //     if (data.result[0] == 1 && data.result[1] == 1 && data.result[2] == 1 && data.result[3] == 1) {
    //         this.showGameTips(5);
    //         isShow = true;
    //     }
    //     if (data.result[0] == 0 && data.result[1] == 0 && data.result[2] == 0 && data.result[3] == 0) {
    //         this.showGameTips(4);
    //         isShow = true;
    //     }
    //     if (isShow) {
    //         //this.interval = setInterval(this.showGameResult.bind(this), 1000);
    //     }
    //     else {
    //         //this.showGameResult();
    //     }
    //     //this.cdTimer.start();
    // }

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
                this.playClickSound(BJLUtil.getInstance().getSoundEffect(1));
            }
        }
        else {
            this.grpMax.visible = false;
        }

        this.grpBankerHead.source = this.bankerHead.source; //
        this.grpBankerName.text = this.bankerName.text;

        this.grpBankerBeishu.text = data.pokes[0].num + '倍';
        this.grpBankerType.source = '';//this.getCardType(data.pokes[0].type);//;
        this.labelBankerType.text = BJLUtil.getInstance().getCardType2(data.pokes[0].type);
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
            this['resultType' + i].text = BJLUtil.getInstance().getCardType2(data.pokes[i + 1].type);
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

    // private setStartBet(): void {
    //     this.resetGame();
    //     this.grpResult.visible = false;
    //     clearInterval(this.interval);
    //     this.showGameTips(2);
    //     this.grpCountdown.visible = true;
    //     if (!this.isSysBanker && !this.isChangeBanker) {
    //         this.lastGameBankerNum--;
    //         this.labBankerLastNum.text = '剩余' + Math.round(this.lastGameBankerNum) + '次';
    //     }
    //     if (this.isChangeBanker) {
    //         this.isChangeBanker = false;
    //         //this.setBankerInfo(this.changeBankerObj);
    //         this.grpBankerList.visible = false; //切庄的时候隐藏庄家列表
    //     }
    // }
    /**重置界面 */
    private resetGame(): void {
        this.initData();

        for (var index = 0; index < 2; index++) {

            for (var j = 0; j < 3; j++) {
                let card: eui.Image = this['grpCard_' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
            }
        }
        while (this.grpCoins.numChildren > 0) {
            this.grpCoins.removeChildAt(0);
        }
        for (let i = 0; i < this.arrCoin.length; i++) {
            if (this.arrCoin[i].parent != null) {
                //egret.Tween.removeTweens(this.arrCoin[i]);
                this.arrCoin[i].parent.removeChild(this.arrCoin[i]);
            }
        }
        this.arrCoin = [];

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
        // this.grpSecondPanel.visible = true;
        // this.grpCardType.visible = false;
        // this.grpHistory.visible = true;
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



    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }
    /**退出游戏 */
    public Onquit(): void {
        if (UserInfo.getInstance().isGameStart) {
            xlLib.PopUpMgr.addPopUp(Hint, this, true, true, null, 1);
            return;
        }
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.BaccaratOnleave, senddata, (data) => {

        }, this);
    }

    public destroy(): void {

        this._image_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_6.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this._btn_meun.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.wanjialist.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.packup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        EventUtil.removeEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.removeEventListener(EventConst.onCheckout, this.bofangEffect, this);
        EventUtil.removeEventListener(EventConst.onUpdateUserBalance, this.onAcquisitionGolbBack, this);
        EventUtil.removeEventListener(EventConst.OnUpdateLimitItem, this.UpdateLimitItem, this);
        EventUtil.removeEventListener(EventConst.onSendJetton, this.SendJetton, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.removeEventListener(EventConst.userwin, this.initGameIconList, this);
        EventUtil.removeEventListener(EventConst.onUserLeaveGame, this.ongameOverSuccesBack, this);

        EventUtil.removeEventListener(EventConst.onTimelyNotify, this.TimelyNotify, this);

    }
}

