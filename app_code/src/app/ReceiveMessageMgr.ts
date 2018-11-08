module xlLib {
    export class ReceiveMessageMgr {
    private static _instance: ReceiveMessageMgr;

	/**
	 * http请求管理器单例
	 */
	public static getInstance(): ReceiveMessageMgr {
		if (!this._instance) {
			this._instance = new ReceiveMessageMgr();
			}
			return this._instance;
		}
	public constructor() {
	}

	public initPushMessage() {
        xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.hog,this.onMessage);
        xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.hognum,this.onMessage);
		xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.banker,this.onMessage);
		xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.bet,this.onMessage);
		xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.betnum,this.onMessage);
	}

	private onMessage(msg:any):void
	{
		switch (msg.command) {
			// case "EventConst.betnum":
			    //处理逻辑----------
				//EventUtil.dispatchEvent(msg.command,msg);
				// return ;
			default:
			    console.log("收到服务器推送："+msg.command);
				EventUtil.dispatchEvent(msg.command,msg);
				return;
		}
		
	}
	}
}