class BJLroomView extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Image;
	public _menu: eui.Button;
	public _rule: eui.Button;
	public _coin_label: eui.Label;
	public _btn_close: eui.Button;
	public _record: eui.Button;
	public _btn_enter: eui.Button;
	public menubar: eui.TabBar;

	public isRoomid: string[];

	private gameIconData: GameIconData;
	public constructor() {
		super();
		this.skinName = "BJLroomViewSkin";

		let musicBg = ["bjl_35_bg_imi_mp3"];
		xlLib.SoundMgr.instance.playBgMusic(musicBg);
		
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.initData();
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		this._coin_label.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
		this._btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);

		EventUtil.addEventListener(EventConst.parteySuccess, this.OnparteySuccess, this);
		EventUtil.addEventListener(EventConst.onTimelyNotify, this.OnbaccaratOnJoinRoom, this);
		EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);

		this._btn_enter.touchEnabled = true;
	}
	/**游戏状态 */
	private GameStatus(data: any): void {
		if (data._obj.code == 200) {
			xlLib.SceneMgr.instance.changeScene(BJLScene);
		}
	}
	/**数据初始化 */
	private initData(): void {
		this._btn_enter.touchEnabled = false;
		this.isRoomid = [];
	}
	/**进入百家乐房间失败 */
	public OnbaccaratOnJoinRoom(data: any): void {
		if (data._obj.change == 6) {
			xlLib.TipsUtils.showFloatWordTips(data._obj.reminder);
		}
	}

	/**进入百家乐房间列表成功of失败 */
	public OnparteySuccess(data: any): void {
		this._btn_enter.touchEnabled = true;
		for (let i = 0; i < data._obj.gameRooms.length; i++) {
			var str: string = data._obj.gameRooms[i].roomid;
			this.isRoomid.push(str);
		}
		xlLib.TipsUtils.showFloatWordTips("加入房间列表成功！");
	}
	private onEnterGame(): void {
		if (!this.gameIconData) {
			return;
		}
		// xlLib.SceneMgr.instance.changeScene(BJLScene);
		let gameData: gameData = UserInfo.getInstance().getGameDataByindex(this.gameIconData.game);
		let typeData: typeData = gameData.getTypeDataByindex(this.gameIconData.type);
		let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
		let senddata: any = {
			userid: UserInfo.getInstance().uid,
			token: UserInfo.getInstance().token, playway: playway.id,
			roomid: this.isRoomid[0]
		};
		xlLib.WebSocketMgr.getInstance().send(EventConst.BaccaratJoinroom, senddata, (data) => {
		}, this);
	}

	public setGameIconData(gameIconData: GameIconData): void {
		this.gameIconData = gameIconData;
		if (!this.gameIconData) {
			return;
		}
		// let gameData: gameData = UserInfo.getInstance().getGameDataByindex(this.gameIconData.game);
		// let typeData: typeData = gameData.getTypeDataByindex(this.gameIconData.type);
		// let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
		// let senddata: any = {
		// 	userid: UserInfo.getInstance().uid,
		// 	token: UserInfo.getInstance().token, playway: playway.id
		// };
		// xlLib.WebSocketMgr.getInstance().send(EventConst.BaccaratEfcsh, senddata, (data) => {
		// }, this);
	}

	public dispose(): void {
		let musicBg = ["hall_bg_mp3"];
		xlLib.SoundMgr.instance.playBgMusic(musicBg);
		xlLib.PopUpMgr.removePopUp(this, 1);
	}

	public destroy(): void {
		this.gameIconData = null;
		this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		EventUtil.removeEventListener(EventConst.parteySuccess, this.OnparteySuccess, this);
		EventUtil.removeEventListener(EventConst.onTimelyNotify, this.OnbaccaratOnJoinRoom, this);
		EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
	}

}