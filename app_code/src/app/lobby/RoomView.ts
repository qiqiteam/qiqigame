/**
 * 游戏房间
 */
class RoomView extends eui.Component {
    private gameIconData:GameIconData;

    public _bg_img:eui.Image;
    public scroller:eui.Scroller;
    public _room_tab:eui.TabBar;
    public _btn_record:eui.Button;
    public _btn_close:eui.Button;
    public _title_icon:eui.Image;
    public _coin_label:eui.Label;
    public _btn_menu:eui.Button;
    public _btn_rule:eui.Button;
    public _room_viewStack:eui.ViewStack;
    public _room_area_1:eui.Group;
    public _room_area_2:eui.Group;
    public _room_area_3:eui.Group;
    public _room_area_4:eui.Group;

    
    constructor() {
        super();
        this.skinName = "RoomViewSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this.resize();

        // let dataArr: any[] = [{ name: "抢庄牛牛", down_url: "qznn_0_png", up_url: "qznn_1_png" },
        // { name: "通比牛牛", down_url: "tbnn_0_png", up_url: "tbnn_1_png" },
        // { name: "千人牛牛", down_url: "qrnn_0_png", up_url: "qrnn_1_png" },
        // { name: "房卡模式", down_url: "fkms_0_png", up_url: "fkms_1_png" }];
        // this._room_tab.dataProvider = new eui.ArrayCollection(dataArr);
        // this._room_tab.useVirtualLayout = true;
        // this._room_tab.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this.scroller.visible = false;
        this.createRoomBtn();
        this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
    }

    public setGameIconData(gameIconData:GameIconData):void
    {
        this.gameIconData = gameIconData;
        switch(this.gameIconData.type){
           case Const.TYPE_QZNN:
               this._title_icon.source = "title_qzniuniu_png";
           break;
           case Const.TYPE_TBNN:
               this._title_icon.source = "title_tongbiniuniu_png";
           break;
           case Const.TYPE_JINGDIANBAIJIALE:
               this._title_icon.source = "title_baijiale_png";
           break;
           case Const.TYPE_JINGDIANJINHUA:
               this._title_icon.source = "title_zhajinhua_png";
           break;
           case Const.TYPE_ERBAGANGJINDIAN:
               this._title_icon.source = "title_erbagang_png";
           break;
        }

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
            btn.x = 70 + num * 450;
            if (num == 0 && i != 0) {
                yy = 315;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        yy = 0;
        for (var i = 0; i < arr_2.length; i++) {
            var btn = new eui.Image(arr_2[i]);
            this._room_area_2.addChild(btn);
            let num = i % 3;
            btn.x = 70 + num * 450;
            if (num == 0 && i != 0) {
                yy = 315;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        yy = 0;
        for (var i = 0; i < arr_3.length; i++) {
            var btn = new eui.Image(arr_3[i]);
            this._room_area_3.addChild(btn);
            let num = i % 3;
            btn.x = 70 + num * 450;
            if (num == 0 && i != 0) {
                yy = 315;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        yy = 0;
        for (var i = 0; i < arr_4.length; i++) {
            var btn = new eui.Image(arr_4[i]);
            this._room_area_4.addChild(btn);
            let num = i % 3;
            btn.x = 70 + num * 450;
            if (num == 0 && i != 0) {
                yy = 315;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    }

    private onClick(e: egret.TouchEvent): void {
        EffectUtils.playButtonEffect(e.target, ()=>{this.clickCallback()});
        this.playClickSound();
    }

    private clickCallback() {
        let gameData:gameData = UserInfo.getInstance().getGameDataByindex(this.gameIconData.game);
        let typeData:typeData = gameData.getTypeDataByindex(this.gameIconData.type);
        let playway:playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        let senddata:any = {
			userid:UserInfo.getInstance().uid,
        token:UserInfo.getInstance().token,playway:playway.id};
        
         switch(this.gameIconData.type){
           case Const.TYPE_QZNN:
                xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom,senddata,(data)=>{
                    xlLib.SceneMgr.instance.changeScene(QZNNScene);
                    xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
                },this);
           break;
           case Const.TYPE_TBNN:
                xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom,senddata,(data)=>{
                    xlLib.SceneMgr.instance.changeScene(TBNNScene);
                    xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
                },this);
           break;
           case Const.TYPE_JINGDIANBAIJIALE:
               xlLib.TipsUtils.showFloatWordTips("该功能暂未开放！");
           break;
           case Const.TYPE_JINGDIANJINHUA:
                 xlLib.TipsUtils.showFloatWordTips("该功能暂未开放！");
           break;
           case Const.TYPE_ERBAGANGJINDIAN:
                xlLib.TipsUtils.showFloatWordTips("该功能暂未开放！");
           break;
        }

    }

    // private onBarItemTap(e: eui.ItemTapEvent): void {
    //     this._room_viewStack.selectedIndex = e.itemIndex;
    // }

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
        // this._room_tab.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
    }
}