class TenshuNiuBei extends eui.Component implements INiuNiuBetEffect{
    public image:eui.Image;
    public image0:eui.Image;
    public image1:eui.Image;
    public image2:eui.Image;

    public teshuniu: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "TenshuNiuBeiSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.teshuniu.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        
    }

    private onTweenComplete(evt:egret.Event):void
    {
        this.teshuniu.stop();
    }

    public play(str:string =""):void
    {
        this.image0.source = str;
        this.teshuniu.play(0);   
    }


    public stop():void
    {
        this.teshuniu.stop();   
    }


    public destroy(): void {
  
    }
}