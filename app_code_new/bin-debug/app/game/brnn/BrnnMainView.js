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
 * 百人牛牛
 */
var BrnnMainView = (function (_super) {
    __extends(BrnnMainView, _super);
    function BrnnMainView() {
        var _this = _super.call(this) || this;
        _this.skinName = "BrnnMainViewSkin";
        return _this;
    }
    BrnnMainView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_brnn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);
    };
    //点击返回按钮
    BrnnMainView.prototype.OnClickCloBtn = function (e) {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.PopUpMgr.removePopUp(BrnnMainView, 1);
    };
    BrnnMainView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BrnnMainView.prototype.destroy = function () {
        this.btn_brnn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);
    };
    return BrnnMainView;
}(eui.Component));
__reflect(BrnnMainView.prototype, "BrnnMainView");
//# sourceMappingURL=BrnnMainView.js.map