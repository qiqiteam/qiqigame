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
var QZNNView = (function (_super) {
    __extends(QZNNView, _super);
    function QZNNView() {
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
        _this.orginZhanCardPos = []; // 扑克中点停止位置
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
        _this.turn0 = 0;
        _this.timeNum = 0;
        _this.betNum = [];
        _this.cur_Num = 0;
        /**随机庄家动画 */
        _this.bet_data = [];
        _this.flyIntval = 0; //
        //private flyIndex0: number = 0;  //扑克位置(东西南北)
        //private flyIndex1: number = 0;  //扑克(指定位置1，2，3)
        _this.flyBankerIndex = 0;
        _this.flyIntval_1 = 0; //
        _this.flyIntval_2 = 0; //
        _this.flyIntval_3 = 0; //
        _this.flyIntval_4 = 0; //
        _this.flyIndex_1 = 0;
        _this.flyIndex_2 = 4;
        _this.flyIndex_3 = 4;
        _this.flyIndex_4 = 0;
        _this.flyPaiTime = 500;
        _this.faPaiTime = 200;
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
            this.texiao.play();
    
    
    
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
        _this.effectPlayerIndex = 0;
        _this.skinName = "QZNNViewSkin";
        return _this;
        //this.r = r;
    }
    QZNNView.prototype.addNNEff = function () {
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
    QZNNView.prototype.addWhnEff = function () {
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
    QZNNView.prototype.childrenCreated = function () {
        this.getOrginCardPos();
        this.addEvent();
        this.initData();
        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = "" + GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
        var inthematch = xlLib.PopUpMgr.addPopUp(Inthematch, this, true, true, null, 1);
        inthematch.TYPE_TAP = Const.TYPE_TBNN;
        UserInfo.getInstance().isGameStart = true;
        this.texiao = new NiuJiao();
        this.texiao.x = -180;
        this.texiao.y = -150;
        this._niujia.addChild(this.texiao);
    };
    /**
     * 数据初始化
     */
    QZNNView.prototype.initData = function () {
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.grpCard.visible = true;
        // this._btn_begin.visible = true;
        this._btn_switch.visible = false;
        this._group_qiang.visible = false;
        this.grpCountdown.visible = false;
        this._whether_.visible = true;
        this._whether_0.visible = false;
        this._whether_1.visible = false;
        this._whether_2.visible = false;
        this._whether_3.visible = false;
        this._img_0.visible = false;
        this._img_1.visible = false;
        this._img_2.visible = false;
        this._img_3.visible = false;
        this._xiabei.visible = true;
        this._xiabei_0_0_0.visible = false;
        this._xiabei_0_0_1.visible = false;
        this._xiabei_0_0_2.visible = false;
        this._xiabei_0_0_3.visible = false;
        this._xiabei_0_0.visible = false;
        this._xiabei_0.visible = false;
        this._xiabei_0_1.visible = false;
        this._xiabei_1.visible = false;
        this._xiabei_0_2.visible = false;
        this._xiabei_2.visible = false;
        this._xiabei_0_3.visible = false;
        this._xiabei_3.visible = false;
        this._jixu.visible = false;
        this._pingpai.visible = false;
        this._my_pai.visible = false;
        this.arr = [];
        this._zhi_0.text = "";
        this._zhi_1.text = "";
        this._zhi_2.text = "";
        this._zhi_3.text = "";
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
        this.pinpaiType.visible = false;
        this.pinpaiType0.visible = false;
        this.pinpaiType1.visible = false;
        this.pinpaiType2.visible = false;
        this._xiabei_0.x = 295.61;
        this._xiabei_1.x = 368.16;
        this._xiabei_2.x = 530.48;
        this._xiabei_3.x = 1146.78;
        this.grpHead0.visible = false;
        this.grpHead1.visible = false;
        this.grpHead2.visible = false;
        this.grpHead3.visible = false;
        this._tishi.visible = false;
        this._zhuang_img0.visible = false;
        this._zhuang_img1.visible = false;
        this._zhuang_img2.visible = false;
        this._zhuang_img3.visible = false;
        //-----------------------------------------------
        this.zhaungIndex = 0; //庄的座位号（当前游戏的座位号）
        //-----------------------------------------------
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + 0 + '_' + i];
            this.grpCard.setChildIndex(card, 5 - i);
        }
    };
    /**
     * 获取原始扑克的位置
     */
    QZNNView.prototype.getOrginCardPos = function () {
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
        for (var index = 0; index < 3; index++) {
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
        for (var i_1 = 0; i_1 < 4; i_1++) {
            // this['grpHead' + i];
            if (i_1 != 0) {
                this.setUserInfo(i_1, "", "", "");
            }
            var card = this['grpCard_z_' + i_1];
            card.source = '';
            card.anchorOffsetX = card.width / 2;
            card.x += card.width / 2;
            var pos = new egret.Point;
            pos.x = card.x;
            pos.y = card.y;
            this.orginZhanCardPos[i_1] = pos;
        }
        for (var i_2 = 0; i_2 < 4; i_2++) {
            var pos = new egret.Point;
            if (i_2 == 0 || i_2 == 2) {
                pos.x = this['grpHead' + i_2].x + 45;
                pos.y = this['grpHead' + i_2].y + 45;
            }
            else {
                pos.x = this['grpHead' + i_2].x + 55;
                pos.y = this['grpHead' + i_2].y + 70;
            }
            this.orginPlayerHeadPos[i_2] = pos;
        }
    };
    QZNNView.prototype.resize = function () {
    };
    /**继续游戏 */
    QZNNView.prototype.onRestartGame = function () {
        var inthematch = xlLib.PopUpMgr.addPopUp(Inthematch, this, true, true, null, 1);
        inthematch.TYPE_TAP = Const.TYPE_TBNN;
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_NIUNIU);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_QZNN);
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
    QZNNView.prototype.onClick = function (e) {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        if (e.target == this._btn_begin) {
            this.onRestartGame();
        }
        else if (e.target == this._btn_meun) {
            //this.addNNEff();
        }
        else if (e.target == this._btn_buqiang) {
            this.sendamessage(EventConst.niuniu_dohog, 0);
        }
        else if (e.target == this._btn_qiang_1) {
            this.sendamessage(EventConst.niuniu_dohog, 1);
        }
        else if (e.target == this._btn_qiang_2) {
            this.sendamessage(EventConst.niuniu_dohog, 2);
        }
        else if (e.target == this._btn_qiang_3) {
            this.sendamessage(EventConst.niuniu_dohog, 3);
        }
        else if (e.target == this._btn_qiang_4) {
            this.sendamessage(EventConst.niuniu_dohog, 4);
        }
        else if (e.target == this._btn_double_1) {
            this.sendamessage1(EventConst.niuniu_dobet, this.multipleList[0]);
        }
        else if (e.target == this._btn_double_2) {
            this.sendamessage1(EventConst.niuniu_dobet, this.multipleList[1]);
        }
        else if (e.target == this._btn_double_3) {
            this.sendamessage1(EventConst.niuniu_dobet, this.multipleList[2]);
        }
        else if (e.target == this._btn_double_4) {
            this.sendamessage1(EventConst.niuniu_dobet, this.multipleList[3]);
        }
        else if (e.target == this._btn_double_5) {
            this.sendamessage1(EventConst.niuniu_dobet, this.multipleList[4]);
        }
        else if (e.target == this._youniu) {
            var intnum1 = this.arr_fen[0] + this.arr_fen[1] + this.arr_fen[2];
            if (this.arr_fen[0] != 0 && this.arr_fen[1] != 0 && this.arr_fen[2] != 0) {
                if (intnum1 % 10 == 0) {
                    this._pingpai.visible = false;
                    this.texiao.stop();
                    this._my_pai.visible = true;
                    this.returnpinpai(1);
                }
                else {
                    this.playClickSound(QZNNUtil.getInstance().getSoundEffect(12));
                    this.ppcuowu();
                }
            }
            else {
                this.ppcuowu();
            }
        }
        else if (e.target == this._meiniu) {
            if (this.niu != 0) {
                this.playClickSound(QZNNUtil.getInstance().getSoundEffect(12));
                this.ppcuowu();
            }
            else {
                this._pingpai.visible = false;
                this.texiao.stop();
                this._my_pai.visible = true;
                this.returnpinpai(0);
            }
        }
    };
    /**返回拼牌顺序 */
    QZNNView.prototype.returnpinpai = function (data) {
        if (data == 0) {
            var gameData_1 = UserInfo.getInstance().getGameDataByindex(Const.GAME_NIUNIU);
            var typeData_1 = gameData_1.getTypeDataByindex(Const.TYPE_QZNN);
            var playway = typeData_1.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
            var senddata = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token, playway: playway.id,
                centerCard: [this.score1[0], this.score1[1], this.score1[2], this.score1[3], this.score1[4]]
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_manual, senddata, function (data) {
            }, this);
        }
        else if (data == 1) {
            var aaaaa = 3;
            for (var i = 0; i < this.arr_fen1.length; i++) {
                for (var j = 0; j < this.score1.length; j++) {
                    if (this.arr_fen1[i] == this.score1[j]) {
                        this.score1[j] = null;
                        continue;
                    }
                }
            }
            for (var k = 0; k < this.score1.length; k++) {
                if (this.score1[k] !== null) {
                    this.arr_fen1[aaaaa] = this.score1[k];
                    aaaaa++;
                }
            }
            var gameData_2 = UserInfo.getInstance().getGameDataByindex(Const.GAME_NIUNIU);
            var typeData_2 = gameData_2.getTypeDataByindex(Const.TYPE_QZNN);
            var playway = typeData_2.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
            var senddata = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token, playway: playway.id,
                centerCard: [this.arr_fen1[0], this.arr_fen1[1], this.arr_fen1[2], this.arr_fen1[3], this.arr_fen1[4]]
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_manual, senddata, function (data) {
            }, this);
        }
    };
    /**拼牌错误 */
    QZNNView.prototype.ppcuowu = function () {
        var _this = this;
        if (!this.pinpaicuowu) {
            this.pinpaicuowu = xlLib.DisplayUtils.createMovieClicp('pinpaicuowu', 'pinpaicuowu');
            this.pinpaicuowu.x = 1200;
            this.pinpaicuowu.y = 580;
            this.pinpaicuowu.frameRate = 10;
            this.pinpaicuowu.touchEnabled = false;
        }
        this.pinpaicuowu.gotoAndPlay(0, 1);
        this.addChild(this.pinpaicuowu);
        this.pinpaicuowu.addEventListener(egret.Event.COMPLETE, function (e) {
            if (_this.pinpaicuowu.parent) {
                _this.pinpaicuowu.parent.removeChild(_this.pinpaicuowu);
            }
        }, this);
    };
    /**投注  sendstr 命令 bet 倍数 0~4 */
    QZNNView.prototype.sendamessage = function (sendstr, bet) {
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
        this._group_qiang.visible = false;
    };
    /**抢庄 sendstr 命令 bet 倍数 0~5*/
    QZNNView.prototype.sendamessage1 = function (sendstr, bet) {
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
    };
    /**注册事件 */
    QZNNView.prototype.addEvent = function () {
        this._btn_meun.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
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
        this._youniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._meiniu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);
        EventUtil.addEventListener(EventConst.onUserShowOrderUpdate, this.onShowOrder, this);
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.addEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.addEventListener(EventConst.onUserHogOrderUpdate, this.OnHogUpdate, this);
        // EventUtil.addEventListener(EventConst.banker, this.acceptbanker, this);
        this._puke_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Suapai, this);
        this._puke_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Suapai, this);
        this._puke_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Suapai, this);
        this._puke_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Suapai, this);
        this._puke_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Suapai, this);
    };
    /**抢庄牛牛拼牌通知 */
    QZNNView.prototype.onShowOrder = function (data) {
        // console.log(data._obj.index + "号准备");
        if (data._obj.index > 0) {
            this['pinpaiType' + (data._obj.index - 1)].visible = true;
        }
        else {
            this.pinpaiType.visible = true;
            this._tishi.visible = true;
            this._tishi_text.text = "请等待其他玩家拼牌...";
        }
    };
    /**游戏状态 */
    QZNNView.prototype.GameStatus = function (data) {
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
                this.onHogBack(data);
                break; //抢庄
            case 4:
                this.onbetBack(data);
                break; //下注
            case 5:
                ;
                break;
            case 6:
                this.onThecardtype(data);
                break; //自己的牌
            case 7:
                this.oncloseanaccount(data);
                break; //其他玩家的牌型  结算
            case 8:
                ;
                break; // 游戏结束
        }
    };
    /**监听抢庄 */
    QZNNView.prototype.onHogBack = function (data) {
        xlLib.PopUpMgr.removePopUp(Inthematch, 1);
        this.grpCountdown.visible = true;
        this.startCountDown(data._obj.seconds);
        this._group_qiang.visible = true;
        if (!this.gamestarEff) {
            this.gamestarEff = new QZNNGameStart();
            this.gamestarEff.anchorOffsetX = this.gamestarEff.width / 2;
            this.gamestarEff.anchorOffsetY = this.gamestarEff.height / 2;
            this.gamestarEff.x = xlLib.Global.screenWidth / 2;
            this.gamestarEff.y = xlLib.Global.screenHeight / 2;
        }
        this.gamestarEff.play();
        this.addChild(this.gamestarEff);
    };
    /**胜利 */
    QZNNView.prototype.addNNVictoryEffect = function () {
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
    QZNNView.prototype.addTongsha = function () {
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
    /**通杀 */
    QZNNView.prototype.addTongpei = function () {
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
    QZNNView.prototype.onbetBack = function (data) {
        this._tishi.visible = false;
        this.time = 0;
        this.startCountDown(data._obj.seconds);
        this._group_qiang.visible = false;
        this._btn_switch.visible = true;
        if (data._obj.roomStatus == 4) {
            this.acceptbanker(data);
        }
        for (var i = 0; i < data._obj.hogList.length; i++) {
            this['_btn_double_' + (i + 1)].visible = true;
            if (data._obj.hogList[i].hogOrBet >= 10) {
                this['beishu_' + i].visible = true;
                this['beishu_' + i].source = 'img_XB_1_png';
                this['beishu_0_' + i].visible = true;
                this['beishu_0_' + i].source = 'img_XB_' + data._obj.hogList[i].hogOrBet % 10 + '_png';
                this['bs_img_' + i].visible = true;
            }
            else if (data._obj.hogList[i].hogOrBet < 10) {
                this['beishu_' + i].visible = false;
                this['beishu_' + i].source = '';
                this['beishu_0_' + i].visible = true;
                this['beishu_0_' + i].source = 'img_XB_' + data._obj.hogList[i].hogOrBet + '_png';
                // console.log(data._obj.hogList[i].hogOrBet);
                this['bs_img_' + i].visible = true;
            }
            this.multipleList[i] = data._obj.hogList[i].hogOrBet;
        }
    };
    /**自己的牌 */
    QZNNView.prototype.onThecardtype = function (data) {
        this._tishi.visible = false;
        this.zijipokes = data._obj.showList;
        this.score1 = data._obj.showList;
        this.niu = data._obj.niu;
        this.time = 0;
        this.startCountDown(data._obj.seconds);
        this.cardEffect();
    };
    /**其他玩家的牌型   结算 */
    QZNNView.prototype.oncloseanaccount = function (data) {
        this.pinpaiType.visible = true;
        this.pinpaiType0.visible = true;
        this.pinpaiType1.visible = true;
        this.pinpaiType2.visible = true;
        this.game_result = data._obj.result;
        this.time = 0;
        this.grpCountdown.visible = false;
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
        this._pingpai.visible = false;
        this.texiao.stop();
        this._my_pai.visible = true;
        this.interval = setInterval(this.playerCardRotation.bind(this), 800);
    };
    /**更新下注通知(所有人) */
    QZNNView.prototype.OnBetUpdate = function (data) {
        // console.log(data._obj.index + "号下注");
        this._whether_.visible = false;
        if (UserInfo.getInstance().uid == data._obj.userid) {
            this._btn_switch.visible = false;
            this._tishi.visible = true;
            this._tishi_text.text = "请等待其他闲家下注...";
        }
        if (data._obj.code == 200) {
            this.jiazhu(data._obj.hogOrBet, data._obj.index);
        }
    };
    /**更新抢庄通知(所有人) */
    QZNNView.prototype.OnHogUpdate = function (data) {
        // console.log(data._obj.index + "号抢庄");
        this.intnum[data._obj.index] = data._obj.hogOrBet;
        if (UserInfo.getInstance().uid == data._obj.userid) {
            this._group_qiang.visible = false;
            this._tishi.visible = true;
            this._tishi_text.text = "请等待其他玩家抢庄...";
        }
        if (data._obj.code == 200) {
            this.qiangzhuang(data._obj.hogOrBet, data._obj.index);
        }
    };
    /**是否抢庄 */
    QZNNView.prototype.qiangzhuang = function (data, num) {
        if (data == 0) {
            this['_whether_' + num].visible = true;
            this['_whether_' + num].source = 'img_BQ_png';
            this['_img_' + num].visible = false;
            this['_img_' + num].source = '';
        }
        else {
            this['_whether_' + num].visible = true;
            this['_whether_' + num].source = 'img_BQ_0_png';
            // console.log(data);
            this['_img_' + num].visible = true;
            this['_img_' + num].source = 'img_BQ_0_' + data + '_png';
        }
    };
    /**是否下注 */
    QZNNView.prototype.jiazhu = function (data, num) {
        if (data >= 10) {
            this['_xiabei_0_' + num].visible = true;
            this['_xiabei_0_' + num].source = 'img_XB_png';
            this['_xiabei_' + num].visible = true;
            this['_xiabei_0_0_' + num].visible = true;
            this['_xiabei_' + num].source = 'img_XB_' + data % 10 + '_png';
            this['_xiabei_0_0_' + num].source = 'img_XB_' + 1 + '_png';
        }
        else if (data < 10) {
            this['_xiabei_0_' + num].visible = true;
            this['_xiabei_0_' + num].source = 'img_XB1_png';
            this['_xiabei_' + num].visible = true;
            this['_xiabei_' + num].x -= 20;
            this['_xiabei_0_0_' + num].visible = false;
            this['_xiabei_' + num].source = 'img_XB_' + data + '_png';
        }
    };
    QZNNView.prototype.turnBankerShow = function () {
        for (var i = 0; i < 4; i++) {
            this["_zhuang_img" + i].visible = false;
        }
        if (this.timeNum == 12) {
            //this.turn0 = 0;
            this.timeNum = 0;
            clearInterval(this.turn0);
            this.setbanker(this.bet_data);
            //this.bet_data = [];
            return;
        }
        if (this.cur_Num != 0) {
            var sum = 0;
            do {
                sum = parseInt((Math.random() * this.betNum.length) + "");
                if (this.cur_Num != sum) {
                    break;
                }
            } while (0);
            this.cur_Num = parseInt((Math.random() * this.betNum.length) + "");
        }
        else {
            this.cur_Num = parseInt((Math.random() * this.betNum.length) + "");
        }
        var value = this.betNum[this.cur_Num];
        this["_zhuang_img" + value].visible = true;
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(13));
        this.timeNum++;
    };
    QZNNView.prototype.acceptbanker = function (data) {
        this.bet_data = [];
        this.bet_data = data;
        var max = -1;
        this.betNum = [];
        for (var i = 0; i < this.intnum.length; i++) {
            if (max < this.intnum[i]) {
                max = this.intnum[i];
                this.betNum = [];
                this.betNum.push(i);
            }
            else if (max == this.intnum[i]) {
                this.betNum.push(i);
            }
        }
        if (this.betNum.length > 1) {
            this.turn0 = 0;
            this.cur_Num = 0;
            this.turn0 = setInterval(this.turnBankerShow.bind(this), 100);
            return;
        }
        else {
            this.setbanker(data);
            this.bet_data = [];
        }
    };
    /**设置庄家 */
    QZNNView.prototype.setbanker = function (data) {
        var num = UserInfo.getInstance().findSeatNumber(data._obj.banker.index);
        this['_zhuang_img' + num].visible = true;
        if (num % 2 == 0) {
            if (!this.niuniukuang) {
                this.niuniukuang = new NiuZhang0();
                this.niuniukuang.x = -72;
                this.niuniukuang.y = -88;
                this.niuniukuang.play();
            }
            this['grpHead' + num].addChild(this.niuniukuang);
        }
        else {
            if (!this.niuniukuang1) {
                this.niuniukuang1 = new NiuZhang1();
                this.niuniukuang1.x = -125;
                this.niuniukuang1.y = -42;
                this.niuniukuang1.play();
            }
            this['grpHead' + num].addChild(this.niuniukuang1);
        }
        if (!this.niuniuTX) {
            this.niuniuTX = new ZhuangIconTX();
            this.niuniuTX.x = -180;
            this.niuniuTX.y = -140;
            this.niuniuTX.play();
        }
        this['grpHead' + num].addChild(this.niuniuTX);
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(11));
        if (num == 0) {
            this._tishi.visible = true;
            this._tishi_text.text = "请等待闲家下注...";
        }
        this.zhaungIndex = num;
        /*
        this.zhaungIndex = num;
        let img: eui.Image = new eui.Image("selectedBankerIcon_png");
        img.x = 15;
        img.y = 0;
        img.width = 150;
        img.height = 150;
        for (let i = 0; i <= 14; i++) {
            let index: Number = parseInt((Math.random() * 4) + "");
            setTimeout(() => {
                if (i == 14) {
                    if (img.parent) {
                        img.parent.removeChild(img);
                        this.randomZhuan(num);
                    }
                } else {
                    this['grpHead' + index].addChild(img);
                }
            }, i * 100);
        }*/
    };
    QZNNView.prototype.randomZhuan = function (num) {
        if (num == 0) {
            this.addNNbankerEff();
        }
        else {
            this['grpHead' + num].setZhuang(true);
        }
    };
    QZNNView.prototype.addNNbankerEff = function () {
        if (!this.nnbankerEff) {
            this.nnbankerEff = xlLib.DisplayUtils.createMovieClicp('nn_banker', 'nn_banker');
            this.nnbankerEff.x = 90;
            this.nnbankerEff.y = 80;
            this.nnbankerEff.frameRate = 10;
            this.nnbankerEff.touchEnabled = false;
        }
        this['grpHead0'].addChild(this.nnbankerEff);
        this.nnbankerEff.gotoAndPlay(0, 1);
    };
    /**
     * 自己加入房间
     */
    QZNNView.prototype.addPlayers = function (data) {
        this.grpHead0.visible = true;
        //设置自己信息
        var mask2 = new egret.Shape;
        mask2.graphics.beginFill(0xff0000);
        mask2.graphics.drawRect(0, 0, 117, 115);
        mask2.graphics.endFill();
        mask2.x = this.imghead0.x + 6;
        mask2.y = this.imghead0.y + 5;
        this.grpHead0.addChild(mask2);
        this.imghead0.mask = mask2;
        if (data._obj.player[0].id == UserInfo.getInstance().myPlayer.id) {
            this.labelHead0.text = UserInfo.getInstance().myPlayer.username;
            this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().myPlayer.goldcoins);
            this.imghead0.source = "women7_png";
        }
        //设置其他玩家信息
        for (var i = 1; i < data._obj.player.length; i++) {
            if (data._obj.player[i] != null) {
                // this['grpHead' + i];
                this.setUserInfo(i, UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins, "women7_png"); //data._obj.player[i].headimg
            }
            else {
                //this['grpHead' + i].setUserInfo("圣诞节回复", "100000", "F4_03_png");
                // this['grpHead' + i];
                this.setUserInfo(i, "", "", "");
            }
        }
    };
    /**新玩家加入 */
    QZNNView.prototype.playerJoinRoom = function (data) {
        // console.log(data._obj.player.id);
        // console.log(UserInfo.getInstance().myPlayer.id);
        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {
        }
        else {
            this['grpHead' + data._obj.player.index].visible = true;
            this['grpHead' + data._obj.player.index];
            this.setUserInfo(data._obj.player.index, data._obj.player.username, data._obj.player.goldcoins, "women7_png");
        }
    };
    /** num 几号玩家  _name 名字    _gold 金币   _imghead 头像图片*/
    QZNNView.prototype.setUserInfo = function (num, _name, _gold, _imghead) {
        this['imghead' + num].source = _imghead;
        this['labelHead' + num].text = _name;
        this['labelGold' + num].text = GlobalFunction.Formatconversion(_gold);
    };
    /**算牌 */
    QZNNView.prototype.Suapai = function (e) {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        //如果有，就踢出去
        for (var i = 0; i < 3; i++) {
            if (this.arr[i] == e.target) {
                this.arr[i].y += 40;
                this.arr[i] = null;
                //分数踢出
                this["_zhi_" + i].text = "";
                this.arr_fen[i] = 0;
                this.arr_fen1[i] = 0;
                this.calculatescore();
                return;
            }
        }
        for (var i = 0; i < 3; i++) {
            if (this.arr[i] != null) {
                continue;
            }
            for (var j = 0; j < 5; j++) {
                if (e.target == this["_puke_" + j]) {
                    this.arr[i] = this["_puke_" + j];
                    this["_puke_" + j].y -= 40;
                    this["_zhi_" + i].text = this.score[j];
                    this.arr_fen[i] = this.score[j];
                    this.arr_fen1[i] = this.score1[j];
                    this.calculatescore();
                    return;
                }
            }
        }
    };
    /**计算分数 */
    QZNNView.prototype.calculatescore = function () {
        var aaa = this.arr_fen[0] + this.arr_fen[1] + this.arr_fen[2];
        if (aaa == 0) {
            this._zhi_3.text = '';
        }
        else {
            this._zhi_3.text = aaa + '';
        }
    };
    /**开始倒计时*/
    QZNNView.prototype.startCountDown = function (time) {
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
    QZNNView.prototype.timerFunc = function (evt) {
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
            this.timeTxt.text = "00";
            this.clearTime();
        }
    };
    /**清除倒计时*/
    QZNNView.prototype.clearTime = function () {
        if (this.timer) {
            this.timer.stop();
            // this.timeTxt.visible = false;
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    };
    QZNNView.prototype.clearTimer = function () {
        if (this.cdNum > 0) {
            this.cdNum--;
        }
        else {
            this.cdTimer.stop();
            this.cdNum = 0;
            this.resetGame();
        }
    };
    //msg.state     1 free 禁止玩儿游戏   2 下注中  3 封盘倒计时
    QZNNView.prototype.joinCallback = function (msg) {
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
            // console.log('join_game: ' + data.state);
        }
        else {
            //TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
        }
    };
    QZNNView.prototype.onMsgListen = function (data) {
        var msg = data.msg;
        // console.log('onMsgListen: ' + msg.type, '_niuniuMsgListen_');
        switch (msg.type) {
            case 0://开始下注
                this.cdNum = parseInt(msg.time) + 3;
                this.cdTimer.start();
                break;
            case 1://封盘
                this.isCanBets = false;
                // this.showGameTips(3);
                break;
            case 2://结算
                this.setGameResult(msg.data);
                break;
            case 3://更换庄家
                this.changeBankerObj = msg.zhuang;
                this.isChangeBanker = true;
                break;
            case 4://更新座位
                this.updataSeat(1, msg.data);
                break;
            case 5://离开座位
                this.updataSeat(2, msg.seat);
                break;
            case 6://同步彩金
                //this.updateHandsel(msg);
                break;
            case 7://通知庄 名次
                //this.updateBankerRank(msg);
                break;
        }
    };
    /**
     * 获取结算数据，显示结果面板时设置
     */
    QZNNView.prototype.setGameResult = function (data) {
        //this.grpCountdown.visible = false;
        this.cardResult = data;
    };
    /**
     * 同步座位
     */
    QZNNView.prototype.updataSeat = function (type, data) {
        if (type == 1) {
            this['imghead' + data.seat].source = data.headurl;
            this['imghead' + data.seat].height = this['imghead' + data.seat].width = 70;
            this['labelHead' + data.seat].text = data.nick;
        }
        else {
            this['imghead' + data].source = '';
            this['labelHead' + data].text = '';
        }
    };
    //定时同步下注筹码
    QZNNView.prototype.getBetsCallback = function (msg) {
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
                        this.showCoins(list[i].score - this.poolBetArray[i], i); //list[i].score
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
    };
    // //提示信息  2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    // private showGameTips(type): void {
    //     this.grpTipsInfo.source = QZNNUtil.getInstance().getMsgSource(type);
    //     this.grpTips.visible = true;
    //     this.grpTipsbg.alpha = 0;
    //     this.grpTipsInfo.x = 640;
    //     this.playClickSound(QZNNUtil.getInstance().getSoundEffect(type));
    //     egret.Tween.get(this.grpTipsbg).to({ alpha: 1 }, 400).wait(400).call(function () {
    //         egret.Tween.get(this).to({ alpha: 0 }, 400);
    //     }, this.grpTipsbg);
    //     egret.Tween.get(this.grpTipsInfo).to({ x: 0 }, 400).wait(400).call(function () {
    //         egret.Tween.get(this).to({ x: -640 }, 400);
    //     }, this.grpTipsInfo);
    // }
    //显示筹码
    QZNNView.prototype.showCoins = function (num, index) {
        var isRemove = false;
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(8));
        var point = QZNNUtil.getInstance().getCoinsPos(index);
        var arr = QZNNUtil.getInstance().coinsType(num);
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
            // this.grpCoins.addChild(arr[i]);
            egret.Tween.get(arr[i]).to({ x: tx, y: ty }, 200).call(function () {
                if (this[0]) {
                    this[1].parent.removeChild(this[1]);
                }
            }, [isRemove, arr[i]]);
        }
    };
    /**
     * 显示发牌
     */
    QZNNView.prototype.cardEffect = function () {
        this._btn_switch.visible = false;
        this._group_qiang.visible = false;
        this.isCardEffectShow = true;
        //this.flyIntval = setInterval(this.playCardFly.bind(this), 40);
        this.flyIntval_1 = setInterval(this.playCardFly_1.bind(this), this.faPaiTime);
        this.flyIntval_2 = setInterval(this.playCardFly_2.bind(this), this.faPaiTime);
        this.flyIntval_3 = setInterval(this.playCardFly_3.bind(this), this.faPaiTime);
        this.flyBankerIndex = 0;
        this.flyIntval_4 = setInterval(this.playCardFly_4.bind(this), this.faPaiTime);
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
    QZNNView.prototype.playCardFly_1 = function () {
        var card = this['grpCard_' + 0 + '_' + this.flyIndex_1];
        card.source = 'qznn_card_100';
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[0][this.flyIndex_1];
        var z_pos = this.orginZhanCardPos[1];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        //egret.Tween.get(card).to({ x: pos.x, y: pos.y, alpha: 1, scaleX: 1, scaleY: 1 }, 800, egret.Ease.sineInOut);
        egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_1 == 4) {
            this.flyIndex_1 = 0;
            clearInterval(this.flyIntval_1);
        }
        else {
            this.flyIndex_1++;
        }
    };
    QZNNView.prototype.playCardFly_2 = function () {
        var card = this['grpCard_' + 1 + '_' + this.flyIndex_2];
        card.source = 'qznn_card_100';
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[1][this.flyIndex_2];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        var z_pos = this.orginZhanCardPos[2];
        egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_2 == 0) {
            this.flyIndex_2 = 4;
            clearInterval(this.flyIntval_2);
        }
        else {
            this.flyIndex_2--;
        }
    };
    QZNNView.prototype.playCardFly_3 = function () {
        var card = this['grpCard_' + 2 + '_' + this.flyIndex_3];
        card.source = 'qznn_card_100';
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPlayerCardPos[2][this.flyIndex_3];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        var z_pos = this.orginZhanCardPos[3];
        egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        if (this.flyIndex_3 == 0) {
            this.flyIndex_3 = 4;
            clearInterval(this.flyIntval_3);
        }
        else {
            this.flyIndex_3--;
        }
    };
    /**自己发牌动作 */
    QZNNView.prototype.playCardFly_4 = function () {
        if (this.flyBankerIndex == 5) {
            this.flyBankerIndex = 0;
            clearInterval(this.flyIntval_4);
            this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
            var poke = this.zijipokes;
            for (var i = 0; i < 5; i++) {
                var card_my = this['_puke_' + i];
                card_my.source = 'qznn_card_100';
                egret.Tween.get(card_my).to({ scaleX: 0 }, 400).call(function () {
                    this[0].source = 'qznn_card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 400);
                }, [card_my, poke[i]]);
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
        this.texiao.play();
        var card = this['_puke_' + this.flyBankerIndex];
        card.x = xlLib.Global.screenWidth / 2;
        card.y = xlLib.Global.screenHeight / 2;
        card.source = 'qznn_card_100';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        this.orginPinCardPos;
        card.alpha = 0;
        card.scaleX = 0.2;
        card.scaleY = 0.2;
        var pos = this.orginPinCardPos[this.flyBankerIndex];
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(6));
        var z_pos = this.orginZhanCardPos[0];
        egret.Tween.get(card).to({ x: z_pos.x, y: z_pos.y, alpha: 0.6, scaleX: 1, scaleY: 1 }, this.flyPaiTime, egret.Ease.sineIn).to({ x: pos.x, y: pos.y, alpha: 1 }, this.flyPaiTime, egret.Ease.sineOut);
        this.flyBankerIndex++;
    };
    /**结算 其他玩家翻牌*/
    QZNNView.prototype.playerCardRotation = function () {
        this._tishi.visible = false;
        this.pinpaiType.visible = false;
        for (var i_3 = 0; i_3 > 3; i_3++) {
            this['pinpaiType' + i_3].visible = false;
        }
        if (this.effectPlayerIndex == this.cardResult.pokes.length - 1) {
            clearInterval(this.interval);
            this.effectPlayerIndex = 0;
            this.bankerCardRotation();
            return;
        }
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes;
        var index = this.effectPlayerIndex;
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + index + '_' + i];
            if (index == 0) {
                this.grpCard.setChildIndex(card, i);
            }
            card.source = 'qznn_card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'qznn_card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke[index + 1].value[i]]);
        }
        this.addNiuniuBei(this['labCardType' + index], poke[index + 1].type);
        this.playClickSound(QZNNUtil.getInstance().getCardMusicType(poke[index + 1].type));
        this['labCardType' + index].visible = true;
        ;
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
    };
    QZNNView.prototype.addNiuniuBei = function (grp, index) {
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
    QZNNView.prototype.bankerCardRotation = function () {
        this.pinpaiType.visible = false;
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
    QZNNView.prototype.blinkEffect = function () {
        clearInterval(this.interval);
        var result = this.cardResult.result;
        for (var i = 0; i < 4; i++) {
            if (result[i] == 1) {
            }
        }
        this.interval = setInterval(this.cardEffectEnd.bind(this), 2000);
    };
    QZNNView.prototype.cardEffectEnd = function () {
        clearInterval(this.interval);
        var data = this.cardResult;
        var isShow = false;
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
                EffectUtils.coinsFly_2(this, zhuangPos.x, zhuangPos.y, pos.x, pos.y);
            }
            else {
                //goldFlyAnimator = AnimationUtils.goldFlyAnimation("qznn_showScore" + i + "-" + this.zhaungIndex + "_tex_20_png", "qznn_showScore" + i + "-" + this.zhaungIndex + "_tex_{0}_png");
                EffectUtils.coinsFly_2(this, pos.x, pos.y, zhuangPos.x, zhuangPos.y);
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
    QZNNView.prototype.updatePlayerGold = function (num, gold, result) {
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
    QZNNView.prototype.setGold = function (num, gold) {
        this['labelGold' + num].text = GlobalFunction.Formatconversion(gold);
    };
    /**金币数字滚动效果 */
    QZNNView.prototype.suiCoreGameEndScoreResultEffect = function (index, player, state, score) {
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
            label.x = 0;
            label.y = -40;
            label.textAlign = egret.HorizontalAlign.RIGHT;
        }
        else if (index == 1) {
            label.x = 30;
            label.y = -40;
        }
        else if (index == 2) {
            label.x = 90;
            label.y = -40;
        }
        else if (index == 3) {
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
    QZNNView.prototype.victoryEffect = function () {
        clearInterval(this.interval);
        this.interval = 0;
        if (this.game_result == 1) {
            this.addNNVictoryEffect();
            this.game_result = 0;
        }
        else if (this.game_result == 2) {
            this.addTongsha();
            this.game_result = 0;
        }
        else if (this.game_result == 3) {
            this.addTongpei();
            this.game_result = 0;
        }
        this._jixu.visible = true;
        UserInfo.getInstance().isGameStart = false;
    };
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
    /**场景重置 */
    QZNNView.prototype.resetGame = function () {
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
        this.texiao.stop();
        this._my_pai.visible = false;
        this.labCardTypeBanker.visible = false;
        for (var index = 0; index < this.cardResult.pokes.length - 1; index++) {
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
            this["_whether_" + index].visible = false;
            this["_img_" + index].visible = false;
        }
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        // while (this.grpCoins.numChildren > 0) {
        //     this.grpCoins.removeChildAt(0);
        // }
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
        this.pinpaiType.visible = false;
        this.pinpaiType0.visible = false;
        this.pinpaiType1.visible = false;
        this.pinpaiType2.visible = false;
        this.grpCountdown.visible = true;
        this._xiabei_0.x = 295.61;
        this._xiabei_1.x = 368.16;
        this._xiabei_2.x = 530.48;
        this._xiabei_3.x = 1146.78;
        this.grpHead0.visible = false;
        this.grpHead1.visible = false;
        this.grpHead2.visible = false;
        this.grpHead3.visible = false;
        this._zhuang_img0.visible = false;
        this._zhuang_img1.visible = false;
        this._zhuang_img2.visible = false;
        this._zhuang_img3.visible = false;
        this._tishi.visible = false;
        for (var i_4 = 0; i_4 < this.turn_score_arr.length; i_4++) {
            this.turn_score_arr[i_4].parent.removeChild(this.turn_score_arr[i_4]);
        }
        this.turn_score_arr = [];
        for (var i_5 = 0; i_5 < this.win_eff_err.length; i_5++) {
            this.win_eff_err[i_5].stop();
            this.win_eff_err[i_5].parent.removeChild(this.win_eff_err[i_5]);
        }
        this.win_eff_err = [];
        for (var i_6 = 0; i_6 < this.goldFlyAnimatorarr.length; i_6++) {
            this.goldFlyAnimatorarr[i_6].stop();
            this.goldFlyAnimatorarr[i_6].parent.removeChild(this.goldFlyAnimatorarr[i_6]);
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
    QZNNView.prototype.removeEff = function (eff) {
        if (eff) {
            eff.stop();
            if (eff.parent) {
                eff.parent.removeChild(eff);
            }
        }
    };
    QZNNView.prototype.removeNNbankerEff = function () {
        if (this.nnbankerEff) {
            this.nnbankerEff.stop();
            if (this.nnbankerEff.parent) {
                this.nnbankerEff.parent.removeChild(this.nnbankerEff);
            }
        }
    };
    QZNNView.prototype.getHistoryCallback = function (msg) {
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
    QZNNView.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    /**返回游戏大厅 */
    QZNNView.prototype.Onquit = function () {
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
    QZNNView.prototype.destroy = function () {
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
        this._youniu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._meiniu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);
        EventUtil.removeEventListener(EventConst.onUserShowOrderUpdate, this.onShowOrder, this);
        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.removeEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.removeEventListener(EventConst.onUserHogOrderUpdate, this.OnHogUpdate, this);
        // EventUtil.removeEventListener(EventConst.banker, this.acceptbanker, this);
        if (this.cdTimer != null) {
            this.cdTimer.removeEventListener(egret.TimerEvent.TIMER, this.clearTimer, this);
        }
        this.removeEff(this.nnbankerEff);
    };
    return QZNNView;
}(eui.Component));
__reflect(QZNNView.prototype, "QZNNView");
//# sourceMappingURL=QZNNView.js.map