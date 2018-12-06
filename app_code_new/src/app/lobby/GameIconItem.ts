class GameIconItem extends eui.Component {
	public bg_img:eui.Image;
	public icon_img:eui.Image;
    private icondata:GameIconData;
	private  effecthot: egret.MovieClip;
	private  effectIcon: egret.MovieClip;
	private  effectmask:egret.MovieClip;
	constructor() {
		super();
		this.skinName = "GameIconItemSkin";
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
		EffectUtils.playButtonEffect(this,()=>{
			this.clickCallback()
		});
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}

	private clickCallback() {
		if(!this.icondata.isOpen){
 			xlLib.TipsUtils.showFloatWordTips("该功能暂时开放！");
			return;
		}
		 switch(this.icondata.type){
           case Const.TYPE_QRNIUNIU:
				let brnnroomView:BRNNroomView = xlLib.PopUpMgr.addPopUp(BRNNroomView, null, true, true, null ,1);
				brnnroomView.setGameIconData(this.icondata);
           break;
           case Const.TYPE_TBNN:
				let tbrommView:TBNNroomView = xlLib.PopUpMgr.addPopUp(TBNNroomView, null, true, true, null ,1);
				tbrommView.setGameIconData(this.icondata);
           break;
           case Const.TYPE_JINGDIANBAIJIALE:
             	let bjlroomView:BJLroomView = xlLib.PopUpMgr.addPopUp(BJLroomView, null, true, true, null ,1);
				bjlroomView.setGameIconData(this.icondata);
           break;
           case Const.TYPE_JINGDIANJINHUA:
              	let zjhrommView:ZJHroomView = xlLib.PopUpMgr.addPopUp(ZJHroomView, null, true, true, null ,1);
				zjhrommView.setGameIconData(this.icondata);
           break;
           case Const.TYPE_ERBAGANGJINDIAN:
            	 let erBaGangroomView:ErBaGangroomView = xlLib.PopUpMgr.addPopUp(ErBaGangroomView, null, true, true, null ,1);
				erBaGangroomView.setGameIconData(this.icondata);
           break;
        }

	}

	public setGameIconData(icondata:GameIconData):void
	{
		this.icondata = icondata;
        this.bg_img.source = icondata.url;
        if(icondata.ishot)
		{
			this.effecthot = xlLib.DisplayUtils.createAsyncMovieClicp("effcet_hot", "effcet_hot");
			this.effecthot.x = 25;
			this.effecthot.y = 0;
			this.effecthot.play(-1);
			this.addChild(this.effecthot);
		}
        if(icondata.game==Const.GAME_ERBAGANG){
			this.effectIcon = xlLib.DisplayUtils.createAsyncMovieClicp("game_720_effect_logo", "game_720_effect_logo");
			this.effectIcon.x = 130; 
			this.effectIcon.play(-1);
           	this.addChild(this.effectIcon);
		    this.effectmask = xlLib.DisplayUtils.createAsyncMovieClicp("game_720_effect", "game_720_effect");
		}else if(icondata.game==Const.GAME_ZHAJINHUA){
			 this.effectmask = xlLib.DisplayUtils.createAsyncMovieClicp("game_610_effect", "game_610_effect");
		}else{
 			this.effectmask = xlLib.DisplayUtils.createAsyncMovieClicp("game_230_effect", "game_230_effect");
		}
				this.effectmask.play(-1);
		this.effectmask.touchEnabled = false;
		this.effectmask.x = -12;
		this.effectmask.y = -11;
  		this.addChild(this.effectmask);
	}
}