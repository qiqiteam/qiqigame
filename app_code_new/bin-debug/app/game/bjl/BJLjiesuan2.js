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
var BJLjiesuan2 = (function (_super) {
    __extends(BJLjiesuan2, _super);
    function BJLjiesuan2() {
        var _this = _super.call(this) || this;
        _this.skinName = "BJLjiesuan_2Skin";
        return _this;
    }
    BJLjiesuan2.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.zhuangyin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    BJLjiesuan2.prototype.onTweenComplete = function (evt) {
        this.visible = false;
        this.zhuangyin.stop();
    };
    BJLjiesuan2.prototype.play = function () {
        this.visible = true;
        this.zhuangyin.play(0);
    };
    BJLjiesuan2.prototype.stop = function () {
        this.zhuangyin.stop();
    };
    BJLjiesuan2.prototype.destroy = function () {
    };
    return BJLjiesuan2;
}(eui.Component));
__reflect(BJLjiesuan2.prototype, "BJLjiesuan2");
//# sourceMappingURL=BJLjiesuan2.js.map