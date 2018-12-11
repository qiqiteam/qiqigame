/**
 * 大厅界面
 * */
class LobbyView extends eui.Component {
	public bgImg: eui.Image;
	public _set: eui.Button;
	public _service: eui.Button;
	public _playerinfo: eui.Button;
	public _head_label: eui.Label;
	public _coin_label: eui.Label;
	public _generalize: eui.Button;
	public _safebox: eui.Button;
	public _information: eui.Button;
	public _welfare: eui.Button;
	public _shoppingmall: eui.Button;
	public _topup: eui.Button;

	private gamelistView: GameIconListView;
	private gameIconDataList: GameIconData[];
	private qznnGameIconData: GameIconData;
	private qznnGameIcon: QznnIconItem;

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
		this._welfare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._shoppingmall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._topup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
	}

	protected childrenCreated() {
		super.childrenCreated();
		this._head_label.text = UserInfo.getInstance().username;
		this._coin_label.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
		this.initGameIconList();
	}

	private initGameIconList(): void {
		let allgameList: GameIconData[] = [
			new GameIconData().initData({ name: "通比牛牛", url: "tbnn_game_870_bg", ishot: true, isOpen: true, game: Const.GAME_NIUNIU, type: Const.TYPE_TBNN }),
			new GameIconData().initData({ name: "炸金花", url: "zjh_game_230_bg", ishot: true, isOpen: true, game: Const.GAME_ZHAJINHUA, type: Const.TYPE_JINGDIANJINHUA }),
			new GameIconData().initData({ name: "百家乐", url: "bjl_game_18_bg", ishot: true, isOpen: true, game: Const.GAME_BAIJIALE, type: Const.TYPE_JINGDIANBAIJIALE }),
			new GameIconData().initData({ name: "二八杠", url: "ebg_game_720_bg", ishot: true, isOpen: true, game: Const.GAME_ERBAGANG, type: Const.TYPE_ERBAGANGJINDIAN }),
			new GameIconData().initData({ name: "百人牛牛", url: "brnn_game_930_bg", ishot: true, isOpen: true, game: Const.GAME_NIUNIU, type: Const.TYPE_QRNIUNIU })
		]
		this.gameIconDataList = allgameList;
		this.gamelistView = new GameIconListView();
		this.gamelistView.x = 322;
		this.gamelistView.y = 153;
		this.gamelistView.setData(this.gameIconDataList);
		this.addChild(this.gamelistView);

		this.qznnGameIconData = new GameIconData().initData({ name: "抢庄牛牛", url: "qznn_game_830_bg", ishot: true, isOpen: true, game: Const.GAME_NIUNIU, type: Const.TYPE_QZNN });
		this.qznnGameIcon = new QznnIconItem();
		this.qznnGameIcon.x = 42;
		this.qznnGameIcon.y = 158;
		this.qznnGameIcon.setGameIconData(this.qznnGameIconData);
		this.addChild(this.qznnGameIcon);
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
