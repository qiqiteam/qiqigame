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

    public grp_roungNum: eui.Group;
    public lab_paijuNum: eui.Label;
    public img_dizhu_dinhzhu_bg: eui.Image;
    public lab_dizhu_num: eui.Label;
    public lab_dingzhu_num: eui.Label;
    public lab_now_roundNum: eui.Label;
    public lab_end_roundNum: eui.Label;
    public img_deskgoldbg: eui.Image;
    public img_deskgoldIcon: eui.Image;
    public lab_deskGolds: eui.Label;
    public grpCoins: eui.Group;
    public grpCard: eui.Group;
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
    public imgCardbg0: eui.Image;
    public imgCardbg1: eui.Image;
    public imgCardbg2: eui.Image;
    public imgCardbg3: eui.Image;
    public imgCardbg4: eui.Image;
    public imgCardType0: eui.Image;
    public imgCardType1: eui.Image;
    public imgCardType2: eui.Image;
    public imgCardType3: eui.Image;
    public imgCardType4: eui.Image;
    public imgis_kanpai0: eui.Image;
    public imgis_kanpai1: eui.Image;
    public imgis_kanpai2: eui.Image;
    public imgis_kanpai3: eui.Image;
    public imgis_kanpai4: eui.Image;
    public imgstatus_bg0: eui.Image;
    public imgstatus_bg1: eui.Image;
    public imgstatus_bg2: eui.Image;
    public imgstatus_bg3: eui.Image;
    public imgstatus_bg4: eui.Image;
    public imgstatus0: eui.Image;
    public imgstatus1: eui.Image;
    public imgstatus2: eui.Image;
    public imgstatus3: eui.Image;
    public imgstatus4: eui.Image;
    public labstatus0: eui.Label;
    public labstatus1: eui.Label;
    public labstatus2: eui.Label;
    public labstatus3: eui.Label;
    public labstatus4: eui.Label;
    public img_xzgold_bg0: eui.Image;
    public img_xzgold_bg1: eui.Image;
    public img_xzgold_bg2: eui.Image;
    public img_xzgold_bg3: eui.Image;
    public img_xzgold_bg4: eui.Image;
    public img_xzgold0: eui.Image;
    public img_xzgold1: eui.Image;
    public img_xzgold2: eui.Image;
    public img_xzgold3: eui.Image;
    public img_xzgold4: eui.Image;
    public lab_xzgold0: eui.Label;
    public lab_xzgold1: eui.Label;
    public lab_xzgold2: eui.Label;
    public lab_xzgold3: eui.Label;
    public lab_xzgold4: eui.Label;
    public img_abandon1: eui.Image;
    public img_abandon2: eui.Image;
    public img_abandon3: eui.Image;
    public img_abandon4: eui.Image;
    public grpHead1: ZJHHead;
    public grpHead2: ZJHHead;
    public grpHead3: ZJHHead;
    public grpHead4: ZJHHead;
    public img_bipailight1: eui.Image;
    public img_bipailight2: eui.Image;
    public img_bipailight3: eui.Image;
    public img_bipailight4: eui.Image;
    public grpCountdown: eui.Group;
    public labCountdown0: eui.BitmapLabel;
    public labCountdown1: eui.BitmapLabel;
    public timeTxt: eui.Label;
    public grpHead0: eui.Group;
    public img_time0: eui.Image;
    public imghead0: eui.Image;
    public labelHead0: eui.Label;
    public labelGold0: eui.Label;
    public grp_operatbtn: eui.Group;
    public _btn_qipai: eui.Button;
    public _btn_jiazhu: eui.Button;
    public _btn_bipai: eui.Button;
    public _btn_quanxia: eui.Button;
    public _btn_genzhu: eui.Button;
    public _btn_autogenzhu: eui.Button;
    public _btn_cancelautogenzhu: eui.Button;
    public img_qipai: eui.Image;
    public img_jiazhu: eui.Image;
    public img_bipai: eui.Image;
    public img_quanya: eui.Image;
    public img_genzhu: eui.Image;
    public img_autogenzhu: eui.Image;
    public img_cancelautogenzhu0: eui.Image;
    public img_cancelautogenzhu1: eui.Image;
    public lab_tankNumber: eui.Label;
    public lab_quanyaNumber: eui.Label;
    public lab_callNumber: eui.Label;
    public grp_btncm0: eui.Group;
    public _btn_jiacm_0: eui.Button;
    public _btn_jiacm_1: eui.Button;
    public _btn_jiacm_2: eui.Button;
    public _btn_jiacm_3: eui.Button;
    public _btn_jiacm_4: eui.Button;
    public _btn_jiacm_5: eui.Button;
    public labchip0: eui.Label;
    public labchip1: eui.Label;
    public labchip2: eui.Label;
    public labchip3: eui.Label;
    public labchip4: eui.Label;
    public labchip5: eui.Label;
    public _btn_menu: eui.Button;
    public grp_menu: eui.Group;
    public menu_bg: eui.Image;
    public _btn_out: eui.Button;
    public _btn_setting: eui.Button;
    public _btn_record: eui.Button;
    public _btn_playmethod: eui.Button;
    public _btn_feedback: eui.Button;
    public grp_out_hint: eui.Group;
    public _btn_cancel: eui.Button;
    public _btn_quite: eui.Button;
    public grp_setting_hint: eui.Group;
    public _btn_set_close: eui.Button;
    public grp_feedback_panel: eui.Group;
    public _btn_feedback_close: eui.Button;
    public _btn_submit_close: eui.Button;
    public _btn_luckmoney: eui.Button;
    public _btn_continuegame: eui.Button;
    public img_light0: eui.Image;
    public img_light1: eui.Image;
    public img_light2: eui.Image;
    public img_light3: eui.Image;
    public img_light4: eui.Image;
    public _btn_kanpai: eui.Button;





    //public grpCaijin: eui.Group;
    //public grpCaijinLabel: eui.Label;
    public isprepare: boolean;//准备状态
    public isoperat: boolean;//是否玩家操作状态
    public isCall: boolean;//跟注状态
    public autoWithnote: boolean
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
    private orginPlayerCard = [];    // 2存储玩家扑克位置


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

    //------------------------------------------------------------

    public playerOperatingState: number[] = [0, 0, 0, 0, 0]; //（无任何操作：0 玩家出牌：1 玩家看牌：2 玩家弃牌：3 玩家自动跟注：4 玩家取消自动跟注：5）//按当前桌子以我为参照（我是0）排序


    //------------------------------------------------------------

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
        let annular: Annular = new Annular(300, 300, 0, 200, 0xffffff);
        //this.addChild(annular);
        let opepro: Opeprogress = new Opeprogress(173, 219, 10);
        this.addChild(opepro);
        this.gamestatue(UserInfo.getInstance().gameData);


    }

    private anniuliuguang: DragonBonesSprite;

    //public isClickjixuGameBtn: boolean = false;//是否点击过继续游戏按钮
    //public isClickqipaiBtn: boolean = false;//是否点击过弃牌按钮
    private initData(): void {
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.grpCoins.touchEnabled = false;

        /**----------------------------------------------------------- */

        this.isprepare = true;
        this.isoperat = false;//玩家操作状态
        this.isCall = false;//玩家跟注状态
        this.img_autogenzhu.visible = false;
        this.grpCard.visible = true;
        this._btn_jiazhu.visible = false;
        this._btn_kanpai.visible = false;
        this._btn_bipai.visible = false;
        this._btn_genzhu.visible = false;
        this._btn_autogenzhu.visible = false;
        this._btn_cancelautogenzhu.visible = false;
        this.img_cancelautogenzhu0.visible = false;
        this.img_cancelautogenzhu1.visible = false;
        this.img_qipai.visible = false;
        this.img_jiazhu.visible = false;
        this.img_bipai.visible = false;
        this._btn_qipai.visible = false;
        this.grp_btncm0.visible = false;
        this._btn_continuegame.visible = false;
        this.img_genzhu.visible = false;
        this._btn_luckmoney.touchEnabled = false;
        this._btn_luckmoney.visible = false;
        this.lab_callNumber.visible = false;
        this.lab_tankNumber.visible = false;
        this.lab_quanyaNumber.visible = false;
        this.img_quanya.visible = false;
        this._btn_quanxia.visible = false;
        this.grp_menu.visible = false;
        this.grp_out_hint.visible = false;
        this.grp_setting_hint.visible = false;
        this.grp_feedback_panel.visible = false;
        this.grp_roungNum.visible = false;
        this.lab_now_roundNum.text = String(0);
        this.grpHead0.visible = false;
        this.grpHead1.visible = false;
        this.grpHead2.visible = false;
        this.grpHead3.visible = false;
        this.grpHead4.visible = false;
        UserInfo.getInstance().isGameStart = true;
        this.deskNum(false);
        this.botpGolds(false);
        this.playersLight(false);
        /***++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
        // this.anniuliuguang = new DragonBonesSprite('anniuliuguang', "Sprite");
        // this.anniuliuguang.width = this.width;
        // this.anniuliuguang.height = this.height;
        // this.anniuliuguang.x = 350;
        // this.anniuliuguang.y = 250;
        // this.addChild(this.anniuliuguang);
        // this.anniuliuguang.play("Sprite");
        // let zjheffectwin1: ZJHEffectWin2View = new ZJHEffectWin2View();
        // zjheffectwin1.x = -125;
        // zjheffectwin1.y = -315;
        // this.addChild(zjheffectwin1);
        // let zjheffectwin2: ZJHEffectWin2View = new ZJHEffectWin2View();
        // zjheffectwin2.x = -85;
        // zjheffectwin2.y = -550;
        // this.addChild(zjheffectwin2);

        // let zjheffectwin3: ZJHEffectWin2View = new ZJHEffectWin2View();
        // zjheffectwin3.x = -860;
        // zjheffectwin3.y = -550;
        // this.addChild(zjheffectwin3);

        // let zjheffectwin4: ZJHEffectWin2View = new ZJHEffectWin2View();
        // zjheffectwin4.x = -810;
        // zjheffectwin4.y = -315;
        // this.addChild(zjheffectwin4);

        // let zjheffectwin0: ZJHEffectWin1View = new ZJHEffectWin1View();
        // zjheffectwin0.x = 220;
        // zjheffectwin0.y = 160;
        // this.addChild(zjheffectwin0);

        /*var point: egret.Point = ZJHUtil.getInstance().getPlayerIconPos(0);
        let operateTimer: OperateTimer = new OperateTimer();
        operateTimer.x = point.x + 65;
        operateTimer.y = point.y + 84;
        this.addChild(operateTimer);
        this.setChildIndex(operateTimer, this.numChildren - 1);*/
        /**----------------------------------------------------------- */
    }
    /**玩家加注金币 */
    private botpGolds(state: boolean): void {
        for (let i = 0; i < 5; i++) {
            this['img_xzgold_bg' + i].visible = state;
            this['img_xzgold' + i].visible = state;
            this['lab_xzgold' + i].visible = state;
        }
    }
    /**桌面金币图标 */
    private deskNum(state: boolean): void {
        this.lab_deskGolds.visible = state;
        this.img_deskgoldbg.visible = state;
        this.img_deskgoldIcon.visible = state;
    }
    /**
     * 1.照射玩家的灯光,
     * 2.及比牌是图像的光
     * 3.最后赢家显示赢 */
    private playersLight(state: boolean): void {
        for (let i = 0; i < 5; i++) {
            this['img_light' + i].visible = state;
            if (i != 0) {
                this['img_bipailight' + i].visible = state;
            }
        }
    }

    //获取原始扑克的位置
    private getOrginCardPos(): void {
        for (var index = 0; index < 5; index++) {
            // this['labCardResult' + index].text = '';
            this['imgCardbg' + index].source = '';
            this['imgCardType' + index].source = '';
            this['imgstatus_bg' + index].source = '';
            this['imgis_kanpai' + index].source = '';
            this['imgstatus' + index].source = '';
            this['labstatus' + index].text = '';
            this['imgstatus_bg' + index].alpha = 1;
            this['imgstatus' + index].alpha = 1;
            for (let i = 0; i < 3; i++) {
                this['grpCard' + index + '_' + i].alpha = 1;
            }
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
                var card: eui.Image = this['grpCard' + index + '_' + j];
                card.source = '';
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos: egret.Point = new egret.Point;
                pos.x = card.x;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayerCardPos[index] = cardPos;
            this.orginPlayerCard[index] = cardPos;

        }
        for (var index = 1; index < 5; index++) {
            this['img_abandon' + index].source = '';
        }
    }

    public resize(): void {

    }
    public OnClickautogenzhutime: number = 0;
    private OnClick(e: egret.TouchEvent): void {
        if (e.target == this._btn_kanpai) {
            console.log("看牌");
            this.sendamessage(EventConst.seecard, null);
        } else if (e.target == this._btn_genzhu) {
            if (this.img_genzhu.source == "lab_genzhu_png") {
                this.sendamessage(EventConst.botpour, this.callnum);
                xlLib.TipsUtils.showFloatWordTips("跟注:" + this.callnum);
                this._btn_autogenzhu.visible = true;
                this.img_autogenzhu.visible = true;
                this.img_genzhu.visible = false;
                this.lab_callNumber.visible = false;
                this._btn_genzhu.touchEnabled = false;
                this._btn_jiazhu.touchEnabled = false;
                xlLib.DisplayUtils.setComponentEnabled(this._btn_genzhu, false);
                xlLib.DisplayUtils.setComponentEnabled(this._btn_jiazhu, false);
            }
        } else if (e.target == this._btn_autogenzhu) {
            this.sendamessage(EventConst.onAutoFollow, null);
            xlLib.TipsUtils.showFloatWordTips("自动跟注");
            this.playerOperatingState[0] = 4;//玩家自动跟注
        } else if (e.target == this._btn_cancelautogenzhu) {
            this.sendamessage(EventConst.closeAutoFollow, null);
            xlLib.TipsUtils.showFloatWordTips("取消自动跟注");
        } else if (e.target == this._btn_jiazhu) {
            this.grp_btncm0.visible = true;
        } else if (e.target == this._btn_jiacm_0) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[0]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[0]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
        } else if (e.target == this._btn_jiacm_1) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[1]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[1]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_1, false);
        } else if (e.target == this._btn_jiacm_2) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[2]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[2]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_1, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_2, false);
        } else if (e.target == this._btn_jiacm_3) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[3]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[3]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_1, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_2, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_3, false);
        } else if (e.target == this._btn_jiacm_4) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[4]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[4]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_1, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_2, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_3, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_4, false);
        } else if (e.target == this._btn_jiacm_5) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[5]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[5]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_1, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_2, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_3, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_4, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_5, false);
        } else if (e.target == this._btn_quanxia) {
            xlLib.TipsUtils.showFloatWordTips("全压");
            this.sendamessage(EventConst.pressure, null);
            this.onGenZhuClick(0, this.shortGold);
        } else if (e.target == this._btn_qipai) {
            this.sendamessage(EventConst.abandon, null);
            xlLib.TipsUtils.showFloatWordTips("弃牌");
        } else if (e.target == this._btn_bipai) {
            this.onBiPaiClick();
            xlLib.TipsUtils.showFloatWordTips("比牌")
        } else if (e.target == this._btn_continuegame) {
            //继续游戏
            this._btn_continuegame.visible = false;
            this.sendamessage(EventConst.zjhLeave, null);
            this.sendamessage(EventConst.joinroom, null);
            UserInfo.getInstance().isGameStart = true;
            this.resetGame();//重置游戏场景
            xlLib.TipsUtils.showFloatWordTips("继续游戏");
        } else if (e.target == this.grpHead1) {
            xlLib.TipsUtils.showFloatWordTips("点击玩家1");
            console.log("可以与1号玩家比牌");
            this.sendamessage2(EventConst.compareCard, this.UsId, this.byOpenId[1]);
            this.sendamessage(EventConst.botpour, this.callnum);
            xlLib.TipsUtils.showFloatWordTips("跟注:" + this.callnum);
            console.log(this.byOpenId);
        } else if (e.target == this.grpHead2) {
            xlLib.TipsUtils.showFloatWordTips("点击玩家2");
            this.sendamessage2(EventConst.compareCard, this.UsId, this.byOpenId[2]);
            this.sendamessage(EventConst.botpour, this.callnum);
            xlLib.TipsUtils.showFloatWordTips("跟注:" + this.callnum);
            console.log("可以与2号玩家比牌");
            console.log(this.byOpenId);
        } else if (e.target == this.grpHead3) {
            xlLib.TipsUtils.showFloatWordTips("点击玩家3");
            this.sendamessage2(EventConst.compareCard, this.UsId, this.byOpenId[3]);
            this.sendamessage(EventConst.botpour, this.callnum);
            xlLib.TipsUtils.showFloatWordTips("跟注:" + this.callnum);
            console.log("可以与3号玩家比牌");
            console.log(this.byOpenId);
        } else if (e.target == this.grpHead4) {
            xlLib.TipsUtils.showFloatWordTips("点击玩家4");
            this.sendamessage2(EventConst.compareCard, this.UsId, this.byOpenId[4]);
            this.sendamessage(EventConst.botpour, this.callnum);
            xlLib.TipsUtils.showFloatWordTips("跟注:" + this.callnum);
            console.log("可以与4号玩家比牌");
            console.log(this.byOpenId);
        } else if (e.target == this._btn_menu) {
            xlLib.TipsUtils.showFloatWordTips("菜单");
            this.grp_menu.visible = true;
        } else if (e.target == this._btn_luckmoney) {
            xlLib.TipsUtils.showFloatWordTips("喜钱");
        } else if (e.target == this._btn_out) {
            this.grp_menu.visible = false;
            this.sendamessage(EventConst.isLeave, null);
        } else if (e.target == this._btn_setting) {
            this.grp_menu.visible = false;
            this.grp_setting_hint.visible = true;
            xlLib.TipsUtils.showFloatWordTips("设置");
        } else if (e.target == this._btn_record) {
            this.grp_menu.visible = false;
            xlLib.TipsUtils.showFloatWordTips("记录");
            xlLib.PopUpMgr.addPopUp(ZJHRecordPanl, null, true);
        } else if (e.target == this._btn_playmethod) {
            this.grp_menu.visible = false;
            xlLib.TipsUtils.showFloatWordTips("玩法");
            xlLib.PopUpMgr.addPopUp(ZJHHelpPanl, null, true);
        } else if (e.target == this._btn_feedback) {
            this.grp_menu.visible = false;
            this.grp_feedback_panel.visible = true;
            xlLib.TipsUtils.showFloatWordTips("反馈");
        } else if (e.target == this._btn_set_close) {
            this.grp_setting_hint.visible = false;
            xlLib.TipsUtils.showFloatWordTips("退出设置面板");
        } else if (e.target == this._btn_feedback_close) {
            this.grp_feedback_panel.visible = false
            xlLib.TipsUtils.showFloatWordTips("退出反馈面板");
        }
    }
    //-----------------------------------------------------------------------------
    private byOpenId: string[] = ['', '', '', '', ''];
    private abandonId: string[] = [];//临时存储弃牌玩家ID
    /**获取所有能和玩家比牌的玩家 */
    private onBiPaiClick() {
        this.byOpenId = [];
        for (let i = 1; i < this.playerOperatingState.length; i++) {
            if (this.playerOperatingState[i] != 3) {
                let user = UserInfo.getInstance().playes[i];
                this['img_bipailight' + i].visible = true;
                this["grpHead" + i].touchEnabled = true;
                this["grpHead" + i].touchChildren = false;
                this.byOpenId[i] = this.OtherPlayer[i];
                if (this.abandonId.length == 3) {
                    this.sendamessage2(EventConst.compareCard, this.UsId, this.OtherPlayer[i]);
                    this.sendamessage(EventConst.botpour, this.callnum);
                }
            }
        }
        this._btn_bipai.touchEnabled = false;
        xlLib.DisplayUtils.setComponentEnabled(this._btn_bipai, false);
    }

    //-----------------------------------------------------------------------------
    /**点击加注倍数按钮后隐藏 */
    private Clickaddtohide() {
        this._btn_jiazhu.touchEnabled = false;
        this.grp_btncm0.visible = false;
        xlLib.DisplayUtils.setComponentEnabled(this._btn_jiazhu, false);
    }

    private sendamessage(sendstr: string, bet: number): void {
        let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
        let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        //bet :下注倍数
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: playway.id,
            data: bet
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {

        }, this);
    }

    private sendamessage2(sendstr: string, open: string, byopen: string): void {
        let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
        let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        //bet :下注倍数
        let data = { "open": open, "byopen": byopen };
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: playway.id,
            data: data
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {

        }, this);
    }
    /**------------------------------------------------------------------------------------- */
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
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.onGameStatusChange, this);
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.addEventListener(EventConst.onUserBetSelect, this.gametype, this);
        EventUtil.addEventListener(EventConst.onUserSeeCard, this.Check, this);
        EventUtil.addEventListener(EventConst.onAiSeeCard, this.otherCheck, this);
        EventUtil.addEventListener(EventConst.onUserToCard, this.Thancard, this);
        EventUtil.addEventListener(EventConst.onUserAllPress, this.ALLIN, this);
        EventUtil.addEventListener(EventConst.onUserBetOrderUpdate, this.Bet, this);
        EventUtil.addEventListener(EventConst.onAiBetOrderUpdate, this.otherplayerBet, this);
        EventUtil.addEventListener(EventConst.onTimelyNotify, this.timeInfo, this);
        EventUtil.addEventListener(EventConst.onUserWaiveCard, this.discard, this);
        EventUtil.addEventListener(EventConst.onNowUserWaiveCard, this.discard, this);
        EventUtil.addEventListener(EventConst.onAiWaiveCard, this.otherdiscard, this);
        EventUtil.addEventListener(EventConst.onUserExceWaiveCard, this.disAutoCard, this);
        EventUtil.addEventListener(EventConst.onCheckout, this.settleaccount, this);
        EventUtil.addEventListener(EventConst.onUserLeave, this.cancelpapre, this);
        EventUtil.addEventListener(EventConst.onUserIsLeave, this.onClickoutBtn, this);
        //EventUtil.addEventListener(EventConst.onUserOutRoom, this.ocClickContuite, this);
        EventUtil.addEventListener(EventConst.onAiOperate, this.aioperate, this);


        this._btn_menu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_kanpai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiazhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_quanxia.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_qipai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_bipai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_continuegame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_luckmoney.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_genzhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_autogenzhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_cancelautogenzhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        //----------------------------------------------------------------------------------
        this["grpHead" + 1].addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this["grpHead" + 2].addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this["grpHead" + 3].addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this["grpHead" + 4].addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);

        this._btn_out.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_record.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_playmethod.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_set_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_feedback_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_feedback.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandler, this);
    }
    private onTouchStageHandler(evt: egret.Event): void {
        if (
            !(evt.target == this.grp_menu
                || evt.target == this._btn_menu
                || evt.target == this.menu_bg
                || evt.target == this._btn_out
                || evt.target == this._btn_setting
                || evt.target == this._btn_record
                || evt.target == this._btn_playmethod
                || evt.target == this._btn_feedback
            )
        ) {
            this.grp_menu.visible = false;
        }
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
    public oldMybotpGold: number = 1;
    public oldOtherbotpGold: number[] = [1, 1, 1, 1, 1];
    private goldarr: number[] = [];//存储所有玩家的初始金币数
    public dizhu: number;//玩家地注
    public shortTimegameStatue: number;//游戏状态
    public nowroundNum: number = 0;//当前轮数

    private onGameStatusChange(data: any): void {
        this._btn_continuegame.visible = false;
        this.gamestatue(data.param);
    }
    private gamestatue(data: any): void {
        /**0.准备中  1.开始游戏 2.游戏结束*/
        if (data.roomStatus == 0) {
            console.log("游戏状态是0");
            //this.grpprepare.visible = false;//准备提示弹框
            let zjhpaprePanl: ZJHpaprePanl = xlLib.PopUpMgr.addPopUp(ZJHpaprePanl, this, true, true, null, 1);
            zjhpaprePanl.TYPE_TAP = Const.TYPE_JINGDIANJINHUA;
            this.shortTimegameStatue = data.roomStatus;
        } else if (data.roomStatus == 1) {
            this['img_light' + data.index].visible = true;
            this.playerSeria = data.index;
            console.log("游戏开始，发牌");
            this.grp_roungNum.visible = true;
            this.shortTimegameStatue = data.roomStatus;
            this.zhangIndex = UserInfo.getInstance().findSeatNumber(data.index);
            this.flyIndex0 = UserInfo.getInstance().findSeatNumber(data.index);
            this.deskNum(true);
            this.lab_dizhu_num.text = String(data.score / 100);//最小底注
            this.lab_dingzhu_num.text = String(data.maxScore / 100);//最大顶注
            this.dizhu = data.golds / 500;
            this.lab_deskGolds.text = String(data.golds / 100);//牌桌底注
            this.botpGolds(true);
            //玩家下的地注
            for (let i = 0; i < 5; i++) {
                this['lab_xzgold' + i].text = data.golds / 500;
            }
            this.cardEffect();//飞牌动动作

        } else if (data.roomStatus == 2) {
            this.shortTimegameStatue = data.roomStatus;
            console.log("游戏结束");
        }
        for (let key in data.goldMap) {
            console.log("--------------" + key);
            console.log("------------" + data.goldMap[key]);
            this.nowUserGolds = this.goldarr[0] / 100;
            this.goldarr.push(data.goldMap[key]);
            this.labelGold0.text = String(this.goldarr[0] / 100);
        }

        for (let i = 1; i < this.goldarr.length; i++) {
            this['grpHead' + i].setOtherGold(this.goldarr[i] / 100);
        }
        this._btn_kanpai.touchEnabled = true;

    }
    /**玩家看牌 */
    private Check(data: any): void {
        //if (data.param.command == "onUserSeeCard" && UserInfo.getInstance().uid == data.param.userId) {
        if (data.param.code == 200) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            xlLib.TipsUtils.showFloatWordTips("看牌");
            console.log("看牌");
            let poke = {
                type: data.param.cardGenre,//牌型
                value: data.param.cardtype //牌值
            };
            this.onKanPaiClick(poke);
            this['imgstatus_bg' + data.param.index].source = 'gf_dialogue_png';
            this['imgstatus' + data.param.index].source = 'gf_dialogue_kanpai_png';
            this.OnOperateQipao(data.param.index);
            this._btn_kanpai.visible = false;
            this.playerOperatingState[data.param.index] = 2;//已看牌
        }
    }
    /**AI看牌 */
    //private cardmaodian = []; //牌的锚点
    private otherCheck(data: any): void {
        if (data.param.code == 200) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            let seatnum = UserInfo.getInstance().findSeatNumber(data.param.index);
            for (let i = 0; i < 3; i++) {
                if (i != 1) {
                    var card0 = this['grpCard' + seatnum + '_' + i];

                    card0.anchorOffsetX = card0.width / 2;
                    card0.anchorOffsetY = card0.height / 2;
                    card0.y = card0.y + card0.anchorOffsetY;
                    if (i == 0) {
                        egret.Tween.get(card0).to({ rotation: -18 }, 600, egret.Ease.sineIn);
                    } else if (i == 2) {
                        egret.Tween.get(card0).to({ rotation: 18 }, 600, egret.Ease.sineIn);
                    }

                }

            }
            this['imgstatus_bg' + seatnum].source = 'gf_dialogue_png';
            this['imgstatus' + seatnum].source = 'gf_dialogue_kanpai_png';
            this.OnOperateQipao(seatnum);
            this['imgis_kanpai' + seatnum].source = 'gf_flag_ykp_png';

            this.playerOperatingState[seatnum] = 2;
        }

    }
    private numtime: number;//剩余操作时间
    private betarr: string[] = [];//存储可以下的注数 数组
    private callnum: number;//存放每次能加注的倍数
    private UsId: string;//存储我的id
    public nowUserGolds: number;//当前玩家剩余金币
    public shortGold: number;//当前玩家剩余金币不足，
    public playersData: any[] = [];//存储玩家信息
    /**判断玩家操作 接收下注类型，操作时间*/
    private gametype(data: any): void {
        if (data.param.code == 200) {
            this['img_light' + this.playerSeria].visible = false;
            this['img_light' + data.param.index].visible = true;
            this.playerSeria = data.param.index;
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            this._btn_autogenzhu.visible = false;
            this.img_autogenzhu.visible = false;
            this.img_genzhu.visible = true;
            this._btn_genzhu.visible = true;
            this.betarr = [];
            this.numtime = data.param.seconds;
            this.UsId = data.param.userId;
            console.log(data);
            if (this.playerOperatingState[data.param.index] != 2) {
                this.startCountDown(this.numtime);
            }
            /**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
            var point: egret.Point = ZJHUtil.getInstance().getPlayerIconPos(data.param.index);
            //let operateTimer: OperateTimer = new OperateTimer();
            this.operateTimer.x = point.x + 65;
            this.operateTimer.y = point.y + 84;
            this.addChild(this.operateTimer);
            this.operateTimer.play();
            this.setChildIndex(this.operateTimer, this.numChildren - 1);
            /**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
            //this.betarr = data.param.limit.split(",");
            console.log("可以进行加注操作*********************************");
            this._btn_jiazhu.visible = true;
            this._btn_jiazhu.touchEnabled = true;
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiazhu, true);//按钮恢复颜色
            let index: number = 0;
            let all: boolean = false;
            for (let key in data.param.butPourMap) {
                console.log("--------------" + key);
                console.log("------------" + data.param.butPourMap[key]);
                this.betarr.push(key);
                this['labchip' + index].text = key;
                if (data.param.butPourMap[key] == false) {
                    this["_btn_jiacm_" + index].touchEnabled = false;
                } else {
                    all = true;
                }
                index++
            }
            if (!all) {
                this._btn_jiazhu.touchEnabled = false;
                xlLib.DisplayUtils.setComponentEnabled(this._btn_jiazhu, false);
            }
            /**可以进行比牌 */
            if (data.param.compare == true && data.param.code == 200) {
                console.log("compare=true可以比牌");
                this.lab_tankNumber.text = data.param.followPour;
                this.lab_tankNumber.visible = true;
                this._btn_bipai.visible = true;
                this._btn_bipai.touchEnabled = true;
                xlLib.DisplayUtils.setComponentEnabled(this._btn_bipai, true);//按钮恢复颜色
            }
            /**可以进行跟注 */
            this.isCall = true;
            this.img_genzhu.source = "lab_genzhu_png";
            this.callnum = data.param.followPour;
            this.lab_callNumber.text = data.param.followPour;
            this.lab_callNumber.visible = true;
            this._btn_genzhu.touchEnabled = true;
            xlLib.DisplayUtils.setComponentEnabled(this._btn_genzhu, true);//按钮恢复颜色
            this.isoperat = true;

            /**金币不足 全压 */
            //this.nowUserGolds=this.goldarr[0] / 100;
            console.log("当前玩家剩余金币，其他玩家下的注，当前应下注数" + this.nowUserGolds, this.notAbandbotp, data.param.followPour);
            if (this.nowUserGolds < this.notAbandbotp || (this.nowUserGolds >= this.notAbandbotp && this.nowUserGolds < data.param.followPour)) {

                this.lab_tankNumber.visible = false;
                this._btn_bipai.visible = false;
                this._btn_quanxia.visible = true;
                this.img_quanya.visible = true;
                this.lab_quanyaNumber.visible = true;
                this.lab_quanyaNumber.text = (this.nowUserGolds).toString();
                this.shortGold = this.nowUserGolds;
            }
        }
    }
    private operateTimer: OperateTimer = new OperateTimer();
    /**判断AI操作 接收下注类型，操作时间*/
    private aioperate(data: any): void {
        if (data.param.code == 200) {
            var point: egret.Point = ZJHUtil.getInstance().getPlayerIconPos(data.param.index);
            //let operateTimer: OperateTimer = new OperateTimer();
            this.operateTimer.x = point.x + 65;
            this.operateTimer.y = point.y + 84;
            this.addChild(this.operateTimer);
            this.setChildIndex(this.operateTimer, this.numChildren - 1);
            this.operateTimer.play();
            this['img_light' + this.playerSeria].visible = false;
            this['img_light' + data.param.index].visible = true;
            this.playerSeria = data.param.index;
        }
    }
    /**玩家下注*/
    public playerSeria: number = 0;//玩家序号
    private Bet(data: any): void {
        if (data.param.code == 200) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            this.onGenZhuClick(data.param.index, data.param.data);
            this._btn_genzhu.visible = false;
            this.img_genzhu.visible = false;
            this.lab_callNumber.visible = false;
            this._btn_bipai.touchEnabled = false;
            xlLib.DisplayUtils.setComponentEnabled(this._btn_bipai, false);//按钮恢复颜色
            this.lab_deskGolds.text = (data.param.golds / 100).toString();//玩家下注更新牌桌金币数
            for (let key in data.param.goldMap) {
                console.log("--------------" + key);
                console.log("------------" + data.param.goldMap[key]);
                this.labelGold0.text = String(data.param.goldMap[key] / 100);//玩家下注更新金币数
                this.nowUserGolds = data.param.goldMap[key] / 100;
            }
            this.lab_tankNumber.text = String(data.param.data / 100);
            this.lab_callNumber.text = String(data.param.data / 100);
            this.oldMybotpGold += data.param.data / 100;
            this.lab_xzgold0.text = String(this.oldMybotpGold);


            this['imgstatus_bg' + data.param.index].source = 'gf_dialogue_png';
            this['imgstatus' + data.param.index].source = 'gf_dialogue_genzhu_png';
            this.OnOperateQipao(data.param.index);
        }
    }
    public notAbandbotp: number = 0;//存储AI当前下注数
    public therGolds: number = 0;//更新Ai金币
    public otherId: string;
    /**AI下注*/
    private otherplayerBet(data: any): void {
        //if (data.param.command == "onAiBetOrderUpdate" && UserInfo.getInstance().uid != data.param.userId) {
        if (data.param.code == 200) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            this.onPlayerGenZhu(data.param.index, data.param.data);
            this.lab_deskGolds.text = (data.param.golds / 100).toString();//玩家下注更新牌桌金币数
            //let otherId: string;
            //let therGolds: number;
            //下注更新其他玩家金币
            for (let key in data.param.goldMap) {
                console.log("--------------" + key);
                console.log("------------" + data.param.goldMap[key]);
                this.otherId = key;
                this.therGolds = data.param.goldMap[key]
            }
            for (let i = 1; i < this.OtherPlayer.length; i++) {
                if (this.OtherPlayer[i] == this.otherId) {
                    this['grpHead' + i].setOtherGold(this.therGolds / 100);
                }
            }
            this.oldOtherbotpGold[data.param.index] += data.param.data / 100;
            this['lab_xzgold' + data.param.index].text = String(this.oldOtherbotpGold[data.param.index]);
            this.notAbandbotp = data.param.data / 100;
            this['imgstatus_bg' + data.param.index].source = 'gf_dialogue_png';
            this['imgstatus' + data.param.index].source = 'gf_dialogue_genzhu_png';
            this.OnOperateQipao(data.param.index);
            console.log(this.notAbandbotp);
        }
    }

    /**全压*/
    private ALLIN(data: any): void {
        //if (data.param.command == "onUserAllPress" && data.param.code == 200) {
        if (data.param.code == 200) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            console.log("金币不足玩家全压", data);
            for (let key in data.param.goldMap) {
                console.log("--------------" + key);
                console.log("------------" + data.param.goldMap[key]);
                this.labelGold0.text = String(data.param.goldMap[key]);//全压更新玩家金币数
            }
            //执行比牌动作..........{}
        }
    }
    /***(推送*异常及时通知 比牌结果推送)*/
    private timeInfo(data: any): void {
        if (data.param.command == "onTimelyNotify" && data.param.autoButState == 300) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            console.log("玩家全压和其他玩家比牌", data);
            console.log(data.param.json);
            this.operateTimer.stop();
            let losepoke = {
                value: data.param.json.loseCard,//牌值
                type: data.param.json.loseType //牌型
            };//牌型
            /**AI玩家胜利 */
            if (data.param.data == 1) {
                console.log("AI全压获胜");
                if (this.playerOperatingState[0] != 2) {
                    this.onKanPaiClick(losepoke);
                    for (var i = 0; i < 3; i++) {
                        let val = losepoke.value[i];
                        var card = this['grpCard' + 0 + '_' + i];
                        xlLib.DisplayUtils.setComponentEnabled(card, false);
                    }
                } else if (this.playerOperatingState[0] == 2) {
                    for (var i = 0; i < 3; i++) {
                        let val = losepoke.value[i];
                        var card = this['grpCard' + 0 + '_' + i];
                        xlLib.DisplayUtils.setComponentEnabled(card, false);
                    }
                    UserInfo.getInstance().isGameStart = false;
                }
                this.playerOperatingState[data.param.index] = 3;
                this.abandonStateBtn();
            } else if (data.param.data == 0) {
                //执行AI玩家图像被轰炸动作{}................
                console.log("玩家全压获胜");
                this.anotherDontCard(data.param.index);
            }
        } else if (data.param.command == "onTimelyNotify" && data.param.autoButState == 100) {
            this.nowroundNum = data.param.circleNum;
            //开启自动跟注
            this.anniuliuguang = new DragonBonesSprite('anniuliuguang', "Sprite");
            this.anniuliuguang.width = this.width;
            this.anniuliuguang.height = this.height;
            this.anniuliuguang.x = 1300;
            this.anniuliuguang.y = 778;
            this.addChild(this.anniuliuguang);
            this.anniuliuguang.play("Sprite");
            console.log("++++++++++++++++++++++++++data.param.state == 100", data);
            this.img_autogenzhu.visible = false;
            this.img_autogenzhu.visible = false;
            this._btn_cancelautogenzhu.visible = true;
            this.img_cancelautogenzhu0.visible = true;
            this.img_cancelautogenzhu1.visible = true;
        } else if (data.param.command == "onTimelyNotify" && data.param.autoButState != 100 && data.param.autoButState != 300) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            //关闭自动跟注
            if (this.anniuliuguang) {
                this.anniuliuguang.stop("Sprite");
                if (this.anniuliuguang.parent) {
                    this.anniuliuguang.parent.removeChild(this.anniuliuguang);
                    this.anniuliuguang = null;
                }
            }
            console.log("++++++++++++++++++++++++++data.param.state == 200", data);
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this._btn_cancelautogenzhu.visible = false;
            this.img_cancelautogenzhu0.visible = false;
            this.img_cancelautogenzhu1.visible = false;
        }
    }

    /**玩家比牌结果*/
    private Thancard(data: any): void {
        if (data.param.code == 200) {
            setTimeout(() => {
                for (let i = 1; i < 5; i++) {
                    this['img_bipailight' + i].visible = false;
                }
            }, 200)
            console.log("玩家比牌结果", data.param.json);
            let losepoke = {
                value: data.param.json.loseCard,//牌值
                type: data.param.json.loseType //牌型
            };
            this.operateTimer.stop();
            //执行玩家图像被轰炸动作{}................玩家自己比牌输
            if (UserInfo.getInstance().uid == data.param.userId) {
                if (this.playerOperatingState[data.param.index] != 2) {
                    this._btn_kanpai.visible = false;
                    this.onKanPaiClick(losepoke);
                    this['imgCardType' + data.param.index].source = 'gf_flag_bpsb_png';
                    this.playerOperatingState[data.param.index] = 3
                    this.abandonStateBtn();
                } else if (this.playerOperatingState[data.param.index] == 2) {
                    this.playClickSound(ZJHUtil.getInstance().getSoundEffect(7));
                    for (var i = 0; i < 3; i++) {
                        var card = this['grpCard' + 0 + '_' + i];
                        card.source = 'gf_poker0_png';
                        this[0].source = 'qznn_card_' + this[1];
                        [card, losepoke.value[i]]
                    }
                    this['imgCardbg' + data.param.index].source = 'gf_pxzs_png';
                    this['imgCardType' + data.param.index].visible = true;
                    this['imgCardType' + data.param.index].source = 'gf_flag_bpsb_png';
                    this._btn_kanpai.visible = false;
                    this.playerOperatingState[0] = 3
                    this.abandonStateBtn();
                    if (this.anniuliuguang) {
                        this.anniuliuguang.stop("Sprite");
                        if (this.anniuliuguang.parent) {
                            this.anniuliuguang.parent.removeChild(this.anniuliuguang);
                            this.anniuliuguang = null;
                        }
                    }
                }
                /**剩余人数2个 */
                if (data.param.playerNum == 2) {

                }
            } else if (UserInfo.getInstance().uid != data.param.userId) {
                //执行AI图像被轰炸动作{}................AI比牌输
                this['imgis_kanpai' + data.param.index].visible = false;
                this.onPlayerKanPai(data.param.index, losepoke);
                this['imgCardType' + data.param.index].source = 'gf_flag_bpsb_png';
                this.playerOperatingState[data.param.index] = 3
                xlLib.DisplayUtils.setComponentEnabled(this._btn_jiazhu, false);
                this._btn_autogenzhu.visible = true;
                this.img_autogenzhu.visible = true;

            }

            //this.anotherDontCard(data.param.index);
            //UserInfo.getInstance().playes[i]
        }
    }

    /**玩家弃牌*/
    private discard(data: any): void {
        if (data.param.code == 200) {
            console.log(data);
            let poke = {
                type: data.param.cardGenre,//牌型
                value: data.param.cardtype //牌值
            };
            for (var i = 0; i < 3; i++) {
                let val = poke.value[i];
                var card = this['grpCard' + data.param.index + '_' + i];
                card.source = 'gf_poker0_png';
                egret.Tween.get(card).to({ scaleX: 0 }, 200).call(function () {
                    this[0].source = 'qznn_card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 100);
                }, [card, val]);
            }
            if (data.param.index != 0) {
                this.abandonId.push(data.param.userId);
            }
            this.operateTimer.stop();
            this.OnOperateQipao(data.param.index);
            this.playerOperatingState[data.param.index] = 3;
            this.abandonStateBtn();
            UserInfo.getInstance().isGameStart = false;
            if (this.anniuliuguang) {
                this.anniuliuguang.stop("Sprite");
                if (this.anniuliuguang.parent) {
                    this.anniuliuguang.parent.removeChild(this.anniuliuguang);
                    this.anniuliuguang = null;
                }
            }
        }
    }
    /**存储所有玩家id信息 */
    private OtherPlayer: string[] = [];
    private seatnum: number;//
    /**AI弃牌*/
    private otherdiscard(data: any): void {
        if (data.param.code == 200) {
            this.seatnum = UserInfo.getInstance().findSeatNumber(data.param.index);
            /*************************************************************** */
            var point: egret.Point = ZJHUtil.getInstance().getCoinsPos();
            var cardPos = [];
            for (var i = 0; i < 3; i++) {
                var card = this['grpCard' + data.param.index + '_' + i];
                card.source = 'gf_poker0_2_png';
                card.alpha = 1;
                var pos: egret.Point = new egret.Point;
                pos.x = point.x;
                pos.y = point.y;
                /**弃牌完整动作 */
                /* egret.Tween.get(card).to({ x: pos.x, y: pos.y, alpha: 0 }, 200).call((index:number)=> {
                     card.x=this.orginPlayerCardPos[data.param.index][index].x;
                     card.y=this.orginPlayerCardPos[data.param.index][index].y;
                     card.alpha = 1;
                 },this,[i]);*/
            }
            /************************************** */
            this.operateTimer.stop();
            this.anotherDontCard(this.seatnum);
            this['imgstatus_bg' + this.seatnum].source = 'gf_dialogue_png';
            this['imgstatus' + this.seatnum].source = 'gf_dialogue_qipai_png';
            this['img_abandon' + this.seatnum].source = 'gf_flag_qp_png';
            this.OnOperateQipao(this.seatnum);
            this['imgis_kanpai' + this.seatnum].source = '';
            this.abandonId.push(data.param.userId);
            this.playerOperatingState[data.param.index] = 3;

        }
    }
    //玩家弃牌,结算按钮状态
    private abandonStateBtn(): void {
        this._btn_continuegame.visible = true;
        this.grp_btncm0.visible = false;
        this._btn_jiazhu.visible = false;
        this._btn_kanpai.visible = false;
        this._btn_qipai.visible = false;
        this._btn_genzhu.visible = false;
        this._btn_autogenzhu.visible = false;
        this._btn_cancelautogenzhu.visible = false;
        this._btn_bipai.visible = false;
        this._btn_quanxia.visible = false;
        this.img_qipai.visible = false;
        this.img_jiazhu.visible = false;
        this.img_bipai.visible = false;
        this.img_quanya.visible = false;
        this.img_genzhu.visible = false;
        this.img_autogenzhu.visible = false;
        this.img_cancelautogenzhu0.visible = false;
        this.img_cancelautogenzhu1.visible = false;
        this.lab_tankNumber.visible = false;
        this.lab_quanyaNumber.visible = false;
        this.lab_callNumber.visible = false;
    }
    //设置玩家弃牌 颜色
    private anotherDontCard(seatPos: number): void {
        this['imgCardbg' + seatPos].source = '';
        this['imgCardType' + seatPos].source = '';
        this['labstatus' + seatPos].text = '';
        var cardPos = [];
        for (var j = 0; j < 3; j++) {
            var card = this['grpCard' + seatPos + '_' + j];
            card.source = 'gf_poker0_2_png';
            card.anchorOffsetX = card.width / 2;
            var pos: egret.Point = new egret.Point;
            pos.x = card.x;
            pos.y = card.y;
            cardPos[j] = pos;
        }
        //this.orginPlayerCardPos[seatPos] = cardPos;
        this.playerOperatingState[seatPos] = 3;//其他玩家弃牌状态

    }
    /**超时自动弃牌*///自己不进行任何操作超过操作时间 视为弃牌状态 
    private disAutoCard(data: any): void {
        if (data.param.code == 200) {
            console.log(this.addtime);
            let poke = {
                type: data.param.cardGenre,//牌型
                value: data.param.cardtype //牌值
            };
            for (var i = 0; i < 3; i++) {
                let val = poke.value[i];
                var card = this['grpCard' + 0 + '_' + i];
                card.source = 'gf_poker0_png';
                egret.Tween.get(card).to({ scaleX: 0 }, 200).call(function () {
                    this[0].source = 'qznn_card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 100);
                }, [card, val]);
            }
            this.operateTimer.stop();
            xlLib.TipsUtils.showFloatWordTips("自动弃牌");
            this.playerOperatingState[data.param.index] = 3;//玩家弃牌状态
            this.abandonStateBtn();
            UserInfo.getInstance().isGameStart = false;
            if (this.anniuliuguang) {
                this.anniuliuguang.stop("Sprite");
                if (this.anniuliuguang.parent) {
                    this.anniuliuguang.parent.removeChild(this.anniuliuguang);
                    this.anniuliuguang = null;
                }
            }
        }
    }


    public mygameTyp: boolean;//是否有可以离开游戏
    /**取消准备 */
    private cancelpapre(data: any): void {
        if (data.param.code == 200) {
            if (this._btn_continuegame.visible == false)
                this._btn_continuegame.visible = true;
        }
    }

    /**点击退出，收到推送 */
    private onClickoutBtn(data: any): void {
        //接收状态 leave (true 可离开 false 不可离开)
        if (data.param.code == 200) {
            if (data.param.leave == true) {
                let zjhpaprePanl: ZJHpaprePanl = xlLib.PopUpMgr.addPopUp(ZJHIsLiveRoom, this, true, true, null, 1);
            } else if (data.param.leave == false) {
                let zjhpaprePanl: ZJHpaprePanl = xlLib.PopUpMgr.addPopUp(ZJHNotLiveRoom, this, true, true, null, 1);
            }
        }
    }

    /**结算游戏结束 */
    private settleaccount(data: any): void {
        if (data.param.code == 200) {
            if (this.playerOperatingState[data.param.index] != 2) {
                let poke = {
                    type: data.param.cardGenre,//牌型
                    value: data.param.cardtype //牌值
                };
                for (var i = 0; i < 3; i++) {
                    let val = poke.value[i];
                    var card = this['grpCard' + data.param.index + '_' + i];
                    card.source = 'gf_poker0_png';
                    egret.Tween.get(card).to({ scaleX: 0 }, 200).call(function () {
                        this[0].source = 'qznn_card_' + this[1];
                        egret.Tween.get(this[0]).to({ scaleX: 1 }, 100);
                    }, [card, val]);
                }
            }
            this.operateTimer.play();
            if (this.anniuliuguang) {
                this.anniuliuguang.stop("Sprite");
                if (this.anniuliuguang.parent) {
                    this.anniuliuguang.parent.removeChild(this.anniuliuguang);
                    this.anniuliuguang = null;
                }
            }
            if (data.param.index != 0) {
                var point: egret.Point = ZJHUtil.getInstance().getP(data.param.index);
                let zjheffectwin2: ZJHEffectWin2View = new ZJHEffectWin2View();
                zjheffectwin2.x = point.x;
                zjheffectwin2.y = point.y;
                this.addChild(zjheffectwin2);
                zjheffectwin2.play();
                setTimeout(() => {
                    zjheffectwin2.stop();
                    zjheffectwin2.visible = false;
                }, 1000)

            } else {
                var point: egret.Point = ZJHUtil.getInstance().getP(data.param.index);
                let zjheffectwin0: ZJHEffectWin1View = new ZJHEffectWin1View();
                zjheffectwin0.x = point.x;
                zjheffectwin0.y = point.y;
                this.addChild(zjheffectwin0);
                zjheffectwin0.play();
                setTimeout(() => {
                    zjheffectwin0.stop();
                    zjheffectwin0.visible = false;
                }, 1000)
            }

            console.log('+++++++++++++++++++0000000000', point.x);
            console.log(point.y);


            this.operateTimer.stop();
            this.abandonStateBtn();
        }
    }

    //加入房间新玩家
    public playerJoinRoom(data): void {
        this.playersData.push(data);
        console.log('+++++++++++++++++++++++++++++存储玩家信息+++++++++++++++++++++++', this.playersData);
        console.log(data._obj.player.id);
        this.OtherPlayer.push(data._obj.player.id);
        console.log(UserInfo.getInstance().myPlayer.id);
        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {

        } else {
            this['grpHead' + data._obj.player.index].visible = true;
            this['grpHead' + data._obj.player.index].setUserInfo(data._obj.player.username, data._obj.player.goldcoins / 100, "women7_png");
        }
        xlLib.PopUpMgr.removePopUp(ZJHpaprePanl, 1);

        this.isprepare = false;
    }
    /**
    * 自己加入房间
    */
    private addPlayers(data): void {

        //设置自己信息
        this.OtherPlayer.push(data._obj.player[0].id);
        this.playersData.push(data);
        if (data._obj.player[0].id == UserInfo.getInstance().myPlayer.id) {
            this.grpHead0.visible = true;
            this.labelHead0.text = UserInfo.getInstance().myPlayer.username;
            this.labelGold0.text = UserInfo.getInstance().myPlayer.goldcoins / 100 + "";
            this.imghead0.source = "women7_png";
            this.playerOperatingState[0] = 0;
        }
        //设置其他玩家信息  for (let i = 1; i < 10; i++) {
        for (let i = 1; i < 5; i++) {
            this.playerOperatingState[i] = 0;
            if (data._obj.player[i] != null) {
                this['grpHead' + i].visible = true;
                this['grpHead' + i].setUserInfo(UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins / 100, "women7_png");//data._obj.player[i].headimg  
                //this.nodiscard.push(data._obj.player[i].id);
            } else {
                this['grpHead' + i].setUserInfo("", "", "", "");
            }
        }
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
    /**玩家跟注 */
    private onGenZhuClick(index, gold) {
        var p: egret.Point = new egret.Point();
        p.x = 580;
        p.y = 620;
        this.showCoins(p, gold);
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
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(type));
    }
    //显示筹码
    private showCoins(pos: egret.Point, num): void {
        console.log("显示筹码");
        var isRemove: boolean = false;
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(8));
        var point: egret.Point = ZJHUtil.getInstance().getCoinsPos();
        var arr = ZJHUtil.getInstance().coinsType(pos, num);//Arr
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
        this.flyIntval = setInterval(this.playCardFly.bind(this), 0);
    }
    private playCardFly(data: any): void {
        var card: eui.Image = this['grpCard' + this.flyIndex0 + '_' + this.flyIndex1];
        card.source = 'gf_poker0_1_png';
        card.x = 713.5;
        card.y = 300;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        card.rotation = 0;
        var pos = this.orginPlayerCardPos[this.flyIndex0][this.flyIndex1];
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y, rotation: 360 }, 400);
        // if (this.flyIndex0 == 9) {
        if (this.flyIndex1 == 2) {
            if (this.flyIndex0 == 4) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                if (this.zhangIndex == 0) {
                    clearInterval(this.flyIntval);
                    this.showControl();
                    return;
                }
            } else if (this.flyIndex0 == this.zhangIndex - 1) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                clearInterval(this.flyIntval);
                this.showControl();
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
    public showControl(): void {
        console.log("飞完牌+++++++++++++++++++++++++++++++++");
        this._btn_luckmoney.visible = true;
        this._btn_luckmoney.touchEnabled = true;
        this._btn_kanpai.visible = true;
        this._btn_autogenzhu.visible = true;//发完牌跟注，弃牌按钮显示
        this.img_autogenzhu.visible = true;
        this._btn_jiazhu.visible = true;
        this._btn_bipai.visible = true;
        this._btn_qipai.visible = true;
        this.img_qipai.visible = true;
        this.img_jiazhu.visible = true;
        this.img_bipai.visible = true;
        this.lab_tankNumber.visible = true;
        this.lab_tankNumber.text = String(this.dizhu);
        this.lab_callNumber.text = String(this.dizhu);
        xlLib.DisplayUtils.setComponentEnabled(this._btn_jiazhu, false);
        xlLib.DisplayUtils.setComponentEnabled(this._btn_bipai, false);
    }
    /**自己点击看牌 */
    private onKanPaiClick(poke: any) {
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(7));
        for (var i = 0; i < 3; i++) {
            var card = this['grpCard' + 0 + '_' + i];
            card.source = 'gf_poker0_png';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'qznn_card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]]);
        }
        this['imgCardbg' + 0].source = 'gf_pxzs_png';
        this['imgCardType' + 0].source = ZJHUtil.getInstance().getCardType(poke.type);
    }

    /**其他玩家看牌 */
    private onPlayerKanPai(index: number, poke: any) {
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(7));
        for (var i = 0; i < 3; i++) {
            var card = this['grpCard' + index + '_' + i];
            card.source = 'gf_poker0_1_png';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'qznn_card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]]);
        }
        this['imgCardType' + index].visible = true;
        this['imgCardbg' + index].source = 'gf_pxzs_png';
        this['imgCardType' + index].source = ZJHUtil.getInstance().getCardType(poke.type);
    }

    /**玩家操作气泡变化 */
    private OnOperateQipao(index: number) {
        this['imgstatus_bg' + index].alpha = 1;
        this['imgstatus' + index].alpha = 1;
        var point: egret.Point = ZJHUtil.getInstance().operateTypeBGPos(index);
        var roint: egret.Point = ZJHUtil.getInstance().operateTypePos(index);
        var tx = point.x;
        var ty = point.y - 59;
        var ox = roint.x;
        var oy = roint.y - 55;
        egret.Tween.get(this['imgstatus_bg' + index]).to({ x: tx, y: ty, alpha: 0 }, 1500).call(() => {
            this['imgstatus_bg' + index].x = point.x;
            this['imgstatus_bg' + index].y = point.y;
        }, );
        egret.Tween.get(this['imgstatus' + index]).to({ x: ox, y: oy, alpha: 0 }, 1400).call(() => {
            this['imgstatus' + index].x = roint.x;
            this['imgstatus' + index].y = roint.y;
        }, );
    }
    private setStartBet(): void {

        clearInterval(this.interval);
        this.showGameTips(2);
        if (!this.isSysBanker && !this.isChangeBanker) {
            this.lastGameBankerNum--;
        }
        if (this.isChangeBanker) {
            this.isChangeBanker = false;
        }
    }
    private resetGame(): void {
        this.initData();
        //this.getOrginCardPos();
        for (var index = 0; index < 5; index++) {
            for (var j = 0; j < 3; j++) {
                let card: eui.Image = this['grpCard' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
                this['grpCard' + index + '_' + j].source = '';
                this['grpCard' + index + '_' + j].x = this.orginPlayerCard[index][j].x;
                this['grpCard' + index + '_' + j].x = this.orginPlayerCard[index][j].y;
                this['grpCard' + index + '_' + j].anchorOffsetX = 0;
                this['grpCard' + index + '_' + j].anchorOffsetY = 0;

            }
            this['lab_xzgold' + index].text = '';
            this['img_xzgold_bg' + index].visible = false;
            this['img_xzgold' + index].visible = false;
            this['imgstatus_bg' + index].source = '';
            this['imgis_kanpai' + index].source = '';
            this['imgstatus' + index].source = '';
            this['labstatus' + index].text = '';
            this['imgCardbg' + index].source = '';
            this['imgCardType' + index].source = '';
            this['imgstatus_bg' + index].alpha = 1;
            this['imgstatus' + index].alpha = 1;
        }
        for (var index = 1; index < 5; index++) {
            this['img_abandon' + index].source = '';
        }
        this.operateTimer.stop();
        this.playerOperatingState = [0, 0, 0, 0, 0];
        this.lab_deskGolds.text = "";
        this.isCanBets = true;
        this.isBets = false;
        //this.isCardEffectShow = false;
        this.byOpenId = ['', '', '', '', ''];
        this.abandonId = [];
        this.addtime = 0;

        this.oldMybotpGold = 1;
        this.oldOtherbotpGold = [1, 1, 1, 1, 1];
        this.goldarr = [];
        this.dizhu = 0;
        this.shortTimegameStatue = 0;
        this.nowroundNum = 0;

        this.numtime = 0;
        this.betarr = [];
        this.callnum = 0;
        this.UsId = '';
        this.nowUserGolds = 0;
        this.shortGold = 0;
        this.notAbandbotp = 0;
        this.therGolds = 0;
        this.otherId = '';
        this.OtherPlayer = [];
        this.seatnum = 0;
        this._btn_continuegame.visible = false;
        xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, true);
        xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_1, true);
        xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_2, true);
        xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_3, true);
        xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_4, true);
        xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_5, true);
        this._btn_jiacm_0.touchEnabled = true;
        this._btn_jiacm_1.touchEnabled = true;
        this._btn_jiacm_2.touchEnabled = true;
        this._btn_jiacm_3.touchEnabled = true;
        this._btn_jiacm_4.touchEnabled = true;
        this._btn_jiacm_5.touchEnabled = true;
        this.grpCoins.removeChildren();
        this.playerSeria = 0;
        this.playersData = [];
        //this.labCountdown0.text = '0';
        //this.labCountdown1.text = '0';
        /*this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
       this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
       this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };*/

        /*  while (this.grpCoins.numChildren > 0) {
              this.grpCoins.removeChildAt(0);
          }*/
    }

    //========================== Second Panel ==============================
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
    }
    private onTouchCloseSecondPanel(): void {
    }
    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }
    /*public dispose(): void {

        xlLib.SceneMgr.instance.changeScene(Lobby);
    }*/

    public destroy(): void {
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.onGameStatusChange, this);
        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.removeEventListener(EventConst.onUserBetSelect, this.gametype, this);
        EventUtil.removeEventListener(EventConst.onUserSeeCard, this.Check, this);
        EventUtil.removeEventListener(EventConst.onAiSeeCard, this.otherCheck, this);
        EventUtil.removeEventListener(EventConst.onUserToCard, this.Thancard, this);
        EventUtil.removeEventListener(EventConst.onUserAllPress, this.ALLIN, this);
        EventUtil.removeEventListener(EventConst.onUserBetOrderUpdate, this.Bet, this);
        EventUtil.removeEventListener(EventConst.onAiBetOrderUpdate, this.otherplayerBet, this);
        EventUtil.removeEventListener(EventConst.onUserWaiveCard, this.discard, this);
        EventUtil.removeEventListener(EventConst.onNowUserWaiveCard, this.discard, this);
        EventUtil.removeEventListener(EventConst.onAiWaiveCard, this.otherdiscard, this);
        EventUtil.removeEventListener(EventConst.onUserExceWaiveCard, this.disAutoCard, this);
        EventUtil.removeEventListener(EventConst.onCheckout, this.settleaccount, this);
        EventUtil.removeEventListener(EventConst.onAiOperate, this.aioperate, this);
        EventUtil.removeEventListener(EventConst.onUserLeave, this.cancelpapre, this);
        EventUtil.removeEventListener(EventConst.onUserIsLeave, this.onClickoutBtn, this);
        //EventUtil.removeEventListener(EventConst.onUserOutRoom, this.ocClickContuite, this);
        this._btn_menu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_kanpai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiazhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_jiacm_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_quanxia.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_qipai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_bipai.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_luckmoney.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_genzhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_autogenzhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_cancelautogenzhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);

        this["grpHead" + 1].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this["grpHead" + 2].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this["grpHead" + 3].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this["grpHead" + 4].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_out.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_setting.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_record.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_playmethod.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_feedback.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_set_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        this._btn_feedback_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClick, this);
        egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandler, this);
        if (this.cdTimer != null) {
            this.cdTimer.removeEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
        }
    }

}

