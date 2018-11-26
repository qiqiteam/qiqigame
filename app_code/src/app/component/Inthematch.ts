class Inthematch extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "InthematchSkin";
	}

	public _dian_0: eui.Image;
	public _dian_1: eui.Image;
	public _dian_2: eui.Image;

	public time: number;        //秒数
	public timer: egret.Timer;  //计时器

	protected partAdded(partName: string, instance: any): void {
		this.clearTime();
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.initData();
	}

	private initData() {
		this._dian_0.visible = false;
		this._dian_1.visible = false;
		this._dian_2.visible = false;
		this.startCountDown(0);
	}
	/**开始倒计时*/
	private startCountDown(time: number): void {
		this.time = time;
		if (this.timer == null) {
			this.timer = new egret.Timer(1000);
			this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
			this.timer.start();
		}
	}


	/**倒计时处理*/
	private timerFunc(evt: egret.TimerEvent): void {
		for(let i:number=0;i<this.time%3;i++){
            this['_dian_' + i].visible = true;
		}
		this.time++;
	}

	/**清除倒计时*/
	private clearTime(): void {
		if (this.timer) {
			this.timer.stop();
			// this.timeTxt.visible = false;
			this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
			this.timer = null;
		}
	}
}