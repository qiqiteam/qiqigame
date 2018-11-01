var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var LOGLEVEL;
    (function (LOGLEVEL) {
        LOGLEVEL[LOGLEVEL["DEBUG"] = 0] = "DEBUG";
        LOGLEVEL[LOGLEVEL["INFO"] = 1] = "INFO";
        LOGLEVEL[LOGLEVEL["WARN"] = 2] = "WARN";
        LOGLEVEL[LOGLEVEL["ERROR"] = 3] = "ERROR";
        LOGLEVEL[LOGLEVEL["DEBUG_SERVER"] = 4] = "DEBUG_SERVER";
        LOGLEVEL[LOGLEVEL["INFO_SERVER"] = 5] = "INFO_SERVER";
        LOGLEVEL[LOGLEVEL["WARN_SERVER"] = 6] = "WARN_SERVER";
        LOGLEVEL[LOGLEVEL["ERROR_SERVER"] = 7] = "ERROR_SERVER";
    })(LOGLEVEL = xlLib.LOGLEVEL || (xlLib.LOGLEVEL = {}));
    /**
     * 控制台打印管理
     */
    var Console = (function () {
        function Console() {
        }
        Console.setLogLevel = function (level) {
            if (this.isDevMode == true) {
                this.LogLevel = LOGLEVEL.DEBUG;
            }
            else {
                this.LogLevel = level;
                egret.Logger.logLevel = egret.Logger.INFO;
            }
        };
        Console.init = function (b, logLevel) {
            if (xlLib.Global.isH5) {
                this.isDevMode = b;
            }
            else {
                this.isDevMode = b;
            }
            this.setLogLevel(logLevel);
        };
        Console.getLocalLevel = function (level) {
            if (level >= LOGLEVEL.DEBUG_SERVER) {
                level = this.LogLevel - LOGLEVEL.DEBUG_SERVER;
            }
            return level;
        };
        Console.log = function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            var level = this.getLocalLevel(this.LogLevel);
            if (level <= LOGLEVEL.DEBUG) {
                if (message == null || message == undefined || (typeof (message) == "string" && message == "")) {
                    this.error("日志不能为空,请加标识头,不能再坑队友了!");
                }
                if (xlLib.Global.isH5) {
                    console.log(new Date().toTimeString().split(" ")[0], "LOG", message, optionalParams);
                }
                else {
                    console.log(message, optionalParams);
                }
                if (level != this.LogLevel) {
                }
            }
        };
        Console.debug = function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            var level = this.getLocalLevel(this.LogLevel);
            if (level <= LOGLEVEL.DEBUG) {
                if (message == null || message == undefined || (typeof (message) == "string" && message == "")) {
                    this.error("日志不能为空,请加标识头,不能再坑队友了!");
                }
                if (xlLib.Global.isH5) {
                    console.log(new Date().toTimeString().split(" ")[0], "DEBUG", message, optionalParams);
                }
                else {
                    console.log(message, optionalParams);
                }
                if (level != this.LogLevel) {
                }
            }
        };
        Console.info = function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            var level = this.getLocalLevel(this.LogLevel);
            if (level <= LOGLEVEL.INFO) {
                if (message == null || message == undefined || (typeof (message) == "string" && message == "")) {
                    this.error("日志不能为空,请加标识头,不能再坑队友了!");
                }
                if (xlLib.Global.isH5) {
                    console.log(new Date().toTimeString().split(" ")[0], "INFO", message, optionalParams);
                }
                else {
                    console.log(message, optionalParams);
                }
                if (level != this.LogLevel) {
                }
            }
        };
        Console.warn = function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            var level = this.getLocalLevel(this.LogLevel);
            if (level <= LOGLEVEL.WARN) {
                if (message == null || message == undefined || (typeof (message) == "string" && message == "")) {
                    this.error("日志不能为空,请加标识头,不能再坑队友了!");
                }
                if (xlLib.Global.isH5) {
                    console.log(new Date().toTimeString().split(" ")[0], "WARN", message, optionalParams);
                }
                else {
                    console.log(message, optionalParams);
                }
                if (level != this.LogLevel) {
                }
            }
        };
        Console.error = function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            var level = this.getLocalLevel(this.LogLevel);
            if (level <= LOGLEVEL.ERROR) {
                if (message == null || message == undefined || (typeof (message) == "string" && message == "")) {
                    this.error("日志不能为空,请加标识头,不能再坑队友了!");
                }
                if (xlLib.Global.isH5) {
                    console.error(new Date().toTimeString().split(" ")[0], "ERROR", message, optionalParams);
                }
                else {
                    console.log(message, optionalParams);
                }
                if (level != this.LogLevel) {
                }
            }
            var str = message;
            if (optionalParams) {
                optionalParams.forEach(function (txt) {
                    if (txt) {
                        str += txt;
                    }
                });
            }
            if (xlLib["DebugView"])
                xlLib["DebugView"].Instance.addLog(str);
        };
        return Console;
    }());
    /**
     * 是否是开发模式
     */
    Console.isDevMode = false;
    Console.LOG_LEVEL_STR = ["[DEBUG]", "[INFO]", "[WARN]", "[ERROR]"];
    /**
     * 日志级别
     */
    Console.LogLevel = 7; //LOGLEVEL.ERROR_SERVER;
    xlLib.Console = Console;
    __reflect(Console.prototype, "xlLib.Console");
})(xlLib || (xlLib = {}));
onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
    var str = "异常捕获:" + errorMessage + "url:" + scriptURI + "line:" + lineNumber;
    xlLib.Console.error(str);
    xlLib["DebugView"].Instance.addLog(str);
};
//# sourceMappingURL=Console.js.map