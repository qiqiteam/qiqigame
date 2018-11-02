var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Const = (function () {
    function Const() {
    }
    return Const;
}());
Const.GAME_HOST = "192.168.1.20";
Const.GAME_PORT = "9081";
Const.httpUrl = "http://192.168.1.20";
__reflect(Const.prototype, "Const");
//# sourceMappingURL=Const.js.map