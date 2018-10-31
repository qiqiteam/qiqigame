/**
 * 登录界面
 * */
class LoginView extends eui.Component {
	public bgImg: eui.Image;
	public username_txt: eui.EditableText;
	public passwd_txt: eui.EditableText;
	public zzzh_btn: eui.CheckBox;
	public login_btm: eui.Button;


	private bjlSubscription: boolean = false;
	private lfSubscription: boolean = false;
	private xjSubscription: boolean = false;
	private nnSubscription: boolean = true;
	constructor() {
		super();
		this.skinName = "LoginViewSkin";
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		EventUtil.addEventListener(EventConst.ON_GET_TOKEN_FAIL, this.onTokenFail, this);
		EventUtil.addEventListener(EventConst.ON_LOGIN_SUCCES, this.onLoginSucces, this);
		EventUtil.addEventListener(EventConst.ON_LOGIN_FAIL, this.onLoginFail, this);
		EventUtil.addEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this.resize();

		this.onStarLogin();
	}

	public resize(): void {
		if (this.bgImg) {
			this.bgImg.width = xlLib.Global.screenWidth;
			this.bgImg.height = xlLib.Global.screenHeight;
		}
	}

	private onSocketFail(data: any): void {
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
	}

	private onTokenFail(data: any): void {
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
	}

	private onLoginSucces(data: any): void {
		let info = data.param;
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		if (this.zzzh_btn.selected) {
			egret.localStorage.setItem("username", this.username_txt.text);
		}
		else {
			egret.localStorage.removeItem("username");
		}
		//初始化游戏数据
		// this.initPlayerData(info.msg.player);
		// this.initGameData(info.msg.plaza[0]);	
		//切换游戏场景
		xlLib.SceneMgr.instance.changeScene(Lobby);
	}

	private onLoginFail(data: any): void {
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
	}

	protected childrenCreated() {
		super.childrenCreated();
		this.bjlSubscription = false;
		this.lfSubscription = false;
		let username = egret.localStorage.getItem("username");
		if (username && username != "") {
			this.username_txt.text = username;
		}
		else {
			this.username_txt.text = "";
		}
	}

	private onTouchHandler(evt: egret.Event): void {
		if (evt.target == this.login_btm) {

			if (this.username_txt.text == "" || this.passwd_txt.text == "") {
				xlLib.TipsUtils.showFloatWordTips("用户名或密码不能为空！");
				return;
			}
			if (!GlobalData.hasNetwork) {
				xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
				return;
			}

			xlLib.WebSocketMgr.getInstance().send("gamestatus", { "token":xlLib.WebSocketMgr.getInstance().token, "orgi": "beimi", "userid": xlLib.WebSocketMgr.getInstance().userid }, this.onsend);
		}
	}

	private onsend(): void {

	}
	private onStarLogin(): void {
		xlLib.HttpManager.getInstance().send(HttpAddress.loginUrl, {
		}, egret.URLRequestMethod.POST, function (data: any) {
			if (data.data) {
				xlLib.TipsUtils.showFloatWordTips("登录成功！");
				xlLib.WebSocketMgr.getInstance().token = data.data.token;
				xlLib.WebSocketMgr.getInstance().userid = data.data.id;
				this.onConnSever(data.data.id);
			} else {

			}
		}, function () { }, this, false);
	}

	private onConnSever(id: string): void {
		xlLib.WebSocketMgr.getInstance().connect(Const.GAME_HOST, Const.GAME_PORT, id);

		// xlLib.UIMgr.instance.showLoading(TipsLoading);
		// xlLib.SceneMgr.instance.changeScene(Lobby);
	}


	private initGameData(data: any) {
	}

	private subTableFunc() {
		xlLib.SceneMgr.instance.changeScene(Lobby);
	}

	private initPlayerData(data: any) {
		UserInfo.getInstance().uid = data.uid;
		UserInfo.getInstance().userType = data.userType;
	}

	public destroy() {
		EventUtil.removeEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
		EventUtil.removeEventListener(EventConst.ON_GET_TOKEN_FAIL, this.onTokenFail, this);
		EventUtil.removeEventListener(EventConst.ON_LOGIN_SUCCES, this.onLoginSucces, this);
		EventUtil.removeEventListener(EventConst.ON_LOGIN_FAIL, this.onLoginFail, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		this.login_btm = null;
		this.zzzh_btn = null;
		this.passwd_txt = null;
		this.username_txt = null;
	}
}
