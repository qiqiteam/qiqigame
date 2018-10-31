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
        _this.once(egret.Event.REMOVED_FROM_STAGE, _this.destroy, _this);
        _this.resize();
        return _this;
    }
    LoginView.prototype.resize = function () {
        if (this.bgImg) {
            this.bgImg.width = xlLib.Global.screenWidth;
            this.bgImg.height = xlLib.Global.screenHeight;
        }
    };
    LoginView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.bjlSubscription = false;
        this.lfSubscription = false;
        this._btn_visitor.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
        this._btn_account.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
        this._btn_continue.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onContinueLogin, this);
        this._btn_register.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onRegister, this);
        this._btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
        this._btn_verify.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetCode, this);
        EventUtil.addEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
        EventUtil.addEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
    };
    LoginView.prototype._onVisitorLogin = function (e) {
        this._group_btn_0.visible = false;
        this._group_btn_1.visible = true;
    };
    LoginView.prototype._onAccountLogin = function (e) {
        this._group_btn_0.visible = false;
        this._group_btn_2.visible = true;
    };
    LoginView.prototype._onContinueLogin = function (e) {
        //xlLib.UIMgr.instance.showLoading(TipsLoading);
        //xlLib.HttpManager.getInstance().send(HttpAddress.guestUrl,null,null,this.onLoginSucess,this.onLoginFail);
        xlLib.SceneMgr.instance.changeScene(Lobby);
    };
    LoginView.prototype._onRegister = function (e) {
    };
    LoginView.prototype.onGetCode = function (e) {
        xlLib.HttpManager.getInstance().send(HttpAddress.sendmsgUrl, { mobile: this._phone_txt.text }, null, function (mes) {
            xlLib.TipsUtils.showFloatWordTips("发送验证码成功！");
        }, function (mes) {
            xlLib.TipsUtils.showFloatWordTips("发送验证码失败！");
        });
    };
    LoginView.prototype._onLogin = function (evt) {
        if (this._phone_txt.text == "" || this._verify_code_txt.text == "") {
            xlLib.TipsUtils.showFloatWordTips("手机号或验证码不能为空！");
            return;
        }
        if (!GlobalData.hasNetwork) {
            xlLib.TipsUtils.showFloatWordTips("连接失败 请检查网络环境！");
            return;
        }
        xlLib.UIMgr.instance.showLoading(TipsLoading);
        xlLib.HttpManager.getInstance().send(HttpAddress.login, { mobile: this._phone_txt.text, verifyCode: this._verify_code_txt.text }, null, this.onLoginSucess, this.onLoginFail);
    };
    LoginView.prototype.onLoginFail = function (data) {
        xlLib.UIMgr.instance.hideLoading(TipsLoading);
        xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
    };
    LoginView.prototype.onLoginSucess = function (data) {
        xlLib.WebSocketMgr.getInstance().connect(Const.GAME_HOST, Const.GAME_PORT, data.id);
    };
    LoginView.prototype.onSocketFail = function (data) {
        xlLib.UIMgr.instance.hideLoading(TipsLoading);
        xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
    };
    LoginView.prototype.onSocketSuc = function (data) {
        xlLib.UIMgr.instance.hideLoading(TipsLoading);
        xlLib.SceneMgr.instance.changeScene(Lobby);
        xlLib.TipsUtils.showFloatWordTips("游客登录成功！");
    };
    LoginView.prototype.initGameData = function (data) {
    };
    LoginView.prototype.initPlayerData = function (data) {
        UserInfo.getInstance().uid = data.uid;
        UserInfo.getInstance().userType = data.userType;
    };
    LoginView.prototype.destroy = function () {
        this._btn_visitor.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
        this._btn_account.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
        this._btn_continue.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onContinueLogin, this);
        this._btn_register.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onRegister, this);
        this._btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
        this._btn_verify.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetCode, this);
        EventUtil.removeEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
        EventUtil.removeEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
    };
    return LoginView;
}(eui.Component));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map