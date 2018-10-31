var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var ReceiveMessageMgr = (function () {
        function ReceiveMessageMgr() {
        }
        ReceiveMessageMgr.prototype.initPushMessage = function () {
            //  xlLib.WebSocketMgr.getInstance().registerMsgHandler("",this.onMessage);
        };
        ReceiveMessageMgr.prototype.onMessage = function (msg) {
            // console.log("--------------------------------------");
        };
        return ReceiveMessageMgr;
    }());
    xlLib.ReceiveMessageMgr = ReceiveMessageMgr;
    __reflect(ReceiveMessageMgr.prototype, "xlLib.ReceiveMessageMgr");
})(xlLib || (xlLib = {}));
