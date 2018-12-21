class ComparisonCardView extends egret.DisplayObjectContainer {
	private leftIcon: eui.Image;
	private rightIcon: eui.Image;
	private niyingleVSEffect: NiyingleVSEffect;
	private zjh_huaheng: DragonBonesSprite;

	public constructor() {
		super();
		this.init();
	}

	public setIcon(open: number, byopen: number): void {
		if (open < byopen) {
			this.zjh_huaheng.x = 1050;
			this.zjh_huaheng.y = 450;
		} else {
			this.zjh_huaheng.x = 400;
			this.zjh_huaheng.y = 350;
		}
	}
	public setPlayer(playerId: string, ptherPlayerid: string, isWin: boolean): void {
		if (isWin) {
			this.zjh_huaheng.x = 1050;
			this.zjh_huaheng.y = 450;
		} else {
			this.zjh_huaheng.x = 400;
			this.zjh_huaheng.y = 350;
		}

	}

	private init() {
		this.niyingleVSEffect = new NiyingleVSEffect();
		this.addChild(this.niyingleVSEffect);
		this.niyingleVSEffect.play();
		// this.niyingleVSEffect.onPlayComplete = ()=>{
		// 	  this.zjh_huaheng.play("Sprite");
		// };
		//this.leftIcon = new eui.Image("F10_03_png");
		this.leftIcon = new eui.Image("women6_png");
		
		this.leftIcon.x = 300;
		this.leftIcon.y = 250;
		this.addChild(this.leftIcon);

		// this.rightIcon = new eui.Image("F10_03_png");
		this.rightIcon = new eui.Image("women6_png");
		this.rightIcon.x = 950;
		this.rightIcon.y = 350;
		this.addChild(this.rightIcon);

		this.zjh_huaheng = new DragonBonesSprite('zjh_huaheng', "Sprite");
		this.addChild(this.zjh_huaheng);
		// this.zjh_huaheng.x=300;
		// this.zjh_huaheng.y=300;
		// this.zjh_huaheng.play("Sprite");

	}
}