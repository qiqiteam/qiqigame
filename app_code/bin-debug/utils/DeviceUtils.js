var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    /**
     * 设备API
     */
    var DeviceUtils = (function () {
        function DeviceUtils() {
        }
        /**
         * 调用手机震动
         * @param time 震动时间
         */
        DeviceUtils.vibrate = function (time) {
            if (time === void 0) { time = 1000; }
            if (navigator["vibrate"]) {
                navigator["vibrate"](time);
            }
            else if (navigator["webkitVibrate"]) {
                navigator["webkitVibrate"](time);
            }
        };
        // 储存数据需要key和value，都必须是字符串
        //public static setLocalData(key: string, value: string): void {
        //    localStorage.setItem(key, value);
        //}
        //// 读取数据
        //public static getLocalData(key: string): string {
        //    return localStorage.getItem(key);
        //}
        //// 删除数据
        //public static deleteLocalData(key: string): void {
        //    localStorage.removeItem(key);
        //}
        //// 将所有数据清空
        //public static clearLocalData(): void {
        //    localStorage.clear();
        //}
        //=======================以下内容是调用手机相册和摄像头获取图片方法===============================
        //在index中增加
        //<div style="display:none">
        //    <input id="files-upload" type="file" width='0' height='0' multiple accept="image/.*;capture=camera" name="file"> 
        //    <div id="result" name="result"></div> 
        //</div>
        //to do 多平台兼容不是很好 uc可以 微信不支持FileReader，目前不知道为什么暂且搁置
        //参考网址
        //=======================以上内容是调用手机相册和摄像头获取图片方法===============================
        //调用麦克风  
        DeviceUtils.getMic = function () {
            //getUserMedia API 大部分手机不支持，所以暂不考虑
        };
        //调用canvas截屏
        DeviceUtils.getScreen = function () {
        };
        //调用打电话功能
        DeviceUtils.callPhone = function (telNum) {
            try {
                window.open("tel:" + telNum, '_self');
            }
            catch (e) {
            }
        };
        //调用发短信功能
        DeviceUtils.sendMessage = function (telNum) {
            try {
                window.open("sms:" + telNum, '_self');
            }
            catch (e) {
            }
        };
        //获取当前地址
        DeviceUtils.getCurUrl = function () {
            try {
                return location.href;
            }
            catch (e) {
            }
        };
        return DeviceUtils;
    }());
    //当前游戏角度
    DeviceUtils.curAngle = Number(window["orientation"]);
    xlLib.DeviceUtils = DeviceUtils;
    __reflect(DeviceUtils.prototype, "xlLib.DeviceUtils");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=DeviceUtils.js.map