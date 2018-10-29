
module xlLib {

    export class Utils {

        public static setLocalStorage(ky: string, info: any): void {
            if (Global.nativeStorage) {
                Global.nativeStorage.save({
                    key: ky,
                    id: ky,
                    rawData: info,
                    expires: null
                });
            } else if (window["localStorage"]) {
                localStorage.setItem(ky, info);
            } else if (window["document"] && window["document"].cookie) {
                // BrowersUtils.setCookie(ky, info);
            } else if (egret) {
                egret.localStorage.setItem(ky, info);
            }
        }

        public static getLocalStorage(ky: string, onGetCallBack?: Function): any {
            if (Global.nativeStorage) {
                Global.nativeStorage.load({
                    key: ky,
                    id: ky,
                    autoSync: true,
                    syncInBackground: true
                }).then(ret => {
                    //如果找到数据，则在then方法中返回
                    onGetCallBack(ret);
                }).catch(err => {
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
                    // onGetCallBack(BrowersUtils.getCookie(ky));
                } 
                else {
                    // return BrowersUtils.getCookie(ky);
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
        }

        public static clearLocalStorage(ky?: string): void {
            try {
                if(Global.lobbyMode == true && Global.isInGame == true){
                    return;
                    }
                if (ky) {
                    if (Global.nativeStorage) {
                        Global.nativeStorage.remove({
                            key: ky
                            //id: ky,
                        });
                    } 
                    else if (window["localStorage"]) {
                        localStorage.removeItem(ky);
                    }
                     else if (window["document"] && window["document"].cookie) {
                        // BrowersUtils.delCookie(ky);
                    }
                     else if (egret) {
                        egret.localStorage.removeItem(ky);
                    }
                }
                else {
                    if (Global.nativeStorage) {
                        Global.nativeStorage.clearMap();
                    }
                     else if (window["localStorage"]) {
                        localStorage.clear();
                    }
                    else if (window["document"] && window["document"].cookie) {
                        // BrowersUtils.delCookie();
                    } 
                    else if (egret) {
                        egret.localStorage.clear();
                    }
                }
            } catch (e) {
            }
        }

        public static isIOS(): boolean {
            if (xlLib.Global.isH5 == false && egret.Capabilities.os == "iOS")
                return true;
            return false;
        }

        public static isAndroid(): boolean {
            if (xlLib.Global.isH5 == false && egret.Capabilities.os == "Android")
                return true;
            return false;
        }

        public static isWindowsPC(): boolean {
            if (xlLib.Global.isH5 == false && egret.Capabilities.os == "Windows PC")
                return true;
            return false;
        }

        public static isrebooting: boolean = false;
        public static restart(str?: any, confir?: string): void {
            var self = this;
            var old = self.isrebooting;
            self.isrebooting = true;
            if (Global.isH5 == true) {
                var r = confirm(str);
                if (r == true) {
                    // BrowersUtils.reload();
                }
                else {
                    self.isrebooting = false;
                    // alert("取消重启");
                }
            } 
            else {
                if (!old) {
                    Global.dispatchEvent(ZqEvent.ON_RESTART, [str, confir]);
                }
            }
        }

        private static EARTH_RADIUS = 6378137;  

        /**
         * 获取两个经纬度之间的距离
         * @param lat1 纬度1
         * @param lng1 经度1
         * @param lat2 纬度2
         * @param lng2 经度2
         */
        public static getDistance(lat1: number, lng1: number, lat2: number, lng2: number): number
        {
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
        }

        public static rad(d: number): number {
            return d * Math.PI / 180.0;
        }

        /**
         * 对象克隆
         */
        public static cloneObj(obj) {
            var newobj, str;
            if (typeof obj !== 'object') {
                return;
            } else {
                for (var i in obj) {
                    newobj[i] = typeof obj[i] === 'object' ?
                        Utils.cloneObj(obj[i]) : obj[i];
                }
            }
            return newobj;
        }
        /**
        * 日期格式化
        */
        public static formatDate(date: Date, fmt: string) {
            var o = {
                "M+": date.getMonth() + 1,                 //月份   
                "d+": date.getDate(),                    //日   
                "h+": date.getHours(),                   //小时   
                "m+": date.getMinutes(),                 //分   
                "s+": date.getSeconds(),                 //秒   
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
                "S": date.getMilliseconds()             //毫秒   
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    }
}
