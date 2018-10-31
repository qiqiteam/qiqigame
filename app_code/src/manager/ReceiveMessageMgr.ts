module xlLib {
    export class ReceiveMessageMgr {
    private static _instance: ReceiveMessageMgr;
	public constructor() {
	}

	public initPushMessage() {
        //  xlLib.WebSocketMgr.getInstance().registerMsgHandler("",this.onMessage);
	}

    private onMessage(msg:string):void
	{
        // console.log("--------------------------------------");
		
	}

	}
}