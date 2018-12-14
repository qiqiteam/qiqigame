class BJLtingzhi extends eui.Component {

    public image0: eui.Image;
    public image4: eui.Image;
    public image1: eui.Image;
    public image2: eui.Image;
    public image3: eui.Image;
    public image: eui.Image;


    
    public bjlkaishi: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "BJLtingzhiSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.bjlkaishi.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

    }

    private onTweenComplete(evt: egret.Event): void {
        this.bjlkaishi.stop();
    }

    public play(): void {
        this.bjlkaishi.play(0);
    }


    public stop(): void {
        this.bjlkaishi.stop();
    }


    public destroy(): void {

    }
}