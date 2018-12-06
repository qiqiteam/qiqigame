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
var QZNNVHeadEff = (function (_super) {
    __extends(QZNNVHeadEff, _super);
    function QZNNVHeadEff() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNVHeadEffSkin";
        return _this;
    }
    QZNNVHeadEff.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.qznnwin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    QZNNVHeadEff.prototype.onTweenComplete = function (evt) {
        this.qznnwin.play(0);
    };
    QZNNVHeadEff.prototype.play = function () {
        this.qznnwin.play(0);
    };
    QZNNVHeadEff.prototype.stop = function () {
        this.qznnwin.stop();
    };
    QZNNVHeadEff.prototype.destroy = function () {
    };
    return QZNNVHeadEff;
}(eui.Component));
__reflect(QZNNVHeadEff.prototype, "QZNNVHeadEff");
//# sourceMappingURL=QZNNVHeadEff.js.map