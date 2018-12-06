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
var ZhuangIconTX = (function (_super) {
    __extends(ZhuangIconTX, _super);
    function ZhuangIconTX() {
        var _this = _super.call(this) || this;
        _this.skinName = "ZhuangIconSkin";
        return _this;
    }
    ZhuangIconTX.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.zhuangjia.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    ZhuangIconTX.prototype.onTweenComplete = function (evt) {
        this.zhuangjia.stop();
    };
    ZhuangIconTX.prototype.play = function () {
        this.zhuangjia.play(0);
    };
    ZhuangIconTX.prototype.stop = function () {
        this.zhuangjia.stop();
    };
    ZhuangIconTX.prototype.destroy = function () {
    };
    return ZhuangIconTX;
}(eui.Component));
__reflect(ZhuangIconTX.prototype, "ZhuangIconTX");
//# sourceMappingURL=ZhuangIconTX.js.map