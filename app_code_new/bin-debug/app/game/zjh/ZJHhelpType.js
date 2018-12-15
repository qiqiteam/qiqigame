var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**菜单——玩法面板按钮 */
var ZJHhelpType = (function (_super) {
    __extends(ZJHhelpType, _super);
    function ZJHhelpType() {
        var _this = _super.call(this) || this;
        _this.skinName = "ZhajhhelpTypeSkin";
        return _this;
    }
    ZJHhelpType.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ZJHhelpType.prototype.dataChanged = function () {
        // console.log("------------------"+this.data);
    };
    return ZJHhelpType;
}(eui.ItemRenderer));
__reflect(ZJHhelpType.prototype, "ZJHhelpType");
//# sourceMappingURL=ZJHhelpType.js.map