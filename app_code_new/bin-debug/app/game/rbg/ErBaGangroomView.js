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
var ErBaGangroomView = (function (_super) {
    __extends(ErBaGangroomView, _super);
    function ErBaGangroomView() {
        var _this = _super.call(this) || this;
        _this.skinName = "ErBaGangroomViewSkin";
        xlLib.SoundMgr.instance.stopBgMusic();
        var musicBg = ["qznn_bg_mp3"];
        xlLib.SoundMgr.instance.playBgMusic(musicBg);
        return _this;
    }
    ErBaGangroomView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
        this._btn_cjc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
    };
    /**游戏状态 */
    ErBaGangroomView.prototype.GameStatus = function (data) {
        if (data._obj.code == 200) {
            xlLib.SceneMgr.instance.changeScene(RBGScene);
            xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
        }
    };
    ErBaGangroomView.prototype.onEnterGame = function () {
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
            //xlLib.SceneMgr.instance.changeScene(RBGScene);
            //xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
        }, this);
    };
    ErBaGangroomView.prototype.setGameIconData = function (gameIconData) {
        this.gameIconData = gameIconData;
    };
    ErBaGangroomView.prototype.dispose = function () {
        xlLib.SoundMgr.instance.stopBgMusic();
        var musicBg = ["hall_bg_mp3"];
        xlLib.SoundMgr.instance.playBgMusic(musicBg);
        xlLib.PopUpMgr.removePopUp(this, 1);
    };
    ErBaGangroomView.prototype.destroy = function () {
        this.gameIconData = null;
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
    };
    return ErBaGangroomView;
}(eui.Component));
__reflect(ErBaGangroomView.prototype, "ErBaGangroomView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=ErBaGangroomView.js.map