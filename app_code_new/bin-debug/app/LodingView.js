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
 * 加载界面
 * */
var LodingView = (function (_super) {
    __extends(LodingView, _super);
    //public pro_img:eui.Image;
    function LodingView() {
        var _this = _super.call(this) || this;
        _this.skinName = "LodingViewSkin";
        return _this;
    }
    LodingView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.resize();
    };
    LodingView.prototype.resize = function () {
        if (this.bg_img) {
            this.bg_img.width = xlLib.Global.screenWidth;
            this.bg_img.height = xlLib.Global.screenHeight;
        }
    };
    /**
     * 进度回调
     * */
    LodingView.prototype.setProgress = function (loaded, total, desc, resourceName, force) {
        if (force === void 0) { force = false; }
        if (total && total != 0) {
            var widthX = Math.floor(598 * (loaded / total));
            this.load_rec.width = widthX;
            this.load_img.mask = this.load_rec;
            //this.pro_img.x = this.load_rec.width + this.load_img.x - this.pro_img.width/2;
        }
    };
    return LodingView;
}(eui.Component));
__reflect(LodingView.prototype, "LodingView");
//# sourceMappingURL=LodingView.js.map