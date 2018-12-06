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
var NiuJiao = (function (_super) {
    __extends(NiuJiao, _super);
    function NiuJiao() {
        var _this = _super.call(this) || this;
        _this.skinName = "NiuJiaoSkin";
        return _this;
    }
    NiuJiao.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.niujiao.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    NiuJiao.prototype.onTweenComplete = function (evt) {
        this.niujiao.play(0);
    };
    NiuJiao.prototype.play = function () {
        this.niujiao.play(0);
    };
    NiuJiao.prototype.stop = function () {
        this.niujiao.stop();
    };
    NiuJiao.prototype.destroy = function () {
    };
    return NiuJiao;
}(eui.Component));
__reflect(NiuJiao.prototype, "NiuJiao", ["INiuNiuBetEffect"]);
//# sourceMappingURL=NiuJiao.js.map