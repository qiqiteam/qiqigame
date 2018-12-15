var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventConst = (function () {
    function EventConst() {
    }
    /*** socket连接成功*/
    EventConst.ON_SOCKET_SUC = "onSocketSuc";
    /*** socket连接失败*/
    EventConst.ON_SOCKET_FAIL = "onSocketFail";
    /*** socket连接关闭*/
    EventConst.ON_SOCKET_CLOSE = "onSocketClose";
    //------------------C to S---------------------请求发送服务器协议
    /**发送自己拼牌顺序 */
    EventConst.niuniu_manual = "niuniu_manual";
    /**请求玩家列表 */
    EventConst.niuniu_player = "niuniu_player";
    /**加入房间 */
    EventConst.joinroom = "joinroom";
    /**开始牛牛游戏*/
    EventConst.niuniu_start = "niuniu_start";
    /**抢庄*/
    EventConst.niuniu_dohog = "niuniu_dohog";
    /**投注倍数*/
    EventConst.niuniu_dobet = "niuniu_dobet";
    /**取消匹配 */
    EventConst.niuniu_leave = "niuniu_leave";
    /**百家乐房间列表 */
    EventConst.BaccaratEfcsh = "BaccaratEfcsh";
    /**检查是否有上次加入房间*/
    EventConst.baijialegamestatus = "gamestatus";
    /**百家乐加入房间 */
    EventConst.BaccaratJoinroom = "BaccaratJoinroom";
    /**百家乐押注*/
    EventConst.baijialebeton = "baijialebeton";
    /**百家乐离开房间 */
    EventConst.BaccaratOnleave = "BaccaratOnleave";
    /**经典炸金花 */
    /**准备 */
    EventConst.prepare = "prepare";
    /**发牌 */
    EventConst.play = "play";
    /**(下注)*/
    EventConst.botpour = "botpour";
    /**全压 */
    EventConst.pressure = "pressure";
    /**看牌 */
    EventConst.seecard = "seecard";
    /**比牌 */
    EventConst.compareCard = "compareCard";
    /**弃牌 */
    EventConst.abandon = "abandon";
    /**(退出房间,取消准备)*/
    EventConst.leave = "leave";
    /**(点击退出按钮)*/
    EventConst.isLeave = "isLeave";
    /**(退出面板点击确定)*/
    EventConst.zjhLeave = "zjhLeave";
    /**(准备时定点击离开)*/
    EventConst.outRoom = "outRoom";
    /**二八杠 */
    /**开始游戏 */
    EventConst.erbagang_start = "erbagang_start";
    /**抢庄*/
    EventConst.erbagang_hog = "erbagang_hog";
    /**投注倍数*/
    EventConst.erbagang_bet = "erbagang_bet";
    /**关闭自动跟注 */
    EventConst.closeAutoFollow = "closeAutoFollow";
    /**自动跟注 */
    EventConst.onAutoFollow = "onAutoFollow";
    //------------------S to C---------------------服务端回包监听数据
    /**抢庄牛牛拼牌通知(所有人) */
    EventConst.onUserShowOrderUpdate = "onUserShowOrderUpdate";
    /**游戏状态 */
    EventConst.onGameStatusChange = "onGameStatusChange";
    /**所有玩家列表*/
    EventConst.players = "players";
    /**前20名玩家列表*/
    EventConst.onUserList = "onUserList";
    /**新玩家加入*/
    EventConst.onNewUserEnterGame = "onNewUserEnterGame";
    /**下注通知(所有人)*/
    EventConst.onUserBetOrderUpdate = "onUserBetOrderUpdate";
    /**抢庄通知(所有人)*/
    EventConst.onUserHogOrderUpdate = "onUserHogOrderUpdate";
    /**牛牛匹配中退出游戏、游戏结束退出*/
    EventConst.onUserLeave = "onUserLeave";
    /**监听抢庄按钮*/
    EventConst.hog = "hog";
    /**用户抢庄数*/
    EventConst.hognum = "hognum";
    /**庄家*/
    EventConst.banker = "banker";
    /**倍数列表*/
    EventConst.bet = "bet";
    /**用户倍数*/
    EventConst.betnum = "betnum";
    /**牌面信息+结算*/
    EventConst.summary = "summary";
    // /**时间*/
    // public static roomTime: string = "roomTime";
    // /**进入百家乐房间成功of失败*/
    // public static baccaratOnJoinRoom: string = "baccaratOnJoinRoom";
    /**进入百家乐房间列表成功of失败*/
    EventConst.parteySuccess = "parteySuccess";
    /**请求玩家列表 */
    EventConst.playersUserWin = "playersUserWin";
    /**前20名玩家 */
    EventConst.userwin = "userwin";
    /**(筹码)*/
    EventConst.onSendJetton = "onSendJetton";
    /**(个人限红通知)*/
    EventConst.OnUpdateLimitItem = "OnUpdateLimitItem";
    // /**（赔率）*/
    // public static onBJLjoinroom: string = "onBJLjoinroom";
    // /**（可以开始下注5秒倒计时）*/
    // public static startBeton: string = "startBeton";
    // /**自己下注*/
    // public static onCatch: string = "onCatch";
    // /**其他玩家下注*/
    // public static dealCatch: string = "dealCatch";
    // /**(开始发牌)*/
    // public static baccaratDeil: string = "baccaratDeil";
    // /**("参数异常")*/
    // public static theNumberOfTooMuch: string = "theNumberOfTooMuch";
    // /**(5秒后开始下注,处理结算动画)*/
    // public static beginBteon: string = "beginBteon";
    // /**( 金币不足**)*/
    // public static bsogc: string = "bsogc";
    /**( 金币变为**)*/
    EventConst.onUpdateUserBalance = "onUpdateUserBalance";
    // /**( 5局之后不下注将要被踢出房间，当前第三局：)*/
    // public static isStartBeton: string = "isStartBeton";
    // /**( 你被请出房间**)*/
    // public static isStartBetonST: string = "isStartBetonST";
    /**(退出游戏成功)*/
    EventConst.onUserLeaveGame = "onUserLeaveGame";
    /**推送*玩家全压 */
    EventConst.onUserAllPress = "onUserAllPress";
    /**推送*玩家看牌 */
    EventConst.onUserSeeCard = "onUserSeeCard";
    /**推送*玩家比牌结果 */
    EventConst.onUserToCard = "onUserToCard";
    /**推送*玩家弃牌 */
    EventConst.onUserWaiveCard = "onUserWaiveCard";
    /**(推送*异常及时通知)*/
    EventConst.onTimelyNotify = "onTimelyNotify";
    /**(推送*ai比牌)*/
    EventConst.singonAiReadyTocard = "singonAiReadyTocard";
    /**(推送*检查玩家是否中途退出房间)*/
    EventConst.gamestatus = "gamestatus";
    /**(推送*玩家下注类型)*/
    EventConst.onUserBetSelect = "onUserBetSelect";
    /**(推送*金花其他玩家下注)*/
    EventConst.onAiBetOrderUpdate = "onAiBetOrderUpdate";
    /**(推送*金花其他看牌)*/
    EventConst.onAiSeeCard = "onAiSeeCard";
    /**(推送*金花其他弃牌)*/
    EventConst.onAiWaiveCard = "onAiWaiveCard";
    /**(推送*玩家超时弃牌)*/
    EventConst.onUserExceWaiveCard = "onUserExceWaiveCard";
    /**(推送*结算，游戏结束)*/
    EventConst.onCheckout = "onCheckout";
    /**(金花其他下注)*/
    EventConst.otherBotpour = "otherBotpour";
    /**(金花其他看牌)*/
    EventConst.otherSeecard = "otherSeecard";
    /**(金花其他弃牌)*/
    EventConst.otherAbandon = "otherAbandon";
    /**(游戏结束)*/
    EventConst.gameOver = "gameOver";
    /**(游戏类型)*/
    EventConst.gambleType = "gambleType";
    /**(玩家下注)*/
    //public static botpour:string ="botpour";
    /**(结算)*/
    EventConst.settlement = "settlement";
    /**(推送*点击退出按钮,离开房间)*/
    EventConst.onUserIsLeave = "onUserIsLeave";
    /**(推送*点击退出面板,确定按钮离开房间)*/
    EventConst.onUserOutRoom = "onUserOutRoom";
    return EventConst;
}());
__reflect(EventConst.prototype, "EventConst");
//# sourceMappingURL=EventConst.js.map