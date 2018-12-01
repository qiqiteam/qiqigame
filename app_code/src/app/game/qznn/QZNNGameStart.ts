/**
 * 游戏中显示用户信息
 */
class QZNNGameStart extends eui.Component {
    public image2: eui.Image;
    public image: eui.Image;
    public image0: eui.Image;
    public image1: eui.Image;
    public image3: eui.Image;
    public image4: eui.Image;
    public image5: eui.Image;
    public image6: eui.Image;
    public image7: eui.Image;
    public image8: eui.Image;
    public image9: eui.Image;
    public image10: eui.Image;
    public image11: eui.Image;
    public image12: eui.Image;
    public image13: eui.Image;
    public image14: eui.Image;
    public image15: eui.Image;
    public image16: eui.Image;
    public image17: eui.Image;
    public image21: eui.Image;
    public image18: eui.Image;
    public image19: eui.Image;
    public image22: eui.Image;
    public image20: eui.Image;

    public kaishiyouxi: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "QZNNGameStartSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();

        this.kaishiyouxi.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

    }

    private onTweenComplete(evt: egret.Event): void {
        this.kaishiyouxi.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }

    public play(): void {
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(14));
        this.kaishiyouxi.play(0);
    }

    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }

    public stop(): void {
        this.kaishiyouxi.stop();
    }


    public destroy(): void {

    }
}