class GameIconItem extends eui.Component {
    private icondata:GameIconData;
	private  effecthot:DragonBonesSprite;
	private  effectnew:DragonBonesSprite;
	private  effectfront:DragonBonesSprite;
	private  effectIcon:DragonBonesSprite;
	private  effectmask:DragonBonesSprite;
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

		this.effectmask = new DragonBonesSprite('bg_xiaoliuguang',"Sprite");
		this.effectmask.width = this.width;
		this.effectmask.height = this.height;
		this.effectmask.x = 350;
		this.effectmask.y = 250;
		this.addChild(this.effectmask);
		this.effectmask.play("Sprite");
        if(icondata.ishot)
		{
		  	this.effecthot = new DragonBonesSprite('bg_remen',"Armature");
			this.effecthot.x = 25;
			this.effecthot.y = 92;
			this.addChild(this.effecthot);
			this.effecthot.play("newAnimation");
		}
		if(icondata.isNew)
		{
		  	this.effectnew = new DragonBonesSprite('bg_xin',"Armature");
			this.effectnew.x = 80;
			this.effectnew.y = 92;
			this.addChild(this.effectnew);
			this.effectnew.play("newAnimation");
		}

        switch(icondata.type){
          	case Const.TYPE_TBNN:
			  	this.effectfront = new DragonBonesSprite('bg_tongbiniuniu',"Sprite");
				this.effectfront.x = 63;
				this.effectfront.y = -15;

				this.effectIcon = new DragonBonesSprite('tbnn_rukou',"armatureName");
				this.effectIcon.x = 63;
				this.effectIcon.y = -15;
		    	break;
			case Const.TYPE_JINGDIANBAIJIALE:
				this.effectfront = new DragonBonesSprite('bg_baijiale',"Sprite");
				this.effectfront.x = 70;
				this.effectfront.y = 255;

				this.effectIcon = new DragonBonesSprite('bjl_rukou',"armatureName");
				this.effectIcon.x = 70;
				this.effectIcon.y = 255;
		    	break;
			case Const.TYPE_ERBAGANGJINDIAN:
				this.effectfront = new DragonBonesSprite('bg_ewrbagang',"Sprite");
				this.effectfront.x = -220;
				this.effectfront.y = 255;

				this.effectIcon = new DragonBonesSprite('ebg_rukou',"armatureName");
				this.effectIcon.x = -220;
				this.effectIcon.y = 255;
		    	break;
			case Const.TYPE_QRNIUNIU:
				this.effectfront = new DragonBonesSprite('bg_bairenniuniu',"Sprite");
				this.effectfront.x = 350;
				this.effectfront.y = -15;

				this.effectIcon = new DragonBonesSprite('brnn_rukou',"armatureName");
				this.effectIcon.x = 350;
				this.effectIcon.y = -15;
		    	break;
			case Const.TYPE_JINGDIANJINHUA:
				this.effectfront = new DragonBonesSprite('bg_zhajinhua',"Sprite");
				this.effectfront.x = 350;
				this.effectfront.y = 255;

				this.effectIcon = new DragonBonesSprite('zjh_rukou',"armatureName");
				this.effectIcon.x = 350;
				this.effectIcon.y = 255;
		    	break;
		}

		this.addChildAt(this.effectIcon,0);
		this.effectIcon.play("newAnimation");

		this.addChild(this.effectfront);
		this.effectfront.play("Sprite");
	}
}