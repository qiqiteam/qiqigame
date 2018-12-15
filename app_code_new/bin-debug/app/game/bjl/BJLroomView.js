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
        this.initData();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._coin_label.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
        this._btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
        EventUtil.addEventListener(EventConst.parteySuccess, this.OnparteySuccess, this);
        EventUtil.addEventListener(EventConst.onTimelyNotify, this.OnbaccaratOnJoinRoom, this);
        EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
        // this._btn_enter.touchEnabled = true;
    };
    /**游戏状态 */
    BJLroomView.prototype.GameStatus = function (data) {
        if (data._obj.code == 200) {
            xlLib.SceneMgr.instance.changeScene(BJLScene);
        }
    };
    /**数据初始化 */
    BJLroomView.prototype.initData = function () {
        this._btn_enter.touchEnabled = false;
        this.isRoomid = [];
    };
    /**进入百家乐房间失败 */
    BJLroomView.prototype.OnbaccaratOnJoinRoom = function (data) {
        if (data._obj.change == 6) {
            xlLib.TipsUtils.showFloatWordTips(data._obj.reminder);
        }
    };
    /**进入百家乐房间列表成功of失败 */
    BJLroomView.prototype.OnparteySuccess = function (data) {
        this._btn_enter.touchEnabled = true;
        for (var i = 0; i < data._obj.gameRooms.length; i++) {
            var str = data._obj.gameRooms[i].roomid;
            this.isRoomid.push(str);
        }
        xlLib.TipsUtils.showFloatWordTips("加入房间列表成功！");
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
            token: UserInfo.getInstance().token, playway: playway.id,
            roomid: this.isRoomid[0]
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.BaccaratJoinroom, senddata, function (data) {
        }, this);
    };
    BJLroomView.prototype.setGameIconData = function (gameIconData) {
        this.gameIconData = gameIconData;
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
        xlLib.WebSocketMgr.getInstance().send(EventConst.BaccaratEfcsh, senddata, function (data) {
        }, this);
    };
    BJLroomView.prototype.dispose = function () {
        xlLib.PopUpMgr.removePopUp(this, 1);
    };
    BJLroomView.prototype.destroy = function () {
        this.gameIconData = null;
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        EventUtil.removeEventListener(EventConst.parteySuccess, this.OnparteySuccess, this);
        EventUtil.removeEventListener(EventConst.onTimelyNotify, this.OnbaccaratOnJoinRoom, this);
        EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
    };
    return BJLroomView;
}(eui.Component));
__reflect(BJLroomView.prototype, "BJLroomView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BJLroomView.js.map