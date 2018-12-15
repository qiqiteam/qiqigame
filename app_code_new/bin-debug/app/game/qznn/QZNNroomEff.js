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
var QZNNroomEff = (function (_super) {
    __extends(QZNNroomEff, _super);
    function QZNNroomEff() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNroomEffSkin";
        return _this;
    }
    QZNNroomEff.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.dicheng.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        this.wangzhefang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        this.tiyanfang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        this.chujifang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        this.zhongjifang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        this.gaojifang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        this.zhizunfang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    QZNNroomEff.prototype.onTweenComplete = function (evt) {
        evt.target.play(0);
    };
    QZNNroomEff.prototype.play = function () {
        this.dicheng.play(0);
        this.wangzhefang.play(0);
        this.tiyanfang.play(0);
        this.chujifang.play(0);
        this.zhongjifang.play(0);
        this.gaojifang.play(0);
        this.zhizunfang.play(0);
    };
    QZNNroomEff.prototype.stop = function () {
        this.dicheng.stop();
        this.wangzhefang.stop();
        this.tiyanfang.stop();
        this.chujifang.stop();
        this.zhongjifang.stop();
        this.gaojifang.stop();
        this.zhizunfang.stop();
    };
    QZNNroomEff.prototype.destroy = function () {
    };
    return QZNNroomEff;
}(eui.Component));
__reflect(QZNNroomEff.prototype, "QZNNroomEff");
//# sourceMappingURL=QZNNroomEff.js.map