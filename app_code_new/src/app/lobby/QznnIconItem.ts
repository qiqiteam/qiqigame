class QznnIconItem extends eui.Component {
    private icondata:GameIconData;
	private  effecthot:DragonBonesSprite;
	private  effectnew:DragonBonesSprite;
	private  effectfront:DragonBonesSprite;
	private  effectIcon:DragonBonesSprite;
	private  effectmask:DragonBonesSprite;
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
			this.effecthot.destroy();
		}
		if(this.effectnew){
			this.effectnew.destroy();
		}
		this.effectmask.destroy();
		this.effectfront.destroy();
		this.effectIcon.destroy();
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
		let rommView:QZNNroomView = xlLib.PopUpMgr.addPopUp(QZNNroomView, null, true, true, null ,1);
		rommView.setGameIconData(this.icondata);
	}

	public setGameIconData(icondata:GameIconData):void
	{
		this.icondata = icondata;
		this.effectmask = new DragonBonesSprite('bg_daliuguang',"Sprite");
		this.effectmask.width = this.width;
		this.effectmask.height = this.height;
		this.effectmask.x = 650;
		this.effectmask.y = 260;
		this.addChild(this.effectmask);
		this.effectmask.play("Sprite");
		if(icondata.ishot)
		{
		  	this.effecthot = new DragonBonesSprite('bg_remen',"Armature");
			this.effecthot.x = 10;
			this.effecthot.y = 95;
			this.addChild(this.effecthot);
			this.effecthot.play("newAnimation");
		}
		if(icondata.isNew)
		{
		  	this.effectnew = new DragonBonesSprite('bg_xin',"Armature");
			this.effectnew.x = 60;
			this.effectnew.y = 95;
			this.addChild(this.effectnew);
			this.effectnew.play("newAnimation");
		}
		switch(icondata.type)
		{
			case Const.TYPE_QZNN:
				this.effectfront = new DragonBonesSprite('bg_qiangzhuangniuniu',"Sprite");
				this.effectfront.x = 650;
				this.effectfront.y = 260;

				this.effectIcon = new DragonBonesSprite('qznn_rukou',"armatureName");
				this.effectIcon.x = 650;
				this.effectIcon.y = 260;
				break;
		}

		this.addChildAt(this.effectIcon,0);
		this.effectIcon.play("newAnimation");

		this.addChild(this.effectfront);
		this.effectIcon.play("Sprite");
	}
}