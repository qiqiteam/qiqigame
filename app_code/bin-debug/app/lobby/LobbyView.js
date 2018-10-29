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
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchHandler, _this);
        EventUtil.addEventListener(EventConst.ON_SOCKET_CLOSE, _this.onSocketClose, _this);
        return _this;
    }
    LobbyView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
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
//# sourceMappingURL=LobbyView.js.map