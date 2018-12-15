/**是否能够离开房间面板 */
class ZJHNotLiveRoom extends eui.ItemRenderer {
    public _btn_quite1: eui.Button;
    public lab_isoutTips: eui.Label;

    constructor() {
        super();
        this.skinName = "ZJHNotLiveRoomSkin";
    }

    public childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_quite1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    }
    public onclosepanl(e: egret.TouchEvent): void {
        xlLib.PopUpMgr.removePopUp(ZJHNotLiveRoom, 1);
    }
    protected dataChanged(): void {

    }
    public destroy(): void {
        this._btn_quite1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    }
}