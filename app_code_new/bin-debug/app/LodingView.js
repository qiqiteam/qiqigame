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
    function LodingView() {
        var _this = _super.call(this) || this;
        _this.skinName = "LodingViewSkin";
        return _this;
    }
    LodingView.prototype.playLiuguang = function () {
        this.liuguang = xlLib.DisplayUtils.createDragonBonesDisplay('wzqp', "wzqp");
        dragonBones.WorldClock.clock.add(this.liuguang);
        var armatureDisplay = this.liuguang.getDisplay();
        armatureDisplay.x = 1230;
        armatureDisplay.y = 400;
        this.addChild(armatureDisplay);
        xlLib.DisplayUtils.runDragonBonesArmature(this.liuguang, "wzqp");
    };
    LodingView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.ami.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        this.play();
        this.playLiuguang();
        this.resize();
    };
    LodingView.prototype.partRemoved = function (partName, instance) {
        this.stop();
        xlLib.DisplayUtils.destoryDragonBonesArmature(this.liuguang, "wzqp");
        _super.prototype.partRemoved.call(this, partName, instance);
    };
    LodingView.prototype.onTweenComplete = function (evt) {
        this.ami.play(0);
    };
    LodingView.prototype.play = function () {
        this.ami.play(0);
    };
    LodingView.prototype.stop = function () {
        this.ami.stop();
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
            var widthX = Math.floor(524 * (loaded / total));
            this.load_rec.width = widthX;
            this.load_img.mask = this.load_rec;
        }
    };
    return LodingView;
}(eui.Component));
__reflect(LodingView.prototype, "LodingView");
//# sourceMappingURL=LodingView.js.map