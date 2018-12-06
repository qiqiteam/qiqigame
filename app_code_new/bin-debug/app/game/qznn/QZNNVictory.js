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
var QZNNVictory = (function (_super) {
    __extends(QZNNVictory, _super);
    function QZNNVictory() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNVictorySkin";
        return _this;
    }
    QZNNVictory.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.youxishengli.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    QZNNVictory.prototype.onTweenComplete = function (evt) {
        this.youxishengli.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    QZNNVictory.prototype.play = function () {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(15));
        this.youxishengli.play(0);
    };
    QZNNVictory.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    QZNNVictory.prototype.stop = function () {
        this.youxishengli.stop();
    };
    QZNNVictory.prototype.destroy = function () {
        this.youxishengli.removeEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    return QZNNVictory;
}(eui.Component));
__reflect(QZNNVictory.prototype, "QZNNVictory");
//# sourceMappingURL=QZNNVictory.js.map