class QznnIconItem extends eui.Component {
	public bg_img:eui.Image;
	public icon_img:eui.Image;
    private icondata:GameIconData;
	private  effecthot: egret.MovieClip;
	private  effectIcon: egret.MovieClip;
	constructor() {
		super();
		this.skinName = "QznnIconItemSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
	}

	protected partRemoved(partName: string, instance: any): void
	{
		if(this.effecthot){
			this.effecthot.stop();
		}
		if(this.effectIcon){
			this.effectIcon.stop();
		}
       super.partRemoved(partName,instance);
	}

	private onEnterGame(e:egret.TouchEvent):void 
	{
		EffectUtils.playButtonEffect(e.target,()=>{
			this.clickCallback()
		});
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}

	private clickCallback() {
		if(!this.icondata.isOpen){
 			xlLib.TipsUtils.showFloatWordTips("该功能暂时开放！");
			return;
		}
		let rommView:QZNNroomView = xlLib.PopUpMgr.addPopUp(QZNNroomView, null, true, true, null ,1);
		rommView.setGameIconData(this.icondata);
	}

	public setGameIconData(icondata:GameIconData):void
	{
		this.icondata = icondata;
        this.bg_img.source = icondata.url;
        if(icondata.ishot)
		{
			this.effecthot = xlLib.DisplayUtils.createMovieClicp("effcet_hot", "effcet_hot");
			this.effecthot.play(-1);
			this.effecthot.x = 25;
			this.effecthot.y = 0;
			this.addChild(this.effecthot);
		}
        if(icondata.game==Const.GAME_NIUNIU){
			this.effectIcon = xlLib.DisplayUtils.createMovieClicp("game_830_effect_logo", "game_830_effect_logo");
			this.effectIcon.play(-1);
			this.effectIcon.x = 130; 
           	this.addChild(this.effectIcon);
		}

	}
}