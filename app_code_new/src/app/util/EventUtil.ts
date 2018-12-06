class EventUtil {
    //新建事件
    public static Event(type: string, obj: any = null, bubbles: boolean = false, cancelable: boolean = false): xlLib.ZqEvent {
        return new xlLib.ZqEvent(type, obj);
    }

    //派发事件
    public static dispatchEvent(type: string, obj: any = null, bubbles: boolean = false, cancelable: boolean = false): void {
        var event = new xlLib.ZqEvent(type, obj, bubbles, cancelable);
        xlLib.ZqListener.getInstance().dispatchEvent(event);
    }

    public static hasEventListener(type: string): boolean {
        return xlLib.ZqListener.getInstance().hasEventListener(type);
    }

    //监听事件
    public static addEventListener(type: string, listener: Function, thisObject: any, useCapture: boolean = false, priority: number = 0): void {
        xlLib.ZqListener.getInstance().addEventListener(type, listener, thisObject, useCapture, priority);
    }

    //移除监听事件
    public static removeEventListener(type: string, listener: Function, thisObject: any, useCapture: boolean = false): void {
        xlLib.ZqListener.getInstance().removeEventListener(type, listener, thisObject, useCapture);
    }
}