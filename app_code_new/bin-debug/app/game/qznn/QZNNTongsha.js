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
var QZNNTongsha = (function (_super) {
    __extends(QZNNTongsha, _super);
    function QZNNTongsha() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNTongshaSkin";
        return _this;
    }
    QZNNTongsha.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.tongsha.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    QZNNTongsha.prototype.onTweenComplete = function (evt) {
        this.tongsha.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    QZNNTongsha.prototype.play = function () {
        this.visible = true;
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(16));
        this.tongsha.play(0);
    };
    QZNNTongsha.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    QZNNTongsha.prototype.stop = function () {
        this.visible = false;
        this.tongsha.stop();
    };
    QZNNTongsha.prototype.destroy = function () {
        this.tongsha.removeEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    return QZNNTongsha;
}(eui.Component));
__reflect(QZNNTongsha.prototype, "QZNNTongsha");
//# sourceMappingURL=QZNNTongsha.js.map