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
    public _paijubh: eui.Label;
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
    public Themitoken: eui.Group;
    public cardgrp_0: eui.Group;
    public _bei_puke_0_0: eui.Image;
    public puke_0_0: eui.Image;
    public mask_0: eui.Rect;
    public cardgrp_1: eui.Group;
    public _bei_puke_0_1: eui.Image;
    public puke_0_1: eui.Image;
    public mask_1: eui.Rect;
    public cardgrp_2: eui.Group;
    public _bei_puke_1_0: eui.Image;
    public puke_1_0: eui.Image;
    public mask_2: eui.Rect;
    public cardgrp_3: eui.Group;
    public _bei_puke_1_1: eui.Image;
    public puke_1_1: eui.Image;
    public mask_3: eui.Rect;
    public cardgrp_4: eui.Group;
    public _bei_puke_0_2: eui.Image;
    public puke_0_2: eui.Image;
    public mask_4: eui.Rect;
    public cardgrp_5: eui.Group;
    public _bei_puke_1_2: eui.Image;
    public puke_1_2: eui.Image;
    public mask_5: eui.Rect;
    public xian_tishi: eui.Group;
    public xian_Label: eui.Label;
    public zhuang_tishi: eui.Group;
    public zhuang_Label: eui.Label;
    public wjlistkuang: eui.Group;
    public packup: eui.Image;
    public scroller: eui.Scroller;
    public userlist: eui.List;
    public _btn_close: eui.Button;
    public _btn_meun: eui.Button;
    public wanjialist: eui.Button;
    public grpHead0: eui.Group;
    public imghead0: eui.Image;
    public labelHead0: eui.Label;
    public labelGold0: eui.Label;





    ///----------------------------------------------------------------

    public num: number = 0;    //下注数量
    public time: number;        //秒数
    public timer: egret.Timer;  //计时器
    public arrCoin = [];        //下注筹码池   
    public isAction: boolean = false;               //是否可以下注   
    public multipleList: number[] = [0, 0, 0, 0, 0, 0];   //倍数表

    private orginPlayePos = [];    // 存储玩家扑克位置

    private orginPlayePos1 = [];    // 存储玩家显示原始扑克的位置

    public xjzjdianshu: number[] = [0, 0];  //闲庄的点数

    public istzxzDh: boolean = false;       //是否播放停止下注动画

    public ischongzhi: boolean = false;     //是否重置界面

    private interval: number = -1;      // 游戏计时器间隔

    public turn_score_arr: eui.BitmapLabel[] = [];      //位图文本 金币滚动框

    private orginPlayerCardPos = [];    // 存储玩家原始扑克的位置

    private lastTouchBetIndex: number = 1; //上一次点击的筹码

    private jiesuan_1: BJLjiesuan1;
    private jiesuan_2: BJLjiesuan2;
    private jiesuan_3: BJLjiesuan3;
    private tingzhi: BJLtingzhi;
    private xiazhu: BJLxiazhu;

    //筹码池
    private coin_1_arr = [];
    private coin_2_arr = [];
    private coin_3_arr = [];
    private coin_4_arr = [];
    private coin_5_arr = [];

    //----------------------------------------------------------------

    protected childrenCreated(): void {
        let musicBg = ["bjl_37_bg_play_mp3"];
        xlLib.SoundMgr.instance.playBgMusic(musicBg);

        this.getOrginCardPos();
        this.addEvent();
        this.initData();

        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
        // this.juegengxin(1);

        // for (let i = 0; i < 20; i++) {
        //     this.onPlayerGenZhu(4, 1);
        //     this.onPlayerGenZhu(10, 2);
        //     this.onPlayerGenZhu(20, 3);
        //     this.onPlayerGenZhu(50, 4);
        //     this.onPlayerGenZhu(100, 5);
        // }

    }

    /**数据初始化 */
    private initData(): void {

        this.grpCoins.touchEnabled = false;

        this.grpCard.visible = true;

        UserInfo.getInstance().isGameStart = false;
        this.istzxzDh = false;

        this.isAction = false;
        for (let i = 0; i < 5; i++) {
            this['grade_text_' + i + '_0'].text = '';
            this['grade_text_' + i + '_1'].text = '';
            this['effectTouch' + i].alpha = 0;
        }

        this.arrCoin = [];
        this.coin_1_arr = [];
        this.coin_2_arr = [];
        this.coin_3_arr = [];
        this.coin_5_arr = [];
        this.coin_4_arr = [];

        this.tishi_zi_0.visible = true;
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
        for (let i = 0; i < 6; i++) {
            this['cardgrp_' + i].mask = this['mask_' + i];
        }

        this._bei_puke_0_2.visible = false;
        this._bei_puke_1_2.visible = false;
        this.ischongzhi = false;

    }
    /**获取原始扑克的位置 */
    private getOrginCardPos(): void {

        for (var index = 0; index < 2; index++) {
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
                var card: eui.Image = this['grpCard_' + index + '_' + j];
                card.source = '';
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
                var pos: egret.Point = new egret.Point;
                pos.x = card.x;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayePos[index] = cardPos;
        }

        for (var index = 0; index < 2; index++) {
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
                var card: eui.Image = this['puke_' + index + '_' + j];
                var pos: egret.Point = new egret.Point;
                pos.x = card.x;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayePos1[index] = cardPos;
        }

    }

    public resize(): void {

    }
    /**准备 开始回调 */
    public onClick(e: egret.TouchEvent): void {
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(9));
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
            // this.addjiesuan_1Effect();
            // this.addjiesuan_2Effect();
            // this.addjiesuan_3Effect();
            // this.feixingEffect(5, 40000);
            // this.onBeginBteonBack(40000);

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

        EventUtil.addEventListener(EventConst.onSendGameRoom, this.Joinhalfway, this);
        EventUtil.addEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
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

        if (index > 0 && index < 10) {
            this.js_shi.visible = false;
            this.js_ge.visible = true;
            this.jushu_bg.source = 'baccarat_font_bureau_diju1_png';
            this.js_ge.source = 'baccarat_font_bureau_' + index + '_png';
            this.js_ge.x = 593;
        } else if (index >= 10 && index < 100) {
            this.js_shi.visible = true;
            this.js_ge.visible = true;
            this.jushu_bg.source = 'baccarat_font_bureau_diju2_png';
            this.js_shi.source = 'baccarat_font_bureau_' + index / 10 % 10 + '_png';
            this.js_ge.source = 'baccarat_font_bureau_' + index % 10 + '_png';
            this.js_ge.x = 601;
        }

    }
    /**个人限红通知 */
    private UpdateLimitItem(data: any) {
        xlLib.TipsUtils.showFloatWordTips("个人限红通知!");
    }
    /**游戏状态 */
    private GameStatus(data: any): void {
        // console.log("收到----------------------------------------" + data._obj.roomStatus);
        switch (data._obj.roomStatus) {
            case 1: this.zhunbeizho(data); break;    //准备中
            case 2: this.onStartBetonBack(data); break;    //下注
            case 5: this.zitixianshi(data); break;    //发牌（动画）
            case 3: this.xianjiamipai(data); break;    //闲家咪牌（发牌）
            case 6: this.zhuangjiamipai(data); break;    //庄家咪牌（发牌）
            case 7: this.xianjiaBupai(data); break;    //闲家补牌
            case 8: this.zhuangjiaBupai(data); break;    //庄家补牌
            case 4: this.onBeginBteonBack(data); break;    //派奖（结算）

        }
    }
    /**发牌中 字体显示 */
    private zitixianshi(data: any): void {
        this.startCountDown(data._obj.seconds);
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(10));
        this.tishi_zi_0.visible = true;
        this.tishi_zi_0.source = 'baccarat_font_stage_2_png';
        this.fapai();
    }
    /**准备中 */
    private zhunbeizho(data: any): void {

        this.startCountDown(data._obj.seconds);
        this.tishi_zi_0.visible = true;
        this.tishi_zi_0.source = 'baccarat_font_stage_3_png';

        this.juegengxin(data._obj.jushu);
        this.sypai_0.text = data._obj.leftcardlh + '';
        this.sypai_1.text = data._obj.deskcards + '';

        this._paijubh.text = data._obj.inningId + '';   //牌局编号恢复

    }

    /**(筹码) */
    private SendJetton(data: any): void {
        for (let i = 0; i < data._obj.betrules.length; i++) {
            this.multipleList[i] = data._obj.betrules[i];
            this['_image_' + (i + 1)].source = 'baccarat_game_icon_chouma_' + this.multipleList[i] + '_png';
        }
    }
    /**赔率 */
    private ononBJLjoinroomBack(data: any): void {
        console.log("赔率");
    }
    /**可以开始下注  倒计时*/
    private onStartBetonBack(data: any): void {
        console.log("可以开始下注  倒计时");
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(2));
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
        // console.log(UserInfo.getInstance().uid);
        // console.log(data._obj.userid);
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

        this.tishi_zi_0.visible = false;
        this.tishi_zi_1.visible = true;
        this.tishi_zi_1.source = 'baccarat_font_stage_5_png';


        this.startCountDown(data._obj.seconds);
        this.xjzjdianshu[0] = data._obj.playersce;

        this.dianshu_0.visible = true;
        this.dianshu_img_0.source = 'baccarat_game_point_' + data._obj.playersce + '_png';

        this.Themitoken.visible = true;
        this.xian_tishi.visible = true;
        this.xian_Label.text = "闲家咪牌中";
        this.zhuang_tishi.visible = false;
        this.grpCard_0_0.source = 'qznn_card_' + data._obj.playerCard[0];
        this.grpCard_0_1.source = 'qznn_card_' + data._obj.playerCard[1];
        this.puke_0_0.source = 'qznn_card_' + data._obj.playerCard[1];

        this.puke_0_0.visible = true;
        this.puke_0_1.source = 'qznn_card_' + data._obj.playerCard[0];

        this.puke_0_1.visible = true;

        for (let i = 0; i < 2; i++) {
            this['_bei_puke_0_' + i].visible = true;
            this['_bei_puke_0_' + i].x = this.orginPlayePos[0][i].x;
            this['_bei_puke_0_' + i].y = this.orginPlayePos[0][i].y;
            this['_bei_puke_1_' + i].visible = true;
            this['_bei_puke_1_' + i].x = this.orginPlayePos[1][i].x;
            this['_bei_puke_1_' + i].y = this.orginPlayePos[1][i].y;
        }

        this.fanpaixiaog(0);

    }
    /**庄家咪牌 */
    private zhuangjiamipai(data: any) {
        this.startCountDown(data._obj.seconds);
        this.tishi_zi_1.visible = true;
        this.tishi_zi_1.source = 'baccarat_font_stage_5_png';

        this.xjzjdianshu[1] = data._obj.bankersce;
        this.dianshu_1.visible = true;
        this.dianshu_img_1.source = 'baccarat_game_point_' + data._obj.bankersce + '_png';

        this.xian_tishi.visible = false;
        this.zhuang_tishi.visible = true;
        this.zhuang_Label.text = "庄家咪牌中";
        this.grpCard_1_0.source = 'qznn_card_' + data._obj.bankerCard[1];
        this.grpCard_1_1.source = 'qznn_card_' + data._obj.bankerCard[0];
        this.puke_1_0.source = 'qznn_card_' + data._obj.bankerCard[1];

        this.puke_1_0.visible = true;
        this.puke_1_1.source = 'qznn_card_' + data._obj.bankerCard[0];

        this.puke_1_1.visible = true;
        this._bei_puke_1_0.visible = true;
        this._bei_puke_1_1.visible = true;

        this.fanpaixiaog(1);
    }
    /**闲家补牌 */
    private xianjiaBupai(data: any) {
        this.startCountDown(data._obj.seconds);

        this.playClickSound(BJLUtil.getInstance().getSoundEffect(14));
        setTimeout(() => {
            this.playClickSound(BJLUtil.getInstance().getSoundEffect(16));
        }, 1000);

        this.xjzjdianshu[0] = data._obj.playersce;
        this.dianshu_0.visible = true;
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
        this._bei_puke_0_2.x = this.orginPlayePos[0][2].x;
        this._bei_puke_0_2.y = this.orginPlayePos[0][2].y;

        this.fapai2(0, data._obj.playerCard[0]);
    }
    /**庄家补牌 */
    private zhuangjiaBupai(data: any) {
        this.startCountDown(data._obj.seconds);

        this.playClickSound(BJLUtil.getInstance().getSoundEffect(15));
        setTimeout(() => {
            this.playClickSound(BJLUtil.getInstance().getSoundEffect(16));
        }, 1000);

        this.xjzjdianshu[1] = data._obj.bankersce;
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
        this._bei_puke_1_2.x = this.orginPlayePos[1][2].x;
        this._bei_puke_1_2.y = this.orginPlayePos[1][2].y;

        this.fapai2(1, data._obj.bankerCard[0]);
    }

    /**结算（派奖） */
    private onBeginBteonBack(data: any): void {
        UserInfo.getInstance().isGameStart = false;
        this.startCountDown(data._obj.seconds);

        UserInfo.getInstance().goldcoins = data._obj.golbcontis;
        this.labelGold0.text = GlobalFunction.Formatconversion(data._obj.golbcontis);

        this.Themitoken.visible = false;

        this.tishi_zi_1.visible = false;
        this.tishi_zi_0.visible = true;
        this.tishi_zi_0.source = 'baccarat_font_stage_1_png';
        this.feixingEffect(data._obj.base, data._obj.userwingolb);

        if (data._obj.userwingolb > 0) {
            let label = new eui.BitmapLabel;
            let str: string = "";
            label.font = "qznn_win_fnt";
            label.text = "0";
            str = "+";
            label.x = 180;
            label.y = -12;

            this.grpHead0.addChild(label);
            this.turn_score_arr.push(label);
            uiCore.LabelEffect.instance.playEffect(label, { time: 2000, initNum: 1, num: data._obj.userwingolb, regulator: 50, splitnum: 2, splitstr: "." }, str);
        }

        this.playClickSound(BJLUtil.getInstance().getSoundEffect(14));
        setTimeout(() => {
            this.playClickSound(BJLUtil.getInstance().dianshuSoundEffect(this.xjzjdianshu[0]));
            setTimeout(() => {
                this.playClickSound(BJLUtil.getInstance().getSoundEffect(15));
                setTimeout(() => {
                    this.playClickSound(BJLUtil.getInstance().dianshuSoundEffect(this.xjzjdianshu[1]));
                    setTimeout(() => {
                        this.bofangEffect(data._obj.base);
                        setTimeout(() => {
                            this.resetGame();
                        }, 2000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);

    }
    /**结算筹码飞行效果 */
    private feixingEffect(index: number, golb: number) {
        var point: egret.Point = BJLUtil.getInstance().getCoinsPos(index);  //胜利区域坐标
        var p: egret.Point = new egret.Point(); //荷官坐标
        p.x = 736;
        p.y = 150;

        var p1: egret.Point = new egret.Point();    //玩家列表坐标
        p1.x = 10;
        p1.y = 600;

        for (let i = 1; i < 6; i++) {
            if (index != i) {
                this.quyuchoumafeixing(i, p, 0);
            }
        }
        setTimeout(() => {
            for (let i = 1; i < 6; i++) {
                if (index != i) {

                    this.quyuchoumafeixing(i, point, 2);
                }
            }
            setTimeout(() => {
                for (let i = 1; i < 6; i++) {

                    this.quyuchoumafeixing(i, p1, 1);

                }
                if (golb > 0) {
                    var p: egret.Point = new egret.Point();
                    for (let i = 0; i < 20; i++) {
                        var tx = point.x + (Math.random() * 250);
                        var ty = point.y + (Math.random() * 80);
                        p.x = tx;
                        p.y = ty;
                        var coin = BJLUtil.getInstance().coinsType(p, 10);
                        this.arrCoin.push(coin);
                        this.grpCoins.addChild(coin);
                        egret.Tween.get(coin).wait(Math.floor(100 * Math.random())).to({ x: 68, y: 762 }, 500);
                    }
                }
            }, 700);
        }, 700);

    }
    /**区域筹码飞行 */
    private quyuchoumafeixing(index: number, pos: egret.Point, istype) {
        for (let i = 0; i < this['coin_' + index + '_arr'].length; i++) {
            var chouma = this['coin_' + index + '_arr'][i];
            if (istype == 0) {
                egret.Tween.get(chouma).wait(Math.floor(100 * Math.random())).to({ x: pos.x, y: pos.y }, 500);

            } else if (istype == 1) {
                var position: egret.Point = new egret.Point();
                position.x = pos.x + (Math.random() * 30);
                position.y = pos.y + (Math.random() * 10);
                egret.Tween.get(chouma).wait(Math.floor(100 * Math.random())).to({ x: position.x, y: position.y }, 500);

            } else if (istype == 2) {
                var position: egret.Point = new egret.Point();
                position.x = pos.x + (Math.random() * 250);
                position.y = pos.y + (Math.random() * 80);
                egret.Tween.get(chouma).wait(Math.floor(100 * Math.random())).to({ x: position.x, y: position.y }, 500);
            }

        }
    }

    /**当前牌局的 庄赢 闲赢  和 */
    private bofangEffect(index: number) {
        if (index == 1) {
            this.addjiesuan_1Effect();
        } else if (index == 2) {
            this.addjiesuan_2Effect();
        } else if (index == 3) {
            this.addjiesuan_3Effect();
        }
    }

    /**中途加入房间，数据恢复 */
    private Joinhalfway(data: any) {
        // console.log(data);
        this.juegengxin(data._obj.jushu);              //局数恢复
        this._paijubh.text = data._obj.inningId + '';   //牌局编号恢复
        this.tishizithuifu(data._obj.roomStatus);   /**提示字恢复 */

        this.startCountDown(data._obj.seconds); //倒计时恢复

        this.sypai_0.text = data._obj.leftcardlh + '';  //剩余牌数恢复
        this.sypai_1.text = data._obj.deskcards + '';

        //恢复牌背显示
        if (data._obj.roomStatus == 2) {
            this.grpCard_0_0.source = 'gf_poker0_png';
            this.grpCard_0_1.source = 'gf_poker0_png';
            this.grpCard_1_0.source = 'gf_poker0_png';
            this.grpCard_1_1.source = 'gf_poker0_png';
        }

        //庄家牌面信息恢复 加点数
        if (data._obj.bankerCard != null && data._obj.bankerCard.length > 0) {

            this.grpCard_1_0.source = 'qznn_card_' + data._obj.bankerCard[0];
            this.grpCard_1_1.source = 'qznn_card_' + data._obj.bankerCard[1];
            this.puke_1_0.source = 'qznn_card_' + data._obj.bankerCard[1];
            this.puke_1_0.x = this.orginPlayePos[1][0].x;
            this.puke_1_0.y = this.orginPlayePos[1][0].y;
            this.puke_1_0.visible = true;
            this.puke_1_1.source = 'qznn_card_' + data._obj.bankerCard[0];
            this.puke_1_1.x = this.orginPlayePos[1][1].x;
            this.puke_1_1.y = this.orginPlayePos[1][1].y;
            this.puke_1_1.visible = true;

            if (data._obj.bankersce != -1) {
                this.dianshu_1.visible = true;
                this.dianshu_img_1.source = 'baccarat_game_point_' + data._obj.bankersce + '_png';
            }
        }
        //闲家牌面信息恢复 加点数
        if (data._obj.playerCard != null && data._obj.playerCard.length > 0) {
            this.grpCard_0_0.source = 'qznn_card_' + data._obj.playerCard[0];
            this.grpCard_0_1.source = 'qznn_card_' + data._obj.playerCard[1];
            this.puke_0_0.source = 'qznn_card_' + data._obj.playerCard[1];
            this.puke_0_0.x = this.orginPlayePos[0][0].x;
            this.puke_0_0.y = this.orginPlayePos[0][0].y;
            this.puke_0_0.visible = true;
            this.puke_0_1.source = 'qznn_card_' + data._obj.playerCard[0];
            this.puke_0_1.x = this.orginPlayePos[0][1].x;
            this.puke_0_1.y = this.orginPlayePos[0][1].y;
            this.puke_0_1.visible = true;

            if (data._obj.bankersce != -1) {
                this.dianshu_0.visible = true;
                this.dianshu_img_0.source = 'baccarat_game_point_' + data._obj.playersce + '_png';
            }
        }

        if (data._obj.roomStatus != 1 && data._obj.roomStatus != 5) {
            //已丢筹码恢复
            if (data.param.board.betonList != null && data.param.board.betonList.length > 0) {
                this.choumahuifu(data.param.board.betonList);
                this.grade_text_0_0.text = "" + data.param.board.zhuang;
                this.grade_text_1_0.text = "" + data.param.board.xian;
                this.grade_text_2_0.text = "" + data.param.board.he;
                this.grade_text_3_0.text = "" + data.param.board.zhuangdui;
                this.grade_text_4_0.text = "" + data.param.board.xiandui;
            }
        }
    }
    /**已丢筹码恢复 */
    private choumahuifu(data: any) {

        for (let i = 0; i < data.length; i++) {
            var point: egret.Point = BJLUtil.getInstance().getCoinsPos(data[i].bass);
            var p: egret.Point = new egret.Point();
            p.x = point.x + Math.random() * 250;
            p.y = point.y + Math.random() * 80;
            var coin = BJLUtil.getInstance().coinsType(p, data[i].moneys);
            coin.touchEnabled = false;

            switch (data[i].bass) {
                case 1:                 // 1是庄
                    this.coin_1_arr.push(coin);
                    break;
                case 2:                 // 2是闲
                    this.coin_2_arr.push(coin);
                    break;
                case 3:                 // 3是和       
                    this.coin_3_arr.push(coin);
                    break;
                case 4:                 // 4是庄对
                    this.coin_4_arr.push(coin);
                    break;
                case 5:                 // 5是闲对
                    this.coin_5_arr.push(coin);
                    break;
            }

            this.grpCoins.addChild(coin);
        }

    }

    /**提示字恢复 */
    private tishizithuifu(index: number) {
        switch (index) {
            case 1: this.tishi_zi_0.visible = true;                             //准备中
                this.tishi_zi_1.visible = false;
                this.tishi_zi_0.source = 'baccarat_font_stage_3_png';
                break;    //准备中
            case 2: this.tishi_zi_0.visible = true;
                this.tishi_zi_1.visible = false;
                this.tishi_zi_0.source = 'baccarat_font_stage_6_png';
                this.istzxzDh = true;
                this.isAction = true;
                for (let i = 0; i < 5; i++) {
                    this['effectTouch' + i].alpha = 1;
                }
                break;                                                           //下注中
            case 5: this.tishi_zi_0.visible = true;
                this.tishi_zi_1.visible = false;
                this.tishi_zi_0.source = 'baccarat_font_stage_2_png';
                this.fapai(); break;                                            //发牌（动画）
            case 3: this.Themitoken.visible = true;
                this.tishi_zi_0.visible = false;
                this.tishi_zi_1.visible = true;
                this.tishi_zi_1.source = 'baccarat_font_stage_5_png'; break;    //闲家咪牌（发牌）
            case 6: this.Themitoken.visible = true;
                this.tishi_zi_0.visible = false;
                this.tishi_zi_1.visible = true;
                this.tishi_zi_1.source = 'baccarat_font_stage_4_png'; break;    //庄家咪牌（发牌）
            case 7: this.Themitoken.visible = true;
                this.xian_tishi.visible = true;
                this.xian_Label.text = "闲家补牌中";
                this.zhuang_tishi.visible = false; break;    //闲家补牌
            case 8: this.Themitoken.visible = true;
                this.xian_tishi.visible = false;
                this.zhuang_Label.text = "庄家补牌中";
                this.zhuang_tishi.visible = true; break;    //庄家补牌
            case 4: this.tishi_zi_0.visible = true;
                this.tishi_zi_1.visible = false;
                this.tishi_zi_0.source = 'baccarat_font_stage_1_png';
                this.ischongzhi = true; break;             //派奖（结算）
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
            otherplayer.index = i + 1;
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
            case 5: this.tichufj(); break;    //5局不下注踢出房间
            case 4: ; break;    //3局不下注提示
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

                    this.istzxzDh = false;
                    this.isAction = false;
                    for (let i = 0; i < 5; i++) {
                        this['effectTouch' + i].alpha = 0;
                    }

                    this.playClickSound(BJLUtil.getInstance().getSoundEffect(3));
                    this.tingzhi_Effect();
                }
                if (this.ischongzhi) {
                    this.resetGame();
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

        // for (let i = 0; i < 2; i++) {
        //     let _card1 = this["puke_" + index + "_" + i];
        //     let _card2 = this["_bei_puke_" + index + "_" + i];
        //     _card1.x = 0;
        //     _card1.y = this.orginPlayePos[index][i].y;
        //     _card2.x = this.orginPlayePos[index][i].x;
        //     _card2.y = this.orginPlayePos[index][i].y;
        //     egret.Tween.get(_card1).to({ x: 170, y: 0 }, 800);
        //     egret.Tween.get(_card2).to({ x: 0, y: 0 }, 600);
        // }

        let _card1 = this["puke_" + index + "_0"];
        let _card2 = this["_bei_puke_" + index + "_0"];
        _card1.x = 0;
        _card1.y = this.orginPlayePos[index][0].y;
        _card2.x = this.orginPlayePos[index][0].x;
        _card2.y = this.orginPlayePos[index][0].y;
        egret.Tween.get(_card1).to({ x: 170, y: 0 }, 500);
        egret.Tween.get(_card2).to({ x: 0, y: 0 }, 450);

        setTimeout(() => {
            let _card1 = this["puke_" + index + "_1"];
            let _card2 = this["_bei_puke_" + index + "_1"];
            _card1.x = 0;
            _card1.y = this.orginPlayePos[index][1].y;
            _card2.x = this.orginPlayePos[index][1].x;
            _card2.y = this.orginPlayePos[index][1].y;
            egret.Tween.get(_card1).to({ x: 170, y: 0 }, 500);
            egret.Tween.get(_card2).to({ x: 0, y: 0 }, 450);
        }, 800);


    }

    //显示筹码
    private showCoins(pos: egret.Point, num: number, msg: number): void {
        var isRemove: boolean = false;
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(8));
        var point: egret.Point = BJLUtil.getInstance().getCoinsPos(msg);

        var coin = BJLUtil.getInstance().coinsType(pos, num);
        var tx = point.x + Math.random() * 250;
        var ty = point.y + Math.random() * 80;
        coin.touchEnabled = false;
        this.grpCoins.addChild(coin);
        egret.Tween.get(coin).wait(Math.floor(100 * Math.random())).to({ x: tx, y: ty }, 200);
        switch (msg) {
            case 1:                 // 1是庄
                this.coin_1_arr.push(coin);
                break;
            case 2:                 // 2是闲
                this.coin_2_arr.push(coin);
                break;
            case 3:                 // 3是和       
                this.coin_3_arr.push(coin);
                break;
            case 4:                 // 4是庄对
                this.coin_4_arr.push(coin);
                break;
            case 5:                 // 5是闲对
                this.coin_5_arr.push(coin);
                break;
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
        card.source = 'gf_poker0_png';
        card.x = 713.5;
        card.y = 100;

        var pos = this.orginPlayerCardPos[index][2];

        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400).call(() => {
            card.source = 'qznn_card_' + num;
        });


        let _card1 = this["puke_" + index + "_2"];
        let _card2 = this["_bei_puke_" + index + "_2"];
        _card1.x = 0;
        _card1.y = this.orginPlayePos[index][2].y;
        _card2.x = this.orginPlayePos[index][2].x;
        _card2.y = this.orginPlayePos[index][2].y;

        egret.Tween.get(_card1).to({ x: 255 }, 500);
        egret.Tween.get(_card2).to({ x: 0 }, 450);
    }

    /**重置界面 */
    private resetGame(): void {

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 3; j++) {
                this['puke_' + i + '_' + j].x = this.orginPlayePos1[i][j].x;
                this['puke_' + i + '_' + j].y = this.orginPlayePos1[i][j].y;
            }
        }

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

        for (let i = 1; i < 6; i++) {
            for (let j = 0; j < this['coin_' + i + '_arr'].length; j++) {
                if (this['coin_' + i + '_arr'].parent != null) {
                    this['coin_' + i + '_arr'].parent.removeChild(this['coin_' + i + '_arr']);
                }
            }
            this['coin_' + i + '_arr'] = [];
        }

        for (let i = 1; i < 6; i++) {
            if (this.arrCoin[i] != null) {
                if (this.arrCoin[i].parent) {
                    this.arrCoin[i].parent.removeChild(this.arrCoin[i]);
                }

            }
        }
        this.arrCoin = [];

        for (let i = 0; i < this.turn_score_arr.length; i++) {
            this.turn_score_arr[i].parent.removeChild(this.turn_score_arr[i]);
        }
        this.turn_score_arr = [];

        this.initData();
    }


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

        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_meun.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.wanjialist.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.packup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        EventUtil.addEventListener(EventConst.onSendGameRoom, this.Joinhalfway, this);
        EventUtil.removeEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.removeEventListener(EventConst.OnUpdateLimitItem, this.UpdateLimitItem, this);
        EventUtil.removeEventListener(EventConst.onSendJetton, this.SendJetton, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.removeEventListener(EventConst.userwin, this.initGameIconList, this);
        EventUtil.removeEventListener(EventConst.onUserLeaveGame, this.ongameOverSuccesBack, this);

        EventUtil.removeEventListener(EventConst.onTimelyNotify, this.TimelyNotify, this);

    }
}

