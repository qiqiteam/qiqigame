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
var NiuNBei = (function (_super) {
    __extends(NiuNBei, _super);
    function NiuNBei() {
        var _this = _super.call(this) || this;
        _this.skinName = "NiuNBeiSkin";
        return _this;
    }
    NiuNBei.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.niuniuanmin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    NiuNBei.prototype.onTweenComplete = function (evt) {
        this.niuniuanmin.stop();
    };
    NiuNBei.prototype.play = function (src) {
        this.image0.source = src;
        this.niuniuanmin.play(0);
    };
    NiuNBei.prototype.stop = function () {
        this.niuniuanmin.stop();
    };
    NiuNBei.prototype.destroy = function () {
    };
    return NiuNBei;
}(eui.Component));
__reflect(NiuNBei.prototype, "NiuNBei");
//# sourceMappingURL=NiuNBei.js.map