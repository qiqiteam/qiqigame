/**
 * 登录界面
 * */
class LoginView extends eui.Component
{

	public bgImg:eui.Image;
	public group_btn_0:eui.Group;
	public visitor_btn:eui.Button;
	public account_btn:eui.Button;
	public group_btn_1:eui.Group;
	public continue_btn:eui.Button;
	public register_btn:eui.Button;
	public group_btn_2:eui.Group;
	public username_txt:eui.EditableText;
	public passwd_txt:eui.EditableText;
	public zzzh_btn:eui.CheckBox;
	public login_btn:eui.Button;
	public verify_btn:eui.Button;


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
    		this.username_txt.text = username;
		}
		else
		{
			this.username_txt.text = "";
		}

		this.visitor_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
		this.account_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
		this.continue_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onContinueLogin, this);
		this.register_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onRegister, this);
		this.login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);

	}

	private _onVisitorLogin(e:egret.TouchEvent):void {
		this.group_btn_0.visible = false;
		this.group_btn_1.visible = true;
	}

	private _onAccountLogin(e:egret.TouchEvent):void {
		this.group_btn_0.visible = false;
		this.group_btn_2.visible = true;
	}

	private _onContinueLogin(e:egret.TouchEvent):void {
		xlLib.HttpManager.getInstance().send(HttpAddress.guestUrl,null,null,this.onLoginSucess,this.onLoginFail);
	}

	private _onRegister(e:egret.TouchEvent):void {
		
	}


	private _onLogin(evt:egret.Event):void
	{
		if(this.username_txt.text == ""||this.passwd_txt.text == "")
		{
			xlLib.TipsUtils.showFloatWordTips("用户名或密码不能为空！");
			return;
		}
		if (!GlobalData.hasNetwork) {
			xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
			return;
		}
		var data: any = new Object;
		data.userName = this.username_txt.text;
		data.passWord = xlLib.StringUtils.md5(this.passwd_txt.text);
		GlobalData.md5PassWord = data.passWord;
		xlLib.UIMgr.instance.showLoading(TipsLoading);
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
		this.visitor_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
		this.account_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
		this.continue_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onContinueLogin, this);
		this.register_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onRegister, this);
		this.login_btn = null;
		this.zzzh_btn = null;
		this.passwd_txt = null;
		this.username_txt = null;
	}	
}
