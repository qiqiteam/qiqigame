/**
 * 21点
 */
class ESYDView extends eui.Component {
    constructor() {
        super();
        this.skinName = "ESYDViewSkin";
    }


    public _paijubh: eui.Label;
    public grpCard: eui.Group;
    public grpCard_0_0: eui.Image;
    public grpCard_0_1: eui.Image;
    public grpCard_0_2: eui.Image;
    public grpCard_0_3: eui.Image;
    public grpCard_0_4: eui.Image;
    public grpCard_1_0: eui.Image;
    public grpCard_1_1: eui.Image;
    public grpCard_1_2: eui.Image;
    public grpCard_1_3: eui.Image;
    public grpCard_1_4: eui.Image;
    public grpCard_2_0: eui.Image;
    public grpCard_2_1: eui.Image;
    public grpCard_2_2: eui.Image;
    public grpCard_2_3: eui.Image;
    public grpCard_2_4: eui.Image;
    public grpCard_3_0: eui.Image;
    public grpCard_3_1: eui.Image;
    public grpCard_3_2: eui.Image;
    public grpCard_3_3: eui.Image;
    public grpCard_3_4: eui.Image;
    public grpCard_4_0: eui.Image;
    public grpCard_4_1: eui.Image;
    public grpCard_4_2: eui.Image;
    public grpCard_4_3: eui.Image;
    public grpCard_4_4: eui.Image;
    public heguan: eui.Image;
    public chair: eui.Group;
    public chair_0: eui.Image;
    public chair_1: eui.Image;
    public chair_2: eui.Image;
    public chair_3: eui.Image;
    public chair_4: eui.Image;
    public grpHead0: eui.Group;
    public imghead0: eui.Image;
    public labelHead0: eui.Label;
    public labelGold0: eui.Label;
    public seatnumber_0: eui.Image;
    public Insurance_0: eui.Image;
    public grpHead1: eui.Group;
    public imghead1: eui.Image;
    public labelHead1: eui.Label;
    public labelGold1: eui.Label;
    public seatnumber_1: eui.Image;
    public Insurance_1: eui.Image;
    public grpHead2: eui.Group;
    public imghead2: eui.Image;
    public labelHead2: eui.Label;
    public labelGold2: eui.Label;
    public seatnumber_2: eui.Image;
    public Insurance_2: eui.Image;
    public grpHead3: eui.Group;
    public imghead3: eui.Image;
    public labelHead3: eui.Label;
    public labelGold3: eui.Label;
    public seatnumber_3: eui.Image;
    public Insurance_3: eui.Image;
    public grpHead4: eui.Group;
    public imghead4: eui.Image;
    public labelHead4: eui.Label;
    public labelGold4: eui.Label;
    public seatnumber_4: eui.Image;
    public Insurance_4: eui.Image;
    public _btn_close: eui.Button;
    public _btn_meun: eui.Button;
    public Chip: eui.Group;
    public Chip_0: eui.Image;
    public Chip_1: eui.Image;
    public Chip_2: eui.Image;
    public Chip_3: eui.Image;
    public Chip_4: eui.Image;
    public _btn_begin: eui.Button;
    public xiazhujieduan: eui.Group;
    public minimum: eui.Button;
    public minimum_label: eui.Label;
    public maxmum: eui.Button;
    public maxmum_label: eui.Label;
    public determine: eui.Button;
    public bet_label0: eui.Label;
    public bet: eui.Button;
    public bet_label: eui.Label;
    public carryout: eui.Button;
    public carryout_label: eui.Label;
    public renew: eui.Button;
    public renew_label: eui.Label;
    public bupaijieduan: eui.Group;
    public fenpai: eui.Button;
    public fenpai_label: eui.Label;
    public Double: eui.Button;
    public Double_label: eui.Label;
    public tingpai: eui.Button;
    public tingpai_label: eui.Label;
    public yaopai: eui.Button;
    public yaopai_label: eui.Label;
    public isTypedianshu_0: eui.Group;
    public countWith_0: eui.Image;
    public countWith_label_0: eui.Label;
    public isTypedianshu_1: eui.Group;
    public countWith_1: eui.Image;
    public countWith_label_1: eui.Label;
    public isTypedianshu_2: eui.Group;
    public countWith_2: eui.Image;
    public countWith_label_2: eui.Label;
    public isTypedianshu_3: eui.Group;
    public countWith_3: eui.Image;
    public countWith_label_3: eui.Label;
    public isTypedianshu_4: eui.Group;
    public countWith_4: eui.Image;
    public countWith_label_4: eui.Label;
    public isTypedianshu_5: eui.Group;
    public countWith_5: eui.Image;
    public countWith_label_5: eui.Label;
    public Quantity_0: eui.Group;
    public ChipQuantity_0: eui.Label;
    public Quantity_1: eui.Group;
    public ChipQuantity_1: eui.Label;
    public Quantity_2: eui.Group;
    public ChipQuantity_2: eui.Label;
    public Quantity_3: eui.Group;
    public ChipQuantity_3: eui.Label;
    public Quantity_4: eui.Group;
    public ChipQuantity_4: eui.Label;



    //----------------------------------------------------------------------------------------------
    private orginPlayerCardPos = [];    // 存储玩家扑克位置

    //----------------------------------------------------------------------------------------------
    protected childrenCreated(): void {

        this.getOrginCardPos();
        this.addEvent();
        this.initData();
        // let inthematch: Inthematch = xlLib.PopUpMgr.addPopUp(Inthematch, this, true, true, null, 1);
        // inthematch.TYPE_TAP = Const.TYPE_TBNN;

        UserInfo.getInstance().isGameStart = true;

    }

    /**数据初始化 */
    private initData(): void {

        for (let i = 0; i < 6; i++) {
            this['isTypedianshu_' + i].visible = false;
        }
        for (let i = 0; i < 5; i++) {
            this['grpHead' + i].visible = false;
            this['Insurance_' + i].visible = false;
            this['Quantity_' + i].visible = false;
        }


    }

    /**获取原始扑克的位置 */
    private getOrginCardPos(): void {
        for (var index = 1; index < 6; index++) {
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

    public resize(): void {

    }


    /**注册事件 */
    private addEvent(): void {


    }


    /**游戏状态 */
    private GameStatus(data: any): void {
        switch (data._obj.roomStatus) {
            case 0: ; break;
            case 1: ; break;
            case 2: ; break;
            case 3: ; break;
            case 4: ; break;
            case 5: ; break;
            case 6: ; break;
            case 12: ; break;

        }
    }
    /**下注 */
    private onbetBack(data: any): void {
        this.xiazhujieduan.visible = true;
    }
    /**补牌 */
    private onBupai(data: any): void {
        this.bupaijieduan.visible = true;
    }
    /**胜利切换点数背景   */
    private shenglizhe(index: number): void {
        var idx: number = UserInfo.getInstance().findSeatNumber(index);
        this['countWith_' + idx].visible = true;
        this['countWith_' + idx].source = 'black_qz21_game_acount_bg_2_png';
    }
    /**点数或者爆牌  index几号玩家  num 点数   */
    private ondsisbp(index: number, num: number): void {
        if (num == -1) {
            var idx: number = UserInfo.getInstance().findSeatNumber(index);
            this['isTypedianshu_' + idx].visible = true;
            this['countWith_' + idx].visible = true;
            this['countWith_' + idx].source = 'black_qz21_game_acount_bg_4_png';
            this['countWith_label_' + idx].text = "爆牌";
        } else {
            var idx: number = UserInfo.getInstance().findSeatNumber(index);
            this['isTypedianshu_' + idx].visible = true;
            this['countWith_' + idx].visible = true;
            this['countWith_' + idx].source = 'black_qz21_game_acount_bg_1_png';
            this['countWith_label_' + idx].visible = true;
            this['countWith_label_' + idx].text = num + '';
        }
    }
    /**切换荷官指向动作  index几号玩家 */
    private onheguandongzuo(index: number): void {
        UserInfo.getInstance().findSeatNumber(index);
        this.heguan.source = 'black_qz21_game_heguan_0' + index + '_png';
    }
    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }
    /**返回游戏大厅 */
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

    }

    public destroy(): void {

    }
}

