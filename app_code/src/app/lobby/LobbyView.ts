/**
 * 大厅界面
 * */
class LobbyView extends eui.Component {
	public bgImg:eui.Image;
	public _set:eui.Button;
	public _service:eui.Button;
	public _information:eui.Button;
	public _playerinfo:eui.Button;
	public _head_label:eui.Label;
	public _coin_label:eui.Label;
	public _generalize:eui.Button;
	public _safebox:eui.Button;
	public _challenge:eui.Button;
	public _welfare:eui.Button;
	public _shoppingmall:eui.Button;
	public _topup:eui.Button;
	public menu_bar:eui.TabBar;
	public viewlist:eui.ViewStack;
	public _group_wanfa:eui.Group;
	public _group_pk:eui.Group;
	public _group_mahjong:eui.Group;
	public _group_game:eui.Group;

    private gamelistView:GameIconListView;
	private gameIconDataList:GameIconData[][];

	constructor() {
		super();
		this.skinName = "LobbyViewSkin";
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		EventUtil.addEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);
		this._set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._service.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._information.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._playerinfo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);

		this._generalize.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._safebox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._challenge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._welfare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._shoppingmall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._topup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
	}

	protected childrenCreated() {
		super.childrenCreated();

		this._head_label.text = UserInfo.getInstance().username;
		this._coin_label.text = ""+UserInfo.getInstance().goldcoins;
        this.initMenuBar();
        this.initGameIconList();
	}

	private initMenuBar():void
	{
		let dataArr:any[] = [{name:"热门玩法",down_url:"Font_dating_remenwanfa1_png",up_url:"Font_dating_remenwanfa_png"},
		{name:"扑克类",down_url:"Font_dating_pukelei1_png",up_url:"Font_dating_pukelei_png"},
		{name:"麻将类",down_url:"Font_dating_majianglei1_png",up_url:"Font_dating_majianglei_png"},
		{name:"游戏类",down_url:"Font_dating_youxilei1_png",up_url:"Font_dating_youxilei_png"}];
		this.menu_bar.dataProvider = new eui.ArrayCollection(dataArr);
		this.menu_bar.useVirtualLayout = true;
		this.menu_bar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
	}

	private initGameIconList():void
	{  
		let holdgameList:GameIconData[] = [
			new GameIconData().initData({name:"牛牛",url:"btn_niuniu_png",isOpen:true,game:Const.GAME_NIUNIU}),
			new GameIconData().initData({name:"炸金花",url:"btn_jinhua_png",isOpen:true,game:Const.GAME_ZHAJINHUA}),
			new GameIconData().initData({name:"百家乐",url:"btn_baijiale_png",isOpen:true,game:Const.GAME_BAIJIALE}),
			new GameIconData().initData({name:"二八杠",url:"btn_28_png",isopen:true,game:Const.GAME_ERBAGANG})
			];
		let pkList:GameIconData[] = [
			new GameIconData().initData({name:"牛牛",url:"btn_niuniu_png",isOpen:true,game:Const.GAME_NIUNIU}),
			new GameIconData().initData({name:"炸金花",url:"btn_jinhua_png",isOpen:true,game:Const.GAME_ZHAJINHUA}),
			new GameIconData().initData({name:"百家乐",url:"btn_baijiale_png",isOpen:true,game:Const.GAME_BAIJIALE})
			];
		let mahjongList:GameIconData[] = [
			new GameIconData().initData({name:"二八杠",url:"btn_28_png",isOpen:false})
		];
		let allgameList:GameIconData[] = [
			new GameIconData().initData({name:"炸金花",url:"btn_jinhua_png",isopen:true,game:Const.GAME_ZHAJINHUA,isOpen:false})
			];
		this.gameIconDataList = [holdgameList,pkList,mahjongList,allgameList];
		this.gamelistView = new GameIconListView();
		this.setIconListData(this.viewlist.selectedIndex);
	}

	public setIconListData(index:number):void
	{
       let container:any= this.viewlist.getElementAt(index);
	   this.gamelistView.setData(this.gameIconDataList[index]);
	   container.addChild(this.gamelistView);
	}

	private onBarItemTap(e: eui.ItemTapEvent): void {
		this.viewlist.selectedIndex = e.itemIndex;
		this.setIconListData(this.viewlist.selectedIndex);
    }
	
	private onClick2(e:egret.TouchEvent):void {
		this.playClickSound();
		if(e.target == this._set) {
			console.log("_set");
			xlLib.PopUpMgr.addPopUp(SetView, null, true, true, null ,1);
		} else if(e.target == this._playerinfo) {
			console.log("_playerinfo");
			xlLib.PopUpMgr.addPopUp(PlayerInfoView, null, true, true, null ,1);
		} else if(e.target == this._service) {
			console.log("_service");
			xlLib.TipsUtils.showFloatWordTips("敬请期待！");
		} else if(e.target == this._information) {
			console.log("_information");
			xlLib.PopUpMgr.addPopUp(SystemMsgView, null, true, true, null ,1);
		} else if(e.target == this._generalize) {
			console.log("_generalize");
		} else if(e.target == this._safebox) {
			console.log("_safebox");
			xlLib.PopUpMgr.addPopUp(SafeBoxView, null, true, true, null ,1);
		} else if(e.target == this._challenge) {
			console.log("_challenge");
			xlLib.TipsUtils.showFloatWordTips("敬请期待！");
		} else if(e.target == this._welfare) {
			console.log("_welfare");
			xlLib.PopUpMgr.addPopUp(WelfareView, null, true, true, null ,1);
		} else if(e.target == this._shoppingmall) {
			console.log("_shoppingmall");
		} else if(e.target == this._topup) {
			console.log("_topup");
			xlLib.PopUpMgr.addPopUp(RechargeView, null, true, true, null ,1);
		}
	}

	private onTouchHandler(evt: egret.Event): void {
	}

	/**添加适配处理*/
	public resize(): void {
		if (this.bgImg) {
			this.bgImg.width = xlLib.Global.screenWidth;
			this.bgImg.height = xlLib.Global.screenHeight;
		}
	}

	private onSocketClose(data: any): void {
		
	}

	private onNotify(data: any): void {
		
	}

	
	public destroy() {
		EventUtil.removeEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		egret.Tween.removeTweens(this);
	}

	public playClickSound() {
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
}
