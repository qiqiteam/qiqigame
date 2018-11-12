/**
 * 游戏房间
 */
class RoomView extends eui.Component {

    public _bg_img: eui.Image;
    public _room_tab: eui.TabBar;
    public _btn_record: eui.Button;
    public _btn_close: eui.Button;
    public _coin_label: eui.Label;
    public _btn_menu: eui.Button;
    public _btn_rule: eui.Button;
    public _room_viewStack: eui.ViewStack;
    public _room_area_1: eui.Group;
    public _room_area_2: eui.Group;
    public _room_area_3: eui.Group;
    public _room_area_4: eui.Group;



    constructor() {
        super();
        this.skinName = "RoomViewSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this.resize();

        let dataArr: any[] = [{ name: "抢庄牛牛", down_url: "qznn_0_png", up_url: "qznn_1_png" },
        { name: "通比牛牛", down_url: "tbnn_0_png", up_url: "tbnn_1_png" },
        { name: "千人牛牛", down_url: "qrnn_0_png", up_url: "qrnn_1_png" },
        { name: "房卡模式", down_url: "fkms_0_png", up_url: "fkms_1_png" }];
        this._room_tab.dataProvider = new eui.ArrayCollection(dataArr);
        this._room_tab.useVirtualLayout = true;
        this._room_tab.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);

        this.createRoomBtn();

        this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
    }

    private createRoomBtn(): void {
        var arr_1 = ["room_ty_png", "room_xs_png", "room_cj_png", "room_zj_png", "room_gj_png", "room_fh_png"];
        var arr_2 = ["room_ty_png", "room_xs_png", "room_cj_png", "room_zj_png", "room_gj_png"];
        var arr_3 = ["room_ty_png", "room_xs_png", "room_cj_png"];
        var arr_4 = ["room_ty_png", "room_xs_png"];
        var yy = 0;
        for (var i = 0; i < arr_1.length; i++) {
            var btn = new eui.Image(arr_1[i]);
            this._room_area_1.addChild(btn);
            let num = i % 3;
            btn.x = 70 + num * 375;
            if (num == 0 && i != 0) {
                yy = 310;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        yy = 0;
        for (var i = 0; i < arr_2.length; i++) {
            var btn = new eui.Image(arr_2[i]);
            this._room_area_2.addChild(btn);
            let num = i % 3;
            btn.x = 70 + num * 375;
            if (num == 0 && i != 0) {
                yy = 310;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        yy = 0;
        for (var i = 0; i < arr_3.length; i++) {
            var btn = new eui.Image(arr_3[i]);
            this._room_area_3.addChild(btn);
            let num = i % 3;
            btn.x = 70 + num * 375;
            if (num == 0 && i != 0) {
                yy = 310;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        yy = 0;
        for (var i = 0; i < arr_4.length; i++) {
            var btn = new eui.Image(arr_4[i]);
            this._room_area_4.addChild(btn);
            let num = i % 3;
            btn.x = 70 + num * 375;
            if (num == 0 && i != 0) {
                yy = 310;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    }

    private onClick(e: egret.TouchEvent): void {
        EffectUtils.playButtonEffect(e.target, this.clickCallback);
        this.playClickSound();
    }

    private clickCallback() {
        //----------------------------------------
        let gameData:gameData = UserInfo.getInstance().getGameDataByCode(Const.GAME_NIUNIU);
        let typeData:typeData = gameData.gettypeDataByCode(Const.TYPE_NIUNIU);
        let senddata:any = {
			userid:UserInfo.getInstance().uid,
        token:UserInfo.getInstance().token,playway:typeData.playways};
		xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom,senddata,(data)=>{
                xlLib.SceneMgr.instance.changeScene(QZNNScene);
                xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
			},this);
	// let senddata:any = {
    //         userid:UserInfo.getInstance().uid,
    //         token:UserInfo.getInstance().token,playway:UserInfo.getInstance().gamelist[0].types[0].playways[0].id};
    //         xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_start,senddata,(data)=>{
    //         xlLib.TipsUtils.showFloatWordTips("开始牛牛！");
    //         // xlLib.PopUpMgr.addPopUp(Robzhuang, null, true, true, null ,1);
    //       		xlLib.SceneMgr.instance.changeScene(QZNNScene);
    //     },this);

    }

    private onBarItemTap(e: eui.ItemTapEvent): void {
        this._room_viewStack.selectedIndex = e.itemIndex;
    }

    public playClickSound() {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    }

    public resize(): void {
        if (this._bg_img) {
            this._bg_img.width = xlLib.Global.screenWidth;
            this._bg_img.height = xlLib.Global.screenHeight;
        }
    }

    public dispose(): void {
        xlLib.PopUpMgr.removePopUp(this, 1);
    }

    public destroy(): void {
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._room_tab.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
    }
}