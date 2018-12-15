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
var ZJHpaprePanl = (function (_super) {
    __extends(ZJHpaprePanl, _super);
    function ZJHpaprePanl() {
        var _this = _super.call(this) || this;
        _this.TYPE_TAP = "";
        _this.skinName = "ZJHpaprePanlSkin";
        return _this;
    }
    ZJHpaprePanl.prototype.partAdded = function (partName, instance) {
        this.clearTime();
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ZJHpaprePanl.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initData();
        this._btn_hintclose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.addEventListener(EventConst.onUserOutRoom, this.onleave, this);
    };
    ZJHpaprePanl.prototype.onleave = function (data) {
        if (data._obj.code == 200) {
            GlobalData.isLiveRoom = data._obj.close;
            xlLib.PopUpMgr.removePopUp(ZJHpaprePanl, 1);
            var musicBg = ["hall_bg_mp3"];
            xlLib.SoundMgr.instance.playBgMusic(musicBg);
        }
        this.destroy();
    };
    ZJHpaprePanl.prototype.onClick = function (e) {
        GlobalData.liveCloseBtn = true;
        this.quxiaopipei();
    };
    /**取消匹配 */
    ZJHpaprePanl.prototype.quxiaopipei = function () {
        var gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        var typeData = gameData.getTypeDataByindex(this.TYPE_TAP);
        var playway = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        var senddata = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.outRoom, senddata, function (data) {
        }, this);
    };
    ZJHpaprePanl.prototype.initData = function () {
        this.str = this.lab_papreTips.text;
        this.startCountDown(0);
    };
    /**开始倒计时*/
    ZJHpaprePanl.prototype.startCountDown = function (time) {
        this.time = time;
        if (this.timer == null) {
            this.timer = new egret.Timer(300);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    };
    /**倒计时处理*/
    ZJHpaprePanl.prototype.timerFunc = function (evt) {
        for (var i = 0; i <= this.time % 4; i++) {
            switch (i) {
                case 0:
                    this.lab_papreTips.text = this.str + '';
                    break;
                case 1:
                    this.lab_papreTips.text = this.str + '.';
                    break;
                case 2:
                    this.lab_papreTips.text = this.str + '..';
                    break;
                case 3:
                    this.lab_papreTips.text = this.str + '...';
                    break;
            }
        }
        this.time++;
    };
    /**清除倒计时*/
    ZJHpaprePanl.prototype.clearTime = function () {
        if (this.timer) {
            this.timer.stop();
            // this.timeTxt.visible = false;
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    };
    ZJHpaprePanl.prototype.destroy = function () {
        this.TYPE_TAP = "";
        this._btn_hintclose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.removeEventListener(EventConst.onUserOutRoom, this.onleave, this);
    };
    return ZJHpaprePanl;
}(eui.Component));
__reflect(ZJHpaprePanl.prototype, "ZJHpaprePanl");
//# sourceMappingURL=ZJHpaprePanl.js.map