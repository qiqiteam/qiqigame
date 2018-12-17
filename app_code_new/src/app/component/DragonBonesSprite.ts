class DragonBonesSprite  extends egret.DisplayObjectContainer{
	private armatureDisplay:dragonBones.EgretArmatureDisplay;
	private isPlay:boolean;
	private isStop:boolean;
	private animationName:string;
	private isDestroy:boolean;
	constructor(source: string,bones?: string){
        super();
	  	this.init(source,bones);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    }

    private init(source: string,bones?: string){
		xlLib.DisplayUtils.createDragonBonesDisplay(source,bones,this.onDragonBonesCreate,this);
	}

	private onDragonBonesCreate(armatureDisplay:dragonBones.EgretArmatureDisplay):void
	{
        this.armatureDisplay = armatureDisplay;
		this.addChild(this.armatureDisplay);
		if(this.isPlay){
			xlLib.DisplayUtils.runDragonBonesArmature(this.armatureDisplay.armature,this.animationName);
		}
		if(this.isStop){
			xlLib.DisplayUtils.stopDragonBonesArmature(this.armatureDisplay.armature,this.animationName);
		}
		if(this.isDestroy){
			xlLib.DisplayUtils.destoryDragonBonesArmature(this.armatureDisplay.armature);
		}
	}

	public play(animationName:string):void
	{
		this.animationName = animationName;
		this.isPlay = true;
		this.isStop = false;
		if(this.armatureDisplay){
			xlLib.DisplayUtils.runDragonBonesArmature(this.armatureDisplay.armature,this.animationName);
		}
	}

	public stop(animationName?:string):void
	{
		this.animationName = animationName;
		this.isPlay = false;
		this.isStop = true;
		if(this.armatureDisplay){
			xlLib.DisplayUtils.stopDragonBonesArmature(this.armatureDisplay.armature,this.animationName);
		}
	}

	public destroy(){
		this.isDestroy = false;
		this.isPlay = false;
		this.isStop = false;
		if(this.armatureDisplay){
			xlLib.DisplayUtils.destoryDragonBonesArmature(this.armatureDisplay.armature);
		}
	}
}