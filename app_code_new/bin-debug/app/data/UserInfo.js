var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserInfo = (function () {
    function UserInfo() {
        this.gamelist = [];
        this.playes = []; //玩家数据表
    }
    UserInfo.getInstance = function () {
        if (!this._instance) {
            this._instance = new UserInfo();
        }
        return this._instance;
    };
    /**根据游戏类型 查找游戏数据*/
    UserInfo.prototype.getGameDataByindex = function (indexstr) {
        var gamedata;
        for (var index = 0; index < this.gamelist.length; index++) {
            if (this.gamelist[index].indexStr == indexstr) {
                gamedata = this.gamelist[index];
                break;
            }
        }
        return gamedata;
    };
    UserInfo.prototype.addPlayes = function (data) {
        for (var i = 0; i < data.player.length; i++) {
            if (data.player[i].id == this.uid) {
                this.myPlayer = new PlayerData();
                this.myPlayer.initData(data.player[i]);
            }
            var player = new PlayerData();
            player.initData(data.player[i]);
            this.playes.push(player);
        }
    };
    UserInfo.prototype.joinRoomPlayer = function (data) {
        if (data.player.id == this.myPlayer.id) {
            //this.playes[0] = data.player;
        }
        else {
            this.playes.push(data.player);
        }
    };
    /**初始化用户数据*/
    UserInfo.prototype.initUserInfo = function (data) {
        var info = data.data;
        this.uid = info.id;
        this.username = info.username;
        this.goldcoins = info.goldcoins;
        this.token = info.token;
        var gamedata;
        for (var index = 0; index < data.games.length; index++) {
            gamedata = new gameData();
            gamedata.initData(data.games[index]);
            this.gamelist.push(gamedata);
        }
    };
    /**查找用户信息通过UID */
    UserInfo.prototype.findUserInfo = function (id) {
        for (var i = 0; i < this.playes.length; i++) {
            if (this.playes[i].id == id) {
                return this.playes[i];
            }
        }
    };
    /**查找在本游戏里的实际座位 */
    UserInfo.prototype.findSeatNumber = function (index) {
        var num = 0;
        if (index == this.playes[0].index) {
            return 0;
        }
        if (index < this.playes[0].index) {
            num = this.playes.length - (this.playes[0].index - index);
        }
        else {
            num = index - this.playes[0].index;
        }
        return num;
    };
    return UserInfo;
}());
__reflect(UserInfo.prototype, "UserInfo");
//# sourceMappingURL=UserInfo.js.map