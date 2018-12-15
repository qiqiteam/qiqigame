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
 * 抢庄牛牛
 */
var TBNNView = (function (_super) {
    __extends(TBNNView, _super);
    function TBNNView() {
        var _this = _super.call(this) || this;
        _this.r = null;
        _this.arr = [null, null, null];
        _this.score = [0, 0, 0, 0, 0]; //牌值 '12'
        _this.score1 = [0, 0, 0, 0, 0]; //牌值   number 403
        _this.arr_fen = [0, 0, 0]; //记分器
        _this.arr_fen1 = [0, 0, 0, 0, 0]; //记分器1
        _this.multipleList = [0, 0, 0, 0, 0]; //倍数表
        _this.game_result = 0;
        _this.niu = 0; //有没有牛
        _this.zijipokes = [0, 0, 0, 0, 0]; //自己的牌
        _this.turn_score_arr = [];
        _this.win_eff_err = [];
        _this.goldFlyAnimatorarr = [];
        _this.intnum = [0, 0, 0, 0];
        _this.num01 = 0;
        _this.isTanPai = [false, false, false, false, false, false];
        _this.jiesuanbol = false;
        //计时器回调状态
        _this.startCardRotation = false;
        //----------------------------------------------------------------
        //public labHandsel: eui.BitmapLabel;
        //private grpSelectBet: eui.Group;    //筹码底背景
        //public labCurChip: eui.Label;
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
        _this.orginPinCardPos = []; // 拼牌扑克位置
        _this.orginPlayerCardPos = []; // 存储玩家扑克位置
        _this.orginPlayerHeadPos = []; // 玩家头像中心点
        _this.isBanker = false; // 是否当庄 (判断是否可以退出)
        _this.isBets = false; // 是否下注 (判断是否可以退出)
        _this.maxUserData = null; // 最大玩家数据 (结算处理)
        _this.banker_total_gold = 0; // 庄家自身携带的金币
        _this.isBoomBanker = false; // 是否爆庄
        _this.resultCaijin = 0;
        _this.totalCaijin = 0;
        _this.cdNum = 10; //倒计时计数
        _this.lastTouchBetIndex = -1; //上一次点击的筹码
        _this.coinsNumArr = {}; //计数桌面4个方位的筹码个数
        _this.isCoinsReturn = true;
        _this.curRate = 0;
        _this.lastTouchBetTime = 0;
        _this.isCardEffectShow = false; //是否正在显示扑克动画
        //-----------------------------------------------
        _this.zhaungIndex = 0; //庄的位置
        _this.flyIntval = 0; //
        //private flyIndex0: number = 0;  //扑克位置(东西南北)
        //private flyIndex1: number = 0;  //扑克(指定位置1，2，3)
        _this.flyBankerIndex = 0;
        _this.flyIntval_1 = 0; //
        _this.flyIntval_2 = 0; //
        _this.flyIntval_3 = 0; //
        _this.flyIntval_4 = 0; //
        _this.flyIntval_5 = 0; //
        _this.flyIntval_6 = 0; //
        _this.expandIntval_1 = 0;
        _this.expandIntval_2 = 0;
        _this.expandIntval_3 = 0;
        _this.expandIntval_4 = 0;
        _this.expandIntval_5 = 0;
        _this.expandIntval_6 = 0;
        _this.flyIndex_1 = 0;
        _this.flyIndex_2 = 0;
        _this.flyIndex_3 = 0;
        _this.flyIndex_4 = 0;
        _this.flyIndex_5 = 0;
        _this.flyIndex_6 = 0;
        _this.faPaiTime = 50;
        _this.flyPaiTime = 1000;
        _this.pauseTime = 950;
        _this.expandPaiTime = 400;
        _this.skinName = "TBNNViewSkin";
        return _this;
        //this.r = r;
    }
    TBNNView.prototype.addNNEff = function () {
        var _this = this;
        if (!this.nnEff) {
            this.nnEff = xlLib.DisplayUtils.createAsyncMovieClicp('nn_myCardType10', 'nn_myCardType10', false);
            this.nnEff.x = xlLib.Global.screenWidth / 2;
            this.nnEff.y = xlLib.Global.screenHeight / 2;
            this.nnEff.frameRate = 10;
            this.nnEff.touchEnabled = false;
        }
        this.nnEff.gotoAndPlay(0, 1);
        this.addChild(this.nnEff);
        this.nnEff.addEventListener(egret.Event.COMPLETE, function (e) {
            if (_this.nnEff.parent) {
                _this.nnEff.parent.removeChild(_this.nnEff);
            }
        }, this);
    };
    TBNNView.prototype.addWhnEff = function () {
        var _this = this;
        if (!this.whnEff) {
            this.whnEff = xlLib.DisplayUtils.createAsyncMovieClicp('nn_myCardType14', 'nn_myCardType14', false);
            this.whnEff.x = xlLib.Global.screenWidth / 2;
            this.whnEff.y = xlLib.Global.screenHeight / 2;
            this.whnEff.frameRate = 10;
            this.whnEff.touchEnabled = false;
        }
        this.whnEff.gotoAndPlay(0, 1);
        this.addChild(this.whnEff);
        this.whnEff.addEventListener(egret.Event.COMPLETE, function (e) {
            if (_this.whnEff.parent) {
                _this.whnEff.parent.removeChild(_this.whnEff);
            }
        }, this);
    };
    TBNNView.prototype.childrenCreated = function () {
        this.getOrginCardPos();
        this.addEvent();
        this.initData();
        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = "" + GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
        var inthematch = xlLib.PopUpMgr.addPopUp(Inthematch, this, true, true, null, 1);
        inthematch.TYPE_TAP = Const.TYPE_TBNN;
        UserInfo.getInstance().isGameStart = true;
    };
    /**
     * 数据初始化
     */
    TBNNView.prototype.initData = function () {
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
        this._xiabei_4.visible = false;
        this._xiabei_0_5.visible = false;
        this._xiabei_5.visible = false;
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
        this._xiabei_1.x = 337.84;
        this._xiabei_2.x = 338.05;
        this._xiabei_3.x = 730.09;
        this._xiabei_4.x = 1138.59;
        this._xiabei_5.x = 1140.99;
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
        this.zhaungIndex = 0; //庄的座位号（当前游戏的座位号）
        //-----------------------------------------------
    };
    /**
     * 获取原始扑克的位置
     */
    TBNNView.prototype.getOrginCardPos = function () {
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = '';
            card.anchorOffsetX = card.width / 2;
            card.x += card.width / 2;
            var pos = new egret.Point;
            pos.x = card.x;
            pos.y = card.y;
            this.orginBankerCardPos[i] = pos;
            var card = this['_puke_' + i];
            card.source = '';
            card.anchorOffsetX = card.width / 2;
            card.x += card.width / 2;
            var pos = new egret.Point;
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
                var card = this['grpCard_' + index + '_' + j];
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
        for (var i_1 = 0; i_1 < 6; i_1++) {
            var pos = new egret.Point;
            if (i_1 == 0 || i_1 == 3) {
                pos.x = this['grpHead' + i_1].x + 35;
                pos.y = this['grpHead' + i_1].y + 35;
            }
            else {
                pos.x = this['grpHead' + i_1].x + 45;
                pos.y = this['grpHead' + i_1].y + 60;
            }
            this.orginPlayerHeadPos[i_1] = pos;
        }
    };
    TBNNView.prototype.resize = function () {
    };
    /**继续游戏 */
    TBNNView.prototype.onRestartGame = function () {
        var inthematch = xlLib.PopUpMgr.addPopUp(Inthematch, this, true, true, null, 1);
        inthematch.TYPE_TAP = Const.TYPE_TBNN;
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_NIUNIU);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_TBNN);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom, senddata, function (data) {
        }, this);
        UserInfo.getInstance().isGameStart = true;
        this.resetGame();
    };
    /**准备 开始回调 */
    TBNNView.prototype.onClick = function (e) {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        if (e.target == this._btn_begin) {
            this.onRestartGame();
        }
        else if (e.target == this._btn_meun) {
            //this.addNNEff();
        }
        else if (e.target == this._btn_double_1) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[0]);
        }
        else if (e.target == this._btn_double_2) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[1]);
        }
        else if (e.target == this._btn_double_3) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[2]);
        }
        else if (e.target == this._btn_double_4) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[3]);
        }
        else if (e.target == this._btn_double_5) {
            this.sendamessage(EventConst.niuniu_dobet, this.multipleList[4]);
        }
        else if (e.target == this._btn_tanpai) {
            this.returntanpai();
        }
    };
    /**发送摊牌命令 */
    TBNNView.prototype.returntanpai = function () {
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_NIUNIU);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_TBNN);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id,
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_manual, senddata, function (data) {
            //console.log(data);
        }, this);
    };
    /**抢庄 sendstr 命令 bet 倍数 0~5*/
    TBNNView.prototype.sendamessage = function (sendstr, bet) {
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
    };
    /**注册事件 */
    TBNNView.prototype.addEvent = function () {
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
    };
    /**抢庄牛牛摊牌通知 */
    TBNNView.prototype.onShowOrder = function (data) {
        console.log(data._obj.index + "号摊牌");
        this.isTanPai[data._obj.index] = true;
        //if (data._obj.index == 0) {
        //this.myFanPai();
        //} else {
        this.onePlayerFanPai(data._obj.index);
        //}
    };
    /**游戏状态 */
    TBNNView.prototype.GameStatus = function (data) {
        switch (data._obj.roomStatus) {
            case 0:
                ;
                break;
            case 1:
                ;
                break;
            case 2:
                ;
                break;
            case 3:
                ;
                break;
            case 4:
                this.onbetBack(data);
                break; //下注
            case 5:
                ;
                break;
            case 6:
                this.onThecardtype(data);
                break; //所有玩家 牌面信息 结算
            case 7:
                ;
                break;
            case 8:
                ;
                break;
        }
    };
    /**胜利 */
    TBNNView.prototype.addNNVictoryEffect = function () {
        if (!this.nnvictoryEffect) {
            this.nnvictoryEffect = new QZNNVictory();
            this.nnvictoryEffect.anchorOffsetX = this.nnvictoryEffect.width / 2;
            this.nnvictoryEffect.anchorOffsetY = this.nnvictoryEffect.height / 2;
            this.nnvictoryEffect.x = xlLib.Global.screenWidth / 2;
            this.nnvictoryEffect.y = xlLib.Global.screenHeight / 2;
        }
        this.nnvictoryEffect.play();
        this.addChild(this.nnvictoryEffect);
    };
    /**通杀 */
    TBNNView.prototype.addTongsha = function () {
        if (!this.tongsha) {
            this.tongsha = new QZNNTongsha();
            this.tongsha.anchorOffsetX = this.tongsha.width / 2;
            this.tongsha.anchorOffsetY = this.tongsha.height / 2;
            this.tongsha.x = xlLib.Global.screenWidth / 2;
            this.tongsha.y = xlLib.Global.screenHeight / 2;
        }
        this.tongsha.play();
        this.addChild(this.tongsha);
    };
    /**通赔 */
    TBNNView.prototype.addTongpei = function () {
        if (!this.tongpei) {
            this.tongpei = new QZNNTongpei();
            this.tongpei.anchorOffsetX = this.tongpei.width / 2;
            this.tongpei.anchorOffsetY = this.tongpei.height / 2;
            this.tongpei.x = xlLib.Global.screenWidth / 2;
            this.tongpei.y = xlLib.Global.screenHeight / 2;
        }
        this.tongpei.play();
        this.addChild(this.tongpei);
    };
    /**监听下注 */
    TBNNView.prototype.onbetBack = function (data) {
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
        for (var i = 0; i < data._obj.hogList.length; i++) {
            this['_btn_double_' + (i + 1)].visible = true;
            if (data._obj.hogList[i].hogOrBet >= 10) {
                this['beishu_' + i].visible = true;
                this['beishu_' + i].source = 'img_BQ_0_1_png';
                this['beishu_0_' + i].visible = true;
                this['beishu_0_' + i].source = 'img_BQ_0_' + data._obj.hogList[i].hogOrBet % 10 + '_png';
                this['bs_img_' + i].visible = true;
            }
            else if (data._obj.hogList[i].hogOrBet < 10) {
                this['beishu_' + i].visible = false;
                this['beishu_' + i].source = '';
                this['beishu_0_' + i].visible = true;
                this['beishu_0_' + i].source = 'img_BQ_0_' + data._obj.hogList[i].hogOrBet + '_png';
                // console.log(data._obj.hogList[i].hogOrBet);
                this['bs_img_' + i].visible = true;
            }
            this.multipleList[i] = data._obj.hogList[i].hogOrBet;
        }
    };
    /*所有玩家 牌面信息 结算 */
    TBNNView.prototype.onThecardtype = function (data) {
        this.game_result = data._obj.result;
        this._tishi.visible = false;
        var result = {
            pokes: [],
            result: [1, 0, 0, 0],
            bankerWin: 0,
            rate: "0.05",
            bomb: "0"
        };
        for (var i = 0; i < data._obj.players.length; i++) {
            var err = {
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
    };
    /**其他玩家的牌型   结算 */
    TBNNView.prototype.oncloseanaccount = function (data) {
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
    };
    /**更新下注通知(所有人) */
    TBNNView.prototype.OnBetUpdate = function (data) {
        // console.log(data._obj.index + "号下注");
        if (UserInfo.getInstance().uid == data._obj.userid) {
            this._btn_switch.visible = false;
            this._tishi.visible = true;
            this._tishi_text.text = "请等待其他玩家下注...";
        }
        if (data._obj.code == 200) {
            this.jiazhu(data._obj.hogOrBet, data._obj.index);
        }
    };
    /**是否下注 */
    TBNNView.prototype.jiazhu = function (data, num) {
        if (data >= 10) {
            this['_xiabei_0_' + num].visible = true;
            this['_xiabei_0_' + num].source = 'tongbi_bei2_png';
            this['_xiabei_' + num].visible = true;
            this['_xiabei_0_0_' + num].visible = true;
            this['_xiabei_' + num].source = 'img_BQ_0_' + data % 10 + '_png';
            this['_xiabei_0_0_' + num].source = 'img_BQ_0_' + 1 + '_png';
        }
        else if (data < 10) {
            this['_xiabei_0_' + num].visible = true;
            this['_xiabei_0_' + num].source = 'tongbi_bei1_png';
            this['_xiabei_' + num].visible = true;
            this['_xiabei_' + num].x -= 13;
            this['_xiabei_0_0_' + num].visible = false;
            this['_xiabei_' + num].source = 'img_BQ_0_' + data + '_png';
        }
    };
    /**自己加入房间 */
    TBNNView.prototype.addPlayers = function (data) {
        this.grpHead0.visible = true;
        if (data._obj.player[0].id == UserInfo.getInstance().myPlayer.id) {
            this.labelHead0.text = UserInfo.getInstance().myPlayer.username;
            this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().myPlayer.goldcoins);
            this.imghead0.source = "women7_png";
        }
        //设置其他玩家信息
        for (var i = 1; i < data._obj.player.length; i++) {
            if (data._obj.player[i] != null) {
                this.setUserInfo(i, UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins, "women7_png"); //data._obj.player[i].headimg
            }
            else {
                this.setUserInfo(i, "", "", "");
            }
        }
    };
    /**新玩家加入 */
    TBNNView.prototype.playerJoinRoom = function (data) {
        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {
        }
        else {
            this['grpHead' + data._obj.player.index].visible = true;
            this['grpHead' + data._obj.player.index];
            this.setUserInfo(data._obj.player.index, data._obj.player.username, data._obj.player.goldcoins, "women7_png");
        }
    };
    /** num 几号玩家  _name 名字    _gold 金币   _imghead 头像图片*/
    TBNNView.prototype.setUserInfo = function (num, _name, _gold, _imghead) {
        this['imghead' + num].source = _imghead;
        this['labelHead' + num].text = _name;
        this['labelGold' + num].text = GlobalFunction.Formatconversion(_gold);
    };
    /**开始倒计时*/
    TBNNView.prototype.startCountDown = function (time) {
        if (time < 10) {
            this.timeTxt.text = "0" + time;
        }
        else {
            this.timeTxt.text = "" + time;
        }
        this.timeTxt.visible = true;
        this.time = time;
        if (this.timer == null) {
            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    };
    /**倒计时处理*/
    TBNNView.prototype.timerFunc = function (evt) {
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
                //this._pingpai.visible = false;
                //this._my_pai.visible = true;
                this.oneFanPai();
            }
            this.timeTxt.text = "00";
            this.clearTime();
        }
    };
    /**清除倒计时*/
    TBNNView.prototype.clearTime = function () {
        if (this.timer) {
            this.timer.stop();
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    };
    TBNNView.prototype.clearTimer = function () {
        if (this.cdNum > 0) {
            this.cdNum--;
        }
        else {
            this.cdTimer.stop();
            this.cdNum = 0;
            this.resetGame();
        }
    };
    /**显示发牌 */
    TBNNView.prototype.cardEffect = function () {
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
    };
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
    TBNNView.prototype.playCardFly_1 = function () {
        var card = this['grpCard_' + 1 + '_' + this.flyIndex_1];
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
        }
        else {
            this.flyIndex_1++;
        }
    };
    TBNNView.prototype.playCardFly_2 = function () {
        var card = this['grpCard_' + 2 + '_' + this.flyIndex_2];
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
        }
        else {
            this.flyIndex_2++;
        }
    };
    TBNNView.prototype.playCardFly_3 = function () {
        var card = this['grpCard_' + 3 + '_' + this.flyIndex_3];
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
        }
        else {
            this.flyIndex_3++;
        }
    };
    TBNNView.prototype.playCardFly_4 = function () {
        var card = this['grpCard_' + 4 + '_' + this.flyIndex_4];
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
        }
        else {
            this.flyIndex_4++;
        }
    };
    TBNNView.prototype.playCardFly_5 = function () {
        var card = this['grpCard_' + 5 + '_' + this.flyIndex_5];
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
        }
        else {
            this.flyIndex_5++;
        }
    };
    /**发牌动作6 */
    TBNNView.prototype.playCardFly_6 = function () {
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
        var card = this['_puke_' + this.flyBankerIndex];
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
        }
        else {
            this.flyBankerIndex++;
        }
    };
    TBNNView.prototype.expandPai_1 = function () {
        clearInterval(this.expandIntval_1);
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + 1 + '_' + i];
            var pos = this.orginPlayerCardPos[1][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    };
    TBNNView.prototype.expandPai_2 = function () {
        clearInterval(this.expandIntval_2);
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + 2 + '_' + i];
            var pos = this.orginPlayerCardPos[2][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    };
    TBNNView.prototype.expandPai_3 = function () {
        clearInterval(this.expandIntval_3);
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + 3 + '_' + i];
            var pos = this.orginPlayerCardPos[3][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    };
    TBNNView.prototype.expandPai_4 = function () {
        clearInterval(this.expandIntval_4);
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + 4 + '_' + i];
            var pos = this.orginPlayerCardPos[4][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    };
    TBNNView.prototype.expandPai_5 = function () {
        clearInterval(this.expandIntval_5);
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + 5 + '_' + i];
            var pos = this.orginPlayerCardPos[5][i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    };
    TBNNView.prototype.expandPai_6 = function () {
        clearInterval(this.expandIntval_6);
        var poke = this.zijipokes;
        for (var i = 0; i < 5; i++) {
            var card = this['_puke_' + i];
            card.source = 'qznn_card_' + poke[i];
            var pos = this.orginPinCardPos[i];
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, this.expandPaiTime, egret.Ease.sineOut);
        }
    };
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
    TBNNView.prototype.onePlayerFanPai = function (index) {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes;
        this.isTanPai[index] = true;
        if (index == 0) {
            this._my_pai.visible = true;
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
        }
        else {
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
    };
    /**所有翻牌 */
    TBNNView.prototype.oneFanPai = function () {
        for (var i = 0; i < 6; i++) {
            if (this.isTanPai[i] == false) {
                this.onePlayerFanPai(i);
            }
        }
        this.interval = setInterval(this.cardEffectEnd.bind(this), 2000);
    };
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
    TBNNView.prototype.addNiuniuBei = function (grp, index) {
        var bmpurl = QZNNUtil.getInstance().getCardBmpUrl(index);
        grp.removeChildren();
        var niuniuBet;
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
            }
            else if (index == 13) {
                this.addWhnEff();
            }
            niuniuBet = new TenshuNiuBei();
            niuniuBet.x = 80;
            niuniuBet.y = 30;
        }
        niuniuBet.anchorOffsetX = (niuniuBet.width / 2);
        niuniuBet.anchorOffsetY = (niuniuBet.height / 2);
        grp.addChild(niuniuBet);
        var url = bmpurl;
        niuniuBet.play(url);
    };
    /**自己翻牌 */
    TBNNView.prototype.bankerCardRotation = function () {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes[0];
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = 'qznn_card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'qznn_card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]]);
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
    };
    TBNNView.prototype.blinkEffect = function () {
        clearInterval(this.interval);
        var result = this.cardResult.result;
        for (var i = 0; i < 4; i++) {
            if (result[i] == 1) {
            }
        }
        this.interval = setInterval(this.cardEffectEnd.bind(this), 2000);
    };
    /**结算 */
    TBNNView.prototype.cardEffectEnd = function () {
        clearInterval(this.interval);
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(9));
        var zhuangPos = {
            x: this.orginPlayerHeadPos[this.zhaungIndex].x,
            y: this.orginPlayerHeadPos[this.zhaungIndex].y
        };
        var pos = {
            x: 0,
            y: 0
        };
        for (var i = 0; i < this.cardResult.pokes.length; i++) {
            pos.x = this.orginPlayerHeadPos[i].x;
            pos.y = this.orginPlayerHeadPos[i].y;
            if (this.cardResult.pokes[i].win == true) {
                //xlLib.TipsUtils.showTipsDownToUp("+" + this.cardResult.pokes[i].score, numPos.x, numPos.y, false);
                this.updatePlayerGold(i, this.cardResult.pokes[i].score, true);
            }
            else {
                //xlLib.TipsUtils.showTipsDownToUp("-" + this.cardResult.pokes[i].score, numPos.x, numPos.y, false);
                this.updatePlayerGold(i, this.cardResult.pokes[i].score, false);
            }
            if (this.zhaungIndex == i) {
                continue;
            }
            //var goldFlyAnimator: uiCore.Animation;
            if (this.cardResult.pokes[i].win == true) {
                //goldFlyAnimator = AnimationUtils.goldFlyAnimation("qznn_showScore" + this.zhaungIndex + "-" + i + "_tex_20_png", "qznn_showScore" + this.zhaungIndex + "-" + i + "_tex_{0}_png");
                EffectUtils.coinsFly_1(this, zhuangPos.x, zhuangPos.y, pos.x, pos.y);
            }
            else {
                //goldFlyAnimator = AnimationUtils.goldFlyAnimation("qznn_showScore" + i + "-" + this.zhaungIndex + "_tex_20_png", "qznn_showScore" + i + "-" + this.zhaungIndex + "_tex_{0}_png");
                EffectUtils.coinsFly_1(this, pos.x, pos.y, zhuangPos.x, zhuangPos.y);
            }
            //this.addChild(goldFlyAnimator);
            //this.goldFlyAnimatorarr.push(goldFlyAnimator);
            //goldFlyAnimator.play();
        }
        for (var i = 0; i < this.cardResult.pokes.length; i++) {
            this.suiCoreGameEndScoreResultEffect(i, this['grpHead' + i], this.cardResult.pokes[i].win, this.cardResult.pokes[i].score);
        }
        this.interval = setInterval(this.victoryEffect.bind(this), 2000);
    };
    /**更新玩家金币 */
    TBNNView.prototype.updatePlayerGold = function (num, gold, result) {
        var _gold = UserInfo.getInstance().playes[num].goldcoins;
        if (result == true) {
            _gold = _gold + gold;
        }
        else {
            _gold = _gold - gold;
        }
        UserInfo.getInstance().playes[num].goldcoins = _gold;
        if (num == 0) {
            this.labelGold0.text = GlobalFunction.Formatconversion(_gold);
        }
        else {
            this['grpHead' + num];
            this.setGold(num, _gold);
        }
    };
    /**更新玩家金币 */
    TBNNView.prototype.setGold = function (num, gold) {
        this['labelGold' + num].text = GlobalFunction.Formatconversion(gold);
    };
    /**金币数字滚动效果 */
    TBNNView.prototype.suiCoreGameEndScoreResultEffect = function (index, player, state, score) {
        this._zhuang_img0.visible = false;
        this._zhuang_img1.visible = false;
        this._zhuang_img2.visible = false;
        this._zhuang_img3.visible = false;
        if (state) {
            if (index == 3 || index == 0) {
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
            }
            else {
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
        var label = new eui.BitmapLabel;
        label.textAlign = egret.HorizontalAlign.CENTER;
        var str = "";
        if (state == true) {
            label.font = "qznn_win_fnt";
            label.text = "0";
            str = "+";
        }
        else {
            label.font = "qznn_lose_fnt";
            label.text = "0";
            str = "-";
        }
        if (index == 0) {
            label.x = 90;
            label.y = -40;
        }
        else if (index == 1) {
            label.x = 30;
            label.y = -40;
        }
        else if (index == 2) {
            label.x = 30;
            label.y = -40;
        }
        else if (index == 3) {
            label.x = 90;
            label.y = -40;
        }
        else if (index == 4) {
            label.x = 30;
            label.y = -40;
        }
        else if (index == 5) {
            label.x = 30;
            label.y = -40;
        }
        label.scaleX = 1;
        label.scaleY = 1;
        player.addChild(label);
        this.turn_score_arr.push(label);
        uiCore.LabelEffect.instance.playEffect(label, { time: 3000, initNum: 1, num: score / 100, regulator: 50 }, str);
    };
    /**播放 胜利 通杀 通赔 动画 */
    TBNNView.prototype.victoryEffect = function () {
        clearInterval(this.interval);
        this.interval = 0;
        if (this.game_result == 1) {
            this.addNNVictoryEffect();
            this.game_result = 0;
        } /*else if (this.game_result == 2) {
            this.addTongsha();
            this.game_result = 0;
        } else if (this.game_result == 3) {
            this.addTongpei();
            this.game_result = 0;
        }*/
        this._jixu.visible = true;
        UserInfo.getInstance().isGameStart = false;
    };
    /**场景重置 */
    TBNNView.prototype.resetGame = function () {
        this.initData();
        for (var i = 0; i < 5; i++) {
            // this['bankerCard_' + i].source = '';
            var card_banker = this['bankerCard_' + i];
            card_banker.source = '';
            egret.Tween.removeTweens(card_banker);
            card_banker.x = this.orginBankerCardPos[i].x;
            card_banker.y = this.orginBankerCardPos[i].y;
            var card_pin = this['_puke_' + i];
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
                var card = this['grpCard_' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
            }
            // this['grpHead' + (index + 1)].setZhuang(false);
            this["_xiabei_" + index].visible = false;
            this["_xiabei_0_" + index].visible = false;
            //this["_whether_" + index].visible = false;
            //this["_img_" + index].visible = false;
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
        this.zhaungIndex = 0; //庄的位置
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
        this._xiabei_1.x = 337.84;
        this._xiabei_2.x = 338.05;
        this._xiabei_3.x = 730.09;
        this._xiabei_4.x = 1138.59;
        this._xiabei_5.x = 1140.99;
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
        for (var i_2 = 0; i_2 < this.turn_score_arr.length; i_2++) {
            this.turn_score_arr[i_2].parent.removeChild(this.turn_score_arr[i_2]);
        }
        this.turn_score_arr = [];
        for (var i_3 = 0; i_3 < this.win_eff_err.length; i_3++) {
            this.win_eff_err[i_3].stop();
            this.win_eff_err[i_3].parent.removeChild(this.win_eff_err[i_3]);
        }
        this.win_eff_err = [];
        for (var i_4 = 0; i_4 < this.goldFlyAnimatorarr.length; i_4++) {
            this.goldFlyAnimatorarr[i_4].stop();
            this.goldFlyAnimatorarr[i_4].parent.removeChild(this.goldFlyAnimatorarr[i_4]);
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
    };
    TBNNView.prototype.removeEff = function (eff) {
        if (eff) {
            eff.stop();
            if (eff.parent) {
                eff.parent.removeChild(eff);
            }
        }
    };
    TBNNView.prototype.removeNNbankerEff = function () {
        if (this.nnbankerEff) {
            this.nnbankerEff.stop();
            if (this.nnbankerEff.parent) {
                this.nnbankerEff.parent.removeChild(this.nnbankerEff);
            }
        }
    };
    TBNNView.prototype.getHistoryCallback = function (msg) {
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
    };
    TBNNView.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    /**返回游戏大厅 */
    TBNNView.prototype.Onquit = function () {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        if (UserInfo.getInstance().isGameStart) {
            xlLib.PopUpMgr.addPopUp(Hint, this, true, true, null, 1);
            return;
        }
        xlLib.SoundMgr.instance.stopBgMusic();
        var musicBg = ["hall_bg_mp3"];
        xlLib.SoundMgr.instance.playBgMusic(musicBg);
        xlLib.SceneMgr.instance.changeScene(Lobby);
    };
    TBNNView.prototype.destroy = function () {
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
                var card = this['grpCard_' + index + '_' + j];
                //card.source = '';
                egret.Tween.removeTweens(card);
            }
        }
        for (var i = 0; i < 5; i++) {
            var card_banker = this['bankerCard_' + i];
            //card_banker.source = '';
            egret.Tween.removeTweens(card_banker);
            var card_pin = this['_puke_' + i];
            //card_pin.source = '';
            egret.Tween.removeTweens(card_pin);
        }
    };
    return TBNNView;
}(eui.Component));
__reflect(TBNNView.prototype, "TBNNView");
//# sourceMappingURL=TBNNView.js.map