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
var BJLtingzhi = (function (_super) {
    __extends(BJLtingzhi, _super);
    function BJLtingzhi() {
        var _this = _super.call(this) || this;
        _this.skinName = "BJLtingzhiSkin";
        return _this;
    }
    BJLtingzhi.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.bjlkaishi.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    BJLtingzhi.prototype.onTweenComplete = function (evt) {
        this.bjlkaishi.stop();
    };
    BJLtingzhi.prototype.play = function () {
        this.bjlkaishi.play(0);
    };
    BJLtingzhi.prototype.stop = function () {
        this.bjlkaishi.stop();
    };
    BJLtingzhi.prototype.destroy = function () {
    };
    return BJLtingzhi;
}(eui.Component));
__reflect(BJLtingzhi.prototype, "BJLtingzhi");
//# sourceMappingURL=BJLtingzhi.js.map