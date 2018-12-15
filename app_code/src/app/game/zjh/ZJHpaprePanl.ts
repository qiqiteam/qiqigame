class ZJHpaprePanl extends eui.Component {
    public lab_papreTips: eui.Label;
    public _btn_hintclose: eui.Button;

    private gameIconData: GameIconData;
    public constructor() {
        super();
        this.skinName = "ZJHpaprePanlSkin";
    }
    public TYPE_TAP: string = "";
    public time: number;        //秒数
    public timer: egret.Timer;  //计时器
    public str: string;

    protected partAdded(partName: string, instance: any): void {
        this.clearTime();
        super.partAdded(partName, instance);
    }


    protected childrenCreated(): void {
        super.childrenCreated();
        this.initData();
        this._btn_hintclose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        EventUtil.addEventListener(EventConst.onUserOutRoom, this.onleave, this);
    }
    private onleave(data: any) {
        if (data._obj.code == 200) {
            GlobalData.isLiveRoom=data._obj.close;
            xlLib.PopUpMgr.removePopUp(ZJHpaprePanl, 1);

            let musicBg = ["hall_bg_mp3"];
            xlLib.SoundMgr.instance.playBgMusic(musicBg);
        }
        this.destroy();
    }

    private onClick(e: egret.TouchEvent) {
        GlobalData.liveCloseBtn = true;
        this.quxiaopipei();
    }
    /**取消匹配 */
    private quxiaopipei() {
        let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        let typeData: typeData = gameData.getTypeDataByindex(this.TYPE_TAP);
        let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token, playway: playway.id
        };
        xlLib.WebSocketMgr.getInstance().send(EventConst.outRoom, senddata, (data) => {
        }, this);
    }

    private initData() {
        this.str = this.lab_papreTips.text;
        this.startCountDown(0);
    }
    /**开始倒计时*/
    private startCountDown(time: number): void {
        this.time = time;
        if (this.timer == null) {
            this.timer = new egret.Timer(300);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.start();
        }
    }


    /**倒计时处理*/
    private timerFunc(evt: egret.TimerEvent): void {
        for (let i: number = 0; i <= this.time % 4; i++) {
            switch (i) {
                case 0: this.lab_papreTips.text = this.str + ''; break;
                case 1: this.lab_papreTips.text = this.str + '.'; break;
                case 2: this.lab_papreTips.text = this.str + '..'; break;
                case 3: this.lab_papreTips.text = this.str + '...'; break;
            }
        }
        this.time++;
    }

    /**清除倒计时*/
    private clearTime(): void {
        if (this.timer) {
            this.timer.stop();
            // this.timeTxt.visible = false;
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer = null;
        }
    }
    public destroy(): void {
        this.TYPE_TAP = "";
        this._btn_hintclose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.removeEventListener(EventConst.onUserOutRoom, this.onleave, this);
    }
}