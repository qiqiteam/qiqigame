/**
 * 抢庄牛牛
 */
class TBNNView extends eui.Component {
    constructor() {
        super();
        this.skinName = "TBNNViewSkin";
        //this.r = r;
    }
    private r: any = null;


    public _paijubh: eui.Label;
    public grpCard: eui.Group;
    public _my_pai: eui.Group;
    public bankerCard_0: eui.Image;
    public bankerCard_1: eui.Image;
    public bankerCard_2: eui.Image;
    public bankerCard_3: eui.Image;
    public bankerCard_4: eui.Image;
    public labCardTypeBanker: eui.Group;
    public grpCard_1_0: eui.Image;
    public grpCard_1_1: eui.Image;
    public grpCard_1_2: eui.Image;
    public grpCard_1_3: eui.Image;
    public grpCard_1_4: eui.Image;
    public labCardType1: eui.Group;
    public grpCard_2_0: eui.Image;
    public grpCard_2_1: eui.Image;
    public grpCard_2_2: eui.Image;
    public grpCard_2_3: eui.Image;
    public grpCard_2_4: eui.Image;
    public labCardType2: eui.Group;
    public grpCard_3_0: eui.Image;
    public grpCard_3_1: eui.Image;
    public grpCard_3_2: eui.Image;
    public grpCard_3_3: eui.Image;
    public grpCard_3_4: eui.Image;
    public labCardType3: eui.Group;
    public grpCard_4_0: eui.Image;
    public grpCard_4_1: eui.Image;
    public grpCard_4_2: eui.Image;
    public grpCard_4_3: eui.Image;
    public grpCard_4_4: eui.Image;
    public labCardType4: eui.Group;
    public grpCard_5_0: eui.Image;
    public grpCard_5_1: eui.Image;
    public grpCard_5_2: eui.Image;
    public grpCard_5_3: eui.Image;
    public grpCard_5_4: eui.Image;
    public labCardType5: eui.Group;
    public grpHead1: eui.Group;
    public imghead1: eui.Image;
    public labelHead1: eui.Label;
    public labelGold1: eui.Label;
    public _zhuang_img1: eui.Image;
    public grpHead2: eui.Group;
    public imghead2: eui.Image;
    public labelHead2: eui.Label;
    public labelGold2: eui.Label;
    public _zhuang_img3: eui.Image;
    public grpHead3: eui.Group;
    public imghead3: eui.Image;
    public labelHead3: eui.Label;
    public labelGold3: eui.Label;
    public _zhuang_img2: eui.Image;
    public grpHead4: eui.Group;
    public imghead4: eui.Image;
    public labelHead4: eui.Label;
    public labelGold4: eui.Label;
    public _zhuang_img4: eui.Image;
    public grpHead5: eui.Group;
    public imghead5: eui.Image;
    public labelHead5: eui.Label;
    public labelGold5: eui.Label;
    public _zhuang_img5: eui.Image;
    public grpCountdown: eui.Group;
    public timeTxt: eui.Label;
    public grpHead0: eui.Group;
    public imghead0: eui.Image;
    public labelHead0: eui.Label;
    public labelGold0: eui.Label;
    public _zhuang_img0: eui.Image;
    public _xiabei: eui.Group;
    public _xiabei_0_0: eui.Image;
    public _xiabei_0: eui.Image;
    public _xiabei_0_0_0: eui.Image;
    public _xiabei_0_1: eui.Image;
    public _xiabei_1: eui.Image;
    public _xiabei_0_0_1: eui.Image;
    public _xiabei_0_2: eui.Image;
    public _xiabei_2: eui.Image;
    public _xiabei_0_0_2: eui.Image;
    public _xiabei_0_3: eui.Image;
    public _xiabei_3: eui.Image;
    public _xiabei_0_0_3: eui.Image;
    public _xiabei_0_4: eui.Image;
    public _xiabei_4: eui.Image;
    public _xiabei_0_0_4: eui.Image;
    public _xiabei_0_5: eui.Image;
    public _xiabei_5: eui.Image;
    public _xiabei_0_0_5: eui.Image;
    public _btn_switch: eui.Group;
    public _btn_double_1: eui.Button;
    public beishu_0: eui.Image;
    public beishu_0_0: eui.Image;
    public bs_img_0: eui.Image;
    public _btn_double_2: eui.Button;
    public beishu_1: eui.Image;
    public beishu_0_1: eui.Image;
    public bs_img_1: eui.Image;
    public _btn_double_3: eui.Button;
    public beishu_2: eui.Image;
    public beishu_0_2: eui.Image;
    public bs_img_2: eui.Image;
    public _btn_double_4: eui.Button;
    public beishu_3: eui.Image;
    public beishu_0_3: eui.Image;
    public bs_img_3: eui.Image;
    public _btn_double_5: eui.Button;
    public beishu_4: eui.Image;
    public beishu_0_4: eui.Image;
    public bs_img_4: eui.Image;
    public _jixu: eui.Group;
    public _btn_begin: eui.Button;
    public _pingpai: eui.Group;
    public _puke_0: eui.Image;
    public _puke_1: eui.Image;
    public _puke_2: eui.Image;
    public _puke_3: eui.Image;
    public _puke_4: eui.Image;
    public _btn_tanpai: eui.Button;
    public _btn_close: eui.Button;
    public _btn_meun: eui.Button;
    public _tishi: eui.Group;
    public _tishi_text: eui.Label;





    public arr: eui.Image[] = [null, null, null];

    public score: number[] = [0, 0, 0, 0, 0];   //牌值 '12'

    public score1: number[] = [0, 0, 0, 0, 0];   //牌值   number 403

    public arr_fen: number[] = [0, 0, 0];       //记分器

    public arr_fen1: number[] = [0, 0, 0, 0, 0];       //记分器1

    public multipleList: number[] = [0, 0, 0, 0, 0];   //倍数表

    public game_result: number = 0;

    public niu: number = 0;                    //有没有牛

    public zijipokes: number[] = [0, 0, 0, 0, 0];    //自己的牌

    public turn_score_arr: eui.BitmapLabel[] = [];

    public win_eff_err: any[] = [];

    public goldFlyAnimatorarr: uiCore.Animation[] = [];
    public intnum: number[] = [0, 0, 0, 0];

    public num01: number = 0;

    private isTanPai: boolean[] = [false, false, false, false, false, false];

    private jiesuanbol: boolean = false;
    ///----------------------------------------------------------------

    public time: number;        //秒数
    public timer: egret.Timer;  //游戏计时器间隔

    //计时器回调状态

    public startCardRotation: boolean = false;

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
    private orginPinCardPos = [];       // 拼牌扑克位置
    private orginPlayerCardPos = [];    // 存储玩家扑克位置
    private orginPlayerHeadPos = [];    // 玩家头像中心点

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

    private gamestarEff: QZNNGameStart;

    private nnbankerEff: egret.MovieClip;
    private whnEff: egret.MovieClip;
    private nnEff: egret.MovieClip;

    private nnvictoryEffect: QZNNVictory;
    private tongsha: QZNNTongsha;
    private tongpei: QZNNTongpei;
    private pinpaicuowu: egret.MovieClip;

    private niuniuTX: ZhuangIconTX;
    private niuniukuang: NiuZhang0;
    private niuniukuang1: NiuZhang1;

    private niuniuhen0: QZNNHEff;
    private niuniuhen1: QZNNHHeadEff;
    private niuniushu0: QZNNVEff;
    private niuniushu1: QZNNVHeadEff;


    private addNNEff(): void {
        if (!this.nnEff) {
            this.nnEff = xlLib.DisplayUtils.createAsyncMovieClicp('nn_myCardType10', 'nn_myCardType10', false);
            this.nnEff.x = xlLib.Global.screenWidth / 2;
            this.nnEff.y = xlLib.Global.screenHeight / 2;
            this.nnEff.frameRate = 10;
            this.nnEff.touchEnabled = false;
        }
        this.nnEff.gotoAndPlay(0, 1);
        this.addChild(this.nnEff);
        this.nnEff.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
            if (this.nnEff.parent) {
                this.nnEff.parent.removeChild(this.nnEff);
            }
        }, this);
    }

    private addWhnEff(): void {
        if (!this.whnEff) {
            this.whnEff = xlLib.DisplayUtils.createAsyncMovieClicp('nn_myCardType14', 'nn_myCardType14', false);
            this.whnEff.x = xlLib.Global.screenWidth / 2;
            this.whnEff.y = xlLib.Global.screenHeight / 2;
            this.whnEff.frameRate = 10;
            this.whnEff.touchEnabled = false;
        }
        this.whnEff.gotoAndPlay(0, 1);
        this.addChild(this.whnEff);
        this.whnEff.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
            if (this.whnEff.parent) {
                this.whnEff.parent.removeChild(this.whnEff);
            }
        }, this);
    }

    protected childrenCreated(): void {

        this.getOrginCardPos();
        this.addEvent();
        this.initData();

        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = "" + GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);

        let inthematch: Inthematch = xlLib.PopUpMgr.addPopUp(Inthematch, this, true, true, null, 1);
        inthematch.TYPE_TAP = Const.TYPE_TBNN;

        UserInfo.getInstance().isGameStart = true;

    }

    /**
     * 数据初始化
     */
    private initData(): void {

        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.grpCard.visible = true;

        this._btn_switch.visible = false;

        this.grpCountdown.visible = false;

        this._xiabei.visible = true;
        this._xiabei_0_0_0.visible = false;
        this._xiabei_0_0_1.visible = false;
        this._xiabei_0_0_2.visible = false;
        this._xiabei_0_0_3.visible = false;
        this._xiabei_0_0_4.visible = false;
        this._xiabei_0_0_5.visible = false;

        this._xiabei_0_0.visible = false;
        this._xiabei_0.visible = false;
        this._xiabei_0_1.visible = false;
        this._xiabei_1.visible = false;
        this._xiabei_0_2.visible = false;
        this._xiabei_2.visible = false;
        this._xiabei_0_3.visible = false;
        this._xiabei_3.visible = false;
        this._xiabei_0_4.visible = false;
        this._xiabei_4.visible = false
        this._xiabei_0_5.visible = false;
        this._xiabei_5.visible = false

        this._jixu.visible = false;

        this._pingpai.visible = false;
        this._my_pai.visible = false;
        this.arr = [];


        this._btn_switch.visible = false;
        this._btn_double_1.visible = false;
        this._btn_double_2.visible = false;
        this._btn_double_3.visible = false;
        this._btn_double_4.visible = false;
        this._btn_double_5.visible = false;
        this.beishu_0.visible = false;
        this.beishu_1.visible = false;
        this.beishu_2.visible = false;
        this.beishu_3.visible = false;
        this.beishu_4.visible = false;
        this.beishu_0_0.visible = false;
        this.beishu_0_1.visible = false;
        this.beishu_0_2.visible = false;
        this.beishu_0_3.visible = false;
        this.beishu_0_4.visible = false;
        this.bs_img_0.visible = false;
        this.bs_img_1.visible = false;
        this.bs_img_2.visible = false;
        this.bs_img_3.visible = false;
        this.bs_img_4.visible = false;


        this._xiabei_0.x = 751.67;
        this._xiabei_1.x = 342.4;
        this._xiabei_2.x = 338.05;
        this._xiabei_3.x = 730.09;
        this._xiabei_4.x = 1141.63;
        this._xiabei_5.x = 1151.63;

        this.grpHead0.visible = false;
        this.grpHead1.visible = false;
        this.grpHead2.visible = false;
        this.grpHead3.visible = false;
        this.grpHead4.visible = false;
        this.grpHead5.visible = false;

        this._tishi.visible = false;

        this._zhuang_img0.visible = false;
        this._zhuang_img1.visible = false;
        this._zhuang_img2.visible = false;
        this._zhuang_img3.visible = false;

        this.isTanPai = [false, false, false, false, false, false];

        this.jiesuanbol = false;
        //-----------------------------------------------
        this.zhaungIndex = 0;   //庄的座位号（当前游戏的座位号）
        //-----------------------------------------------
    }

    /**
     * 获取原始扑克的位置
     */
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

            var card: eui.Image = this['_puke_' + i];
            card.source = '';
            card.anchorOffsetX = card.width / 2;
            card.x += card.width / 2;
            var pos: egret.Point = new egret.Point;
            pos.x = card.x;
            pos.y = card.y;
            this.orginPinCardPos[i] = pos;
        }
        this.labCardTypeBanker.visible = false;
        for (var index = 1; index < 6; index++) {
            //this['labCardResult' + index].text = '';
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
        for (let i = 0; i < 6; i++) {
            var pos: egret.Point = new egret.Point;
            if (i == 0 || i == 3) {
                pos.x = this['grpHead' + i].x + 15;
                pos.y = this['grpHead' + i].y + 15;
            } else {
                pos.x = this['grpHead' + i].x + 25;
                pos.y = this['grpHead' + i].y + 40;
            }
            this.orginPlayerHeadPos[i] = pos;
        }
    }

    public resize(): void {

    }
    /**继续游戏 */
    private onRestartGame(): void {

        xlLib.PopUpMgr.addPopUp(Inthematch, this, true, true, null, 1);

        let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_NIUNIU);
        let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_TBNN);
        let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom, senddata, (data) => {
        }, this);
        UserInfo.getInstance().isGameStart = true;
        this.resetGame();
    }

    /**准备 开始回调 */
    public onClick(e: egret.TouchEvent): void {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        if (e.target == this._btn_begin) {
            this.onRestartGame();
        } else if (e.target == this._btn_meun) {
            //this.addNNEff();
        } else if (e.target == this._btn_double_1) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[0]);
        } else if (e.target == this._btn_double_2) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[1]);
        } else if (e.target == this._btn_double_3) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[2]);
        } else if (e.target == this._btn_double_4) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[3]);
        } else if (e.target == this._btn_double_5) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[4]);
        } else if (e.target == this._btn_tanpai) {
            this.returntanpai();
        }
    }
    /**发送摊牌命令 */
    private returntanpai() {
        let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_NIUNIU);
        let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_TBNN);
        let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id,
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_manual, senddata, (data) => {
        }, this);
    }

    /**抢庄 sendstr 命令 bet 倍数 0~5*/
    private sendamessage(sendstr: string, bet: number): void {
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {
        }, this);
    }
    /**注册事件 */
    private addEvent(): void {
        this._btn_meun.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this._btn_double_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this._btn_tanpai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);

        EventUtil.addEventListener(EventConst.onUserShowOrderUpdate, this.onShowOrder, this);
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.addEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);

    }

    /**抢庄牛牛摊牌通知 */
    private onShowOrder(data: any): void {
        console.log(data._obj.index + "号摊牌");
        this.isTanPai[data._obj.index] = true;
        //if (data._obj.index == 0) {
        //this.myFanPai();
        //} else {
        this.onePlayerFanPai(data._obj.index);
        //}
    }

    /**游戏状态 */
    private GameStatus(data: any): void {
        switch (data._obj.roomStatus) {
            case 0: ; break;
            case 1: ; break;
            case 2: ; break;
            case 3: ; break;
            case 4: this.onbetBack(data); break;        //下注
            case 5: ; break;
            case 6: this.onThecardtype(data); break;    //所有玩家 牌面信息 结算
            case 7: ; break;
            case 8: ; break;
        }
    }
    /**胜利 */
    private addNNVictoryEffect(): void {
        if (!this.nnvictoryEffect) {
            this.nnvictoryEffect = new QZNNVictory();
            this.nnvictoryEffect.anchorOffsetX = this.nnvictoryEffect.width / 2;
            this.nnvictoryEffect.anchorOffsetY = this.nnvictoryEffect.height / 2;
            this.nnvictoryEffect.x = xlLib.Global.screenWidth / 2;
            this.nnvictoryEffect.y = xlLib.Global.screenHeight / 2;
        }
        this.nnvictoryEffect.play();
        this.addChild(this.nnvictoryEffect);
    }
    /**通杀 */
    private addTongsha(): void {
        if (!this.tongsha) {
            this.tongsha = new QZNNTongsha();
            this.tongsha.anchorOffsetX = this.tongsha.width / 2;
            this.tongsha.anchorOffsetY = this.tongsha.height / 2;
            this.tongsha.x = xlLib.Global.screenWidth / 2;
            this.tongsha.y = xlLib.Global.screenHeight / 2;
        }
        this.tongsha.play();
        this.addChild(this.tongsha);
    }
    /**通赔 */
    private addTongpei(): void {
        if (!this.tongpei) {
            this.tongpei = new QZNNTongpei();
            this.tongpei.anchorOffsetX = this.tongpei.width / 2;
            this.tongpei.anchorOffsetY = this.tongpei.height / 2;
            this.tongpei.x = xlLib.Global.screenWidth / 2;
            this.tongpei.y = xlLib.Global.screenHeight / 2;
        }
        this.tongpei.play();
        this.addChild(this.tongpei);
    }
    /**监听下注 */
    private onbetBack(data: any): void {
        // this._tishi.visible = false;
        xlLib.PopUpMgr.removePopUp(Inthematch, 1);
        this.time = 0;
        this.grpCountdown.visible = true;
        this.startCountDown(data._obj.seconds);
        // this._group_qiang.visible = false;
        this._btn_switch.visible = true;

        if (!this.gamestarEff) {
            this.gamestarEff = new QZNNGameStart();
            this.gamestarEff.anchorOffsetX = this.gamestarEff.width / 2;
            this.gamestarEff.anchorOffsetY = this.gamestarEff.height / 2;
            this.gamestarEff.x = xlLib.Global.screenWidth / 2;
            this.gamestarEff.y = xlLib.Global.screenHeight / 2;
        }
        this.gamestarEff.play();
        this.addChild(this.gamestarEff);

        for (let i = 0; i < data._obj.hogList.length; i++) {
            this['_btn_double_' + (i + 1)].visible = true;

            if (data._obj.hogList[i].hogOrBet >= 10) {
                this['beishu_' + i].visible = true;
                this['beishu_' + i].source = 'img_BQ_0_1_png';
                this['beishu_0_' + i].visible = true;
                this['beishu_0_' + i].source = 'img_BQ_0_' + data._obj.hogList[i].hogOrBet % 10 + '_png';
                this['bs_img_' + i].visible = true;
            } else if (data._obj.hogList[i].hogOrBet < 10) {
                this['beishu_' + i].visible = false;
                this['beishu_' + i].source = '';
                this['beishu_0_' + i].visible = true;
                this['beishu_0_' + i].source = 'img_BQ_0_' + data._obj.hogList[i].hogOrBet + '_png';
                // console.log(data._obj.hogList[i].hogOrBet);
                this['bs_img_' + i].visible = true;
            }
            this.multipleList[i] = data._obj.hogList[i].hogOrBet;
        }

    }
    /*所有玩家 牌面信息 结算 */
    private onThecardtype(data: any): void {
        this._tishi.visible = false;
        let result = {
            pokes: [],
            result: [1, 0, 0, 0],
            bankerWin: 0,
            rate: "0.05",
            bomb: "0"
        };
        for (let i = 0; i < data._obj.players.length; i++) {
            let err = {
                num: data._obj.players[i].pai.ratio,
                type: data._obj.players[i].pai.niu,
                value: data._obj.players[i].cardsList,
                win: data._obj.players[i].win,
                score: data._obj.players[i].score
            };
            result.pokes.push(err);
        }
        this.zijipokes = data._obj.players[0].cardsList;
        this.cardResult = result;

        this.time = 0;
        this.startCountDown(data._obj.seconds);
        this.cardEffect();

    }
    /**其他玩家的牌型   结算 */
    private oncloseanaccount(data: any) {

        // this.game_result = data._obj.result;

        // this.time = 0;
        // // this.grpCountdown.visible = false;

        // let result = {
        //     pokes: [],
        //     result: [1, 0, 0, 0],
        //     bankerWin: 0,
        //     rate: "0.05",
        //     bomb: "0"
        // };
        // for (let i = 0; i < data._obj.players.length; i++) {
        //     let err = {
        //         num: data._obj.players[i].pai.ratio,
        //         type: data._obj.players[i].pai.niu,
        //         value: data._obj.players[i].cardsList,
        //         win: data._obj.players[i].win,
        //         score: data._obj.players[i].score
        //     };
        //     result.pokes.push(err);
        // }
        // this.zijipokes = data._obj.players[0].cardsList;
        // this.cardResult = result;

        // this._pingpai.visible = false;

        // this._my_pai.visible = true;

        // this.interval = setInterval(this.playerCardRotation.bind(this), 800);
    }

    /**更新下注通知(所有人) */
    private OnBetUpdate(data: any): void {
        // console.log(data._obj.index + "号下注");
        if (UserInfo.getInstance().uid == data._obj.userid) {
            this._btn_switch.visible = false;
            this._tishi.visible = true;
            this._tishi_text.text = "请等待其他玩家下注...";
        }
        if (data._obj.code == 200) {
            this.jiazhu(data._obj.hogOrBet, data._obj.index)
        }
    }
    /**是否下注 */
    private jiazhu(data: number, num: number) {
        if (data >= 10) {
            this['_xiabei_0_' + num].visible = true;
            this['_xiabei_0_' + num].source = 'tongbi_bei2_png';
            this['_xiabei_' + num].visible = true;
            this['_xiabei_0_0_' + num].visible = true;
            this['_xiabei_' + num].source = 'img_BQ_0_' + data % 10 + '_png';
            this['_xiabei_0_0_' + num].source = 'img_BQ_0_' + 1 + '_png';

        } else if (data < 10) {
            this['_xiabei_0_' + num].visible = true;
            this['_xiabei_0_' + num].source = 'tongbi_bei1_png';
            this['_xiabei_' + num].visible = true;
            this['_xiabei_' + num].x -= 13;
            this['_xiabei_0_0_' + num].visible = false;
            this['_xiabei_' + num].source = 'img_BQ_0_' + data + '_png';
        }
    }


    /**自己加入房间 */
    private addPlayers(data): void {

        this.grpHead0.visible = true;

        if (data._obj.player[0].id == UserInfo.getInstance().myPlayer.id) {
            this.labelHead0.text = UserInfo.getInstance().myPlayer.username;
            this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().myPlayer.goldcoins);
            this.imghead0.source = "women7_png";
        }

        //设置其他玩家信息
        for (let i = 1; i < data._obj.player.length; i++) {
            if (data._obj.player[i] != null) {
                this.setUserInfo(i, UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins, "women7_png");//data._obj.player[i].headimg
            } else {
                this.setUserInfo(i, "", "", "");
            }
        }
    }

    /**新玩家加入 */
    public playerJoinRoom(data): void {

        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {

        } else {
            this['grpHead' + data._obj.player.index].visible = true;
            this['grpHead' + data._obj.player.index];
            this.setUserInfo(data._obj.player.index, data._obj.player.username, data._obj.player.goldcoins, "women7_png");
        }
    }

    /** num 几号玩家  _name 名字    _gold 金币   _imghead 头像图片*/
    public setUserInfo(num, _name, _gold, _imghead): void {
        this['imghead' + num].source = _imghead;
        this['labelHead' + num].text = _name;
        this['labelGold' + num].text = GlobalFunction.Formatconversion(_gold);
    }


    /**开始倒计时*/
    private startCountDown(time: number): void {
        if (time < 10) {
            this.timeTxt.text = "0" + time;
        } else {
            this.timeTxt.text = "" + time;
        }

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
            if (this.time >= 10) {
                this.timeTxt.text = "" + this.time;
            }
            else {
                this.timeTxt.text = "0" + this.time;

            }
            this.time--;
        }
        else {
            if (this.jiesuanbol) {
                this._pingpai.visible = false;
                this._my_pai.visible = true;
                this.oneFanPai();
            }
            this.timeTxt.text = "00";
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

    private clearTimer(): void {
        if (this.cdNum > 0) {
            this.cdNum--;
        }
        else {
            this.cdTimer.stop();
            this.cdNum = 0;

            this.resetGame();
        }
    }


    private flyIntval: number = 0;  //
    //private flyIndex0: number = 0;  //扑克位置(东西南北)
    //private flyIndex1: number = 0;  //扑克(指定位置1，2，3)
    private flyBankerIndex: number = 0;


    private flyIntval_1: number = 0;  //
    private flyIntval_2: number = 0;  //
    private flyIntval_3: number = 0;  //
    private flyIntval_4: number = 0;  //
    private flyIntval_5: number = 0;  //
    private flyIntval_6: number = 0;  //
    private expandIntval_1: number = 0;
    private expandIntval_2: number = 0;
    private expandIntval_3: number = 0;
    private expandIntval_4: number = 0;
    private expandIntval_5: number = 0;
    private expandIntval_6: number = 0;
    private flyIndex_1: number = 0;
    private flyIndex_2: number = 0;
    private flyIndex_3: number = 0;
    private flyIndex_4: number = 0;
    private flyIndex_5: number = 0;
    private flyIndex_6: number = 0;
    private faPaiTime = 100;
    private flyPaiTime = 1000;
    private pauseTime = 950;
    private expandPaiTime = 400;
    /**显示发牌 */
    private cardEffect(): void {
        this._btn_switch.visible = false;

        this.isCardEffectShow = true;

        this.flyIntval_1 = setInterval(this.playCardFly_1.bind(this), this.faPaiTime);
        this.flyIntval_2 = setInterval(this.playCardFly_2.bind(this), this.faPaiTime);
        this.flyIntval_3 = setInterval(this.playCardFly_3.bind(this), this.faPaiTime);
        this.flyIntval_4 = setInterval(this.playCardFly_4.bind(this), this.faPaiTime);
        this.flyIntval_5 = setInterval(this.playCardFly_5.bind(this), this.faPaiTime);
        this.flyBankerIndex = 0;
        this.flyIntval_6 = setInterval(this.playCardFly_6.bind(this), this.faPaiTime);

        this.jiesuanbol = true;

        // var poke = this.zijipokes;
        // for (var i = 0; i < 5; i++) {
        //     var card_banker = this['bankerCard_' + i];
        //     card_banker.source = poke[i];
        //     card_banker.visible = true;
        // }

    }

    /**其他玩家发牌动作 */
    /*
    private playCardFly(): void {
        var card: eui.Image = this['grpCard_' + this.flyIndex0 + '_' + this.flyIndex1];
        card.source = 'qznn_card_100';
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        var pos = this.orginPlayerCardPos[this.flyIndex0][this.flyIndex1];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400);
        if (this.flyIndex1 == 4) {
            if (this.flyIndex0 == 2) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                clearInterval(this.flyIntval);
                this.flyBankerIndex = 0;
                this.flyIntval = setInterval(this.bankerCardFly.bind(this), 40);
            }
            else {
                this.flyIndex1 = 0;
                this.flyIndex0++;
            }
        }
        else {
            this.flyIndex1++;
        }
    }*/

    private playCardFly_1(): void {
        var card: eui.Image = this['grpCard_' + 1 + '_' + this.flyIndex_1];
        card.source = 'qznn_card_100';
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[1][4];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y, alpha: 1, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);

        if (this.flyIndex_1 == 4) {
            this.flyIndex_1 = 0;
            clearInterval(this.flyIntval_1);
            this.expandIntval_1 = setInterval(this.expandPai_1.bind(this), this.pauseTime);
        } else {
            this.flyIndex_1++;
        }
    }

    private playCardFly_2(): void {
        var card: eui.Image = this['grpCard_' + 2 + '_' + this.flyIndex_2];
        card.source = 'qznn_card_100';
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[2][4];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y, alpha: 1, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_2 == 4) {
            this.flyIndex_2 = 0;
            clearInterval(this.flyIntval_2);
            this.expandIntval_2 = setInterval(this.expandPai_2.bind(this), this.pauseTime);
        } else {
            this.flyIndex_2++;
        }
    }

    private playCardFly_3(): void {
        var card: eui.Image = this['grpCard_' + 3 + '_' + this.flyIndex_3];
        card.source = 'qznn_card_100';
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[3][4];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y, alpha: 1, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_3 == 4) {
            this.flyIndex_3 = 0;
            clearInterval(this.flyIntval_3);
            this.expandIntval_3 = setInterval(this.expandPai_3.bind(this), this.pauseTime);
        } else {
            this.flyIndex_3++;
        }
    }

    private playCardFly_4(): void {
        var card: eui.Image = this['grpCard_' + 4 + '_' + this.flyIndex_4];
        card.source = 'qznn_card_100';
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[4][4];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y, alpha: 1, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_4 == 4) {
            this.flyIndex_4 = 0;
            clearInterval(this.flyIntval_4);
            this.expandIntval_4 = setInterval(this.expandPai_4.bind(this), this.pauseTime);
        } else {
            this.flyIndex_4++;
        }
    }

    private playCardFly_5(): void {
        var card: eui.Image = this['grpCard_' + 5 + '_' + this.flyIndex_5];
        card.source = 'qznn_card_100';
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[5][4];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y, alpha: 1, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_5 == 4) {
            this.flyIndex_5 = 0;
            clearInterval(this.flyIntval_5);
            this.expandIntval_5 = setInterval(this.expandPai_5.bind(this), this.pauseTime);
        } else {
            this.flyIndex_5++;
        }
    }

    /**发牌动作6 */
    private playCardFly_6(): void {
        /*
        if (this.flyBankerIndex == 5) {
            this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
            var poke = this.zijipokes;
            for (var i = 0; i < 5; i++) {
                var card_my = this['_puke_' + i];
                card_my.source = 'qznn_card_100';
                egret.Tween.get(card_my).to({ scaleX: 0 }, 400).call(function () {
                    this[0].source = 'qznn_card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 400);
                }, [card_my, poke[i]])
                var str = poke[i].toString();
                str = str.slice(1);
                var intnum = parseInt(str);
                if (intnum > 10) {
                    intnum = 10;
                }
                this.score[i] = intnum;
                var card_banker = this['bankerCard_' + i];
                card_banker.source = 'qznn_card_100';
                
            }
            return;
        }*/

        this._pingpai.visible = true;

        var card: eui.Image = this['_puke_' + this.flyBankerIndex];
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.source = 'qznn_card_100';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        //this.orginPinCardPos;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPinCardPos[0];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y, alpha: 1, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineInOut);
        //egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyBankerIndex == 4) {
            this.flyBankerIndex = 0;
            clearInterval(this.flyIntval_6);
            this.expandIntval_6 = setInterval(this.expandPai_6.bind(this), this.pauseTime);
            this.startCardRotation = true;
        } else {
            this.flyBankerIndex++;
        }
    }

    private expandPai_1(): void {
        clearInterval(this.expandIntval_1);
        for (let i = 0; i < 5; i++) {
            var card: eui.Image = this['grpCard_' + 1 + '_' + i];
            var pos = this.orginPlayerCardPos[1][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    }

    private expandPai_2(): void {
        clearInterval(this.expandIntval_2);
        for (let i = 0; i < 5; i++) {
            var card: eui.Image = this['grpCard_' + 2 + '_' + i];
            var pos = this.orginPlayerCardPos[2][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    }

    private expandPai_3(): void {
        clearInterval(this.expandIntval_3);
        for (let i = 0; i < 5; i++) {
            var card: eui.Image = this['grpCard_' + 3 + '_' + i];
            var pos = this.orginPlayerCardPos[3][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    }

    private expandPai_4(): void {
        clearInterval(this.expandIntval_4);
        for (let i = 0; i < 5; i++) {
            var card: eui.Image = this['grpCard_' + 4 + '_' + i];
            var pos = this.orginPlayerCardPos[4][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    }

    private expandPai_5(): void {
        clearInterval(this.expandIntval_5);
        for (let i = 0; i < 5; i++) {
            var card: eui.Image = this['grpCard_' + 5 + '_' + i];
            var pos = this.orginPlayerCardPos[5][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    }

    private expandPai_6(): void {
        clearInterval(this.expandIntval_6);
        for (let i = 0; i < 5; i++) {
            var card: eui.Image = this['_puke_' + i];
            var pos = this.orginPinCardPos[i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
        this.myCardRotationIntval = setInterval(this.myCardRotation.bind(this), this.myCardRotationTime);
    }

    private myCardRotationIntval: number = 0;
    private myCardRotationTime: number = 400;
    /**自己的翻牌 */
    private myCardRotation(): void {
        clearInterval(this.myCardRotationIntval);
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
        var poke = this.zijipokes;
        for (var i = 0; i < 5; i++) {
            var card_my = this['_puke_' + i];
            card_my.source = 'qznn_card_100';
            egret.Tween.get(card_my).to({ scaleX: 0 }, 400).call(function () {
                this[0].source = 'qznn_card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 400);
            }, [card_my, poke[i]])
            //var str = poke[i].toString();
            //str = str.slice(1);
            //var intnum = parseInt(str);
            //if (intnum > 10) {
            //    intnum = 10;
            //}
            //this.score[i] = intnum;
            //var card_banker = this['bankerCard_' + i];
            //card_banker.source = 'qznn_card_100';

        }
    }

    /**自己发牌动作 */
    /*
    private bankerCardFly(): void {
        if (this.flyBankerIndex == 5) {
            this.flyBankerIndex = 0;
            clearInterval(this.flyIntval);
            this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
            var poke = this.zijipokes;
            for (var i = 0; i < 5; i++) {
                var card_my = this['_puke_' + i];
                card_my.source = 'qznn_card_100';
                egret.Tween.get(card_my).to({ scaleX: 0 }, 400).call(function () {
                    this[0].source = 'qznn_card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 400);
                }, [card_my, poke[i]])
                var str = poke[i].toString();
                str = str.slice(1);
                var intnum = parseInt(str);
                if (intnum > 10) {
                    intnum = 10;
                }
                this.score[i] = intnum;
                var card_banker = this['bankerCard_' + i];
                card_banker.source = 'qznn_card_100';
            }
            this.startCardRotation = true;
            return;
        }
        this._pingpai.visible = true;


        var card: eui.Image = this['_puke_' + this.flyBankerIndex];
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.source = 'qznn_card_100';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        this.orginPinCardPos;
        var pos = this.orginPinCardPos[this.flyBankerIndex];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400);
        this.flyBankerIndex++;

    }*/

    /**按索引翻牌 */
    private onePlayerFanPai(index: number): void {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes;
        this.isTanPai[index] = true;

        if (index == 0) {
            this._pingpai.visible = false;
            for (var i = 0; i < 5; i++) {
                var card_my = this['bankerCard_' + i];
                card_my.source = 'qznn_card_' + this.zijipokes[i];
            }
            this.addNiuniuBei(this.labCardTypeBanker, poke[index].type);
            this.playClickSound(QZNNUtil.getInstance().getCardMusicType(poke[index].type));
            this.labCardTypeBanker.visible = true;
            this.labCardTypeBanker.width = 98;
            this.labCardTypeBanker.width = 98;
        } else {
            for (var i = 0; i < 5; i++) {
                var card = this['grpCard_' + (index) + '_' + i];
                card.source = 'qznn_card_' + poke[index].value[i];
            }

            this.addNiuniuBei(this['labCardType' + (index)], poke[index].type);
            this.playClickSound(QZNNUtil.getInstance().getCardMusicType(poke[index].type));
            this['labCardType' + index].visible = true;
            this['labCardType' + index].width = 98;
            this['labCardType' + index].width = 98;
        }

    }

    /**所有翻牌 */
    private oneFanPai(): void {
        for (var i = 0; i < 5; i++) {
            if (this.isTanPai[i] == false) {
                this.onePlayerFanPai(i);
            }
        }


    }


    /*
        private myFanPai(): void {
            this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
            var poke = this.cardResult.pokes[0];
            for (var i = 0; i < 5; i++) {
                var card = this['bankerCard_' + i];
                card.source = 'qznn_card_100';
                egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                    this[0].source = 'qznn_card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
                }, [card, poke.value[i]])
            }
    
            this.addNiuniuBei(this.labCardTypeBanker, poke.type);
    
            this.playClickSound(QZNNUtil.getInstance().getCardMusicType(poke.type));
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
        }
    */
    /*
        private effectPlayerIndex = 0;
    
        private playerCardRotation(): void {
            this._tishi.visible = false;
    
    
            if (this.effectPlayerIndex == this.cardResult.pokes.length - 1) {
                clearInterval(this.interval)
                this.effectPlayerIndex = 0;
                this.bankerCardRotation();
                return;
            }
            this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
            var poke = this.cardResult.pokes;
            var index = this.effectPlayerIndex;
            for (var i = 0; i < 5; i++) {
                var card = this['grpCard_' + index + '_' + i];
                //if (index == 0) {
                //    this.grpCard.setChildIndex(card, i);
                //}
                card.source = 'qznn_card_100';
                egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                    this[0].source = 'qznn_card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
                }, [card, poke[index + 1].value[i]]);
            }
    
            this.addNiuniuBei(this['labCardType' + index], poke[index + 1].type);
            this.playClickSound(QZNNUtil.getInstance().getCardMusicType(poke[index + 1].type));
            this['labCardType' + index].visible = true;;
            this['labCardType' + index].width = 98;
            this['labCardType' + index].height = 44;
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

    private addNiuniuBei(grp: eui.Group, index: number): void {
        let bmpurl: string = QZNNUtil.getInstance().getCardBmpUrl(index);
        grp.removeChildren();
        let niuniuBet: any;
        if (index == 0) {
            niuniuBet = new WuNiuNBei();
            niuniuBet.x = 80;
            niuniuBet.y -= 80;
        }
        else if (index < 10) {
            niuniuBet = new NiuNBei();
            niuniuBet.x = 80;
            niuniuBet.y -= 80;
        }
        else {
            if (index == 10) {
                this.addNNEff();
            } else if (index == 13) {
                this.addWhnEff();
            }
            niuniuBet = new TenshuNiuBei();
            niuniuBet.x = 80;
            niuniuBet.y = 30;
        }
        niuniuBet.anchorOffsetX = (niuniuBet.width / 2);
        niuniuBet.anchorOffsetY = (niuniuBet.height / 2);

        grp.addChild(niuniuBet);
        let url: string = bmpurl;
        (niuniuBet as INiuNiuBetEffect).play(url);
    }

    /**自己翻牌 */
    private bankerCardRotation(): void {

        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes[0];
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = 'qznn_card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'qznn_card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]])
        }

        this.addNiuniuBei(this.labCardTypeBanker, poke.type);

        this.playClickSound(QZNNUtil.getInstance().getCardMusicType(poke.type));
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
            // this.showGameTips(5);
            isShow = true;
        }
        if (data.result[0] == 0 && data.result[1] == 0 && data.result[2] == 0 && data.result[3] == 0) {
            // this.showGameTips(4);
            isShow = true;
        }
        if (isShow) {
            //this.interval = setInterval(this.showGameResult.bind(this), 1000);
        }
        else {
            //this.showGameResult();
        }
        // this.cdTimer.start();
        //this.cdNum = 5;

        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(9));


        let zhuangPos = {
            x: this.orginPlayerHeadPos[this.zhaungIndex].x,
            y: this.orginPlayerHeadPos[this.zhaungIndex].y
        }

        let pos = {
            x: 0,
            y: 0
        }

        for (let i = 0; i < this.cardResult.pokes.length; i++) {
            pos.x = this.orginPlayerHeadPos[i].x;
            pos.y = this.orginPlayerHeadPos[i].y;

            if (this.cardResult.pokes[i].win == true) {
                //xlLib.TipsUtils.showTipsDownToUp("+" + this.cardResult.pokes[i].score, numPos.x, numPos.y, false);
                this.updatePlayerGold(i, this.cardResult.pokes[i].score, true);
            } else {
                //xlLib.TipsUtils.showTipsDownToUp("-" + this.cardResult.pokes[i].score, numPos.x, numPos.y, false);
                this.updatePlayerGold(i, this.cardResult.pokes[i].score, false);
            }

            if (this.zhaungIndex == i) {
                continue;
            }

            //var goldFlyAnimator: uiCore.Animation;

            if (this.cardResult.pokes[i].win == true) {
                //goldFlyAnimator = AnimationUtils.goldFlyAnimation("qznn_showScore" + this.zhaungIndex + "-" + i + "_tex_20_png", "qznn_showScore" + this.zhaungIndex + "-" + i + "_tex_{0}_png");
                EffectUtils.coinsFly(this, zhuangPos.x, zhuangPos.y, pos.x, pos.y);
            } else {
                //goldFlyAnimator = AnimationUtils.goldFlyAnimation("qznn_showScore" + i + "-" + this.zhaungIndex + "_tex_20_png", "qznn_showScore" + i + "-" + this.zhaungIndex + "_tex_{0}_png");
                EffectUtils.coinsFly(this, pos.x, pos.y, zhuangPos.x, zhuangPos.y);
            }
            //this.addChild(goldFlyAnimator);
            //this.goldFlyAnimatorarr.push(goldFlyAnimator);
            //goldFlyAnimator.play();
        }

        for (let i = 0; i < this.cardResult.pokes.length; i++) {
            this.suiCoreGameEndScoreResultEffect(i, this['grpHead' + i], this.cardResult.pokes[i].win, this.cardResult.pokes[i].score);
        }

        this.interval = setInterval(this.victoryEffect.bind(this), 2000);
    }

    /**更新玩家金币 */
    public updatePlayerGold(num: number, gold: number, result: boolean): void {

        let _gold = UserInfo.getInstance().playes[num].goldcoins;
        if (result == true) {
            _gold = _gold + gold;
        } else {
            _gold = _gold - gold;
        }
        UserInfo.getInstance().playes[num].goldcoins = _gold;
        if (num == 0) {
            this.labelGold0.text = GlobalFunction.Formatconversion(_gold);
        } else {
            this['grpHead' + num];
            this.setGold(num, _gold);
        }
    }
    /**更新玩家金币 */
    public setGold(num, gold: number): void {
        this['labelGold' + num].text = GlobalFunction.Formatconversion(gold);
    }

    /**金币数字滚动效果 */
    public suiCoreGameEndScoreResultEffect(index, player, state, score) {
        this._zhuang_img0.visible = false;
        this._zhuang_img1.visible = false;
        this._zhuang_img2.visible = false;
        this._zhuang_img3.visible = false;

        if (state) {

            if (index % 2 == 0) {
                var num0 = new QZNNHEff();
                num0.x = -84;
                num0.y = -72;
                num0.play();

                var num1 = new QZNNHHeadEff();
                num1.x = -84;
                num1.y = -72;
                num1.play();
                player.addChild(num0);
                player.addChild(num1);
                this.win_eff_err.push(num0);
                this.win_eff_err.push(num1);
            } else {
                var num2 = new QZNNVEff();
                num2.x = -70;
                num2.y = -70;
                num2.play();

                var num3 = new QZNNVHeadEff();
                num3.x = -70;
                num3.y = -70;
                num3.play();
                player.addChild(num2);
                player.addChild(num3);
                this.win_eff_err.push(num2);
                this.win_eff_err.push(num3);
            }
        }

        let label = new eui.BitmapLabel;
        label.textAlign = egret.HorizontalAlign.CENTER;
        let str: string = "";
        if (state == true) {
            label.font = "qznn_win_fnt";
            label.text = "0";
            str = "+";
        } else {
            label.font = "qznn_lose_fnt";
            label.text = "0";
            str = "-";
        }
        if (index == 0) {
            label.x = 0;
            label.y = -40;
            label.textAlign = egret.HorizontalAlign.RIGHT;
        } else if (index == 1) {
            label.x = 30;
            label.y = -40;
        } else if (index == 2) {
            label.x = 90;
            label.y = -40;
        } else if (index == 3) {
            label.x = 30;
            label.y = -40;
        }
        label.scaleX = 1;
        label.scaleY = 1;
        player.addChild(label);
        this.turn_score_arr.push(label);
        uiCore.LabelEffect.instance.playEffect(label, { time: 3000, initNum: 1, num: score / 100, regulator: 50 }, str);
    }
    /**播放 胜利 通杀 通赔 动画 */
    public victoryEffect(): void {
        clearInterval(this.interval);
        this.interval = 0;
        if (this.game_result == 1) {
            this.addNNVictoryEffect();
            this.game_result = 0;
        } else if (this.game_result == 2) {
            this.addTongsha();
            this.game_result = 0;
        } else if (this.game_result == 3) {
            this.addTongpei();
            this.game_result = 0;
        }
        this._jixu.visible = true;

        UserInfo.getInstance().isGameStart = false;
    }

    /**场景重置 */
    private resetGame(): void {

        this.initData();
        for (var i = 0; i < 5; i++) {
            // this['bankerCard_' + i].source = '';
            let card_banker: eui.Image = this['bankerCard_' + i];
            card_banker.source = '';
            egret.Tween.removeTweens(card_banker);
            card_banker.x = this.orginBankerCardPos[i].x;
            card_banker.y = this.orginBankerCardPos[i].y;

            let card_pin: eui.Image = this['_puke_' + i];
            card_pin.source = '';
            egret.Tween.removeTweens(card_pin);

        }
        this._pingpai.visible = false;

        this._my_pai.visible = false;

        this.labCardTypeBanker.visible = false;
        for (var index = 1; index < 6; index++) {
            //this['labCardResult' + index].text = '';
            this['labCardType' + index].visible = false;
            for (var j = 0; j < 5; j++) {
                // this['grpCard_' + index + '_' + j].source = '';
                let card: eui.Image = this['grpCard_' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
            }
            // this['grpHead' + (index + 1)].setZhuang(false);

            this["_xiabei_" + index].visible = false;
            this["_xiabei_0_" + index].visible = false;

            this["_whether_" + index].visible = false;
            this["_img_" + index].visible = false;
        }
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };


        this._btn_begin.visible = true;
        this.isCanBets = true;
        this.isBets = false;

        this.resultCaijin = 0;

        this.isCoinsReturn = true;
        this.isCardEffectShow = false;
        this.removeEff(this.nnbankerEff);
        this.arr = [null, null, null];
        this.score = [0, 0, 0, 0, 0];
        this.score1 = [0, 0, 0, 0, 0];
        this.arr_fen = [0, 0, 0];
        this.arr_fen1 = [0, 0, 0];
        this.game_result = 0;
        this.niu = 0;
        this.time = 0;
        this._jixu.visible = false;
        this.startCardRotation = false;
        this.zhaungIndex = 0;    //庄的位置
        this.zijipokes = [0, 0, 0, 0, 0];
        this.multipleList = [0, 0, 0, 0, 0];

        this._btn_switch.visible = false;
        this._btn_double_1.visible = false;
        this._btn_double_2.visible = false;
        this._btn_double_3.visible = false;
        this._btn_double_4.visible = false;
        this._btn_double_5.visible = false;
        this.beishu_0.visible = false;
        this.beishu_1.visible = false;
        this.beishu_2.visible = false;
        this.beishu_3.visible = false;
        this.beishu_4.visible = false;
        this.beishu_0_0.visible = false;
        this.beishu_0_1.visible = false;
        this.beishu_0_2.visible = false;
        this.beishu_0_3.visible = false;
        this.beishu_0_4.visible = false;

        this.grpCountdown.visible = true;

        this._xiabei_0.x = 751.67;
        this._xiabei_1.x = 342.4;
        this._xiabei_2.x = 338.05;
        this._xiabei_3.x = 730.09;
        this._xiabei_4.x = 1141.63;
        this._xiabei_5.x = 1151.63;

        this.grpHead0.visible = false;
        this.grpHead1.visible = false;
        this.grpHead2.visible = false;
        this.grpHead3.visible = false;
        this.grpHead4.visible = false;
        this.grpHead5.visible = false;

        this._zhuang_img0.visible = false;
        this._zhuang_img1.visible = false;
        this._zhuang_img2.visible = false;
        this._zhuang_img3.visible = false;

        this.isTanPai = [false, false, false, false, false, false];

        this._tishi.visible = false;

        for (let i = 0; i < this.turn_score_arr.length; i++) {
            this.turn_score_arr[i].parent.removeChild(this.turn_score_arr[i]);
        }
        this.turn_score_arr = [];

        for (let i = 0; i < this.win_eff_err.length; i++) {
            this.win_eff_err[i].stop();
            this.win_eff_err[i].parent.removeChild(this.win_eff_err[i]);
        }
        this.win_eff_err = [];

        for (let i = 0; i < this.goldFlyAnimatorarr.length; i++) {
            this.goldFlyAnimatorarr[i].stop();
            this.goldFlyAnimatorarr[i].parent.removeChild(this.goldFlyAnimatorarr[i]);
        }
        this.goldFlyAnimatorarr = [];

        if (this.tongsha) {
            this.tongsha.stop();
            //this.tongsha.parent.removeChild(this.tongsha);
        }

        if (this.niuniuTX) {
            this.niuniuTX.stop();
            this.niuniuTX.parent.removeChild(this.niuniuTX);
        }

        if (this.tongpei) {
            this.tongpei.stop();
            //this.niuniuTX.parent.removeChild(this.niuniuTX);
        }
        if (this.niuniukuang) {
            this.niuniukuang.stop();
            this.niuniukuang.parent.removeChild(this.niuniukuang);
            this.niuniukuang = null;
        }
        if (this.niuniukuang1) {
            this.niuniukuang1.stop();
            this.niuniukuang1.parent.removeChild(this.niuniukuang1);
            this.niuniukuang1 = null;
        }

    }

    private removeEff(eff: egret.MovieClip): void {
        if (eff) {
            eff.stop();
            if (eff.parent) {
                eff.parent.removeChild(eff);
            }
        }
    }

    private removeNNbankerEff(): void {
        if (this.nnbankerEff) {
            this.nnbankerEff.stop();
            if (this.nnbankerEff.parent) {
                this.nnbankerEff.parent.removeChild(this.nnbankerEff);
            }
        }
    }
    private getHistoryCallback(msg): void {
        var list = msg.data;
        for (var i = 0; i < 10; i++) {
            if (i < list.length) {
                this['grpHistroy' + i].visible = true;
                var arr = list[i];
                for (var j = 0; j < 4; j++) {
                    this['grpHistroy' + j + '_' + i].source = arr[j] == 1 ? 'qznn_a8' : 'qznn_a7';
                }
            }
            else {
                this['grpHistroy' + i].visible = false;
            }
        }

    }


    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }
    /**返回游戏大厅 */
    public Onquit(): void {
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

    public destroy(): void {

        this._btn_meun.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_begin.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this._btn_double_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        this._btn_tanpai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);

        EventUtil.removeEventListener(EventConst.onUserShowOrderUpdate, this.onShowOrder, this);
        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.removeEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);


        if (this.cdTimer != null) {
            this.cdTimer.removeEventListener(egret.TimerEvent.TIMER, this.clearTimer, this);
        }
        this.removeEff(this.nnbankerEff);

        if (this.interval != 0) {
            clearInterval(this.interval);
        }
        if (this.myCardRotationIntval != 0) {
            clearInterval(this.myCardRotationIntval);
        }

        if (this.flyIntval_1 != 0) {
            clearInterval(this.flyIntval_1);
        }
        if (this.flyIntval_2 != 0) {
            clearInterval(this.flyIntval_2);
        }
        if (this.flyIntval_3 != 0) {
            clearInterval(this.flyIntval_3);
        }
        if (this.flyIntval_4 != 0) {
            clearInterval(this.flyIntval_4);
        }
        if (this.flyIntval_5 != 0) {
            clearInterval(this.flyIntval_5);
        }
        if (this.flyIntval_6 != 0) {
            clearInterval(this.flyIntval_6);
        }

        if (this.expandIntval_1 != 0) {
            clearInterval(this.expandIntval_1);
        }
        if (this.expandIntval_2 != 0) {
            clearInterval(this.expandIntval_2);
        }
        if (this.expandIntval_3 != 0) {
            clearInterval(this.expandIntval_3);
        }
        if (this.expandIntval_4 != 0) {
            clearInterval(this.expandIntval_4);
        }
        if (this.expandIntval_5 != 0) {
            clearInterval(this.expandIntval_5);
        }
        if (this.expandIntval_6 != 0) {
            clearInterval(this.expandIntval_6);
        }

        for (var index = 1; index < 6; index++) {
            for (var j = 0; j < 5; j++) {
                let card: eui.Image = this['grpCard_' + index + '_' + j];
                //card.source = '';
                egret.Tween.removeTweens(card);
            }


        }
        for (let i = 0; i < 5; i++) {
            let card_banker: eui.Image = this['bankerCard_' + i];
            //card_banker.source = '';
            egret.Tween.removeTweens(card_banker);
            let card_pin: eui.Image = this['_puke_' + i];
            //card_pin.source = '';
            egret.Tween.removeTweens(card_pin);
        }
    }
}

