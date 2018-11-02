var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SetView = (function (_super) {
    __extends(SetView, _super);
    function SetView() {
        var _this = _super.call(this) || this;
        _this.skinName = "SetViewSkin";
        _this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick1, _this);
        _this.btn_yxsz_0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this.btn_xsjc_0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick3, _this);
        _this.btn_zhgl_0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick4, _this);
        _this.btn_yjfk_0.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick5, _this);
        return _this;
    }
    SetView.prototype.onClick1 = function (e) {
        xlLib.PopUpMgr.removePopUp(SetView, 1);
    };
    SetView.prototype.onClick2 = function (e) {
        this.btn_yxsz_1.visible = true;
        this.btn_xsjc_1.visible = false;
        this.btn_zhgl_1.visible = false;
        this.btn_yjfk_1.visible = false;
    };
    SetView.prototype.onClick3 = function (e) {
        this.btn_yxsz_1.visible = false;
        this.btn_xsjc_1.visible = true;
        this.btn_zhgl_1.visible = false;
        this.btn_yjfk_1.visible = false;
    };
    SetView.prototype.onClick4 = function (e) {
        this.btn_yxsz_1.visible = false;
        this.btn_xsjc_1.visible = false;
        this.btn_zhgl_1.visible = true;
        this.btn_yjfk_1.visible = false;
    };
    SetView.prototype.onClick5 = function (e) {
        this.btn_yxsz_1.visible = false;
        this.btn_xsjc_1.visible = false;
        this.btn_zhgl_1.visible = false;
        this.btn_yjfk_1.visible = true;
    };
    SetView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SetView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    SetView.prototype.destroy = function () {
        this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
        this.btn_yxsz_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
        this.btn_xsjc_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick3, this);
        this.btn_zhgl_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick4, this);
        this.btn_yjfk_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick5, this);
    };
    return SetView;
}(eui.Component));
__reflect(SetView.prototype, "SetView");
//# sourceMappingURL=SetView.js.map