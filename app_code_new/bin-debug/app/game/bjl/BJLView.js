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
 * 百家乐
 */
var BJLView = (function (_super) {
    __extends(BJLView, _super);
    function BJLView() {
        var _this = _super.call(this) || this;
        _this.r = null;
        _this.num = 0; //下注数量
        _this.arrCoin = []; //下注筹码池       
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
        _this.orginPlayerCardPos = []; // 存储玩家扑克位置
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
        _this.flyIntval = 0; //
        _this.flyBankerIndex = 0;
        _this.flyIndex0 = 0; //扑克位置(东西南北)
        _this.flyIndex1 = 0; //扑克(指定位置1，2，3)
        _this.effectPlayerIndex = 0;
        _this.skinName = "BJLViewSkin";
        return _this;
        //this.r = r;
    }
    BJLView.prototype.childrenCreated = function () {
        //this.setTouchEnabled();
        this.getOrginCardPos();
        this.addEvent();
        this.initData();
        this.labelHead0.text = UserInfo.getInstance().username;
        this.labelGold0.text = "" + UserInfo.getInstance().goldcoins;
    };
    /**
     * 数据初始化
     */
    BJLView.prototype.initData = function () {
        this.labBankerRank.text = '';
        this.labBankerLastNum.text = '';
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
        this.grpCaijin.visible = false;
        this.grpCard.visible = true;
        this._wanjia.visible = false;
        this._btn_switch.visible = false;
        // UserInfo.getInstance().isGameStart = true;
        // this._btn_switch.visible = true;
        //this.grpCard.visible = false;
        var dataArr = [{ name: "10", down_url: "img_10zhu_png", up_url: "img_10zhu_png" },
            { name: "20", down_url: "img_20zhu_png", up_url: "img_20zhu_png" },
            { name: "50", down_url: "img_50zhu_png", up_url: "img_50zhu_png" },
            { name: "100", down_url: "img_100zhu_png", up_url: "img_100zhu_png" },
            { name: "500", down_url: "img_500zhu_png", up_url: "img_500zhu_png" }];
        this._Set_meun.dataProvider = new eui.ArrayCollection(dataArr);
        this._Set_meun.useVirtualLayout = true;
        this._Set_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this._Set_meun.visible = false;
        //------------------------------------
        this.arrCoin = [];
    };
    /**下注列表 */
    BJLView.prototype.onBarItemTap = function (e) {
        console.log(e.itemIndex);
        switch (e.itemIndex) {
            case 0:
                console.log('10');
                ;
                break;
            case 1:
                console.log('20');
                ;
                break;
            case 2:
                console.log('50');
                ;
                break;
            case 3:
                console.log('100');
                ;
                break;
            case 4:
                console.log('500');
                ;
                break;
        }
    };
    /**
     * 获取原始扑克的位置
     */
    BJLView.prototype.getOrginCardPos = function () {
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
        }
        //this.labCardTypeBanker.visible = false;
        //this['labCardResult' + index].text = '';
        //this['labCardType' + index].visible = false;
        for (var j = 0; j < 3; j++) {
            var card: eui.Image = this['grpCard_' + j];
            card.source = '';
            card.anchorOffsetX = card.width / 2;
            card.x += card.width / 2;
            var pos: egret.Point = new egret.Point;
            pos.x = card.x;
            pos.y = card.y;
            this.orginPlayerCardPos[j] = pos;
        }*/
        for (var index = 0; index < 2; index++) {
            //this['labCardResult' + index].text = '';
            //this['labCardType' + index].visible = false;
            var cardPos = [];
            for (var j = 0; j < 3; j++) {
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
    BJLView.prototype.resize = function () {
    };
    /**准备 开始回调 */
    BJLView.prototype.onClick = function (e) {
        if (e.target == this._image_10zhu) {
            console.log("_image_10zhu");
            this.sendamessage(EventConst.baijialebeton, 10, 1);
            this.num = 10;
        }
        else if (e.target == this._image_20zhu) {
            console.log("_image_20zhu");
            this.sendamessage(EventConst.baijialebeton, 20, 1);
            this.num = 20;
        }
        else if (e.target == this._image_50zhu) {
            console.log("_image_50zhu");
            this.sendamessage(EventConst.baijialebeton, 50, 1);
            this.num = 50;
        }
        else if (e.target == this._image_100zhu) {
            console.log("_image_100zhu");
            this.sendamessage(EventConst.baijialebeton, 100, 1);
            this.num = 100;
        }
        else if (e.target == this._image_500zhu) {
            console.log("_image_500zhu");
            this.sendamessage(EventConst.baijialebeton, 500, 1);
            this.num = 500;
        }
        // let num: number = parseInt((1 + Math.random() * 9)+"");
        // console.log(num);
        // this.onGenZhuClick(num);
    };
    /**发送请求 sendstr：命令 extparams：{ "moneys": 金额, "types": 押注类型 }*/
    BJLView.prototype.sendamessage = function (sendstr, money, type) {
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: Const.PLAYWAY_CHUJICHANG,
            extparams: { "moneys": money, "types": type }
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
    };
    /**监听服务器事件 */
    BJLView.prototype.addEvent = function () {
        this._image_10zhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_20zhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_50zhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_100zhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_500zhu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);
        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.addEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.addEventListener(EventConst.onBJLjoinroom, this.ononBJLjoinroomBack, this);
        EventUtil.addEventListener(EventConst.startBeton, this.onStartBetonBack, this);
        EventUtil.addEventListener(EventConst.onCatch, this.onbaijialebetonBack, this);
        EventUtil.addEventListener(EventConst.dealCatch, this.ondealCatchBack, this);
        EventUtil.addEventListener(EventConst.baccaratDeil, this.onBaccaratDeilBack, this);
        EventUtil.addEventListener(EventConst.theNumberOfTooMuch, this.onTheNumberOfTooMuchBack, this);
        EventUtil.addEventListener(EventConst.bsogc, this.onbsogcBack, this);
        EventUtil.addEventListener(EventConst.acquisitionGolb, this.onAcquisitionGolbBack, this);
        EventUtil.addEventListener(EventConst.beginBteon, this.onBeginBteonBack, this);
        EventUtil.addEventListener(EventConst.gameOverSucces, this.ongameOverSuccesBack, this);
    };
    /**赔率 */
    BJLView.prototype.ononBJLjoinroomBack = function (data) {
        console.log("赔率");
    };
    /**可以开始下注  倒计时*/
    BJLView.prototype.onStartBetonBack = function (data) {
        console.log("可以开始下注  倒计时");
        this.showGameTips(2);
        this.startCountDown(data._obj.seconds);
        // this._Set_meun.visible = true;
        this._btn_switch.visible = true;
    };
    /**自己下注*/
    BJLView.prototype.onbaijialebetonBack = function (data) {
        if (data._obj.code == 200) {
            if (UserInfo.getInstance().uid == data._obj.userid) {
                xlLib.TipsUtils.showFloatWordTips("押注" + this.num);
                this.labelGold0.text = "" + data._obj.golbcontis;
                this.onGenZhuClick(1);
            }
        }
        else {
            xlLib.TipsUtils.showFloatWordTips(data._obj.reminder);
        }
    };
    /**其他人下注*/
    BJLView.prototype.ondealCatchBack = function (data) {
        if (data._obj.code == 200) {
            if (UserInfo.getInstance().uid != data._obj.userid) {
                this.onPlayerGenZhu(data._obj.base);
            }
        }
    };
    /**第一次(开始发牌) */
    BJLView.prototype.onBaccaratDeilBack = function (msg) {
        this.startCountDown(msg._obj.seconds);
        this._btn_switch.visible = false;
        var data = {
            pokes: [{ value: [msg._obj.playerCard[0], msg._obj.playerCard[1], msg._obj.playerCard[2]] },
                { value: [msg._obj.bankerCard[0], msg._obj.bankerCard[1], msg._obj.bankerCard[2]] }],
        };
        this.cdNum = 5;
        this.cardResult = data;
        this.cardEffect();
    };
    /**参数异常 */
    BJLView.prototype.onTheNumberOfTooMuchBack = function (data) {
        console.log("参数异常");
    };
    /**金币变为** */
    BJLView.prototype.onAcquisitionGolbBack = function (data) {
        console.log("金币变为**");
        this.startCountDown(data._obj.seconds);
        if (data._obj.code == 200) {
            if (UserInfo.getInstance().uid == data._obj.userid) {
                UserInfo.getInstance().goldcoins = data._obj.goldcoins;
                this.labelGold0.text = "" + data._obj.goldcoins;
            }
        }
    };
    /**金币不足** */
    BJLView.prototype.onbsogcBack = function (data) {
        console.log("金币不足**");
    };
    /**5秒后开始下注,处理结算动画 */
    BJLView.prototype.onBeginBteonBack = function (data) {
        var _this = this;
        // UserInfo.getInstance().isGameStart = false;  //游戏状态
        this.startCountDown(data._obj.seconds);
        // xlLib.TipsUtils.showFloatWordTips("5秒后开始下注,处理结算动画!");
        setTimeout(function () {
            _this.resetGame();
        }, 3000);
    };
    BJLView.prototype.over = function (data) {
        // console.log(data);
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
                value: data._obj.players[i].cardsList
            };
            result.pokes.push(err);
        }
        this.cardResult = result;
        this.cardEffect();
        // UserInfo.getInstance().isGameStart = false;  //游戏状态
    };
    /**退出房间 */
    BJLView.prototype.ongameOverSuccesBack = function (data) {
        if (data._obj.code == 200) {
            xlLib.SceneMgr.instance.changeScene(Lobby);
            xlLib.TipsUtils.showFloatWordTips(data._obj.reminder + "!");
        }
        else {
            xlLib.TipsUtils.showFloatWordTips(data._obj.reminder + "!");
        }
    };
    // /**设置庄家 */
    // private acceptbanker(data: any): void {
    //     let num = UserInfo.getInstance().findSeatNumber(data._obj.index);
    //     if (num == 0) {
    //         this._my_img_zhuang.visible = true;
    //     } else {
    //         this['grpHead' + num].setZhuang(true);
    //     }
    // }
    /**自己加入房间*/
    BJLView.prototype.addPlayers = function (data) {
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
        //设置其他玩家信息
        for (var i = 1; i < 7; i++) {
            if (data._obj.player[i] != null) {
                this['grpHead' + i].setUserInfo(UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins, "F4_03_png"); //data._obj.player[i].headimg
            }
            else {
                //this['grpHead' + i].setUserInfo("圣诞节回复", "100000", "F4_03_png");
                this['grpHead' + i].setUserInfo("", "", "");
            }
        }
    };
    /**加入房间新玩家 */
    BJLView.prototype.playerJoinRoom = function (data) {
        console.log(data._obj.player.id);
        console.log(UserInfo.getInstance().myPlayer.id);
        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {
        }
        else {
            this['grpHead' + data._obj.player.index].setUserInfo(data._obj.player.username, data._obj.player.goldcoins, "F4_03_png");
        }
    };
    /**自己点击跟注 */
    BJLView.prototype.onGenZhuClick = function (num) {
        var p = new egret.Point();
        p.x = 268;
        p.y = 792;
        this.showCoins(p, 10000, num);
    };
    /**其他玩家跟注 */
    BJLView.prototype.onPlayerGenZhu = function (num) {
        var p = new egret.Point();
        p.x = 80;
        p.y = 400 + Math.random() * 80;
        this.showCoins(p, 10000, num);
    };
    /**开始倒计时*/
    BJLView.prototype.startCountDown = function (time) {
        this.timeTxt.text = time + "";
        this.timeTxt.visible = true;
        this.time = time;
        if (this.timer == null) {
            this.timer = new egret.Timer(1000);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    };
    /**倒计时处理*/
    BJLView.prototype.timerFunc = function (evt) {
        if (this.time >= 0) {
            this.timeTxt.text = this.time + "";
            this.time--;
        }
        else {
            this.timeTxt.text = "0";
            this.clearTime();
        }
    };
    /**清除倒计时*/
    BJLView.prototype.clearTime = function () {
        if (this.timer) {
            this.timer.stop();
            // this.timeTxt.visible = false;
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    };
    //设置彩金
    //private setHandsel(num): void {
    //this.labHandsel.text = QuickManage.moneyStr(num);
    //}
    /**
     * 定时器
     */
    BJLView.prototype.setCountdown = function () {
        this.cdTimer = new egret.Timer(1000);
        this.cdTimer.addEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
    };
    BJLView.prototype.clacTimer = function () {
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
    //msg.state     1 free 禁止玩儿游戏   2 下注中  3 封盘倒计时
    BJLView.prototype.joinCallback = function (msg) {
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
            console.log('join_game: ' + data.state);
        }
        else {
            //TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
        }
    };
    BJLView.prototype.onMsgListen = function (data) {
        var msg = data.msg;
        console.log('onMsgListen: ' + msg.type, '_niuniuMsgListen_');
        switch (msg.type) {
            case 0://开始下注
                this.cdNum = parseInt(msg.time) + 3;
                this.cdTimer.start();
                break;
            case 1://封盘
                this.isCanBets = false;
                this.showGameTips(3);
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
                this.updateHandsel(msg);
                break;
            case 7://通知庄 名次
                //this.updateBankerRank(msg);
                break;
        }
    };
    /**
     * 获取结算数据，显示结果面板时设置
     */
    BJLView.prototype.setGameResult = function (data) {
        //this.grpCountdown.visible = false;
        this.cardResult = data;
    };
    /**
     * 同步座位
     */
    BJLView.prototype.updataSeat = function (type, data) {
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
    //同步彩金 （包含庄结算输赢）
    BJLView.prototype.updateHandsel = function (data) {
        if (this.cardResult == null)
            return;
        //this.resultCaijin = parseInt(data.data.gift);
        //this.totalCaijin = parseInt(data.data.caijin);
        // this.setHandsel(data.data.caijin);
        this.maxUserData = data.data.max;
        this.banker_total_gold = data.data.bankerTotalGold;
        for (var i = 0; i < 4; i++) {
            this['labTipsClick' + i].visible = false;
        }
        this.cardEffect();
    };
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
    //定时同步下注筹码
    BJLView.prototype.getBetsCallback = function (msg) {
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
                        //this.showCoins(list[i].score - this.poolBetArray[i], i);//list[i].score
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
    //充值
    BJLView.prototype.onTouchCharge = function () {
        //PanelManage.openShop(3);
    };
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
    //提示信息  2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    BJLView.prototype.showGameTips = function (type) {
        this.grpTipsInfo.source = BJLUtil.getInstance().getMsgSource(type);
        this.grpTips.visible = true;
        this.grpTipsbg.alpha = 0;
        this.grpTipsInfo.x = 640;
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(type));
        egret.Tween.get(this.grpTipsbg).to({ alpha: 1 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ alpha: 0 }, 400);
        }, this.grpTipsbg);
        egret.Tween.get(this.grpTipsInfo).to({ x: 0 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ x: -640 }, 400);
        }, this.grpTipsInfo);
    };
    //显示筹码
    BJLView.prototype.showCoins = function (pos, num, msg) {
        var isRemove = false;
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(8));
        //var point: egret.Point = BJLUtil.getInstance().getCoinsPos(index);
        var point = BJLUtil.getInstance().getCoinsPos(msg);
        var arr = BJLUtil.getInstance().coinsType(pos, num);
        for (var i = 0; i < arr.length; i++) {
            var tx = point.x + Math.random() * 80;
            var ty = point.y + Math.random() * 80;
            this.grpCoins.addChild(arr[i]);
            egret.Tween.get(arr[i]).to({ x: tx, y: ty }, 200).call(function (mc) {
                // if (mc) {
                //     mc.parent.removeChild(mc);
                // }
            }, this, [arr[i]]);
            this.arrCoin.push(arr[i]);
        }
    };
    /**
     * 显示发牌
     */
    BJLView.prototype.cardEffect = function () {
        this._btn_switch.visible = false;
        //this.isCardEffectShow = true;
        //this.flyIntval = setInterval(this.playCardFly.bind(this), 200);
        this.flyIndex0 = 0;
        this.flyIndex1 = 0;
        this.playCardFly();
    };
    BJLView.prototype.playCardFly = function () {
        var card = this['grpCard_' + this.flyIndex0 + '_' + this.flyIndex1];
        card.x = 713.5;
        card.y = 100;
        card.source = 'nn.card_100';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        var pos = this.orginPlayerCardPos[this.flyIndex0][this.flyIndex1];
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400).call(this.playerCardRotation, this);
    };
    BJLView.prototype.playerCardRotation = function () {
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes;
        var card = this['grpCard_' + this.flyIndex0 + '_' + this.flyIndex1];
        card.source = 'nn.card_100';
        egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
            this[0].source = 'nn.card_' + this[1];
            egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
        }, [card, poke[this.flyIndex0].value[this.flyIndex1]]).call(this.cycleCallback, this);
    };
    BJLView.prototype.cycleCallback = function () {
        if (this.flyIndex0 == 1) {
            this.flyIndex0 = 0;
            this.flyIndex1++;
        }
        else {
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
    };
    BJLView.prototype.bankerCardFly = function () {
        if (this.flyBankerIndex == 5) {
            this.flyBankerIndex = 0;
            clearInterval(this.flyIntval);
            this.interval = setInterval(this.playerCardRotation.bind(this), 800);
            return;
        }
        var card = this['bankerCard_' + this.flyBankerIndex];
        card.x = 713.5;
        card.y = 300;
        card.source = 'nn.card_100';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        this.orginBankerCardPos;
        var pos = this.orginBankerCardPos[this.flyBankerIndex];
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400);
        this.flyBankerIndex++;
    };
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
            card.source = 'nn.card_100';
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
    BJLView.prototype.bankerCardRotation = function () {
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes[0];
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = 'nn.card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'nn.card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]]);
            // console.log('poke_banker: ' + poke.value[i]);
        }
        this.labCardTypeBanker.source = BJLUtil.getInstance().getCardType(poke.type);
        // this.playClickSound(BJLUtil.getInstance().getCardMusicType(poke.type));
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
    BJLView.prototype.blinkEffect = function () {
        clearInterval(this.interval);
        var result = this.cardResult.result;
        for (var i = 0; i < 4; i++) {
            if (result[i] == 1) {
                //this['effectSelect' + i].visible = true;
                //EffectUtils.blinkEffect(this['effectSelect' + i], 200);
            }
        }
        this.interval = setInterval(this.cardEffectEnd.bind(this), 2000);
    };
    BJLView.prototype.cardEffectEnd = function () {
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
            //this.interval = setInterval(this.showGameResult.bind(this), 1000);
        }
        else {
            //this.showGameResult();
        }
        //this.cdTimer.start();
    };
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
    BJLView.prototype.setStartBet = function () {
        this.resetGame();
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
    /**重置界面 */
    BJLView.prototype.resetGame = function () {
        //for (var i = 0; i < 4; i++) {
        //    this['labBetsPool' + i].text = '0';
        //    this['labBetsSelf' + i].text = '0';
        //    egret.Tween.removeTweens(this['effectSelect' + i]);
        //}
        /*
        for (var i = 0; i < 5; i++) {
            // this['bankerCard_' + i].source = '';
            let card: eui.Image = this['bankerCard_' + i];
            card.source = '';
            egret.Tween.removeTweens(card);

        }*/
        for (var index = 0; index < 2; index++) {
            //this['labCardResult' + index].text = '';
            //this['labCardType' + index].visible = false;
            //this.labCardTypeBanker.visible = false;
            for (var j = 0; j < 3; j++) {
                // this['grpCard_' + index + '_' + j].source = '';
                var card = this['grpCard_' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
            }
        }
        //this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        //this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        //this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };
        while (this.grpCoins.numChildren > 0) {
            this.grpCoins.removeChildAt(0);
        }
        //for (var i = 0; i < 4; i++) {
        //    this['effectSelect' + i].visible = false;
        //}
        //for (let i = 0; i < 4; i++) {
        //this['labTipsClick' + i].visible = true;
        //}
        for (var i = 0; i < this.arrCoin.length; i++) {
            if (this.arrCoin[i].parent != null) {
                //egret.Tween.removeTweens(this.arrCoin[i]);
                this.arrCoin[i].parent.removeChild(this.arrCoin[i]);
            }
        }
        this.arrCoin = [];
        /*
                this.isCanBets = true;
                this.isBets = false;
                this.imgBaoZhuang.visible = false;
                this.resultCaijin = 0;
                this.grpCaijin.visible = false;
                this.isCoinsReturn = true;
                this.isCardEffectShow = false;
                this.labCountdown0.text = '0';
                this.labCountdown1.text = '0';
                */
    };
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
    BJLView.prototype.getHistoryCallback = function (msg) {
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
    BJLView.prototype.updateDataGold = function () {
        //EffectUtils.numEffect(this.titleLabMoney, parseInt(GlobalData.user.gold));
    };
    //public dispose(): void {
    //MusicManage.closeMuisc();
    //    if (this.parent) {
    //        this.parent.removeChild(this);
    //    }
    //EventManage.removeEvent(this);
    //}
    //public setTouchEnabled(): void {
    //QuickManage.setTouchEnabled(this);
    //}
    BJLView.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    BJLView.prototype.Onquit = function () {
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
        };
        // xlLib.SceneMgr.instance.changeScene(Lobby);
        xlLib.WebSocketMgr.getInstance().send(EventConst.BaccaratOnleave, senddata, function (data) {
        }, this);
    };
    BJLView.prototype.destroy = function () {
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._image_10zhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_20zhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_50zhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_100zhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._image_500zhu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onquit, this);
        EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        EventUtil.removeEventListener(EventConst.onNewUserEnterGame, this.playerJoinRoom, this);
        EventUtil.removeEventListener(EventConst.onBJLjoinroom, this.ononBJLjoinroomBack, this);
        EventUtil.removeEventListener(EventConst.startBeton, this.onStartBetonBack, this);
        EventUtil.removeEventListener(EventConst.onCatch, this.onbaijialebetonBack, this);
        EventUtil.removeEventListener(EventConst.dealCatch, this.ondealCatchBack, this);
        EventUtil.removeEventListener(EventConst.baccaratDeil, this.onBaccaratDeilBack, this);
        EventUtil.removeEventListener(EventConst.theNumberOfTooMuch, this.onTheNumberOfTooMuchBack, this);
        EventUtil.removeEventListener(EventConst.bsogc, this.onbsogcBack, this);
        EventUtil.removeEventListener(EventConst.acquisitionGolb, this.onAcquisitionGolbBack, this);
        EventUtil.removeEventListener(EventConst.beginBteon, this.onBeginBteonBack, this);
        if (this.cdTimer != null) {
            this.cdTimer.removeEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
        }
    };
    return BJLView;
}(eui.Component));
__reflect(BJLView.prototype, "BJLView");
//# sourceMappingURL=BJLView.js.map