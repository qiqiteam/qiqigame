/**
 * 登录界面
 * */
class LoginView extends eui.Component
{

	public bgImg:eui.Image;
	public _group_btn_0:eui.Group;
	public _btn_visitor:eui.Button;
	public _btn_account:eui.Button;
	public _group_btn_1:eui.Group;
	public _btn_continue:eui.Button;
	public _btn_register:eui.Button;
	public _group_btn_2:eui.Group;
	public _phone_txt:eui.EditableText;
	public _Verify_code_txt:eui.EditableText;
	public zzzh_btn:eui.CheckBox;
	public _btn_login:eui.Button;
	public _btn_verify:eui.Button;


	private bjlSubscription: boolean = false;
	private lfSubscription: boolean = false;
	private xjSubscription: boolean = false;
	private nnSubscription: boolean = true;
	constructor()
	{
		super();
		this.skinName = "LoginViewSkin";
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this.resize();
	}

    public resize(): void 
	{
       if(this.bgImg)
	   {
			this.bgImg.width = xlLib.Global.screenWidth;
			this.bgImg.height = xlLib.Global.screenHeight;
	   }
	}

	protected childrenCreated()
	{
		super.childrenCreated();
		this.bjlSubscription = false;
		this.lfSubscription = false;
		let username = egret.localStorage.getItem("username");
		if(username && username != "")
		{
    		this._phone_txt.text = username;
		}
		else
		{
			this._phone_txt.text = "";
		}

		this._btn_visitor.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onVisitorLogin, this);
		this._btn_account.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAccountLogin, this);

		this._btn_continue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onContinueLogin, this);
		this._btn_register.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
		this._btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);

	}

	private onVisitorLogin(e:egret.TouchEvent):void {
		this._group_btn_0.visible = false;
		this._group_btn_1.visible = true;
	}

	private onAccountLogin(e:egret.TouchEvent):void {
		this._group_btn_0.visible = false;
		this._group_btn_2.visible = true;
	}

	private onContinueLogin(e:egret.TouchEvent):void {
		xlLib.HttpManager.getInstance().send(HttpAddress.guestUrl,null,null,this.onLoginSucess,this.onLoginFail);
		//xlLib.SceneMgr.instance.changeScene(Lobby);
	}

	private onRegister(e:egret.TouchEvent):void {
		this._group_btn_0.visible = false;
		this._group_btn_2.visible = true;
	}


	private _onLogin(evt:egret.Event):void
	{
		if(this._phone_txt.text == ""||this._Verify_code_txt.text == "")
		{
			xlLib.TipsUtils.showFloatWordTips("用户名或密码不能为空！");
			return;
		}
		if (!GlobalData.hasNetwork) {
			xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
			return;
		}
		var data: any = new Object;
		data.userName = this._phone_txt.text;
		data.passWord = xlLib.StringUtils.md5(this._Verify_code_txt.text);
		GlobalData.md5PassWord = data.passWord;
		xlLib.UIMgr.instance.showLoading(TipsLoading);
		//xlLib.SceneMgr.instance.changeScene(Lobby);
	}

	private onLoginFail(data:any):void
	{
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
	}

	private onLoginSucess(data:any):void
	{
	   xlLib.UIMgr.instance.hideLoading(TipsLoading);
	   xlLib.SceneMgr.instance.changeScene(Lobby);
	   xlLib.TipsUtils.showFloatWordTips("游客登录成功！");
	}

	private initGameData(data: any) {
	}

	private initPlayerData(data: any) {
		UserInfo.getInstance().uid = data.uid;
		UserInfo.getInstance().userType = data.userType;
	}

	public destroy()
	{
		this._btn_visitor.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onVisitorLogin, this);
		this._btn_account.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onAccountLogin, this);
		this._btn_continue.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onContinueLogin, this);
		this._btn_register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRegister, this);
		this._btn_login = null;
		this.zzzh_btn = null;
		this._Verify_code_txt = null;
		this._phone_txt = null;
	}	
}
