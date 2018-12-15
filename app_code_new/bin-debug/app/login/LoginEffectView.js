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
var LoginEffectView = (function (_super) {
    __extends(LoginEffectView, _super);
    function LoginEffectView() {
        var _this = _super.call(this) || this;
        _this.skinName = "LoginEffectViewSkin";
        return _this;
    }
    LoginEffectView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.donghua.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    };
    LoginEffectView.prototype.onTweenComplete = function (evt) {
        this.donghua.play(0);
    };
    LoginEffectView.prototype.play = function () {
        this.donghua.play(0);
    };
    LoginEffectView.prototype.stop = function () {
        this.donghua.stop();
    };
    LoginEffectView.prototype.destroy = function () {
    };
    return LoginEffectView;
}(eui.Component));
__reflect(LoginEffectView.prototype, "LoginEffectView");
//# sourceMappingURL=LoginEffectView.js.map