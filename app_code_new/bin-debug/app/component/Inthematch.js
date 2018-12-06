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
var Inthematch = (function (_super) {
    __extends(Inthematch, _super);
    function Inthematch() {
        var _this = _super.call(this) || this;
        _this.skinName = "InthematchSkin";
        return _this;
    }
    Inthematch.prototype.partAdded = function (partName, instance) {
        this.clearTime();
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Inthematch.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initData();
        this._quxiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.addEventListener(EventConst.onUserLeave, this.onleave, this);
    };
    Inthematch.prototype.onleave = function (data) {
        if (data._obj.code == 200) {
            xlLib.PopUpMgr.removePopUp(Inthematch, 1);
            var musicBg = ["hall_bg_mp3"];
            xlLib.SoundMgr.instance.playBgMusic(musicBg);
            xlLib.SceneMgr.instance.changeScene(Lobby);
        }
    };
    Inthematch.prototype.onClick = function (e) {
        this.quxiaopipei();
    };
    /**取消匹配 */
    Inthematch.prototype.quxiaopipei = function () {
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_NIUNIU);
        var typeData = gameData.getTypeDataByindex(Const.TYPE_QZNN);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_leave, senddata, function (data) {
        }, this);
    };
    Inthematch.prototype.initData = function () {
        this.str = this._waitfor.text;
        this.startCountDown(0);
    };
    /**开始倒计时*/
    Inthematch.prototype.startCountDown = function (time) {
        this.time = time;
        if (this.timer == null) {
            this.timer = new egret.Timer(300);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    };
    /**倒计时处理*/
    Inthematch.prototype.timerFunc = function (evt) {
        for (var i = 0; i <= this.time % 4; i++) {
            switch (i) {
                case 0:
                    this._waitfor.text = this.str + '';
                    break;
                case 1:
                    this._waitfor.text = this.str + '.';
                    break;
                case 2:
                    this._waitfor.text = this.str + '..';
                    break;
                case 3:
                    this._waitfor.text = this.str + '...';
                    break;
            }
        }
        this.time++;
    };
    /**清除倒计时*/
    Inthematch.prototype.clearTime = function () {
        if (this.timer) {
            this.timer.stop();
            // this.timeTxt.visible = false;
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    };
    return Inthematch;
}(eui.Component));
__reflect(Inthematch.prototype, "Inthematch");
//# sourceMappingURL=Inthematch.js.map