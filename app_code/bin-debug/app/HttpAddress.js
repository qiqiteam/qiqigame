var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpAddress = (function () {
    function HttpAddress() {
    }
    return HttpAddress;
}());
/**游客登录地址 */
HttpAddress.guestUrl = Const.httpUrl + "/api/guest";
/**游客登录地址 */
HttpAddress.sendmsgUrl = Const.httpUrl + "/api/sendmsg";
/**注册登录地址 */
HttpAddress.login = Const.httpUrl + "/api/login";
__reflect(HttpAddress.prototype, "HttpAddress");
