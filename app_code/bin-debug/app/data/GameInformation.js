// class GameInformation {
//     /**下注倒计时总时长  */
//     private gameBetTimeOut: number;
//     /**房间人数 */
//     private gameRoomOnlineNumber: number;
//     /**名字  */
//     private gameName: string;
//     /** 1.在开始下注状态时为，倒计时剩余时间 2.在结算完成时 为，当局结算结果  */
//     private gameStatusParams: number;
//     /**游戏类型 百家乐 bacc 龙虎 dt 牛牛 nn  */
//     private gameType: string;
//     /**游戏状态 0 维护 1 洗牌 2 开始下注 3 停止下注 4 派牌 5 结算 6 结算完成  */
//     private gameStatus: number;
//     /**历史记录  */
//     private gameHistory: Array<number> = [];
//     /**牛牛历史记录 */
//     private nnGameHistory: Array<NNRound> = [];
//     /**游戏 id  */
//     private gameId: number;
//     /**true 为三合一，false 电子台  */
//     private gameMode: number;
//     /**时间戳  */
//     private timestamp: number;
//     /**桌台最低限红 */
//     private tableLimitMin: number;
//     /**桌台最高限红 */
//     private tableLimitMax: number;
//     public constructor(data: any) {
//         this.gameBetTimeOut = data.gameBetTimeOut;
//         this.gameRoomOnlineNumber = data.gameRoomOnlineNumber;
//         this.gameName = data.gameName;
//         this.gameStatusParams = data.gameStatusParams;
//         this.gameType = data.gameType;
//         this.gameStatus = data.gameStatus;
//         if (data.gameHistory) {
//             if (this.gameType == Const.NNName || this.gameType == Const.ZXName) {
//                 this.nnGameHistory = [];
//                 for (var m = 0; m < data.gameHistory.length; m++) {
//                     var roundData = data.gameHistory[m];
//                     var nnRound: NNRound = new NNRound();
//                     for (var n = 0; n < roundData.length; n++) {
//                         var model: NNModel = new NNModel();
//                         model.setResult(roundData[n].nResult);
//                         model.setWinner(roundData[n].nWinner);
//                         nnRound.insert(model);
//                     }
//                     this.nnGameHistory.push(nnRound);
//                 }
//             } else {
//                 this.gameHistory = [];
//                 for (var i in data.gameHistory) {
//                     this.gameHistory.push(data.gameHistory[i]);
//                 }
//             }
//         }
//         this.gameId = data.gameId;
//         this.gameMode = data.gameMode;
//         this.timestamp = new Date().getTime();
//         this.tableLimitMin = data.tableLimitMin;
//         this.tableLimitMax = data.tableLimitMax;
//     }
//     public update(data: any) {
//         this.gameBetTimeOut = data.gameBetTimeOut;
//         this.gameRoomOnlineNumber = data.gameRoomOnlineNumber;
//         this.gameName = data.gameName;
//         this.gameStatusParams = data.gameStatusParams;
//         this.gameType = data.gameType;
//         this.gameStatus = data.gameStatus;
//         if (data.gameHistory) {
//             if (this.gameType == Const.NNName || this.gameType == Const.ZXName) {
//                 this.nnGameHistory = [];
//                 for (var m = 0; m < data.gameHistory.length; m++) {
//                     var roundData = data.gameHistory[m];
//                     var nnRound: NNRound = new NNRound();
//                     for (var n = 0; n < roundData.length; n++) {
//                         var model: NNModel = new NNModel();
//                         model.setResult(roundData[n].nResult);
//                         model.setWinner(roundData[n].nWinner);
//                         nnRound.insert(model);
//                     }
//                     this.nnGameHistory.push(nnRound);
//                 }
//             } else {
//                 this.gameHistory = [];
//                 for (var i in data.gameHistory) {
//                     this.gameHistory.push(data.gameHistory[i]);
//                 }
//             }
//         }
//         this.gameId = data.gameId;
//         this.gameMode = data.gameMoe;
//         this.timestamp = new Date().getTime();
//         this.tableLimitMin = data.tableLimitMin;
//         this.tableLimitMax = data.tableLimitMax;
//     }
//     public getTimestamp(): number {
//         return this.timestamp;
//     }
//     public getGameId(): number {
//         return this.gameId;
//     }
//     public getGameName(): string {
//         return this.gameName;
//     }
//     public getGameStatus(): number {
//         return this.gameStatus;
//     }
//     public setGameStatus(status: number) {
//         this.gameStatus = status;
//     }
//     public getGameHistory(): Array<number> {
//         return this.gameHistory;
//     }
//     public getNNGameHistory(): Array<NNRound> {
//         return this.nnGameHistory;
//     }
//     public addGameHistory(num: number) {
//         this.gameHistory.push(num);
//     }
//     public addNNGameHistory(round: any) {
//         var nnRound: NNRound = new NNRound();
//         for (var n = 0; n < round.length; n++) {
//             var model: NNModel = new NNModel();
//             model.setResult(round[n].nResult);
//             model.setWinner(round[n].nWinner);
//             nnRound.insert(model);
//         }
//         this.nnGameHistory.push(nnRound);
//     }
//     public clearGameHistory() {
//         this.gameHistory = [];
//     }
//     public clearNNGameHistory() {
//         this.nnGameHistory = [];
//     }
//     public getOnlineNum(): number {
//         return this.gameRoomOnlineNumber;
//     }
//     public getGameStatusParams(): number {
//         return this.gameStatusParams;
//     }
//     public setGameStatusParams(num: number): void {
//         this.gameStatusParams = num;
//         this.timestamp = new Date().getTime();
//     }
//     public getTableLimitMin(): number {
//         return this.tableLimitMin;
//     }
//     public setTableLimitMin(num: number) {
//         this.tableLimitMin = num;
//     }
//     public getTableLimitMax(): number {
//         return this.tableLimitMax;
//     }
//     public setTableLimitMax(num: number) {
//         this.tableLimitMax = num;
//     }
//     public getGameMode(): number {
//         return this.gameMode;
//     }
//     // public getBetTimeOut(): number {
//     //     return this.gameBetTimeOut;
//     // }
// } 
