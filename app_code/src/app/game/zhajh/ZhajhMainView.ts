/**
 * 炸金花
 */
class ZhajhMainView extends eui.Component {

    public Img_bg: eui.Image;
    public Img_button_bg: eui.Image;
    public btn_zjh_return: eui.Button;
    public btn_zjh_menu: eui.Button;
    public btn_zjh_record: eui.Button;
    public btn_zjh_take: eui.Button;
    public btn_zjh_yuyin: eui.Button;
    public btn_zjh_setdown: eui.Button;


    public constructor() {
        super();
        this.skinName = "ZhajhMainSceneView";

    }
    protected childrenCreated(): void {
        super.childrenCreated();
        this.btn_zjh_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);
    }

    //点击返回按钮
    private OnClickCloBtn(e: egret.TouchEvent): void {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.PopUpMgr.removePopUp(ZhajhMainView, 1);
    }


    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    public destroy() {
        this.btn_zjh_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);
    }
}