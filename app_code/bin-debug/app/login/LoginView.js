var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 登录界面
 * */
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        var _this = _super.call(this) || this;
        _this.bjlSubscription = false;
        _this.lfSubscription = false;
        _this.xjSubscription = false;
        _this.nnSubscription = true;
        _this.skinName = "LoginViewSkin";
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchHandler, _this);
        EventUtil.addEventListener(EventConst.ON_GET_TOKEN_FAIL, _this.onTokenFail, _this);
        EventUtil.addEventListener(EventConst.ON_LOGIN_SUCCES, _this.onLoginSucces, _this);
        EventUtil.addEventListener(EventConst.ON_LOGIN_FAIL, _this.onLoginFail, _this);
        EventUtil.addEventListener(EventConst.ON_SOCKET_FAIL, _this.onSocketFail, _this);
        _this.once(egret.Event.REMOVED_FROM_STAGE, _this.destroy, _this);
        _this.resize();
        _this.onStarLogin();
        return _this;
    }
    LoginView.prototype.resize = function () {
        if (this.bgImg) {
            this.bgImg.width = xlLib.Global.screenWidth;
            this.bgImg.height = xlLib.Global.screenHeight;
        }
    };
    LoginView.prototype.onSocketFail = function (data) {
        xlLib.UIMgr.instance.hideLoading(TipsLoading);
        xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
    };
    LoginView.prototype.onTokenFail = function (data) {
        xlLib.UIMgr.instance.hideLoading(TipsLoading);
    };
    LoginView.prototype.onLoginSucces = function (data) {
        var info = data.param;
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
    };
    LoginView.prototype.onLoginFail = function (data) {
        xlLib.UIMgr.instance.hideLoading(TipsLoading);
    };
    LoginView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.bjlSubscription = false;
        this.lfSubscription = false;
        var username = egret.localStorage.getItem("username");
        if (username && username != "") {
            this.username_txt.text = username;
        }
        else {
            this.username_txt.text = "";
        }
    };
    LoginView.prototype.onTouchHandler = function (evt) {
        if (evt.target == this.login_btm) {
            if (this.username_txt.text == "" || this.passwd_txt.text == "") {
                xlLib.TipsUtils.showFloatWordTips("用户名或密码不能为空！");
                return;
            }
            if (!GlobalData.hasNetwork) {
                xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
                return;
            }
            xlLib.WebSocketMgr.getInstance().send("gamestatus", { "token": xlLib.WebSocketMgr.getInstance().token, "orgi": "beimi", "userid": xlLib.WebSocketMgr.getInstance().userid }, this.onsend);
        }
    };
    LoginView.prototype.onsend = function () {
    };
    LoginView.prototype.onStarLogin = function () {
        xlLib.HttpManager.getInstance().send(HttpAddress.loginUrl, {}, egret.URLRequestMethod.POST, function (data) {
            if (data.data) {
                xlLib.TipsUtils.showFloatWordTips("登录成功！");
                xlLib.WebSocketMgr.getInstance().token = data.data.token;
                xlLib.WebSocketMgr.getInstance().userid = data.data.id;
                this.onConnSever(data.data.id);
            }
            else {
            }
        }, function () { }, this, false);
    };
    LoginView.prototype.onConnSever = function (id) {
        xlLib.WebSocketMgr.getInstance().connect(Const.GAME_HOST, Const.GAME_PORT, id);
        // xlLib.UIMgr.instance.showLoading(TipsLoading);
        // xlLib.SceneMgr.instance.changeScene(Lobby);
    };
    LoginView.prototype.initGameData = function (data) {
    };
    LoginView.prototype.subTableFunc = function () {
        xlLib.SceneMgr.instance.changeScene(Lobby);
    };
    LoginView.prototype.initPlayerData = function (data) {
        UserInfo.getInstance().uid = data.uid;
        UserInfo.getInstance().userType = data.userType;
    };
    LoginView.prototype.destroy = function () {
        EventUtil.removeEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
        EventUtil.removeEventListener(EventConst.ON_GET_TOKEN_FAIL, this.onTokenFail, this);
        EventUtil.removeEventListener(EventConst.ON_LOGIN_SUCCES, this.onLoginSucces, this);
        EventUtil.removeEventListener(EventConst.ON_LOGIN_FAIL, this.onLoginFail, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
        this.login_btm = null;
        this.zzzh_btn = null;
        this.passwd_txt = null;
        this.username_txt = null;
    };
    return LoginView;
}(eui.Component));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map