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
 * 游戏房间
 */
var RoomView = (function (_super) {
    __extends(RoomView, _super);
    function RoomView() {
        var _this = _super.call(this) || this;
        _this.skinName = "RoomViewSkin";
        return _this;
    }
    RoomView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
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
    };
    RoomView.prototype.setGameIconData = function (gameIconData) {
        this.gameIconData = gameIconData;
        switch (this.gameIconData.type) {
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
    };
    RoomView.prototype.createRoomBtn = function () {
        var arr_1 = ["room_ty_png", "room_xs_png", "room_cj_png", "room_zj_png", "room_gj_png", "room_fh_png"];
        var arr_2 = ["room_ty_png", "room_xs_png", "room_cj_png", "room_zj_png", "room_gj_png"];
        var arr_3 = ["room_ty_png", "room_xs_png", "room_cj_png"];
        var arr_4 = ["room_ty_png", "room_xs_png"];
        var yy = 0;
        for (var i = 0; i < arr_1.length; i++) {
            var btn = new eui.Image(arr_1[i]);
            this._room_area_1.addChild(btn);
            var num = i % 3;
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
            var num = i % 3;
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
            var num = i % 3;
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
            var num = i % 3;
            btn.x = 70 + num * 450;
            if (num == 0 && i != 0) {
                yy = 315;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
    };
    RoomView.prototype.onClick = function (e) {
        var _this = this;
        EffectUtils.playButtonEffect(e.target, function () { _this.clickCallback(); });
        this.playClickSound();
    };
    RoomView.prototype.clickCallback = function () {
        var gameData = UserInfo.getInstance().getGameDataByindex(this.gameIconData.game);
        var typeData = gameData.getTypeDataByindex(this.gameIconData.type);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id
        };
        switch (this.gameIconData.type) {
            case Const.TYPE_QZNN:
                xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom, senddata, function (data) {
                    xlLib.SceneMgr.instance.changeScene(QZNNScene);
                    xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
                }, this);
                break;
            case Const.TYPE_TBNN:
                xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom, senddata, function (data) {
                    xlLib.SceneMgr.instance.changeScene(TBNNScene);
                    xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
                }, this);
                break;
            case Const.TYPE_JINGDIANBAIJIALE:
                xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom, senddata, function (data) {
                    xlLib.SceneMgr.instance.changeScene(BJLScene);
                    xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
                }, this);
                break;
            case Const.TYPE_JINGDIANJINHUA:
                xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom, senddata, function (data) {
                    xlLib.SceneMgr.instance.changeScene(ZJHScene);
                    xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
                }, this);
                break;
            case Const.TYPE_ERBAGANGJINDIAN:
                xlLib.SceneMgr.instance.changeScene(RBGScene);
                //xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom,senddata,(data)=>{
                //    xlLib.SceneMgr.instance.changeScene(RBGScene);
                //    xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
                //},this);
                break;
        }
    };
    // private onBarItemTap(e: eui.ItemTapEvent): void {
    //     this._room_viewStack.selectedIndex = e.itemIndex;
    // }
    RoomView.prototype.playClickSound = function () {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    RoomView.prototype.resize = function () {
        if (this._bg_img) {
            this._bg_img.width = xlLib.Global.screenWidth;
            this._bg_img.height = xlLib.Global.screenHeight;
        }
    };
    RoomView.prototype.dispose = function () {
        xlLib.PopUpMgr.removePopUp(this, 1);
    };
    RoomView.prototype.destroy = function () {
        this.gameIconData = null;
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        // this._room_tab.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
    };
    return RoomView;
}(eui.Component));
__reflect(RoomView.prototype, "RoomView");
//# sourceMappingURL=RoomView.js.map