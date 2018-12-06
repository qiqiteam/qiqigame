class Hint extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "HintSkin";
	}

	public _qding: eui.Button;

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this._qding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}
	private onClick(e: egret.TouchEvent) {
		xlLib.PopUpMgr.removePopUp(Hint, 1);
	}
}