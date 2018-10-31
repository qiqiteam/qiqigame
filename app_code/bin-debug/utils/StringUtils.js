var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var StringUtils = (function () {
        function StringUtils() {
        }
        /**
         * 字符串是`undefined`、`null`或`""`
         */
        StringUtils.stringIsNullOrEmpty = function (value) {
            return value == null || value.length == 0;
        };
        StringUtils.ltrim = function (s) {
            return s.replace(/(^\s*)/g, "");
        };
        StringUtils.rtrim = function (s) {
            return s.replace(/(\s*$)/g, "");
        };
        StringUtils.trim = function (s) {
            return s.replace(/(^\s*)|(\s*$)/g, "");
        };
        StringUtils.sTrim = function (str) {
            return str.replace(/\s/g, '');
        };
        StringUtils.checkPhone = function (tel) {
            if (!(/^1[34578]\d{9}$/.test(tel))) {
                return false;
            }
            return true;
        };
        StringUtils.checkEmail = function (email) {
            if (!(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email))) {
                return false;
            }
            return true;
        };
        /**
         * 字符串中查找某字符出现次数的位置
         */
        StringUtils.getPosition = function (str, searchfor, count) {
            if (count === void 0) { count = 1; }
            var re = new RegExp(searchfor, "g");
            while (count--) {
                re.test(str);
            }
            var pos = re.lastIndex - searchfor.length;
            if (pos < 0)
                return null;
            else
                return pos;
        };
        /**
         * 格式化货币字符串
         * @param num {number} 需要格式化的数
         * @param em {string} 单位暂时支持 万
         * @param bSplit {boolean} 使用单位分隔符
         * @param sl {number} 格式化单位长度
         */
        StringUtils.formatCurrency = function (num, em, bSplit, sl) {
            if (bSplit === void 0) { bSplit = false; }
            if (sl === void 0) { sl = 5; }
            var sign = "";
            if (isNaN(num)) {
                num = 0;
            }
            //if (num < 0) {
            //    sign = "-";
            //}
            var strNum = num + "";
            if (em != null) {
                if (em == "万") {
                    if (sl) {
                        if (sl < 5)
                            sl = 5;
                    }
                    else
                        sl = 5;
                    if (strNum.length >= sl) {
                        strNum = strNum.slice(0, strNum.length - 4);
                    }
                    else {
                        em = "";
                    }
                }
            }
            var arr1 = strNum.split(".");
            var hasPoint = false; //是否有小数部分 
            var piontPart = ""; //小数部分 
            var intPart = strNum; //整数部分 
            if (arr1.length >= 2) {
                hasPoint = true;
                piontPart = arr1[1];
                intPart = arr1[0];
            }
            if (bSplit == true) {
                var res = ''; //保存添加逗号的部分 
                var intPartlength = intPart.length; //整数部分长度 
                var maxcount = Math.ceil(intPartlength / 3); //整数部分需要添加几个逗号 
                for (var i = 1; i <= maxcount; i++) {
                    var startIndex = intPartlength - i * 3; //开始位置 
                    if (startIndex < 0) {
                        startIndex = 0;
                    }
                    var endIndex = intPartlength - i * 3 + 3; //结束位置 
                    var part = intPart.substring(startIndex, endIndex) + (bSplit == true ? "," : "");
                    res = part + res;
                }
                res = res.substr(0, res.length - 1); //去掉最后一个逗号 
            }
            else {
                res = intPart;
            }
            var endstr = "";
            if (hasPoint) {
                endstr = "" + sign + res + "." + piontPart;
            }
            else {
                endstr = "" + sign + res;
            }
            if (em != null) {
                endstr += em;
            }
            return endstr;
        };
        /**
        * md5方式加密字符串
        */
        StringUtils.md5 = function (str) {
            this.md5Object = this.md5Object || new md5();
            return this.md5Object.hex_md5(str);
        };
        /**
         * 格式化货币，保留有效位数
         * @param num 需要格式化的数字
         * @param len 单位 最小设置单位万
         */
        StringUtils.formatCurrencyToUnit = function (num, len, bSplit) {
            if (len === void 0) { len = 4; }
            if (bSplit === void 0) { bSplit = true; }
            var hideLen;
            var endStr = "";
            var str = "";
            if (len < 4)
                len = 4;
            var arr1 = num.toString().split(".");
            var hasPoint = false; //是否有小数部分 
            var piontPart = ""; //小数部分 
            var intPart = ""; //整数部分 
            if (arr1.length >= 2) {
                hasPoint = true;
                piontPart = arr1[1];
            }
            intPart = arr1[0];
            if (intPart.length > len) {
                hideLen = intPart.length - len;
            }
            if (hideLen >= len) {
                intPart = intPart.replace(intPart.substr(len, intPart.length), "");
                endStr = xlLib.NumberUtils.getCurrencyUnitByLen(hideLen);
            }
            if (intPart.length >= 4 && bSplit == true) {
                var res = ''; //保存添加逗号的部分 
                var intPartlength = intPart.length; //整数部分长度 
                var maxcount = Math.ceil(intPartlength / 3); //整数部分需要添加几个逗号 
                for (var i = 1; i <= maxcount; i++) {
                    var startIndex = intPartlength - i * 3; //开始位置 
                    if (startIndex < 0) {
                        startIndex = 0;
                    }
                    var endIndex = intPartlength - i * 3 + 3; //结束位置 
                    var part = intPart.substring(startIndex, endIndex) + (bSplit == true ? "," : "");
                    res = part + res;
                }
                res = res.substr(0, res.length - 1); //去掉最后一个逗号 
            }
            else {
                res = intPart;
            }
            str = res + endStr;
            return str;
        };
        /**
         * 格式化货币字符串
         * @param num {number} 需要格式化的数
         * @param bSplit {boolean} 使用单位分隔符 默认false
         * @param txtLen {number} 货币最大显示长度,通过这个值来自动设置单位
         */
        StringUtils.formatCurrencyByTotalLen = function (num, bSplit, txtLen) {
            if (bSplit === void 0) { bSplit = false; }
            if (txtLen === void 0) { txtLen = 8; }
            if (txtLen < 5) {
                txtLen = 5;
            }
            var sign = "";
            if (isNaN(num)) {
                num = 0;
            }
            //if (num < 0) {
            //    sign = "-";
            //}
            var strNum = Number(num) + "";
            var em = "";
            if (strNum.length >= txtLen) {
                if (strNum.length - 4 >= txtLen) {
                    strNum = strNum.slice(0, strNum.length - 8);
                    em = "亿";
                }
                else {
                    strNum = strNum.slice(0, strNum.length - 4);
                    em = "万";
                }
            }
            else {
                em = "";
            }
            var arr1 = strNum.split(".");
            var hasPoint = false; //是否有小数部分 
            var piontPart = ""; //小数部分 
            var intPart = strNum; //整数部分 
            if (arr1.length >= 2) {
                hasPoint = true;
                piontPart = arr1[1];
                intPart = arr1[0];
            }
            if (bSplit == true) {
                var res = ''; //保存添加逗号的部分 
                var intPartlength = intPart.length; //整数部分长度 
                var maxcount = Math.ceil(intPartlength / 3); //整数部分需要添加几个逗号 
                for (var i = 1; i <= maxcount; i++) {
                    var startIndex = intPartlength - i * 3; //开始位置 
                    if (startIndex < 0) {
                        startIndex = 0;
                    }
                    var endIndex = intPartlength - i * 3 + 3; //结束位置 
                    var part = intPart.substring(startIndex, endIndex) + (bSplit == true ? "," : "");
                    res = part + res;
                }
                res = res.substr(0, res.length - 1); //去掉最后一个逗号 
            }
            else {
                res = intPart;
            }
            var endstr = "";
            if (hasPoint) {
                endstr = "" + sign + res + "." + piontPart;
            }
            else {
                endstr = "" + sign + res;
            }
            if (em != null) {
                endstr += em;
            }
            return endstr;
        };
        /**
         * 货币格式转为普通字符串
         * @param str {string} 货币格式
         */
        StringUtils.formatCurrencyNomal = function (str) {
            if (str.indexOf("万") >= 0) {
                str = str.slice(0, str.length - 1);
                str += "0000";
            }
            if (str.indexOf(",") >= 0) {
                var arr = str.split(",");
                str = "";
                for (var i = 0; i < arr.length; i++) {
                    str += arr[i];
                }
            }
            return str;
        };
        /**
         *以"mm:ss"的格式返回时间
         * @param t
         * @return
         *
         */
        StringUtils.formatMMSS = function (second) {
            var m = Math.floor(second / 60) + "";
            var s = second % 60 + "";
            if (m.length < 2)
                m = "0" + m;
            if (s.length < 2)
                s = "0" + s;
            return m + ":" + s;
        };
        /**
         * 以"hh:mm:ss"的格式返回时间
         * @param t
         * @return
         *
         */
        StringUtils.formatHHMMSS = function (second, splitTag) {
            if (splitTag === void 0) { splitTag = ":"; }
            var h = Math.floor(second / 60 / 60) + "";
            var m = (Math.floor(second / 60) - parseInt(h) * 60) + "";
            var s = second % 60 + "";
            if (h.length < 2)
                h = "0" + h;
            if (m.length < 2)
                m = "0" + m;
            if (s.length < 2)
                s = "0" + s;
            return h + splitTag + m + splitTag + s;
        };
        StringUtils.formatDDHHMMSS = function (second, splitTag) {
            if (splitTag === void 0) { splitTag = ":"; }
            var lessTime = second;
            var d = "";
            var h = "";
            var m = "";
            var s = "";
            var dsplit = "天";
            var hsplit = "时";
            var msplit = "分";
            d = Math.floor(lessTime / 60 / 60 / 24) + "";
            lessTime -= parseInt(d) * 24 * 60 * 60;
            if (lessTime > 0)
                h = Number(lessTime / 60 / 60) + "";
            lessTime -= parseInt(h) * 60 * 60;
            if (lessTime > 0)
                m = Math.floor(lessTime / 60) + "";
            lessTime -= parseInt(m) * 60;
            if (lessTime > 0)
                s = second % 60 + "";
            if (d.length < 2)
                d = "0" + d;
            if (h.length < 2)
                h = "0" + h;
            if (m.length < 2)
                m = "0" + m;
            if (s.length < 2)
                s = "0" + s;
            if (splitTag == "天")
                return d + dsplit + h + hsplit + m + msplit + s;
            return d + splitTag + h + splitTag + m + splitTag + s;
        };
        /**
         * 字符串键值对方式转为json
         * @param str
         */
        StringUtils.getVariables = function (str) {
            var data = str.split("=");
            var obj = {};
            var i = 0;
            while (i < data.length) {
                obj[data[i]] = data[i + 1];
                i += 2;
            }
            return obj;
        };
        //public static deformatTime(timeStr: string): number {
        //    var str: string;
        //    return str;
        //}
        /**
         * 字符串实际长度获取方法
         * @param str
         */
        //public static getStrRealLngth(str: string): any {
        //    var grl = { GetLength: null };
        //    grl.GetLength = function (str) {
        //        return str.replace(/[\u0391-\uFFE5]/g, "aa").length;  //先把中文替换成两个字节的英文，在计算长度
        //    };
        //    return grl.GetLength;
        //}
        StringUtils.prototype.getStrRealLngth = function (str) {
            var k = str.length, b = 0;
            if (k) {
                for (var i = 0; i < k; i++) {
                    if (str.charCodeAt(i) > 255) {
                        b += 2;
                    }
                    else {
                        b = b + 1;
                    }
                }
                return b;
            }
            else {
                return 0;
            }
        };
        return StringUtils;
    }());
    xlLib.StringUtils = StringUtils;
    __reflect(StringUtils.prototype, "xlLib.StringUtils");
})(xlLib || (xlLib = {}));
