var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameIconData = (function () {
    function GameIconData() {
    }
    GameIconData.prototype.initData = function (data) {
        this.url = data.url;
        this.isOpen = data.isOpen;
        this.game = data.game;
        this.type = data.type;
        this.ishot = data.ishot;
        return this;
    };
    return GameIconData;
}());
__reflect(GameIconData.prototype, "GameIconData");
//# sourceMappingURL=GameIconData.js.map