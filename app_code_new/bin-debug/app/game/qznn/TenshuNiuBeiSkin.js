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
var TenshuNiuBei = (function (_super) {
    __extends(TenshuNiuBei, _super);
    function TenshuNiuBei() {
        var _this = _super.call(this) || this;
        _this.skinName = "TenshuNiuBeiSkin";
        return _this;
    }
    TenshuNiuBei.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.teshuniu.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    TenshuNiuBei.prototype.onTweenComplete = function (evt) {
        this.teshuniu.stop();
    };
    TenshuNiuBei.prototype.play = function (str) {
        if (str === void 0) { str = ""; }
        this.image0.source = str;
        this.teshuniu.play(0);
    };
    TenshuNiuBei.prototype.stop = function () {
        this.teshuniu.stop();
    };
    TenshuNiuBei.prototype.destroy = function () {
    };
    return TenshuNiuBei;
}(eui.Component));
__reflect(TenshuNiuBei.prototype, "TenshuNiuBei", ["INiuNiuBetEffect"]);
//# sourceMappingURL=TenshuNiuBeiSkin.js.map