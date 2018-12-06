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
var NiuZhang0 = (function (_super) {
    __extends(NiuZhang0, _super);
    function NiuZhang0() {
        var _this = _super.call(this) || this;
        _this.skinName = "DZHEffSkin";
        return _this;
    }
    NiuZhang0.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.qiangzhuang1.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    NiuZhang0.prototype.onTweenComplete = function (evt) {
        this.visible = false;
        this.qiangzhuang1.stop();
    };
    NiuZhang0.prototype.play = function () {
        this.visible = true;
        this.qiangzhuang1.play(0);
    };
    NiuZhang0.prototype.stop = function () {
        this.visible = false;
        this.qiangzhuang1.stop();
    };
    NiuZhang0.prototype.destroy = function () {
    };
    return NiuZhang0;
}(eui.Component));
__reflect(NiuZhang0.prototype, "NiuZhang0");
//# sourceMappingURL=NiuZhang0.js.map