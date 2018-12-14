class BJLroomView extends eui.Component implements eui.UIComponent {
	public bgImg:eui.Image;
	public _btn_enter:eui.Button;
	public _menu:eui.Button;
	public _rule:eui.Button;
	public _coin_label:eui.Label;
	public _btn_close:eui.Button;
	public _record:eui.Button;


	private gameIconData: GameIconData;
	public constructor() {
		super();
		this.skinName = "BJLroomViewSkin";
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
		this._btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);

		EventUtil.addEventListener(EventConst.baccaratOnJoinRoom, this.OnbaccaratOnJoinRoom, this);
	}
	public OnbaccaratOnJoinRoom(data: any): void {
		if (data._obj.code == 200) {
			xlLib.SceneMgr.instance.changeScene(BJLScene);
			xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
		} else {
			xlLib.TipsUtils.showFloatWordTips("加入房间失败！");
		}

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
			token: UserInfo.getInstance().token, playway: playway.id
		};
		xlLib.WebSocketMgr.getInstance().send(EventConst.BaccaratJoinroom, senddata, (data) => {
		}, this);
	}

	public setGameIconData(gameIconData: GameIconData): void {
		this.gameIconData = gameIconData;
	}

	public dispose(): void {
		xlLib.PopUpMgr.removePopUp(this, 1);
	}

	public destroy(): void {
		this.gameIconData = null;
		this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
	}

}