class GameIconItem extends eui.Component {
	public bg_img:eui.Image;
	public icon_img:eui.Image;

	constructor() {
		super();
		this.skinName = "GameIconItemSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
	}

	private onEnterGame(e:egret.TouchEvent):void 
	{
		EffectUtils.playButtonEffect(e.target,this.clickCallback);
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}

	private clickCallback() {
		let rommView:RoomView = xlLib.PopUpMgr.addPopUp(RoomView, null, true, true, null ,1);
		// rommView
	}

	public setGameIconData(icondata:GameIconData):void
	{
        this.bg_img.source = icondata.url;
	}
}