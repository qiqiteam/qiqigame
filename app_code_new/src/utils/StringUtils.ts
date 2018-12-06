module xlLib {

    export class StringUtils {
        /**
         * 字符串是`undefined`、`null`或`""`
         */
        public static stringIsNullOrEmpty(value: string): boolean {
            return value == null || value.length == 0;
        }

        public static ltrim(s: string) {
            return s.replace(/(^\s*)/g, "");
        }

        public static rtrim(s: string) {
            return s.replace(/(\s*$)/g, "");
        }

        public static trim(s: string) {
            return s.replace(/(^\s*)|(\s*$)/g, "");
        }

        public static sTrim(str: string): string {
            return str.replace(/\s/g, '');
        }

        public static checkPhone(tel: string): boolean {
            if (!(/^1[34578]\d{9}$/.test(tel))) {
                return false;
            }
            return true;
        }

        public static checkEmail(email: string): boolean {
            if (!(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email))) {
                return false;
            }
            return true;
        }

        /**
         * 字符串中查找某字符出现次数的位置
         */
        public static getPosition(str: string, searchfor: string, count: number = 1): number {
            var re = new RegExp(searchfor, "g");
            while (count--) {
                re.test(str);
            }
            var pos = re.lastIndex - searchfor.length;
            if (pos < 0)
                return null;
            else
                return pos;
        }

        /**
         * 格式化货币字符串
         * @param num {number} 需要格式化的数
         * @param em {string} 单位暂时支持 万
         * @param bSplit {boolean} 使用单位分隔符
         * @param sl {number} 格式化单位长度
         */
        public static formatCurrency(num: number, em?: string, bSplit: boolean = false, sl: number = 5): string {
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
                            sl = 5
                    } else
                        sl = 5;
                    if (strNum.length >= sl) {
                        strNum = strNum.slice(0, strNum.length - 4);
                    } else {
                        em = "";
                    }
                }
            }


            var arr1 = strNum.split(".");
            var hasPoint = false;//是否有小数部分 
            var piontPart = "";//小数部分 
            var intPart = strNum;//整数部分 
            if (arr1.length >= 2) {
                hasPoint = true;
                piontPart = arr1[1];
                intPart = arr1[0];
            }

            if (bSplit == true) {
                var res = '';//保存添加逗号的部分 
                var intPartlength = intPart.length;//整数部分长度 
                var maxcount = Math.ceil(intPartlength / 3);//整数部分需要添加几个逗号 
                for (var i = 1; i <= maxcount; i++)//每三位添加一个逗号 
                {
                    var startIndex = intPartlength - i * 3;//开始位置 
                    if (startIndex < 0)//开始位置小于0时修正为0 
                    {
                        startIndex = 0;
                    }
                    var endIndex = intPartlength - i * 3 + 3;//结束位置 
                    var part = intPart.substring(startIndex, endIndex) + (bSplit == true ? "," : "");
                    res = part + res;
                }
                res = res.substr(0, res.length - 1);//去掉最后一个逗号 
            } else {
                res = intPart;
            }

            var endstr: string = "";
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
        }
        private static md5Object: md5;

        /**
        * md5方式加密字符串
        */
        public static md5(str: string): string {
            this.md5Object = this.md5Object || new md5();
            return this.md5Object.hex_md5(str);
        }
        
        /**
         * 格式化货币，保留有效位数
         * @param num 需要格式化的数字
         * @param len 单位 最小设置单位万
         */
        public static formatCurrencyToUnit(num: number, len: number = 4, bSplit: boolean = true): string {
            var hideLen: number;
            var endStr: string = "";
            var str: string = "";
            if (len < 4)
                len = 4;

            var arr1 = num.toString().split(".");
            var hasPoint = false;//是否有小数部分 
            var piontPart = "";//小数部分 
            var intPart = "";//整数部分 
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
                endStr = NumberUtils.getCurrencyUnitByLen(hideLen);
            }

            if (intPart.length >= 4 && bSplit == true) {
                var res = '';//保存添加逗号的部分 
                var intPartlength = intPart.length;//整数部分长度 
                var maxcount = Math.ceil(intPartlength / 3);//整数部分需要添加几个逗号 
                for (var i = 1; i <= maxcount; i++)//每三位添加一个逗号 
                {
                    var startIndex = intPartlength - i * 3;//开始位置 
                    if (startIndex < 0)//开始位置小于0时修正为0 
                    {
                        startIndex = 0;
                    }
                    var endIndex = intPartlength - i * 3 + 3;//结束位置 
                    var part = intPart.substring(startIndex, endIndex) + (bSplit == true ? "," : "");
                    res = part + res;
                }
                res = res.substr(0, res.length - 1);//去掉最后一个逗号 
            } else {
                res = intPart;
            }
            str = res + endStr;
            return str;
        }


        /**
         * 格式化货币字符串
         * @param num {number} 需要格式化的数
         * @param bSplit {boolean} 使用单位分隔符 默认false
         * @param txtLen {number} 货币最大显示长度,通过这个值来自动设置单位
         */
        public static formatCurrencyByTotalLen(num: number, bSplit: boolean = false, txtLen: number = 8): string {
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
            var em: string = "";
            if (strNum.length >= txtLen) {
                if (strNum.length - 4 >= txtLen) {
                    strNum = strNum.slice(0, strNum.length - 8);
                    em = "亿";
                } else {
                    strNum = strNum.slice(0, strNum.length - 4);
                    em = "万";
                }
            } else {
                em = "";
            }


            var arr1 = strNum.split(".");
            var hasPoint = false;//是否有小数部分 
            var piontPart = "";//小数部分 
            var intPart = strNum;//整数部分 
            if (arr1.length >= 2) {
                hasPoint = true;
                piontPart = arr1[1];
                intPart = arr1[0];
            }

            if (bSplit == true) {
                var res = '';//保存添加逗号的部分 
                var intPartlength = intPart.length;//整数部分长度 
                var maxcount = Math.ceil(intPartlength / 3);//整数部分需要添加几个逗号 
                for (var i = 1; i <= maxcount; i++)//每三位添加一个逗号 
                {
                    var startIndex = intPartlength - i * 3;//开始位置 
                    if (startIndex < 0)//开始位置小于0时修正为0 
                    {
                        startIndex = 0;
                    }
                    var endIndex = intPartlength - i * 3 + 3;//结束位置 
                    var part = intPart.substring(startIndex, endIndex) + (bSplit == true ? "," : "");
                    res = part + res;
                }
                res = res.substr(0, res.length - 1);//去掉最后一个逗号 
            } else {
                res = intPart;
            }

            var endstr: string = "";
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
        }

        /**
         * 货币格式转为普通字符串
         * @param str {string} 货币格式
         */
        public static formatCurrencyNomal(str: string): string {
            if (str.indexOf("万") >= 0) {
                str = str.slice(0, str.length - 1);
                str += "0000"
            }
            if (str.indexOf(",") >= 0) {
                var arr = str.split(",");
                str = "";
                for (var i: number = 0; i < arr.length; i++) {
                    str += arr[i];
                }
            }

            return str;
        }

        /**
		 *以"mm:ss"的格式返回时间 
		 * @param t
		 * @return 
		 * 
		 */
        public static formatMMSS(second: number): string {
            var m: string = Math.floor(second / 60) + "";
            var s: string = second % 60 + "";
            if (m.length < 2)
                m = "0" + m;
            if (s.length < 2)
                s = "0" + s;
            return m + ":" + s;
        }
		
        /**
         * 以"hh:mm:ss"的格式返回时间 
         * @param t
         * @return 
         * 
         */

        public static formatHHMMSS(second: number, splitTag: string = ":"): string {
            var h: string = Math.floor(second / 60 / 60) + "";
            var m: string = (Math.floor(second / 60) - parseInt(h) * 60) + "";
            var s: string = second % 60 + "";
            if (h.length < 2)
                h = "0" + h;
            if (m.length < 2)
                m = "0" + m;
            if (s.length < 2)
                s = "0" + s;
            return h + splitTag + m + splitTag + s;
        }

        public static formatDDHHMMSS(second: number, splitTag: string = ":"): string {
            var lessTime: number = second;
            var d: string = "";
            var h: string = "";
            var m: string = "";
            var s: string = "";
            var dsplit: string = "天";
            var hsplit: string = "时";
            var msplit: string = "分";

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
        }

        /**
         * 字符串键值对方式转为json
         * @param str
         */
        public static getVariables(str: string): any {
            var data: string[] = str.split("=");
            var obj: any = {};
            var i: number = 0;
            while (i < data.length) {
                obj[data[i]] = data[i + 1];
                i += 2;
            }
            return obj;
        }


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
        private getStrRealLngth(str: string): any {
            var k = str.length, b = 0;
            if (k) {
                for (let i = 0; i < k; i++) {
                    if (str.charCodeAt(i) > 255) {
                        b += 2;
                    }
                    else {
                        b = b + 1;
                    }
                }
                return b
            }
            else {
                return 0;
            }
        }
    }
}