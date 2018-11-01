var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
        }
    };
    return LodingView;
}(eui.Component));
__reflect(LodingView.prototype, "LodingView");
//# sourceMappingURL=LodingView.js.map