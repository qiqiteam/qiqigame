/**
 * 充值
 */
class RechargeView extends eui.Component implements eui.UIComponent {

	public btn_return: eui.Button;
	public _recharge_meun: eui.TabBar;
	public _viewlist: eui.ViewStack;
	public fixationAlipay_1: eui.Group;
	public Unionpay_1: eui.Group;
	public Alipay_1: eui.Group;
	public Theofficialagent_1: eui.Group;
	public btn_ddcx: eui.Button;


	public constructor() {
		super();
		this.skinName = "RechargeViewSkin";
	}

	protected childrenCreated(): void {
		super.childrenCreated();

		let dataArr: any[] = [{ name: "定额支付宝", down_url: "btn_fixationAlipay_0_png", up_url: "btn_Theofficialagent_0_png" },
		{ name: "支付宝", down_url: "btn_fixationAlipay_0_png", up_url: "btn_Theofficialagent_0_png" },
		{ name: "银联", down_url: "btn_fixationAlipay_0_png", up_url: "btn_Theofficialagent_0_png" },
		{ name: "官方代理", down_url: "btn_fixationAlipay_0_png", up_url: "btn_Theofficialagent_0_png" }];
		this._recharge_meun.dataProvider = new eui.ArrayCollection(dataArr);
		this._recharge_meun.useVirtualLayout = true;
		this._recharge_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);

		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
		this.btn_ddcx.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
	}

	private onBarItemTap(e: eui.ItemTapEvent): void {
		this._viewlist.selectedIndex = e.itemIndex;
	}

	private onClick1(e: egret.TouchEvent): void {
		if (e.target == this.btn_return) {
			console.log("btn_return");
			xlLib.PopUpMgr.removePopUp(RechargeView, 1);
		} else if (e.target == this.btn_ddcx) {
			console.log("btn_ddcx");
			xlLib.PopUpMgr.addPopUp(orderinquiry, null, true, true, null, 1);
		}
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	public destroy(): void {
		this._recharge_meun.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBarItemTap, this);
		this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
		this.btn_ddcx.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
	}
}