class InfoBox extends eui.Component
{
	public bgImg:eui.Image;
	public combox_grp:eui.Group;
	public sel_btn:eui.Button;
	public tab_txt:eui.Label;
	public scroller:eui.Scroller;
	public table_list:eui.List;

	private arrayCollection: eui.ArrayCollection;
	private cb:Function;
	private thisArg:any;
	private isShow:boolean;
	constructor(txtColor:number = 0xFFFFFF)
	{
		super();
		this.skinName = "InfoBoxSkin";
		this.tab_txt.textColor = txtColor;
		this.initEventListener();             
	}

    protected childrenCreated()
	{
		super.childrenCreated();
		this.isShowMenu(false);
	}

	private initEventListener() 
	{
		egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandler, this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		this.table_list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.itemClickHandler, this);
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	}

	private isShowMenu(isShow:boolean):void
	{
		this.isShow = isShow;
		this.scroller.visible = isShow;
		this.table_list.visible = isShow;
		this.bgImg.visible = isShow;
	}

	private onTouchStageHandler(evt:egret.Event):void
	{
		if(
			!(evt.target == this.sel_btn
			||evt.target == this.combox_grp
			||evt.target == this.scroller
			||evt.target == this.table_list)
		)
		{
			this.isShowMenu(false);
		}
	}

	private itemClickHandler(evt: egret.TouchEvent)
	{
		let item:InfoBoxItem = evt.target as InfoBoxItem;
		if(!item)return;
		if(this.cb)
		{
			this.cb.call(this.thisArg,item.data);
		}
		if(item.data)
		{
			this.tab_txt.text = item.data.name;
		}
		this.isShowMenu(false);
	}


	private onTouchHandler(evt:egret.Event):void
	{
		if(evt.target == this.sel_btn||evt.target == this.combox_grp)
		{
			this.isShowMenu(!this.isShow);
		}
	}

	public setInfoBoxData(dataSource:Array<InfoBoxData>,cb?: Function, thisArg?: any):void
	{
		this.cb = cb;
        this.thisArg = thisArg;

		this.arrayCollection = new eui.ArrayCollection(dataSource);
        this.table_list.dataProvider = this.arrayCollection;
        this.table_list.itemRenderer = InfoBoxItem;
        this.scroller.viewport = this.table_list;
		this.tab_txt.text = dataSource[0].name;
	}

	 public destroy()
	 {
		 this.cb = null;
         this.thisArg = null;
		 this.scroller.stopAnimation();
		 this.table_list.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.itemClickHandler, this);
		 egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandler, this);
		 this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
	 }
}