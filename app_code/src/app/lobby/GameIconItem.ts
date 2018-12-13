class GameIconItem extends eui.Component {
	public bg_img:eui.Image;
	public icon_img:eui.Image;
    private icondata:GameIconData;
	private  effecthot:dragonBones.Armature;
	private  effectnew:dragonBones.Armature;
	private  effectIcon:dragonBones.Armature;
	private  effectmask:dragonBones.Armature;
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
		xlLib.DisplayUtils.destoryDragonBonesArmature(this.effecthot,"newAnimation");
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
		let armatureDisplay:dragonBones.EgretArmatureDisplay;
        if(icondata.ishot)
		{
		  	this.effecthot = xlLib.DisplayUtils.createDragonBonesDisplay('bg_remen',"Armature");
			dragonBones.WorldClock.clock.add(this.effecthot);
			armatureDisplay = this.effecthot.getDisplay();
			armatureDisplay.x = 25;
			armatureDisplay.y = 92;
			this.addChild(armatureDisplay);
			xlLib.DisplayUtils.runDragonBonesArmature(this.effecthot,"newAnimation");
		}
		if(icondata.isNew)
		{
		  	this.effectnew = xlLib.DisplayUtils.createDragonBonesDisplay('bg_xin',"Armature");
			dragonBones.WorldClock.clock.add(this.effectnew);
			armatureDisplay = this.effectnew.getDisplay();
			armatureDisplay.x = 80;
			armatureDisplay.y = 92;
			this.addChild(armatureDisplay);
			xlLib.DisplayUtils.runDragonBonesArmature(this.effectnew,"newAnimation");
		}

        switch(icondata.type){
          	case Const.TYPE_TBNN:
			  	this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('bg_tongbiniuniu',"Sprite");
				armatureDisplay = this.effectIcon.getDisplay();
				armatureDisplay.x = 80;
				this.addChild(armatureDisplay);
		    	break;
			case Const.TYPE_JINGDIANBAIJIALE:
				this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('bg_baijiale',"Sprite");
				armatureDisplay = this.effectIcon.getDisplay();
				armatureDisplay.x = 80;
				armatureDisplay.y = 250;
				this.addChild(armatureDisplay);
		    	break;
			case Const.TYPE_ERBAGANGJINDIAN:
				this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('bg_ewrbagang',"Sprite");
				armatureDisplay = this.effectIcon.getDisplay();
				armatureDisplay.x = -200;
				armatureDisplay.y = 250;
				this.addChild(armatureDisplay);
		    	break;
			case Const.TYPE_QRNIUNIU:
				this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('bg_bairenniuniu',"Sprite");
				armatureDisplay = this.effectIcon.getDisplay();
				armatureDisplay.x = 380;
				// armatureDisplay.y = 250;
				this.addChild(armatureDisplay);
		    	break;
			case Const.TYPE_JINGDIANJINHUA:
				this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('bg_zhajinhua',"Sprite");
				armatureDisplay = this.effectIcon.getDisplay();
				armatureDisplay.x = 380;
				armatureDisplay.y = 250;
				this.addChild(armatureDisplay);
		    	break;
		}

        dragonBones.WorldClock.clock.add(this.effectIcon);
		xlLib.DisplayUtils.runDragonBonesArmature(this.effectIcon,"Sprite");


		this.effectmask = xlLib.DisplayUtils.createDragonBonesDisplay('bg_xiaoliuguang',"Sprite");
		dragonBones.WorldClock.clock.add(this.effectmask);
		armatureDisplay = this.effectmask.getDisplay();
		armatureDisplay.width = this.width;
		armatureDisplay.height = this.height;
		armatureDisplay.x = 350;
		armatureDisplay.y = 250;
		this.addChild(armatureDisplay);
		xlLib.DisplayUtils.runDragonBonesArmature(this.effectmask,"Sprite");
	}
}