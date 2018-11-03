/**
 * 充值
 */
class RechargeView extends eui.Component implements eui.UIComponent {

	public btn_return:eui.Button;
	public fixationAlipay_0:eui.Button;
	public Unionpay_0:eui.Button;
	public Alipay_0:eui.Button;
	public Theofficialagent_0:eui.Button;
	public fixationAlipay_1:eui.Group;
	public Unionpay_1:eui.Group;
	public Alipay_1:eui.Group;
	public Theofficialagent_1:eui.Group;
	public btn_ddcx:eui.Button;



	public constructor() {
		super();
		this.skinName = "RechargeViewSkin";
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
		this.fixationAlipay_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
		this.Unionpay_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
		this.Alipay_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
		this.Theofficialagent_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
		this.btn_ddcx.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
	}

	private onClick1(e: egret.TouchEvent): void {
		if (e.target == this.btn_return) {
			console.log("btn_return");
			xlLib.PopUpMgr.removePopUp(RechargeView, 1);
		} else if (e.target == this.fixationAlipay_0) {
			console.log("fixationAlipay_0");
			this.fixationAlipay_1.visible = true;
			this.Unionpay_1.visible = false;
			this.Alipay_1.visible = false;
			this.Theofficialagent_1.visible = false;

		} else if (e.target == this.Unionpay_0) {
			console.log("Unionpay_0");
			this.fixationAlipay_1.visible = false;
			this.Unionpay_1.visible = true;
			this.Alipay_1.visible = false;
			this.Theofficialagent_1.visible = false;

		} else if (e.target == this.Alipay_0) {
			console.log("Alipay_0");
			this.fixationAlipay_1.visible = false;
			this.Unionpay_1.visible = false;
			this.Alipay_1.visible = true;
			this.Theofficialagent_1.visible = false;

		} else if (e.target == this.Theofficialagent_0) {
			console.log("Theofficialagent_0");
			this.fixationAlipay_1.visible = false;
			this.Unionpay_1.visible = false;
			this.Alipay_1.visible = false;
			this.Theofficialagent_1.visible = true;
		}else if (e.target == this.btn_ddcx) {
			console.log("btn_ddcx");
			xlLib.PopUpMgr.addPopUp(orderinquiry, null, true, true, null ,1);
		}
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

}