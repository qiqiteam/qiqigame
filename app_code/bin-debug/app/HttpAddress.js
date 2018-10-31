var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpAddress = (function () {
    function HttpAddress() {
    }
    return HttpAddress;
}());
// /**注册地址 */
// public static registerUrl:string = Const.httpUrl + "/webuser/reg";
/**登录地址 */
HttpAddress.loginUrl = Const.httpUrl + "/api/guest";
__reflect(HttpAddress.prototype, "HttpAddress");
//# sourceMappingURL=HttpAddress.js.map