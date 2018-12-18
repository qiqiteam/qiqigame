class BJLjiesuan1 extends eui.Component {

    public image: eui.Image;
    public image0: eui.Image;
    public image6: eui.Image;
    public image5: eui.Image;
    public image8: eui.Image;
    public image7: eui.Image;
    public image4: eui.Image;
    public image3: eui.Image;
    public image2: eui.Image;
    public image1: eui.Image;
    public image9: eui.Image;
    public image10: eui.Image;
    public image11: eui.Image;
    public image12: eui.Image;

    public zhuangyin: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "BJLjiesuan_1Skin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.zhuangyin.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

    }

    private onTweenComplete(evt: egret.Event): void {
        this.visible = false;
        this.zhuangyin.stop();
    }

    public play(): void {
        this.visible = true;
        this.zhuangyin.play(0);
        this.playClickSound(BJLUtil.getInstance().getSoundEffect(11));
    }

    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }

    public stop(): void {
        this.zhuangyin.stop();
    }


    public destroy(): void {

    }
}