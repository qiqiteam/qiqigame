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
var BJLjiesuan3 = (function (_super) {
    __extends(BJLjiesuan3, _super);
    function BJLjiesuan3() {
        var _this = _super.call(this) || this;
        _this.skinName = "BJLjiesuan_3Skin";
        return _this;
    }
    BJLjiesuan3.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.zhuangyin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    BJLjiesuan3.prototype.onTweenComplete = function (evt) {
        this.visible = false;
        this.zhuangyin.stop();
    };
    BJLjiesuan3.prototype.play = function () {
        this.visible = true;
        this.zhuangyin.play(0);
    };
    BJLjiesuan3.prototype.stop = function () {
        this.zhuangyin.stop();
    };
    BJLjiesuan3.prototype.destroy = function () {
    };
    return BJLjiesuan3;
}(eui.Component));
__reflect(BJLjiesuan3.prototype, "BJLjiesuan3");
//# sourceMappingURL=BJLjiesuan3.js.map