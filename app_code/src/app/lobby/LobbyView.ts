/**
 * 大厅界面
 * */
class LobbyView extends eui.Component {
	public bgImg: eui.Image;
	public _set: eui.Button;
	public _service: eui.Button;
	public _information: eui.Button;
	public _playerinfo: eui.Button;
	public _head_label: eui.Label;
	public _coin_label: eui.Label;
	public _generalize: eui.Button;
	public _safebox: eui.Button;
	public _challenge: eui.Button;
	public _welfare: eui.Button;
	public _shoppingmall: eui.Button;
	public _topup: eui.Button;
	public menu_bar: eui.TabBar;
	public viewlist: eui.ViewStack;
	public _group_wanfa: eui.Group;
	public _group_pk: eui.Group;
	public _group_mahjong: eui.Group;
	public _group_game: eui.Group;
	public _group: eui.Group;
	public _sceoller: eui.Group;


	private gamelistView: GameIconListView;
	private gameIconDataList: GameIconData[][];

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
		this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
		this.initMenuBar();
		this.initGameIconList();

		
		// let test0: egret.Bitmap = xlLib.DisplayUtils.createBitmapByName("bjl_game_18_bg_png");
		// test0.x = 10; test0.y = 8;
		// let test1: egret.Bitmap = xlLib.DisplayUtils.createBitmapByName("brnn_game_930_bg_png");
		// test1.x = 280; test1.y = 8;
		// let test2: egret.Bitmap = xlLib.DisplayUtils.createBitmapByName("tbnn_game_870_bg_png");
		// test2.x = 550; test2.y = 8;
		// let test3: egret.Bitmap = xlLib.DisplayUtils.createBitmapByName("ebg_game_720_bg_png");
		// test3.x = 810; test3.y = 8;
		// let test4: egret.Bitmap = xlLib.DisplayUtils.createBitmapByName("bjl_game_18_bg_png");
		// test4.x = 10; test4.y = 293;
		// let test5: egret.Bitmap = xlLib.DisplayUtils.createBitmapByName("zjh_game_230_bg_png");
		// test5.x = 280; test5.y = 293;
		// let test6: egret.Bitmap = xlLib.DisplayUtils.createBitmapByName("bjl_game_18_bg_png");
		// test6.x = 550; test6.y = 293;
		// this._sceoller.addChild(test0);this._sceoller.addChild(test1);this._sceoller.addChild(test2);
		// this._sceoller.addChild(test3);this._sceoller.addChild(test4);this._sceoller.addChild(test5);
		// this._sceoller.addChild(test6);

		// let effect0: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_830_effect_logo", "game_830_effect_logo");
		// effect0.play(-1); effect0.x = 160; effect0.y = 5;
		// let effect01: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_830_effect", "game_830_effect");
		// effect01.play(-1); effect01.x = 18; effect01.y = -8;
		// let effect111: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("effcet_hot", "effcet_hot");
		// effect111.play(-1); effect111.x = 25; effect111.y = 0;

		// let effect11: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_720_effect_logo", "game_720_effect_logo");
		// effect11.play(-1); effect11.x = 840; effect11.y = 0;
		// let effect: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_230_effect", "game_230_effect");
		// effect.play(-1); effect.x = 0; effect.y = 0;
		// let effect1: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_610_effect", "game_610_effect");
		// effect1.play(-1); effect1.x = 270; effect1.y = 0;
		// let effect2: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_630_effect", "game_630_effect");
		// effect2.play(-1); effect2.x = 540; effect2.y = 0;
		// let effect3: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_720_effect", "game_720_effect");
		// effect3.play(-1); effect3.x = 810; effect3.y = 0;

		// let effect4: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_730_effect", "game_730_effect");
		// effect4.play(-1); effect4.x = 0; effect4.y = 285;
		// let effect5: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_910_effect", "game_910_effect");
		// effect5.play(-1); effect5.x = 270; effect5.y = 285;
		// let effect6: egret.MovieClip = xlLib.DisplayUtils.createMovieClicp("game_920_effect", "game_920_effect");
		// effect6.play(-1); effect6.x = 540; effect6.y = 285;

		// this._group.addChild(effect0); this._group.addChild(effect01); this._group.addChild(effect111);
		// this._sceoller.addChild(effect11); this._sceoller.addChild(effect); this._sceoller.addChild(effect1);
		// this._sceoller.addChild(effect2); this._sceoller.addChild(effect3); this._sceoller.addChild(effect4);
		// this._sceoller.addChild(effect5); this._sceoller.addChild(effect6);

	}

	private initMenuBar(): void {
		let dataArr: any[] = [{ name: "热门玩法", down_url: "Font_dating_remenwanfa1_png", up_url: "Font_dating_remenwanfa_png" },
		{ name: "扑克类", down_url: "Font_dating_pukelei1_png", up_url: "Font_dating_pukelei_png" },
		{ name: "麻将类", down_url: "Font_dating_majianglei1_png", up_url: "Font_dating_majianglei_png" },
		{ name: "游戏类", down_url: "Font_dating_youxilei1_png", up_url: "Font_dating_youxilei_png" }];
		this.menu_bar.dataProvider = new eui.ArrayCollection(dataArr);
		this.menu_bar.useVirtualLayout = true;
		this.menu_bar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
	}

	private initGameIconList(): void {
		let holdgameList: GameIconData[] = [
			new GameIconData().initData({ name: "抢庄牛牛", url: "btn_niuniu_png", isOpen: true, game: Const.GAME_NIUNIU, type: Const.TYPE_QZNN }),
			new GameIconData().initData({ name: "通比牛牛", url: "btn_niuniu_png", isOpen: true, game: Const.GAME_NIUNIU, type: Const.TYPE_TBNN }),
			new GameIconData().initData({ name: "炸金花", url: "btn_jinhua_png", isOpen: true, game: Const.GAME_ZHAJINHUA, type: Const.TYPE_JINGDIANJINHUA }),
			new GameIconData().initData({ name: "百家乐", url: "btn_baijiale_png", isOpen: true, game: Const.GAME_BAIJIALE, type: Const.TYPE_JINGDIANBAIJIALE }),
			new GameIconData().initData({ name: "二八杠", url: "btn_28_png", isopen: true, game: Const.GAME_ERBAGANG, type: Const.TYPE_ERBAGANGJINDIAN })
		];
		let pkList: GameIconData[] = [
			new GameIconData().initData({ name: "抢庄牛牛", url: "btn_niuniu_png", isOpen: true, game: Const.GAME_NIUNIU, type: Const.TYPE_QZNN }),
			new GameIconData().initData({ name: "通比牛牛", url: "btn_niuniu_png", isOpen: true, game: Const.GAME_NIUNIU, type: Const.TYPE_TBNN }),
			new GameIconData().initData({ name: "炸金花", url: "btn_jinhua_png", isOpen: true, game: Const.GAME_ZHAJINHUA, type: Const.TYPE_JINGDIANJINHUA }),
			new GameIconData().initData({ name: "百家乐", url: "btn_baijiale_png", isOpen: true, game: Const.GAME_BAIJIALE, type: Const.TYPE_JINGDIANBAIJIALE })
		];
		let mahjongList: GameIconData[] = [
			new GameIconData().initData({ name: "二八杠", url: "btn_28_png", isOpen: true, game: Const.GAME_ERBAGANG, type: Const.TYPE_ERBAGANGJINDIAN })
		];
		let allgameList: GameIconData[] = [
			new GameIconData().initData({ name: "炸金花", url: "btn_jinhua_png", isopen: true, game: Const.GAME_ZHAJINHUA, type: Const.TYPE_JINGDIANJINHUA }),
		];
		this.gameIconDataList = [holdgameList, pkList, mahjongList, allgameList];
		this.gamelistView = new GameIconListView();
		this.setIconListData(this.viewlist.selectedIndex);
	}

	public setIconListData(index: number): void {
		let container: any = this.viewlist.getElementAt(index);
		this.gamelistView.setData(this.gameIconDataList[index]);
		container.addChild(this.gamelistView);
	}

	private onBarItemTap(e: eui.ItemTapEvent): void {
		this.viewlist.selectedIndex = e.itemIndex;
		this.setIconListData(this.viewlist.selectedIndex);
	}

	private onClick2(e: egret.TouchEvent): void {
		this.playClickSound();
		if (e.target == this._set) {
			console.log("_set");
			xlLib.PopUpMgr.addPopUp(SetView, null, true, true, null, 1);
		} else if (e.target == this._playerinfo) {
			console.log("_playerinfo");
			xlLib.PopUpMgr.addPopUp(PlayerInfoView, null, true, true, null, 1);
		} else if (e.target == this._service) {
			console.log("_service");
			xlLib.TipsUtils.showFloatWordTips("敬请期待！");
		} else if (e.target == this._information) {
			console.log("_information");
			xlLib.PopUpMgr.addPopUp(SystemMsgView, null, true, true, null, 1);
		} else if (e.target == this._generalize) {
			console.log("_generalize");
		} else if (e.target == this._safebox) {
			console.log("_safebox");
			xlLib.PopUpMgr.addPopUp(SafeBoxView, null, true, true, null, 1);
		} else if (e.target == this._challenge) {
			console.log("_challenge");
			xlLib.TipsUtils.showFloatWordTips("敬请期待！");
		} else if (e.target == this._welfare) {
			console.log("_welfare");
			xlLib.PopUpMgr.addPopUp(WelfareView, null, true, true, null, 1);
		} else if (e.target == this._shoppingmall) {
			console.log("_shoppingmall");
		} else if (e.target == this._topup) {
			console.log("_topup");
			xlLib.PopUpMgr.addPopUp(RechargeView, null, true, true, null, 1);
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
