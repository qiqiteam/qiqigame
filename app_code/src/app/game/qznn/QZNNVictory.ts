/**
 * 游戏中显示用户信息
 */
class QZNNVictory extends eui.Component {
    public image: eui.Image;
    public image3: eui.Image;
    public image6: eui.Image;
    public image5: eui.Image;
    public image0: eui.Image;
    public image2: eui.Image;
    public image1: eui.Image;
    public image4: eui.Image;


    public youxishengli: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "QZNNVictorySkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.youxishengli.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

    }

    private onTweenComplete(evt: egret.Event): void {
        this.youxishengli.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }

    public play(): void {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(15));
        this.youxishengli.play(0);
    }
    
    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }

    public stop(): void {
        this.youxishengli.stop();
    }


    public destroy(): void {
        this.youxishengli.removeEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    }
}