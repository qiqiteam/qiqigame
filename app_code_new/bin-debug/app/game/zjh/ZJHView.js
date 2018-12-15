var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 扎金花
 */
var ZJHView = (function (_super) {
    __extends(ZJHView, _super);
    function ZJHView() {
        var _this = _super.call(this) || this;
        _this.r = null;
        //-----------------------------------------------
        _this.interval = -1; // 游戏计时器间隔
        _this.selfbetsNum = {}; // 下注总计 
        _this.betsPostion = -1; // 下注位置 self
        _this.betsNum = 0; // 下注金额 self
        _this.cardResult = null; // 结算扑克结果(最后展示处理)
        _this.isChangeBanker = false; // 判断是否更换庄家
        _this.changeBankerObj = {}; // 更换庄家消息(在下一句开始处理)
        _this.isCanBets = true; // 是否可以下注(判断封盘)
        _this.poolBetArray = {}; // 奖池筹码
        _this.limitGold = 0; // 上庄限制 金币
        _this.limitVip = 0; // 上庄限制 Vip
        _this.curBankerRanking = -1; // 当前庄的排位
        _this.isApplyBanker = false; // 是否正在申请上庄
        _this.lastGameBankerNum = 0; // 剩余坐庄次数
        _this.isSysBanker = false; // 判断庄是否是系统
        _this.orginBankerCardPos = []; // 存储庄家扑克位置
        _this.orginPlayerCardPos = []; // 存储玩家扑克位置
        _this.isBanker = false; // 是否当庄 (判断是否可以退出)
        _this.isBets = false; // 是否下注 (判断是否可以退出)
        _this.maxUserData = null; // 最大玩家数据 (结算处理)
        _this.banker_total_gold = 0; // 庄家自身携带金币
        _this.isBoomBanker = false; // 是否爆庄
        _this.resultCaijin = 0; //结算玩家的彩金
        _this.totalCaijin = 0; //彩金总数
        _this.cdNum = 10; //倒计时计数
        _this.coinsNumArr = {}; //计数桌面4个方位的筹码个数
        _this.isCoinsReturn = true;
        _this.curRate = 0;
        _this.lastTouchBetTime = 0;
        _this.isCardEffectShow = false;
        // private testNum: number = 0;
        //------------------------------------------------------------
        _this.playerOperatingState = [0, 0, 0, 0, 0]; //（无任何操作：0 玩家出牌：1 玩家看牌：2 玩家弃牌：3 玩家自动跟注：4 玩家取消自动跟注：5）//按当前桌子以我为参照（我是0）排序
        _this.isClickjixuGameBtn = false; //是否点击过继续游戏按钮
        _this.isClickqipaiBtn = false; //是否点击过弃牌按钮
        _this.OnClickautogenzhutime = 0;
        //-----------------------------------------------------------------------------
        _this.byOpenId = ['', '', '', '', ''];
        _this.abandonId = [];
        /**发牌 */
        _this.oldMybotpGold = 1;
        _this.oldOtherbotpGold = [1, 1, 1, 1, 1];
        _this.goldarr = []; //存储所有玩家的初始金币数
        _this.nowroundNum = 0; //当前轮数
        _this.betarr = []; //存储可以下的注数 数组
        _this.notAbandbotp = 0; //存储其他玩家当前下注数
        _this.therGolds = 0; //更新其他玩家金币
        /**存储所有玩家id信息 */
        _this.OtherPlayer = [];
        _this.zhangIndex = 4; //庄的位置
        _this.flyIntval = 0; //
        _this.flyIndex0 = 4; //扑克位置(东西南北)
        _this.flyIndex1 = 0; //扑克(指定位置1，2，3)
        _this.skinName = "ZJHViewSkin";
        return _this;
        //this.r = r;
    }
    //------------------------------------------------------------
    ZJHView.prototype.childrenCreated = function () {
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
        var annular = new Annular(300, 300, 0, 200, 0xffffff);
        //this.addChild(annular);
        var opepro = new Opeprogress(173, 219, 10);
        this.addChild(opepro);
        this.gamestatue(UserInfo.getInstance().gameData);
    };
    ZJHView.prototype.initData = function () {
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.grpCoins.touchEnabled = false;
        /**----------------------------------------------------------- */
        this.isprepare = true;
        this.isoperat = false; //玩家操作状态
        this.isCall = false; //玩家跟注状态
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
        /**----------------------------------------------------------- */
    };
    //获取原始扑克的位置
    ZJHView.prototype.getOrginCardPos = function () {
        for (var index = 0; index < 5; index++) {
            // this['labCardResult' + index].text = '';
            this['imgCardbg' + index].source = '';
            this['imgCardType' + index].source = '';
            this['labstatus' + index].text = '';
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
                var card = this['grpCard' + index + '_' + j];
                card.source = '';
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos = new egret.Point;
                pos.x = card.x;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayerCardPos[index] = cardPos;
        }
        for (var index = 1; index < 5; index++) {
            this['img_abandon' + index].source = '';
        }
    };
    ZJHView.prototype.resize = function () {
    };
    ZJHView.prototype.OnClick = function (e) {
        if (e.target == this._btn_kanpai) {
            console.log("看牌");
            this.sendamessage(EventConst.seecard, null);
        }
        else if (e.target == this._btn_genzhu) {
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
        }
        else if (e.target == this._btn_autogenzhu) {
            this.sendamessage(EventConst.onAutoFollow, null);
            xlLib.TipsUtils.showFloatWordTips("自动跟注");
            this.playerOperatingState[0] = 4; //玩家自动跟注
        }
        else if (e.target == this._btn_cancelautogenzhu) {
            this.sendamessage(EventConst.closeAutoFollow, null);
            xlLib.TipsUtils.showFloatWordTips("取消自动跟注");
        }
        else if (e.target == this._btn_jiazhu) {
            this.grp_btncm0.visible = true;
        }
        else if (e.target == this._btn_jiacm_0) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[0]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[0]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
        }
        else if (e.target == this._btn_jiacm_1) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[1]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[1]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_1, false);
        }
        else if (e.target == this._btn_jiacm_2) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[2]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[2]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_1, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_2, false);
        }
        else if (e.target == this._btn_jiacm_3) {
            this.sendamessage(EventConst.botpour, parseInt(this.betarr[3]));
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this.Clickaddtohide();
            xlLib.TipsUtils.showFloatWordTips("加注金币:" + parseInt(this.betarr[3]));
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_0, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_1, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_2, false);
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiacm_3, false);
        }
        else if (e.target == this._btn_jiacm_4) {
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
        }
        else if (e.target == this._btn_jiacm_5) {
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
        }
        else if (e.target == this._btn_quanxia) {
            xlLib.TipsUtils.showFloatWordTips("全压");
            this.sendamessage(EventConst.pressure, null);
            this.onGenZhuClick(0, this.shortGold);
        }
        else if (e.target == this._btn_qipai) {
            this.sendamessage(EventConst.abandon, null);
            this.isClickqipaiBtn = true;
            xlLib.TipsUtils.showFloatWordTips("弃牌");
        }
        else if (e.target == this._btn_bipai) {
            this.onBiPaiClick();
            xlLib.TipsUtils.showFloatWordTips("比牌");
        }
        else if (e.target == this._btn_continuegame) {
            //继续游戏
            this.isClickjixuGameBtn = true;
            this.sendamessage(EventConst.outRoom, null);
            this.sendamessage(EventConst.joinroom, null);
            UserInfo.getInstance().isGameStart = true;
            this.resetGame(); //重置游戏场景
            xlLib.TipsUtils.showFloatWordTips("继续游戏");
        }
        else if (e.target == this.grpHead1) {
            xlLib.TipsUtils.showFloatWordTips("点击玩家1");
            console.log("可以与1号玩家比牌");
            this.sendamessage2(EventConst.compareCard, this.UsId, this.byOpenId[1]);
            this.sendamessage(EventConst.botpour, this.callnum);
            xlLib.TipsUtils.showFloatWordTips("跟注:" + this.callnum);
            console.log(this.byOpenId);
        }
        else if (e.target == this.grpHead2) {
            xlLib.TipsUtils.showFloatWordTips("点击玩家2");
            this.sendamessage2(EventConst.compareCard, this.UsId, this.byOpenId[2]);
            this.sendamessage(EventConst.botpour, this.callnum);
            xlLib.TipsUtils.showFloatWordTips("跟注:" + this.callnum);
            console.log("可以与2号玩家比牌");
            console.log(this.byOpenId);
        }
        else if (e.target == this.grpHead3) {
            xlLib.TipsUtils.showFloatWordTips("点击玩家3");
            this.sendamessage2(EventConst.compareCard, this.UsId, this.byOpenId[3]);
            this.sendamessage(EventConst.botpour, this.callnum);
            xlLib.TipsUtils.showFloatWordTips("跟注:" + this.callnum);
            console.log("可以与3号玩家比牌");
            console.log(this.byOpenId);
        }
        else if (e.target == this.grpHead4) {
            xlLib.TipsUtils.showFloatWordTips("点击玩家4");
            this.sendamessage2(EventConst.compareCard, this.UsId, this.byOpenId[4]);
            this.sendamessage(EventConst.botpour, this.callnum);
            xlLib.TipsUtils.showFloatWordTips("跟注:" + this.callnum);
            console.log("可以与4号玩家比牌");
            console.log(this.byOpenId);
        }
        else if (e.target == this._btn_menu) {
            xlLib.TipsUtils.showFloatWordTips("菜单");
            this.grp_menu.visible = true;
        }
        else if (e.target == this._btn_luckmoney) {
            xlLib.TipsUtils.showFloatWordTips("喜钱");
        }
        else if (e.target == this._btn_out) {
            this.grp_menu.visible = false;
            if (GlobalData.isLiveRoom == true) {
                var zjhpaprePanl = xlLib.PopUpMgr.addPopUp(ZJHIsLiveRoom, this, true, true, null, 1);
            }
            else if (GlobalData.isLiveRoom == false) {
                var zjhpaprePanl = xlLib.PopUpMgr.addPopUp(ZJHNotLiveRoom, this, true, true, null, 1);
            }
            if (GlobalData.liveCloseBtn == false) {
                this.sendamessage(EventConst.isLeave, null);
            }
        }
        else if (e.target == this._btn_setting) {
            this.grp_menu.visible = false;
            this.grp_setting_hint.visible = true;
            xlLib.TipsUtils.showFloatWordTips("设置");
        }
        else if (e.target == this._btn_record) {
            this.grp_menu.visible = false;
            xlLib.TipsUtils.showFloatWordTips("记录");
            xlLib.PopUpMgr.addPopUp(ZJHRecordPanl, null, true);
        }
        else if (e.target == this._btn_playmethod) {
            this.grp_menu.visible = false;
            xlLib.TipsUtils.showFloatWordTips("玩法");
            xlLib.PopUpMgr.addPopUp(ZJHHelpPanl, null, true);
        }
        else if (e.target == this._btn_feedback) {
            this.grp_menu.visible = false;
            this.grp_feedback_panel.visible = true;
            xlLib.TipsUtils.showFloatWordTips("反馈");
        }
        else if (e.target == this._btn_set_close) {
            this.grp_setting_hint.visible = false;
            xlLib.TipsUtils.showFloatWordTips("退出设置面板");
        }
        else if (e.target == this._btn_feedback_close) {
            this.grp_feedback_panel.visible = false;
            xlLib.TipsUtils.showFloatWordTips("退出反馈面板");
        }
    };
    /**获取所有能和玩家比牌的玩家 */
    ZJHView.prototype.onBiPaiClick = function () {
        this.byOpenId = [];
        for (var i = 1; i < this.playerOperatingState.length; i++) {
            if (this.playerOperatingState[i] != 3) {
                var user = UserInfo.getInstance().playes[i];
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
    };
    //-----------------------------------------------------------------------------
    /**点击加注倍数按钮后隐藏 */
    ZJHView.prototype.Clickaddtohide = function () {
        this._btn_jiazhu.touchEnabled = false;
        this.grp_btncm0.visible = false;
        xlLib.DisplayUtils.setComponentEnabled(this._btn_jiazhu, false);
    };
    /**玩家加注金币 */
    ZJHView.prototype.botpGolds = function (state) {
        this.img_xzgold_bg0.visible = state;
        this.img_xzgold_bg1.visible = state;
        this.img_xzgold_bg2.visible = state;
        this.img_xzgold_bg3.visible = state;
        this.img_xzgold_bg4.visible = state;
        this.img_xzgold0.visible = state;
        this.img_xzgold1.visible = state;
        this.img_xzgold2.visible = state;
        this.img_xzgold3.visible = state;
        this.img_xzgold4.visible = state;
        this.lab_xzgold0.visible = state;
        this.lab_xzgold1.visible = state;
        this.lab_xzgold2.visible = state;
        this.lab_xzgold3.visible = state;
        this.lab_xzgold4.visible = state;
    };
    /**桌面金币图标 */
    ZJHView.prototype.deskNum = function (state) {
        this.lab_deskGolds.visible = state;
        this.img_deskgoldbg.visible = state;
        this.img_deskgoldIcon.visible = state;
    };
    ZJHView.prototype.sendamessage = function (sendstr, bet) {
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        //bet :下注倍数
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: playway.id,
            data: bet
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
    };
    ZJHView.prototype.sendamessage2 = function (sendstr, open, byopen) {
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        //bet :下注倍数
        var data = { "open": open, "byopen": byopen };
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: playway.id,
            data: data
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
    };
    /**------------------------------------------------------------------------------------- */
    ZJHView.prototype.addEvent = function () {
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
        EventUtil.addEventListener(EventConst.onAiWaiveCard, this.otherdiscard, this);
        EventUtil.addEventListener(EventConst.onUserExceWaiveCard, this.disAutoCard, this);
        EventUtil.addEventListener(EventConst.onCheckout, this.settleaccount, this);
        //EventUtil.addEventListener(EventConst.zjhleave, this.leaveroom, this);
        //EventUtil.addEventListener(EventConst.onUserLeave, this.cancelpapre, this);
        EventUtil.addEventListener(EventConst.onUserIsLeave, this.onClickoutBtn, this);
        EventUtil.addEventListener(EventConst.onUserOutRoom, this.ocClickContuite, this);
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
    };
    ZJHView.prototype.onTouchStageHandler = function (evt) {
        if (!(evt.target == this.grp_menu
            || evt.target == this._btn_menu
            || evt.target == this.menu_bg
            || evt.target == this._btn_out
            || evt.target == this._btn_setting
            || evt.target == this._btn_record
            || evt.target == this._btn_playmethod
            || evt.target == this._btn_feedback)) {
            this.grp_menu.visible = false;
        }
    };
    /**开始倒计时*/
    ZJHView.prototype.startCountDown = function (time) {
        // this.timeTxt.text = 10-time + "";
        //this.timeTxt.visible = true;
        this.time = time;
        if (this.timer == null) {
            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    };
    /**倒计时处理*/
    ZJHView.prototype.timerFunc = function (evt) {
        if (this.time >= 0 && this.time <= 15) {
            this.time--;
            this.addtime = 15 - this.time;
            console.log("addtime", 15 - this.time);
            //console.log(this.time);
        }
        else {
            this.clearTime();
        }
    };
    /**清除倒计时*/
    ZJHView.prototype.clearTime = function () {
        if (this.timer) {
            this.timer.stop();
            // this.timeTxt.visible = false;
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    };
    ZJHView.prototype.onGameStatusChange = function (data) {
        this._btn_continuegame.visible = false;
        this.gamestatue(data.param);
    };
    ZJHView.prototype.gamestatue = function (data) {
        /**0.准备中  1.开始游戏 2.游戏结束*/
        if (data.roomStatus == 0) {
            console.log("游戏状态是0");
            //this.grpprepare.visible = false;//准备提示弹框
            var zjhpaprePanl = xlLib.PopUpMgr.addPopUp(ZJHpaprePanl, this, true, true, null, 1);
            zjhpaprePanl.TYPE_TAP = Const.TYPE_JINGDIANJINHUA;
            this.shortTimegameStatue = data.roomStatus;
        }
        else if (data.roomStatus == 1) {
            console.log("游戏开始，发牌");
            this.grp_roungNum.visible = true;
            this.shortTimegameStatue = data.roomStatus;
            this.zhangIndex = UserInfo.getInstance().findSeatNumber(data.index);
            this.flyIndex0 = UserInfo.getInstance().findSeatNumber(data.index);
            this.deskNum(true);
            this.lab_dizhu_num.text = String(data.score / 100); //最小底注
            this.lab_dingzhu_num.text = String(data.maxScore / 100); //最大顶注
            this.dizhu = data.golds / 500;
            this.lab_deskGolds.text = String(data.golds / 100); //牌桌底注
            this.botpGolds(true);
            //玩家下的地注
            for (var i = 0; i < 5; i++) {
                this['lab_xzgold' + i].text = data.golds / 500;
            }
            this.cardEffect(); //飞牌动动作
        }
        else if (data.roomStatus == 2) {
            this.shortTimegameStatue = data.roomStatus;
            console.log("游戏结束");
        }
        for (var key in data.goldMap) {
            console.log("--------------" + key);
            console.log("------------" + data.goldMap[key]);
            this.nowUserGolds = this.goldarr[0] / 100;
            this.goldarr.push(data.goldMap[key]);
            this.labelGold0.text = String(this.goldarr[0] / 100);
        }
        for (var i = 1; i < this.goldarr.length; i++) {
            this['grpHead' + i].setOtherGold(this.goldarr[i] / 100);
        }
        this._btn_kanpai.touchEnabled = true;
    };
    /**玩家看牌 */
    ZJHView.prototype.Check = function (data) {
        if (data.param.command == "onUserSeeCard" && UserInfo.getInstance().uid == data.param.userId) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            xlLib.TipsUtils.showFloatWordTips("看牌");
            console.log("看牌");
            var poke = {
                type: data.param.cardGenre,
                value: data.param.cardtype //牌值
            };
            this.onKanPaiClick(poke);
            this._btn_kanpai.visible = false;
            this.playerOperatingState[0] = 2; //已看牌
        }
    };
    /**其他玩家看牌 */
    ZJHView.prototype.otherCheck = function (data) {
        if (data.param.command == "onAiSeeCard" && UserInfo.getInstance().uid != data.param.userId) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            var seatnum = UserInfo.getInstance().findSeatNumber(data.param.index);
            this['labstatus' + seatnum].text = '已看牌';
            this.playerOperatingState[seatnum] = 2;
        }
    };
    /**判断进行操作 接收下注类型*/
    ZJHView.prototype.gametype = function (data) {
        if (data.param.code == 200) {
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
            if (this.playerOperatingState[0] != 2) {
                this.startCountDown(this.numtime);
            }
            //this.betarr = data.param.limit.split(",");
            console.log("可以进行加注操作*********************************");
            this._btn_jiazhu.visible = true;
            this._btn_jiazhu.touchEnabled = true;
            xlLib.DisplayUtils.setComponentEnabled(this._btn_jiazhu, true); //按钮恢复颜色
            var index = 0;
            var all = false;
            for (var key in data.param.butPourMap) {
                console.log("--------------" + key);
                console.log("------------" + data.param.butPourMap[key]);
                this.betarr.push(key);
                this['labchip' + index].text = key;
                if (data.param.butPourMap[key] == false) {
                    this["_btn_jiacm_" + index].touchEnabled = false;
                }
                else {
                    all = true;
                }
                index++;
            }
            if (!all) {
                this._btn_jiazhu.touchEnabled = false;
                xlLib.DisplayUtils.setComponentEnabled(this._btn_jiazhu, false);
            }
            /**可以进行比牌 */
            if (data.param.compare == true && UserInfo.getInstance().uid == data.param.userId) {
                console.log("compare=true可以比牌");
                this.lab_tankNumber.text = data.param.followPour;
                this.lab_tankNumber.visible = true;
                this._btn_bipai.visible = true;
                this._btn_bipai.touchEnabled = true;
                xlLib.DisplayUtils.setComponentEnabled(this._btn_bipai, true); //按钮恢复颜色
            }
            /**可以进行跟注 */
            this.isCall = true;
            this.img_genzhu.source = "lab_genzhu_png";
            this.callnum = data.param.followPour;
            this.lab_callNumber.text = data.param.followPour;
            this.lab_callNumber.visible = true;
            this._btn_genzhu.touchEnabled = true;
            xlLib.DisplayUtils.setComponentEnabled(this._btn_genzhu, true); //按钮恢复颜色
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
    };
    /**玩家下注*/
    ZJHView.prototype.Bet = function (data) {
        if (data.param.command == "onUserBetOrderUpdate" && UserInfo.getInstance().uid == data.param.userId) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            this.onGenZhuClick(data.param.index, data.param.data);
            this._btn_genzhu.visible = false;
            this.img_genzhu.visible = false;
            this.lab_callNumber.visible = false;
            this._btn_bipai.touchEnabled = false;
            xlLib.DisplayUtils.setComponentEnabled(this._btn_bipai, false); //按钮恢复颜色
            this.lab_deskGolds.text = (data.param.golds / 100).toString(); //玩家下注更新牌桌金币数
            for (var key in data.param.goldMap) {
                console.log("--------------" + key);
                console.log("------------" + data.param.goldMap[key]);
                this.labelGold0.text = String(data.param.goldMap[key] / 100); //玩家下注更新金币数
                this.nowUserGolds = data.param.goldMap[key] / 100;
            }
            this.lab_tankNumber.text = String(data.param.data / 100);
            this.lab_callNumber.text = String(data.param.data / 100);
            this.oldMybotpGold += data.param.data / 100;
            this.lab_xzgold0.text = String(this.oldMybotpGold);
        }
    };
    /**其他玩家下注*/
    ZJHView.prototype.otherplayerBet = function (data) {
        if (data.param.command == "onAiBetOrderUpdate" && UserInfo.getInstance().uid != data.param.userId) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            this.onPlayerGenZhu(data.param.index, data.param.data);
            this.lab_deskGolds.text = (data.param.golds / 100).toString(); //玩家下注更新牌桌金币数
            //let otherId: string;
            //let therGolds: number;
            //下注更新其他玩家金币
            for (var key in data.param.goldMap) {
                console.log("--------------" + key);
                console.log("------------" + data.param.goldMap[key]);
                this.otherId = key;
                this.therGolds = data.param.goldMap[key];
            }
            for (var i = 1; i < this.OtherPlayer.length; i++) {
                if (this.OtherPlayer[i] == this.otherId) {
                    this['grpHead' + i].setOtherGold(this.therGolds / 100);
                }
            }
            this.oldOtherbotpGold[data.param.index] += data.param.data / 100;
            this['lab_xzgold' + data.param.index].text = String(this.oldOtherbotpGold[data.param.index]);
            this.notAbandbotp = data.param.data / 100;
            console.log(this.notAbandbotp);
        }
    };
    /**全压*/
    ZJHView.prototype.ALLIN = function (data) {
        if (data.param.command == "onUserAllPress" && data.param.code == 200) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            console.log("金币不足玩家全压", data);
            for (var key in data.param.goldMap) {
                console.log("--------------" + key);
                console.log("------------" + data.param.goldMap[key]);
                this.labelGold0.text = String(data.param.goldMap[key]); //全压更新玩家金币数
            }
            //执行比牌动作..........{}
        }
    };
    /***(推送*异常及时通知 比牌结果推送)*/
    ZJHView.prototype.timeInfo = function (data) {
        if (data.param.command == "onTimelyNotify" && data.param.autoButState == 300) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            console.log("玩家全压和其他玩家比牌", data);
            console.log(data.param.json);
            /**AI玩家胜利 */
            if (data.param.data == 1) {
                console.log("AI全压获胜");
                var losepoke = {
                    type: data.param.json.loseCard,
                    value: data.param.json.loseType
                }; //牌型
                if (this.playerOperatingState[0] != 2) {
                    this.onKanPaiClick(losepoke);
                    for (var i = 0; i < 3; i++) {
                        var val = losepoke.value[i];
                        var card = this['grpCard' + 0 + '_' + i];
                        xlLib.DisplayUtils.setComponentEnabled(card, false);
                    }
                }
                else if (this.playerOperatingState[0] == 2) {
                    for (var i = 0; i < 3; i++) {
                        var val = losepoke.value[i];
                        var card = this['grpCard' + 0 + '_' + i];
                        xlLib.DisplayUtils.setComponentEnabled(card, false);
                    }
                    UserInfo.getInstance().isGameStart = false;
                }
                this.playerOperatingState[data.param.index] = 3;
                this.abandonStateBtn();
            }
            else if (data.param.data == 0) {
                //执行AI玩家图像被轰炸动作{}................
                console.log("玩家全压获胜");
                this.anotherDontCard(data.param.index);
            }
        }
        else if (data.param.command == "onTimelyNotify" && data.param.autoButState == 100) {
            this.nowroundNum = data.param.circleNum;
            //开启自动跟注
            console.log("++++++++++++++++++++++++++data.param.state == 100", data);
            this.img_autogenzhu.visible = false;
            this.img_autogenzhu.visible = false;
            this._btn_cancelautogenzhu.visible = true;
            this.img_cancelautogenzhu0.visible = true;
            this.img_cancelautogenzhu1.visible = true;
        }
        else if (data.param.command == "onTimelyNotify" && data.param.autoButState != 100 && data.param.autoButState != 300) {
            this.nowroundNum = data.param.circleNum;
            this.lab_now_roundNum.text = this.nowroundNum.toString();
            //关闭自动跟注
            console.log("++++++++++++++++++++++++++data.param.state == 200", data);
            this.img_autogenzhu.visible = true;
            this._btn_autogenzhu.visible = true;
            this._btn_cancelautogenzhu.visible = false;
            this.img_cancelautogenzhu0.visible = false;
            this.img_cancelautogenzhu1.visible = false;
        }
    };
    /**玩家比牌结果*/
    ZJHView.prototype.Thancard = function (data) {
        if (data.param.command == "onUserToCard" && data.param.code == 200) {
            console.log("玩家比牌结果");
        }
    };
    /**玩家弃牌*/
    ZJHView.prototype.discard = function (data) {
        if (data.param.command == "onUserWaiveCard" && UserInfo.getInstance().uid == data.param.userId) {
            var poke = {
                type: data.param.cardGenre,
                value: data.param.cardtype //牌值
            };
            for (var i = 0; i < 3; i++) {
                var val = poke.value[i];
                var card = this['grpCard' + 0 + '_' + i];
                card.source = 'gf_poker0_png';
                egret.Tween.get(card).to({ scaleX: 0 }, 200).call(function () {
                    this[0].source = 'qznn_card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 100);
                }, [card, val]);
            }
            this.playerOperatingState[0] = 3;
            this.abandonStateBtn();
            UserInfo.getInstance().isGameStart = false;
        }
    };
    //玩家弃牌,结算按钮状态
    ZJHView.prototype.abandonStateBtn = function () {
        this.grp_btncm0.visible = false;
        this._btn_jiazhu.visible = false;
        this._btn_kanpai.visible = false;
        this._btn_qipai.visible = false;
        this._btn_genzhu.visible = false;
        this._btn_autogenzhu.visible = false;
        this._btn_cancelautogenzhu.visible = false;
        this._btn_bipai.visible = false;
        this._btn_quanxia.visible = false;
        this._btn_continuegame.visible = true;
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
    };
    /**其他玩家弃牌*/
    ZJHView.prototype.otherdiscard = function (data) {
        if (data.param.command == "onAiWaiveCard" && UserInfo.getInstance().uid != data.param.userId) {
            this.seatnum = UserInfo.getInstance().findSeatNumber(data.param.index);
            this.anotherDontCard(this.seatnum);
            this['img_abandon' + this.seatnum].source = 'gf_flag_qp_png';
            this.abandonId.push(data.param.userId);
        }
    };
    //设置AI玩家弃牌 颜色
    ZJHView.prototype.anotherDontCard = function (seatPos) {
        this['imgCardbg' + seatPos].source = '';
        this['imgCardType' + seatPos].source = '';
        this['labstatus' + seatPos].text = '';
        var cardPos = [];
        for (var j = 0; j < 3; j++) {
            var card = this['grpCard' + seatPos + '_' + j];
            card.source = 'gf_poker0_2_png';
            card.anchorOffsetX = card.width / 2;
            //card.x += card.width / 2;
            var pos = new egret.Point;
            pos.x = card.x;
            pos.y = card.y;
            cardPos[j] = pos;
        }
        this.orginPlayerCardPos[seatPos] = cardPos;
        this.playerOperatingState[seatPos] = 3; //其他玩家弃牌状态
    };
    /**超时自动弃牌*/ //自己不进行任何操作超过操作时间 视为弃牌状态 
    ZJHView.prototype.disAutoCard = function (data) {
        if (data.param.command == "onUserExceWaiveCard" && UserInfo.getInstance().uid == data.param.userId && this.addtime >= this.numtime) {
            console.log(this.addtime);
            var poke = {
                type: data.param.cardGenre,
                value: data.param.cardtype //牌值
            };
            for (var i = 0; i < 3; i++) {
                var val = poke.value[i];
                var card = this['grpCard' + 0 + '_' + i];
                card.source = 'gf_poker0_png';
                egret.Tween.get(card).to({ scaleX: 0 }, 200).call(function () {
                    this[0].source = 'qznn_card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 100);
                }, [card, val]);
            }
            xlLib.TipsUtils.showFloatWordTips("自动弃牌");
            this.playerOperatingState[0] = 3; //玩家弃牌状态
            this.abandonStateBtn();
            UserInfo.getInstance().isGameStart = false;
        }
    };
    /**取消准备 */
    //private cancelpapre(data: any): void {
    //}
    /**点击退出，收到推送 */
    ZJHView.prototype.onClickoutBtn = function (data) {
        //接收状态 leave (true 可离开 false 不可离开)
        if (data.param.leave == true) {
            var zjhpaprePanl = xlLib.PopUpMgr.addPopUp(ZJHIsLiveRoom, this, true, true, null, 1);
        }
        else if (data.param.leave == false) {
            var zjhpaprePanl = xlLib.PopUpMgr.addPopUp(ZJHNotLiveRoom, this, true, true, null, 1);
        }
    };
    /**点击继续按钮发送离开房间，收到推送 */
    ZJHView.prototype.ocClickContuite = function (data) {
        if (data.param.code == 200) {
            console.log('点击继续按钮发送离开房间', data);
            if (this.isClickjixuGameBtn == false && this.isClickqipaiBtn == false) {
                this._btn_continuegame.visible = true;
            }
        }
    };
    /**结算游戏结束 */
    ZJHView.prototype.settleaccount = function (data) {
        console.log("结算:" + data);
        //this._btn_continuegame.visible = true;
        this.abandonStateBtn();
    };
    /**离开房间*/
    ZJHView.prototype.leaveroom = function (data) {
        if (data.param.code == 200) {
            console.log(data);
            //this._btn_continuegame.visible = true;
            //xlLib.SceneMgr.instance.changeScene(Lobby);
        }
    };
    //加入房间新玩家
    ZJHView.prototype.playerJoinRoom = function (data) {
        console.log(data._obj.player.id);
        this.OtherPlayer.push(data._obj.player.id);
        console.log(UserInfo.getInstance().myPlayer.id);
        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {
        }
        else {
            this['grpHead' + data._obj.player.index].visible = true;
            this['grpHead' + data._obj.player.index].setUserInfo(data._obj.player.username, data._obj.player.goldcoins / 100, "women7_png");
        }
        //this.grpprepare.visible = false;//准备提示弹框
        xlLib.PopUpMgr.removePopUp(ZJHpaprePanl, 1);
        this.isprepare = false;
    };
    /**
    * 自己加入房间
    */
    ZJHView.prototype.addPlayers = function (data) {
        //设置自己信息
        this.OtherPlayer.push(data._obj.player[0].id);
        /*var mask2: egret.Shape = new egret.Shape;
        mask2.graphics.beginFill(0xff0000);
        mask2.graphics.drawCircle(62, 62, 62);
        mask2.graphics.endFill();
        mask2.x = this.imghead0.x + 6;
        mask2.y = this.imghead0.y + 5;
        this.grpHead0.addChild(mask2);
        this.imghead0.mask = mask2;*/
        if (data._obj.player[0].id == UserInfo.getInstance().myPlayer.id) {
            this.grpHead0.visible = true;
            this.labelHead0.text = UserInfo.getInstance().myPlayer.username;
            this.labelGold0.text = UserInfo.getInstance().myPlayer.goldcoins / 100 + "";
            this.imghead0.source = "women7_png";
            this.playerOperatingState[0] = 0;
        }
        //设置其他玩家信息  for (let i = 1; i < 10; i++) {
        for (var i = 1; i < 5; i++) {
            this.playerOperatingState[i] = 0;
            if (data._obj.player[i] != null) {
                this['grpHead' + i].visible = true;
                this['grpHead' + i].setUserInfo(UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins / 100, "women7_png"); //data._obj.player[i].headimg  
                //this.nodiscard.push(data._obj.player[i].id);
            }
            else {
                this['grpHead' + i].setUserInfo("", "", "", "");
            }
        }
    };
    ZJHView.prototype.setCountdown = function () {
        this.cdTimer = new egret.Timer(1000);
        this.cdTimer.addEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
    };
    ZJHView.prototype.clacTimer = function () {
        //if (this.cdNum % 7 == 0) {
        //    this.getBets();
        //}
        if (this.cdNum > 0) {
            this.cdNum--;
        }
        else {
            this.cdTimer.stop();
            this.cdNum = 0;
            //this.resetGame();
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
    };
    //获取结算数据，显示结果面板时设置
    ZJHView.prototype.setGameResult = function (data) {
        //this.grpCountdown.visible = false;
        this.cardResult = data;
        var poke = data.pokes;
    };
    /**玩家跟注 */
    ZJHView.prototype.onGenZhuClick = function (index, gold) {
        var p = new egret.Point();
        p.x = 580;
        p.y = 620;
        this.showCoins(p, gold);
    };
    /**其他玩家跟注 */
    ZJHView.prototype.onPlayerGenZhu = function (index, gold) {
        var p = new egret.Point();
        p.x = this["grpHead" + index].x + 21;
        p.y = this["grpHead" + index].y + 110;
        this.showCoins(p, gold);
    };
    //========================== Effect Show ===============================
    //提示信息  2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    ZJHView.prototype.showGameTips = function (type) {
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(type));
    };
    /* //显示筹码
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
     }*/
    //显示筹码
    ZJHView.prototype.showCoins = function (pos, num) {
        console.log("显示筹码");
        var isRemove = false;
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(8));
        var point = ZJHUtil.getInstance().getCoinsPos();
        var arr = ZJHUtil.getInstance().coinsType(pos, num); //Arr
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
    };
    //private flyBankerIndex: number = 0;
    ZJHView.prototype.cardEffect = function () {
        this.isCardEffectShow = true;
        this.flyIntval = setInterval(this.playCardFly.bind(this), 0);
    };
    ZJHView.prototype.playCardFly = function (data) {
        var card = this['grpCard' + this.flyIndex0 + '_' + this.flyIndex1];
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
            }
            else if (this.flyIndex0 == this.zhangIndex - 1) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                clearInterval(this.flyIntval);
                this.showControl();
                return;
            }
            else {
                this.flyIndex1 = 0;
                this.flyIndex0++;
            }
        }
        else {
            this.flyIndex1++;
        }
    };
    ZJHView.prototype.showControl = function () {
        console.log("飞完牌+++++++++++++++++++++++++++++++++");
        this._btn_luckmoney.visible = true;
        this._btn_luckmoney.touchEnabled = true;
        this._btn_kanpai.visible = true;
        this._btn_autogenzhu.visible = true; //发完牌跟注，弃牌按钮显示
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
    };
    /**自己点击看牌 */
    ZJHView.prototype.onKanPaiClick = function (poke) {
        //let poke = { num: 2, type: 2, value: [408, 308, 401] };
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
    };
    /**其他玩家看牌 */
    ZJHView.prototype.onPlayerKanPai = function (index, poke) {
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(7));
        for (var i = 0; i < 3; i++) {
            var card = this['grpCard' + index + '_' + i];
            card.source = 'gf_poker0_1_png';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'qznn_card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]]);
        }
        this['imgCardType' + index].source = ZJHUtil.getInstance().getCardType(poke.type);
    };
    ZJHView.prototype.setStartBet = function () {
        //this.resetGame();
        clearInterval(this.interval);
        this.showGameTips(2);
        //this.grpCountdown.visible = true;
        if (!this.isSysBanker && !this.isChangeBanker) {
            this.lastGameBankerNum--;
        }
        if (this.isChangeBanker) {
            this.isChangeBanker = false;
        }
    };
    ZJHView.prototype.resetGame = function () {
        this.initData();
        for (var index = 0; index < 5; index++) {
            for (var j = 0; j < 3; j++) {
                var card = this['grpCard' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
                this['grpCard' + index + '_' + j].source = '';
            }
            this['lab_xzgold' + index].text = '';
            this['img_xzgold_bg' + index].visible = false;
            this['img_xzgold' + index].visible = false;
            this['labstatus' + index].text = '';
            this['imgCardbg' + index].source = '';
            this['imgCardType' + index].source = '';
        }
        for (var index = 1; index < 5; index++) {
            this['img_abandon' + index].source = '';
        }
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
        this.isClickjixuGameBtn = false;
        this.isClickqipaiBtn = false;
        GlobalData.liveCloseBtn = false;
        GlobalData.isLiveRoom = false;
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
        //this.labCountdown0.text = '0';
        //this.labCountdown1.text = '0';
        /*this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
       this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
       this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };*/
        /*  while (this.grpCoins.numChildren > 0) {
              this.grpCoins.removeChildAt(0);
          }*/
    };
    //========================== Second Panel ==============================
    ZJHView.prototype.getHistoryCallback = function (msg) {
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
    };
    ZJHView.prototype.onTouchCloseSecondPanel = function () {
    };
    ZJHView.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    /*public dispose(): void {

        xlLib.SceneMgr.instance.changeScene(Lobby);
    }*/
    ZJHView.prototype.destroy = function () {
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
        EventUtil.removeEventListener(EventConst.onAiWaiveCard, this.otherdiscard, this);
        EventUtil.removeEventListener(EventConst.onUserExceWaiveCard, this.disAutoCard, this);
        EventUtil.removeEventListener(EventConst.onCheckout, this.settleaccount, this);
        //EventUtil.removeEventListener(EventConst.zjhleave, this.cancelpapre, this);
        //EventUtil.removeEventListener(EventConst.onUserLeave, this.cancelpapre, this);
        EventUtil.removeEventListener(EventConst.onUserIsLeave, this.onClickoutBtn, this);
        EventUtil.removeEventListener(EventConst.onUserOutRoom, this.ocClickContuite, this);
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
    };
    return ZJHView;
}(eui.Component));
__reflect(ZJHView.prototype, "ZJHView");
//# sourceMappingURL=ZJHView.js.map