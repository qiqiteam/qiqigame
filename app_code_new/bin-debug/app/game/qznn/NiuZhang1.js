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
var NiuZhang1 = (function (_super) {
    __extends(NiuZhang1, _super);
    function NiuZhang1() {
        var _this = _super.call(this) || this;
        _this.skinName = "DZVEffSkin";
        return _this;
    }
    NiuZhang1.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.qiangzhuang2.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    NiuZhang1.prototype.onTweenComplete = function (evt) {
        this.visible = false;
        this.qiangzhuang2.stop();
    };
    NiuZhang1.prototype.play = function () {
        this.visible = true;
        this.qiangzhuang2.play(0);
    };
    NiuZhang1.prototype.stop = function () {
        this.visible = false;
        this.qiangzhuang2.stop();
    };
    NiuZhang1.prototype.destroy = function () {
    };
    return NiuZhang1;
}(eui.Component));
__reflect(NiuZhang1.prototype, "NiuZhang1");
//# sourceMappingURL=NiuZhang1.js.map