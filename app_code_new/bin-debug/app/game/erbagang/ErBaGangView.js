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
/**
 * 二八杠主界面
 */
var ErBaGangView = (function (_super) {
    __extends(ErBaGangView, _super);
    function ErBaGangView() {
        var _this = _super.call(this) || this;
        _this.skinName = "ErBaGangViewSkin";
        return _this;
    }
    ErBaGangView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_erba_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloReBtn, this);
    };
    //点击返回按钮
    ErBaGangView.prototype.OnClickCloReBtn = function (e) {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.PopUpMgr.removePopUp(SafeBoxView, 1);
    };
    ErBaGangView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ErBaGangView.prototype.destroy = function () {
        this.btn_erba_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloReBtn, this);
    };
    return ErBaGangView;
}(eui.Component));
__reflect(ErBaGangView.prototype, "ErBaGangView");
//# sourceMappingURL=ErBaGangView.js.map