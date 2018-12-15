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
/**记录面板 */
var ZJHRecordPanl = (function (_super) {
    __extends(ZJHRecordPanl, _super);
    function ZJHRecordPanl() {
        var _this = _super.call(this) || this;
        _this.skinName = "ZJHRecordPanlSkin";
        return _this;
    }
    ZJHRecordPanl.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_record_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this.rect_board.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    };
    ZJHRecordPanl.prototype.onclosepanl = function () {
        xlLib.PopUpMgr.removePopUp(ZJHRecordPanl, 1);
    };
    ZJHRecordPanl.prototype.dataChanged = function () {
    };
    ZJHRecordPanl.prototype.destroy = function () {
        this._btn_record_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this.rect_board.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    };
    return ZJHRecordPanl;
}(eui.ItemRenderer));
__reflect(ZJHRecordPanl.prototype, "ZJHRecordPanl");
//# sourceMappingURL=ZJHRecordPanl.js.map