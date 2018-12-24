/**
 * 登录界面
 * */
class LoginView extends eui.Component {
	public bgImg:eui.Image;
	public _group_btn_0:eui.Group;
	public _btn_visitor:eui.Button;
	public _btn_account:eui.Button;
	public _group_btn_2:eui.Group;
	public _phone_txt:eui.EditableText;
	public _verify_code_txt:eui.EditableText;
	public zzzh_btn:eui.CheckBox;
	public _btn_login:eui.Button;
	public _btn_verify:eui.Button;
	public _btn_black:eui.Button;

	private bjlSubscription: boolean = false;
	private lfSubscription: boolean = false;
	private xjSubscription: boolean = false;
	private nnSubscription: boolean = true;
	private logineffectView:LoginEffectView;
	constructor() {
		super();
		this.skinName = "LoginViewSkin";
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this.resize();
	}

	public resize(): void {
		if (this.bgImg) {
			this.bgImg.width = xlLib.Global.screenWidth;
			this.bgImg.height = xlLib.Global.screenHeight;
		}
	}

	protected childrenCreated() {
		super.childrenCreated();
		this.bjlSubscription = false;
		this.lfSubscription = false;
		this._btn_visitor.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
		this._btn_account.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
		this._btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
		this._btn_verify.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetCode, this);
		this._btn_black.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBlack, this);

		EventUtil.addEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
		EventUtil.addEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);

		this.logineffectView = new LoginEffectView();
        this.addChildAt(this.logineffectView,1);
		this.logineffectView.play();

   		let label = new eui.BitmapLabel;
        label.textAlign = egret.HorizontalAlign.CENTER;
        let str: string = "";
		label.font = "qznn_win_fnt";
		label.text = "0";
		str = "+";
		label.x = 400;
		label.y = 500;
		uiCore.LabelEffect.instance.playEffect(label, { time: 3000, initNum: 1, num: 100000, regulator: 50,splitnum:3,splitstr:"." }, str);
		this.addChild(label);
	}

	private onBlack(e: egret.TouchEvent): void {
		this._group_btn_0.visible = true;
		this._group_btn_2.visible = false;
	}

	private _onVisitorLogin(e: egret.TouchEvent): void {
		xlLib.UIMgr.instance.showLoading(TipsLoading);
		xlLib.HttpManager.getInstance().send(HttpAddress.getInstance().guestUrl,null,null,this.onLoginSucess,this.onLoginFail);
	}

	private _onAccountLogin(e: egret.TouchEvent): void {
		this._group_btn_0.visible = false;
		this._group_btn_2.visible = true;
	}


	private onGetCode(e: egret.TouchEvent): void {
		xlLib.HttpManager.getInstance().send(HttpAddress.getInstance().sendmsgUrl, { mobile: this._phone_txt.text }
			, null, (mes) => {
				xlLib.TipsUtils.showFloatWordTips("发送验证码成功！");
			}, (mes) => {
				xlLib.TipsUtils.showFloatWordTips("发送验证码失败！");
			});
	}

	private _onLogin(evt: egret.Event): void {
		if (this._phone_txt.text == "" || this._verify_code_txt.text == "") {
			xlLib.TipsUtils.showFloatWordTips("手机号或验证码不能为空！");
			return;
		}
		if (!GlobalData.hasNetwork) {
			xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
			return;
		}
		xlLib.UIMgr.instance.showLoading(TipsLoading);
		xlLib.HttpManager.getInstance().send(HttpAddress.getInstance().loginUrl, { mobile: this._phone_txt.text, verifyCode: this._verify_code_txt.text },
			null, this.onLoginSucess, this.onLoginFail);
	}

	private onLoginFail(data: any): void {
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
	}

	private onLoginSucess(data: any): void {
		var info: any = data.data;
		UserInfo.getInstance().initUserInfo(data);
		xlLib.WebSocketMgr.getInstance().connect(Const.GAME_HOST, Const.GAME_PORT, info.id);
	}

	private onSocketFail(data: any): void {
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
	}

	private onSocketSuc(data: any): void {
		let musicBg = ["hall_bg_mp3"];
		xlLib.SoundMgr.instance.playBgMusic(musicBg);
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.SceneMgr.instance.changeScene(Lobby);
		xlLib.TipsUtils.showFloatWordTips("登录成功！");
	}

	public destroy() {
		this._btn_visitor.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
		this._btn_account.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
		this._btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
		this._btn_verify.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetCode, this);
		EventUtil.removeEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
		EventUtil.removeEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
	}
}
