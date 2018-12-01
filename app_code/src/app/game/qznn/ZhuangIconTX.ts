class ZhuangIconTX extends eui.Component {
    public image1:eui.Image;
    public image0:eui.Image;
    public image:eui.Image;

    public zhuangjia: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "ZhuangIconSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.zhuangjia.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        
    }

    private onTweenComplete(evt:egret.Event):void
    {
        this.zhuangjia.stop();
    }

    public play():void
    {
        this.zhuangjia.play(0);   
    }


    public stop():void
    {
        this.zhuangjia.stop();   
    }


    public destroy(): void {
  
    }
}