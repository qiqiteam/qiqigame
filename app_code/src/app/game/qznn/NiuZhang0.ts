class NiuZhang0 extends eui.Component {

    public image: eui.Image;
    public image0: eui.Image;


    public qiangzhuang1: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "DZHEffSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.qiangzhuang1.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

    }

    private onTweenComplete(evt: egret.Event): void {
        this.qiangzhuang1.stop();
        this.visible = false;
    }

    public play(): void {
        this.qiangzhuang1.play(0);
        this.visible = true;
    }


    public stop(): void {
        this.qiangzhuang1.stop();
    }


    public destroy(): void {

    }
}