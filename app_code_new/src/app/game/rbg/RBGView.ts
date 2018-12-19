/**
 * 抢庄牛牛
 */
class RBGView extends eui.Component {
    constructor() {
        super();
        this.skinName = "RBGViewSkin";
    }

    public grpHead0:RBGHead;
    public grpHead1:RBGHead;
    public grpHead2:RBGHead;
    public grpHead3:RBGHead;
    public _img_zx_0:eui.Image;
    public _img_zx_1:eui.Image;
    public _img_zx_2:eui.Image;
    public _img_zx_3:eui.Image;
    public _group_qiang_point_0:eui.Group;
    public _label_qiang_0:eui.BitmapLabel;
    public _group_qiang_point_1:eui.Group;
    public _label_qiang_1:eui.BitmapLabel;
    public _group_qiang_point_2:eui.Group;
    public _label_qiang_2:eui.BitmapLabel;
    public _group_qiang_point_3:eui.Group;
    public _label_qiang_3:eui.BitmapLabel;
    public _group_bet_point_0:eui.Group;
    public _label_bet_0:eui.BitmapLabel;
    public _group_bet_point_1:eui.Group;
    public _label_bet_1:eui.BitmapLabel;
    public _group_bet_point_2:eui.Group;
    public _label_bet_2:eui.BitmapLabel;
    public _group_bet_point_3:eui.Group;
    public _label_bet_3:eui.BitmapLabel;
    public _buqiang_point_0:eui.Image;
    public _buqiang_point_1:eui.Image;
    public _buqiang_point_2:eui.Image;
    public _buqiang_point_3:eui.Image;
    public _bar_thinking_group_1:eui.Group;
    public _bar_thinking_1_0:eui.Image;
    public _bar_thinking_1_1:eui.Image;
    public _bar_thinking_1_2:eui.Image;
    public _bar_thinking_group_2:eui.Group;
    public _bar_thinking_2_0:eui.Image;
    public _bar_thinking_2_1:eui.Image;
    public _bar_thinking_2_2:eui.Image;
    public _bar_thinking_group_3:eui.Group;
    public _bar_thinking_3_0:eui.Image;
    public _bar_thinking_3_1:eui.Image;
    public _bar_thinking_3_2:eui.Image;
    public grpCoins:eui.Group;
    public grpCard:eui.Group;
    public grpCard_0_0:RBGMahjong;
    public grpCard_0_1:RBGMahjong;
    public labCardType_bg_0:eui.Image;
    public labCardType0:eui.Image;
    public grpCard_1_0:RBGMahjong;
    public grpCard_1_1:RBGMahjong;
    public labCardType_bg_1:eui.Image;
    public labCardType1:eui.Image;
    public grpCard_2_0:RBGMahjong;
    public grpCard_2_1:RBGMahjong;
    public labCardType_bg_2:eui.Image;
    public labCardType2:eui.Image;
    public grpCard_3_0:RBGMahjong;
    public grpCard_3_1:RBGMahjong;
    public labCardType_bg_3:eui.Image;
    public labCardType3:eui.Image;
    public _card_an_0_0:eui.Image;
    public _card_an_0_1:eui.Image;
    public _card_an_1_0:eui.Image;
    public _card_an_1_1:eui.Image;
    public _card_an_2_0:eui.Image;
    public _card_an_2_1:eui.Image;
    public _card_an_3_0:eui.Image;
    public _card_an_3_1:eui.Image;
    public btnCardHistroy:eui.Image;
    public _group_bar_histroy:eui.Group;
    public _label_bar_0:eui.BitmapLabel;
    public _label_bar_1:eui.BitmapLabel;
    public _label_bar_2:eui.BitmapLabel;
    public _label_bar_3:eui.BitmapLabel;
    public _label_bar_4:eui.BitmapLabel;
    public _label_bar_5:eui.BitmapLabel;
    public _label_bar_6:eui.BitmapLabel;
    public _label_bar_7:eui.BitmapLabel;
    public _label_bar_8:eui.BitmapLabel;
    public _label_bar_9:eui.BitmapLabel;
    public grpCountdown:eui.Group;
    public labCountdown:eui.BitmapLabel;
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
    public _group_coin_area:eui.Group;
    public _start_qz:eui.Image;
    public _start_xz:eui.Image;
    public _btn_close:eui.Button;
    public _btn_meun:eui.Button;
    public _group_bz:eui.Group;
    public _img_bz_d:eui.Image;
    public _dice_0:eui.Image;
    public _dice_1:eui.Image;
    public _img_bz_g:eui.Image;
    public _img_bz:eui.Image;
    public _group_wait:eui.Group;
    public _label_wait:eui.Label;
    public _btn_ret:eui.Button;
    public _btn_switch:eui.Group;
    public _btn_double_1:eui.Button;
    public _btn_double_2:eui.Button;
    public _btn_double_3:eui.Button;
    public _btn_double_4:eui.Button;
    public _btn_double_5:eui.Button;
    public _group_qiang:eui.Group;
    public _btn_buqiang:eui.Button;
    public _btn_qiang_1:eui.Button;
    public _btn_qiang_2:eui.Button;
    public _btn_qiang_3:eui.Button;
    public _btn_qiang_4:eui.Button;
    public _continue_btn_0:eui.Button;
    public _continue_img_0:eui.Image;
    public _group_settlement:eui.Group;
    public _rect_re_touch:eui.Rect;
    public _img_re_bg:eui.Image;
    public _img_guang:eui.Image;
    public _img_huangguan:eui.Image;
    public _img_tmp:eui.Image;
    public _player_name_0:eui.Label;
    public _player_name_1:eui.Label;
    public _player_name_2:eui.Label;
    public _player_name_3:eui.Label;
    public _player_fen_0:eui.Label;
    public _player_fen_1:eui.Label;
    public _player_fen_2:eui.Label;
    public _player_fen_3:eui.Label;
    public _player_bet_0:eui.Label;
    public _player_bet_1:eui.Label;
    public _player_bet_2:eui.Label;
    public _player_bet_3:eui.Label;
    public _player_gold_0:eui.Label;
    public _player_gold_1:eui.Label;
    public _player_gold_2:eui.Label;
    public _player_gold_3:eui.Label;
    public _player_zhuang_0:eui.Image;
    public _player_zhuang_1:eui.Image;
    public _player_zhuang_2:eui.Image;
    public _player_zhuang_3:eui.Image;
    public _close_btn:eui.Button;
    public _label_timing:eui.Label;
    public _label_des:eui.Label;
    public _continue_btn_1:eui.Button;
    public _continue_img_1:eui.Image;
    public _tongpei_img:eui.Image;


    //-----------------------------------------------

    private cardResult = null;          // 结算扑克结果(最后展示处理)

    private orginPlayerCardPos = [];    // 存储玩家扑克位置
    private orginAnCardPos = [];        // 存储暗扑克位置
    private orginCardTypePos = [];      // 牌类型显示位置

    private cdNum: number = 5;     //倒计时计数
    private cdTimer: egret.Timer;   //倒计时时间

    //-----------------------------------------------

    private zhaungIndex: number = 0;        //庄的位置

    private qz_player_arr = [];             //记录抢庄玩家本场景的座位号

    private dingZhuangEff: RBGVEff = null;

    private gameStartEff: RBGSEff = null;

    private _coin_arr = [];                 //筹码池

    private tianWang:DragonBonesSprite = null;

    private tongSha:DragonBonesSprite = null;

    //-----------------------------------------------

    protected childrenCreated(): void {
        this.getOrginCardPos();
        this.init_desktop();
        this.wait_start();
        this.addEvent();
        this.initData();
        this.setCountdown();
    }
    /**
     * 数据初始化
     */
    private initData(): void {
        this.grpCoins.touchEnabled = false;
        this.grpResult.visible = false;
        this.grpCard.visible = true;
        this._btn_switch.visible = false;
        this._group_qiang.visible = false;

        //-----------------------------------------------
        this.zhaungIndex = 0;   //庄的座位号（当前游戏的座位号）
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
        this._tongpei_img.visible = false;
        //-----------------------------------------------
    }

    /**
     * 获取原始扑克的位置
     */
    private getOrginCardPos(): void {
        for (var index = 0; index < 4; index++) {
            var cardPos = [];
            var an_cardPos = [];

            let card_type = this['labCardType' + index];
            var t_pos: egret.Point = new egret.Point;
            card_type.anchorOffsetX = card_type.width / 2;
            card_type.anchorOffsetY = card_type.height / 2;
            card_type.x += card_type.width / 2;
            card_type.y += card_type.height / 2;
            t_pos.x = card_type.x;
            t_pos.y = card_type.y;
            this.orginCardTypePos[index] = t_pos;

            for (var j = 0; j < 2; j++) {
                var card:RBGMahjong = this['grpCard_' + index + '_' + j];
                card.setPai(null);
                card.setAnPai(true);
                card.visible = false;
                card.anchorOffsetX = card.width / 2;
                card.x += card.width / 2;
                var pos: egret.Point = new egret.Point;
                pos.x = card.x;
                pos.y = card.y;
                cardPos[j] = pos;

                var an_card:eui.Image = this['_card_an_' + index + '_' + j];
                an_card.source = "";
                an_card.visible = false;
                an_card.anchorOffsetX = an_card.width / 2;
                an_card.x += an_card.width / 2;
                var an_pos: egret.Point = new egret.Point;
                an_pos.x = an_card.x;
                an_pos.y = an_card.y;
                an_cardPos[j] = an_pos;
            }
            this.orginPlayerCardPos[index] = cardPos;
            this.orginAnCardPos[index] = an_cardPos;
        }
    }

    /**初始化桌面 */
    public init_desktop():void {
        for(let i=0; i<4; i++) {
            this['labCardType' + i].visible = false;
            this["labCardType_bg_" + i].visible = false;
            for (var j = 0; j < 2; j++) {
                var card:RBGMahjong = this['grpCard_' + i + '_' + j];
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

        for(let i=0; i<10; i++) {
            this["_label_bar_" + i].text = "0";
        }
    }

    private gamePlayIndex:number = -1;
    private waitTime:number = 0;
    /**匹配中 */
    public wait_start() {
        this._group_wait.visible = true;
        this.waitTime = 0;
        this.gamePlayIndex = setInterval(this.waitLabelTurn.bind(this), 600);
    }

    public waitLabelTurn():void {
        let str = "游戏即将开始，请耐心等待";
        if(this.waitTime == 0) {
            str = str;
        } else if(this.waitTime == 1) {
            str = str+".";
        } else if(this.waitTime == 2) {
            str = str+"..";
        } else if(this.waitTime == 3) {
            str = str+"...";
        } 
        this._label_wait.text = str;
        this.waitTime++;

        if(this.waitTime > 3) {
            this.waitTime = 0;
        }
    }

    public resize(): void {

    }

    /**准备 开始回调 */
    public onClick(e: egret.TouchEvent): void {
        if (e.target == this._btn_buqiang) {
            //console.log("_btn_buqiang");
            this.sendamessage(EventConst.erbagang_hog, 0);
        } else if (e.target == this._btn_qiang_1) {
            //console.log("_btn_qiang_1");
            this.sendamessage(EventConst.erbagang_hog, 3);
        } else if (e.target == this._btn_qiang_2) {
            //console.log("_btn_qiang_2");
            this.sendamessage(EventConst.erbagang_hog, 68);
        } else if (e.target == this._btn_qiang_3) {
            //console.log("_btn_buqiang");
            this.sendamessage(EventConst.erbagang_hog, 134);
        } else if (e.target == this._btn_qiang_4) {
            //console.log("_btn_qiang_4");
            this.sendamessage(EventConst.erbagang_hog, 200);
        } else if (e.target == this._btn_double_1) {
            //console.log("_btn_double_1");
            this.sendamessage1(EventConst.erbagang_bet, 1);
            this._btn_switch.visible = false;
        } else if (e.target == this._btn_double_2) {
            //console.log("_btn_double_2");
            this.sendamessage1(EventConst.erbagang_bet, 16);
            this._btn_switch.visible = false;
        } else if (e.target == this._btn_double_3) {
            //console.log("_btn_double_3");
            this.sendamessage1(EventConst.erbagang_bet, 33);
            this._btn_switch.visible = false;
        } else if (e.target == this._btn_double_4) {
            //console.log("_btn_double_4");
            this.sendamessage1(EventConst.erbagang_bet, 50);
            this._btn_switch.visible = false;
        } else if (e.target == this._btn_double_5) {
            //console.log("_btn_double_5");
            this.sendamessage1(EventConst.erbagang_bet, 66);
            this._btn_switch.visible = false;
        } else if (e.target == this.btnCardHistroy) {
            if(this._group_bar_histroy.visible == false) {
                this._group_bar_histroy.visible = true;
            } else {
                this._group_bar_histroy.visible = false;
            }
        } else if(e.target == this._rect_re_touch) {
            this._rect_re_touch.touchEnabled = false;
            this._group_settlement.visible = false;
            this._continue_btn_1.visible = false;
            this._continue_img_1.visible = false;
            this._continue_btn_0.visible = true;
            this._continue_img_0.visible = true;
            this._close_btn.visible = false;
        } else if(e.target == this._continue_btn_1) {
            this.onRestartGame();
        } else if(e.target == this._continue_btn_0) {
            this.onRestartGame();
        }
        EffectUtils.playButtonEffect(e.target, (evt:egret.TouchEvent)=>{
    
        },this);

    }

    private sendamessage(sendstr: string, bet: number): void {

        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {

        }, this);
        this._group_qiang.visible = false;
    }

    private sendamessage1(sendstr: string, bet: number): void {
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            data: bet,
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {

        }, this);

        //this._btn_double_1.touchEnabled = false;
        //this._btn_double_2.touchEnabled = false;
        //this._btn_double_3.touchEnabled = false;
        //this._btn_double_4.touchEnabled = false;
        //this._btn_double_5.touchEnabled = false;
    }

    /**注册事件 */
    private addEvent(): void {
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
    }

    //----------------------------------服务器监听---------------------------------------

    /**游戏状态 */
    private GameStatus(data: any): void {
        switch (data._obj.roomStatus) {
            case 0: console.log("未准备"); break;
            case 1: console.log("已准备"); break;
            case 2: this.gameStart(data); break;
            case 3: this.onHogBack(data); break;    // 抢庄
            case 4: this.onDingzhuang(data); break; // 定庄
            case 5: this.onbetBack(data); break;    // 下注
            case 6: this.gameResult(data); break;
            case 7: this.showGameResult(data); break;
        }
    }

    /**开始游戏 */
    private gameStart(data: any):void {
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
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(1));
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(2));

        clearInterval(this.gamePlayIndex);
        this.waitTime = 0;
        this._group_wait.visible = false;
    }

    /**监听抢庄 */
    private onHogBack(data: any): void {
        this.startQiangZhuang();
    }

    public startQiangZhuang():void {
        this._start_qz.visible = true;
        this._group_qiang.visible = true;
        for(let i=1; i<4; i++) {
            this["_bar_thinking_group_" + i].visible = true;
            var dian1 = this["_bar_thinking_" + i + "_"+ 0];
            var dian2 = this["_bar_thinking_" + i + "_"+ 1];
            var dian3 = this["_bar_thinking_" + i + "_"+ 2];
            this.showThinking(dian1, dian2, dian3);
        }
        this.gamePlayIndex = setInterval(this.updateTime.bind(this), 600);
    }

    private updateTime() {
        clearInterval(this.gamePlayIndex);
        this._start_qz.visible = false;
        this._start_xz.visible = false;
        this.grpCountdown.visible = true;
        this.cdNum = 5;
        this.labCountdown.text = "5";
        this.cdTimer.start();
    }

    /**更新抢庄通知(所有人) */
    private OnHogUpdate(data: any): void {
        //console.log(data._obj.index + "号抢庄");
        let index = UserInfo.getInstance().findSeatNumber(data._obj.index);
        if(UserInfo.getInstance().uid == data._obj.userid) {
            this._group_qiang.visible = false;
        } else {
            this["_bar_thinking_group_" + index].visible = false;
            for(let i=0; i<3; i++) {
                egret.Tween.removeTweens(this["_bar_thinking_" + index + "_"+ i]);
            }
        }

        let _group = null;
        if(data._obj.hogOrBet == 0) {
            _group = this["_buqiang_point_" + index];
        } else {
            _group = this["_group_qiang_point_" + index];
            _group.visible = true;
            this["_label_qiang_" + index].text = data._obj.hogOrBet + "";
            this.qz_player_arr.push(index);
        }
        this.setGrabBanker(_group);
    }

    /**监听定庄 */
    private onDingzhuang(data: any):void {
        if(this.grpCountdown.visible == true) {
            this.stopTime();
        }
        this.acceptbanker(data);
    }

    private turn0: number = 0;
    private timeNum: number = 0;
    private turnBankerShow(): void {
        for (let i = 0; i < 4; i++) {
            this["grpHead" + i].setZhuangEf(false);
        }
        if (this.random_arr.length == this.timeNum) {
            this.random_arr = [];
            this.timeNum = 0;
            clearInterval(this.turn0);
            this.turn0 = -1;
            this.setbanker(this.bet_data);
            return;
        }
       
        let value = this.random_arr[this.timeNum];
        this["grpHead" + this.qz_player_arr[value]].setZhuangEf(true);
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(3));
        this.timeNum++;
    }

    /**随机庄家动画 */
    private bet_data: any = [];
    private random_arr = [];
    private acceptbanker(data: any): void {
        this.bet_data = [];
        this.bet_data = data;
        if(this.qz_player_arr.length > 1) {
            this.random_arr = [];
            let cur_num = 1000;
            for(let i=1; i>0; i++) {
                let sum = parseInt((Math.random() * this.qz_player_arr.length) + "");
                if(sum != cur_num) {
                    cur_num = sum;
                    this.random_arr.push(sum);
                }
                if(this.random_arr.length == 16) {
                    break;
                }
            }

            this.turn0 = 0;
            this.timeNum = 0;
            this.turn0 = setInterval(this.turnBankerShow.bind(this), 150);
        } else {
            this.setbanker(data);
        }
    }

    /**设置庄家 */
    private setbanker(data) {
        this.qz_player_arr = [];
        this.bet_data = [];

        for(let i=0; i<4; i++) {
            this["_buqiang_point_" + i].visible = false;
            this["_group_qiang_point_" + i].visible = false;
        }

        let num = UserInfo.getInstance().findSeatNumber(data._obj.banker.index);
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
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(4));
    }

    /**监听下注 */
    private onbetBack(data: any): void {
        //console.log(data._obj.index + "号投注");
        if(this.zhaungIndex != 0) {
            this._btn_switch.visible = true;
        }
        this._start_xz.visible = true;
        
        for(let i=1; i<4; i++) {
            if(i==this.zhaungIndex) {
                continue;
            }
            this["_bar_thinking_group_" + i].visible = true;
            var dian1 = this["_bar_thinking_" + i + "_"+ 0];
            var dian2 = this["_bar_thinking_" + i + "_"+ 1];
            var dian3 = this["_bar_thinking_" + i + "_"+ 2];
            this.showThinking(dian1, dian2, dian3);
        }
        this.gamePlayIndex = setInterval(this.updateTime.bind(this), 600);
    }

    /**更新下注通知(所有人) */
    private OnBetUpdate(data: any): void {
        //console.log(data._obj.index + "号下注");
        let index = UserInfo.getInstance().findSeatNumber(data._obj.index);
        if(UserInfo.getInstance().uid == data._obj.userid) {
            this._btn_switch.visible = false;
        } else {
            this["_bar_thinking_group_" + index].visible = false;
            for(let i=0; i<3; i++) {
                egret.Tween.removeTweens(this["_bar_thinking_" + index + "_"+ i]);
            }
        }

        let _group = this["_group_bet_point_" + index];
         _group.visible = true;
        this["_label_bet_" + index].text = data._obj.hogOrBet + "";
        this.setGrabBanker(_group);
        /**抛出筹码 */
        this.showCoins(index);
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(5));
    }

    //显示筹码
    private showCoins(index): void {
        let value = parseInt((Math.random() * 10 + 30) + "");
        for (var i = 0; i < value; i++) {
            let num = parseInt((Math.random() * 6) + "");
            var coin = RBGUtil.getInstance().coinsType(index, num);
            coin.alpha = 0;
            coin.scaleX = 0.2;
            coin.scaleY = 0.2;
            var p: egret.Point = RBGUtil.getInstance().coinPos(index);
            coin.x = p.x;
            coin.y = p.y;
            this.grpCoins.addChild(coin);
            this._coin_arr.push(coin);
            var endX = this._group_coin_area.x + parseInt((Math.random() * 400) + "");
            var endY = this._group_coin_area.y + parseInt((Math.random() * 140) + "");
            egret.Tween.get(coin).wait(80 * i).to({alpha: 1}, 1).to({x: endX,y: endY, scaleX: 1, scaleY: 1},100).call(function(){
                egret.Tween.removeTweens(coin);
            }, [coin]);
        }
    }

    public gameResult(data: any):void {
        
        this.cardResult = data._obj;
        //console.log("++++++++++++++123456789++++++++++++++++++" + this.cardResult.players[0].username);
        //console.log("++++++++++++++#########++++++++++++++++++" + this.cardResult.players[0].index);

        
        this.gamePlayIndex = setInterval(this.shakeDice.bind(this), 5000);
    }


    private diceInterval = -1;
    public shakeDice():void {
        clearInterval(this.gamePlayIndex);
        this._group_bz.visible = true;
        this.numTime = 0;
        this.diceInterval = setInterval(this.setDiceAnimation.bind(this), 200);
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(6));
    }

    //----------------------------------------------------------------------------------

    /**分数特效 */
    public setGrabBanker(_group) {
        _group.visible = true;
        _group.alpha = 0.8;
        egret.Tween.get(_group).to({
            scaleX: 1.4,
            scaleY: 1.4,
            alpha: 1
        },
        150).to({
            scaleX: 0.8,
            scaleY: 0.8,
            alpha: 0.8
        },
        100).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        },
        100).call(function() {
            egret.Tween.removeTweens(_group);
        }, [_group]);
    }

    /**倍数分数特效 */
    public setBetScore(_group) {
        _group.visible = true;
        _group.alpha = 0.8;
        egret.Tween.get(_group).to({
            scaleX: 1.4,
            scaleY: 1.4,
            alpha: 1},
        150).to({
            scaleX: 0.8,
            scaleY: 0.8,
            alpha: 0.8},
        100).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1},
        100);
    }

    /**思考中的三个点效果 */
    public showThinking(dian1, dian2, dian3) {
        dian1.alpha = 0;
        dian2.alpha = 0;
        dian3.alpha = 0;

        egret.Tween.get(dian1, {loop: true}).to({alpha: 1},400).wait(400).to({alpha: 0},400).wait(800);
        egret.Tween.get(dian2, {loop: true}).wait(400).to({alpha: 1},400).wait(400).to({alpha: 0},400).wait(400);
        egret.Tween.get(dian3, {loop: true}).wait(800).to({alpha: 1},400).wait(400).to({alpha: 0},400);
    }

    /**设置card类型特效 */
    public setCardType(_group_bg, _group) {
        _group.alpha = 0.8;
        _group_bg.scaleX = _group_bg.scaleY = 0.5;
        egret.Tween.get(_group_bg).wait(600).call(function() {
            _group_bg.visible = true;
        }, [_group_bg]).to({
            scaleX: 1,
            scaleY: 1
        },
        150).call(function() {
            egret.Tween.removeTweens(_group_bg);
        }, [_group_bg]);
        egret.Tween.get(_group).wait(600).call(function() {
            _group.visible = true;
        }, [_group]).to({
            scaleX: 1.4,
            scaleY: 1.4,
            alpha: 1
        },
        150).to({
            scaleX: 0.8,
            scaleY: 0.8,
            alpha: 0.8
        },
        100).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        },
        100).call(function() {
            egret.Tween.removeTweens(_group);
        }, [_group]);
    }

    public setFirstAnimation(_img) {
        _img.visible = true;
        var e = _img.y;
        var t = _img.y + 10;
        egret.Tween.get(_img).to({
            y: t
        },
        300).to({
            y: e
        },
        300).to({
            y: t
        },
        300).to({
            y: e
        },
        300).to({
            y: t
        },
        300).to({
            y: e
        },
        300).to({
            y: t
        },
        300).call(function() {
            egret.Tween.removeTweens(_img);
            _img.visible = false;
            _img.y = e;
        }, [_img]);
        this.gamePlayIndex = setInterval(this.startSendPai.bind(this), 2000);
    }

    public startSendPai():void {
        clearInterval(this.gamePlayIndex);
        this.gamePlayIndex = setInterval(this.cardEffect.bind(this), 600);
    }

    private numTime:number = 0;
    public setDiceAnimation() {
        if(this.numTime == 10) {
            clearInterval(this.diceInterval);
            this.numTime = 0;
            //egret.Tween.removeTweens(this._img_bz);
            this.playDiceResult();
        }

        this._dice_0.source = "bar_sicbo_"+ this.cardResult.dice[0] +"_png";
        this._dice_1.source = "bar_sicbo_"+ this.cardResult.dice[1] +"_png";
        this._img_bz.visible = true;
        this._img_bz.rotation = 0;
        egret.Tween.get(this._img_bz).to({
            rotation: 20
        },
        50).to({
            rotation: 0
        },
        50).to({
            rotation: -20
        },
        50).to({
            rotation: 0
        },
        50);
        this.numTime++;
    }

    public playDiceResult() {
        var e = this._img_bz.verticalCenter;
        egret.Tween.get(this._img_bz).to({
            verticalCenter: e - 10
        },
        150).to({
            verticalCenter: e
        },
        150).wait(100).call(function() {
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
            },
            400).to({
                alpha: 0
            },
            50);
        },
        this);
        this.diceInterval = setInterval(this.firstPlayer1.bind(this), 1500);
    }

    public firstPlayer1(){
        clearInterval(this.diceInterval);
        this.diceInterval = -1;
        this._img_bz.visible = false;
        this._img_bz_d.visible = false;
        this._dice_0.visible = false;
        this._dice_1.visible = false;
        this._img_bz_g.visible = false;
        let index = UserInfo.getInstance().findSeatNumber(this.cardResult.index);
        egret.Tween.removeTweens(this._img_bz);
        egret.Tween.removeTweens(this._img_bz_g);
        this.setFirstAnimation(this["_img_zx_" + index]);
    }

    /**游戏结果特效 */
    public gameResultEff() {
        clearInterval(this.flyIntval);
        this.flyCoinByBanker();
    }
    
    /**筹码飞向庄家 */
    public flyCoinByBanker():void {
        if(this._coin_arr == []) {
            return;
        }

        let player = this['grpHead' + this.zhaungIndex];
        for(let i=0; i<this._coin_arr.length; i++) {
            let coin = this._coin_arr[i];
            egret.Tween.get(coin).to({
                x: player.x + player.width,
                y: player.y + player.height,
                scaleX: 0,
                scaleY: 0
            },
            300).call(function() {
                egret.Tween.removeTweens(coin);
            }, [coin])
        }
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(5));
        this.flyIntval = setInterval(this.flyCoinByPlayer.bind(this), 300);
    }

    /**筹码飞向玩家 */
    public flyCoinByPlayer():void {
        clearInterval(this.flyIntval);
        //let num = 0;
        let win_arr = [];
        for(let i=0; i<4; i++) {
            let index = UserInfo.getInstance().findSeatNumber(this.cardResult.players[i].index);
            if(index==this.zhaungIndex) {
                continue;
            }

            if(this.cardResult.players[i].win) {
                //num++;
                win_arr.push(index);
            }
        }
        //console.log("_____总筹码数______" + this._coin_arr.length);
        this.flyCoinAntion(win_arr);
        this.flyIntval = setInterval(this.scoreJumpedOut.bind(this), 350);
    }

    public flyCoinAntion(win_arr):void {
        //console.log("_____________" + parseInt(this._coin_arr.length/win_arr.length + ""));
        //console.log("_____________" + win_arr.length);
        
        if (win_arr.length == 1) {
            let player = this['grpHead' + win_arr[0]];
            for(let i=0; i<this._coin_arr.length; i++) {
                let coin = this._coin_arr[i];
                coin.scaleX = coin.scaleY = 0.2;
                coin.alpha = 1;
                this.setAnimationByType(coin, 10*i, player.x-30, player.y+30, 350);
            }
        } else if (win_arr.length == 2) {
            let player0 = this['grpHead' + win_arr[0]];
            let player1 = this['grpHead' + win_arr[1]];
            let sum1 = parseInt(this._coin_arr.length/2 + "");
            let num = 0;
            for(let i=0; i<this._coin_arr.length; i++) {
                let coin = this._coin_arr[i];
                coin.scaleX = coin.scaleY = 0.2;
                coin.alpha = 1;
                if(i < sum1) {
                    this.setAnimationByType(coin, 10*i, player0.x-30, player0.y+30, 350);
                } else {
                    this.setAnimationByType(coin, 10*num, player1.x-30, player1.y+30, 350);
                    num++;
                }
            }
        } else if (win_arr.length == 3) {
            let player0 = this['grpHead' + win_arr[0]];
            let player1 = this['grpHead' + win_arr[1]];
            let player2 = this['grpHead' + win_arr[2]];
            let sum2 = parseInt(this._coin_arr.length/3 + "");
            let num1 = 0;
            let num2 = 0;
            for(let i=0; i<this._coin_arr.length; i++) {
                let coin = this._coin_arr[i];
                coin.scaleX = coin.scaleY = 0.2;
                coin.alpha = 1;
                if(i < sum2) {
                    this.setAnimationByType(coin, 10*i, player0.x-30, player0.y+30, 350);
                } else if(i >= sum2 && i < sum2*2) {
                    this.setAnimationByType(coin, 10*num1, player1.x-30, player1.y+30, 350);
                    num1++;
                } else {
                    this.setAnimationByType(coin, 10*num2, player2.x-30, player2.y+30, 350);
                    num2++;
                }
            }
        } else {

        }
    }

    public setAnimationByType(coin, t, _x, _y, n) {
        //console.log("________987456___________");
        
        egret.Tween.get(coin).wait(t).to({
            alpha: 1
        },
        1).to({
            x: _x,
            y: _y,
            scaleX: 1,
            scaleY: 1
        },
        n).call(function() {
            egret.Tween.removeTweens(coin);
        }, [coin])
    }

    public scoreJumpedOut():void {
        clearInterval(this.flyIntval);
        let data = this.cardResult;
        for(let i=0; i<4; i++) {
            let index = UserInfo.getInstance().findSeatNumber(data.players[i].index);
            let player = this["grpHead" + index];
            player.setGold(data.players[i].balance);

            let label = new eui.BitmapLabel;
            let img = new eui.Image;
            img.x = player.x-90;
            img.y = player.y+55;
            label.width = 150;
            label.height = 40;
            label.textAlign = egret.HorizontalAlign.CENTER;
            label.x = player.x-70;
            label.y = player.y+60;
            label.text = "";
            this.addChild(img);
            this.addChild(label);
            let str: string = "";
            if(data.players[i].win) {
                label.font = "bar_plus_font_fnt";
                str = "+";
                img.source = "bar_plus_bg_png";
            } else {
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
            },
            200).to({
                y: label.y - 170
            },
            200).wait(1000).call(function(){
                egret.Tween.removeTweens(label);
                label.parent.removeChild(label);
            }, [label]);
            egret.Tween.get(img).wait(1000).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            },
            200).to({
                y: img.y - 170
            },
            200).wait(1000).call(function(){
                egret.Tween.removeTweens(img);
                img.parent.removeChild(img);
            }, [img]);
        }

        this.flyIntval = setInterval(this.resultBack.bind(this), 3000);
    }

    private playTianWang():void
    {
        if(this.tianWang == null) {
            this.tianWang = new DragonBonesSprite('bg_ebg_tianwang',"Sprite");
            this.tianWang.x = xlLib.Global.screenWidth / 2;
            this.tianWang.y = xlLib.Global.screenHeight / 2;
            this.tianWang.touchEnabled = false;
            this.tianWang.touchChildren = false;
            this.addChild(this.tianWang);
        }
        
        this.tianWang.play("Sprite", 1);
        this.tianWang.onPlayComplete = ()=>{
            this.tianWang.destroy();
            this.tianWang.parent.removeChild(this.tianWang);
            this.tianWang = null;
        }
    }

    private playTongSha():void
    {
        if(this.tongSha == null) {
            this.tongSha = new DragonBonesSprite('bg_ebg_tongsha',"Sprite");
            this.tongSha.x = xlLib.Global.screenWidth / 2;
            this.tongSha.y = xlLib.Global.screenHeight / 2;
            this.tongSha.touchEnabled = false;
            this.tongSha.touchChildren = false;
            this.addChild(this.tongSha);
        }
        
        this.tongSha.play("Sprite", 1);
        this.tongSha.onPlayComplete = ()=>{
            this.tongSha.destroy();
            this.tongSha.parent.removeChild(this.tongSha);
            this.tongSha = null;
        }
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(10));
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(12));
    }

    //-------------------------------服务器回调------------------------------

    /**
     * 自己加入房间
     */
    private addPlayers(data): void {

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
	*/
        //let my = UserInfo.getInstance().myPlayer.id;
        //let dd = UserInfo.getInstance().playes;
        //设置其他玩家信息
        for (let i = 0; i < UserInfo.getInstance().playes.length; i++) {
            if (data._obj.player[i] != null) {
                this['grpHead' + i].setUserInfo(UserInfo.getInstance().playes[i].username, UserInfo.getInstance().playes[i].goldcoins, "women6_png");//data._obj.player[i].headimg
            } else {
                //this['grpHead' + i].setUserInfo("圣诞节回复", "100000", "F4_03_png");
                this['grpHead' + i].setUserInfo("", "", "");
            }
        }
    }

    //加入房间新玩家
    public playerJoinRoom(data): void {
        //console.log(data._obj.player.id);
        //console.log(UserInfo.getInstance().myPlayer.id);
        if (data._obj.player.id == UserInfo.getInstance().myPlayer.id) {

        } else {
            this['grpHead' + data._obj.player.index].setUserInfo(data._obj.player.username, data._obj.player.goldcoins, "women6_png");
        }
    }
    
    //-------------------------------方法------------------------------

    /**
     * 定时器
     */
    private setCountdown(): void {
        this.cdTimer = new egret.Timer(1000);
        this.cdTimer.addEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
    }

    private clacTimer(): void {
        if (this.cdNum > 0) {
            this.cdNum--;
        }
        else {
            this.stopTime();
        }
        this.labCountdown.text = this.cdNum + '';
    }

    private stopTime():void {
        this.cdTimer.stop();
        this.cdNum = 0;
        this.grpCountdown.visible = false;
        this._group_qiang.visible = false;
        this._btn_switch.visible = false;
    }

    /**
     * 获取结算数据，显示结果面板时设置
     */
    private setGameResult(data): void {
        //this.grpCountdown.visible = false;
        //this.cardResult = data;

    }

    //========================== Effect Show ===============================

    private flyIntval: number = 0;  //

    private flyIndex0: number = 0;  //扑克位置(东西南北)
    private flyIndex1: number = 0;  //扑克(指定位置1，2，3)

    private effectPlayerIndex0:number = 0;
    private effectPlayerIndex1:number = 0;
    /**
     * 显示发牌
     */
    private cardEffect(): void {
        clearInterval(this.gamePlayIndex);
        this.gamePlayIndex = -1;
        let index = UserInfo.getInstance().findSeatNumber(this.cardResult.index);
        this.initPaiPos(index);
        this.flyIntval = setInterval(this.playCardFly.bind(this), 150);
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(7));
    }

    private initPaiPos(index:number):void {
        for(let i=0; i<4; i++) {
            for(let j=0; j<2; j++) {
                var num = 0;
                if(index >= i) {
                    num = index-i;
                } else {
                    num = 4-i+index;
                }
                var card:RBGMahjong = this['grpCard_' + num + '_' + j];
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
    }

    private playCardFly(): void {
        if(this.flyIndex1 == 4) {
            clearInterval(this.flyIntval);
            this.flyIndex0 = 0;
            this.flyIndex1 = 0;
            this.flyIntval = setInterval(this.playerCardRotation.bind(this), 1000);
            return;
        }

        let _proup = this["_group_bet_point_" + this.flyIndex0];
        for(let i=0; i<2; i++) {
            var card:RBGMahjong = this['grpCard_' + this.flyIndex0 + '_' + i];
            var pos = this.orginPlayerCardPos[this.flyIndex0][i];
            //this.playClickSound(RBGUtil.getInstance().getSoundEffect(6));
            egret.Tween.get(card).to({ x: pos.x, y: pos.y }, 250).call(function(){
                egret.Tween.removeTweens(card);
                _proup.visible = false;
            }, [card,_proup]);
        }

        if(this.flyIndex0 == 0) {
            this.flyIndex0 = 3;
        } else {
            this.flyIndex0--;
        }
        this.flyIndex1++;
    }

    private playerCardRotation(): void {
        if(this.effectPlayerIndex1 == 4) {
            clearInterval(this.flyIntval);
            this.effectPlayerIndex0 = 0;
            this.effectPlayerIndex1 = 0;
            this.flyIntval = setInterval(this.gameResultEff.bind(this), 1000);
            return;
        }
        
        var poke = null;
        for(let i=0; i<4; i++) {
            if(UserInfo.getInstance().findSeatNumber(this.cardResult.players[i].index) == this.effectPlayerIndex0) {
                poke = this.cardResult.players[i];
                break;
            }
        }

        var card_0 = this['grpCard_' + this.effectPlayerIndex0 + '_' + 0];
        card_0.setPai(null);
        card_0.setAnPai(true);

        egret.Tween.get(card_0).to({  }, 10).call(function () {
            this[0].setPai(this[1]);
            this[0].setAnPai(false);
        }, [card_0, poke.cardsList[0]]);

        var card_1 = this['grpCard_' + this.effectPlayerIndex0 + '_' + 1];
        card_1.setPai(null);
        card_1.setAnPai(true);
        this.playClickSound(RBGUtil.getInstance().getSoundEffect(8));

        egret.Tween.get(card_1).to({  }, 10).wait(300).call(function () {
            this[0].setPai(this[1]);
            this[0].setAnPai(false);
            this[2].playClickSound(RBGUtil.getInstance().getSoundEffect(8));
        }, [card_1, poke.cardsList[1], this]);

        var _group_bg = this["labCardType_bg_" + this.effectPlayerIndex0];
        var _group = this["labCardType" + this.effectPlayerIndex0];
        _group.source = "bar_point_"+ poke.nameType +"_png";
        _group.anchorOffsetX = _group.width / 2;
        _group.anchorOffsetY = _group.height / 2;
        _group.x = this.orginCardTypePos[this.effectPlayerIndex0].x;
        _group.y = this.orginCardTypePos[this.effectPlayerIndex0].y;
        if(poke.nameType == 30) {//天王
            this.playTianWang();
        }

        if(poke.nameType == 0) {
            _group_bg.source = "bar_point_bg_0_png";
        } else if(poke.nameType > 19) {
            _group_bg.source = "bar_point_bg_2_png";
        } else {
            _group_bg.source = "bar_point_bg_1_png";
        }

        this.setCardType(_group_bg, _group);

        if(this.effectPlayerIndex0 == 0) {
            this.effectPlayerIndex0 = 3;
        } else {
            this.effectPlayerIndex0--;
        }
        this.effectPlayerIndex1++;
    }

    //============================================  Game Result

    private resultBack() {
        clearInterval(this.flyIntval);
        this.flyIntval = -1;
        var value = this.cardResult;
        if(value.result == 2) {//通杀
            this.playTongSha();
        } else if(value.result == 3) {//通赔
            this.playClickSound(RBGUtil.getInstance().getSoundEffect(11));
            this._tongpei_img.visible = true;
        }
    }

    private showGameResult(data: any): void {
        
        var value = this.cardResult;
        this._group_settlement.visible = true;
        this._tongpei_img.visible = false;
        //console.log("+++++++++" + this.gamePlayIndex);
        //console.log("+++++++++" + this.flyIntval);
        //console.log("+++++++++" + this.diceInterval);
        //console.log("+++++++++" + this.turn0);

        for(let i=0; i<10; i++) {
            this["_label_bar_" + i].text = value.count[i] + "";
        }
        this._img_re_bg.source = "bar_over_lose_bg_png";
        this._img_guang.source = "bar_over_lose_light_png";
        this._img_huangguan.source = "bar_over_lose_hat_png";
        this._img_tmp.source = "bar_over_lose_title_png";
        //let my = UserInfo.getInstance().myPlayer.id;
        for(let i=0; i<4; i++) {
            let index = UserInfo.getInstance().findSeatNumber(value.players[i].index);
            if(index == this.zhaungIndex) {
                this["_player_zhuang_" + i].visible = true;
            } else {
                this["_player_zhuang_" + i].visible = false;
            }

            if(index==0 && value.players[i].win == true) {
                this._img_re_bg.source = "bar_over_win_bg_png";
                this._img_guang.source = "bar_over_win_light_png";
                this._img_huangguan.source = "bar_over_win_hat_png";
                this._img_tmp.source = "bar_over_win_title_png";
                this.playClickSound(RBGUtil.getInstance().getSoundEffect(9));
            }
            
            this["_player_name_" + i].text = value.players[i].username;
            this["_player_fen_" + i].text = value.players[i].ratio;
            this["_player_bet_" + i].text = value.players[i].multiple;
            if(value.players[i].win) {
                this["_player_gold_" + i].text = "+"+value.players[i].dealGold;
            } else {
                this["_player_gold_" + i].text = "-"+value.players[i].dealGold;
            }
            
            if(index==0) {
                this["_player_name_" + i].textColor = 0xFBD901;
                this["_player_fen_" + i].textColor = 0xFBD901;
                this["_player_bet_" + i].textColor = 0xFBD901;
                this["_player_gold_" + i].textColor = 0xFBD901;
            } else {
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
        
        if(value.gameRoomOver == true) {
            this._label_timing.visible = false;
            this._label_des.visible = false;
            this._continue_btn_1.visible = true;
            this._continue_img_1.visible = true;
            this._rect_re_touch.touchEnabled = true;
            this._close_btn.visible = true;
            UserInfo.getInstance().isGameStart = false;
        } else {
            this._label_timing.visible = true;
            this._label_des.visible = true;
            this._label_timing.text = "3S";
            this._label_des.text = "后开始第"+ value.round +"局游戏，共5局";
            /**计时开始下一局 */
            this.timing = 3;
            this.endIntval = setInterval(this.startNextGame.bind(this), 1000);
        }
    }

    private timing:number = 0;
    private endIntval:number = -1;
    public startNextGame():void {
        if(this.timing == 0) {
            clearInterval(this.endIntval);
            this.endIntval = -1;
            this._group_settlement.visible = false;
            this.timing = 0;
        }
        this.timing--;
        this._label_timing.text = this.timing + "S";
    }

    private resetGame(): void {
        for(let n = 0; n < this._coin_arr.length; n++) {
            this._coin_arr[n].parent.removeChild(this._coin_arr[n]);
        }

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 2; j++) {
                var card:RBGMahjong = this['grpCard_' + i + '_' + j];
                card.setPai(null);
                card.setAnPai(true);
                egret.Tween.removeTweens(card);
                card.visible = false;
            }

            this['labCardType' + i].visible = false;
            this["labCardType_bg_" + i].visible = false;
            this['grpHead' + i].setZhuang(false);
        }

        egret.Tween.removeTweens(this._img_bz);
        egret.Tween.removeTweens(this._img_bz_g);

        this.zhaungIndex = 0;   //庄的座位号（当前游戏的座位号）
        this._coin_arr = [];
        this.qz_player_arr = [];
        this.cardResult = null;
        this.cdNum = 5;

        this.dingZhuangEff.parent.removeChild(this.dingZhuangEff);
        this.dingZhuangEff = null;

        this.gameStartEff.parent.removeChild(this.gameStartEff);
        this.gameStartEff = null;
    }

    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }

    /**继续游戏 */
    private onRestartGame(): void {
        UserInfo.getInstance().playes = [];
        let gameData:gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ERBAGANG);
        let typeData:typeData = gameData.getTypeDataByindex(Const.TYPE_ERBAGANGJINDIAN);
        let playway:playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        let senddata:any = {
			userid:UserInfo.getInstance().uid,
        	token:UserInfo.getInstance().token,playway:playway.id
		};
		xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom,senddata,(data)=>{
            //xlLib.SceneMgr.instance.changeScene(RBGScene);
            //xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
        },this);

        this.init_desktop();
        this.wait_start();
        this.initData();
    }

    public Onquit(): void {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(10));
        if (UserInfo.getInstance().isGameStart) {
            xlLib.PopUpMgr.addPopUp(Hint, this, true, true, null, 1);
            return;
        }
        xlLib.SoundMgr.instance.stopBgMusic();

        let musicBg = ["hall_bg_mp3"];
        xlLib.SoundMgr.instance.playBgMusic(musicBg);

        xlLib.SceneMgr.instance.changeScene(Lobby);
        UserInfo.getInstance().playes = [];
    }

    public destroy(): void {
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

        if(this.cdTimer != null) {
            this.cdTimer.removeEventListener(egret.TimerEvent.TIMER, this.clacTimer, this);
        }
    }
}

