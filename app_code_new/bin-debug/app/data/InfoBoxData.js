var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var InfoBoxData = (function () {
    function InfoBoxData(data) {
        this.id = data.id;
        this.name = data.name;
        this.data = data.data;
    }
    return InfoBoxData;
}());
__reflect(InfoBoxData.prototype, "InfoBoxData");
//# sourceMappingURL=InfoBoxData.js.map