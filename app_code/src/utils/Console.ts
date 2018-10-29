module xlLib {


    export enum LOGLEVEL {
        DEBUG,
        INFO,
        WARN,
        ERROR,
        DEBUG_SERVER,
        INFO_SERVER,
        WARN_SERVER,
        ERROR_SERVER
    }
    /**
     * 控制台打印管理
     */
	export class Console {

		/**
		 * 是否是开发模式
		 */
		static isDevMode: boolean = false;


		private static LOG_LEVEL_STR: string[] = ["[DEBUG]", "[INFO]", "[WARN]", "[ERROR]"];

		/**
		 * 日志级别
		 */
		private static LogLevel: LOGLEVEL = 7;//LOGLEVEL.ERROR_SERVER;
		public static setLogLevel(level: LOGLEVEL): void {
				if(this.isDevMode == true){
					this.LogLevel = LOGLEVEL.DEBUG;
				}
				else{
					this.LogLevel = level;
					egret.Logger.logLevel = egret.Logger.INFO;
				}
        }
        public static init(b: boolean, logLevel?: LOGLEVEL): void {
			if (xlLib.Global.isH5) {
				this.isDevMode = b;
			}
			else {
				this.isDevMode = b;
			}
            this.setLogLevel(logLevel);
		}

		static getLocalLevel(level: LOGLEVEL):LOGLEVEL{
			if(level >= LOGLEVEL.DEBUG_SERVER){
				level = this.LogLevel - LOGLEVEL.DEBUG_SERVER
			}
			return level
		}
		static log(message?: any, ...optionalParams): void {
			var level = this.getLocalLevel(this.LogLevel);
			if (level <= LOGLEVEL.DEBUG) {
				if(message == null || message == undefined || (typeof(message) == "string" && message == "")){
					this.error("日志不能为空,请加标识头,不能再坑队友了!");
				}
				if (xlLib.Global.isH5) {
					console.log(new Date().toTimeString().split(" ")[0],"LOG",message, optionalParams);
				}
				else{
					console.log(message, optionalParams);
				}
				if(level != this.LogLevel){ 
					// this.logToServer(level, message, optionalParams);
				}
			}
		}

		static debug(message?: any, ...optionalParams: any[]): void {
			var level = this.getLocalLevel(this.LogLevel);
			if (level <= LOGLEVEL.DEBUG) {
				if(message == null || message == undefined || (typeof(message) == "string" && message == "")){
					this.error("日志不能为空,请加标识头,不能再坑队友了!");
				}
				if (xlLib.Global.isH5) {
					console.log(new Date().toTimeString().split(" ")[0],"DEBUG",message, optionalParams);
				}else{
					console.log(message, optionalParams);
				}
				if(level != this.LogLevel){ 
					// this.logToServer(level, message, optionalParams);
				}
			}
		}

		static info(message?: any, ...optionalParams): void {
			var level = this.getLocalLevel(this.LogLevel);
			if (level <= LOGLEVEL.INFO) {
				if(message == null || message == undefined || (typeof(message) == "string" && message == "")){
					this.error("日志不能为空,请加标识头,不能再坑队友了!");
				}
				if (xlLib.Global.isH5) {
					console.log(new Date().toTimeString().split(" ")[0],"INFO",message, optionalParams);
				}else{
					console.log(message, optionalParams);
				}
				if(level != this.LogLevel){ 
					// this.logToServer(level, message, optionalParams);
				}
			}
		}

		static warn(message?: any, ...optionalParams): void {
			var level = this.getLocalLevel(this.LogLevel);
			if (level <= LOGLEVEL.WARN) {
				if(message == null || message == undefined || (typeof(message) == "string" && message == "")){
					this.error("日志不能为空,请加标识头,不能再坑队友了!");
				}
				if (xlLib.Global.isH5) {
					console.log(new Date().toTimeString().split(" ")[0],"WARN",message, optionalParams);
				}else{
					console.log(message, optionalParams);
				}
				if(level != this.LogLevel){ 
					// this.logToServer(level, message, optionalParams);
				}
			}
		}

		static error(message?: any, ...optionalParams): void {
			var level = this.getLocalLevel(this.LogLevel);
			if (level <= LOGLEVEL.ERROR) {
				if(message == null || message == undefined || (typeof(message) == "string" && message == "")){
					this.error("日志不能为空,请加标识头,不能再坑队友了!");
				}
				if (xlLib.Global.isH5) {
					console.error(new Date().toTimeString().split(" ")[0],"ERROR",message, optionalParams);
				}else{
					console.log(message, optionalParams);
				}
				if(level != this.LogLevel){ 
					// this.logToServer(level, message, optionalParams);
				}
			}
			var str = message;
			if (optionalParams) {
				optionalParams.forEach(txt => {
					if(txt){
						str += txt;
					}
				});
			}
			if (xlLib["DebugView"])
				xlLib["DebugView"].Instance.addLog(str);
		}
	}

}

onerror = function (errorMessage: any, scriptURI?: any, lineNumber?: any, columnNumber?: any, errorObj?: any) {
	var str = "异常捕获:" + errorMessage + "url:" + scriptURI + "line:" + lineNumber;
	xlLib.Console.error(str); 
    xlLib["DebugView"].Instance.addLog(str);
}
