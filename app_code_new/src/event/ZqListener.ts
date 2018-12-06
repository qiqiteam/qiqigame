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

module xlLib {
    /**
     * 全局侦听类及消息处理
     */
    export class ZqListener {
        public CLASS_NAME: string = "ZqListener";
        private static _instance: ZqListener;
        private _dispatcher: Dispatcher;
        private isInit: boolean = false;
        public constructor() {
            if (this.isInit) {
                //                egret.Logger.warning("不可以实例化"+this.CLASS_NAME+"类,请实例Lcp."+this.CLASS_NAME+".getInstance()开始");
            }
            if (this._dispatcher == null) {
                this._dispatcher = new Dispatcher();
                this.isInit = true;
            }
        }

        public static getInstance(): ZqListener {
            if (this._instance == null)
                this._instance = new ZqListener();
            return this._instance;
        }

        public addEventListener(type: string, listener: Function, thisObject: any, useCapture: boolean = false, priority: number = 0): void {
            this._dispatcher.addListener(type, listener, thisObject);
        }

        public hasEventListener(type: string): boolean {
            return this._dispatcher.hasListener(type);
        }

        public removeEventListener(type: string, listener: Function, thisObject: any, useCapture: boolean = false): void {
            this._dispatcher.removeListener(type, listener, thisObject);
        }

        //public hasEventListener(type: string): boolean {
        //    return this._dispatcher.hasEventListener(type);
        //}

        //public willTrigger(type: string): boolean {
        //    return this._dispatcher.willTrigger(type);
        //}

        public dispatchEvent(event: ZqEvent): boolean {
            return this._dispatcher.dispatch(event.type, event);
        }

        public toString(): string {
            return this._dispatcher.toString();
        }
    }
}