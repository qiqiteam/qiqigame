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
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
        //EventUtil.addEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);
        _this._btn_wanfa.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onBtnWanfa, _this);
        _this._btn_pk.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onBtnPk, _this);
        _this._btn_mahjong.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onBtnMahjong, _this);
        _this._btn_game.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onBtnGame, _this);
        return _this;
    }
    LobbyView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.createGameBtn();
    };
    LobbyView.prototype.createGameBtn = function () {
        var arr_wanfa = ["btn_niuniu_png", "btn_jinhua_png", "btn_baijiale_png"];
        var arr_pk = ["btn_niuniu_png", "btn_jinhua_png", "btn_baijiale_png"];
        var arr_mahjong = ["btn_28_png", "btn_28_png", "btn_28_png"];
        var arr_game = ["btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png"];
        var yy = 10;
        for (var i = 0; i < arr_wanfa.length; i++) {
            //var btn = new eui.Image(GlobalData.cdnResUrl + "resource/assets/noload/" + arr[i] + ".png");
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
            //var btn = new eui.Image(GlobalData.cdnResUrl + "resource/assets/noload/" + arr[i] + ".png");
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
            //var btn = new eui.Image(GlobalData.cdnResUrl + "resource/assets/noload/" + arr[i] + ".png");
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
            //var btn = new eui.Image(GlobalData.cdnResUrl + "resource/assets/noload/" + arr[i] + ".png");
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
    };
    LobbyView.prototype.onClick = function (e) {
        //EffectUtils.playEffect(e.target,2);
        EffectUtils.playButtonEffect(e.target, null);
    };
    LobbyView.prototype.onBtnWanfa = function (e) {
        this._btnHide();
        this._dis_wanfa.visible = true;
        this._group_wanfa.visible = true;
    };
    LobbyView.prototype.onBtnPk = function (e) {
        this._btnHide();
        this._dis_pk.visible = true;
        this._group_pk.visible = true;
    };
    LobbyView.prototype.onBtnMahjong = function (e) {
        this._btnHide();
        this._dis_mahjong.visible = true;
        this._group_mahjong.visible = true;
    };
    LobbyView.prototype.onBtnGame = function (e) {
        this._btnHide();
        this._dis_game.visible = true;
        this._group_game.visible = true;
    };
    LobbyView.prototype._btnHide = function () {
        this._dis_wanfa.visible = false;
        this._dis_pk.visible = false;
        this._dis_mahjong.visible = false;
        this._dis_game.visible = false;
        this._group_wanfa.visible = false;
        this._group_pk.visible = false;
        this._group_mahjong.visible = false;
        this._group_game.visible = false;
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
    return LobbyView;
}(eui.Component));
__reflect(LobbyView.prototype, "LobbyView");
