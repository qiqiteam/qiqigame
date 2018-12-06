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
var QZNNHHeadEff = (function (_super) {
    __extends(QZNNHHeadEff, _super);
    function QZNNHHeadEff() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNHHeadEffSkin";
        return _this;
    }
    QZNNHHeadEff.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.qznnwin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    QZNNHHeadEff.prototype.onTweenComplete = function (evt) {
        this.qznnwin.play(0);
    };
    QZNNHHeadEff.prototype.play = function () {
        this.qznnwin.play(0);
    };
    QZNNHHeadEff.prototype.stop = function () {
        this.qznnwin.stop();
    };
    QZNNHHeadEff.prototype.destroy = function () {
    };
    return QZNNHHeadEff;
}(eui.Component));
__reflect(QZNNHHeadEff.prototype, "QZNNHHeadEff");
//# sourceMappingURL=QZNNHHeadEff.js.map