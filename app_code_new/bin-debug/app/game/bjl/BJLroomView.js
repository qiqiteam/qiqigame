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
var BJLroomView = (function (_super) {
    __extends(BJLroomView, _super);
    function BJLroomView() {
        var _this = _super.call(this) || this;
        _this.skinName = "BJLroomViewSkin";
        return _this;
    }
    BJLroomView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
        this._btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
        EventUtil.addEventListener(EventConst.baccaratOnJoinRoom, this.OnbaccaratOnJoinRoom, this);
    };
    BJLroomView.prototype.OnbaccaratOnJoinRoom = function (data) {
        if (data._obj.code == 200) {
            xlLib.SceneMgr.instance.changeScene(BJLScene);
            xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
        }
        else {
            xlLib.TipsUtils.showFloatWordTips("加入房间失败！");
        }
    };
    BJLroomView.prototype.onEnterGame = function () {
        if (!this.gameIconData) {
            return;
        }
        // xlLib.SceneMgr.instance.changeScene(BJLScene);
        var gameData = UserInfo.getInstance().getGameDataByindex(this.gameIconData.game);
        var typeData = gameData.getTypeDataByindex(this.gameIconData.type);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.BaccaratJoinroom, senddata, function (data) {
        }, this);
    };
    BJLroomView.prototype.setGameIconData = function (gameIconData) {
        this.gameIconData = gameIconData;
    };
    BJLroomView.prototype.dispose = function () {
        xlLib.PopUpMgr.removePopUp(this, 1);
    };
    BJLroomView.prototype.destroy = function () {
        this.gameIconData = null;
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
    };
    return BJLroomView;
}(eui.Component));
__reflect(BJLroomView.prototype, "BJLroomView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BJLroomView.js.map