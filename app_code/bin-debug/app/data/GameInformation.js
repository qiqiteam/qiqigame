var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameInformation = (function () {
    function GameInformation(data) {
        /**历史记录  */
        this.gameHistory = [];
        /**牛牛历史记录 */
        this.nnGameHistory = [];
        this.gameBetTimeOut = data.gameBetTimeOut;
        this.gameRoomOnlineNumber = data.gameRoomOnlineNumber;
        this.gameName = data.gameName;
        this.gameStatusParams = data.gameStatusParams;
        this.gameType = data.gameType;
        this.gameStatus = data.gameStatus;
        if (data.gameHistory) {
            if (this.gameType == Const.NNName || this.gameType == Const.ZXName) {
                this.nnGameHistory = [];
                for (var m = 0; m < data.gameHistory.length; m++) {
                    var roundData = data.gameHistory[m];
                    var nnRound = new NNRound();
                    for (var n = 0; n < roundData.length; n++) {
                        var model = new NNModel();
                        model.setResult(roundData[n].nResult);
                        model.setWinner(roundData[n].nWinner);
                        nnRound.insert(model);
                    }
                    this.nnGameHistory.push(nnRound);
                }
            }
            else {
                this.gameHistory = [];
                for (var i in data.gameHistory) {
                    this.gameHistory.push(data.gameHistory[i]);
                }
            }
        }
        this.gameId = data.gameId;
        this.gameMode = data.gameMode;
        this.timestamp = new Date().getTime();
        this.tableLimitMin = data.tableLimitMin;
        this.tableLimitMax = data.tableLimitMax;
    }
    GameInformation.prototype.update = function (data) {
        this.gameBetTimeOut = data.gameBetTimeOut;
        this.gameRoomOnlineNumber = data.gameRoomOnlineNumber;
        this.gameName = data.gameName;
        this.gameStatusParams = data.gameStatusParams;
        this.gameType = data.gameType;
        this.gameStatus = data.gameStatus;
        if (data.gameHistory) {
            if (this.gameType == Const.NNName || this.gameType == Const.ZXName) {
                this.nnGameHistory = [];
                for (var m = 0; m < data.gameHistory.length; m++) {
                    var roundData = data.gameHistory[m];
                    var nnRound = new NNRound();
                    for (var n = 0; n < roundData.length; n++) {
                        var model = new NNModel();
                        model.setResult(roundData[n].nResult);
                        model.setWinner(roundData[n].nWinner);
                        nnRound.insert(model);
                    }
                    this.nnGameHistory.push(nnRound);
                }
            }
            else {
                this.gameHistory = [];
                for (var i in data.gameHistory) {
                    this.gameHistory.push(data.gameHistory[i]);
                }
            }
        }
        this.gameId = data.gameId;
        this.gameMode = data.gameMoe;
        this.timestamp = new Date().getTime();
        this.tableLimitMin = data.tableLimitMin;
        this.tableLimitMax = data.tableLimitMax;
    };
    GameInformation.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    GameInformation.prototype.getGameId = function () {
        return this.gameId;
    };
    GameInformation.prototype.getGameName = function () {
        return this.gameName;
    };
    GameInformation.prototype.getGameStatus = function () {
        return this.gameStatus;
    };
    GameInformation.prototype.setGameStatus = function (status) {
        this.gameStatus = status;
    };
    GameInformation.prototype.getGameHistory = function () {
        return this.gameHistory;
    };
    GameInformation.prototype.getNNGameHistory = function () {
        return this.nnGameHistory;
    };
    GameInformation.prototype.addGameHistory = function (num) {
        this.gameHistory.push(num);
    };
    GameInformation.prototype.addNNGameHistory = function (round) {
        var nnRound = new NNRound();
        for (var n = 0; n < round.length; n++) {
            var model = new NNModel();
            model.setResult(round[n].nResult);
            model.setWinner(round[n].nWinner);
            nnRound.insert(model);
        }
        this.nnGameHistory.push(nnRound);
    };
    GameInformation.prototype.clearGameHistory = function () {
        this.gameHistory = [];
    };
    GameInformation.prototype.clearNNGameHistory = function () {
        this.nnGameHistory = [];
    };
    GameInformation.prototype.getOnlineNum = function () {
        return this.gameRoomOnlineNumber;
    };
    GameInformation.prototype.getGameStatusParams = function () {
        return this.gameStatusParams;
    };
    GameInformation.prototype.setGameStatusParams = function (num) {
        this.gameStatusParams = num;
        this.timestamp = new Date().getTime();
    };
    GameInformation.prototype.getTableLimitMin = function () {
        return this.tableLimitMin;
    };
    GameInformation.prototype.setTableLimitMin = function (num) {
        this.tableLimitMin = num;
    };
    GameInformation.prototype.getTableLimitMax = function () {
        return this.tableLimitMax;
    };
    GameInformation.prototype.setTableLimitMax = function (num) {
        this.tableLimitMax = num;
    };
    GameInformation.prototype.getGameMode = function () {
        return this.gameMode;
    };
    return GameInformation;
}());
__reflect(GameInformation.prototype, "GameInformation");
//# sourceMappingURL=GameInformation.js.map