var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 大厅界面
 * */
var LobbyView = (function (_super) {
    __extends(LobbyView, _super);
    function LobbyView() {
        var _this = _super.call(this) || this;
        _this.skinName = "LobbyViewSkin";
        _this._set.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._service.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._information.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._generalize.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._safebox.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._challenge.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._welfare.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._shoppingmall.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._topup.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        return _this;
    }
    LobbyView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var dataArr = [{ name: "热门玩法", down_url: "Font_dating_remenwanfa1_png", up_url: "Font_dating_remenwanfa_png" },
            { name: "扑克类", down_url: "Font_dating_pukelei1_png", up_url: "Font_dating_pukelei_png" },
            { name: "麻将类", down_url: "Font_dating_majianglei1_png", up_url: "Font_dating_majianglei_png" },
            { name: "游戏类", down_url: "Font_dating_youxilei1_png", up_url: "Font_dating_youxilei_png" }];
        this.menu_bar.dataProvider = new eui.ArrayCollection(dataArr);
        this.menu_bar.useVirtualLayout = true;
        this.menu_bar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this.createGameBtn();
    };
    LobbyView.prototype.onBarItemTap = function (e) {
        this.viewlist.selectedIndex = e.itemIndex;
    };
    LobbyView.prototype.createGameBtn = function () {
        var arr_wanfa = ["btn_niuniu_png", "btn_jinhua_png", "btn_baijiale_png"];
        var arr_pk = ["btn_niuniu_png", "btn_jinhua_png", "btn_baijiale_png"];
        var arr_mahjong = ["btn_28_png", "btn_28_png", "btn_28_png"];
        var arr_game = ["btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png"];
        var yy = 10;
        for (var i = 0; i < arr_wanfa.length; i++) {
            var btn = new eui.Image(arr_wanfa[i]);
            this._wanfa_btn_area.addChild(btn);
            var num = i % 3;
            btn.x = 70 + num * 340;
            if (num == 0 && i != 0) {
                yy = 265;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        for (var i = 0; i < arr_pk.length; i++) {
            var btn = new eui.Image(arr_pk[i]);
            this._pk_btn_area.addChild(btn);
            var num = i % 3;
            btn.x = 70 + num * 340;
            if (num == 0 && i != 0) {
                yy = 265;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        for (var i = 0; i < arr_mahjong.length; i++) {
            var btn = new eui.Image(arr_mahjong[i]);
            this._mahjong_btn_area.addChild(btn);
            var num = i % 3;
            btn.x = 70 + num * 340;
            if (num == 0 && i != 0) {
                yy = 265;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        for (var i = 0; i < arr_game.length; i++) {
            var btn = new eui.Image(arr_game[i]);
            this._game_btn_area.addChild(btn);
            var num = i % 3;
            btn.x = 70 + num * 340;
            if (num == 0 && i != 0) {
                yy = 265;
            }
            btn.y = yy;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        this._head_label.text = UserInfo.getInstance().username;
        this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
    };
    LobbyView.prototype.onClick = function (e) {
        EffectUtils.playButtonEffect(e.target, null);
        this.playClickSound();
    };
    LobbyView.prototype.onClick2 = function (e) {
        this.playClickSound();
    };
    LobbyView.prototype._btnHide = function () {
        this._group_wanfa.visible = false;
        this._group_pk.visible = false;
        this._group_mahjong.visible = false;
        this._group_game.visible = false;
        this.playClickSound();
    };
    LobbyView.prototype.onTouchHandler = function (evt) {
    };
    /**添加适配处理*/
    LobbyView.prototype.resize = function () {
        if (this.bgImg) {
            this.bgImg.width = xlLib.Global.screenWidth;
            this.bgImg.height = xlLib.Global.screenHeight;
        }
    };
    LobbyView.prototype.onSocketClose = function (data) {
    };
    LobbyView.prototype.onNotify = function (data) {
    };
    LobbyView.prototype.destroy = function () {
        EventUtil.removeEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
        egret.Tween.removeTweens(this);
    };
    LobbyView.prototype.playClickSound = function () {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    return LobbyView;
}(eui.Component));
__reflect(LobbyView.prototype, "LobbyView");
//# sourceMappingURL=LobbyView.js.map