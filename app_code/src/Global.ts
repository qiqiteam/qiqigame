module xlLib {

    export class initOptions {
        /**
         * 游戏名称
         */
        title: string;
        /**
         * 游戏介绍
         */
        desc: string;
        /**
         * 游戏ICON
         */
        iconUrl: string;
        /**
         * 日志级别
         */
        logLevel: number = 7;
        /**
         * 大厅模式
         */
        lobbyMode: boolean = false;
        /**
        * appId
        */
        appId: string;

        debug: boolean;

        scaleMode: string = "fixedWidth";

        nativeStorage: any;

        reLoginUrl: string;

        platId: number;

        designWidth: number;
        designHeight: number;
    }

    /**
    * 初始化库
    * @method xlLib.init
    */
    export function init(param?: xlLib.initOptions): void {
        if (param instanceof Object) {
            Console.init(param.debug, param.logLevel);
            // if (xlLib["ResUtils"]) 
            //     xlLib["ResUtils"].init();
            // if (xlLib["ZQGameSdk"]) {
            //     xlLib["ZQGameSdk"].getCallStatus(Global.PhoneCallStatus, Global);
            // }
            if (xlLib["ScreenUtils"])
                xlLib["ScreenUtils"].init(param.scaleMode);
            Global.lobbyMode = param.lobbyMode;
            if (param.nativeStorage) {
                Global.nativeStorage = param.nativeStorage;
            }
            if (param.platId) {
                Global.platId = param.platId;
            }
            if (param.appId)
                Global.appId = param.appId;
        } 
    }

    export class Global {
        public static PhoneCallStatus(msg: any): void {
            if (msg.data.callState == "callDisconnected") {
                if (egret.Capabilities.supportVersion < "3.2.6") {
                    setTimeout(function (): void {
                        if (xlLib["ZQGameSdk"]) {
                            xlLib["ZQGameSdk"].speakerActive();
                        }
                    }, 4000);
                }
            }
        }
        //新建事件
        public static Event(type: string, obj: any = null, bubbles: boolean = false, cancelable: boolean = false): ZqEvent {
            return new xlLib.ZqEvent(type, obj);
        }

        //派发事件
        public static dispatchEvent(type: string, obj: any = null, bubbles: boolean = false, cancelable: boolean = false): void {
            var event = new xlLib.ZqEvent(type, obj, bubbles, cancelable);
            xlLib.ZqListener.getInstance().dispatchEvent(event);
        }

        public static hasEventListener(type: string): boolean {
            return xlLib.ZqListener.getInstance().hasEventListener(type);
        }

        //监听事件
        public static addEventListener(type: string, listener: Function, thisObject: any, useCapture: boolean = false, priority: number = 0): void {
            xlLib.ZqListener.getInstance().addEventListener(type, listener, thisObject, useCapture, priority);
        }

        //移除监听事件
        public static removeEventListener(type: string, listener: Function, thisObject: any, useCapture: boolean = false): void {
            xlLib.ZqListener.getInstance().removeEventListener(type, listener, thisObject, useCapture);
        }

        public static isH5: boolean;
        public static isActive: boolean = true;

        /**
        * 本地存储
        */
        public static nativeStorage: any;

        public static debugLevel: number = 0;
        /*** 屏幕高度*/
        public static screenHeight: number;
        /*** 屏幕宽度*/
        public static screenWidth: number;
        /*** 版本号*/
        public static version: string = "v1.1.1_161128235600";
        /**
         * 素材宽度
         */
        public static designWidth: number = 1280;

        /**
         * 素材高度
         */
        public static designHeight: number = 720;

        public static isRestarting: boolean = false;

        public static gameId: number = 0;
        public static lobbyGameId: number = 0;

        public static is_sandbox: number = 0;
        /**底层传上来的类型 ios or android*/
        public static sys_type = "";
        /**手机类型 */
        public static mtype = "unknown";

        public static appId: string = "wx0e52b1eba8f9fb14";

        public static thirdPlatDir: string = "thirdPlatDir/";

        //全局字体颜色表--可以扩展
        public static TextColors = {
            white: 0xFFFFFF,//白色
            milkWhite: 0xfbf1af,//乳白色 
            grayWhite: 0xceb6a2,//灰白色
            yellow: 0xffff00,//金黄色 
            lightYellow: 0xffd375,//淡黄色
            orangeYellow: 0xff9900,//橘黄色//道具名称 //玩家姓名
            red: 0xf11300,//红色
            green: 0x00e500,//绿色 
            blue: 0x1a94d7,//蓝色 
            grayBlue: 0x2f5177,//墨蓝色 
            purple: 0xe938f2,//紫色 
            pink: 0xFF3030,//粉色 
            black: 0x2e2d2d,//黑色
            golden: 0xFFD700 //金色
        }
        /**是否是测试模式 */
        public static isTestModul: boolean = false;


        public static isInGame: boolean = false;

        /**
        * 苹果bundleId
        */
        public static bundleId: string = "";

        public static defaultConfig: any;
        public static gameConfig: any;

        private static _lobbyMode: boolean = false;
        /**
        * 是否大厅模式
        */
        public static get lobbyMode(): boolean {
            return this._lobbyMode;
        }

        public static set lobbyMode(b: boolean) {
            this._lobbyMode = b;
        }

        /**
        * 登陆场景
        */
        public static LoginScene: any;
        
        /**
        * 是否缓存token
        */
        public static isCacheToken: boolean = true;

        /**
        * 日志地址
        */
        public static logUrl: string = "http://server.login.bwgame.com.cn:8020/logger/clientlog";

        /**
        * 资源版本
        */
        public static get resVersion(): string {
            var vs: string = "";
            if (xlLib.Global.isH5) {
                var elm = document.querySelector('meta[name="res-version"]');
                if (elm != null)
                    vs = elm.getAttribute('content');
                if (vs != null && vs != "") {
                    vs = "_" + vs;
                }
            }
            return vs;
        }

        /**
        * 皮肤版本
        */
        public static get thmVersion(): string {
            var vs: string = "";
            if (xlLib.Global.isH5) {
                var elm = document.querySelector('meta[name="thm-version"]');
                if (elm != null)
                    vs = elm.getAttribute('content');
                if (vs != null && vs != "") {
                    vs = "_" + vs;
                }
            }
            return vs;
        }

        public static platId: number = 0;
        public static zoneId: number = 0;
        public static logintempid: number;//大厅和游戏用同一个网关,这里缓存下,只要大厅登录成功,游戏就不用再登录

        public static setPlatInfo(str: string, platId?: number, gameId?: number): void {
            Utils.setLocalStorage(gameId + "|" + platId + "|platToken", str);
        }

        public static setPlatToken(str: string, platId?: number, gameId?: number): void {
            Global.platId = platId;
            Global.gameId = gameId;
            Utils.setLocalStorage(gameId + "|" + platId + "|platToken", str);
        }

        /**
         * 打开代理系统地址
         * @param agentUrl
         * @param code
         * @param uid
         */
        public static openAgent(agentUrl: string, code: string, platid: number, gameid: number, model?: number): void {
            var url = agentUrl + "?code=" + code + "&platid=" + platid + "&gameid=" + gameid;// + "&zoneid=" + this.zoneId;
            if (xlLib["ZQGameSdk"]) {
                xlLib["ZQGameSdk"].openWeb(url, model);
            }
        }

        /**判断原生传上来的是否是ios客户端 */
        public static isIos(): boolean{
            if(this.sys_type == "ios"){
                return true;
            }
            else{
                return false;;
            }
        }

    }
}
var global;
var testh5 = function () {
    var b: boolean;
    if (this["navigator"]) {
        b = true;
    } else {
        b = false;
    }

    try {
        if (global) {
            b = false;
        }
    } catch (e) {

    }

    return b;
};

xlLib.Global.isH5 = testh5();
