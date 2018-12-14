class QznnIconItem extends eui.Component {
    private icondata:GameIconData;
	private  effecthot:dragonBones.Armature;
	private  effectnew:dragonBones.Armature;
	private  effectfront:dragonBones.Armature;
	private  effectIcon:dragonBones.Armature;
	private  effectmask:dragonBones.Armature;
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
			xlLib.DisplayUtils.destoryDragonBonesArmature(this.effecthot,"newAnimation");
		}
		if(this.effectnew){
			xlLib.DisplayUtils.destoryDragonBonesArmature(this.effectnew,"newAnimation");
		}
		xlLib.DisplayUtils.destoryDragonBonesArmature(this.effectmask,"Sprite");
		xlLib.DisplayUtils.destoryDragonBonesArmature(this.effectfront,"Sprite");
		xlLib.DisplayUtils.destoryDragonBonesArmature(this.effectIcon,"newAnimation");
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
		let armatureDisplay:dragonBones.EgretArmatureDisplay;
		let armatureIconDisplay:dragonBones.EgretArmatureDisplay;
		if(icondata.ishot)
		{
		  	this.effecthot = xlLib.DisplayUtils.createDragonBonesDisplay('bg_remen',"Armature");
			dragonBones.WorldClock.clock.add(this.effecthot);
			armatureDisplay = this.effecthot.getDisplay();
			armatureDisplay.x = 10;
			armatureDisplay.y = 95;
			this.addChild(armatureDisplay);
			xlLib.DisplayUtils.runDragonBonesArmature(this.effecthot,"newAnimation");
		}
		if(icondata.isNew)
		{
		  	this.effectnew = xlLib.DisplayUtils.createDragonBonesDisplay('bg_xin',"Armature");
			dragonBones.WorldClock.clock.add(this.effectnew);
			armatureDisplay = this.effectnew.getDisplay();
			armatureDisplay.x = 60;
			armatureDisplay.y = 95;
			this.addChild(armatureDisplay);
			xlLib.DisplayUtils.runDragonBonesArmature(this.effectnew,"newAnimation");
		}
		switch(icondata.type)
		{
			case Const.TYPE_QZNN:
				this.effectfront = xlLib.DisplayUtils.createDragonBonesDisplay('bg_qiangzhuangniuniu',"Sprite");
				armatureDisplay = this.effectfront.getDisplay();
				armatureDisplay.x = 650;
				armatureDisplay.y = 260;

				this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('qznn_rukou',"armatureName");
				armatureIconDisplay = this.effectIcon.getDisplay();
				armatureIconDisplay.x = 650;
				armatureIconDisplay.y = 260;
				break;
		}

		this.addChildAt(armatureIconDisplay,0);
		dragonBones.WorldClock.clock.add(this.effectIcon);
		xlLib.DisplayUtils.runDragonBonesArmature(this.effectIcon,"newAnimation");

		this.addChild(armatureDisplay);
        dragonBones.WorldClock.clock.add(this.effectfront);
		xlLib.DisplayUtils.runDragonBonesArmature(this.effectfront,"Sprite");


		this.effectmask = xlLib.DisplayUtils.createDragonBonesDisplay('bg_daliuguang',"Sprite");
		dragonBones.WorldClock.clock.add(this.effectmask);
		armatureDisplay = this.effectmask.getDisplay();
		armatureDisplay.width = this.width;
		armatureDisplay.height = this.height;
		armatureDisplay.x = 650;
		armatureDisplay.y = 260;
		this.addChild(armatureDisplay);
		xlLib.DisplayUtils.runDragonBonesArmature(this.effectmask,"Sprite");
	}
}