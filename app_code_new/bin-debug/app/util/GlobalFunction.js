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
    /**金币数字转字符加逗号 */
    GlobalFunction.Formatconversion = function (data) {
        var strzu = [];
        var str0 = '';
        var str1 = '';
        var str = data / 100 + '';
        if (data % 100 == 0) {
            if (str.length / 3 > 0 && str.length / 3 < 1) {
            }
            else if (str.length / 3 > 1 && str.length / 3 < 2) {
                str = str.slice(0, str.length - 3) + ',' + str.slice(str.length - 3);
            }
            else if (str.length / 3 > 2 && str.length / 3 < 3) {
                str = str.slice(0, str.length - 6) + ',' + str.slice(str.length - 6, str.length - 3) + ',' + str.slice(str.length - 3);
            }
        }
        else {
            strzu = str.split(".");
            str0 = strzu[0];
            str1 = strzu[1];
            if (str0.length / 3 > 0 && str0.length / 3 < 1) {
                str = str0 + '.' + str1;
            }
            else if (str0.length / 3 > 1 && str0.length / 3 < 2) {
                str = str0.slice(0, str0.length - 3) + ',' + str0.slice(str0.length - 3) + '.' + str1;
            }
            else if (str0.length / 3 > 2 && str0.length / 3 < 3) {
                str = str0.slice(0, str0.length - 6) + ',' + str0.slice(str0.length - 6, str0.length - 3) + ',' + str0.slice(str0.length - 3) + '.' + str1;
            }
        }
        return str;
    };
    return GlobalFunction;
}());
__reflect(GlobalFunction.prototype, "GlobalFunction");
//# sourceMappingURL=GlobalFunction.js.map