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
var QZNNVEff = (function (_super) {
    __extends(QZNNVEff, _super);
    function QZNNVEff() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNVEffSkin";
        return _this;
    }
    QZNNVEff.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.win.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    QZNNVEff.prototype.onTweenComplete = function (evt) {
        this.win.stop();
    };
    QZNNVEff.prototype.play = function () {
        this.win.play(0);
    };
    QZNNVEff.prototype.stop = function () {
        this.win.stop();
    };
    QZNNVEff.prototype.destroy = function () {
    };
    return QZNNVEff;
}(eui.Component));
__reflect(QZNNVEff.prototype, "QZNNVEff");
//# sourceMappingURL=QZNNVEff.js.map