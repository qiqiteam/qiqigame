/**
 * 登录界面
 * */
class LoginView extends eui.Component
{
	public bgImg:eui.Image;
	public username_txt:eui.EditableText;
	public passwd_txt:eui.EditableText;
	public zzzh_btn:eui.CheckBox;
	public login_btm:eui.Button;


	private bjlSubscription: boolean = false;
	private lfSubscription: boolean = false;
	private xjSubscription: boolean = false;
	private nnSubscription: boolean = true;
	constructor()
	{
		super();
		this.skinName = "LoginViewSkin";
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		EventUtil.addEventListener(EventConst.ON_GET_TOKEN_FAIL,this.onTokenFail,this);
		EventUtil.addEventListener(EventConst.ON_LOGIN_SUCCES,this.onLoginSucces,this);
		EventUtil.addEventListener(EventConst.ON_LOGIN_FAIL,this.onLoginFail,this);
		EventUtil.addEventListener(EventConst.ON_SOCKET_FAIL,this.onSocketFail,this);
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

	private onSocketFail(data:any):void
	{
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
	}

	private onTokenFail(data:any):void
	{
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
	}

	private onLoginSucces(data:any):void
	{
		let info = data.param;
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
		if(this.zzzh_btn.selected)
		{
			egret.localStorage.setItem("username", this.username_txt.text);
		}
		else
		{
			egret.localStorage.removeItem("username");
		}

		//初始化游戏数据
		// this.initPlayerData(info.msg.player);
		// this.initGameData(info.msg.plaza[0]);	
	    //切换游戏场景
		xlLib.SceneMgr.instance.changeScene(Lobby);

	}

	private onLoginFail(data:any):void
	{
		xlLib.UIMgr.instance.hideLoading(TipsLoading);
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
	}

	private onTouchHandler(evt:egret.Event):void
	{
		if(evt.target == this.login_btm)
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
			xlLib.WebSocketMgr.getInstance().connect("192.168.1.36","9081");
			xlLib.UIMgr.instance.showLoading(TipsLoading);


			xlLib.SceneMgr.instance.changeScene(Lobby);
		}
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

	public destroy()
	{
		EventUtil.removeEventListener(EventConst.ON_SOCKET_FAIL,this.onSocketFail,this);
		EventUtil.removeEventListener(EventConst.ON_GET_TOKEN_FAIL,this.onTokenFail,this);
		EventUtil.removeEventListener(EventConst.ON_LOGIN_SUCCES,this.onLoginSucces,this);
		EventUtil.removeEventListener(EventConst.ON_LOGIN_FAIL,this.onLoginFail,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		this.login_btm = null;
		this.zzzh_btn = null;
		this.passwd_txt = null;
		this.username_txt = null;
	}	
}
