class HttpAddress {
    private static _instance: HttpAddress;
    /**
     * http请求管理器单例
     */
    public static getInstance(): HttpAddress {
        if (!this._instance) {
            this._instance = new HttpAddress();
        }
        return this._instance;
    }
    public constructor() {
    }
    public  httpUrl:string = "http://"+Const.GAME_HOST+":80";
    /**游客登录地址 */
    public  guestUrl:string = this.httpUrl + "/api/guest";
    /**游客登录地址 */
    public  sendmsgUrl:string = this.httpUrl + "/api/sendmsg";
    /**注册登录地址 */
    public  loginUrl:string = this.httpUrl + "/api/login";
}
