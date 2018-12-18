class NiyingleEffect extends eui.Component {
    public image:eui.Image;
    public image0:eui.Image;
    public image1:eui.Image;
    public image5:eui.Image;
    public image4:eui.Image;
    public image2:eui.Image;
    public image3:eui.Image;
    public image6:eui.Image;
    public image7:eui.Image;
    public image8:eui.Image;

	public donghua: egret.tween.TweenGroup;
	constructor() {
		super();
		this.skinName = "NiyingleSkin";
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