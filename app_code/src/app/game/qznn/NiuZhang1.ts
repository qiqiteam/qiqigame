class NiuZhang1 extends eui.Component {

    public image: eui.Image;
    public image0: eui.Image;


    public qiangzhuang2: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "DZVEffSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.qiangzhuang2.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

    }

    private onTweenComplete(evt: egret.Event): void {
        this.visible = false;
        this.qiangzhuang2.stop();
    }

    public play(): void {
        this.visible = true;
        this.qiangzhuang2.play(0);
    }


    public stop(): void {
        this.visible = false;
        this.qiangzhuang2.stop();
    }


    public destroy(): void {

    }
}