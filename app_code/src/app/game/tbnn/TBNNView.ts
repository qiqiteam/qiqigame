/**
 * 通比牛牛
 */
class TBNNView extends eui.Component {
    constructor() {
        super();
        this.skinName = "TBNNViewSkin";
        //this.r = r;
    }
    private r: any = null;

    public grpCoins:eui.Group;
public grpCard:eui.Group;
public bankerCard_0:eui.Image;
public bankerCard_1:eui.Image;
public bankerCard_2:eui.Image;
public bankerCard_3:eui.Image;
public bankerCard_4:eui.Image;
public labCardTypeBanker:eui.Image;
public grpCard_0_0:eui.Image;
public grpCard_0_1:eui.Image;
public grpCard_0_2:eui.Image;
public grpCard_0_3:eui.Image;
public grpCard_0_4:eui.Image;
public labCardType0:eui.Image;
public grpCard_1_0:eui.Image;
public grpCard_1_1:eui.Image;
public grpCard_1_2:eui.Image;
public grpCard_1_3:eui.Image;
public grpCard_1_4:eui.Image;
public labCardType1:eui.Image;
public grpCard_2_0:eui.Image;
public grpCard_2_1:eui.Image;
public grpCard_2_2:eui.Image;
public grpCard_2_3:eui.Image;
public grpCard_2_4:eui.Image;
public labCardType2:eui.Image;
public grpCard_3_0:eui.Image;
public grpCard_3_1:eui.Image;
public grpCard_3_2:eui.Image;
public grpCard_3_3:eui.Image;
public grpCard_3_4:eui.Image;
public labCardType3:eui.Image;
public grpCard_4_0:eui.Image;
public grpCard_4_1:eui.Image;
public grpCard_4_2:eui.Image;
public grpCard_4_3:eui.Image;
public grpCard_4_4:eui.Image;
public labCardType4:eui.Image;
public grpCard_5_0:eui.Image;
public grpCard_5_1:eui.Image;
public grpCard_5_2:eui.Image;
public grpCard_5_3:eui.Image;
public grpCard_5_4:eui.Image;
public labCardType5:eui.Image;
public grpCard_6_0:eui.Image;
public grpCard_6_1:eui.Image;
public grpCard_6_2:eui.Image;
public grpCard_6_3:eui.Image;
public grpCard_6_4:eui.Image;
public labCardType6:eui.Image;
public grpCard_7_0:eui.Image;
public grpCard_7_1:eui.Image;
public grpCard_7_2:eui.Image;
public grpCard_7_3:eui.Image;
public grpCard_7_4:eui.Image;
public labCardType7:eui.Image;
public grpCard_8_0:eui.Image;
public grpCard_8_1:eui.Image;
public grpCard_8_2:eui.Image;
public grpCard_8_3:eui.Image;
public grpCard_8_4:eui.Image;
public labCardType8:eui.Image;
public grpHead1:TBNNHead;
public grpHead2:TBNNHead;
public grpHead3:TBNNHead;
public grpHead4:TBNNHead;
public grpHead5:TBNNHead;
public grpHead6:TBNNHead;
public grpHead7:TBNNHead;
public grpHead8:TBNNHead;
public grpHead9:TBNNHead;
public btnCharge:eui.Image;
public titleName:eui.Label;
public maskhead:eui.Group;
public titleHead:eui.Image;
public btnVip:eui.Image;
public labTitleVip:eui.Label;
public titleLabMoney:eui.BitmapLabel;
public btnClose:eui.Image;
public btnCardHistroy:eui.Image;
public btnCardType:eui.Image;
public btnRedBox:eui.Image;
public grpBankerInfo:eui.Group;
public btnDownBanker:eui.Image;
public btnBankerDown:eui.Image;
public btnUpBanker:eui.Image;
public bankerHead:eui.Image;
public labBankerMoney:eui.BitmapLabel;
public bankerName:eui.Label;
public labBankerLastNum:eui.Label;
public labBankerRank:eui.Label;
public btnVip0:eui.Image;
public labBankerVip:eui.Label;
public grpCountdown:eui.Group;
public labCountdown0:eui.BitmapLabel;
public labCountdown1:eui.BitmapLabel;
public btnBet0:eui.Image;
public btnBet1:eui.Image;
public btnBet2:eui.Image;
public btnBet3:eui.Image;
public btnBet4:eui.Image;
public btnBet5:eui.Image;
public labBet0:eui.Label;
public labBet1:eui.Label;
public labBet2:eui.Label;
public labBet3:eui.Label;
public labBet4:eui.Label;
public labBet5:eui.Label;
public grpBankerList:eui.Group;
public bankerListItem0:eui.Group;
public itemRank0:eui.Label;
public itemName0:eui.Label;
public itemMoney0:eui.Label;
public itemVip0:eui.BitmapLabel;
public bankerListItem1:eui.Group;
public itemRank1:eui.Label;
public itemName1:eui.Label;
public itemMoney1:eui.Label;
public itemVip1:eui.BitmapLabel;
public bankerListItem2:eui.Group;
public itemRank2:eui.Label;
public itemName2:eui.Label;
public itemMoney2:eui.Label;
public itemVip2:eui.BitmapLabel;
public bankerListItem3:eui.Group;
public itemRank3:eui.Label;
public itemName3:eui.Label;
public itemMoney3:eui.Label;
public itemVip3:eui.BitmapLabel;
public bankerListItem4:eui.Group;
public itemRank4:eui.Label;
public itemName4:eui.Label;
public itemMoney4:eui.Label;
public itemVip4:eui.BitmapLabel;
public bankerListItem5:eui.Group;
public itemRank5:eui.Label;
public itemName5:eui.Label;
public itemMoney5:eui.Label;
public itemVip5:eui.BitmapLabel;
public bankerListItem6:eui.Group;
public itemRank6:eui.Label;
public itemName6:eui.Label;
public itemMoney6:eui.Label;
public itemVip6:eui.BitmapLabel;
public bankerListItem7:eui.Group;
public itemRank7:eui.Label;
public itemName7:eui.Label;
public itemMoney7:eui.Label;
public itemVip7:eui.BitmapLabel;
public bankerListItem8:eui.Group;
public itemRank8:eui.Label;
public itemName8:eui.Label;
public itemMoney8:eui.Label;
public itemVip8:eui.BitmapLabel;
public bankerListItem9:eui.Group;
public itemRank9:eui.Label;
public itemName9:eui.Label;
public itemMoney9:eui.Label;
public itemVip9:eui.BitmapLabel;
public grpSecondPanel:eui.Group;
public grpHistory:eui.Group;
public grpHistroy0:eui.Group;
public grpHistroy0_0:eui.Image;
public grpHistroy1_0:eui.Image;
public grpHistroy2_0:eui.Image;
public grpHistroy3_0:eui.Image;
public grpHistroy1:eui.Group;
public grpHistroy0_1:eui.Image;
public grpHistroy1_1:eui.Image;
public grpHistroy2_1:eui.Image;
public grpHistroy3_1:eui.Image;
public grpHistroy2:eui.Group;
public grpHistroy0_2:eui.Image;
public grpHistroy1_2:eui.Image;
public grpHistroy2_2:eui.Image;
public grpHistroy3_2:eui.Image;
public grpHistroy3:eui.Group;
public grpHistroy0_3:eui.Image;
public grpHistroy1_3:eui.Image;
public grpHistroy2_3:eui.Image;
public grpHistroy3_3:eui.Image;
public grpHistroy4:eui.Group;
public grpHistroy0_4:eui.Image;
public grpHistroy1_4:eui.Image;
public grpHistroy2_4:eui.Image;
public grpHistroy3_4:eui.Image;
public grpHistroy5:eui.Group;
public grpHistroy0_5:eui.Image;
public grpHistroy1_5:eui.Image;
public grpHistroy2_5:eui.Image;
public grpHistroy3_5:eui.Image;
public grpHistroy6:eui.Group;
public grpHistroy0_6:eui.Image;
public grpHistroy1_6:eui.Image;
public grpHistroy2_6:eui.Image;
public grpHistroy3_6:eui.Image;
public grpHistroy7:eui.Group;
public grpHistroy0_7:eui.Image;
public grpHistroy1_7:eui.Image;
public grpHistroy2_7:eui.Image;
public grpHistroy3_7:eui.Image;
public grpHistroy8:eui.Group;
public grpHistroy0_8:eui.Image;
public grpHistroy1_8:eui.Image;
public grpHistroy2_8:eui.Image;
public grpHistroy3_8:eui.Image;
public grpHistroy9:eui.Group;
public grpHistroy0_9:eui.Image;
public grpHistroy1_9:eui.Image;
public grpHistroy2_9:eui.Image;
public grpHistroy3_9:eui.Image;
public grpCardType:eui.Group;
public secondClose:eui.Image;
public grpResult:eui.Group;
public grpMax:eui.Group;
public grpMaxHead:eui.Image;
public grpMaxGold:eui.Label;
public grpMaxName:eui.Label;
public grpBankerHead:eui.Image;
public grpBankerType:eui.Image;
public labelBankerType:eui.Label;
public grpBankerBeishu:eui.Label;
public grpBankerGold:eui.Label;
public grpBankerName:eui.Label;
public labResult0_0:eui.Label;
public labResult1_0:eui.Label;
public labResult2_0:eui.Label;
public labResult0_1:eui.Label;
public labResult1_1:eui.Label;
public labResult2_1:eui.Label;
public labResult0_2:eui.Label;
public labResult1_2:eui.Label;
public labResult2_2:eui.Label;
public labResult0_3:eui.Label;
public labResult1_3:eui.Label;
public labResult2_3:eui.Label;
public labResultValue:eui.Label;
public resultType0:eui.Label;
public resultType1:eui.Label;
public resultType2:eui.Label;
public resultType3:eui.Label;
public grpTips:eui.Group;
public grpTipsbg:eui.Image;
public grpTipsInfo:eui.Image;
public imgBaoZhuang:eui.Image;
public grpCaijin:eui.Group;
public grpCaijinLabel:eui.Label;
public grpHead0:eui.Group;
public imghead0:eui.Image;
public labelHead0:eui.Label;
public labelGold0:eui.Label;
public _btn_record:eui.Button;
public _btn_double_1:eui.Button;
public _image_double_1:eui.Image;
public _btn_double_2:eui.Button;
public _image_double_2:eui.Image;
public _btn_double_3:eui.Button;
public _image_double_3:eui.Image;
public _btn_double_4:eui.Button;
public _image_double_4:eui.Image;
public _btn_double_5:eui.Button;
public _image_double_5:eui.Image;
public _group_qiang:eui.Group;
public _btn_buqiang:eui.Button;
public _btn_qiang_1:eui.Button;
public _btn_qiang_2:eui.Button;
public _btn_qiang_3:eui.Button;
public _btn_qiang_4:eui.Button;
public _btn_close:eui.Button;
public _btn_meun:eui.Button;
public _btn_chat:eui.Button;
public _btn_voice:eui.Button;


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
    private orginPlayerCardPos = [];    // 存储玩家扑克位置

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
    protected childrenCreated(): void {
        //this.setTouchEnabled();
        this.getOrginCardPos();
        this.addEvent();
        this.initData();
        //this.setCountdown();
        //this.onTouchBet(0);
        //PanelManage.openChat(this, 112, 300, "10003");
        //this.joinCallback(this.r);

        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this.resize();

        this.labelHead0.text = UserInfo.getInstance().username;
		this.labelGold0.text = ""+UserInfo.getInstance().goldcoins;
    }

    private initData(): void {
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
    }

    //获取原始扑克的位置
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
        }
        this.labCardTypeBanker.visible = false;
        for (var index = 0; index < 9; index++) {
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
    }

	public resize(): void 
	{

	}

    private addEvent(): void {
        //EventManage.addButtonEvent(this, this.btnClose, egret.TouchEvent.TOUCH_TAP, this.onTouchClose.bind(this));
        //EventManage.addButtonEvent(this, this.btnCharge, egret.TouchEvent.TOUCH_TAP, this.onTouchCharge.bind(this));
        //EventManage.addButtonEvent(this, this.btnUpBanker, egret.TouchEvent.TOUCH_TAP, this.onTouchUpBank.bind(this));
        //EventManage.addButtonEvent(this, this.btnDownBanker, egret.TouchEvent.TOUCH_TAP, this.onTouchDownBank.bind(this));
        //EventManage.addEvent(this, this.grpBankerInfo, egret.TouchEvent.TOUCH_TAP, this.getBankerList.bind(this));
        //EventManage.addEvent(this, this.grpBankerList, egret.TouchEvent.TOUCH_TAP, this.onTouchCloseBankerList.bind(this));

        //EventManage.addButtonEvent(this, this.btnCardType, egret.TouchEvent.TOUCH_TAP, this.onTouchCardType.bind(this));
        //EventManage.addButtonEvent(this, this.btnCardHistroy, egret.TouchEvent.TOUCH_TAP, this.onTouchCardHistory.bind(this));
        //EventManage.addButtonEvent(this, this.secondClose, egret.TouchEvent.TOUCH_TAP, this.onTouchCloseSecondPanel.bind(this));

        //EventManage.addEvent(this, this.btnRedBox, egret.TouchEvent.TOUCH_TAP, this.onTouchRedBox.bind(this));
        /*
        for (var i = 0; i < 8; i++) {
            if (i < 6) {
                EventManage.addEvent(this, this['btnBet' + i], egret.TouchEvent.TOUCH_TAP, this.onTouchBet.bind(this, i));
                this['labBet' + i].touchEnabled = false;
            }
            if (i < 4) {
                EventManage.addEvent(this, this['effectTouch' + i], egret.TouchEvent.TOUCH_TAP, this.onTouchSelectIndex.bind(this, i));
                this['labBetsPool' + i].text = '0';
                this['labBetsSelf' + i].text = '0';
            }
            EventManage.addButtonEvent(this, this['grpHead' + i], egret.TouchEvent.TOUCH_TAP, this.onTouchSeat.bind(this, i));
            this['imghead' + i].source = '';
            this['labelHead' + i].text = '';
        }*/

        //EventManage.addEvent(this, lcp.LListener.getInstance(), EventData.OPERTE_REDBOX_COMPLETE, this.operateBoxComplete.bind(this));
        //EventManage.addEvent(this, lcp.LListener.getInstance(), EventData.UPDATE_PAY, this.updatePayData.bind(this));
        //EventManage.addEvent(this, lcp.LListener.getInstance(), EventData.UPDATE_MAIN, this.updateDataGold.bind(this));


        var data =  {
            pokes:[{num:3,type:10,value:[406,202,301,408,303]},
                {num:3,type:10,value:[201,307,412,308,104]},
                {num:1,type:0,value:[313,208,409,304,105]},
                {num:1,type:4,value:[402,305,203,213,404]},
                {num:2,type:9,value:[112,211,212,204,205]},
                {num:2,type:9,value:[112,211,212,204,205]},
                {num:2,type:9,value:[112,211,212,204,205]},
                {num:2,type:9,value:[112,211,212,204,205]},
                {num:2,type:9,value:[112,211,212,204,205]},
                {num:2,type:9,value:[112,211,212,204,205]}],
            result:[1,0,0,0],
            bankerWin:0,
            rate:"0.05",
            bomb:"0"
        };
        this.cdNum = 5;

        this.setGameResult(data);
        this.setCountdown();
        this.cardEffect();

        EventUtil.addEventListener(EventConst.players, this.addPlayers, this);
        this.addPlayers(UserInfo.getInstance().playes);
    }

    private addPlayers(data):void
    {
        //设置自己信息
        var mask2: egret.Shape = new egret.Shape;
        mask2.graphics.beginFill(0xff0000);
        mask2.graphics.drawCircle(62, 62, 62);
        mask2.graphics.endFill();
        mask2.x = this.imghead0.x+6;
        mask2.y = this.imghead0.y+5;
        this.grpHead0.addChild(mask2);
        this.imghead0.mask = mask2;

        //this.labelHead0.text = "世界第二赌神";
        //this.labelGold0.text = "1888888";
        //this.imghead0.source = "F1_03_png";

        //this.labelHead0.text = data[0].username;
        //this.labelGold0.text = data[0].goldcoins;
        //this.imghead0.source = data[0].headimg;
        
        //设置其他玩家信息
        for (let i=1; i<10; i++) {
            if(data[i] != null) {
                //this['grpHead' + i].setUserInfo(data[i].username, data[i].goldcoins, data[i].headimg);
            } else {
                //this['grpHead' + i].setUserInfo("圣诞节回复", "100000", "F4_03_png");
                this['grpHead' + i].setUserInfo("", "", "");
            }
        }
    }

    //设置彩金
    //private setHandsel(num): void {
        //this.labHandsel.text = QuickManage.moneyStr(num);
    //}

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
    }

    //msg.state     1 free 禁止玩儿游戏   2 下注中  3 封盘倒计时
    private joinCallback(msg): void {
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
    }
    /*
    public onMsgListen(data): void {
        var msg = data.msg
        console.log('onMsgListen: ' + msg.type, '_niuniuMsgListen_');
        switch (msg.type) {
            case 0: //开始下注
                this.cdNum = parseInt(msg.time) + 3;
                this.cdTimer.start();
                break;
            case 1: //封盘
                this.isCanBets = false;
                this.showGameTips(3);
                break;
            case 2: //结算
                this.setGameResult(msg.data);
                break;
            case 3: //更换庄家
                this.changeBankerObj = msg.zhuang;
                this.isChangeBanker = true;
                break;
            case 4: //更新座位
                this.updataSeat(1, msg.data);
                break;
            case 5:	//离开座位
                this.updataSeat(2, msg.seat);
                break;
            case 6://同步彩金
                this.updateHandsel(msg);
                break;
            case 7://通知庄 名次
                this.updateBankerRank(msg);
                break;
        }
    }*/

    //获取结算数据，显示结果面板时设置
    private setGameResult(data): void {
        //this.grpCountdown.visible = false;
        this.cardResult = data;
    }

    //同步座位
    private updataSeat(type, data): void {
        if (type == 1) {
            this['imghead' + data.seat].source = data.headurl;
            this['imghead' + data.seat].height = this['imghead' + data.seat].width = 70;
            this['labelHead' + data.seat].text = data.nick;
        }
        else {
            this['imghead' + data].source = '';
            this['labelHead' + data].text = '';
        }
    }

    //同步彩金 （包含庄结算输赢）
    private updateHandsel(data): void {
        if (this.cardResult == null)
            return;
        //this.resultCaijin = parseInt(data.data.gift);
        //this.totalCaijin = parseInt(data.data.caijin);
        // this.setHandsel(data.data.caijin);
        this.maxUserData = data.data.max;
        this.banker_total_gold = data.data.bankerTotalGold;
        for (let i = 0; i < 4; i++) {
            this['labTipsClick' + i].visible = false;
        }
        this.cardEffect();
    }

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
    private getBetsCallback(msg): void {
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
                        this.showCoins(list[i].score - this.poolBetArray[i], i);//list[i].score
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
    }

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
    private onTouchCharge(): void {
        //PanelManage.openShop(3);
    }

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
        this.betsNum = TBNNUtil.getInstance().getBetNumber(index);
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
    private showGameTips(type): void {
        this.grpTipsInfo.source = TBNNUtil.getInstance().getMsgSource(type);
        this.grpTips.visible = true;
        this.grpTipsbg.alpha = 0;
        this.grpTipsInfo.x = 640;
        this.playClickSound(TBNNUtil.getInstance().getSoundEffect(type));
        egret.Tween.get(this.grpTipsbg).to({ alpha: 1 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ alpha: 0 }, 400);
        }, this.grpTipsbg);
        egret.Tween.get(this.grpTipsInfo).to({ x: 0 }, 400).wait(400).call(function () {
            egret.Tween.get(this).to({ x: -640 }, 400);
        }, this.grpTipsInfo);
    }

    //显示筹码
    private showCoins(num, index): void {
        var isRemove: boolean = false;
        this.playClickSound(TBNNUtil.getInstance().getSoundEffect(8));
        var point: egret.Point = TBNNUtil.getInstance().getCoinsPos(index);
        var arr = TBNNUtil.getInstance().coinsType(num);
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
            this.grpCoins.addChild(arr[i]);
            egret.Tween.get(arr[i]).to({ x: tx, y: ty }, 200).call(function () {
                if (this[0]) {
                    this[1].parent.removeChild(this[1]);
                }
            }, [isRemove, arr[i]]);
        }
    }

    private flyIntval: number = 0;  //
    private flyIndex0: number = 0;  //扑克位置(东西南北)
    private flyIndex1: number = 0;  //扑克(指定位置1，2，3)
    private flyBankerIndex: number = 0;

    private cardEffect(): void {
        this.isCardEffectShow = true;
        this.flyIntval = setInterval(this.playCardFly.bind(this), 200);
    }

    private playCardFly(): void {
        var card: eui.Image = this['grpCard_' + this.flyIndex0 + '_' + this.flyIndex1];
        card.source = 'nn.card_100';
        card.x = 713.5;
        card.y = 300;
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        var pos = this.orginPlayerCardPos[this.flyIndex0][this.flyIndex1];
        this.playClickSound(TBNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 300);
        if (this.flyIndex1 == 4) {
            if (this.flyIndex0 == 8) {
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
    }

    private bankerCardFly(): void {
        if (this.flyBankerIndex == 5) {
            this.flyBankerIndex = 0;
            clearInterval(this.flyIntval);
            this.interval = setInterval(this.playerCardRotation.bind(this), 800);
            return;
        }
        var card: eui.Image = this['bankerCard_' + this.flyBankerIndex];
        card.x = 713.5;
        card.y = 300;
        card.source = 'nn.card_100';
        card.anchorOffsetX = card.width / 2;
        card.x += card.width / 2;
        this.orginBankerCardPos;
        var pos = this.orginBankerCardPos[this.flyBankerIndex];
        this.playClickSound(TBNNUtil.getInstance().getSoundEffect(6));
        egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 400);
        this.flyBankerIndex++;
    }

    private effectPlayerIndex = 0;
    private playerCardRotation(): void {
        if (this.effectPlayerIndex == 9) {
            clearInterval(this.interval)
            this.effectPlayerIndex = 0;
            this.bankerCardRotation();
            return;
        }
        this.playClickSound(TBNNUtil.getInstance().getSoundEffect(7));
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
        this['labCardType' + index].source = TBNNUtil.getInstance().getCardType(poke[index + 1].type);
        this.playClickSound(TBNNUtil.getInstance().getCardMusicType(poke[index + 1].type));
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
    }

    private bankerCardRotation(): void {
        this.playClickSound(TBNNUtil.getInstance().getSoundEffect(7));
        var poke = this.cardResult.pokes[0];
        for (var i = 0; i < 5; i++) {
            var card = this['bankerCard_' + i];
            card.source = 'nn.card_100';
            egret.Tween.get(card).to({ scaleX: 0 }, 300).call(function () {
                this[0].source = 'nn.card_' + this[1];
                egret.Tween.get(this[0]).to({ scaleX: 1 }, 300);
            }, [card, poke.value[i]])
            // console.log('poke_banker: ' + poke.value[i]);
        }
        this.labCardTypeBanker.source = TBNNUtil.getInstance().getCardType(poke.type);
        this.playClickSound(TBNNUtil.getInstance().getCardMusicType(poke.type));
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
                //this['effectSelect' + i].visible = true;
                //EffectUtils.blinkEffect(this['effectSelect' + i], 200);
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
        this.cdTimer.start();
    }

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
                this.playClickSound(TBNNUtil.getInstance().getSoundEffect(1));
            }
        }
        else {
            this.grpMax.visible = false;
        }

        this.grpBankerHead.source = this.bankerHead.source; //
        this.grpBankerName.text = this.bankerName.text;

        this.grpBankerBeishu.text = data.pokes[0].num + '倍';
        this.grpBankerType.source = '';//this.getCardType(data.pokes[0].type);//;
        this.labelBankerType.text = TBNNUtil.getInstance().getCardType2(data.pokes[0].type);
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
            this['resultType' + i].text = TBNNUtil.getInstance().getCardType2(data.pokes[i + 1].type);
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

    private setStartBet(): void {
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
    }

    private resetGame(): void {
        //for (var i = 0; i < 4; i++) {
        //    this['labBetsPool' + i].text = '0';
        //    this['labBetsSelf' + i].text = '0';
        //    egret.Tween.removeTweens(this['effectSelect' + i]);
        //}
        for (var i = 0; i < 5; i++) {
            // this['bankerCard_' + i].source = '';
            let card: eui.Image = this['bankerCard_' + i];
            card.source = '';
            egret.Tween.removeTweens(card);

        }
        for (var index = 0; index < 9; index++) {
            //this['labCardResult' + index].text = '';
            this['labCardType' + index].visible = false;
            this.labCardTypeBanker.visible = false;
            for (var j = 0; j < 5; j++) {
                // this['grpCard_' + index + '_' + j].source = '';
                let card: eui.Image = this['grpCard_' + index + '_' + j];
                card.source = '';
                egret.Tween.removeTweens(card);
            }
        }
        this.selfbetsNum = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.poolBetArray = { '1': 0, '2': 0, '3': 0, '4': 0 };
        this.coinsNumArr = { '1': 0, '2': 0, '3': 0, '4': 0 };

        while (this.grpCoins.numChildren > 0) {
            this.grpCoins.removeChildAt(0);
        }
        //for (var i = 0; i < 4; i++) {
        //    this['effectSelect' + i].visible = false;
        //}
        //for (let i = 0; i < 4; i++) {
            //this['labTipsClick' + i].visible = true;
        //}
        this.isCanBets = true;
        this.isBets = false;
        this.imgBaoZhuang.visible = false;
        this.resultCaijin = 0;
        this.grpCaijin.visible = false;
        this.isCoinsReturn = true;
        this.isCardEffectShow = false;
        this.labCountdown0.text = '0';
        this.labCountdown1.text = '0';
    }

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

    private getHistoryCallback(msg): void {
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
    }

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

    private updateDataGold(): void {
        //EffectUtils.numEffect(this.titleLabMoney, parseInt(GlobalData.user.gold));
    }


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

    public playClickSound(res):void {
		xlLib.SoundMgr.instance.playSound(res + "_mp3");
	}

    public dispose(): void {
        xlLib.SceneMgr.instance.changeScene(Lobby);
    }

    public destroy():void {
         EventUtil.removeEventListener(EventConst.players, this.addPlayers, this);
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
	}
}

