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
var ZJHroomView = (function (_super) {
    __extends(ZJHroomView, _super);
    function ZJHroomView() {
        var _this = _super.call(this) || this;
        _this.skinName = "ZhajhroomViewSkin";
        return _this;
    }
    ZJHroomView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
        this._btn_cjc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
    };
    ZJHroomView.prototype.onEnterGame = function () {
        if (!this.gameIconData) {
            return;
        }
        var gameData = UserInfo.getInstance().getGameDataByindex(this.gameIconData.game);
        var typeData = gameData.getTypeDataByindex(this.gameIconData.type);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom, senddata, function (data) {
            xlLib.SceneMgr.instance.changeScene(ZJHScene);
            xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
        }, this);
    };
    ZJHroomView.prototype.setGameIconData = function (gameIconData) {
        this.gameIconData = gameIconData;
    };
    ZJHroomView.prototype.dispose = function () {
        xlLib.PopUpMgr.removePopUp(this, 1);
    };
    ZJHroomView.prototype.destroy = function () {
        this.gameIconData = null;
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
    };
    return ZJHroomView;
}(eui.Component));
__reflect(ZJHroomView.prototype, "ZJHroomView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=ZJHroomView.js.map