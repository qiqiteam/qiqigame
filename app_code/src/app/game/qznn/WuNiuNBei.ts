class WuNiuNBei extends eui.Component {
    public image:eui.Image;
    public image0:eui.Image;


    public niuniuanmin: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "WuNiuNBeiSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.niuniuanmin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        
    }

    private onTweenComplete(evt:egret.Event):void
    {
        this.niuniuanmin.stop();
    }

    public play():void
    {
        this.niuniuanmin.play(0);   
    }


    public stop():void
    {
        this.niuniuanmin.stop();   
    }


    public destroy(): void {
  
    }
}