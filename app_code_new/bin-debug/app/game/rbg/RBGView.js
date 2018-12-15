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
var RBGView = (function (_super) {
    __extends(RBGView, _super);
    function RBGView() {
        var _this = _super.call(this) || this;
        //-----------------------------------------------
        _this.cardResult = null; // 结算扑克结果(最后展示处理)
        _this.orginPlayerCardPos = []; // 存储玩家扑克位置
        _this.orginAnCardPos = []; // 存储暗扑克位置
        _this.cdNum = 5; //倒计时计数
        //-----------------------------------------------
        _this.zhaungIndex = 0; //庄的位置
        _this.qz_player_arr = []; //记录抢庄玩家本场景的座位号
        _this._coin_arr = []; //筹码池
        _this.gamePlayIndex = -1;
        _this.waitTime = 0;
        _this.turn0 = 0;
        _this.timeNum = 0;
        /**随机庄家动画 */
        _this.bet_data = [];
        _this.random_arr = [];
        _this.diceInterval = -1;
        _this.numTime = 0;
        //========================== Effect Show ===============================
        _this.flyIntval = 0; //
        _this.flyIndex0 = 0; //扑克位置(东西南北)
        _this.flyIndex1 = 0; //扑克(指定位置1，2，3)
        _this.effectPlayerIndex0 = 0;
        _this.effectPlayerIndex1 = 0;
        _this.timing = -1;
        _this.skinName = "RBGViewSkin";
        return _this;
    }
    //-----------------------------------------------
    RBGView.prototype.childrenCreated = function () {
        this.getOrginCardPos();
        this.init_desktop();
        this.wait_start();
        this.addEvent();
        this.initData();
        this.setCountdown();
    };
    /**
     * 数据初始化
     */
    RBGView.prototype.initData = function () {
        this.grpCoins.touchEnabled = false;
        this.grpResult.visible = false;
        this.grpCard.visible = true;
        this._btn_switch.visible = false;
        this._group_qiang.visible = false;
        //-----------------------------------------------
        this.zhaungIndex = 0; //庄的座位号（当前游戏的座位号）
        this._coin_arr = [];
        this.qz_player_arr = [];
        this.cardResult = null;
        this.cdNum = 5;
        this._group_bar_histroy.visible = true;
        this._continue_btn_1.visible = false;
        this._continue_img_1.visible = false;
        this._continue_btn_0.visible = false;
        this._continue_img_0.visible = false;
        this._close_btn.visible = false;
        this._group_settlement.visible = false;
        this._rect_re_touch.touchEnabled = false;
        //-----------------------------------------------
    };
    /**
     * 获取原始扑克的位置
     */
    RBGView.prototype.getOrginCardPos = function () {
        for (var index = 0; index < 4; index++) {
            var cardPos = [];
            var an_cardPos = [];
            for (var j = 0; j < 2; j++) {
                var card = this['grpCard_' + index + '_' + j];
                card.setPai(null);
                card.setAnPai(true);
                card.visible = false;
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos = new egret.Point;
                pos.x = card.x;
                pos.y = card.y;
                cardPos[j] = pos;
                var an_card = this['_card_an_' + index + '_' + j];
                an_card.source = "";
                an_card.visible = false;
                an_card.anchorOffsetX = an_card.width / 2;
                an_card.x += an_card.width / 2;
                var an_pos = new egret.Point;
                an_pos.x = an_card.x;
                an_pos.y = an_card.y;
                an_cardPos[j] = an_pos;
            }
            this.orginPlayerCardPos[index] = cardPos;
            this.orginAnCardPos[index] = an_cardPos;
        }
    };
    /**初始化桌面 */
    RBGView.prototype.init_desktop = function () {
        for (var i = 0; i < 4; i++) {
            this['labCardType' + i].visible = false;
            this["labCardType_bg_" + i].visible = false;
            for (var j = 0; j < 2; j++) {
                var card = this['grpCard_' + i + '_' + j];
                card.setPai(null);
                card.setAnPai(true);
                card.visible = false;
            }
            this['grpHead' + i].setUserInfo("", "", "");
            this['_img_zx_' + i].visible = false;
            this['_group_qiang_point_' + i].visible = false;
            this['_group_bet_point_' + i].visible = false;
            this['_buqiang_point_' + i].visible = false;
        }
        this.grpCountdown.visible = false;
        this.labCountdown.text = "5";
    };
    /**匹配中 */
    RBGView.prototype.wait_start = function () {
        this._group_wait.visible = true;
        this.waitTime = 0;
        this.gamePlayIndex = setInterval(this.waitLabelTurn.bind(this), 600);
    };
    RBGView.prototype.waitLabelTurn = function () {
        var str = "游戏即将开始，请耐心等待";
        if (this.waitTime == 0) {
            str = str;
        }
        else if (this.waitTime == 1) {
            str = str + ".";
        }
        else if (this.waitTime == 2) {
            str = str + "..";
        }
        else if (this.waitTime == 3) {
            str = str + "...";
        }
        this._label_wait.text = str;
        this.waitTime++;
        if (this.waitTime > 3) {
            this.waitTime = 0;
        }
    };
    RBGView.prototype.resize = function () {
    };
    /**准备 开始回调 */
    RBGView.prototype.onClick = function (e) {
        if (e.target == this._btn_buqiang) {
            //console.log("_btn_buqiang");
            this.sendamessage(EventConst.erbagang_hog, 0);
        }
        else if (e.target == this._btn_qiang_1) {
            //console.log("_btn_qiang_1");
            this.sendamessage(EventConst.erbagang_hog, 3);
        }
        else if (e.target == this._btn_qiang_2) {
            //console.log("_btn_qiang_2");
            this.sendamessage(EventConst.erbagang_hog, 68);
        }
        else if (e.target == this._btn_qiang_3) {
            //console.log("_btn_buqiang");
            this.sendamessage(EventConst.erbagang_hog, 134);
        }
        else if (e.target == this._btn_qiang_4) {
            //console.log("_btn_qiang_4");
            this.sendamessage(EventConst.erbagang_hog, 200);
        }
        else if (e.target == this._btn_double_1) {
            //console.log("_btn_double_1");
            this.sendamessage1(EventConst.erbagang_bet, 1);
            this._btn_switch.visible = false;
        }
        else if (e.target == this._btn_double_2) {
            //console.log("_btn_double_2");
            this.sendamessage1(EventConst.erbagang_bet, 16);
            this._btn_switch.visible = false;
        }
        else if (e.target == this._btn_double_3) {
            //console.log("_btn_double_3");
            this.sendamessage1(EventConst.erbagang_bet, 33);
            this._btn_switch.visible = false;
        }
        else if (e.target == this._btn_double_4) {
            //console.log("_btn_double_4");
            this.sendamessage1(EventConst.erbagang_bet, 50);
            this._btn_switch.visible = false;
        }
        else if (e.target == this._btn_double_5) {
            //console.log("_btn_double_5");
            this.sendamessage1(EventConst.erbagang_bet, 66);
            this._btn_switch.visible = false;
        }
        else if (e.target == this.btnCardHistroy) {
            if (this._group_bar_histroy.visible == false) {
                this._group_bar_histroy.visible = true;
            }
            else {
                this._group_bar_histroy.visible = false;
            }
        }
        else if (e.target == this._rect_re_touch) {
            this._rect_re_touch.touchEnabled = false;
            this._group_settlement.visible = false;
            this._continue_btn_1.visible = false;
            this._continue_img_1.visible = false;
            this._continue_btn_0.visible = true;
            this._continue_img_0.visible = true;
            this._close_btn.visible = false;
        }
        else if (e.target == this._continue_btn_1) {
            this.onRestartGame();
        }
        else if (e.target == this._continue_btn_0) {
            this.onRestartGame();
        }
        EffectUtils.playButtonEffect(e.target, function (evt) {
        }, this);
    };
    RBGView.prototype.sendamessage = function (sendstr, bet) {
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
        this._group_qiang.visible = false;
    };
    RBGView.prototype.sendamessage1 = function (sendstr, bet) {
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
        //this._btn_double_1.touchEnabled = false;
        //this._btn_double_2.touchEnabled = false;
        //this._btn_double_3.touchEnabled = false;
        //this._btn_double_4.touchEnabled = false;
        //this._btn_double_5.touchEnabled = false;
    };
    /**注册事件 */
    RBGView.prototype.addEvent = function () {
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
        this._rect_re_touch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._continue_btn_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._continue_btn_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.btnCardHistroy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        // this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);
        this._btn_ret.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);
        this._close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);
        /**服务器回调 */
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.addEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.addEventListener(EventConst.onUserHogOrderUpdate, this.OnHogUpdate, this);
        /*
        var data = {
             pokes: [{ num: 2, type: 2, value: [2, 3] },
             { num: 1, type: 1, value: [5, 6] },
             { num: 2, type: 2, value: [8, 7] },
             { num: 2, type: 2, value: [3, 3] }],
             result: [0, 0, 0, 1],
             bankerWin: 0,
             rate: "0.05",
             bomb: "0"
        };
        //this.cdNum = 5;

        this.setGameResult(data);
        //this.setCountdown();
        //this.cardEffect();
        */
    };
    //----------------------------------服务器监听---------------------------------------
    /**游戏状态 */
    RBGView.prototype.GameStatus = function (data) {
        switch (data._obj.roomStatus) {
            case 0:
                console.log("未准备");
                break;
            case 1:
                console.log("已准备");
                break;
            case 2:
                this.gameStart(data);
                break;
            case 3:
                this.onHogBack(data);
                break; // 抢庄
            case 4:
                this.onDingzhuang(data);
                break; // 定庄
            case 5:
                this.onbetBack(data);
                break; // 下注
            case 6:
                this.gameResult(data);
                break;
            case 7:
                this.showGameResult(data);
                break;
        }
    };
    /**开始游戏 */
    RBGView.prototype.gameStart = function (data) {
        UserInfo.getInstance().isGameStart = true;
        if (!this.gameStartEff) {
            this.gameStartEff = new RBGSEff();
            this.gameStartEff.anchorOffsetX = this.gameStartEff.width / 2;
            this.gameStartEff.anchorOffsetY = this.gameStartEff.height / 2;
            this.gameStartEff.x = xlLib.Global.screenWidth / 2;
            this.gameStartEff.y = xlLib.Global.screenHeight / 2;
        }
        this.gameStartEff.play();
        this.gameStartEff.touchEnabled = false;
        this.gameStartEff.touchChildren = false;
        this.addChild(this.gameStartEff);
        clearInterval(this.gamePlayIndex);
        this.waitTime = 0;
        this._group_wait.visible = false;
    };
    /**监听抢庄 */
    RBGView.prototype.onHogBack = function (data) {
        this.startQiangZhuang();
    };
    RBGView.prototype.startQiangZhuang = function () {
        this._start_qz.visible = true;
        this._group_qiang.visible = true;
        for (var i = 1; i < 4; i++) {
            this["_bar_thinking_group_" + i].visible = true;
            var dian1 = this["_bar_thinking_" + i + "_" + 0];
            var dian2 = this["_bar_thinking_" + i + "_" + 1];
            var dian3 = this["_bar_thinking_" + i + "_" + 2];
            this.showThinking(dian1, dian2, dian3);
        }
        this.gamePlayIndex = setInterval(this.updateTime.bind(this), 600);
    };
    RBGView.prototype.updateTime = function () {
        clearInterval(this.gamePlayIndex);
        this._start_qz.visible = false;
        this._start_xz.visible = false;
        this.grpCountdown.visible = true;
        this.cdNum = 5;
        this.labCountdown.text = "5";
        this.cdTimer.start();
    };
    /**更新抢庄通知(所有人) */
    RBGView.prototype.OnHogUpdate = function (data) {
        //console.log(data._obj.index + "号抢庄");
        var index = UserInfo.getInstance().findSeatNumber(data._obj.index);
        if (UserInfo.getInstance().uid == data._obj.userid) {
            this._group_qiang.visible = false;
        }
        else {
            this["_bar_thinking_group_" + index].visible = false;
            for (var i = 0; i < 3; i++) {
                egret.Tween.removeTweens(this["_bar_thinking_" + index + "_" + i]);
            }
        }
        var _group = null;
        if (data._obj.hogOrBet == 0) {
            _group = this["_buqiang_point_" + index];
        }
        else {
            _group = this["_group_qiang_point_" + index];
            _group.visible = true;
            this["_label_qiang_" + index].text = data._obj.hogOrBet + "";
            this.qz_player_arr.push(index);
        }
        this.setGrabBanker(_group);
    };
    /**监听定庄 */
    RBGView.prototype.onDingzhuang = function (data) {
        this.acceptbanker(data);
    };
    RBGView.prototype.turnBankerShow = function () {
        for (var i = 0; i < 4; i++) {
            this["grpHead" + i].setZhuangEf(false);
        }
        if (this.random_arr.length == this.timeNum) {
            this.random_arr = [];
            this.timeNum = 0;
            clearInterval(this.turn0);
            this.setbanker(this.bet_data);
            return;
        }
        var value = this.random_arr[this.timeNum];
        this["grpHead" + this.qz_player_arr[value]].setZhuangEf(true);
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(13));
        this.timeNum++;
    };
    RBGView.prototype.acceptbanker = function (data) {
        this.bet_data = [];
        this.bet_data = data;
        if (this.qz_player_arr.length > 1) {
            this.random_arr = [];
            var cur_num = 1000;
            for (var i = 1; i > 0; i++) {
                var sum = parseInt((Math.random() * this.qz_player_arr.length) + "");
                if (sum != cur_num) {
                    cur_num = sum;
                    this.random_arr.push(sum);
                }
                if (this.random_arr.length == 16) {
                    break;
                }
            }
            this.turn0 = 0;
            this.timeNum = 0;
            this.turn0 = setInterval(this.turnBankerShow.bind(this), 150);
        }
        else {
            this.setbanker(data);
        }
    };
    /**设置庄家 */
    RBGView.prototype.setbanker = function (data) {
        this.qz_player_arr = [];
        this.bet_data = [];
        for (var i = 0; i < 4; i++) {
            this["_buqiang_point_" + i].visible = false;
            this["_group_qiang_point_" + i].visible = false;
        }
        var num = UserInfo.getInstance().findSeatNumber(data._obj.banker.index);
        this["grpHead" + num].setZhuang(true);
        this.zhaungIndex = num;
        if (!this.dingZhuangEff) {
            this.dingZhuangEff = new RBGVEff();
            this.dingZhuangEff.anchorOffsetX = this.dingZhuangEff.width / 2;
            this.dingZhuangEff.anchorOffsetY = this.dingZhuangEff.height / 2;
            this.dingZhuangEff.x = this["grpHead" + num].x - 10;
            this.dingZhuangEff.y = this["grpHead" + num].y - 40;
        }
        this.dingZhuangEff.play();
        this.addChild(this.dingZhuangEff);
    };
    /**监听下注 */
    RBGView.prototype.onbetBack = function (data) {
        //console.log(data._obj.index + "号投注");
        this._btn_switch.visible = true;
        this._start_xz.visible = true;
        for (var i = 1; i < 4; i++) {
            if (i == this.zhaungIndex) {
                continue;
            }
            this["_bar_thinking_group_" + i].visible = true;
            var dian1 = this["_bar_thinking_" + i + "_" + 0];
            var dian2 = this["_bar_thinking_" + i + "_" + 1];
            var dian3 = this["_bar_thinking_" + i + "_" + 2];
            this.showThinking(dian1, dian2, dian3);
        }
        this.gamePlayIndex = setInterval(this.updateTime.bind(this), 600);
    };
    /**更新下注通知(所有人) */
    RBGView.prototype.OnBetUpdate = function (data) {
        //console.log(data._obj.index + "号下注");
        var index = UserInfo.getInstance().findSeatNumber(data._obj.index);
        if (UserInfo.getInstance().uid == data._obj.userid) {
            this._btn_switch.visible = false;
        }
        else {
            this["_bar_thinking_group_" + index].visible = false;
            for (var i = 0; i < 3; i++) {
                egret.Tween.removeTweens(this["_bar_thinking_" + index + "_" + i]);
            }
        }
        var _group = this["_group_bet_point_" + index];
        _group.visible = true;
        this["_label_bet_" + index].text = data._obj.hogOrBet + "";
        this.setGrabBanker(_group);
        /**抛出筹码 */
        this.showCoins(index);
    };
    //显示筹码
    RBGView.prototype.showCoins = function (index) {
        var value = parseInt((Math.random() * 10 + 30) + "");
        for (var i = 0; i < value; i++) {
            var num = parseInt((Math.random() * 6) + "");
            var coin = RBGUtil.getInstance().coinsType(index, num);
            coin.alpha = 0;
            coin.scaleX = 0.2;
            coin.scaleY = 0.2;
            var p = RBGUtil.getInstance().coinPos(index);
            coin.x = p.x;
            coin.y = p.y;
            this.grpCoins.addChild(coin);
            this._coin_arr.push(coin);
            var endX = this._group_coin_area.x + parseInt((Math.random() * 400) + "");
            var endY = this._group_coin_area.y + parseInt((Math.random() * 140) + "");
            egret.Tween.get(coin).wait(80 * i).to({ alpha: 1 }, 1).to({ x: endX, y: endY, scaleX: 1, scaleY: 1 }, 100).call(function () {
                egret.Tween.removeTweens(coin);
            }, [coin]);
        }
    };
    RBGView.prototype.gameResult = function (data) {
        this.cardResult = data._obj;
        this.gamePlayIndex = setInterval(this.shakeDice.bind(this), 5000);
    };
    RBGView.prototype.shakeDice = function () {
        clearInterval(this.gamePlayIndex);
        this._group_bz.visible = true;
        this.diceInterval = setInterval(this.setDiceAnimation.bind(this), 200);
    };
    //----------------------------------------------------------------------------------
    /**分数特效 */
    RBGView.prototype.setGrabBanker = function (_group) {
        _group.visible = true;
        _group.alpha = 0.8;
        egret.Tween.get(_group).to({
            scaleX: 1.4,
            scaleY: 1.4,
            alpha: 1
        }, 150).to({
            scaleX: 0.8,
            scaleY: 0.8,
            alpha: 0.8
        }, 100).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 100).call(function () {
            egret.Tween.removeTweens(_group);
        }, [_group]);
    };
    /**倍数分数特效 */
    RBGView.prototype.setBetScore = function (_group) {
        _group.visible = true;
        _group.alpha = 0.8;
        egret.Tween.get(_group).to({
            scaleX: 1.4,
            scaleY: 1.4,
            alpha: 1
        }, 150).to({
            scaleX: 0.8,
            scaleY: 0.8,
            alpha: 0.8
        }, 100).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 100);
    };
    /**思考中的三个点效果 */
    RBGView.prototype.showThinking = function (dian1, dian2, dian3) {
        dian1.alpha = 0;
        dian2.alpha = 0;
        dian3.alpha = 0;
        egret.Tween.get(dian1, { loop: true }).to({ alpha: 1 }, 400).wait(400).to({ alpha: 0 }, 400).wait(800);
        egret.Tween.get(dian2, { loop: true }).wait(400).to({ alpha: 1 }, 400).wait(400).to({ alpha: 0 }, 400).wait(400);
        egret.Tween.get(dian3, { loop: true }).wait(800).to({ alpha: 1 }, 400).wait(400).to({ alpha: 0 }, 400);
    };
    /**设置card类型特效 */
    RBGView.prototype.setCardType = function (_group_bg, _group) {
        _group.alpha = 0.8;
        _group_bg.scaleX = _group_bg.scaleY = 0.5;
        egret.Tween.get(_group_bg).wait(600).call(function () {
            _group_bg.visible = true;
        }, [_group_bg]).to({
            scaleX: 1,
            scaleY: 1
        }, 150).call(function () {
            egret.Tween.removeTweens(_group_bg);
        }, [_group_bg]);
        egret.Tween.get(_group).wait(600).call(function () {
            _group.visible = true;
        }, [_group]).to({
            scaleX: 1.4,
            scaleY: 1.4,
            alpha: 1
        }, 150).to({
            scaleX: 0.8,
            scaleY: 0.8,
            alpha: 0.8
        }, 100).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 100).call(function () {
            egret.Tween.removeTweens(_group);
        }, [_group]);
    };
    RBGView.prototype.setFirstAnimation = function (_img) {
        _img.visible = true;
        var e = _img.y;
        var t = _img.y + 10;
        egret.Tween.get(_img).to({
            y: t
        }, 300).to({
            y: e
        }, 300).to({
            y: t
        }, 300).to({
            y: e
        }, 300).to({
            y: t
        }, 300).to({
            y: e
        }, 300).to({
            y: t
        }, 300).call(function () {
            egret.Tween.removeTweens(_img);
            _img.visible = false;
        }, [_img]);
        this.gamePlayIndex = setInterval(this.startSendPai.bind(this), 2000);
    };
    RBGView.prototype.startSendPai = function () {
        clearInterval(this.gamePlayIndex);
        this.gamePlayIndex = setInterval(this.cardEffect.bind(this), 600);
    };
    RBGView.prototype.setDiceAnimation = function () {
        if (this.numTime == 8) {
            clearInterval(this.diceInterval);
            //egret.Tween.removeTweens(this._img_bz);
            this.playDiceResult();
            //this.diceInterval = setInterval(this.playDiceResult.bind(this), 200);
        }
        this._dice_0.source = "bar_sicbo_" + this.cardResult.dice[0] + "_png";
        this._dice_1.source = "bar_sicbo_" + this.cardResult.dice[1] + "_png";
        this._img_bz.visible = true;
        this._img_bz.rotation = 0;
        egret.Tween.get(this._img_bz).to({
            rotation: 20
        }, 50).to({
            rotation: 0
        }, 50).to({
            rotation: -20
        }, 50).to({
            rotation: 0
        }, 50);
        this.numTime++;
    };
    RBGView.prototype.playDiceResult = function () {
        var e = this._img_bz.verticalCenter;
        egret.Tween.get(this._img_bz).to({
            verticalCenter: e - 10
        }, 150).to({
            verticalCenter: e
        }, 150).wait(100).call(function () {
            this._img_bz.visible = false,
                this._img_bz_d.visible = true,
                this._dice_0.visible = true,
                this._dice_1.visible = true,
                this._img_bz_g.visible = true,
                this._img_bz_g.horizontalCenter = 16,
                this._img_bz_g.verticalCenter = -102,
                this._img_bz_g.alpha = 1,
                egret.Tween.get(this._img_bz_g).to({
                    rotation: 75,
                    horizontalCenter: 500,
                    verticalCenter: -400
                }, 400).to({
                    alpha: 0
                }, 50);
            //this.getPlayerViewBySeatID(this.firstPlayer).setFirstAnimation()
        }, this);
        this.diceInterval = setInterval(this.firstPlayer1.bind(this), 1500);
    };
    RBGView.prototype.firstPlayer1 = function () {
        clearInterval(this.diceInterval);
        this._img_bz.visible = false;
        this._img_bz_d.visible = false;
        this._dice_0.visible = false;
        this._dice_1.visible = false;
        this._img_bz_g.visible = false;
        var index = UserInfo.getInstance().findSeatNumber(this.cardResult.index);
        egret.Tween.removeTweens(this._img_bz);
        egret.Tween.removeTweens(this._img_bz_g);
        this.setFirstAnimation(this["_img_zx_" + index]);
    };
    /**游戏结果特效 */
    RBGView.prototype.gameResultEff = function () {
        clearInterval(this.flyIntval);
        this.flyCoinByBanker();
    };
    /**筹码飞向庄家 */
    RBGView.prototype.flyCoinByBanker = function () {
        if (this._coin_arr == []) {
            return;
        }
        var player = this['grpHead' + this.zhaungIndex];
        var _loop_1 = function (i) {
            var coin = this_1._coin_arr[i];
            egret.Tween.get(coin).to({
                x: player.x + player.width,
                y: player.y + player.height,
                scaleX: 0,
                scaleY: 0
            }, 300).call(function () {
                egret.Tween.removeTweens(coin);
            }, [coin]);
        };
        var this_1 = this;
        //uiCore.SoundManager.playEffect("bar_drop_coin_mp3");
        for (var i = 0; i < this._coin_arr.length; i++) {
            _loop_1(i);
        }
        this.flyIntval = setInterval(this.flyCoinByPlayer.bind(this), 300);
    };
    /**筹码飞向玩家 */
    RBGView.prototype.flyCoinByPlayer = function () {
        clearInterval(this.flyIntval);
        var num = 0;
        var win_arr = [];
        for (var i = 0; i < 4; i++) {
            if (i == this.zhaungIndex) {
                continue;
            }
            if (this.cardResult.players[i].win) {
                num++;
                win_arr.push(i);
            }
        }
        //console.log("_____总筹码数______" + this._coin_arr.length);
        this.flyCoinAntion(win_arr);
        this.flyIntval = setInterval(this.scoreJumpedOut.bind(this), 350);
    };
    RBGView.prototype.flyCoinAntion = function (win_arr) {
        //console.log("_____________" + parseInt(this._coin_arr.length/win_arr.length + ""));
        //console.log("_____________" + win_arr.length);
        if (win_arr.length == 1) {
            var player = this['grpHead' + win_arr[0]];
            for (var i = 0; i < this._coin_arr.length; i++) {
                var coin = this._coin_arr[i];
                coin.scaleX = coin.scaleY = 0.2;
                coin.alpha = 1;
                this.setAnimationByType(coin, 10 * i, player.x - 30, player.y + 30, 350);
            }
        }
        else if (win_arr.length == 2) {
            var player0 = this['grpHead' + win_arr[0]];
            var player1 = this['grpHead' + win_arr[1]];
            var sum1 = parseInt(this._coin_arr.length / 2 + "");
            var num = 0;
            for (var i = 0; i < this._coin_arr.length; i++) {
                var coin = this._coin_arr[i];
                coin.scaleX = coin.scaleY = 0.2;
                coin.alpha = 1;
                if (i < sum1) {
                    this.setAnimationByType(coin, 10 * i, player0.x - 30, player0.y + 30, 350);
                }
                else {
                    this.setAnimationByType(coin, 10 * num, player1.x - 30, player1.y + 30, 350);
                    num++;
                }
            }
        }
        else if (win_arr.length == 3) {
            var player0 = this['grpHead' + win_arr[0]];
            var player1 = this['grpHead' + win_arr[1]];
            var player2 = this['grpHead' + win_arr[2]];
            var sum2 = parseInt(this._coin_arr.length / 3 + "");
            var num1 = 0;
            var num2 = 0;
            for (var i = 0; i < this._coin_arr.length; i++) {
                var coin = this._coin_arr[i];
                coin.scaleX = coin.scaleY = 0.2;
                coin.alpha = 1;
                if (i < sum2) {
                    this.setAnimationByType(coin, 10 * i, player0.x - 30, player0.y + 30, 350);
                }
                else if (i >= sum2 && i < sum2 * 2) {
                    this.setAnimationByType(coin, 10 * num1, player1.x - 30, player1.y + 30, 350);
                    num1++;
                }
                else {
                    this.setAnimationByType(coin, 10 * num2, player2.x - 30, player2.y + 30, 350);
                    num2++;
                }
            }
        }
        else {
        }
    };
    RBGView.prototype.setAnimationByType = function (coin, t, _x, _y, n) {
        //console.log("________987456___________");
        egret.Tween.get(coin).wait(t).to({
            alpha: 1
        }, 1).to({
            x: _x,
            y: _y,
            scaleX: 1,
            scaleY: 1
        }, n).call(function () {
            egret.Tween.removeTweens(coin);
        }, [coin]);
    };
    RBGView.prototype.scoreJumpedOut = function () {
        clearInterval(this.flyIntval);
        var data = this.cardResult;
        var _loop_2 = function (i) {
            var index = UserInfo.getInstance().findSeatNumber(data.players[i].index);
            var player = this_2["grpHead" + index];
            player.setGold(data.players[i].balance);
            var label = new eui.BitmapLabel;
            var img = new eui.Image;
            img.x = player.x - 90;
            img.y = player.y + 55;
            label.width = 150;
            label.height = 40;
            label.textAlign = egret.HorizontalAlign.CENTER;
            label.x = player.x - 70;
            label.y = player.y + 60;
            label.text = "";
            this_2.addChild(img);
            this_2.addChild(label);
            var str = "";
            if (data.players[i].win) {
                label.font = "bar_plus_font_fnt";
                str = "+";
                img.source = "bar_plus_bg_png";
            }
            else {
                label.font = "bar_reduce_font_fnt";
                str = "-";
                img.source = "bar_reduce_bg_png";
            }
            label.text = str + data.players[i].dealGold;
            label.scaleX = label.scaleY = 0.2;
            label.alpha = 0;
            img.scaleX = img.scaleY = 0.2;
            img.alpha = 0;
            egret.Tween.get(label).wait(1000).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 200).to({
                y: label.y - 170
            }, 200).wait(1000).call(function () {
                egret.Tween.removeTweens(label);
                label.parent.removeChild(label);
            }, [label]);
            egret.Tween.get(img).wait(1000).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 200).to({
                y: img.y - 170
            }, 200).wait(1000).call(function () {
                egret.Tween.removeTweens(img);
                img.parent.removeChild(img);
            }, [img]);
        };
        var this_2 = this;
        for (var i = 0; i < 4; i++) {
            _loop_2(i);
        }
        //this.flyIntval = setInterval(this.showGameResult.bind(this), 4000);
    };
    //-------------------------------服务器回调------------------------------
    /**
     * 自己加入房间
     */
    RBGView.prototype.addPlayers = function (data) {
        //设置自己信息
        /*
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

        let dd = UserInfo.getInstance().playes;*/
        //设置其他玩家信息
        for (var i = 0; i < UserInfo.getInstance().playes.length; i++) {
            if (data._obj.player[i] != null) {
                this['grpHead' + i].setUserInfo(UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins, "women6_png"); //data._obj.player[i].headimg
            }
            else {
                //this['grpHead' + i].setUserInfo("圣诞节回复", "100000", "F4_03_png");
                this['grpHead' + i].setUserInfo("", "", "");
            }
        }
    };
    //加入房间新玩家
    RBGView.prototype.playerJoinRoom = function (data) {
        //console.log(data._obj.player.id);
        //console.log(UserInfo.getInstance().myPlayer.id);
        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {
        }
        else {
            this['grpHead' + data._obj.player.index].setUserInfo(data._obj.player.username, data._obj.player.goldcoins, "women6_png");
        }
    };
    //-------------------------------方法------------------------------
    /**
     * 定时器
     */
    RBGView.prototype.setCountdown = function () {
        this.cdTimer = new egret.Timer(1000);
        this.cdTimer.addEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
    };
    RBGView.prototype.clacTimer = function () {
        if (this.cdNum > 0) {
            this.cdNum--;
        }
        else {
            this.cdTimer.stop();
            this.cdNum = 0;
            this.grpCountdown.visible = false;
            this._group_qiang.visible = false;
            this._btn_switch.visible = false;
        }
        this.labCountdown.text = this.cdNum + '';
    };
    /**
     * 获取结算数据，显示结果面板时设置
     */
    RBGView.prototype.setGameResult = function (data) {
        //this.grpCountdown.visible = false;
        this.cardResult = data;
    };
    /**
     * 显示发牌
     */
    RBGView.prototype.cardEffect = function () {
        clearInterval(this.gamePlayIndex);
        var index = UserInfo.getInstance().findSeatNumber(this.cardResult.index);
        this.initPaiPos(index);
        this.flyIntval = setInterval(this.playCardFly.bind(this), 180);
    };
    RBGView.prototype.initPaiPos = function (index) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 2; j++) {
                var num = 0;
                if (index >= i) {
                    num = index - i;
                }
                else {
                    num = 4 - i + index;
                }
                var card = this['grpCard_' + num + '_' + j];
                card.setPai(null);
                card.setAnPai(true);
                card.visible = true;
                var an_pos = this.orginAnCardPos[i][j];
                card.x = an_pos.x;
                card.y = an_pos.y;
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
            }
        }
        this.flyIndex0 = index;
        this.flyIndex1 = 0;
        this.effectPlayerIndex0 = index;
        this.effectPlayerIndex1 = 0;
    };
    RBGView.prototype.playCardFly = function () {
        if (this.flyIndex1 == 4) {
            clearInterval(this.flyIntval);
            this.flyIndex0 = 0;
            this.flyIndex1 = 0;
            this.flyIntval = setInterval(this.playerCardRotation.bind(this), 1000);
            return;
        }
        var _proup = this["_group_bet_point_" + this.flyIndex0];
        for (var i = 0; i < 2; i++) {
            var card = this['grpCard_' + this.flyIndex0 + '_' + i];
            var pos = this.orginPlayerCardPos[this.flyIndex0][i];
            this.playClickSound(RBGUtil.getInstance().getSoundEffect(6));
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 300).call(function () {
                egret.Tween.removeTweens(card);
                _proup.visible = false;
            }, [card, _proup]);
        }
        if (this.flyIndex0 == 0) {
            this.flyIndex0 = 3;
        }
        else {
            this.flyIndex0--;
        }
        this.flyIndex1++;
    };
    RBGView.prototype.playerCardRotation = function () {
        if (this.effectPlayerIndex1 == 4) {
            clearInterval(this.flyIntval);
            this.effectPlayerIndex0 = 0;
            this.effectPlayerIndex1 = 0;
            this.flyIntval = setInterval(this.gameResultEff.bind(this), 1000);
            return;
        }
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.players;
        var card_0 = this['grpCard_' + this.effectPlayerIndex0 + '_' + 0];
        card_0.setPai(null);
        card_0.setAnPai(true);
        egret.Tween.get(card_0).to({}, 10).call(function () {
            this[0].setPai(this[1]);
            this[0].setAnPai(false);
        }, [card_0, poke[this.effectPlayerIndex1].cardsList[0]]);
        var card_1 = this['grpCard_' + this.effectPlayerIndex0 + '_' + 1];
        card_1.setPai(null);
        card_1.setAnPai(true);
        egret.Tween.get(card_1).to({}, 10).wait(300).call(function () {
            this[0].setPai(this[1]);
            this[0].setAnPai(false);
        }, [card_1, poke[this.effectPlayerIndex1].cardsList[1]]);
        var _group_bg = this["labCardType_bg_" + this.effectPlayerIndex0];
        var _group = this["labCardType" + this.effectPlayerIndex0];
        _group.source = "bar_point_" + poke[this.effectPlayerIndex1].nameType + "_png";
        _group.anchorOffsetX = _group.width / 2;
        _group.anchorOffsetY = _group.height / 2;
        _group.x += _group.width / 2;
        _group.y += _group.height / 2;
        if (poke[this.effectPlayerIndex1].nameType == 0) {
            _group_bg.source = "bar_point_bg_0_png";
        }
        else if (poke[this.effectPlayerIndex1].nameType > 19) {
            _group_bg.source = "bar_point_bg_2_png";
        }
        else {
            _group_bg.source = "bar_point_bg_1_png";
        }
        this.setCardType(_group_bg, _group);
        if (this.effectPlayerIndex0 == 0) {
            this.effectPlayerIndex0 = 3;
        }
        else {
            this.effectPlayerIndex0--;
        }
        this.effectPlayerIndex1++;
    };
    //============================================  Game Result
    RBGView.prototype.showGameResult = function (data) {
        //clearInterval(this.flyIntval);
        var value = this.cardResult;
        this._group_settlement.visible = true;
        for (var i = 0; i < 10; i++) {
            this["_label_bar_" + i].text = value.count[i] + "";
        }
        for (var i = 0; i < 4; i++) {
            var index = UserInfo.getInstance().findSeatNumber(value.players[i].index);
            if (index == this.zhaungIndex) {
                this["_player_zhuang_" + i].visible = true;
            }
            else {
                this["_player_zhuang_" + i].visible = false;
            }
            if (index == 0 && value.players[i].win == true) {
                this._img_re_bg.source = "bar_over_win_bg_png";
                this._img_guang.source = "bar_over_win_light_png";
                this._img_huangguan.source = "bar_over_win_hat_png";
                this._img_tmp.source = "bar_over_win_title_png";
            }
            else {
                this._img_re_bg.source = "bar_over_lose_bg_png";
                this._img_guang.source = "bar_over_lose_light_png";
                this._img_huangguan.source = "bar_over_lose_hat_png";
                this._img_tmp.source = "bar_over_lose_title_png";
            }
            this["_player_name_" + i].text = value.players[i].username;
            this["_player_fen_" + i].text = value.players[i].score;
            this["_player_bet_" + i].text = value.players[i].multiple;
            if (value.players[i].win) {
                this["_player_gold_" + i].text = "+" + value.players[i].dealGold;
            }
            else {
                this["_player_gold_" + i].text = "-" + value.players[i].dealGold;
            }
            if (index == 0) {
                this["_player_name_" + i].textColor = 0xFBD901;
                this["_player_fen_" + i].textColor = 0xFBD901;
                this["_player_bet_" + i].textColor = 0xFBD901;
                this["_player_gold_" + i].textColor = 0xFBD901;
            }
            else {
                this["_player_name_" + i].textColor = 0xFFFFFF;
                this["_player_fen_" + i].textColor = 0xFFFFFF;
                this["_player_bet_" + i].textColor = 0xFFFFFF;
                this["_player_gold_" + i].textColor = 0xFFFFFF;
            }
        }
        //this._continue_btn_1.visible = false;
        //this._continue_img_1.visible = false;
        //this._continue_btn_0.visible = false;
        //this._continue_img_0.visible = false;
        //this._close_btn.visible = false;
        this.resetGame();
        if (value.round == 5) {
            this._label_timing.visible = false;
            this._label_des.visible = false;
            this._continue_btn_1.visible = true;
            this._continue_img_1.visible = true;
            this._rect_re_touch.touchEnabled = true;
            this._close_btn.visible = true;
            UserInfo.getInstance().isGameStart = false;
        }
        else {
            this._label_timing.visible = true;
            this._label_des.visible = true;
            this._label_timing.text = "3S";
            this._label_des.text = "后开始第" + value.round + "局游戏，共5局";
            /**计时开始下一局 */
            this.timing = 3;
            this.flyIntval = setInterval(this.startNextGame.bind(this), 1000);
        }
    };
    RBGView.prototype.startNextGame = function () {
        if (this.timing == 0) {
            clearInterval(this.flyIntval);
            this._group_settlement.visible = false;
            this.timing = 0;
        }
        this._label_timing.text = this.timing + "S";
        this.timing--;
    };
    RBGView.prototype.resetGame = function () {
        egret.Tween.removeTweens(this._img_bz);
        egret.Tween.removeTweens(this._img_bz_g);
        for (var i_1 = 0; i_1 < this._coin_arr.length; i_1++) {
            this._coin_arr[i_1].parent.removeChild(this._coin_arr[i_1]);
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 2; j++) {
                var card = this['grpCard_' + i + '_' + j];
                card.setPai(null);
                card.setAnPai(true);
                egret.Tween.removeTweens(card);
                card.visible = false;
            }
            this['labCardType' + i].visible = false;
            this["labCardType_bg_" + i].visible = false;
            this['grpHead' + i].setZhuang(false);
        }
        this.zhaungIndex = 0;
    };
    RBGView.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    /**继续游戏 */
    RBGView.prototype.onRestartGame = function () {
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ERBAGANG);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_ERBAGANGJINDIAN);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom, senddata, function (data) {
            //xlLib.SceneMgr.instance.changeScene(RBGScene);
            //xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
        }, this);
    };
    RBGView.prototype.Onquit = function () {
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
    RBGView.prototype.destroy = function () {
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
        this._rect_re_touch.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._continue_btn_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._continue_btn_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._close_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.btnCardHistroy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        // this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);
        this._btn_ret.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);
        /**服务器回调 */
        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.removeEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.removeEventListener(EventConst.onUserHogOrderUpdate, this.OnHogUpdate, this);
        if (this.cdTimer != null) {
            this.cdTimer.removeEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
        }
    };
    return RBGView;
}(eui.Component));
__reflect(RBGView.prototype, "RBGView");
//# sourceMappingURL=RBGView.js.map