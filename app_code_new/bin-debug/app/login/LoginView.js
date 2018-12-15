var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
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
        this._btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
        this._btn_verify.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetCode, this);
        this._btn_black.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBlack, this);
        EventUtil.addEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
        EventUtil.addEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
        this.logineffectView = new LoginEffectView();
        this.addChildAt(this.logineffectView, 1);
        this.logineffectView.play();
    };
    LoginView.prototype.onBlack = function (e) {
        this._group_btn_0.visible = true;
        this._group_btn_2.visible = false;
    };
    LoginView.prototype._onVisitorLogin = function (e) {
        xlLib.UIMgr.instance.showLoading(TipsLoading);
        xlLib.HttpManager.getInstance().send(HttpAddress.guestUrl, null, null, this.onLoginSucess, this.onLoginFail);
    };
    LoginView.prototype._onAccountLogin = function (e) {
        this._group_btn_0.visible = false;
        this._group_btn_2.visible = true;
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
        var info = data.data;
        UserInfo.getInstance().initUserInfo(data);
        xlLib.WebSocketMgr.getInstance().connect(Const.GAME_HOST, Const.GAME_PORT, info.id);
    };
    LoginView.prototype.onSocketFail = function (data) {
        xlLib.UIMgr.instance.hideLoading(TipsLoading);
        xlLib.TipsUtils.showFloatWordTips("登录失败 请检查网络环境！");
    };
    LoginView.prototype.onSocketSuc = function (data) {
        var musicBg = ["hall_bg_mp3"];
        xlLib.SoundMgr.instance.playBgMusic(musicBg);
        xlLib.UIMgr.instance.hideLoading(TipsLoading);
        xlLib.SceneMgr.instance.changeScene(Lobby);
        xlLib.TipsUtils.showFloatWordTips("登录成功！");
    };
    LoginView.prototype.destroy = function () {
        this._btn_visitor.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onVisitorLogin, this);
        this._btn_account.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onAccountLogin, this);
        this._btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onLogin, this);
        this._btn_verify.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetCode, this);
        EventUtil.removeEventListener(EventConst.ON_SOCKET_SUC, this.onSocketSuc, this);
        EventUtil.removeEventListener(EventConst.ON_SOCKET_FAIL, this.onSocketFail, this);
    };
    return LoginView;
}(eui.Component));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map