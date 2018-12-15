class TBNNroomView extends eui.Component implements eui.UIComponent {
	public _menu:eui.Button;
	public _rule:eui.Button;
	public _coin_label:eui.Label;
	public _btn_close:eui.Button;
	public _record:eui.Button;
	public _btn_cjc:eui.Button;


	private gameIconData: GameIconData;
	private playerDb:dragonBones.Armature;
	private tbroomeff:TBNNroomEff;
	public constructor() {
		super();
		this.skinName = "TBNNroomViewSkin";

		let musicBg = ["tbnn_gamebgMusic_mp3"];
		xlLib.SoundMgr.instance.playBgMusic(musicBg);
	}

	private playPlayerDragonBones():void
    {
        this.playerDb = xlLib.DisplayUtils.createDragonBonesDisplay('tongbiniuniu',"armatureName");
        dragonBones.WorldClock.clock.add(this.playerDb);
        let armatureDisplay:dragonBones.EgretArmatureDisplay = this.playerDb.getDisplay();
        armatureDisplay.x = 450+armatureDisplay.width;
        armatureDisplay.y = 600;
        this.addChild(armatureDisplay);
        xlLib.DisplayUtils.runDragonBonesArmature(this.playerDb,"newAnimation");
    }

	protected childrenCreated(): void {
		super.childrenCreated();
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		this._coin_label.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
		this._btn_cjc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
		EventUtil.addEventListener(EventConst.onGameStatusChange, this.GameStatus, this);

        this.playPlayerDragonBones();
		this.tbroomeff = new TBNNroomEff();
		this.addChildAt(this.tbroomeff,0);
		this.tbroomeff.play();
	}
	/**游戏状态 */
	private GameStatus(data: any): void {
		if (data._obj.code == 200) {
			xlLib.SceneMgr.instance.changeScene(TBNNScene);
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

	public dispose(): void {
		let musicBg = ["hall_bg_mp3"];
		xlLib.SoundMgr.instance.playBgMusic(musicBg);
		xlLib.PopUpMgr.removePopUp(this, 1);
	}

	public destroy(): void {
		this.tbroomeff.stop();
		xlLib.DisplayUtils.destoryDragonBonesArmature(this.playerDb,"newAnimation");
		this.playerDb = null;
		this.gameIconData = null;
		this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		this._btn_cjc.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
		EventUtil.removeEventListener(EventConst.onGameStatusChange, this.GameStatus, this);
	}

}