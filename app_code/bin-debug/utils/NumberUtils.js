var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    /**
   * Number工具
   */
    var NumberUtils = (function () {
        function NumberUtils() {
        }
        /**
         * 随机值范围
         */
        NumberUtils.randomInt = function (min, max) {
            if (0 >= max - min)
                return 0;
            var a = max - min;
            return Math.floor(Math.random() * a) + min;
        };
        NumberUtils.inRange = function (a, min, max) {
            return min <= a && a <= max;
        };
        NumberUtils.div = function (n, d) {
            return Math.floor(n / d);
        };
        NumberUtils.getZeroTimeStamp = function () {
            var date = new Date();
            var dateStr = date.getUTCFullYear() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCDate();
            return new Date(dateStr).getTime() / 1000;
        };
        NumberUtils.getTimeStamp = function () {
            var c = new Date().getTime() / 1000;
            return parseInt(c.toString());
        };
        NumberUtils.getAngle = function (px1, py1, px2, py2) {
            //两点的x、y值
            var x = px2 - px1;
            var y = py2 - py1;
            var hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            //斜边长度
            var cos = x / hypotenuse;
            var radian = Math.acos(cos);
            //求出弧度
            var angle = 180 / (Math.PI / radian);
            //用弧度算出角度        
            if (y < 0) {
                angle = -angle;
            }
            else if ((y == 0) && (x < 0)) {
                angle = 180;
            }
            return angle;
        };
        NumberUtils.getCurrencyUnitByLen = function (len) {
            var str = "";
            switch (len) {
                case 2:
                    str = "百";
                    break;
                case 3:
                    str = "千";
                    break;
                case 4:
                    str = "万";
                    break;
                case 5:
                    str = "十万";
                    break;
                case 6:
                    str = "百万";
                    break;
                case 7:
                    str = "千万";
                    break;
                case 8:
                    str = "亿";
                    break;
                case 9:
                    str = "十亿";
                    break;
                case 10:
                    str = "百亿";
                    break;
                case 11:
                    str = "千亿";
                    break;
                case 12:
                    str = "兆";
                    break;
            }
            return str;
        };
        /**
         * 数字转换成万千
         */
        NumberUtils.getFormatCurrentStr = function (num) {
            var str = "";
            if (num >= 10000) {
                var result = parseFloat("" + num / 10000);
                return xlLib.NumberUtils.toFixed(result, 2) + "万";
            }
            else if (num >= 1000 && num < 10000) {
                var result = parseFloat("" + num / 1000);
                return xlLib.NumberUtils.toFixed(result, 2) + "千";
            }
            else {
                str = num + "";
            }
            return str;
        };
        /**
         * 保留多少位小数
         */
        NumberUtils.toFixed = function (value, length) {
            value = value.toString();
            var pointIndex = value.lastIndexOf(".");
            if (pointIndex == -1) {
                return value;
            }
            return value.substring(0, pointIndex + length + 1);
        };
        return NumberUtils;
    }());
    xlLib.NumberUtils = NumberUtils;
    __reflect(NumberUtils.prototype, "xlLib.NumberUtils");
})(xlLib || (xlLib = {}));
