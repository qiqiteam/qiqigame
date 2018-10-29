class GlobalFunction {
    /**
     * 渐变隐藏效果
     */
    public static tweenHideView(disObj: egret.DisplayObject, waittime: number = 0, time: number = 1000, callback?: Function, thisObj?: any, params?: any[]): void {
        disObj.visible = true;
        disObj.alpha = 1;
        egret.Tween.get(disObj).wait(waittime).to({ alpha: 0 }, time, egret.Ease.circOut).call(() => {
            disObj.visible = false;
            disObj.alpha = 1;
            if (callback) {
                callback.call(thisObj, params);
            }
        });
    }

    /**
     * 渐变显示效果
     */
    public static tweenShowView(disObj: egret.DisplayObject, waittime: number = 0, time: number = 1000, callback?: Function, thisObj?: any, params?: any[]): void {
        disObj.visible = false;
        disObj.alpha = 0;
        egret.Tween.get(disObj).wait(waittime).to({ alpha: 1 }, time, egret.Ease.circOut).call(() => {
            disObj.visible = true;
            disObj.alpha = 1;
            if (callback) {
                callback.call(thisObj, params);
            }
        });
    }
    /**
      * 获取时间格式
      */
    public static getDateString(currdate: Date): string {
        let dateString = currdate.getFullYear() + '/' + (currdate.getMonth() + 1) + '/' + currdate.getDate();
        return dateString;
    }
}