var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventConst = (function () {
    function EventConst() {
    }
    return EventConst;
}());
// /*** 获取TOKEN成功*/
// public static ON_GET_TOKEN_SUCCES:string = "onTokenSucces";
// /*** 获取TOKEN失败*/
// public static ON_GET_TOKEN_FAIL:string = "onTokenFail";
// /*** 登录成功*/
// public static ON_LOGIN_SUCCES:string = "onLoginSucces";
// /*** 登录失败*/
// public static ON_LOGIN_FAIL:string = "onLoginFail";
/*** socket连接成功*/
EventConst.ON_SOCKET_SUC = "onSocketSuc";
/*** socket连接失败*/
EventConst.ON_SOCKET_FAIL = "onSocketFail";
/*** socket连接关闭*/
EventConst.ON_SOCKET_CLOSE = "onSocketClose";
__reflect(EventConst.prototype, "EventConst");
//# sourceMappingURL=EventConst.js.map