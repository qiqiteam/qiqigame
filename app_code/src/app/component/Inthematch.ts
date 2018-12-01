class Inthematch extends eui.Component {
	public constructor() {
		super();
		this.skinName = "InthematchSkin";
	}

	public _quxiao: eui.Button;
	public _waitfor: eui.Label;


	public time: number;        //秒数
	public timer: egret.Timer;  //计时器

	public str: string;

	protected partAdded(partName: string, instance: any): void {
		this.clearTime();
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.initData();
		this._quxiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

		EventUtil.addEventListener(EventConst.onUserLeave, this.onleave, this);
	}
	private onleave(data: any) {
		if(data._obj.code == 200){
			xlLib.PopUpMgr.removePopUp(Inthematch, 1);
		}
	}

	private onClick(e: egret.TouchEvent) {
		this.quxiaopipei();
	}
	/**取消匹配 */
	private quxiaopipei() {
		let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_NIUNIU);
		let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_QZNN);
		let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
		let senddata: any = {
			userid: UserInfo.getInstance().uid,
			token: UserInfo.getInstance().token, playway: playway.id
		};
		xlLib.WebSocketMgr.getInstance().send(EventConst.niuniu_leave, senddata, (data) => {
		}, this);
	}

	private initData() {
		this.str = this._waitfor.text;
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
		for (let i: number = 0; i <= this.time % 4; i++) {
			switch (i) {
				case 0: this._waitfor.text = this.str + ''; break;
				case 1: this._waitfor.text = this.str + '.'; break;
				case 2: this._waitfor.text = this.str + '..'; break;
				case 3: this._waitfor.text = this.str + '...'; break;
			}
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