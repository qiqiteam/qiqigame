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
var TipsLoading = (function (_super) {
    __extends(TipsLoading, _super);
    function TipsLoading() {
        var _this = _super.call(this) || this;
        _this.init();
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddHandler, _this);
        _this.once(egret.Event.REMOVED_FROM_STAGE, _this.destroy, _this);
        return _this;
    }
    TipsLoading.prototype.init = function () {
        var mask = xlLib.DisplayUtils.createMask(0.5, xlLib.Global.screenWidth, xlLib.Global.screenHeight);
        mask.touchEnabled = true;
        this.addChild(mask);
        this._tips_bg = xlLib.DisplayUtils.createBitmapByName("spinner");
        this._tips_bg.x = xlLib.Global.screenWidth >> 1;
        this._tips_bg.y = xlLib.Global.screenHeight >> 1;
        this._tips_bg.anchorOffsetX = this._tips_bg.width / 2;
        this._tips_bg.anchorOffsetY = this._tips_bg.height / 2;
        this._tips_bg.scaleX = this._tips_bg.scaleY = 0.4;
        this.addChild(this._tips_bg);
    };
    TipsLoading.prototype.onAddHandler = function (evt) {
        this.starRotation();
    };
    TipsLoading.prototype.starRotation = function () {
        egret.Tween.get(this._tips_bg).to({ rotation: this._tips_bg.rotation + 20 }, 100).call(this.starRotation, this);
    };
    TipsLoading.prototype.destroy = function () {
        egret.Tween.removeTweens(this._tips_bg);
        this._tips_bg = null;
    };
    return TipsLoading;
}(egret.DisplayObjectContainer));
__reflect(TipsLoading.prototype, "TipsLoading");
//# sourceMappingURL=TipsLoading.js.map