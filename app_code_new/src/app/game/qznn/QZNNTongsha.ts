class QZNNTongsha extends eui.Component {
	public image:eui.Image;
	public image0:eui.Image;
	public image1:eui.Image;
	public image8:eui.Image;
	public image7:eui.Image;
	public image6:eui.Image;
	public image5:eui.Image;
	public image4:eui.Image;
	public image3:eui.Image;
	public image2:eui.Image;
	public image15:eui.Image;
	public image14:eui.Image;
	public image13:eui.Image;
	public image12:eui.Image;
	public image11:eui.Image;
	public image10:eui.Image;
	public image9:eui.Image;

    public tongsha: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "QZNNTongshaSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.tongsha.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        
    }

    private onTweenComplete(evt:egret.Event):void
    {
        this.tongsha.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }

    public play():void
    {
        this.visible = true;
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(16));
        this.tongsha.play(0);   
    }

    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }

    public stop():void
    {
        this.visible = false;
        this.tongsha.stop();   
    }


    public destroy(): void {
        this.tongsha.removeEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    }
}