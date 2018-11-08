class EventConst 
{
    /*** socket连接成功*/
	public static ON_SOCKET_SUC:string = "onSocketSuc";
	/*** socket连接失败*/
	public static ON_SOCKET_FAIL:string = "onSocketFail";
	/*** socket连接关闭*/
	public static ON_SOCKET_CLOSE:string = "onSocketClose";

	//---------------------------------------请求发送数据
	/**加入房间 */
    public static joinroom:string = "joinroom";
	/**开始牛牛游戏*/
    public static niuniu_start:string = "niuniu_start";
	/**抢庄*/
    public static niuniu_dohog:string = "niuniu_dohog";
	/**投注倍数*/
    public static erbagang_bet:string = "erbagang_bet"
    //---------------------------------------回包监听数据
	/**监听抢庄按钮*/
    public static hog:string = "hog";
    /**用户抢庄数*/
    public static hognum:string = "hognum";  
    /**庄家*/
    public static banker:string = "banker";  
    /**倍数列表*/
    public static bet:string = "bet";  
    /**用户倍数*/
    public static betnum:string = "betnum";  

}