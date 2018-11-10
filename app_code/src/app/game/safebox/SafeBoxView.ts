/**
 * 保险库
 */
class SafeBoxView extends eui.Component {

    public Bg: eui.Image;
    public _safebox_meun: eui.TabBar;
    public _viewstack_safebox: eui.ViewStack;
    public group_deposit: eui.Group;
    public lab_CarryMoney: eui.Label;
    public lab_safebox: eui.Label;
    public input_depositMoney: eui.EditableText;
    public progress_bar: eui.Image;
    public btn_set_outPW: eui.Image;
    public btn_clear: eui.Button;
    public btn_all: eui.Button;
    public btn_enter: eui.Button;
    public group_out: eui.Group;
    public lab_CarryMoney01: eui.Label;
    public lab_safebox01: eui.Label;
    public input_depositMoney01: eui.EditableText;
    public progress_bar01: eui.Image;
    public btn_set_outPW01: eui.Image;
    public btn_clear01: eui.Button;
    public btn_all01: eui.Button;
    public btn_enter01: eui.Button;
    public input_password: eui.EditableText;
    public group_autodeposit: eui.Group;
    public cheakbox_deposit01: eui.CheckBox;
    public cheakbox_deposit02: eui.CheckBox;
    public btn_close: eui.Button;

    public toggle:EToggleSwitch;

    public constructor() {
        super();
        this.skinName = "SafeBoxViewSkin";

    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);


        let dataArr: any[] = [{ name: "存入", down_url: "deposit_down_btn_png", up_url: "deposit_up_btn_png" },
        { name: "取出", down_url: "out_down_btn_png", up_url: "out_up_btn_png" },
        { name: "自动存入", down_url: "autodeposit_down_btn_png", up_url: "autodeposit_up_btn_png" }];
        this._safebox_meun.dataProvider = new eui.ArrayCollection(dataArr);
        this._safebox_meun.useVirtualLayout = true;
        this._safebox_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);


        this.toggle=new EToggleSwitch(this,"ts_off_bg_png","ts_on_bg_png","toggleswitch_btn_png");
        this.toggle.x=350;
        this.toggle.y=65;
        this.group_autodeposit.addChild(this.toggle);
    }

    private onBarItemTap(e: eui.ItemTapEvent): void {
        this._viewstack_safebox.selectedIndex = e.itemIndex;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    }

    //toggleswitch事件绑定
    private OnToggleSwitch(e:egret.TouchEvent) {

        
    }


    //点击返回按钮
    private OnClickCloBtn(e: egret.TouchEvent): void {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.PopUpMgr.removePopUp(SafeBoxView, 1);
    }

    private _MaxBtnHid() {
        this.group_deposit.visible = false;
        this.group_out.visible = false;
        this.group_autodeposit.visible = false;
    }

    private _MinBtnHid() {

    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    public destroy() {
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);
    }
}