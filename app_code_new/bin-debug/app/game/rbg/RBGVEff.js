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
var RBGVEff = (function (_super) {
    __extends(RBGVEff, _super);
    function RBGVEff() {
        var _this = _super.call(this) || this;
        _this.skinName = "RBGVEffSkin";
        return _this;
    }
    RBGVEff.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.kaishi.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    RBGVEff.prototype.onTweenComplete = function (evt) {
        this.kaishi.stop();
    };
    RBGVEff.prototype.play = function () {
        this.kaishi.play(0);
    };
    RBGVEff.prototype.stop = function () {
        this.kaishi.stop();
    };
    RBGVEff.prototype.destroy = function () {
    };
    return RBGVEff;
}(eui.Component));
__reflect(RBGVEff.prototype, "RBGVEff");
//# sourceMappingURL=RBGVEff.js.map