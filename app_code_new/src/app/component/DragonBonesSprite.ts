class DragonBonesSprite  extends egret.DisplayObjectContainer{
	private animator:uiCore.Animator;
	private isPlay:boolean;
	private isStop:boolean;
	private animationName:string;
	private playTimes:number = 0;
	private isDestroy:boolean;
	public onPlayComplete:Function;
	constructor(source: string,bones?: string){
        super();
	  	this.init(source,bones);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    }

    private init(source: string,bones?: string){
		if(this.animator == null) {
            this.animator = new uiCore.Animator();
			this.animator.defentAnimationName = bones;
            this.animator.source = source;
            this.addChild(this.animator);
        }
	}

	public play(animationName:string,playTimes?: number):void
	{
		this.animator.play(animationName,playTimes);
	}

	public stop(animationName?:string):void
	{
		this.animationName = animationName;
		this.animator.stop();
	}

	public destroy(){
		this.isDestroy = true;
		this.isPlay = false;
		this.isStop = false;
		this.animator = null;
	}
}