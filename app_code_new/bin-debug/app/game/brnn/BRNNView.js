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
 * 百人牛牛
 */
var BRNNView = (function (_super) {
    __extends(BRNNView, _super);
    function BRNNView() {
        var _this = _super.call(this) || this;
        _this.arr = [0, 0];
        _this.multipleList = [0, 0, 0, 0, 0]; //倍数表
        _this.game_result = 0; //动画状态
        _this.isAction = false; //能否下注
        _this.isPaly = false; //是否下过注
        _this.isWin = false; //是否输赢
        _this.isScore = 0; //输赢金币
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
        _this.banker_total_gold = 0; // 庄家自身携带的金币
        _this.isBoomBanker = false; // 是否爆庄
        _this.resultCaijin = 0;
        _this.totalCaijin = 0;
        _this.cdNum = 10; //倒计时计数
        _this.lastTouchBetIndex = 1; //上一次点击的筹码
        _this.coinsNumArr = {}; //计数桌面4个方位的筹码个数
        _this.isCoinsReturn = true;
        _this.curRate = 0;
        _this.lastTouchBetTime = 0;
        _this.isCardEffectShow = false; //是否正在显示扑克动画
        _this.flyIntval = 0; //
        _this.flyIndex0 = 0; //扑克位置(东西南北)
        _this.flyIndex1 = 0; //扑克(指定位置1，2，3)
        _this.flyBankerIndex = 0;
        _this.effectPlayerIndex = 0;
        _this.skinName = "BRNNViewSkin";
        return _this;
        //this.r = r;
    }
    BRNNView.prototype.childrenCreated = function () {
        this.getOrginCardPos();
        this.addEvent();
        this.initData();
        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
    };
    /**设置金币最多的20个玩家数据 */
    BRNNView.prototype.initGameIconList = function (data) {
        var dataArr = [];
        var otherplayer;
        for (var i = 0; i < data._obj.player.length; i++) {
            otherplayer = new Object();
            otherplayer.name = data._obj.player[i].username;
            otherplayer.gold = data._obj.player[i].goldcoins;
            otherplayer.img = "women7_png";
            dataArr.push(otherplayer);
        }
        this.userlist.dataProvider = new eui.ArrayCollection(dataArr);
        this.scroller.viewport = this.userlist;
    };
    BRNNView.prototype.initData = function () {
        this.labBankerRank.text = '';
        this.labBankerLastNum.text = '';
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.grpBankerList.visible = false;
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
        this.grpCaijin.visible = false;
        this.grpCard.visible = true;
        this.isAction = false;
        for (var i = 0; i < 4; i++) {
            this['grade_text_' + i + '_0'].text = '';
            this['grade_text_' + i + '_1'].text = '';
        }
        this.wanjia.x = -237;
        this.isPaly = false;
        this.isWin = false;
        this.isScore = 0;
    };
    //获取原始扑克的位置
    BRNNView.prototype.getOrginCardPos = function () {
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = '';
            card.anchorOffsetX = card.width / 2;
            card.x += card.width / 2;
            var pos = new egret.Point;
            pos.x = card.x;
            pos.y = card.y;
            this.orginBankerCardPos[i] = pos;
        }
        this.labCardTypeBanker.visible = false;
        for (var index = 0; index < 4; index++) {
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
    };
    BRNNView.prototype.addEvent = function () {
        this.wanjialist.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.packup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClose, this);
        this._btn_double_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onUserList, this.initGameIconList, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.addEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.addEventListener(EventConst.onUserLeave, this.onleave, this);
    };
    /**游戏状态 */
    BRNNView.prototype.GameStatus = function (data) {
        console.log(data._obj.roomStatus);
        switch (data._obj.roomStatus) {
            case 1:
                this.onprepare(data);
                break; //准备中
            case 4:
                this.onbetBack(data);
                break; //下注
            case 5:
                this.onstopBack(data);
                break; //停止下注(千人牛牛开牌)
            case 7:
                this.onjiesuan(data);
                break; //结算、百人牛牛派奖中
            case 8:
                this.onrest(data);
                break; //游戏结束,百人牛牛休息
            case 9:
                this.onshuffle(data);
                break; //百人牛牛洗牌
            case 10:
                this.onfapai(data);
                break; //百人牛牛发牌
        }
    };
    /**准备 */
    BRNNView.prototype.onprepare = function (data) {
        this.startCountDown(data._obj.seconds);
    };
    /**下注 */
    BRNNView.prototype.onbetBack = function (data) {
        this.startCountDown(data._obj.seconds);
        this.showGameTips(2);
        this.isAction = true;
        for (var i = 0; i < 4; i++) {
            if (data._obj.hogList[i].allow) {
            }
            else {
                this['_btn_double_' + i].touchEnabled = false;
                this['_btn_double_' + i].visible = false;
            }
        }
        for (var i = 0; i < 5; i++) {
            this.multipleList[i] = data._obj.hogList[i].hogOrBet;
        }
    };
    /**停止下注(千人牛牛开牌) */
    BRNNView.prototype.onstopBack = function (data) {
        this.isAction = false;
        this.showGameTips(3);
        this.startCountDown(data._obj.seconds);
        this.isPaly = data._obj.play;
        this.isWin = data._obj.win;
        UserInfo.getInstance().goldcoins = data._obj.balance;
        this.isScore = data._obj.score;
        this.game_result = data._obj.result;
        var result = {
            pokes: [],
            result: [1, 0, 0, 0],
            bankerWin: 0,
            rate: "0.05",
            bomb: "0"
        };
        for (var i = 0; i < data._obj.players.length; i++) {
            var err = {
                // num: data._obj.players[i].ratio,
                type: data._obj.players[i].pai.niu,
                value: data._obj.players[i].cardsList,
            };
            result.pokes.push(err);
        }
        this.cardResult = result;
        this.interval = setInterval(this.playerCardRotation.bind(this), 800);
    };
    /**结算、百人牛牛派奖中 */
    BRNNView.prototype.onjiesuan = function (data) {
        this.startCountDown(data._obj.seconds);
        this.victoryEffect();
        if (this.isPaly) {
            //执行金币加减动画
            //this.isWin   //(代表输赢)
            //this.isScore //(代表输赢金币数量)
            //更新界面金币数量显示
            this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
        }
    };
    /**游戏结束,百人牛牛休息 */
    BRNNView.prototype.onrest = function (data) {
        this.startCountDown(data._obj.seconds);
        UserInfo.getInstance().isGameStart = false;
    };
    /**百人牛牛洗牌 */
    BRNNView.prototype.onshuffle = function (data) {
        this.resetGame();
        this.startCountDown(data._obj.seconds);
    };
    /**百人牛牛发牌 */
    BRNNView.prototype.onfapai = function (data) {
        this.startCountDown(data._obj.seconds);
        this.cardEffect();
    };
    /**更新下注通知(所有人) */
    BRNNView.prototype.OnBetUpdate = function (data) {
        // console.log(data._obj.index + "号下注");
        console.log(UserInfo.getInstance().uid);
        console.log(data._obj.userid);
        if (data._obj.code == 200) {
            if (UserInfo.getInstance().uid == data._obj.userid) {
                UserInfo.getInstance().isGameStart = true; //游戏状态
                this.onGenZhuClick(data._obj.money, data._obj.deskNum);
                this.onplaygrade(data._obj.myMoney, data._obj.deskNum);
                this.onJettongrade(data._obj.totalMoney, data._obj.deskNum);
                UserInfo.getInstance().goldcoins = data._obj.balance;
                this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
            }
            else {
                this.onPlayerGenZhu(data._obj.money, data._obj.deskNum);
                this.onJettongrade(data._obj.totalMoney, data._obj.deskNum);
            }
        }
        else {
            xlLib.TipsUtils.showFloatWordTips(data._obj.message);
        }
    };
    /**自己点击跟注 (丢筹码动作) */
    BRNNView.prototype.onGenZhuClick = function (num, index) {
        var p = new egret.Point();
        p.x = 268;
        p.y = 792;
        this.showCoins(p, num, index);
    };
    /**其他玩家跟注 (丢筹码动作) */
    BRNNView.prototype.onPlayerGenZhu = function (num, index) {
        var p = new egret.Point();
        p.x = 80;
        p.y = 400 + Math.random() * 80;
        this.showCoins(p, num, index);
    };
    /**筹码池分数(总分)  */
    BRNNView.prototype.onJettongrade = function (num, index) {
        var str = this['grade_text_' + (index - 1) + '_0'].text;
        if (str == '') {
            this['grade_text_' + (index - 1) + '_0'].text = '' + num;
        }
        else {
            var type = parseInt(str);
            if (type < num) {
                this['grade_text_' + (index - 1) + '_0'].text = '' + num;
            }
        }
    };
    /**筹码池分数(自己)  */
    BRNNView.prototype.onplaygrade = function (num, index) {
        var str = this['grade_text_' + (index - 1) + '_1'].text;
        if (str == '') {
            this['grade_text_' + (index - 1) + '_1'].text = '' + num;
        }
        else {
            var type = parseInt(str);
            if (type < num) {
                this['grade_text_' + (index - 1) + '_1'].text = '' + num;
            }
        }
    };
    /**准备 开始回调 */
    BRNNView.prototype.onClick = function (e) {
        if (e.target == this.wanjialist) {
            this.wanjialiebiao(EventConst.niuniu_player);
            this.wanjialist.visible = false;
            egret.Tween.get(this.wanjia).to({ x: 0 }, 400);
        }
        else if (e.target == this.packup) {
            egret.Tween.get(this.wanjia).to({ x: -237 }, 400).call(function () {
                this.wanjialist.visible = true;
            }, this);
        }
        else if (e.target == this._btn_double_1) {
            this.onTouchBet(1);
        }
        else if (e.target == this._btn_double_2) {
            this.onTouchBet(2);
        }
        else if (e.target == this._btn_double_3) {
            this.onTouchBet(3);
        }
        else if (e.target == this._btn_double_4) {
            this.onTouchBet(4);
        }
        else if (e.target == this._btn_double_5) {
            this.onTouchBet(5);
        }
        else if (e.target == this.effectTouch0) {
            console.log(this.lastTouchBetIndex);
            if (this.isAction) {
                this.sendamessage(EventConst.niuniu_dobet, 1, this.multipleList[this.lastTouchBetIndex - 1]);
            }
        }
        else if (e.target == this.effectTouch1) {
            console.log(this.lastTouchBetIndex);
            if (this.isAction) {
                this.sendamessage(EventConst.niuniu_dobet, 2, this.multipleList[this.lastTouchBetIndex - 1]);
            }
        }
        else if (e.target == this.effectTouch2) {
            console.log(this.lastTouchBetIndex);
            if (this.isAction) {
                this.sendamessage(EventConst.niuniu_dobet, 3, this.multipleList[this.lastTouchBetIndex - 1]);
            }
        }
        else if (e.target == this.effectTouch3) {
            console.log(this.lastTouchBetIndex);
            if (this.isAction) {
                this.sendamessage(EventConst.niuniu_dobet, 4, this.multipleList[this.lastTouchBetIndex - 1]);
            }
        }
        else if (e.target == this._btn_close) {
            this.buttonClose();
        }
    };
    /**下注 sendstr 命令 bet 倍数 0~5*/
    BRNNView.prototype.sendamessage = function (sendstr, num, bet) {
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: num,
            money: bet
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
    };
    /**请求玩家列表*/
    BRNNView.prototype.wanjialiebiao = function (sendstr) {
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
    };
    /**
 * 自己加入房间
 */
    BRNNView.prototype.addPlayers = function (data) {
        //设置自己信息
        var mask2 = new egret.Shape;
        mask2.graphics.beginFill(0xff0000);
        mask2.graphics.drawCircle(62, 62, 62);
        mask2.graphics.endFill();
        mask2.x = this.imghead0.x + 6;
        mask2.y = this.imghead0.y + 5;
        this.grpHead0.addChild(mask2);
        this.imghead0.mask = mask2;
        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
        this.imghead0.source = "F1_03_png";
    };
    /**退出房间成功 */
    BRNNView.prototype.onleave = function (data) {
        if (data._obj.code == 200) {
            xlLib.PopUpMgr.removePopUp(Inthematch, 1);
            xlLib.SoundMgr.instance.stopBgMusic();
            var musicBg = ["hall_bg_mp3"];
            xlLib.SoundMgr.instance.playBgMusic(musicBg);
            xlLib.SceneMgr.instance.changeScene(Lobby);
        }
    };
    /**返回游戏大厅 */
    BRNNView.prototype.buttonClose = function () {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        if (UserInfo.getInstance().isGameStart) {
            xlLib.PopUpMgr.addPopUp(Hint, this, true, true, null, 1);
            return;
        }
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_leave, senddata, function (data) {
        }, this);
    };
    /**播放 胜利 通杀 通赔 动画 */
    BRNNView.prototype.victoryEffect = function () {
        clearInterval(this.interval);
        this.interval = 0;
        if (this.game_result == 1) {
            // this.addNNVictoryEffect();
            this.game_result = 0;
        }
        else if (this.game_result == 2) {
            // this.addTongsha();
            this.game_result = 0;
        }
        else if (this.game_result == 3) {
            // this.addTongpei();
            this.game_result = 0;
        }
    };
    BRNNView.prototype.resize = function () {
    };
    /**开始倒计时*/
    BRNNView.prototype.startCountDown = function (time) {
        this.timeTxt.visible = true;
        this.time = time;
        if (this.timer == null) {
            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    };
    /**倒计时处理*/
    BRNNView.prototype.timerFunc = function (evt) {
        if (this.time >= 0) {
            this.timeTxt.text = "" + this.time;
            this.time--;
        }
        else {
            this.timeTxt.text = "0";
            this.clearTime();
        }
    };
    /**清除倒计时*/
    BRNNView.prototype.clearTime = function () {
        if (this.timer) {
            this.timer.stop();
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    };
    //筹码选择
    BRNNView.prototype.onTouchBet = function (index) {
        if (this.lastTouchBetIndex == index) {
            return;
        }
        this.lastTouchBetIndex = index;
        switch (index) {
            case 1:
                this._xuanzho.x = 92.49;
                break;
            case 2:
                this._xuanzho.x = 244.97;
                break;
            case 3:
                this._xuanzho.x = 396.51;
                break;
            case 4:
                this._xuanzho.x = 547.43;
                break;
            case 5:
                this._xuanzho.x = 695.9;
                break;
        }
    };
    BRNNView.prototype.moneyStr = function (money) {
        if (money >= 10000 && money < 100000000) {
            return this.get2Num(money / 10000) + "万";
        }
        else if (money >= 100000000) {
            return this.get2Num(money / 100000000) + "亿";
        }
        else {
            return money + "";
        }
    };
    BRNNView.prototype.get2Num = function (num) {
        var str = num.toFixed(3);
        str = str.substr(0, str.length - 1);
        ;
        var arr = str.split(".");
        if (arr[1] + "" == "00") {
            return arr[0] + "";
        }
        return str + "";
    };
    /*
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
    //提示信息  2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    BRNNView.prototype.showGameTips = function (type) {
        this.grpTipsInfo.source = BRNNUtil.getInstance().getMsgSource(type);
        this.grpTips.visible = true;
        this.grpTipsbg.alpha = 0;
        this.grpTipsInfo.x = 640;
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(type));
        egret.Tween.get(this.grpTipsbg).to({ alpha: 1 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ alpha: 0 }, 400);
        }, this.grpTipsbg);
        egret.Tween.get(this.grpTipsInfo).to({ x: 0 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ x: -1640 }, 400);
        }, this.grpTipsInfo);
    };
    //显示筹码
    BRNNView.prototype.showCoins = function (pos, num, msg) {
        var isRemove = false;
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(8));
        var point = BRNNUtil.getInstance().getCoinsPos(msg);
        var arr = BRNNUtil.getInstance().coinsType(pos, num);
        for (var i = 0; i < arr.length; i++) {
            var tx = point.x + Math.random() * 80;
            var ty = point.y + Math.random() * 80;
            this.grpCoins.addChild(arr[i]);
            egret.Tween.get(arr[i]).to({ x: tx, y: ty }, 200).call(function (mc) {
            }, this, [arr[i]]);
        }
    };
    BRNNView.prototype.cardEffect = function () {
        this.isCardEffectShow = true;
        this.flyIntval = setInterval(this.playCardFly.bind(this), 200);
    };
    BRNNView.prototype.playCardFly = function () {
        var card = this['grpCard_' + this.flyIndex0 + '_' + this.flyIndex1];
        card.source = 'qznn_card_100';
        card.x = 713.5;
        card.y = 250;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        var pos = this.orginPlayerCardPos[this.flyIndex0][this.flyIndex1];
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 300);
        if (this.flyIndex1 == 4) {
            if (this.flyIndex0 == 3) {
                this.flyIndex0 = 0;
                this.flyIndex1 = 0;
                clearInterval(this.flyIntval);
                this.flyBankerIndex = 0;
                this.flyIntval = setInterval(this.bankerCardFly.bind(this), 200);
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
    BRNNView.prototype.bankerCardFly = function () {
        if (this.flyBankerIndex == 5) {
            this.flyBankerIndex = 0;
            clearInterval(this.flyIntval);
            // this.interval = setInterval(this.playerCardRotation.bind(this), 800);
            return;
        }
        var card = this['bankerCard_' + this.flyBankerIndex];
        card.x = 713.5;
        card.y = 250;
        card.source = 'qznn_card_100';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        this.orginBankerCardPos;
        var pos = this.orginBankerCardPos[this.flyBankerIndex];
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400);
        this.flyBankerIndex++;
    };
    BRNNView.prototype.playerCardRotation = function () {
        if (this.effectPlayerIndex == 4) {
            clearInterval(this.interval);
            this.effectPlayerIndex = 0;
            this.bankerCardRotation();
            return;
        }
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes;
        var index = this.effectPlayerIndex;
        for (var i = 0; i < 5; i++) {
            var card = this['grpCard_' + index + '_' + i];
            card.source = 'qznn_card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'nn.card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke[index + 1].value[i]]);
            // console.log('poke_' + this.effectPlayerIndex + ': ' + poke[this.effectPlayerIndex].value[i]);
        }
        this['labCardType' + index].source = BRNNUtil.getInstance().getCardType(poke[index + 1].type);
        this.playClickSound(BRNNUtil.getInstance().getCardMusicType(poke[index + 1].type));
        this['labCardType' + index].visible = true;
        ;
        this['labCardType' + index].width = 98;
        this['labCardType' + index].height = 44;
        // this['labCardResult' + index].text = '';//this.cardResult.result[index] == 1 ? '赢' : '输';
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
    BRNNView.prototype.bankerCardRotation = function () {
        this.playClickSound(BRNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes[0];
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = 'qznn_card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'nn.card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]]);
            // console.log('poke_banker: ' + poke.value[i]);
        }
        this.labCardTypeBanker.source = BRNNUtil.getInstance().getCardType(poke.type);
        this.playClickSound(BRNNUtil.getInstance().getCardMusicType(poke.type));
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
    BRNNView.prototype.blinkEffect = function () {
        clearInterval(this.interval);
        var result = this.cardResult.result;
        for (var i = 0; i < 4; i++) {
            if (result[i] == 1) {
                // this['effectSelect' + i].visible = true;
                // EffectUtils.blinkEffect(this['effectSelect' + i], 200);
            }
        }
        this.interval = setInterval(this.cardEffectEnd.bind(this), 2000);
    };
    BRNNView.prototype.cardEffectEnd = function () {
        clearInterval(this.interval);
        var data = this.cardResult;
        var isShow = false;
        //显示比牌结果，显示是否通赔或者通杀
        if (data.result[0] == 1 && data.result[1] == 1 && data.result[2] == 1 && data.result[3] == 1) {
            this.showGameTips(5);
            isShow = true;
        }
        if (data.result[0] == 0 && data.result[1] == 0 && data.result[2] == 0 && data.result[3] == 0) {
            this.showGameTips(4);
            isShow = true;
        }
        if (isShow) {
            this.interval = setInterval(this.showGameResult.bind(this), 1000);
        }
        else {
            this.showGameResult();
        }
    };
    //============================================  Game Result
    BRNNView.prototype.showGameResult = function () {
        clearInterval(this.interval);
        //lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.CHAT_GAME_RESULT));
        var data = this.cardResult;
        this.grpResult.visible = true;
        if (this.maxUserData != null) {
            this.grpMax.visible = true;
            this.grpMaxHead.source = this.maxUserData.headurl;
            this.grpMaxHead.width = this.grpMaxHead.height = 70;
            //this.grpMaxGold.text = '赢 ' + QuickManage.moneyStr(this.maxUserData.gold);
            this.grpMaxName.text = this.maxUserData.name;
            //if (this.maxUserData.name == GlobalData.user.nickname) {
            //    MusicManage.playMuisc(BRNNUtil.getInstance().getSoundEffect(1));
            //}
        }
        else {
            this.grpMax.visible = false;
        }
        this.grpBankerHead.source = this.bankerHead.source; //
        this.grpBankerName.text = this.bankerName.text;
        this.grpBankerBeishu.text = data.pokes[0].num + '倍';
        this.grpBankerType.source = ''; //this.getCardType(data.pokes[0].type);//;
        this.labelBankerType.text = BRNNUtil.getInstance().getCardType2(data.pokes[0].type);
        if (parseInt(data.bankerWin) < 0) {
            //this.grpBankerGold.text = '输 ' + QuickManage.moneyStr(Math.abs(data.bankerWin));
            //PanelManage.chat.sendGameChat('庄家输了 ' + QuickManage.moneyStr(Math.abs(data.bankerWin)));
        }
        else {
            //this.grpBankerGold.text = '赢 ' + QuickManage.moneyStr(data.bankerWin);
            if (data.bankerWin != 0) {
                //PanelManage.chat.sendGameChat('庄家赢了 ' + QuickManage.moneyStr(Math.abs(data.bankerWin)));
            }
        }
        var userGold = 0;
        for (var i = 0; i < 4; i++) {
            var betss = parseInt(data.pokes[i + 1].num);
            this['resultType' + i].text = BRNNUtil.getInstance().getCardType2(data.pokes[i + 1].type);
            this['labResult0_' + i].text = betss + '倍'; //倍率
            this['labResult1_' + i].text = this.moneyStr(this.selfbetsNum[i + 1]); //押注
            var gold = this.selfbetsNum[i + 1];
            if (gold != 0) {
                this['labResult2_' + i].text = '';
                if (data.result[i] == 1) {
                    var bets0 = 0;
                    if (this.isBanker) {
                        bets0 = parseInt(data.pokes[0].num);
                    }
                    else {
                        bets0 = parseInt(data.pokes[i + 1].num);
                    }
                    userGold += parseInt(gold) * (bets0 + 1);
                }
                else {
                    var bets1 = 0; //1倍不再减少
                    if (this.isBanker) {
                        bets1 = parseInt(data.pokes[i + 1].num);
                    }
                    else {
                        bets1 = parseInt(data.pokes[0].num);
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
            //this.labResultValue.text = '结算：' + QuickManage.moneyStr(userGold);
        }
        else {
            //this.labResultValue.text = '结算：-' + QuickManage.moneyStr(Math.abs(userGold));
        }
        // if (userGold > 0) {
        //     EffectUtils.coinsFly(this, 320, 500);
        // }
        //this.updateGold();
        //更新来自更新彩金时所带的庄家金币
        if (!this.isSysBanker) {
            //this.labBankerMoney.text = QuickManage.moneyStr(this.banker_total_gold);
        }
        //this.setHandsel(this.totalCaijin);
        if (userGold > 0 && this.resultCaijin > 0) {
            //this.interval = setInterval(this.caijinShow.bind(this), 3000);
        }
        else {
            if (this.cardResult.bomb == 0) {
                this.interval = setInterval(this.setStartBet.bind(this), 4000);
            }
            else {
                this.interval = setInterval(this.boomShow.bind(this), 3000);
            }
        }
    };
    BRNNView.prototype.boomShow = function () {
        this.grpCaijin.visible = false;
        this.imgBaoZhuang.visible = true;
        clearInterval(this.interval);
        this.interval = setInterval(this.setStartBet.bind(this), 4000);
    };
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
        }
    */
    BRNNView.prototype.setStartBet = function () {
        // this.resetGame();
        this.grpResult.visible = false;
        clearInterval(this.interval);
        this.showGameTips(2);
        this.grpCountdown.visible = true;
        if (!this.isSysBanker && !this.isChangeBanker) {
            this.lastGameBankerNum--;
            this.labBankerLastNum.text = '剩余' + Math.round(this.lastGameBankerNum) + '次';
        }
        if (this.isChangeBanker) {
            this.isChangeBanker = false;
            //this.setBankerInfo(this.changeBankerObj);
            this.grpBankerList.visible = false; //切庄的时候隐藏庄家列表
        }
    };
    /**游戏场景重置 */
    BRNNView.prototype.resetGame = function () {
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = '';
            egret.Tween.removeTweens(card);
        }
        for (var index = 0; index < 4; index++) {
            this['labCardType' + index].visible = false;
            this.labCardTypeBanker.visible = false;
            for (var j = 0; j < 5; j++) {
                var card = this['grpCard_' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
            }
        }
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.isCanBets = true;
        this.isBets = false;
        this.imgBaoZhuang.visible = false;
        this.resultCaijin = 0;
        this.grpCaijin.visible = false;
        this.isCoinsReturn = true;
        this.isCardEffectShow = false;
        this.initData();
    };
    //========================== Second Panel ==============================
    BRNNView.prototype.getHistoryCallback = function (msg) {
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
        this.grpSecondPanel.visible = true;
        this.grpCardType.visible = false;
        this.grpHistory.visible = true;
    };
    BRNNView.prototype.onTouchCloseSecondPanel = function () {
        this.grpSecondPanel.visible = false;
    };
    //============================================红包
    //private redPanel: RedBoxPanel = null;
    BRNNView.prototype.onTouchRedBox = function () {
        //PanelManage.openRedBox(2, 1);
    };
    BRNNView.prototype.operateBoxComplete = function () {
        //lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.UPDATE_MAIN));
    };
    BRNNView.prototype.updateDataGold = function () {
        //EffectUtils.numEffect(this.titleLabMoney, parseInt(GlobalData.user.gold));
    };
    BRNNView.prototype.dispose = function () {
        //MusicManage.closeMuisc();
        if (this.parent) {
            this.parent.removeChild(this);
        }
        //EventManage.removeEvent(this);
    };
    BRNNView.prototype.setTouchEnabled = function () {
        //QuickManage.setTouchEnabled(this);
    };
    BRNNView.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    BRNNView.prototype.destroy = function () {
        this.wanjialist.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.packup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonClose, this);
        this._btn_double_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_double_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.effectTouch3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onUserList, this.initGameIconList, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        EventUtil.removeEventListener(EventConst.onUserBetOrderUpdate, this.OnBetUpdate, this);
        EventUtil.removeEventListener(EventConst.onUserLeave, this.onleave, this);
    };
    return BRNNView;
}(eui.Component));
__reflect(BRNNView.prototype, "BRNNView");
//# sourceMappingURL=BRNNView.js.map