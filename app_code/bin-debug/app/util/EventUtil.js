var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventUtil = (function () {
    function EventUtil() {
    }
    //新建事件
    EventUtil.Event = function (type, obj, bubbles, cancelable) {
        if (obj === void 0) { obj = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return new xlLib.ZqEvent(type, obj);
    };
    //派发事件
    EventUtil.dispatchEvent = function (type, obj, bubbles, cancelable) {
        if (obj === void 0) { obj = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var event = new xlLib.ZqEvent(type, obj, bubbles, cancelable);
        xlLib.ZqListener.getInstance().dispatchEvent(event);
    };
    EventUtil.hasEventListener = function (type) {
        return xlLib.ZqListener.getInstance().hasEventListener(type);
    };
    //监听事件
    EventUtil.addEventListener = function (type, listener, thisObject, useCapture, priority) {
        if (useCapture === void 0) { useCapture = false; }
        if (priority === void 0) { priority = 0; }
        xlLib.ZqListener.getInstance().addEventListener(type, listener, thisObject, useCapture, priority);
    };
    //移除监听事件
    EventUtil.removeEventListener = function (type, listener, thisObject, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        xlLib.ZqListener.getInstance().removeEventListener(type, listener, thisObject, useCapture);
    };
    return EventUtil;
}());
__reflect(EventUtil.prototype, "EventUtil");
