/**
 * 二八杠主界面
 */
class ErBaGangView extends eui.Component {

    public Img_bg: eui.Image;
    public Img_Buttom_bg: eui.Image;
    public btn_erba_menu: eui.Button;
    public btn_erba_return: eui.Button;
    public btn_erba_take: eui.Button;

    public constructor() {
        super();
        this.skinName = "ErBaGangViewSkin";

    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.btn_erba_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloReBtn, this);


    }


    //点击返回按钮
    private OnClickCloReBtn(e: egret.TouchEvent): void {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.PopUpMgr.removePopUp(SafeBoxView, 1);
    }


    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    public destroy() {
        this.btn_erba_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloReBtn, this);
    }
}