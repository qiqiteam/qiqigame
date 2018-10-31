// module xlLib {
//     export class PomeloSocketMgr {
//         private static _instance: PomeloSocketMgr;

//         private pomelo: Pomelo;
//         //跟真实的ip已建立起连接
//         public hasGetNewIp: boolean = false;
//         private loginServerData: any;

//         public constructor() {
//             this.pomelo = new Pomelo();
//         }

//         /**
//         * WebSocket管理器单例
//         */
//         public static getInstance(): PomeloSocketMgr {
//             if (!this._instance) {
//                 this._instance = new PomeloSocketMgr();
//             }
//             return this._instance;
//         }


//         public connect(host: String, port: string, data: Object): void {
//             Console.log("开始连接");
//             this.loginServerData = data;
//             var params: any = new Object();
//             params.host = host;
//             params.port = port;
//             this.pomelo.init(params, false, this.onSocketSuc, this.onSocketFail, null, this);
//         }

//         public initPushMessage() {
//             //服务器推送
//             if (!GlobalData.isInitPush) {
//                 this.pomelo.on('server_push_message', (response) => {
//                     Console.log("服务器推包：" + JSON.stringify(response));
//                     switch (response.route) {
//                         case "OnUpdateLimitItem": //个人限红通知
//                             // GlobalFunction.initUpdateLimit(response.body);
//                             break;
//                         case "onGameLimitUpdated"://用户为非api账号并且在三合一的台子中
//                             GlobalFunction.changeGameLimit(response.body);
//                             break;
//                         case "onGamePotsUpdated"://彩池更新
//                             GlobalFunction.onGamePotsUpdated(response.body);
//                             break;
//                         case "onGameInformation": //订阅台桌后的，台桌信息 
//                             GlobalFunction.updateTableData(response.body);
//                             break;
//                         case "onNewUserEnterGame"://有用户进入房间
//                             GlobalFunction.onNewUserEnterGame(response.body);
//                             break;
//                         case "onUpdateUserBalance"://余额更新
//                             // GlobalFunction.onUpdateUserBalance(response.body);
//                             break;
//                         case "onUserBetOrderUpdate"://更新下注通知(所有人)
//                             GlobalFunction.onUserBetOrderUpdate(response.body);
//                             break;
//                         case "onUserLeaveGame"://有用户离开游戏
//                             GlobalFunction.onUserLeaveGame(response.body);
//                             break;
//                         case "onGameStatusChange"://游戏状态改变
//                             GlobalFunction.onGameStatusChange(response.body);
//                             break;
//                         case "onCheckout"://游戏结算
//                             GlobalFunction.onCheckout(response.body);
//                             break;
//                         case "onCheckOutEx"://本局下注 未结算完成 退出游戏广播
//                             // GlobalFunction.onCheckOutEx(response.body);
//                             break;
//                         case "onBulletin"://公告
//                             GlobalFunction.onBulletin(response.body);
//                             break;
//                         case "onTimelyNotify"://及时通知
//                             GlobalFunction.onNotify(response.body);
//                             break;
//                         case "onGameLocateMessage"://牛牛定位广播
//                             GlobalFunction.onGameLocateMessage(response.body);
//                             break;
//                         case "onGameCardsJudge"://牛牛牌型结果
//                             GlobalFunction.onGameCardsJudge(response.body);
//                             break;
//                         case "onGameCardsUpdated"://牛牛发牌
//                             if (GlobalData.isShowCard) {
//                                 GlobalFunction.onGameCardsUpdated(response.body);//暂时不显示发牌
//                             }
//                             break;
//                     }
//                     GlobalData.isInitPush = true;
//                 });
//             }

//             this.pomelo.on('close', function (e: any): void {
//                 // 连接关闭
//                 Console.log("连接关闭");
//                 if (!GlobalData.isKick) {
//                     GlobalFunction.onClose(e);
//                 }
//             });
//             this.pomelo.on('io-error', function (e: any): void {
//                 // 连接关闭
//                 Console.log("连接关闭");
//                 if (!GlobalData.isKick) {
//                     GlobalFunction.onClose(e);
//                 }
//             });
//             this.pomelo.on("onKick", (e: any) => {
//                 // 被踢出
//                 Console.log("被踢出");
//                 GlobalData.isKick = true;
//                 GlobalFunction.onKick(e);
//             });
//         }

//         //请求服务request
//         public request(route: string, msg: any, cb: Function, thisArg?: any, ecb?: Function, ishow: boolean = true): void {
//             Console.log("请求接口：" + route + "--------" + JSON.stringify(msg));
//             this.pomelo.request(route, msg, (response) => {
//                 Console.log("接口数据：" + JSON.stringify(response));
//                 if (response.code == 200) {
//                     cb.call(thisArg, response);
//                 }
//                 else {
//                     if (ecb) {
//                         ecb.call(thisArg, response);
//                     }
//                     if (ishow) {
//                         xlLib.TipsUtils.showFloatWordTips(response.msg);
//                     }
//                 }
//             });
//         }

//         private requestGate(): void {
//             var data: any = new Object;
//             data.version = 0x02;
//             this.request("gate.gateHandler.hello", data, this.getHellGateSucHandler, this, this.getHellGateFailHandler, false);
//         }

//         private requestToken(userName: string, passWord: string): void {
//             var data: any = new Object();
//             data.userName = userName;
//             data.passWord = passWord;
//             this.request("connector.playerHandler.GetToken", data, this.getTokenHandler, this, this.getTokenErrorHandler);
//         }

//         private getTokenHandler(response: any) {
//             EventUtil.dispatchEvent(EventConst.ON_GET_TOKEN_SUCCES, response);
//             this.requestLogin(response.msg.token, this.loginServerData.userName);
//         }

//         private requestLogin(token: string, userName: string): void {
//             var data: any = new Object;
//             data.userName = userName;
//             data.token = token;
//             if (xlLib.Utils.isAndroid) {
//                 data.deviceType = DeviceType.android;
//             }
//             else if (xlLib.Utils.isIOS) {
//                 data.deviceType = DeviceType.ios;
//             }
//             else {
//                 data.deviceType = DeviceType.win;
//             }
//             data.loginType = LoginType.normal;
//             this.request("connector.playerHandler.LoginEx", data, this.loginSuccessFunc, this, this.loginFailFunc);
//         }

//         private loginSuccessFunc(response: any) {
//             EventUtil.dispatchEvent(EventConst.ON_LOGIN_SUCCES, response);
//             this.initPushMessage();
//             Console.log("用户登录成功");
//         }

//         private loginFailFunc(response: any) {
//             EventUtil.dispatchEvent(EventConst.ON_LOGIN_FAIL, response);
//             Console.log("用户登录失败");
//         }


//         private getTokenErrorHandler(response: any) {
//             EventUtil.dispatchEvent(EventConst.ON_GET_TOKEN_FAIL, response);
//             this.pomelo.disconnect();
//             // this.pomelo.off("server_push_message");
//             // this.pomelo.off("close");
//             // this.pomelo.off("onKick");
//             // this.pomelo = null;
//             GlobalData.isInitPush = false;
//             // PomeloSocketMgr._instance = null;
//             Console.log("获取Token失败");
//         }


//         private onSocketSuc(response: any) {
//             if (!this.hasGetNewIp) {
//                 this.requestGate();
//             }
//             else {
//                 // this.initPushMessage();
//                 this.requestToken(this.loginServerData.userName, this.loginServerData.passWord);
//             }
//             EventUtil.dispatchEvent(EventConst.ON_SOCKET_SUC, response);
//             Console.log("socket连接成功");
//         }

//         private onSocketFail(response: any) {
//             EventUtil.dispatchEvent(EventConst.ON_SOCKET_FAIL, response);
//             Console.log("socket初始化失败");
//         }

//         private getHellGateSucHandler(response: any) {
//             var params: any = new Object();
//             params.host = response.msg.host;
//             params.port = response.msg.port;
//             Const.GAME_HOST = response.msg.host;
//             Const.GAME_PORT = response.msg.port;
//             this.pomelo.disconnect();
//             this.hasGetNewIp = true;
//             this.pomelo.init(params, false, this.onSocketSuc, this.onSocketFail, null, this);
//         }

//         private getHellGateFailHandler(response: any) {
//             this.hasGetNewIp = false;
//             if (response.msg && response.msg != "") {
//                 xlLib.TipsUtils.showFloatWordTips(response.msg);
//             } else {
//                 xlLib.TipsUtils.showFloatWordTips("错误码：" + response.code);
//             }
//             // else {

//             //     this.requestToken(this.loginServerData.userName, this.loginServerData.passWord);
//             // }
//         }

//         //请求服务 notify  
//         public notify(route: string, msg: any): void {
//             this.pomelo.notify(route, msg);
//         }

//         public disconnect(): void {
//             this.pomelo.disconnect();
//         }
//     }
// }