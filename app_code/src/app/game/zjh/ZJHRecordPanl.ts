/**记录面板 */
class ZJHRecordPanl extends eui.ItemRenderer {
    public _btn_record_close: eui.Button;
    constructor() {
        super();
        this.skinName = "ZJHRecordPanlSkin";
    }

    public childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_record_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    }
    public onclosepanl():void{
        xlLib.PopUpMgr.removePopUp(ZJHRecordPanl, 1);
        console.log("移除面板");
        
    }
    protected dataChanged(): void {

    }
    public destroy(): void {
        this._btn_record_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    }
}