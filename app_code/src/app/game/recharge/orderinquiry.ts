/**
 * 订单查询
 */
class orderinquiry extends eui.Component implements  eui.UIComponent {

	public btn_return:eui.Button;

	public constructor() {
		super();
		this.skinName = "orderinquirySkin";
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
	}

	private onClick1(e: egret.TouchEvent): void {
		if (e.target == this.btn_return) {
			console.log("btn_return");
			xlLib.PopUpMgr.removePopUp(orderinquiry, 1);
		} 
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}