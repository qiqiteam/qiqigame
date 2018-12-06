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
/**
 * 提示信息
 */
var xlLib;
(function (xlLib) {
    var FloatTips = (function (_super) {
        __extends(FloatTips, _super);
        function FloatTips() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        FloatTips.prototype.init = function () {
            this.tipsBg = xlLib.DisplayUtils.createBitmapByName("tipsBg");
            var scale9Grid = new egret.Rectangle(190, 10, 2, 2);
            this.tipsBg.scale9Grid = scale9Grid;
            this.addChild(this.tipsBg);
            this._tips_tf = xlLib.DisplayUtils.createTextLabel("", 0xffffff, 22);
            this.addChild(this._tips_tf);
        };
        FloatTips.prototype.setTipsText = function (tipsMsg) {
            this._tips_tf.text = tipsMsg;
            this.tipsBg.width = this._tips_tf.width + 80;
            this.width = this.tipsBg.width;
            this._tips_tf.x = (this.width - this._tips_tf.width) >> 1;
            this._tips_tf.y = (this.height - this._tips_tf.height) >> 1;
            this.tipsBg.x = (this.width - this.tipsBg.width) >> 1;
        };
        return FloatTips;
    }(egret.DisplayObjectContainer));
    xlLib.FloatTips = FloatTips;
    __reflect(FloatTips.prototype, "xlLib.FloatTips");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=FloatTips.js.map