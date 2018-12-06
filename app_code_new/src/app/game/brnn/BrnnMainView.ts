/**
 * 百人牛牛
 */
class BrnnMainView extends eui.Component {

    public Img_bg: eui.Image;
    public btn_brnn_return: eui.Button;
    public btn_brnn_menu: eui.Button;
    public btn_brnn_player: eui.Button;
    public btn_brnn_take: eui.Button;
    public btn_brnn_yuyin: eui.Button;
    public btn_brnn_record: eui.Button;
    public btn_brnn_setdown: eui.Button;




    public constructor() {
        super();
        this.skinName = "BrnnMainViewSkin";

    }
    protected childrenCreated(): void {
        super.childrenCreated();
        this.btn_brnn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClickCloBtn,this);
    }

    //点击返回按钮
    private OnClickCloBtn(e: egret.TouchEvent): void {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.PopUpMgr.removePopUp(BrnnMainView, 1);
    }


    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }
    
    public destroy() {
        this.btn_brnn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClickCloBtn,this);
    }
}