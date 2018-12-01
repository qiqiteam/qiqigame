class QZNNHEff extends eui.Component {
	public image: eui.Image;
	public image0: eui.Image;
	public image1: eui.Image;
	public image2: eui.Image;


	public win: egret.tween.TweenGroup;
	constructor() {
		super();
		this.skinName = "QZNNHEffSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
		this.win.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

	}

	private onTweenComplete(evt: egret.Event): void {
		this.win.stop();
	}

	public play(): void {
		this.win.play(0);
	}


	public stop(): void {
		this.win.stop();
	}


	public destroy(): void {

	}
}