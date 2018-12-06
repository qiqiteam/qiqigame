var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerData = (function () {
    function PlayerData() {
    }
    PlayerData.prototype.initData = function (data) {
        this.integral = data.id;
        this.lastlogintime = data.lastlogintime;
        this.login = data.login;
        this.message = data.message;
        this.online = data.online;
        this.opendeal = data.opendeal;
        this.orgi = data.orgi;
        this.passupdatetime = data.passupdatetime;
        this.playerindex = data.playerindex;
        this.playertype = data.playertype;
        this.province = data.province;
        this.roomid = data.roomid;
        this.roomready = data.roomready;
        this.token = data.token;
        this.updatetime = data.updatetime;
        this.username = data.username;
        this.goldcoins = data.goldcoins;
        this.id = data.id;
        this.index = data.index;
    };
    return PlayerData;
}());
__reflect(PlayerData.prototype, "PlayerData");
//# sourceMappingURL=PlayerData.js.map