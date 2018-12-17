class DragonBonesSprite  extends egret.DisplayObjectContainer{
	private armature:dragonBones.Armature;
	constructor(source: string,bones?: string){
        super();
	  	this.init(source,bones);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    }

    private init(source: string,bones?: string){
		this.armature = xlLib.DisplayUtils.createDragonBonesDisplay(source,bones);
        let armatureDisplay:dragonBones.EgretArmatureDisplay = this.armature.getDisplay();
		this.addChild(armatureDisplay);
	}

	public play(animationName:string):void
	{
		xlLib.DisplayUtils.runDragonBonesArmature(this.armature,animationName);
	}

	public stop(animationName?:string):void
	{
		xlLib.DisplayUtils.stopDragonBonesArmature(this.armature,animationName);
	}

	public destroy(){
		xlLib.DisplayUtils.destoryDragonBonesArmature(this.armature);
	}
}