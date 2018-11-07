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

		var toggleSwitch0 = new EToggleSwitch(this, "switchOff_png", "switchOn_png", "switchBar_png", this.toggleCallback);
		toggleSwitch0.x = 285;
		toggleSwitch0.y = 75;

		var toggleSwitch1 = new EToggleSwitch(this, "switchOff_png", "switchOn_png", "switchBar_png", this.toggleCallback);
		toggleSwitch1.x = 736;
		toggleSwitch1.y = 75;

		var toggleSwitch2 = new EToggleSwitch(this, "switchOff_png", "switchOn_png", "switchBar_png", this.toggleCallback);
		toggleSwitch2.x = 285;
		toggleSwitch2.y = 245;

		var txt0 = new eui.Label();
		txt0.text = "开";
		txt0.x = 360;
		txt0.y = 85;

		var txt1 = new eui.Label();
		txt1.text = "开";
		txt1.x = 811;
		txt1.y = 85;

		var txt2 = new eui.Label();
		txt2.text = "开";
		txt2.x = 360;
		txt2.y = 255;

		
		this.btn_yxsz_1.addChild(toggleSwitch0); this.btn_yxsz_1.addChild(toggleSwitch1); this.btn_yxsz_1.addChild(toggleSwitch2);
		this.btn_yxsz_1.addChild(txt0); this.btn_yxsz_1.addChild(txt1); this.btn_yxsz_1.addChild(txt2);

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