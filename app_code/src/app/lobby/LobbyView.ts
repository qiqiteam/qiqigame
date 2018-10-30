/**
 * 大厅界面
 * */
class LobbyView extends eui.Component {

	public bgImg:eui.Image;
	public _set:eui.Button;
	public _service:eui.Button;
	public _information:eui.Button;
	public _generalize:eui.Button;
	public _safebox:eui.Button;
	public _welfare:eui.Button;
	public _challenge:eui.Button;
	public _topup:eui.Button;
	public _shoppingmall:eui.Button;
	public btn_wanfa:eui.Image;
	public btn_pk:eui.Image;
	public btn_mahjong:eui.Image;
	public btn_game:eui.Image;
	public dis_wanfa:eui.Group;
	public dis_pk:eui.Group;
	public dis_mahjong:eui.Group;
	public dis_game:eui.Group;
	public group_wanfa:eui.Group;
	public group_pk:eui.Group;
	public group_mahjong:eui.Group;
	public group_game:eui.Group;


	constructor() {
		super();
		this.skinName = "LobbyViewSkin";
		//this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		//EventUtil.addEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);

		this.btn_wanfa.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnWanfa, this);
		this.btn_pk.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnPk, this);
		this.btn_mahjong.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnMahjong, this);
		this.btn_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnGame, this);
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	private _onBtnWanfa(e:egret.TouchEvent):void {
		this._btnHide();
		this.dis_wanfa.visible = true;
		this.group_wanfa.visible = true;
	}

	private _onBtnPk(e:egret.TouchEvent):void {
		this._btnHide();
		this.dis_pk.visible = true;
		this.group_pk.visible = true;
	}

	private _onBtnMahjong(e:egret.TouchEvent):void {
		this._btnHide();
		this.dis_mahjong.visible = true;
		this.group_mahjong.visible = true;
	}

	private _onBtnGame(e:egret.TouchEvent):void {
		this._btnHide();
		this.dis_game.visible = true;
		this.group_game.visible = true;
	}

	private _btnHide() {
		this.dis_wanfa.visible = false;
		this.dis_pk.visible = false;
		this.dis_mahjong.visible = false;
		this.dis_game.visible = false;
		this.group_wanfa.visible = false;
		this.group_pk.visible = false;
		this.group_mahjong.visible = false;
		this.group_game.visible = false;
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
