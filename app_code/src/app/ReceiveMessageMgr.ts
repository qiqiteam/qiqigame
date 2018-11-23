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
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.players, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.newplayer, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.hog, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.hognum, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.banker, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.bet, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.betnum, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.summary, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.play, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onBJLjoinroom, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.baccaratDeil, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onCatch, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.theNumberOfTooMuch, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.acquisitionGolb, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.startBeton, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.baccaratOnJoinRoom, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.dealCatch, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.beginBteon, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.bsogc, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.gambleType, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.settlement, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.seecard, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.botpour, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.compareCard, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.pressure, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.abandon, this.onMessage, this);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.leave, this.onMessage, this);
		}

		private onMessage(msg: any): void {
			switch (msg.command) {
				// case "EventConst.betnum":
				//处理逻辑----------
				//EventUtil.dispatchEvent(msg.command,msg);
				// return ;
				case EventConst.players:
					console.log(msg);
					UserInfo.getInstance().addPlayes(msg);
					EventUtil.dispatchEvent(msg.command, msg);
					return;
				case EventConst.newplayer:
					console.log(msg);
					UserInfo.getInstance().joinRoomPlayer(msg);
					EventUtil.dispatchEvent(msg.command, msg);
					return;
				default:
					console.log("收到服务器推送：" + msg.command);
					EventUtil.dispatchEvent(msg.command, msg);
					return;
			}

		}
	}
}