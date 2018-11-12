class SetView extends eui.Component {

	public bgImg: eui.Image;
	public btn_return: eui.Button;
	public _Set_meun: eui.TabBar;
	public _viewlist_set: eui.ViewStack;
	public btn_yxsz_1: eui.Group;
	public btn_xsjc_1: eui.Group;
	public btn_zhgl_1: eui.Group;
	public btn_yjfk_1: eui.Group;

	public toggleSwitch0: EToggleSwitch;
	public toggleSwitch1: EToggleSwitch;
	public toggleSwitch2: EToggleSwitch;
	public txt0: eui.Label;
	public txt1: eui.Label;
	public txt2: eui.Label;

	public constructor() {
		super();
		this.skinName = "SetViewSkin";
	}

	public childrenCreated(): void {
		super.childrenCreated();

		let dataArr: any[] = [{ name: "游戏设置", down_url: "btn_settings_1_png", up_url: "btn_settings_0_png" },
		{ name: "新手教程", down_url: "btn_xsjc_1_png", up_url: "btn_xsjc_0_png" },
		{ name: "账号管理", down_url: "btn_accountmanagement_1_png", up_url: "btn_accountmanagement_0_png" },
		{ name: "意见反馈", down_url: "btn_yjfk_1_png", up_url: "btn_yjfk_0_png" }];
		this._Set_meun.dataProvider = new eui.ArrayCollection(dataArr);
		this._Set_meun.useVirtualLayout = true;
		this._Set_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);

		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);

		this.toggleSwitch0 = new EToggleSwitch(this, "switchOff_png", "switchOn_png", "switchBar_png", this.toggleCallback);
		this.toggleSwitch0.setBindData("toggleSwitch0");
		this.toggleSwitch0.x = 285;
		this.toggleSwitch0.y = 75;

		this.toggleSwitch1 = new EToggleSwitch(this, "switchOff_png", "switchOn_png", "switchBar_png", this.toggleCallback);
		this.toggleSwitch1.setBindData("toggleSwitch1");
		this.toggleSwitch1.x = 736;
		this.toggleSwitch1.y = 75;

		this.toggleSwitch2 = new EToggleSwitch(this, "switchOff_png", "switchOn_png", "switchBar_png", this.toggleCallback);
		this.toggleSwitch2.setBindData("toggleSwitch2");
		this.toggleSwitch2.x = 285;
		this.toggleSwitch2.y = 245;

		this.txt0 = new eui.Label();
		this.txt0.text = "开";
		this.txt0.x = 360;
		this.txt0.y = 85;
		this.txt0.touchEnabled = false;

		this.txt1 = new eui.Label();
		this.txt1.text = "开";
		this.txt1.x = 811;
		this.txt1.y = 85;
		this.txt1.touchEnabled = false;

		this.txt2 = new eui.Label();
		this.txt2.text = "开";
		this.txt2.x = 360;
		this.txt2.y = 255;
		this.txt2.touchEnabled = false;


		this.btn_yxsz_1.addChild(this.toggleSwitch0); this.btn_yxsz_1.addChild(this.toggleSwitch1); this.btn_yxsz_1.addChild(this.toggleSwitch2);
		this.btn_yxsz_1.addChild(this.txt0); this.btn_yxsz_1.addChild(this.txt1); this.btn_yxsz_1.addChild(this.txt2);

	}

	private toggleCallback(datastr: string) {
		if (datastr == "toggleSwitch0") {
			if (this.toggleSwitch0.getSelected()) {
				this.txt0.text = "关";
				return;
			}
			this.txt0.text = "开";
		} else if (datastr == "toggleSwitch1") {
			if (this.toggleSwitch1.getSelected()) {
				this.txt1.text = "关";
				return;
			}
			this.txt1.text = "开";
		} else if (datastr == "toggleSwitch2") {
			if (this.toggleSwitch2.getSelected()) {
				this.txt2.text = "关";
				return;
			}
			this.txt2.text = "开";
		}
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