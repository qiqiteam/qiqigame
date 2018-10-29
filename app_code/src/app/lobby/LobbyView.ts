/**
 * 大厅界面
 * */
class LobbyView extends eui.Component {
	public bgImg: eui.Image;
	constructor() {
		super();
		this.skinName = "LobbyViewSkin";
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		EventUtil.addEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	private onTouchHandler(evt: egret.Event): void {
	}

	/**添加适配处理*/
	public resize(): void {
		if (this.bgImg) {
			this.bgImg.width = xlLib.Global.screenWidth;
			this.bgImg.height = xlLib.Global.screenHeight;
		}
	}

	private onSocketClose(data: any): void {
		
	}

	private onNotify(data: any): void {
		
	}

	
	public destroy() {
		EventUtil.removeEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		egret.Tween.removeTweens(this);
	}
}
