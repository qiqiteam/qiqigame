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
		this._btn_visitor.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
		this._btn_account.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
		this._btn_continue.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onContinueLogin, this);
		this._btn_register.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onRegister, this);
		this._btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
		this._btn_verify.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGetCode,this);

		EventUtil.addEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
		EventUtil.addEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
	}

	private _onVisitorLogin(e:egret.TouchEvent):void {
		this._group_btn_0.visible = false;
		this._group_btn_1.visible = true;
	}

	private _onAccountLogin(e:egret.TouchEvent):void {
		this._group_btn_0.visible = false;
		this._group_btn_2.visible = true;
	}

	private _onContinueLogin(e:egret.TouchEvent):void {
		xlLib.UIMgr.instance.showLoading(TipsLoading);
		xlLib.HttpManager.getInstance().send(HttpAddress.guestUrl,null,null,this.onLoginSucess,this.onLoginFail);
		//xlLib.SceneMgr.instance.changeScene(Lobby);
	}

	private _onRegister(e:egret.TouchEvent):void {
		
	}

	private onGetCode(e:egret.TouchEvent):void {
		xlLib.HttpManager.getInstance().send(HttpAddress.sendmsgUrl,{mobile:this._phone_txt.text}
		,null,(mes)=>{
				xlLib.TipsUtils.showFloatWordTips("发送验证码成功！");
		},(mes)=>{
				xlLib.TipsUtils.showFloatWordTips("发送验证码失败！");
		});
	}

	private _onLogin(evt:egret.Event):void
	{
		if(this._phone_txt.text == ""||this._Verify_code_txt.text == "")
		{
			xlLib.TipsUtils.showFloatWordTips("手机号或验证码不能为空！");
			return;
		}
		if (!GlobalData.hasNetwork) {
			xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
			return;
		}
		xlLib.UIMgr.instance.showLoading(TipsLoading);
		xlLib.HttpManager.getInstance().send(HttpAddress.login,{mobile:this._phone_txt.text,verifyCode:this._Verify_code_txt.text},
		null,this.onLoginSucess,this.onLoginFail);
	}

	private onLoginFail(data:any):void
	{
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
	}

	private onLoginSucess(data:any):void
	{
		var info:any = data.data;
		UserInfo.getInstance().uid = info.id;
		UserInfo.getInstance().username = info.username;
		UserInfo.getInstance().goldcoins = info.goldcoins;
		console.log("收到用户数据"+info.goldcoins);
	   xlLib.WebSocketMgr.getInstance().connect(Const.GAME_HOST,Const.GAME_PORT,info.id);
	}

	private onSocketFail(data:any):void
	{
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
	}

	private onSocketSuc(data:any):void
	{
		let musicBg = ["bgMain_mp3"];
		xlLib.SoundMgr.instance.playBgMusic(musicBg);
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.SceneMgr.instance.changeScene(Lobby);
	    xlLib.TipsUtils.showFloatWordTips("登录成功！");
	}

	public destroy()
	{
		this._btn_visitor.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
		this._btn_account.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
		this._btn_continue.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onContinueLogin, this);
		this._btn_register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onRegister, this);
		this._btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
		this._btn_verify.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onGetCode,this);

		EventUtil.removeEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
		EventUtil.removeEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
	}	
}
