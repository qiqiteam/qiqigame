var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
* 资源常量
*/
var CommonConsts = (function () {
    function CommonConsts() {
    }
    return CommonConsts;
}());
/**
* 是否在游戏中 标示
*/
CommonConsts.LOBBY_LASTGAME = "lobby_lastGame";
__reflect(CommonConsts.prototype, "CommonConsts");
//# sourceMappingURL=CommonConsts.js.map