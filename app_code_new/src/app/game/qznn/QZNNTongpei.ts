/**
 * 游戏中显示用户信息
 */
class QZNNTongpei extends eui.Component {
    public image: eui.Image;
    public image0: eui.Image;
    public image1: eui.Image;
    public image2: eui.Image;
    public image3: eui.Image;

    public shibai: egret.tween.TweenGroup;
    constructor() {
        super();
        this.skinName = "QZNNTongpeiSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.shibai.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);

    }

    private onTweenComplete(evt: egret.Event): void {
        this.shibai.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }

    public play(): void {
        this.visible = true;
        this.playClickSound(QZNNUtil.getInstance().getSoundEffect(17));
        this.shibai.play(0);
    }

    public playClickSound(res): void {
        xlLib.SoundMgr.instance.playSound(res + "_mp3");
    }


    public stop(): void {
        this.visible = false;
        this.shibai.stop();
    }


    public destroy(): void {
        this.shibai.removeEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
    }
}