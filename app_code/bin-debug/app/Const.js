var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Const = (function () {
    function Const() {
    }
    Const.getNNType = function (seatId) {
        var type = "";
        switch (seatId) {
            case 1:
                type = "a";
                break;
            case 2:
                type = "b";
                break;
            case 3:
                type = "c";
                break;
        }
        return type;
    };
    Const.getSeatByBetType = function (type) {
        var seatId = -1;
        switch (type) {
            case this.TYPE_NN_X_A1:
            case this.TYPE_NN_X_A2:
            case this.TYPE_NN_X_A3:
                seatId = 1;
                break;
            case this.TYPE_NN_X_B1:
            case this.TYPE_NN_X_B2:
            case this.TYPE_NN_X_B3:
                seatId = 2;
                break;
            case this.TYPE_NN_X_C1:
            case this.TYPE_NN_X_C2:
            case this.TYPE_NN_X_C3:
                seatId = 3;
                break;
        }
        return seatId;
    };
    Const.getZXNBetTypeString = function (betType) {
        var type = "";
        switch (betType) {
            case 1:
                type = this.TYPE_ZXN_X_A2;
                break;
            case 0:
                type = this.TYPE_ZXN_X_A1;
                break;
            case 3:
                type = this.TYPE_ZXN_X_A4;
                break;
            case 2:
                type = this.TYPE_ZXN_X_A3;
                break;
            case 4:
                type = this.TYPE_ZXN_X_A5;
                break;
            case 5:
                type = this.TYPE_ZXN_X_A6;
                break;
            case 6:
                type = this.TYPE_ZXN_X_A7;
                break;
        }
        return type;
    };
    Const.getZXNBetType = function (type) {
        var betType = -1;
        switch (type) {
            case this.TYPE_ZXN_X_A2:
                betType = 1;
                break;
            case this.TYPE_ZXN_X_A1:
                betType = 0;
                break;
            case this.TYPE_ZXN_X_A4:
                betType = 3;
                break;
            case this.TYPE_ZXN_X_A3:
                betType = 2;
                break;
            case this.TYPE_ZXN_X_A5:
                betType = 4;
                break;
            case this.TYPE_ZXN_X_A6:
                betType = 5;
                break;
            case this.TYPE_ZXN_X_A7:
                betType = 6;
                break;
        }
        return betType;
    };
    Const.getBetType = function (type) {
        var betType = -1;
        switch (type) {
            case this.TYPE_Z:
                betType = 1;
                break;
            case this.TYPE_X:
                betType = 0;
                break;
            case this.TYPE_H:
                betType = 2;
                break;
            case this.TYPE_ZD:
                betType = 4;
                break;
            case this.TYPE_XD:
                betType = 3;
                break;
            case this.TYPE_LONG:
                betType = 0;
                break;
            case this.TYPE_HU:
                betType = 1;
                break;
            case this.TYPE_HE:
                betType = 2;
                break;
            case this.TYPE_NN_X_A1:
                betType = 0;
                break;
            case this.TYPE_NN_X_A2:
                betType = 1;
                break;
            case this.TYPE_NN_X_A3:
                betType = 2;
                break;
            case this.TYPE_NN_X_B1:
                betType = 0;
                break;
            case this.TYPE_NN_X_B2:
                betType = 1;
                break;
            case this.TYPE_NN_X_B3:
                betType = 2;
                break;
            case this.TYPE_NN_X_C1:
                betType = 0;
                break;
            case this.TYPE_NN_X_C2:
                betType = 1;
                break;
            case this.TYPE_NN_X_C3:
                betType = 2;
                break;
        }
        return betType;
    };
    return Const;
}());
Const.GAME_HOST = "192.168.1.36";
Const.GAME_PORT = "0981";
/**珠盘珠子宽度 */
Const.ZP_PEARL_WIDTH = 40;
/**珠盘珠子高度 */
Const.ZP_PEARL_HEIGHT = 40;
/**大路珠子宽度 */
Const.DL_PEARL_WIDTH = 20;
/**大路珠子高度 */
Const.DL_PEARL_HEIGHT = 20;
/**游戏珠盘珠子宽度 */
Const.ZP_GAME_PEARL_WIDTH = 40;
/**游戏珠盘珠子高度 */
Const.ZP_GAME_PEARL_HEIGHT = 40;
/**游戏大路珠子宽度 */
Const.DL_GAME_PEARL_WIDTH = 20;
/**游戏大路珠子高度 */
Const.DL_GAME_PEARL_HEIGHT = 20;
/**牛牛珠子宽度 */
Const.NN_GAME_PEARL_WIDTH = 42;
/**牛牛珠子高度 */
Const.NN_GAME_PEARL_HEIGHT = 42;
Const.NN_GAME_NET_WIDTH = 50;
/**百家乐游戏类型 */
Const.BJLName = "bacc";
/**龙虎游戏类型 */
Const.LFName = "dt";
/**牛牛游戏类型 */
Const.NNName = "nn";
/**庄闲牛游戏类型 */
Const.ZXName = "nb";
/**庄 */
Const.TYPE_Z = "Z";
/**闲 */
Const.TYPE_X = "X";
/**和 */
Const.TYPE_H = "H";
/**庄对 */
Const.TYPE_ZD = "ZD";
/**闲对 */
Const.TYPE_XD = "XD";
/**龙 */
Const.TYPE_LONG = "LONG";
/**虎 */
Const.TYPE_HU = "HU";
/**和 */
Const.TYPE_HE = "HE";
/**牛牛 闲1 A1*/
Const.TYPE_NN_X_A1 = "a1";
/**牛牛 闲1 A2*/
Const.TYPE_NN_X_A2 = "a2";
/**牛牛 闲1 A2*/
Const.TYPE_NN_X_A3 = "a3";
/**牛牛 闲2 B1*/
Const.TYPE_NN_X_B1 = "b1";
/**牛牛 闲2 B2*/
Const.TYPE_NN_X_B2 = "b2";
/**牛牛 闲2 B2*/
Const.TYPE_NN_X_B3 = "b3";
/**牛牛 闲2 C1*/
Const.TYPE_NN_X_C1 = "c1";
/**牛牛 闲2 C2*/
Const.TYPE_NN_X_C2 = "c2";
/**牛牛 闲2 C2*/
Const.TYPE_NN_X_C3 = "c3";
/**庄闲牛 A1*/
Const.TYPE_ZXN_X_A1 = "a1";
/**庄闲牛 A2*/
Const.TYPE_ZXN_X_A2 = "a2";
/**庄闲牛 A3*/
Const.TYPE_ZXN_X_A3 = "a3";
/**庄闲牛 A4*/
Const.TYPE_ZXN_X_A4 = "a4";
/**庄闲牛 A5*/
Const.TYPE_ZXN_X_A5 = "a5";
/**庄闲牛 A6*/
Const.TYPE_ZXN_X_A6 = "a6";
/**庄闲牛 A6*/
Const.TYPE_ZXN_X_A7 = "a7";
/** 维护 */
Const.GAME_STATE_0 = 0;
/** 洗牌 */
Const.GAME_STATE_1 = 1;
/** 开始下注 */
Const.GAME_STATE_2 = 2;
/** 停止下注 */
Const.GAME_STATE_3 = 3;
/** 派牌 */
Const.GAME_STATE_4 = 4;
/** 结算 */
Const.GAME_STATE_5 = 5;
/** 结算完成 */
Const.GAME_STATE_6 = 6;
/** 等待开始 */
Const.GAME_STATE_7 = 7;
Const.NN_NAMES = ["无牛", "牛一", "牛二", "牛三", "牛四", "牛五", "牛六", "牛七", "牛八", "牛九",
    "牛牛", "五花"];
Const.tableTxtXPos = [139, 191, 242, 295, 430, 290, 360];
Const.tableLhXPos = [139, 245, 342, 295, 430, 290, 360];
/**
 * 权限管理
 */
/**开启或关闭登录功能 前端无需处理 */
Const.loginable = 1;
/**开启或关闭投注功能 投注时，应立即显示  投注失败：您的帐号已被管理员设定禁止投注 */
Const.betable = 2;
/**开启或关闭hide功能 前端无需处理 */
Const.hideable = 4;
/**开启或关闭自主取款功能  在点击大厅或游戏左侧“在线存取款” 功能时，应立即显示 请求失败：您的帐号已被管理员设定禁止在线存取款 */
Const.moneyable = 8;
/**开启或关闭聊天功能功能  在发送聊天信息时，应立即显示 发送聊天内容失败：您的帐号已被管理设定禁止聊天 */
Const.chatable = 16;
/**开启或关闭联系客服功能  在点击大厅或游戏左侧“联系在线客服” 功能时，应立即显示 请求失败：您的帐号已被管理员设定禁止联系在线客服 */
Const.serviceable = 32;
/**开启或关闭意见反馈功能  在点击大厅或游戏上方的“意见反馈”功能时，应立即显示 请求失败：您的帐号已被管理员设定禁止意见反馈 */
Const.feedable = 64;
/**API用户标志位  前端需要针对不拥有此类权限用户，做桌台限红处理，在投注条件不满足(超过限红)时，应立即显示， 投注失败：本游戏桌的限红已超过最高上限 */
Const.apiuser = 128;
/**显示或隐藏洗码 */
Const.showXiMa = 256;
__reflect(Const.prototype, "Const");
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["win"] = 1] = "win";
    DeviceType[DeviceType["mac"] = 2] = "mac";
    DeviceType[DeviceType["android"] = 3] = "android";
    DeviceType[DeviceType["ios"] = 4] = "ios";
})(DeviceType || (DeviceType = {}));
var LoginType;
(function (LoginType) {
    LoginType[LoginType["normal"] = 1] = "normal";
    LoginType[LoginType["open"] = 2] = "open";
})(LoginType || (LoginType = {}));
//# sourceMappingURL=Const.js.map