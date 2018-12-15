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
var RBGSEff = (function (_super) {
    __extends(RBGSEff, _super);
    function RBGSEff() {
        var _this = _super.call(this) || this;
        _this.skinName = "RBGSEffSkin";
        return _this;
    }
    RBGSEff.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.kaishiyouxidonghua.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    RBGSEff.prototype.onTweenComplete = function (evt) {
        this.kaishiyouxidonghua.stop();
    };
    RBGSEff.prototype.play = function () {
        this.kaishiyouxidonghua.play(0);
    };
    RBGSEff.prototype.stop = function () {
        this.kaishiyouxidonghua.stop();
    };
    RBGSEff.prototype.destroy = function () {
    };
    return RBGSEff;
}(eui.Component));
__reflect(RBGSEff.prototype, "RBGSEff");
//# sourceMappingURL=RBGSEff.js.map