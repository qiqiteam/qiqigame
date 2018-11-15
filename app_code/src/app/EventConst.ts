class EventConst 
{
    /*** socket连接成功*/
	public static ON_SOCKET_SUC:string = "onSocketSuc";
	/*** socket连接失败*/
	public static ON_SOCKET_FAIL:string = "onSocketFail";
	/*** socket连接关闭*/
	public static ON_SOCKET_CLOSE:string = "onSocketClose";

	//------------------C to S---------------------请求发送服务器协议
	/**加入房间 */
    public static joinroom:string = "joinroom";
	/**开始牛牛游戏*/
    public static niuniu_start:string = "niuniu_start";
	/**抢庄*/
    public static niuniu_dohog:string = "niuniu_dohog";
	/**投注倍数*/
    public static niuniu_dobet:string = "niuniu_dobet";
    
	/**检查是否有上次加入房间*/
    public static baijialegamestatus:string = "baijialegamestatus";
    /**加入房间*/
    public static baijialejoinroom:string = "baijialejoinroom";
	/**押注*/
    public static baijialebeton:string = "baijialebeton";
    /**离开房间 */
    public static niuniu_leave:string = "niuniu_leave";
    
    //------------------S to C---------------------服务端回包监听数据
	/**所有玩家列表*/
    public static players:string = "players";
    /**新玩家加入*/
    public static newplayer:string = "newplayer";
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
    /**牌面信息+结算*/
    public static summary:string = "summary"; 

    /**（开始匹配20秒倒计时）*/
    public static startGame:string = "startGame"; 
        /**（可以开始下注15秒倒计时）*/
    public static startBeton:string = "startBeton"; 
        /**(开始发牌)*/
    public static baccaratDeil:string = "baccaratDeil"; 
        /**("庄家补牌")*/
    public static bankerFillTheCard:string = "bankerFillTheCard";
        /**("闲家补牌")*/
    public static homeFillTheCard:string = "homeFillTheCard";
        /**(参数异常)*/
    public static theNumberOfTooMuch:string = "theNumberOfTooMuch";
        /**( 金币变为**)*/
    public static acquisitionGolb:string = "acquisitionGolb";
        /**(退出房间)*/
    public static leave:string = "leave";
      
}