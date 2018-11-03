/**
 * 保险库
 */
class SafeBoxView extends eui.Component {

    public Bg: eui.Image;
    public btn_deposit: eui.Button;
    public btn_out: eui.Button;
    public btn_autodeposit: eui.Button;
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
    public input_password: eui.EditableText;
    public group_autodeposit: eui.Group;
    public btn_close: eui.Button;




    public constructor() {
        super();
        this.skinName = "SafeBoxViewSkin";
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);
        this.btn_deposit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickDeposit, this);
        this.btn_out.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickOutBtn, this);
        this.btn_autodeposit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickAutoBtn, this);
    }


    //点击返回按钮
    private OnClickCloBtn(e: egret.TouchEvent): void {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.PopUpMgr.removePopUp(SafeBoxView, 1);
    }
    //点击存入按钮
    private OnClickDeposit(e: egret.TouchEvent): void {
        this._MaxBtnHid();
        this.group_deposit.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    }
    //点击取出按钮
    private OnClickOutBtn(e: egret.TouchEvent): void {
        this._MaxBtnHid();
        this.group_deposit.visible = true;
        this.group_out.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    }
    //点击自动存按钮
    private OnClickAutoBtn(e: egret.TouchEvent): void {
        this._MaxBtnHid();
        this.group_autodeposit.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
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
    protected childrenCreated(): void {
        super.childrenCreated();
    }
    public destroy() {
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);
        this.btn_deposit.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickDeposit, this);
        this.btn_out.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickOutBtn, this);
        this.btn_autodeposit.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickAutoBtn, this);
    }
}