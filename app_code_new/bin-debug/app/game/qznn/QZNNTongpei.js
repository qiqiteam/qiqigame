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
var QZNNTongpei = (function (_super) {
    __extends(QZNNTongpei, _super);
    function QZNNTongpei() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNTongpeiSkin";
        return _this;
    }
    QZNNTongpei.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.shibai.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    QZNNTongpei.prototype.onTweenComplete = function (evt) {
        this.shibai.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    QZNNTongpei.prototype.play = function () {
        this.visible = true;
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(17));
        this.shibai.play(0);
    };
    QZNNTongpei.prototype.playClickSound = function (res) {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    };
    QZNNTongpei.prototype.stop = function () {
        this.visible = false;
        this.shibai.stop();
    };
    QZNNTongpei.prototype.destroy = function () {
        this.shibai.removeEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    return QZNNTongpei;
}(eui.Component));
__reflect(QZNNTongpei.prototype, "QZNNTongpei");
//# sourceMappingURL=QZNNTongpei.js.map