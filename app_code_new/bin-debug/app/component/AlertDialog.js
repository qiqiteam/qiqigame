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
 * 单选对话框
 * */
var AlertDialog = (function (_super) {
    __extends(AlertDialog, _super);
    function AlertDialog() {
        var _this = _super.call(this) || this;
        _this.skinName = "AlertDialogSkin";
        return _this;
    }
    AlertDialog.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.resize();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    AlertDialog.prototype.resize = function () {
        if (this.close_rect) {
            this.close_rect.width = xlLib.Global.screenWidth;
            this.close_rect.height = xlLib.Global.screenHeight;
        }
    };
    AlertDialog.prototype.showAlertDialog = function (str, cb, thisArg) {
        this.des_txt.text = str;
        this.cb = cb;
        this.thisArg = thisArg;
    };
    AlertDialog.prototype.onTouchHandler = function (evt) {
        if (evt.target == this.qd_btn) {
            if (this.cb) {
                this.cb.call(this.thisArg);
            }
            xlLib.UIMgr.instance.hideUI(this);
        }
    };
    AlertDialog.prototype.destroy = function () {
        this.cb = null;
        this.thisArg = null;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
    };
    return AlertDialog;
}(eui.Component));
__reflect(AlertDialog.prototype, "AlertDialog");
//# sourceMappingURL=AlertDialog.js.map