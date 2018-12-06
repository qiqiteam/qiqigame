var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var typeData = (function () {
    function typeData() {
        this.playways = [];
    }
    typeData.prototype.initData = function (data) {
        this.id = data.id;
        this.code = data.code;
        this.name = data.name;
        this.indexStr = data.indexStr;
        var playwaydata;
        for (var index = 0; index < data.playways.length; index++) {
            playwaydata = new playWayData();
            playwaydata.initData(data.playways[index]);
            this.playways.push(playwaydata);
        }
    };
    /**根据游戏类型 查找游戏数据*/
    typeData.prototype.getPlayWayByindex = function (indexstr) {
        var playway;
        for (var index = 0; index < this.playways.length; index++) {
            if (this.playways[index].indexStr == indexstr) {
                playway = this.playways[index];
                break;
            }
        }
        return playway;
    };
    return typeData;
}());
__reflect(typeData.prototype, "typeData");
//# sourceMappingURL=typeData.js.map