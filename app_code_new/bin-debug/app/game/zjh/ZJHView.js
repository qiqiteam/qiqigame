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
        _this.pailist = []; //临时存储牌的信息
        //private labCardTypeBanker: eui.Label;
        //public grpCaijin: eui.Group;
        //public grpCaijinLabel: eui.Label;
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
        _this.zhangIndex = 4; //庄的位置
        _this.flyIntval = 0; //
        _this.flyIndex0 = 4; //扑克位置(东西南北)
        _this.flyIndex1 = 0; //扑克(指定位置1，2，3)
        _this.skinName = "ZJHViewSkin";
        return _this;
        //this.r = r;
    }
    // private testNum: number = 0;
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
    };
    ZJHView.prototype.initData = function () {
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
    };
    //获取原始扑克的位置
    ZJHView.prototype.getOrginCardPos = function () {
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
                var card = this['grpCard' + index + '_' + j];
                card.source = '';
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos = new egret.Point;
                pos.x = card.x + 24;
                pos.y = card.y;
                cardPos[j] = pos;
            }
            this.orginPlayerCardPos[index] = cardPos;
        }
        for (var i = 1; i < 10; i++) {
            this['grpHead' + i].setUserInfo("", "", "");
        }
    };
    ZJHView.prototype.resize = function () {
    };
    ZJHView.prototype.OnClick = function (e) {
        var _this = this;
        if (e.target == this._btn_prepare) {
            console.log("_btn_prepare");
            var gameData_1 = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
            var typeData_1 = gameData_1.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
            var playway = typeData_1.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
            var senddata = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token,
                playway: playway.id
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.prepare, senddata, function (data) {
                xlLib.TipsUtils.showFloatWordTips("开始准备");
                console.log("开始准备");
                _this._btn_prepare.visible = false;
            }, this);
        }
        else if (e.target == this._btn_kanpai) {
            console.log("_btn_kanpai");
            var gameData_2 = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
            var typeData_2 = gameData_2.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
            var playway = typeData_2.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
            var senddata = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token,
                playway: playway.id
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.seecard, senddata, function (data) {
                xlLib.TipsUtils.showFloatWordTips("看牌");
                console.log("看牌");
                var poke = {
                    type: data.cardGenre,
                    value: data.cardtype //牌值
                };
                _this.onKanPaiClick(poke);
                _this._btn_kanpai.visible = false;
                _this.kanpaistatue = true;
            }, this);
        }
        else if (e.target == this._btn_genzhu) {
            this.sendamessage(EventConst.botpour, 1);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("跟注");
            this._btn_genzhu.visible = false;
        }
        else if (e.target == this._btn_jiazhu) {
            this.grp_btncm.visible = true;
        }
        else if (e.target == this._btn_jiacm_1) {
            this.sendamessage(EventConst.botpour, 2);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注2金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        }
        else if (e.target == this._btn_jiacm_2) {
            this.sendamessage(EventConst.botpour, 3);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注3金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        }
        else if (e.target == this._btn_jiacm_3) {
            this.sendamessage(EventConst.botpour, 4);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注4金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        }
        else if (e.target == this._btn_jiacm_4) {
            this.sendamessage(EventConst.botpour, 5);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注5金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        }
        else if (e.target == this._btn_jiacm_5) {
            this.sendamessage(EventConst.botpour, 6);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注6金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        }
        else if (e.target == this._btn_jiacm_6) {
            this.sendamessage(EventConst.botpour, 7);
            this.onGenZhuClick();
            xlLib.TipsUtils.showFloatWordTips("加注7金币");
            this._btn_jiazhu.visible = false;
            this.grp_btncm.visible = false;
        }
        else if (e.target == this._btn_gendaodi) {
            xlLib.TipsUtils.showFloatWordTips("跟到底");
        }
        else if (e.target == this._btn_quanxia) {
            xlLib.TipsUtils.showFloatWordTips("全下");
        }
        else if (e.target == this._btn_qipai) {
            this.sendamessage2(EventConst.abandon);
            xlLib.TipsUtils.showFloatWordTips("弃牌");
        }
        else if (e.target == this._btn_bipai) {
            this._btn_qipai.visible = false;
            var gameData_3 = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
            var typeData_3 = gameData_3.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
            var playway = typeData_3.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
            var senddata = {
                userid: UserInfo.getInstance().uid,
                token: UserInfo.getInstance().token,
                playway: playway.id,
            };
            xlLib.WebSocketMgr.getInstance().send(EventConst.compareCard, senddata, function (data) {
                xlLib.TipsUtils.showFloatWordTips("比牌");
            }, this);
        }
        else if (e.target == this._btn_continuegame) {
            this.sendamessage(EventConst.joinroom, null);
            xlLib.SceneMgr.instance.changeScene(ZJHScene);
            xlLib.TipsUtils.showFloatWordTips("继续游戏");
        }
    };
    ZJHView.prototype.residueGolds = function () {
    };
    ZJHView.prototype.sendamessage = function (sendstr, bet) {
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: playway.id,
            data: bet
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
    };
    ZJHView.prototype.sendamessage2 = function (sendstr) {
        var _this = this;
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: playway.id
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
            var poke = {
                type: data.cardGenre,
                value: data.cardtype //牌值
            };
            for (var i = 0; i < 3; i++) {
                var val = poke.value[i];
                var card = _this['grpCard' + 0 + '_' + i];
                card.source = '';
                egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                    this[0].source = 'card_' + this[1];
                    egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
                }, [card, val]);
                xlLib.DisplayUtils.setComponentEnabled(card, false);
            }
        }, this);
        this._btn_kanpai.visible = false;
    };
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
        // this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
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
    /**发牌 */
    ZJHView.prototype.playpai = function (data) {
        this.zhangIndex = UserInfo.getInstance().findSeatNumber(data.param.index);
        this.flyIndex0 = UserInfo.getInstance().findSeatNumber(data.param.index);
        this.cardEffect(); //飞牌动动作
        this._btn_kanpai.touchEnabled = true;
    };
    /**看牌 */
    ZJHView.prototype.kanpai = function (data) {
        if (data.param.command == "otherSeecard" && UserInfo.getInstance().uid != data.param.userId) {
            var seatnum = UserInfo.getInstance().findSeatNumber(data.param.index);
            this['labstatus' + seatnum].text = '已看牌';
        }
    };
    /**判断是否进行操作*/
    ZJHView.prototype.gametype = function (data) {
        this.numtime = data.param.seconds;
        console.log(data);
        if (this.kanpaistatue == false) {
            this.startCountDown(this.numtime);
        }
        this._btn_bipai.visible = true;
        var betarr = data.param.limit.split(",");
        if (betarr.length >= 1) {
            console.log("可以加注*********************************");
            this._btn_jiazhu.visible = true;
            /* if (betarr.length == 2) {
                 console.log("可以加注1.5倍，2倍");
                 this._btn_jiazhu.touchEnabled = true;
             }*/
        }
    };
    /**玩家下注*/
    ZJHView.prototype.xiazhu = function (data) {
        if (data.param.command == "botpour" && UserInfo.getInstance().uid == data.param.id) {
            UserInfo.getInstance().goldcoins = data.param.golds;
            this.labelGold0.text = "" + UserInfo.getInstance().goldcoins;
        }
    };
    /**其他玩家下注*/
    ZJHView.prototype.otherplayerxiazhu = function (data) {
        if (data.param.command == "otherBotpour" && UserInfo.getInstance().uid != data.param.id) {
            this.onPlayerGenZhu(data.param.index, 10000);
            if (data.param.code == "200") {
            }
        }
    };
    /**全压*/
    ZJHView.prototype.ALLIN = function (data) {
        if (data.param.command == "pressure" && UserInfo.getInstance().uid != data.param.id) {
        }
    };
    /*玩家比牌*/
    ZJHView.prototype.Thancard = function (data) {
        if (data.param.command == "compareCard" && UserInfo.getInstance().uid != data.param.id) {
            console.log("其他玩家比牌");
        }
        else if (data.param.command == "compareCard" && UserInfo.getInstance().uid == data.param.id) {
            console.log("玩家自己和其他玩家比");
            this._btn_bipai.visible = true;
        }
    };
    /**其他玩家弃牌*/
    ZJHView.prototype.otherdiscard = function (data) {
        if (data.param.command == "otherAbandon" && UserInfo.getInstance().uid != data.param.userId) {
            var seatnum = UserInfo.getInstance().findSeatNumber(data.param.index);
            this['labCardType' + seatnum].text = '弃牌';
            this['labstatus' + seatnum].text = '';
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
                var card = this['grpCard' + seatnum + '_' + j];
                card.source = 'card_100';
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos = new egret.Point;
                pos.x = card.x + 24;
                pos.y = card.y;
                cardPos[j] = pos;
                xlLib.DisplayUtils.setComponentEnabled(card, false);
            }
            this.orginPlayerCardPos[seatnum] = cardPos;
            //xlLib.DisplayUtils.setComponentEnabled(card, false); 
        }
    };
    /**玩家弃牌*/ //自己不进行任何操作超过操作时间 视为弃牌状态 
    ZJHView.prototype.discard = function (data) {
        if (data.param.command == "abandon" && UserInfo.getInstance().uid == data.param.userId && this.addtime >= this.numtime) {
            console.log(this.addtime);
            var poke = {
                type: data.param.cardGenre,
                value: data.param.cardtype //牌值
            };
            for (var i = 0; i < 3; i++) {
                var val = poke.value[i];
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
    };
    /**结算 */
    ZJHView.prototype.settleaccount = function (data) {
        console.log("结算");
        this.grpResult.visible = true;
    };
    /**游戏结束*/
    ZJHView.prototype.gameover = function (data) {
        console.log(data);
        this._btn_continuegame.visible = true;
    };
    /**离开房间*/
    ZJHView.prototype.leaveroom = function (data) {
        console.log(data);
    };
    //加入房间新玩家
    ZJHView.prototype.playerJoinRoom = function (data) {
        console.log(data._obj.player.id);
        console.log(UserInfo.getInstance().myPlayer.id);
        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {
        }
        else {
            this['grpHead' + data._obj.player.index].setUserInfo(data._obj.player.username, data._obj.player.goldcoins, "F4_03_png");
        }
    };
    /**
    * 自己加入房间
    */
    ZJHView.prototype.addPlayers = function (data) {
        //设置自己信息
        var mask2 = new egret.Shape;
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
        for (var i = 1; i < 5; i++) {
            if (data._obj.player[i] != null) {
                this['grpHead' + i].setUserInfo(UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins, "F4_03_png"); //data._obj.player[i].headimg
            }
            else {
                //this['grpHead' + i].setUserInfo("圣诞节回复", "100000", "F4_03_png");
                this['grpHead' + i].setUserInfo("", "", "");
            }
        }
    };
    ZJHView.prototype.setTips = function () {
        this.labTips.text = '';
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
    };
    //获取结算数据，显示结果面板时设置
    ZJHView.prototype.setGameResult = function (data) {
        //this.grpCountdown.visible = false;
        this.cardResult = data;
        var poke = data.pokes;
    };
    ZJHView.prototype.onGenZhuClick = function () {
        var p = new egret.Point();
        p.x = 268;
        p.y = 792;
        this.showCoins(p, 10000);
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
    };
    //显示筹码
    ZJHView.prototype.showCoins = function (pos, num) {
        var isRemove = false;
        this.playClickSound(ZJHUtil.getInstance().getSoundEffect(8));
        //var point: egret.Point = ZJHUtil.getInstance().getCoinsPos(index);
        var point = ZJHUtil.getInstance().getCoinsPos();
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
    };
    //private flyBankerIndex: number = 0;
    ZJHView.prototype.cardEffect = function () {
        this.isCardEffectShow = true;
        this.flyIntval = setInterval(this.playCardFly.bind(this), 200);
    };
    ZJHView.prototype.playCardFly = function (data) {
        var card = this['grpCard' + this.flyIndex0 + '_' + this.flyIndex1];
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
                    this._btn_qipai.visible = true;
                    return;
                }
            }
            else if (this.flyIndex0 == this.zhangIndex - 1) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                clearInterval(this.flyIntval);
                this._btn_kanpai.visible = true;
                this._btn_qipai.visible = true;
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
    /**自己点击看牌 */
    ZJHView.prototype.onKanPaiClick = function (poke) {
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
    };
    /**其他玩家看牌 */
    ZJHView.prototype.onPlayerKanPai = function (index, poke) {
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
    };
    ZJHView.prototype.setStartBet = function () {
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
    };
    ZJHView.prototype.resetGame = function () {
        for (var index = 0; index < 9; index++) {
            // this['labCardResult' + index].text = '';
            this['labCardType' + index].text = '';
            for (var j = 0; j < 3; j++) {
                var card = this['grpCard' + index + '_' + j];
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
    };
    //========================== Second Panel ==============================
    //牌型
    ZJHView.prototype.onTouchCardType = function () {
        this.grpSecondPanel.visible = true;
        this.grpCardType.visible = true;
        this.grpHistory.visible = false;
    };
    //走势
    ZJHView.prototype.onTouchCardHistory = function () {
        //Net.send(Protocol.GOLDEN_GAME_RECORD, {}, this.getHistoryCallback.bind(this));
    };
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
        this.grpSecondPanel.visible = true;
        this.grpCardType.visible = false;
        this.grpHistory.visible = true;
    };
    ZJHView.prototype.onTouchCloseSecondPanel = function () {
        this.grpSecondPanel.visible = false;
    };
    //只更新玩家的金币
    ZJHView.prototype.updateDataGold = function () {
        //EffectUtils.numEffect(this.titleLabMoney, parseInt(GlobalData.user.gold));
    };
    ZJHView.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    ZJHView.prototype.dispose = function () {
        xlLib.SceneMgr.instance.changeScene(Lobby);
    };
    ZJHView.prototype.destroy = function () {
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
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
    };
    return ZJHView;
}(eui.Component));
__reflect(ZJHView.prototype, "ZJHView");
//# sourceMappingURL=ZJHView.js.map