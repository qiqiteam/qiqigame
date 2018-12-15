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
var BJLjiesuan1 = (function (_super) {
    __extends(BJLjiesuan1, _super);
    function BJLjiesuan1() {
        var _this = _super.call(this) || this;
        _this.skinName = "BJLjiesuan_1Skin";
        return _this;
    }
    BJLjiesuan1.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.zhuangyin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    BJLjiesuan1.prototype.onTweenComplete = function (evt) {
        this.visible = false;
        this.zhuangyin.stop();
    };
    BJLjiesuan1.prototype.play = function () {
        this.visible = true;
        this.zhuangyin.play(0);
    };
    BJLjiesuan1.prototype.stop = function () {
        this.zhuangyin.stop();
    };
    BJLjiesuan1.prototype.destroy = function () {
    };
    return BJLjiesuan1;
}(eui.Component));
__reflect(BJLjiesuan1.prototype, "BJLjiesuan1");
//# sourceMappingURL=BJLjiesuan1.js.map