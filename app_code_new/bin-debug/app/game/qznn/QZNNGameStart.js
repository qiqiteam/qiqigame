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
/**
 * 游戏中显示用户信息
 */
var QZNNGameStart = (function (_super) {
    __extends(QZNNGameStart, _super);
    function QZNNGameStart() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNGameStartSkin";
        return _this;
    }
    QZNNGameStart.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.kaishiyouxi.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    QZNNGameStart.prototype.onTweenComplete = function (evt) {
        this.kaishiyouxi.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    QZNNGameStart.prototype.play = function () {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(14));
        this.kaishiyouxi.play(0);
    };
    QZNNGameStart.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    QZNNGameStart.prototype.stop = function () {
        this.kaishiyouxi.stop();
    };
    QZNNGameStart.prototype.destroy = function () {
    };
    return QZNNGameStart;
}(eui.Component));
__reflect(QZNNGameStart.prototype, "QZNNGameStart");
//# sourceMappingURL=QZNNGameStart.js.map