module xlLib {
    /**
     * 设备API
     */
    export class DeviceUtils {
        /**
         * 调用手机震动
         * @param time 震动时间
         */
        public static vibrate(time: number = 1000): void {
            if (navigator["vibrate"]) {
                navigator["vibrate"](time);
            } else if (navigator["webkitVibrate"]) {
                navigator["webkitVibrate"](time);
            }
        }

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
        public static getMic(): void {
            //getUserMedia API 大部分手机不支持，所以暂不考虑
        } 

        //调用canvas截屏
        public static getScreen(): void {

        } 	

        //调用打电话功能
        public static callPhone(telNum: number): void {
            try {
                window.open("tel:" + telNum, '_self')
            } catch (e) {
            }
        } 

        //调用发短信功能
        public static sendMessage(telNum: number): void {
            try {
                window.open("sms:" + telNum, '_self')
            } catch (e) {
            }
        } 	

        //获取当前地址
        public static getCurUrl(): string {
            try {
                return location.href;
            } catch (e) {
            }
        } 	

        //当前游戏角度
        public static curAngle: number = Number(window["orientation"]);	

        //获得手机是横屏还是竖屏
        //角度为0说明是竖屏，+-90是横屏
        // export function isVertical():boolean{ 
        // 	var angle = window["orientation"]; 
        // 	if(angle == 90){
        // 		return false;
        // 	}else{
        // 		return true;
        // 	}
        // } 

        //监听MainNotify.onOrientationChange事件可以获得屏幕竖屏横屏变化和角度
        // var orientationFun:Function = function(e){
        //     // document.title = "" + GameConfig.curAngle;
        //     document.title = "11--" + e.param;
        // };  
        // lcp.LListener.getInstance().addEventListener(MainNotify.onOrientationChange,orientationFun,this);


        //监听MainNotify.onDeviceMotion事件可以获得摇一摇事件
        //需要在index中增加如下代码
        // <script type="text/javascript">
        //     if (window.DeviceMotionEvent) {
        //         window.addEventListener('devicemotion', deviceMotionHandler, false);
        //     } else {
        //         alert('本设备不支持devicemotion事件');
        //     }
        //     function deviceMotionHandler(eventData) {
        //         window["rootContainer"].deviceMotionHandler(eventData);
        //     }
        // </script>
        //需要在gameMain中增加如下代码
        // private SHAKE_THRESHOLD = 3000;
        // private last_update = 0;
        // private temp_x = 0;
        // private temp_y = 0;
        // private temp_z = 0;
        // private last_x = 0;
        // private last_y = 0;
        // private last_z = 0;
        // public deviceMotionHandler(eventData):void{
        //     var acceleration = eventData.accelerationIncludingGravity;
        //     var curTime = new Date().getTime();
        //     if ((curTime - this.last_update) > 100) {
        //         var diffTime = curTime - this.last_update;
        //         this.last_update = curTime;
        //         this.temp_x = acceleration.x;
        //         this.temp_y = acceleration.y;
        //         this.temp_z = acceleration.z;
        //         var speed = Math.abs(this.temp_x + this.temp_y + this.temp_z - this.last_x - this.last_y - this.last_z) / diffTime * 10000;

        //         if (speed > this.SHAKE_THRESHOLD) {
        //             // alert("摇动了");
        //             lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(MainNotify.onDeviceMotion,eventData,false));
        //         }
        //         this.last_x = this.temp_x;
        //         this.last_y = this.temp_y;
        //         this.last_z = this.temp_z;
        //     }
        // }	


        //监听MainNotify.onDeviceOrientation事件可以获得陀螺仪数据
        // var orientationFun:Function = function(e){
        //     var angleX:number = e.param.beta;
        //     var angleY:number = e.param.gamma;
        //     var angleZ:number = e.param.alpha;
        // };  
        // lcp.LListener.getInstance().addEventListener(MainNotify.onDeviceOrientation,orientationFun,this);
        //需要就打开
        // window["ondeviceorientation"] = function(e){
        //     lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(MainNotify.onDeviceOrientation,{beta:Math.floor(e.beta), gamma:Math.floor(e.gamma), alpha:Math.floor(e.alpha)},false));
        // };  	
    }
}




