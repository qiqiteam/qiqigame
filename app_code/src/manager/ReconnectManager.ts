/**
 * 断线重连
 */
class ReconnectManager {
    private static _instance: ReconnectManager;

    private bjlSubscription: boolean = false;
    private lfSubscription: boolean = false;
    private xjSubscription: boolean = false;
    private nnSubscription: boolean = true;

    private timer: egret.Timer;

    public static getIntance(): ReconnectManager {
        if (this._instance == null) {
            this._instance = new ReconnectManager();
        }
        return this._instance;
    }

    public reconnect() {
        this.initListener();
        var data: any = new Object;
        data.userName = GlobalData.username;
        data.passWord = GlobalData.md5PassWord;
        xlLib.PomeloSocketMgr.getInstance().connect(Const.GAME_HOST, Const.GAME_PORT, data);
    }

    private initListener() {
        EventUtil.addEventListener(EventConst.ON_LOGIN_SUCCES, this.onLoginSucces, this);
        EventUtil.addEventListener(EventConst.ON_SOCKET_FAIL, this.onLoginFail, this);
    }

    private onLoginSucces(data: any): void {
        GlobalData.isReConnect = true;
        GlobalData.recNum = 0;
        xlLib.PomeloSocketMgr.getInstance().initPushMessage();
        let info = data.param;
        this.initPlayerData(info.msg.player);
        this.initGameData(info.msg.plaza[0]);
        GlobalData.defaultNotice = info.msg.bulletin;
    }

    private onLoginFail(data: any): void {
        // xlLib.UIMgr.instance.hideLoading(TipsLoading);
        // ReconnectManager.getIntance().clear();
        // if (GlobalData.isInLoginView) {
        //     return;
        // }
        // let alertDialog: AlertDialog = xlLib.UIMgr.instance.showUI(AlertDialog);
        // alertDialog.showAlertDialog("网络原因重连失败，请重新登录", () => {
        //     xlLib.SceneMgr.instance.changeScene(Lobby);
        //     GlobalData.isOutLogin = true;
        //     GlobalData.clearData();
        //     xlLib.SceneMgr.instance.currentScene.uiLayer.addChild(new LoginView());
        // }, this);
    }

    private initPlayerData(data: any) {
        UserInfo.getInstance().uid = data.uid;
		UserInfo.getInstance().sid = data.sid;
		UserInfo.getInstance().loginTimes = data.loginTimes;
		UserInfo.getInstance().nickName = data.nickName;
		UserInfo.getInstance().liveMoney = data.liveMoney;
		UserInfo.getInstance().headerId = data.headerId;
		UserInfo.getInstance().userType = data.userType;
		UserInfo.getInstance().status = data.status;
		UserInfo.getInstance().currenyType = data.currenyType;
		UserInfo.getInstance().washProfitShow = data.washProfitShow;

		GlobalFunction.initUpdateLimit(data.limitItems);

        GlobalData.isapiuser = GlobalFunction.checkable(Const.apiuser);
        GlobalData.iscanbet = GlobalFunction.checkable(Const.betable);
    }

    private initGameData(data: any) {
        var gameData: any = new Object;
		gameData.gameIds = [];
		for(var i: number = 0; i < data.labels.length; i++) {
			var j: number = 0;
			switch(data.labels[i].id) {
				case 0://百家乐
					var games: Array<any> = data.labels[i].game;
					for (j = 0; j < games.length; j++) {
						gameData.gameIds.push(games[j]["gameId"]);
						if (games[j]["gameType"] == Const.BJLName) {
							GlobalData.bjlTablesLength = GlobalData.bjlTablesLength + 1;
						} else if (games[j]["gameType"] == Const.LFName) {
							GlobalData.lhTablesLength = GlobalData.lhTablesLength + 1;
						}
					}
					break;
				case 1://龙虎
					var games: Array<any> = data.labels[i].game;
					for (j = 0; j < games.length; j++) {
						gameData.gameIds.push(games[j]["gameId"]);
						if (games[j]["gameType"] == Const.BJLName) {
							GlobalData.bjlTablesLength = GlobalData.bjlTablesLength + 1;
						} else if (games[j]["gameType"] == Const.LFName) {
							GlobalData.lhTablesLength = GlobalData.lhTablesLength + 1;
						}
					}
					break;
				case 2://星级
					var games: Array<any> = data.labels[i].game;
					for (j = 0; j < games.length; j++) {
						if (games[j]["gameType"] == Const.BJLName) {
							GlobalData.bjlTablesLength = GlobalData.bjlTablesLength + 1;
						} else if (games[j]["gameType"] == Const.LFName) {
							GlobalData.lhTablesLength = GlobalData.lhTablesLength + 1;
						}
						gameData.gameIds.push(games[j]["gameId"]);
					}
					break;
				// case 3://牛牛，赛宝，轮盘
				// 	var gameData: any = new Object;
				// 	gameData.gameIds = [];
				// 	var games: Array<any> = data.labels[i].game;
				// 	for (j = 0; j < games.length; j++) {
				// 		if (games[j]["gameType"] == Const.NNName || games[j]["gameType"] == Const.ZXName) {
				// 			GlobalData.nnTablesLength = GlobalData.nnTablesLength + 1;
				// 			gameData.gameIds.push(games[j]["gameId"]);
				// 		}
				// 	}
				// 	// xlLib.PomeloSocketMgr.getInstance().request("plaza.plazaHandler.subscription", gameData, this.nnTableFunc, this);
				// 	break;
			}
		}
		xlLib.PomeloSocketMgr.getInstance().request("connector.playerHandler.subscription", gameData, this.subTableFunc, this);
    }

    private subTableFunc() {
		xlLib.SceneMgr.instance.changeScene(Lobby);
	}

    // /**
	//  * 百家乐订阅成功
	//  */
    // private bjlTableFunc(response: any) {
    //     this.bjlSubscription = true;
    //     if (this.bjlSubscription && this.lfSubscription && this.xjSubscription && this.nnSubscription) {
    //         this.changeScene();
    //     }
    // }

	// /**
	//  * 龙虎订阅成功
	//  */
    // private lfTableFunc(response: any) {
    //     this.lfSubscription = true;
    //     if (this.bjlSubscription && this.lfSubscription && this.xjSubscription && this.nnSubscription) {
    //         this.changeScene();
    //     }
    // }

	// /**
	//  * 星级订阅成功
	//  */
    // private xjTableFunc(response: any) {
    //     this.xjSubscription = true;
    //     if (this.bjlSubscription && this.lfSubscription && this.xjSubscription && this.nnSubscription) {
    //         this.changeScene();
    //     }
    // }

	// /**
	//  * 牛牛订阅成功
	//  */
    // private nnTableFunc(response: any) {
    //     this.nnSubscription = true;
    //     if (this.bjlSubscription && this.lfSubscription && this.xjSubscription && this.nnSubscription) {
    //         this.changeScene();
    //     }
    // }

    private changeScene() {
        if (this.timer == null) {
            this.timer = new egret.Timer(500);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    }

    private timerFunc(evt: egret.TimerEvent) {
        var dingylen: number = GlobalData.bjlTablesLength + GlobalData.lhTablesLength + GlobalData.nnTablesLength;
        var totallen: number = GlobalData.bjlTablesInfo.length + GlobalData.lfTablesInfo.length + GlobalData.nnTablesInfo.length + GlobalData.zxnTablesInfo.length;
        if (dingylen <= totallen) {
            this.clear();
            switch (GlobalData.recData.view) {
                case 1:
                    xlLib.SceneMgr.instance.changeScene(Lobby);
                    xlLib.UIMgr.instance.hideLoading(TipsLoading);
                    GlobalData.isReConnect = false;
                    break;
                case 2:
                    xlLib.SceneMgr.instance.changeScene(Lobby);
                    xlLib.UIMgr.instance.hideLoading(TipsLoading);
                    GlobalData.isReConnect = false;
                    break;
                case 3:
                    this.toGame();
                    break;
            }
        }
    }

    private toGame() {
        var rdata: ReconnectData = GlobalData.recData;
        var ldata: any = new Object();
        ldata.gameId = rdata.gameId;
        xlLib.PomeloSocketMgr.getInstance().request("game.playerHandler.leave", ldata, (response) => {
            var data: any = new Object;
            data.gameId = rdata.gameId;
            data.quotaId = GlobalData.currQuotaId;
            xlLib.PomeloSocketMgr.getInstance().request("game.playerHandler.enter", data, (response) => {
                let limit: Array<number> = GlobalFunction.getTableLimit(rdata.gameType, rdata.gameId);
                if (limit) {
                    GlobalData.xhMin = limit[0];
                    GlobalData.xhMax = limit[1];
                } else {
                    GlobalData.xhMin = GlobalData.xhLimit[GlobalData.currQuotaId - 1].getMin();
                    GlobalData.xhMax = GlobalData.xhLimit[GlobalData.currQuotaId - 1].getMax();
                }

                GlobalData.roomTableInfomation = new RoomTableInfomation(response.msg);
                if (rdata.gameType == Const.BJLName) {
                    xlLib.SceneMgr.instance.changeScene(BJLGameView, true);
                } else if (rdata.gameType == Const.LFName) {
                    xlLib.SceneMgr.instance.changeScene(LHGameView, true);
                } else if (rdata.gameType == Const.NNName) {
                    xlLib.SceneMgr.instance.changeScene(NNGameView, true);
                } else if (rdata.gameType == Const.ZXName) {
                    xlLib.SceneMgr.instance.changeScene(ZXNGameView, true);
                }
                xlLib.UIMgr.instance.hideLoading(TipsLoading);
                GlobalData.isReConnect = false;
            }, this,
                (res) => {
                    xlLib.UIMgr.instance.hideLoading(TipsLoading);
                    GlobalData.isReConnect = false;
                });
        });
    }

    private clearTime() {
        if (this.timer) {
            this.timer.stop();
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    }

    public clear() {
        this.bjlSubscription = false;
        this.lfSubscription = false;
        this.xjSubscription = false;
        this.nnSubscription = true;
        this.clearTime();
        EventUtil.removeEventListener(EventConst.ON_LOGIN_SUCCES, this.onLoginSucces, this);
        EventUtil.removeEventListener(EventConst.ON_SOCKET_FAIL, this.onLoginFail, this);
    }
}