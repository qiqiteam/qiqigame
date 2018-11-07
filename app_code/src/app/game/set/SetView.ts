class SetView extends eui.Component {

	public bgImg: eui.Image;
	public btn_return: eui.Button;
	public _Set_meun: eui.TabBar;
	public _viewlist_set: eui.ViewStack;
	public btn_yxsz_1: eui.Group;
	public btn_xsjc_1: eui.Group;
	public btn_zhgl_1: eui.Group;
	public btn_yjfk_1: eui.Group;


	public constructor() {
		super();
		this.skinName = "SetViewSkin";
	}

	public childrenCreated(): void {
		super.childrenCreated();

		let dataArr: any[] = [{ name: "游戏设置", down_url: "btn_settings_1_png", up_url: "btn_xsjc_0_png" },
		{ name: "新手指导", down_url: "btn_settings_1_png", up_url: "btn_xsjc_0_png" },
		{ name: "账号管理", down_url: "btn_settings_1_png", up_url: "btn_xsjc_0_png" },
		{ name: "意见反馈", down_url: "btn_settings_1_png", up_url: "btn_xsjc_0_png" }];
		this._Set_meun.dataProvider = new eui.ArrayCollection(dataArr);
		this._Set_meun.useVirtualLayout = true;
		this._Set_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);

		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);

		var toggleSwitch = new EToggleSwitch(this,"switchOff_png","switchOn_png","switchBar_png", this.toggleCallback);
		toggleSwitch.x = 500;
		toggleSwitch.y = 400;
        this.addChild(toggleSwitch);

	}

	private toggleCallback() {
		console.log("fffff");
	}

	private onBarItemTap(e: eui.ItemTapEvent): void {
		this._viewlist_set.selectedIndex = e.itemIndex;
	}


	private onClick1(e: egret.TouchEvent): void {
		xlLib.PopUpMgr.removePopUp(SetView, 1);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	public destroy() {
		this._Set_meun.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
		this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
	}

}