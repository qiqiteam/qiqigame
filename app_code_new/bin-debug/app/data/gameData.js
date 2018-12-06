var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var gameData = (function () {
    function gameData() {
        this.types = [];
    }
    gameData.prototype.initData = function (data) {
        this.id = data.id;
        this.code = data.code;
        this.name = data.name;
        this.indexStr = data.indexStr;
        var typedata;
        for (var index = 0; index < data.types.length; index++) {
            typedata = new typeData();
            typedata.initData(data.types[index]);
            this.types.push(typedata);
        }
    };
    /**根据游戏类型 查找游戏数据*/
    gameData.prototype.getTypeDataByindex = function (indexstr) {
        var typedata;
        for (var index = 0; index < this.types.length; index++) {
            if (this.types[index].indexStr == indexstr) {
                typedata = this.types[index];
                break;
            }
        }
        return typedata;
    };
    return gameData;
}());
__reflect(gameData.prototype, "gameData");
//# sourceMappingURL=gameData.js.map