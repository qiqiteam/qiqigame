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
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.parteySuccess, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.BaccaratEfcsh, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserList, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserLeave, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.niuniu_leave, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserShowOrderUpdate, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserBetOrderUpdate, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserHogOrderUpdate, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onGameStatusChange, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.players, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onNewUserEnterGame, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.hog, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.hognum, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.banker, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.bet, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.betnum, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.summary, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.play, this.onMessage);
			
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.OnUpdateLimitItem, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUpdateUserBalance, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onSendJetton, this.onMessage);		
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.userwin, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserLeaveGame, this.onMessage);
			// xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.acquisitionGolb, this.onMessage);
			// xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.startBeton, this.onMessage, this);
			// xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.baccaratOnJoinRoom, this.onMessage, this);
			// xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.dealCatch, this.onMessage, this);
			// xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.beginBteon, this.onMessage, this);
			// xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.bsogc, this.onMessage, this);
			// xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.gameOverSucces, this.onMessage, this);
			
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserBetSelect, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserSeeCard, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onAiSeeCard, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserWaiveCard, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onAiWaiveCard, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserBetOrderUpdate, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onAiBetOrderUpdate, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserToCard, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserAllPress, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onTimelyNotify, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onUserExceWaiveCard, this.onMessage);
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onCheckout, this.onMessage);//结算，游戏结束
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.leave, this.onMessage);//离开房间
			xlLib.WebSocketMgr.getInstance().registerMsgHandler(EventConst.onGameStatusChange, this.onMessage);//房间状态
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
				case EventConst.onNewUserEnterGame:
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