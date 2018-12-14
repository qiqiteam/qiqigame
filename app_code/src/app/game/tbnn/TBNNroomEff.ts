class TBNNroomEff extends eui.Component {
	public bg_img:eui.Image;
	public image0:eui.Image;
	public image2:eui.Image;
	public image3:eui.Image;
	public image1:eui.Image;
	public image10:eui.Image;
	public image9:eui.Image;
	public image8:eui.Image;
	public image7:eui.Image;
	public image6:eui.Image;
	public image11:eui.Image;
	public image12:eui.Image;
	public image13:eui.Image;
	public image14:eui.Image;
	public image15:eui.Image;
	public image16:eui.Image;
	public image17:eui.Image;
	public image18:eui.Image;
	public image25:eui.Image;
	public image19:eui.Image;
	public image22:eui.Image;
	public image21:eui.Image;
	public image23:eui.Image;
	public image20:eui.Image;
	public image24:eui.Image;
	public image29:eui.Image;
	public image28:eui.Image;
	public image27:eui.Image;
	public image26:eui.Image;
	public image30:eui.Image;
	public image36:eui.Image;
	public image37:eui.Image;
	public image32:eui.Image;
	public image34:eui.Image;
	public image35:eui.Image;
	public image31:eui.Image;
	public image33:eui.Image;
	public image38:eui.Image;


	public dicheng: egret.tween.TweenGroup;
	public wangzhefang: egret.tween.TweenGroup;
	public tiyanfang: egret.tween.TweenGroup;
	public chujifang: egret.tween.TweenGroup;
	public zhongjifang: egret.tween.TweenGroup;
	public gaojifang: egret.tween.TweenGroup;
	public zhizunfang: egret.tween.TweenGroup;

	constructor() {
		super();
		this.skinName = "TBNNroomEffSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
		this.dicheng.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
		this.wangzhefang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
		this.tiyanfang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
		this.chujifang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
		this.zhongjifang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
		this.gaojifang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
		this.zhizunfang.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
	}

	private onTweenComplete(evt: egret.Event): void {
		evt.target.play(0);
	}

	public play(): void {
		this.dicheng.play(0);
		this.wangzhefang.play(0);
		this.tiyanfang.play(0);
		this.chujifang.play(0);
		this.zhongjifang.play(0);
		this.gaojifang.play(0);
		this.zhizunfang.play(0);
	}


	public stop(): void {
		this.dicheng.stop();
		this.wangzhefang.stop();
		this.tiyanfang.stop();
		this.chujifang.stop();
		this.zhongjifang.stop();
		this.gaojifang.stop();
		this.zhizunfang.stop();
	}


	public destroy(): void {

	}
}