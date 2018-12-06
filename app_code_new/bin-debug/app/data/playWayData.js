var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var playWayData = (function () {
    function playWayData() {
    }
    playWayData.prototype.initData = function (data) {
        this.changecard = data.changecard;
        this.code = data.code;
        this.extpro = data.extpro;
        this.free = data.free;
        this.groups = data.groups;
        this.id = data.id;
        this.items = data.items;
        this.level = data.level;
        this.maxcoins = data.maxcoins;
        this.memo = data.memo;
        this.mincoins = data.mincoins;
        this.name = data.name;
        this.onlineusers = data.onlineusers;
        this.roomtitle = data.roomtitle;
        this.score = data.score;
        this.shuffle = data.shuffle;
        this.indexStr = data.indexStr;
    };
    return playWayData;
}());
__reflect(playWayData.prototype, "playWayData");
//# sourceMappingURL=playWayData.js.map