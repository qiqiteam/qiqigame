class EventConst {
    /*** socket连接成功*/
    public static ON_SOCKET_SUC: string = "onSocketSuc";
    /*** socket连接失败*/
    public static ON_SOCKET_FAIL: string = "onSocketFail";
    /*** socket连接关闭*/
    public static ON_SOCKET_CLOSE: string = "onSocketClose";

    //------------------C to S---------------------请求发送服务器协议
    /**百家乐加入房间 */
    public static joinroom: string = "joinroom";
    /**开始牛牛游戏*/
    public static niuniu_start: string = "niuniu_start";
    /**抢庄*/
    public static niuniu_dohog: string = "niuniu_dohog";
    /**投注倍数*/
    public static niuniu_dobet: string = "niuniu_dobet";

    /**检查是否有上次加入房间*/
    public static baijialegamestatus: string = "gamestatus";
    /**押注*/
    public static baijialebeton: string = "baijialebeton";
    /**离开房间 */
    public static niuniu_leave: string = "niuniu_leave";

    /**准备 */
    public static prepare: string = "prepare";
    /**比牌 */
    public static compareCard: string = "compareCard";
    /**全压 */
    public static pressure: string = "pressure";
    /**弃牌 */
    public static abandon: string = "abandon";
    /**看牌 */
    public static seecard: string = "seecard";
    /**发牌 */
    public static play: string = "play";
    /**(下注)*/
    public static botpour: string = "botpour";

    //------------------S to C---------------------服务端回包监听数据
    /**所有玩家列表*/
    public static players: string = "players";
    /**新玩家加入*/
    public static newplayer: string = "newplayer";
    /**监听抢庄按钮*/
    public static hog: string = "hog";
    /**用户抢庄数*/
    public static hognum: string = "hognum";
    /**庄家*/
    public static banker: string = "banker";
    /**倍数列表*/
    public static bet: string = "bet";
    /**用户倍数*/
    public static betnum: string = "betnum";
    /**牌面信息+结算*/
    public static summary: string = "summary";

    /**（金币最多的6个玩家）*/
    public static golbMaxSex: string = "golbMaxSex";
    /**（开始匹配5秒倒计时）*/
    public static startGame: string = "startGame";
    /**（赔率）*/
    public static onBJLjoinroom: string = "onBJLjoinroom";
    /**（可以开始下注5秒倒计时）*/
    public static startBeton: string = "startBeton";
    /**有人下注  也有可能是参数错误等异常信息*/
    public static onCatch: string = "onCatch";
    /**(开始发牌)*/
    public static baccaratDeil: string = "baccaratDeil";
    /**("参数异常")*/
    public static theNumberOfTooMuch: string = "theNumberOfTooMuch";
    /**("5秒后开始结算")*/
    public static staticEndAll: string = "staticEndAll";
    /**( 金币变为**)*/
    public static acquisitionGolb: string = "acquisitionGolb";
    /**( 5局之后不下注将要被踢出房间，当前第三局：)*/
    public static isStartBeton: string = "isStartBeton";
    /**( 你被请出房间**)*/
    public static isStartBetonST: string = "isStartBetonST";
    /**(退出房间)*/
    public static leave: string = "leave";

    /**(检查玩家是否中途退出房间)*/
    public static gamestatus: string = "gamestatus";

    /**(游戏类型)*/
    public static gambleType: string = "gambleType";



}