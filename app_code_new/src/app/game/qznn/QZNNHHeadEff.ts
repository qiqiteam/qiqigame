class QZNNHHeadEff extends eui.Component {

	public image: eui.Image;



	public qznnwin: egret.tween.TweenGroup;
	constructor() {
		super();
		this.skinName = "QZNNHHeadEffSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
		this.qznnwin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

	}

	private onTweenComplete(evt: egret.Event): void {
		this.qznnwin.play(0);
	}

	public play(): void {
		this.qznnwin.play(0);
	}


	public stop(): void {
		this.qznnwin.stop();
	}


	public destroy(): void {

	}
}