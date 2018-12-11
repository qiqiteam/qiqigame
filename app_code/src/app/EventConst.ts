class EventConst {
    /*** socket连接成功*/
    public static ON_SOCKET_SUC: string = "onSocketSuc";
    /*** socket连接失败*/
    public static ON_SOCKET_FAIL: string = "onSocketFail";
    /*** socket连接关闭*/
    public static ON_SOCKET_CLOSE: string = "onSocketClose";

    //------------------C to S---------------------请求发送服务器协议

    /**发送自己拼牌顺序 */
    public static niuniu_manual: string = "niuniu_manual";
    /**请求玩家列表 */
    public static niuniu_player: string = "niuniu_player";
    /**加入房间 */
    public static joinroom: string = "joinroom";
    /**开始牛牛游戏*/
    public static niuniu_start: string = "niuniu_start";
    /**抢庄*/
    public static niuniu_dohog: string = "niuniu_dohog";
    /**投注倍数*/
    public static niuniu_dobet: string = "niuniu_dobet";
    /**取消匹配 */
    public static niuniu_leave: string = "niuniu_leave";

    /**百家乐房间列表 */
    public static BaccaratEfcsh: string = "BaccaratEfcsh";
    /**检查是否有上次加入房间*/
    public static baijialegamestatus: string = "gamestatus";
    /**百家乐加入房间 */
    public static BaccaratJoinroom: string = "BaccaratJoinroom";
    /**百家乐押注*/
    public static baijialebeton: string = "baijialebeton";
    /**百家乐离开房间 */
    public static BaccaratOnleave: string = "BaccaratOnleave";

    /**准备 */
    public static prepare: string = "prepare";
    /**发牌 */
    public static play: string = "play";
    /**(下注)*/
    public static botpour: string = "botpour";
    /**全压 */
    public static pressure: string = "pressure";
    /**看牌 */
    public static seecard: string = "seecard";
    /**比牌 */
    public static compareCard: string = "compareCard";
    /**弃牌 */
    public static abandon: string = "abandon";
    /**二八杠 */
    /**开始游戏 */
    public static erbagang_start: string = "erbagang_start";
    /**抢庄*/
    public static erbagang_hog: string = "erbagang_hog";
    /**投注倍数*/
    public static erbagang_bet: string = "erbagang_bet";
     /**关闭自动跟注 */
    public static closeAutoFollow: string = "closeAutoFollow";
     /**自动跟注 */
    public static onAutoFollow: string = "onAutoFollow";

    //------------------S to C---------------------服务端回包监听数据
    /**抢庄牛牛拼牌通知(所有人) */
    public static onUserShowOrderUpdate: string = "onUserShowOrderUpdate";
    /**游戏状态 */
    public static onGameStatusChange: string = "onGameStatusChange";
    /**所有玩家列表*/
    public static players: string = "players";
    /**前20名玩家列表*/
    public static onUserList: string = "onUserList";
    /**新玩家加入*/
    public static onNewUserEnterGame: string = "onNewUserEnterGame";
    /**下注通知(所有人)*/
    public static onUserBetOrderUpdate: string = "onUserBetOrderUpdate";
    /**抢庄通知(所有人)*/
    public static onUserHogOrderUpdate: string = "onUserHogOrderUpdate";
    /**牛牛匹配中退出游戏、游戏结束退出*/
    public static onUserLeave: string = "onUserLeave";


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

    // /**时间*/
    // public static roomTime: string = "roomTime";

    /**进入百家乐房间成功of失败*/
    public static baccaratOnJoinRoom: string = "baccaratOnJoinRoom";
    /**进入百家乐房间列表成功of失败*/
    public static parteySuccess: string = "parteySuccess";
    /**（赔率）*/
    public static onBJLjoinroom: string = "onBJLjoinroom";
    /**（可以开始下注5秒倒计时）*/
    public static startBeton: string = "startBeton";
    /**自己下注*/
    public static onCatch: string = "onCatch";
    /**其他玩家下注*/
    public static dealCatch: string = "dealCatch";
    /**(开始发牌)*/
    public static baccaratDeil: string = "baccaratDeil";
    /**("参数异常")*/
    public static theNumberOfTooMuch: string = "theNumberOfTooMuch";
    /**(5秒后开始下注,处理结算动画)*/
    public static beginBteon: string = "beginBteon";
    /**( 金币不足**)*/
    public static bsogc: string = "bsogc";
    /**( 金币变为**)*/
    public static acquisitionGolb: string = "acquisitionGolb";
    /**( 5局之后不下注将要被踢出房间，当前第三局：)*/
    public static isStartBeton: string = "isStartBeton";
    /**( 你被请出房间**)*/
    public static isStartBetonST: string = "isStartBetonST";
    /**(百家乐退出房间)*/
    public static gameOverSucces: string = "gameOverSucces";

    /**推送*玩家全压 */
    public static onUserAllPress: string = "onUserAllPress";
    /**推送*玩家看牌 */
    public static onUserSeeCard: string = "onUserSeeCard";
    /**推送*玩家比牌结果 */
    public static onUserToCard: string = "onUserToCard";
    /**推送*玩家弃牌 */
    public static onUserWaiveCard: string = "onUserWaiveCard";
    /**(推送*异常及时通知)*/
    public static onTimelyNotify: string = "onTimelyNotify";
     /**(推送*ai比牌)*/
    public static singonAiReadyTocard: string = "singonAiReadyTocard";
    /**(推送*检查玩家是否中途退出房间)*/
    public static gamestatus: string = "gamestatus";
    /**(推送*玩家下注类型)*/
    public static onUserBetSelect: string = "onUserBetSelect";
    /**(推送*金花其他玩家下注)*/
    public static onAiBetOrderUpdate: string = "onAiBetOrderUpdate";
    /**(推送*金花其他看牌)*/
    public static onAiSeeCard: string = "onAiSeeCard";
    /**(推送*金花其他弃牌)*/
    public static onAiWaiveCard: string = "onAiWaiveCard";
    /**(推送*玩家超时弃牌)*/
    public static onUserExceWaiveCard: string = "onUserExceWaiveCard";
    /**(推送*结算，游戏结束)*/
    public static onCheckout: string = "onCheckout";
    /**(推送*退出房间)*/
    public static leave: string = "leave";

    /**(金花其他下注)*/
    public static otherBotpour: string = "otherBotpour";
    /**(金花其他看牌)*/
    public static otherSeecard: string = "otherSeecard";
    /**(金花其他弃牌)*/
    public static otherAbandon: string = "otherAbandon";
    /**(游戏结束)*/
    public static gameOver: string = "gameOver";
    /**(游戏类型)*/
    public static gambleType: string = "gambleType";
    /**(玩家下注)*/
    //public static botpour:string ="botpour";
    /**(结算)*/
    public static settlement: string = "settlement";
    /**(退出房间)*/

}