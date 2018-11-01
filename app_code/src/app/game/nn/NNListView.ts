/**
 * 牛牛列表界面
 * */
class NNListView extends eui.Component {
	public bgImg:eui.Image;
	public rt_btn:eui.Button;
	public scroller:eui.Scroller;
	public table_list:eui.List;
	private dataSource: Array<IGameTableData> = [];
	private itemArrayCollection: eui.ArrayCollection;

	constructor() {
		super();
		this.skinName = "NNListViewSkin";
	}

	public childrenCreated() {
		super.childrenCreated();
		this.initEventListener();
		this.init();
		this.resize();
	}

	public resize(): void 
	{
		if(this.bgImg)
		{
			this.bgImg.width = xlLib.Global.screenWidth;
			this.bgImg.height = xlLib.Global.screenHeight;
		}
		if(this.scroller)
		{
			this.scroller.height = xlLib.Global.screenHeight-72;
		}
	}

	private initEventListener() {
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
	}

	private init() {
		this.itemArrayCollection = new eui.ArrayCollection(this.dataSource);
		this.table_list.dataProvider = this.itemArrayCollection;
		// this.table_list.itemRenderer = NNTableItem;
		this.scroller.viewport = this.table_list;
	}

	private onTouchHandler(evt: egret.Event): void {
		if (evt.target == this.rt_btn) {
			xlLib.SceneMgr.instance.changeScene(Lobby);
		}
	}

	private destroy() {
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		this.table_list.removeChildren();
		this.scroller.stopAnimation();
		this.scroller.removeChildren();
		this.table_list = null;
		this.dataSource = null;
		this.itemArrayCollection = null;
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
	}
}