class ComparisonCardView  extends egret.DisplayObjectContainer{
	private leftIcon:eui.Image;
	private rightIcon:eui.Image;
	private niyingleVSEffect:NiyingleVSEffect;
    private vshuahen:DragonBonesSprite;

	public constructor() {
		 super();
		 this.init();
	}

	public setPlayer(playerId:string,ptherPlayerid:string,isWin:boolean):void
	{
		if(isWin){
			this.vshuahen.x = 1050;
			this.vshuahen.y = 450;
		}else{
			this.vshuahen.x = 400;
			this.vshuahen.y = 350;
		}
		
	}



	private init(){
		this.niyingleVSEffect = new NiyingleVSEffect();
		this.addChild(this.niyingleVSEffect);
		this.niyingleVSEffect.play();
		// this.niyingleVSEffect.onPlayComplete = ()=>{
		// 	  this.vshuahen.play("Sprite");
		// };
		this.leftIcon = new eui.Image("F10_03_png");
		this.leftIcon.x = 300;
		this.leftIcon.y = 250;
		this.addChild(this.leftIcon);

		this.rightIcon = new eui.Image("F10_03_png");
		this.rightIcon.x = 950;
		this.rightIcon.y = 350;
		this.addChild(this.rightIcon);

		this.vshuahen = new DragonBonesSprite('vshuahen',"Sprite");
		this.addChild(this.vshuahen);

	}
}