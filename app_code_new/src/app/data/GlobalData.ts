class GlobalData {

    // /**百家乐大厅数据 */
    // public static bjlTablesInfo: Array<GameInformation> = [];
    // /**牛牛大厅数据 */
    // public static nnTablesInfo: Array<GameInformation> = [];
    /**md5加密后的密码 */
    public static md5PassWord: string = "";
    /**是否在重连 */
    public static isReConnect: boolean = false;
    /**版本号 */
    public static gameVersion: string = "2018050905"
    public static isOutLogin: boolean = false;
    /**是否有网络 */
    public static hasNetwork: boolean = true;
    /**重连次数 */
    public static recNum: number = 0;
    /**是否点击过准备面板关闭按钮*/
    //public static liveCloseBtn: boolean = false;
    /**点击准备面板关闭按钮,推送是否能够退出房间*/
    //public static isLiveRoom: boolean = false;
    /**清除数据 */
    public static clearData(isReconnect: boolean = false) {
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
    }
}