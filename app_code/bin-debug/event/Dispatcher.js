var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var Dispatcher = (function () {
        function Dispatcher() {
            this._funcMap = {};
        }
        Dispatcher.prototype.dispatch = function ($noticeType, data) {
            if (data === void 0) { data = null; }
            var funcVector = this._funcMap[$noticeType];
            var i = 0;
            if (funcVector == null)
                return;
            while (i < funcVector.length) {
                if (funcVector[i]) {
                    funcVector[i][0].call(funcVector[i][1], data);
                }
                i++;
            }
            return true;
        };
        Dispatcher.prototype.addListener = function (noticeType, listener, thisObj) {
            if (this._funcMap[noticeType]) {
                var index = this.getNoticeIndex(noticeType, listener, thisObj);
                if (index == -1)
                    this._funcMap[noticeType].push([listener, thisObj]);
            }
            else {
                this._funcMap[noticeType] = [];
                this._funcMap[noticeType].push([listener, thisObj]);
            }
        };
        Dispatcher.prototype.hasListener = function (noticeType) {
            if (this._funcMap[noticeType] && this._funcMap[noticeType].length > 0) {
                return true;
            }
            return false;
        };
        Dispatcher.prototype.removeListener = function (noticeType, listener, thisObj) {
            if (this._funcMap[noticeType]) {
                var index = this.getNoticeIndex(noticeType, listener, thisObj);
                if (index != -1)
                    this._funcMap[noticeType].splice(index, 1);
            }
        };
        Dispatcher.prototype.getNoticeIndex = function (noticeType, listener, thisObj) {
            var index = -1;
            for (var i in this._funcMap[noticeType]) {
                if (this._funcMap[noticeType][i][0] == listener && this._funcMap[noticeType][i][1] == thisObj) {
                    index = parseInt(i);
                    break;
                }
            }
            return index;
        };
        return Dispatcher;
    }());
    xlLib.Dispatcher = Dispatcher;
    __reflect(Dispatcher.prototype, "xlLib.Dispatcher");
})(xlLib || (xlLib = {}));
