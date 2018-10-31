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
	public phone_txt:eui.EditableText;
	public code_txt:eui.EditableText;
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
		this.visitor_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
		this.account_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
		this.continue_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onContinueLogin, this);
		this.register_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onRegister, this);
		this.login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
		this.verify_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGetCode,this);

		EventUtil.addEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
		EventUtil.addEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
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
		xlLib.UIMgr.instance.showLoading(TipsLoading);
		xlLib.HttpManager.getInstance().send(HttpAddress.guestUrl,null,null,this.onLoginSucess,this.onLoginFail);
	}

	private _onRegister(e:egret.TouchEvent):void {
		
	}

	private onGetCode(e:egret.TouchEvent):void {
		xlLib.HttpManager.getInstance().send(HttpAddress.sendmsgUrl,{mobile:this.phone_txt.text}
		,null,(mes)=>{
				xlLib.TipsUtils.showFloatWordTips("发送验证码成功！");
		},(mes)=>{
				xlLib.TipsUtils.showFloatWordTips("发送验证码失败！");
		});
	}

	private _onLogin(evt:egret.Event):void
	{
		if(this.phone_txt.text == ""||this.code_txt.text == "")
		{
			xlLib.TipsUtils.showFloatWordTips("手机号或验证码不能为空！");
			return;
		}
		if (!GlobalData.hasNetwork) {
			xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
			return;
		}
		xlLib.UIMgr.instance.showLoading(TipsLoading);
		xlLib.HttpManager.getInstance().send(HttpAddress.login,{mobile:this.phone_txt.text,verifyCode:this.code_txt.text},
		null,this.onLoginSucess,this.onLoginFail);
	}

	private onLoginFail(data:any):void
	{
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
	}

	private onLoginSucess(data:any):void
	{
	   xlLib.WebSocketMgr.getInstance().connect(Const.GAME_HOST,Const.GAME_PORT,data.id);
	}

	private onSocketFail(data:any):void
	{
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
	}

	private onSocketSuc(data:any):void
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
		this.login_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
		this.verify_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onGetCode,this);

		EventUtil.removeEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
		EventUtil.removeEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
	}	
}
