var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**牛牛模块界面  */
var NNView = (function (_super) {
    __extends(NNView, _super);
    function NNView(isReConnect) {
        if (isReConnect === void 0) { isReConnect = false; }
        var _this = _super.call(this) || this;
        _this.skinName = "NNViewSkin";
        return _this;
    }
    NNView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    NNView.prototype.setScreenSize = function (scaleMode) {
        egret.MainContext.instance.stage.scaleMode = scaleMode;
        xlLib.ScreenUtils.onResizeNotify();
    };
    /*添加适配*/
    NNView.prototype.resize = function () {
        if (this.bgImg) {
            this.bgImg.width = xlLib.Global.screenWidth;
            this.bgImg.height = xlLib.Global.screenHeight;
        }
    };
    NNView.prototype.destroy = function () {
        this.clearTime();
        xlLib.SoundMgr.instance.stopSounds();
    };
    /**清除倒计时*/
    NNView.prototype.clearTime = function () {
        // if (this.timer) {
        // 	this.timer.stop();
        // 	this.timeTxt.visible = false;
        // 	this.time_grp.visible = false;
        // 	this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // 	this.timer = null;
        // }
    };
    /**开始倒计时*/
    NNView.prototype.startCountDown = function (time) {
        // this.timeTxt.text = time + "";
        // this.timeTxt.visible = true;
        // this.time_grp.visible = true;
        // this.time = time;
        // if (this.timer == null) {
        // 	this.timer = new egret.Timer(1000);
        // 	this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // 	this.timer.start();
        // }
    };
    return NNView;
}(eui.Component));
__reflect(NNView.prototype, "NNView");
