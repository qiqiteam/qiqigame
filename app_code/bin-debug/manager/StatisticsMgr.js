var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * StatistcsMgr
 * 统计管理
 */
var xlLib;
(function (xlLib) {
    var StatistcsMgr = (function (_super) {
        __extends(StatistcsMgr, _super);
        function StatistcsMgr() {
            return _super.call(this) || this;
        }
        Object.defineProperty(StatistcsMgr, "instance", {
            get: function () {
                if (this._self == null) {
                    this._self = new StatistcsMgr();
                }
                return this._self;
            },
            enumerable: true,
            configurable: true
        });
        StatistcsMgr.prototype.init = function () {
            this.sendedKb = 0;
            this.receiveKb = 0;
            this.sendB = 0;
            this.receiveB = 0;
            this.secondTimer = new egret.Timer(1000, 0);
            this.secondTimer.addEventListener(egret.TimerEvent.TIMER, this.dispatchSecondEvent, this);
            this.secondTimer.start();
            this.requestPing();
        };
        /**
         * 每秒流量值
         */
        StatistcsMgr.prototype.dispatchSecondEvent = function (evt) {
            if (xlLib.Console.isDevMode)
                return;
            this.dispatchEventWith(StatistcsMgr.SENDANDRECEIVE, false, { "send": this.sendB, "receive": this.receiveB });
            this.sendB = this.receiveB = 0;
        };
        /**
         * 请求ping值
         */
        StatistcsMgr.prototype.requestPing = function () {
            // var ping: Pmd.SetPingTimeNullUserPmd_CS = new Pmd.SetPingTimeNullUserPmd_CS();
            // NetMgr.ws.sendPlat(ping);
        };
        Object.defineProperty(StatistcsMgr.prototype, "socketStatus", {
            /**
             * socket连接状态
             */
            set: function (str) {
                this.dispatchEventWith(StatistcsMgr.SOCKETSTATUS, false, str);
            },
            enumerable: true,
            configurable: true
        });
        /**
        * 计算字符串所占的内存字节数，默认使用UTF-8的编码方式计算，也可制定为UTF-16
        * UTF-8 是一种可变长度的 Unicode 编码格式，使用一至四个字节为每个字符编码
        *
        * 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)              一个字节
        * 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)      两个字节
        * 000800 - 00D7FF
         00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz       三个字节
        * 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节
        *
        * 注: Unicode在范围 D800-DFFF 中不存在任何字符
        * {@link http://zh.wikipedia.org/wiki/UTF-8}
        *
        * UTF-16 大部分使用两个字节编码，编码超出 65535 的使用四个字节
        * 000000 - 00FFFF  两个字节
        * 010000 - 10FFFF  四个字节
        *
        * {@link http://zh.wikipedia.org/wiki/UTF-16}
        * @param  {String} str
        * @param  {String} charset utf-8, utf-16
        * @return {Number}
        */
        StatistcsMgr.prototype.messageCharStatistics = function (str, type, charset) {
            if (charset === void 0) { charset = "utf-8"; }
            if (xlLib.Console.isDevMode)
                return;
            var total = 0, charCode, i, len;
            charset = charset ? charset.toLowerCase() : '';
            if (charset === 'utf-16' || charset === 'utf16') {
                for (i = 0, len = str.length; i < len; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode <= 0xffff) {
                        total += 2;
                    }
                    else {
                        total += 4;
                    }
                }
            }
            else {
                for (i = 0, len = str.length; i < len; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode <= 0x007f) {
                        total += 1;
                    }
                    else if (charCode <= 0x07ff) {
                        total += 2;
                    }
                    else if (charCode <= 0xffff) {
                        total += 3;
                    }
                    else {
                        total += 4;
                    }
                }
            }
            if (type == "send") {
                this.sendB += total;
                this.sendedKb += (total / 1024);
            }
            else {
                this.receiveB += total;
                this.receiveKb += (total / 1024);
            }
            this.dispatchEventWith(StatistcsMgr.SENDEDANDRECEIVED, false, { "sended": this.sendedKb, "received": this.receiveKb });
        };
        StatistcsMgr.prototype.destroy = function () {
            if (this.secondTimer) {
                this.secondTimer.removeEventListener(egret.TimerEvent.TIMER, this.dispatchSecondEvent, this);
                this.secondTimer.stop();
            }
        };
        return StatistcsMgr;
    }(egret.EventDispatcher));
    StatistcsMgr.PING = "ping";
    StatistcsMgr.SENDANDRECEIVE = "sendAndReceive";
    StatistcsMgr.SENDEDANDRECEIVED = "sendedAndReceived";
    StatistcsMgr.SOCKETSTATUS = "socketStatus";
    StatistcsMgr._self = null;
    xlLib.StatistcsMgr = StatistcsMgr;
    __reflect(StatistcsMgr.prototype, "xlLib.StatistcsMgr");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=StatisticsMgr.js.map