var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GlobalData = (function () {
    function GlobalData() {
    }
    /**清除数据 */
    GlobalData.clearData = function (isReconnect) {
        if (isReconnect === void 0) { isReconnect = false; }
        // if (!isReconnect) {
        //     if (this.isInTalbe) {
        //         if (xlLib.Utils.isAndroid) {
        //             xlLib.AndroidSDK.setPlayerNull();
        //         }
        //         else if (xlLib.Utils.isIOS) {
        //             xlLib.IosSDK.setPlayerNull();
        //         }
        //     }
        //     this.isInTalbe = false;
        //     this.recNum = 0;
        // }
    };
    // /**百家乐大厅数据 */
    // public static bjlTablesInfo: Array<GameInformation> = [];
    // /**牛牛大厅数据 */
    // public static nnTablesInfo: Array<GameInformation> = [];
    /**md5加密后的密码 */
    GlobalData.md5PassWord = "";
    /**是否在重连 */
    GlobalData.isReConnect = false;
    /**版本号 */
    GlobalData.gameVersion = "2018050905";
    GlobalData.isOutLogin = false;
    /**是否有网络 */
    GlobalData.hasNetwork = true;
    /**重连次数 */
    GlobalData.recNum = 0;
    return GlobalData;
}());
__reflect(GlobalData.prototype, "GlobalData");
//# sourceMappingURL=GlobalData.js.map