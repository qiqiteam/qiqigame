class ZJHroomView extends eui.Component implements eui.UIComponent {
	public bgImg: eui.Image;
	public _return: eui.Button;
	public _record: eui.Button;
	public _help: eui.Button;
	public _coin_label: eui.Label;
	public _id_tittle: eui.Label;
	public _id_lable: eui.Label;
	public _btn_cjc: eui.Button;


	private gameIconData: GameIconData;
	public constructor() {
		super();
		this.skinName = "ZhajhroomViewSkin";
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);

		this._return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onclickpanl, this);
		this._record.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onclickpanl, this);
		this._help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Onclickpanl, this);
		this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
		this._btn_cjc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
		EventUtil.addEventListener(EventConst.onGameStatusChange, this.JoinRoomPrepare, this);
		
		


	}
	private JoinRoomPrepare(data: any): void {
		if (data.param.code == 200) {
			xlLib.SceneMgr.instance.changeScene(ZJHScene);
			xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
		}
		
	}
	private onEnterGame(): void {
		if (!this.gameIconData) {
			return;
		}
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
/***------------------------------------------------------------------------------------------------------------ */
	public Onclickpanl(e: egret.TouchEvent): void {
		if (e.target == this._return) {
			xlLib.PopUpMgr.removePopUp(this, 1);
		} else if (e.target == this._record) {
			this.addrecordPanl();
		} else if (e.target == this._help) {
			this.addhelpPanl();
		} 
	}
	//记录面板
	public addrecordPanl(): void {
		xlLib.PopUpMgr.addPopUp(ZJHRecordPanl, null, true, true, null, 1);
	}
	//帮助面板
	public addhelpPanl(): void {
		// xlLib.PopUpMgr.addPopUp(ZJHHelpPanl, null, true,false);

		xlLib.PopUpMgr.addPopUp(ZJHHelpPanl, null, true, true, null, 1);
	}
	public destroy(): void {
		this.gameIconData = null;
		this._return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onclickpanl, this);
		this._record.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onclickpanl, this);
		this._help.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Onclickpanl, this);
		EventUtil.removeEventListener(EventConst.onGameStatusChange, this.JoinRoomPrepare, this);
	}

}