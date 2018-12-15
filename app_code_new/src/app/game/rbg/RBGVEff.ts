class RBGVEff extends eui.Component {
    public image:eui.Image;
    public image0:eui.Image;
    public image1:eui.Image;
    public image2:eui.Image;
    public image3:eui.Image;
    public image4:eui.Image;
    public image5:eui.Image;
    public image6:eui.Image;
    public image7:eui.Image;
    public image8:eui.Image;
    public image9:eui.Image;

    public kaishi: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "RBGVEffSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.kaishi.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

    }

    private onTweenComplete(evt: egret.Event): void {
        this.kaishi.stop();
    }

    public play(): void {
        this.kaishi.play(0);
    }


    public stop(): void {
        this.kaishi.stop();
    }


    public destroy(): void {

    }
}