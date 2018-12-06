module xlLib {
    export class TimerBase {
        public loopLimit: number = 0;
        public last: number = 0;
        public jumped: number = 0;
        public isStart: boolean = false;
        public delay: number;
        public current: number;
        public callFun: Function;
        public _thisObj: any;
        public begin: number = 0;
        public static TIMERBASE_DELAY: number = 10;
        public static timer: egret.Timer;
        public static timerNumber: number = 0;
        public static timerlists: Array<any> = [];

        public constructor(_delay: number, call: Function, thisObj: any, loop: number = 0) {
            this.delay = _delay;
            this.callFun = call;
            this._thisObj = thisObj;
            this.loopLimit = loop;
        }

        public stop(): void {
            if (TimerBase.timerlists.indexOf(this) != -1) {
                this.isStart = false;
                TimerBase.timerlists.splice(TimerBase.timerlists.indexOf(this), 1);
            }
        }

        public start(): void {
            if (TimerBase.timer == null) {
                TimerBase.timerNumber = 0;
                TimerBase.timer = new egret.Timer(10);
                TimerBase.timer.addEventListener(egret.TimerEvent.TIMER, TimerBase.timerHandler, TimerBase);
                TimerBase.timer.start();
            }
            this.isStart = true;
            this.current = this.delay;
            this.last = egret.getTimer();
            this.begin = this.last;
            this.jumped = 0;
            TimerBase.timerlists.push(this);
        }

        public remain(): number {
            return this.current;
        }

        public needRender(): number {
            if (!this.isStart) {
                return 0;
            }
            this.current = this.current - (egret.getTimer() - this.last);
            this.last = egret.getTimer();
            var rende: number = (this.last - this.begin) / this.delay;
            return rende - this.jumped;
        }

        public excute(): void {
            this.jumped++;
            if (this.loopLimit != 0 && this.jumped > this.loopLimit) {
                this.stop();
            }
            this.current = this.delay;
            //this.callFun.bind(this._thisObj);
            //ConsoleManager.log(this._thisObj);
            //ConsoleManager.log(this._thisObj.callFun);
            this.callFun.call(this._thisObj);
        }

        public static timerHandler(): void {
            var time: TimerBase;
            var rendNum: number = 0;
            var j: number = 0;
            var i: number = 0;
            while (i < TimerBase.timerlists.length) {
                time = TimerBase.timerlists[i];
                i++;
                rendNum = time.needRender();
                if (rendNum > 30) {
                    rendNum = 1;
                }
                j = 0;
                if (rendNum > 50)
                    rendNum = 1;
                    
                while (j < rendNum) {
                    j++;
                    time.excute();
                }
            }
        }

    }
}