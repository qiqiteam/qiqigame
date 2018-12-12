/**记录面板 */
class ZJHRecordPanl extends eui.ItemRenderer {
    public rect_board: eui.Rect;
    public _btn_record_close: eui.Button;

    constructor() {
        super();
        this.skinName = "ZJHRecordPanlSkin";
    }

    public childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_record_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this.rect_board.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    }
    public onclosepanl(): void {
        xlLib.PopUpMgr.removePopUp(ZJHRecordPanl, 1);
    }
    protected dataChanged(): void {

    }
    public destroy(): void {
        this._btn_record_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this.rect_board.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    }
}