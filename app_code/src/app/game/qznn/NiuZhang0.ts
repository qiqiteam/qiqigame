class NiuZhang0 extends eui.Component {

    public niuniuanmin: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "DZHEffSkin";
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