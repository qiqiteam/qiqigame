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
    public static erbagang_bet:string = "erbagang_bet";
    
	/**检查是否有上次加入房间*/
    public static baijialegamestatus:string = "baijialegamestatus";
    /**加入房间*/
    public static baijialejoinroom:string = "baijialejoinroom";
	/**押注*/
    public static baijialebeton:string = "baijialebeton";
    
    //------------------S to C---------------------服务端回包监听数据
	/**所有玩家列表*/
    public static players:string = "players";
    /**新玩家加入*/
    public static newplayer:string = "newplayer";

    //抢庄牛牛协议-----------------------------------
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
    /**牌面信息*/
    public static cards:string = "cards";
    /**结算*/
    public static summary:string = "summary"; 


    //百家乐协议-----------------------------------------
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

    //炸金花协议------------------------------------
    //   "botpour"
    //   "compareCard"
    //     进入房间,监听joinroom
    // {
    //   "userid": "7c69fa11743e49abb3f4d26dfe8588cb",
    //   "token": "d20d2f48202644749c0c14361cf65359",
    //   "playway": "4028819a66f3a97d0166f3ae90fb0000",
    //   "command": "joinroom"
    // }
    // 准备,监听prepare
    // {
    //   "userid": "7c69fa11743e49abb3f4d26dfe8588cb",
    //   "token": "d20d2f48202644749c0c14361cf65359",
    //   "playway": "4028819a66f3a97d0166f3ae90fb0000",
    //   "command": "prepare"
    // }

    // 下注,监听botpour
    // {
    //   "userid": "7c69fa11743e49abb3f4d26dfe8588cb",
    //   "token": "d20d2f48202644749c0c14361cf65359",
    //   "playway": "4028819a66f3a97d0166f3ae90fb0000",
    //   "command": "botpour",
    //   "data": "1"
    // }
    // 比牌,监听compareCard
    // {
    //   "userid": "7c69fa11743e49abb3f4d26dfe8588cb",
    //   "token": "d20d2f48202644749c0c14361cf65359",
    //   "playway": "4028819a66f3a97d0166f3ae90fb0000",
    //   "command": "compareCard",
    //   "data":{"open":"7c69fa11743e49abb3f4d26dfe8588cb","byopen":"5e075cb2ad414589830e99f0df3dafc7"}
    // }
    // 全压,监听pressure
    // {
    //   "userid": "7c69fa11743e49abb3f4d26dfe8588cb",
    //   "token": "d20d2f48202644749c0c14361cf65359",
    //   "playway": "4028819a66f3a97d0166f3ae90fb0000",
    //   "command": "pressure"
    // }
    // 弃牌,监听prepare
    // {
    //   "userid": "7c69fa11743e49abb3f4d26dfe8588cb",
    //   "token": "d20d2f48202644749c0c14361cf65359",
    //   "playway": "4028819a66f3a97d0166f3ae90fb0000",
    //   "command": "prepare"
    // }
    // 看牌,监听seecard
    // {
    //   "userid": "7c69fa11743e49abb3f4d26dfe8588cb",
    //   "token": "d20d2f48202644749c0c14361cf65359",
    //   "playway": "4028819a66f3a97d0166f3ae90fb0000",
    //   "command": "seecard"
    // }
    // 检查玩家是否中途退出房间,监听gamestatus
    // {
    //   "userid": "7c69fa11743e49abb3f4d26dfe8588cb",
    //   "token": "d20d2f48202644749c0c14361cf65359",
    //   "playway": "4028819a66f3a97d0166f3ae90fb0000",
    //   "command": "gamestatus"
    // }
    // 结算,监听settlement
    // 退出房间,监听leave
    // 庄家,监听banker
    // 下注类型,监听gambleType
    // 金币不足.监听goldNotEnough
}