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
var QZNNHEff = (function (_super) {
    __extends(QZNNHEff, _super);
    function QZNNHEff() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNHEffSkin";
        return _this;
    }
    QZNNHEff.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.win.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    QZNNHEff.prototype.onTweenComplete = function (evt) {
        this.win.stop();
    };
    QZNNHEff.prototype.play = function () {
        this.win.play(0);
    };
    QZNNHEff.prototype.stop = function () {
        this.win.stop();
    };
    QZNNHEff.prototype.destroy = function () {
    };
    return QZNNHEff;
}(eui.Component));
__reflect(QZNNHEff.prototype, "QZNNHEff");
//# sourceMappingURL=QZNNHEff.js.map