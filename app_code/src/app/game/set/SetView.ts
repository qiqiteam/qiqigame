class SetView extends eui.Component {

	public bgImg: eui.Image;
	public btn_return: eui.Button;
	public btn_yxsz_0: eui.Button;
	public btn_xsjc_0: eui.Button;
	public btn_zhgl_0: eui.Button;
	public btn_yjfk_0: eui.Button;
	public btn_yxsz_1: eui.Group;
	public btn_xsjc_1: eui.Group;
	public btn_zhgl_1: eui.Group;
	public btn_yjfk_1: eui.Group;




	public constructor() {
		super();
		this.skinName = "SetViewSkin";
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
		this.btn_yxsz_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this.btn_xsjc_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick3, this);
		this.btn_zhgl_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick4, this);
		this.btn_yjfk_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick5, this);
	}

	public childrenCreated(): void {
		super.childrenCreated();

		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	}


	private onClick1(e: egret.TouchEvent): void {
		xlLib.PopUpMgr.removePopUp(SetView, 1);
	}

	private onClick2(e: egret.TouchEvent): void {
		this.btn_yxsz_1.visible = true;
		this.btn_xsjc_1.visible = false;
		this.btn_zhgl_1.visible = false;
		this.btn_yjfk_1.visible = false;
	}

	private onClick3(e: egret.TouchEvent): void {
		this.btn_yxsz_1.visible = false;
		this.btn_xsjc_1.visible = true;
		this.btn_zhgl_1.visible = false;
		this.btn_yjfk_1.visible = false;
	}

	private onClick4(e: egret.TouchEvent): void {
		this.btn_yxsz_1.visible = false;
		this.btn_xsjc_1.visible = false;
		this.btn_zhgl_1.visible = true;
		this.btn_yjfk_1.visible = false;
	}

	private onClick5(e: egret.TouchEvent): void {
		this.btn_yxsz_1.visible = false;
		this.btn_xsjc_1.visible = false;
		this.btn_zhgl_1.visible = false;
		this.btn_yjfk_1.visible = true;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	public destroy() {
		this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
		this.btn_yxsz_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this.btn_xsjc_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick3, this);
		this.btn_zhgl_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick4, this);
		this.btn_yjfk_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick5, this);
	}

}