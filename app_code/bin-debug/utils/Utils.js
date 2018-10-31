var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.setLocalStorage = function (ky, info) {
            if (xlLib.Global.nativeStorage) {
                xlLib.Global.nativeStorage.save({
                    key: ky,
                    id: ky,
                    rawData: info,
                    expires: null
                });
            }
            else if (window["localStorage"]) {
                localStorage.setItem(ky, info);
            }
            else if (window["document"] && window["document"].cookie) {
            }
            else if (egret) {
                egret.localStorage.setItem(ky, info);
            }
        };
        Utils.getLocalStorage = function (ky, onGetCallBack) {
            if (xlLib.Global.nativeStorage) {
                xlLib.Global.nativeStorage.load({
                    key: ky,
                    id: ky,
                    autoSync: true,
                    syncInBackground: true
                }).then(function (ret) {
                    //如果找到数据，则在then方法中返回
                    onGetCallBack(ret);
                }).catch(function (err) {
                    onGetCallBack(null);
                });
            }
            else if (window["localStorage"]) {
                if (onGetCallBack) {
                    onGetCallBack(localStorage.getItem(ky));
                }
                else {
                    return localStorage.getItem(ky);
                }
            }
            else if (window["document"] && window["document"].cookie) {
                if (onGetCallBack) {
                }
                else {
                }
            }
            else if (egret) {
                if (onGetCallBack) {
                    onGetCallBack(egret.localStorage.getItem(ky));
                }
                else {
                    return egret.localStorage.getItem(ky);
                }
            }
            else {
                if (onGetCallBack) {
                    onGetCallBack(null);
                }
                else {
                    return null;
                }
            }
        };
        Utils.clearLocalStorage = function (ky) {
            try {
                if (xlLib.Global.lobbyMode == true && xlLib.Global.isInGame == true) {
                    return;
                }
                if (ky) {
                    if (xlLib.Global.nativeStorage) {
                        xlLib.Global.nativeStorage.remove({
                            key: ky
                        });
                    }
                    else if (window["localStorage"]) {
                        localStorage.removeItem(ky);
                    }
                    else if (window["document"] && window["document"].cookie) {
                    }
                    else if (egret) {
                        egret.localStorage.removeItem(ky);
                    }
                }
                else {
                    if (xlLib.Global.nativeStorage) {
                        xlLib.Global.nativeStorage.clearMap();
                    }
                    else if (window["localStorage"]) {
                        localStorage.clear();
                    }
                    else if (window["document"] && window["document"].cookie) {
                    }
                    else if (egret) {
                        egret.localStorage.clear();
                    }
                }
            }
            catch (e) {
            }
        };
        Utils.isIOS = function () {
            if (xlLib.Global.isH5 == false && egret.Capabilities.os == "iOS")
                return true;
            return false;
        };
        Utils.isAndroid = function () {
            if (xlLib.Global.isH5 == false && egret.Capabilities.os == "Android")
                return true;
            return false;
        };
        Utils.isWindowsPC = function () {
            if (xlLib.Global.isH5 == false && egret.Capabilities.os == "Windows PC")
                return true;
            return false;
        };
        Utils.restart = function (str, confir) {
            var self = this;
            var old = self.isrebooting;
            self.isrebooting = true;
            if (xlLib.Global.isH5 == true) {
                var r = confirm(str);
                if (r == true) {
                }
                else {
                    self.isrebooting = false;
                }
            }
            else {
                if (!old) {
                    xlLib.Global.dispatchEvent(xlLib.ZqEvent.ON_RESTART, [str, confir]);
                }
            }
        };
        /**
         * 获取两个经纬度之间的距离
         * @param lat1 纬度1
         * @param lng1 经度1
         * @param lat2 纬度2
         * @param lng2 经度2
         */
        Utils.getDistance = function (lat1, lng1, lat2, lng2) {
            if ((Math.abs(lat1) > 90) || (Math.abs(lat2) > 90)) {
                return 0;
            }
            if ((Math.abs(lng1) > 180) || (Math.abs(lng2) > 180)) {
                return 0;
            }
            var radLat1 = this.rad(lat1);
            var radLat2 = this.rad(lat2);
            var a = radLat1 - radLat2;
            var b = this.rad(lng1) - this.rad(lng2);
            var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
                Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
            s = s * this.EARTH_RADIUS;
            s = Math.round(s * 10000) / 10000;
            return s;
        };
        Utils.rad = function (d) {
            return d * Math.PI / 180.0;
        };
        /**
         * 对象克隆
         */
        Utils.cloneObj = function (obj) {
            var newobj, str;
            if (typeof obj !== 'object') {
                return;
            }
            else {
                for (var i in obj) {
                    newobj[i] = typeof obj[i] === 'object' ?
                        Utils.cloneObj(obj[i]) : obj[i];
                }
            }
            return newobj;
        };
        /**
        * 日期格式化
        */
        Utils.formatDate = function (date, fmt) {
            var o = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth() + 3) / 3),
                "S": date.getMilliseconds() //毫秒   
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        };
        return Utils;
    }());
    Utils.isrebooting = false;
    Utils.EARTH_RADIUS = 6378137;
    xlLib.Utils = Utils;
    __reflect(Utils.prototype, "xlLib.Utils");
})(xlLib || (xlLib = {}));
