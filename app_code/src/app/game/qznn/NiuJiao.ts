class NiuJiao extends eui.Component implements INiuNiuBetEffect {
    public image: eui.Image;
    public image0: eui.Image;
    public image1: eui.Image;


    public niujiao: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "NiuJiaoSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.niujiao.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

    }

    private onTweenComplete(evt: egret.Event): void {
        this.niujiao.play(0);
    }

    public play(): void {
        this.niujiao.play(0);
    }


    public stop(): void {
        this.niujiao.stop();
    }


    public destroy(): void {

    }
}