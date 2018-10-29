/**
 * StatistcsMgr
 * 统计管理
 */
module xlLib{
    export class StatistcsMgr extends egret.EventDispatcher{

        public static PING = "ping";
        public static SENDANDRECEIVE = "sendAndReceive";
        public static SENDEDANDRECEIVED = "sendedAndReceived";
        public static SOCKETSTATUS = "socketStatus";

        public static _self: StatistcsMgr = null;

        //总共发送多少kb
        public sendedKb: number;
        //发送多少B每秒
        public sendB: number;
        //总共接收了多少kb
        public receiveKb: number;
        //接收多少B每秒
        public receiveB: number;
        //秒表
        public secondTimer: egret.Timer;

        constructor() {super();}

        public static get instance():StatistcsMgr{
            if(this._self == null){
                this._self = new StatistcsMgr();
            }
            return this._self;
        }


        public init(){
            this.sendedKb = 0;
            this.receiveKb = 0;
            this.sendB = 0;
            this.receiveB = 0;
            this.secondTimer = new egret.Timer(1000, 0);
            this.secondTimer.addEventListener(egret.TimerEvent.TIMER, this.dispatchSecondEvent, this);
            this.secondTimer.start();
            this.requestPing();
        }

        /**
         * 每秒流量值
         */
        private dispatchSecondEvent(evt: egret.TimerEvent): void{
            if (Console.isDevMode)
                return ;
            this.dispatchEventWith(StatistcsMgr.SENDANDRECEIVE, false, {"send": this.sendB, "receive": this.receiveB});
            this.sendB = this.receiveB = 0;
        }

        /**
         * 请求ping值
         */
        private requestPing():void{
            // var ping: Pmd.SetPingTimeNullUserPmd_CS = new Pmd.SetPingTimeNullUserPmd_CS();
            // NetMgr.ws.sendPlat(ping);
        }
        /**
         * socket连接状态
         */
        public set socketStatus(str: string){
            this.dispatchEventWith(StatistcsMgr.SOCKETSTATUS, false, str);
        }

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
        public messageCharStatistics(str: string, type: string, charset = "utf-8") {
            if (Console.isDevMode)
                return ;
            var total = 0,charCode,i,len;
            charset = charset ? charset.toLowerCase() : '';
            if(charset === 'utf-16' || charset === 'utf16'){
                for(i = 0, len = str.length; i < len; i++){
                    charCode = str.charCodeAt(i);
                    if(charCode <= 0xffff){
                        total += 2;
                    }else{
                        total += 4;
                    }
                }
            }
            else{
                for(i = 0, len = str.length; i < len; i++){
                    charCode = str.charCodeAt(i);
                    if(charCode <= 0x007f) {
                        total += 1;
                    }else if(charCode <= 0x07ff){
                        total += 2;
                    }else if(charCode <= 0xffff){
                        total += 3;
                    }else{
                        total += 4;
                    }
                }
            }
            if(type == "send"){
                this.sendB += total;
                this.sendedKb += (total / 1024);
            } 
            else{
                this.receiveB += total;
                this.receiveKb += (total / 1024);
            }
            this.dispatchEventWith(StatistcsMgr.SENDEDANDRECEIVED, false, {"sended": this.sendedKb, "received": this.receiveKb});
        }

        public destroy(){
            if(this.secondTimer){
                this.secondTimer.removeEventListener(egret.TimerEvent.TIMER, this.dispatchSecondEvent, this);
                this.secondTimer.stop();
            }
        }
    }
}