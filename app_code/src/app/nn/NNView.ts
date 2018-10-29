/**牛牛模块界面  */
class NNView extends eui.Component {
	public bgImg: eui.Image;
	public bg_grp: eui.Group;

	constructor(isReConnect: boolean = false) {
		super();
		this.skinName = "NNViewSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	

	private setScreenSize(scaleMode: string): void {
		egret.MainContext.instance.stage.scaleMode = scaleMode;
		xlLib.ScreenUtils.onResizeNotify();
	}

	/*添加适配*/
	public resize(): void {
		if (this.bgImg) {
			this.bgImg.width = xlLib.Global.screenWidth;
			this.bgImg.height = xlLib.Global.screenHeight;
		}
	}




	public destroy() {
		this.clearTime();
		xlLib.SoundMgr.instance.stopSounds();
	}

	/**清除倒计时*/
	private clearTime(): void {
		// if (this.timer) {
		// 	this.timer.stop();
		// 	this.timeTxt.visible = false;
		// 	this.time_grp.visible = false;
		// 	this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
		// 	this.timer = null;
		// }
	}




	/**开始倒计时*/
	private startCountDown(time: number): void {
		// this.timeTxt.text = time + "";
		// this.timeTxt.visible = true;
		// this.time_grp.visible = true;
		// this.time = time;
		// if (this.timer == null) {
		// 	this.timer = new egret.Timer(1000);
		// 	this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
		// 	this.timer.start();
		// }
	}
}