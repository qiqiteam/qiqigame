var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var TimerBase = (function () {
        function TimerBase(_delay, call, thisObj, loop) {
            if (loop === void 0) { loop = 0; }
            this.loopLimit = 0;
            this.last = 0;
            this.jumped = 0;
            this.isStart = false;
            this.begin = 0;
            this.delay = _delay;
            this.callFun = call;
            this._thisObj = thisObj;
            this.loopLimit = loop;
        }
        TimerBase.prototype.stop = function () {
            if (TimerBase.timerlists.indexOf(this) != -1) {
                this.isStart = false;
                TimerBase.timerlists.splice(TimerBase.timerlists.indexOf(this), 1);
            }
        };
        TimerBase.prototype.start = function () {
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
        };
        TimerBase.prototype.remain = function () {
            return this.current;
        };
        TimerBase.prototype.needRender = function () {
            if (!this.isStart) {
                return 0;
            }
            this.current = this.current - (egret.getTimer() - this.last);
            this.last = egret.getTimer();
            var rende = (this.last - this.begin) / this.delay;
            return rende - this.jumped;
        };
        TimerBase.prototype.excute = function () {
            this.jumped++;
            if (this.loopLimit != 0 && this.jumped > this.loopLimit) {
                this.stop();
            }
            this.current = this.delay;
            //this.callFun.bind(this._thisObj);
            //ConsoleManager.log(this._thisObj);
            //ConsoleManager.log(this._thisObj.callFun);
            this.callFun.call(this._thisObj);
        };
        TimerBase.timerHandler = function () {
            var time;
            var rendNum = 0;
            var j = 0;
            var i = 0;
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
        };
        TimerBase.TIMERBASE_DELAY = 10;
        TimerBase.timerNumber = 0;
        TimerBase.timerlists = [];
        return TimerBase;
    }());
    xlLib.TimerBase = TimerBase;
    __reflect(TimerBase.prototype, "xlLib.TimerBase");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=TimerBase.js.map