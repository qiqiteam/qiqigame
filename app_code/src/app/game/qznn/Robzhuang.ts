/**
 * 抢庄牛牛
 */
class Robzhuang extends eui.Component implements eui.UIComponent {
	public btn_return: eui.Button;

	public constructor() {
		super();
		this.skinName = "RobzhuangSkin";
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}

	private onClick(e: egret.TouchEvent): void {
		xlLib.PopUpMgr.removePopUp(Robzhuang, 1);
	}
}