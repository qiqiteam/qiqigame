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
/**能够离开房间面板 */
var ZJHIsLiveRoom = (function (_super) {
    __extends(ZJHIsLiveRoom, _super);
    function ZJHIsLiveRoom() {
        var _this = _super.call(this) || this;
        _this.skinName = "ZJHIsLiveRoomSkin";
        return _this;
    }
    ZJHIsLiveRoom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_cancel1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this._btn_quite1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.addEventListener(EventConst.onUserLeave, this.onleave, this);
    };
    ZJHIsLiveRoom.prototype.onclosepanl = function (e) {
        console.log("点击取消");
        xlLib.PopUpMgr.removePopUp(ZJHIsLiveRoom, 1);
    };
    ZJHIsLiveRoom.prototype.onClick = function (e) {
        if (GlobalData.liveCloseBtn == false) {
            this.sendInfo(EventConst.zjhLeave, 1);
        }
        else if (GlobalData.liveCloseBtn == true) {
            GlobalData.liveCloseBtn = false;
            xlLib.PopUpMgr.removePopUp(ZJHIsLiveRoom, 1);
            var musicBg = ["hall_bg_mp3"];
            xlLib.SoundMgr.instance.playBgMusic(musicBg);
            xlLib.SceneMgr.instance.changeScene(Lobby);
        }
        console.log("点击确定");
    };
    ZJHIsLiveRoom.prototype.sendInfo = function (sendstr, data) {
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: playway.id,
            data: data
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, function (data) {
        }, this);
    };
    ZJHIsLiveRoom.prototype.onleave = function (data) {
        if (data._obj.code == 200) {
            xlLib.PopUpMgr.removePopUp(ZJHIsLiveRoom, 1);
            var musicBg = ["hall_bg_mp3"];
            xlLib.SoundMgr.instance.playBgMusic(musicBg);
            xlLib.SceneMgr.instance.changeScene(Lobby);
        }
        this.destroy();
    };
    ZJHIsLiveRoom.prototype.dataChanged = function () {
    };
    ZJHIsLiveRoom.prototype.destroy = function () {
        this._btn_cancel1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this._btn_quite1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.removeEventListener(EventConst.onUserLeave, this.onleave, this);
    };
    return ZJHIsLiveRoom;
}(eui.ItemRenderer));
__reflect(ZJHIsLiveRoom.prototype, "ZJHIsLiveRoom");
//# sourceMappingURL=ZJHIsLiveRoom.js.map