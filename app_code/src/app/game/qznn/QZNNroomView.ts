class QZNNroomView extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Image;
	public _menu: eui.Button;
	public _rule: eui.Button;
	public _coin_label: eui.Label;
	public _btn_close: eui.Button;
	public _record: eui.Button;
	public _btn_cjc: eui.Button;


	private gameIconData: GameIconData;

	public constructor() {
		super();
		this.skinName = "QZNNroomViewSkin";

		xlLib.SoundMgr.instance.stopBgMusic();

		let musicBg = ["qznn_bg_mp3"];
		xlLib.SoundMgr.instance.playBgMusic(musicBg);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		this._coin_label.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
		this._btn_cjc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);

		EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);

	}
	/**游戏状态 */
	private GameStatus(data: any): void {
		if (data._obj.code == 200) {
			xlLib.SceneMgr.instance.changeScene(QZNNScene);
		}
	}

	private onEnterGame(): void {
		this.playClickSound();
		if (!this.gameIconData) {
			return;
		}
		// xlLib.SceneMgr.instance.changeScene(QZNNScene);
		let gameData: gameData = UserInfo.getInstance().getGameDataByindex(this.gameIconData.game);
		let typeData: typeData = gameData.getTypeDataByindex(this.gameIconData.type);
		let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
		let senddata: any = {
			userid: UserInfo.getInstance().uid,
			token: UserInfo.getInstance().token, playway: playway.id
		};
		xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom, senddata, (data) => {
		}, this);

	}

	public setGameIconData(gameIconData: GameIconData): void {
		this.gameIconData = gameIconData;
	}

	public dispose(): void {
		xlLib.SoundMgr.instance.stopBgMusic();
		let musicBg = ["hall_bg_mp3"];
		xlLib.SoundMgr.instance.playBgMusic(musicBg);

		xlLib.PopUpMgr.removePopUp(this, 1);

	}
	public playClickSound() {
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	public destroy(): void {
		this.gameIconData = null;
		this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
	}

}