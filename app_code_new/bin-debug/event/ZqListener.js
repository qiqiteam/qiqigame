// 使用方法
//  sp.touchEnabled=true;//开启触点事件
// //单击
// sp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
//     xlLib.Console.log("我单击了圆",e.stageX,e.stageY);
//     //全局侦听发送消息和自定义事件,这里的自定义事件,也可以自己封装成强类型即可,比如LEvent.MYCIRCLE
//     lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent("mycircle",.1,false));
//     //元件自身发送消息和自定义事件,同上
//     sp.dispatchEvent(new lcp.LEvent("mycircle1",.5));
// },this);
// //当前元件侦听自定义事件获取数据
// sp.addEventListener("mycircle1",(e)=>{
//    xlLib.Console.log(e.param);//自定义事件参数param,可以传入任意对象,然后自行解析即可.
//    sp.y=1000*parseFloat(e.param);
// },this);
// //全局侦听自定义事件获取数据
// xlLib.ZqListener.getInstance().addEventListener("mycircle",(e)=>{
//     xlLib.Console.log(e.param);//同上
//     sp.alpha=parseFloat(e.param);
// },this);
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    /**
     * 全局侦听类及消息处理
     */
    var ZqListener = (function () {
        function ZqListener() {
            this.CLASS_NAME = "ZqListener";
            this.isInit = false;
            if (this.isInit) {
                //                egret.Logger.warning("不可以实例化"+this.CLASS_NAME+"类,请实例Lcp."+this.CLASS_NAME+".getInstance()开始");
            }
            if (this._dispatcher == null) {
                this._dispatcher = new xlLib.Dispatcher();
                this.isInit = true;
            }
        }
        ZqListener.getInstance = function () {
            if (this._instance == null)
                this._instance = new ZqListener();
            return this._instance;
        };
        ZqListener.prototype.addEventListener = function (type, listener, thisObject, useCapture, priority) {
            if (useCapture === void 0) { useCapture = false; }
            if (priority === void 0) { priority = 0; }
            this._dispatcher.addListener(type, listener, thisObject);
        };
        ZqListener.prototype.hasEventListener = function (type) {
            return this._dispatcher.hasListener(type);
        };
        ZqListener.prototype.removeEventListener = function (type, listener, thisObject, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            this._dispatcher.removeListener(type, listener, thisObject);
        };
        //public hasEventListener(type: string): boolean {
        //    return this._dispatcher.hasEventListener(type);
        //}
        //public willTrigger(type: string): boolean {
        //    return this._dispatcher.willTrigger(type);
        //}
        ZqListener.prototype.dispatchEvent = function (event) {
            return this._dispatcher.dispatch(event.type, event);
        };
        ZqListener.prototype.toString = function () {
            return this._dispatcher.toString();
        };
        return ZqListener;
    }());
    xlLib.ZqListener = ZqListener;
    __reflect(ZqListener.prototype, "xlLib.ZqListener");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=ZqListener.js.map