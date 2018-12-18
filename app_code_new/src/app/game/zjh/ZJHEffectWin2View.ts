class ZJHEffectWin2View extends eui.Component {
	public image:eui.Image;
	public image0:eui.Image;

	public donghua: egret.tween.TweenGroup;
	constructor() {
		super();
		this.skinName = "ZJHEffectWin2Skin";
	}

	protected childrenCreated() {
		super.childrenCreated();
		this.anchorOffsetX = -this.width/2;
		this.anchorOffsetY = -this.height/2;
		this.donghua.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
	}

	private onTweenComplete(evt: egret.Event): void {
		this.donghua.stop();
	}

	public play(): void {
		this.donghua.play(0);
	}


	public stop(): void {
		this.donghua.stop();
	}


	public destroy(): void {

	}
}