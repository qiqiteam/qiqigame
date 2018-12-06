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

    /**金币数字转字符加逗号 */
    public static Formatconversion(data: number): string {
        var strzu: string[] = [];
        var str0: string = '';
        var str1: string = '';
        var str = data / 100 + '';
        if (data % 100 == 0) {
            if (str.length / 3 > 0 && str.length / 3 < 1) {

            } else if (str.length / 3 > 1 && str.length / 3 < 2) {
                str = str.slice(0, str.length - 3) + ',' + str.slice(str.length - 3);
            } else if (str.length / 3 > 2 && str.length / 3 < 3) {
                str = str.slice(0, str.length - 6) + ',' + str.slice(str.length - 6, str.length - 3) + ',' + str.slice(str.length - 3);
            }
        } else {
            strzu = str.split(".");
            str0 = strzu[0];
            str1 = strzu[1];
            if (str0.length / 3 > 0 && str0.length / 3 < 1) {
                str = str0 + '.' + str1;
            } else if (str0.length / 3 > 1 && str0.length / 3 < 2) {
                str = str0.slice(0, str0.length - 3) + ',' + str0.slice(str0.length - 3) + '.' + str1;
            } else if (str0.length / 3 > 2 && str0.length / 3 < 3) {
                str = str0.slice(0, str0.length - 6) + ',' + str0.slice(str0.length - 6, str0.length - 3) + ',' + str0.slice(str0.length - 3) + '.' + str1;
            }
        }
        return str;
    }
}