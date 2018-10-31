var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GlobalFunction = (function () {
    function GlobalFunction() {
    }
    /**
     * 渐变隐藏效果
     */
    GlobalFunction.tweenHideView = function (disObj, waittime, time, callback, thisObj, params) {
        if (waittime === void 0) { waittime = 0; }
        if (time === void 0) { time = 1000; }
        disObj.visible = true;
        disObj.alpha = 1;
        egret.Tween.get(disObj).wait(waittime).to({ alpha: 0 }, time, egret.Ease.circOut).call(function () {
            disObj.visible = false;
            disObj.alpha = 1;
            if (callback) {
                callback.call(thisObj, params);
            }
        });
    };
    /**
     * 渐变显示效果
     */
    GlobalFunction.tweenShowView = function (disObj, waittime, time, callback, thisObj, params) {
        if (waittime === void 0) { waittime = 0; }
        if (time === void 0) { time = 1000; }
        disObj.visible = false;
        disObj.alpha = 0;
        egret.Tween.get(disObj).wait(waittime).to({ alpha: 1 }, time, egret.Ease.circOut).call(function () {
            disObj.visible = true;
            disObj.alpha = 1;
            if (callback) {
                callback.call(thisObj, params);
            }
        });
    };
    /**
      * 获取时间格式
      */
    GlobalFunction.getDateString = function (currdate) {
        var dateString = currdate.getFullYear() + '/' + (currdate.getMonth() + 1) + '/' + currdate.getDate();
        return dateString;
    };
    return GlobalFunction;
}());
__reflect(GlobalFunction.prototype, "GlobalFunction");
