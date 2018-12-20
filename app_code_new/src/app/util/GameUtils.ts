/*
* 游戏工具类;
*/
class GameUtils {
    /*
    * 获取游戏地址栏参数;
    */
    public static getGetParameter(name: string): string {
        let paramStr: string = "";
        var tempUrl: string = window.location.href;
        var temps: string[] = tempUrl.split("?");
        var gets: Object = {};
        if (temps[1]) {
            temps = temps[1].split("&");
            for (var index = 0; index < temps.length; index++) {
                var element = temps[index];
                var params = element.split("=");
                gets[params[0]] = params[1];
            }
        }

        if (gets.hasOwnProperty(name)) {
            paramStr = gets[name];
        }
        
        return paramStr;
    }

    /**
     从数组中随机抽取数据 2016-09-09
   **/
    public static getArrItem(arr, num):any[] {
        var temp_array = new Array();
        for (var index in arr) {
            temp_array.push(arr[index]);
        }
        var return_array:any[] = [];
        for (var i = 0; i < num; i++) {
            if (temp_array.length > 0) {
                var arrIndex = Math.floor(Math.random() * temp_array.length);
                return_array[i] = temp_array[arrIndex];
                temp_array.splice(arrIndex, 1);
            } else {
                break;
            }
        }
        return return_array;
    }

    /*
    * 获取外部平台接口;
    */
    public static openExternalInterface(platform: number, name: string, params: any = null): void {
        switch (platform) {
            case 1://android
        if (window["android"] && window["android"][name]) {
                    if (params) {
                        window["android"] [name](params);
                    } else {
                        window["android"] [name]();
                    }
                }
                break;
            case 2://Ios
                if (window[name]) {
                    if (params) {
                        window[name](params);
                    } else {
                        window[name]();
                    }
                }
                break;
            default:
                break;
        }
    }
}