var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventConst = (function () {
    function EventConst() {
    }
    return EventConst;
}());
/*** 获取TOKEN成功*/
EventConst.ON_GET_TOKEN_SUCCES = "onTokenSucces";
/*** 获取TOKEN失败*/
EventConst.ON_GET_TOKEN_FAIL = "onTokenFail";
/*** 登录成功*/
EventConst.ON_LOGIN_SUCCES = "onLoginSucces";
/*** 登录失败*/
EventConst.ON_LOGIN_FAIL = "onLoginFail";
/*** socket连接成功*/
EventConst.ON_SOCKET_SUC = "onSocketSuc";
/*** socket连接失败*/
EventConst.ON_SOCKET_FAIL = "onSocketFail";
/*** socket连接关闭*/
EventConst.ON_SOCKET_CLOSE = "onSocketClose";
/**更新下注通知(所有人) */
EventConst.ON_USER_BET_ORDER_UPDATA = "onUserBetOrderUpdate";
/*** 彩池更新*/
EventConst.ON_GAME_POTS_UPDATAED = "onGamePotsUpdated";
/*** 游戏状态改变*/
EventConst.ON_GAME_STATUS_CHANGE = "onGameStatusChange";
/*** 游戏结算*/
EventConst.ON_CHECK_OUT = "onCheckout";
/*** 余额更新广播*/
EventConst.ON_UPDATE_USER_BALANCE = "onUpdateUserBalance";
/*** 换台事件*/
EventConst.ON_CHANGE_GAME_TABLE = "onChangeGameTalbe";
/** 修改昵称 */
EventConst.CHANGE_NICKNAME = "changeNickname";
/** 返回大厅 */
EventConst.ON_BLACKLOBBY = "onBlackLobby";
/** 及时通知 */
EventConst.ON_NOTIFY = "onNotify";
/** 游戏限红更新 用户为非api账号并且在三合一的台子中 */
EventConst.ON_GAME_LIMIT_CHANGE = "onGameLimitChange";
/** 牛牛珠子刷新 */
EventConst.ON_NN_PEARL_APPEND = "onNNPearlAppend";
/** 牛牛定位广播 */
EventConst.ON_LOCATE_MESSAGE = "onGameLocateMessage";
/** 牛牛牌型结果 */
EventConst.ON_CARDS_JUDGE = "onGameCardsJudge";
/** 牛牛发牌 */
EventConst.ON_GAMECARDS_UPDATED = "onGameCardsUpdated";
__reflect(EventConst.prototype, "EventConst");
