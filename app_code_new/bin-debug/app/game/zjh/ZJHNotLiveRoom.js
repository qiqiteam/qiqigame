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
/**是否能够离开房间面板 */
var ZJHNotLiveRoom = (function (_super) {
    __extends(ZJHNotLiveRoom, _super);
    function ZJHNotLiveRoom() {
        var _this = _super.call(this) || this;
        _this.skinName = "ZJHNotLiveRoomSkin";
        return _this;
    }
    ZJHNotLiveRoom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_quite1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    };
    ZJHNotLiveRoom.prototype.onclosepanl = function (e) {
        xlLib.PopUpMgr.removePopUp(ZJHNotLiveRoom, 1);
    };
    ZJHNotLiveRoom.prototype.dataChanged = function () {
    };
    ZJHNotLiveRoom.prototype.destroy = function () {
        this._btn_quite1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    };
    return ZJHNotLiveRoom;
}(eui.ItemRenderer));
__reflect(ZJHNotLiveRoom.prototype, "ZJHNotLiveRoom");
//# sourceMappingURL=ZJHNotLiveRoom.js.map