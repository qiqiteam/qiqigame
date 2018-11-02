var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var IUserInfo = (function () {
        function IUserInfo() {
        }
        return IUserInfo;
    }());
    xlLib.IUserInfo = IUserInfo;
    __reflect(IUserInfo.prototype, "xlLib.IUserInfo");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=IUserInfo.js.map