var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ComBoxData = (function () {
    function ComBoxData(data) {
        this.id = data.id;
        this.name = data.name;
        this.data = data.data;
    }
    return ComBoxData;
}());
__reflect(ComBoxData.prototype, "ComBoxData");
//# sourceMappingURL=ComBoxData.js.map