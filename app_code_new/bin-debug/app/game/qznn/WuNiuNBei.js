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
var WuNiuNBei = (function (_super) {
    __extends(WuNiuNBei, _super);
    function WuNiuNBei() {
        var _this = _super.call(this) || this;
        _this.skinName = "WuNiuNBeiSkin";
        return _this;
    }
    WuNiuNBei.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.niuniuanmin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    WuNiuNBei.prototype.onTweenComplete = function (evt) {
        this.niuniuanmin.stop();
    };
    WuNiuNBei.prototype.play = function (str) {
        if (str === void 0) { str = ""; }
        this.niuniuanmin.play(0);
    };
    WuNiuNBei.prototype.stop = function () {
        this.niuniuanmin.stop();
    };
    WuNiuNBei.prototype.destroy = function () {
    };
    return WuNiuNBei;
}(eui.Component));
__reflect(WuNiuNBei.prototype, "WuNiuNBei", ["INiuNiuBetEffect"]);
//# sourceMappingURL=WuNiuNBei.js.map