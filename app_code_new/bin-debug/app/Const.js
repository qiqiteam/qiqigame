var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Const = (function () {
    function Const() {
    }
    //正式版本----------------------------------------
    Const.GAME_HOST = "47.52.138.199";
    Const.GAME_PORT = "9081";
    Const.httpUrl = "http://47.52.138.199:80";
    // //测试服----------------------------------------
    // public static GAME_HOST: string = "192.168.1.7";
    // public static GAME_PORT: string = "9081";
    // public static httpUrl: string = "http://192.168.1.7";
    // public static GAME_HOST:string = "192.168.1.49";
    // public static GAME_PORT:string = "9081";
    // public static httpUrl:string = "http://192.168.1.49";
    //---------------------------游戏分类
    /**牛牛*/
    Const.GAME_NIUNIU = "niuniu";
    /**百家乐 */
    Const.GAME_BAIJIALE = "baijiale";
    /**二八杠 */
    Const.GAME_ERBAGANG = "erbagang";
    /**麻将 */
    Const.GAME_MAJIANG = "majiang";
    /**炸金花 */
    Const.GAME_ZHAJINHUA = "zhajinhua";
    //---------------------------游戏类型
    /**抢庄牛牛 */
    // public static TYPE_QZNN: string = "qznn";
    Const.TYPE_QZNN = "niuniu";
    /**通比牛牛 */
    Const.TYPE_TBNN = "tbnn";
    /**千人牛牛 */
    Const.TYPE_QRNIUNIU = "qrnn";
    /**经典炸金花 */
    Const.TYPE_JINGDIANJINHUA = "jingdianjinhua";
    /**经典百家乐 */
    Const.TYPE_JINGDIANBAIJIALE = "jingdianbaijiale";
    /**经典二八杠 */
    Const.TYPE_ERBAGANGJINDIAN = "erbagangjindian";
    //---------------------------房间类型
    /**初级场 */
    Const.PLAYWAY_CHUJICHANG = "chujichang";
    /**体验房 */
    Const.PLAYWAY_TIYANFANG = "tiyanfang";
    /**体验场 */
    Const.PLAYWAY_TIYANCHANG = "tiyanchang";
    return Const;
}());
__reflect(Const.prototype, "Const");
//# sourceMappingURL=Const.js.map