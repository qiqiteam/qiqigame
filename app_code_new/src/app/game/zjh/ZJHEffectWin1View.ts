class ZJHEffectWin1View extends eui.Component {
	public image:eui.Image;
	public image0:eui.Image;

	public donghua: egret.tween.TweenGroup;
	constructor() {
		super();
		this.skinName = "ZJHEffectWin1Skin";
	}

	protected childrenCreated() {
		super.childrenCreated();
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