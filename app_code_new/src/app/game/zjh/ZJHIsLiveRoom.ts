/**能够离开房间面板 */
class ZJHIsLiveRoom extends eui.ItemRenderer {
    public _btn_cancel1: eui.Button;
    public _btn_quite1: eui.Button;
    public lab_isoutTips: eui.Label;


    constructor() {
        super();
        this.skinName = "ZJHIsLiveRoomSkin";
    }

    public childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_cancel1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this._btn_quite1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.addEventListener(EventConst.onUserLeave, this.onleave, this);
    }
    public onclosepanl(e: egret.TouchEvent): void {
        console.log("点击取消");
        xlLib.PopUpMgr.removePopUp(ZJHIsLiveRoom, 1);

    }
    private onClick(e: egret.TouchEvent) {
        this.sendInfo(EventConst.zjhLeave, true);
        console.log("点击确定");
    }
    public sendInfo(sendstr: string, statue: boolean) {
        let gameData: gameData = UserInfo.getInstance().getGameDataByindex(Const.GAME_ZHAJINHUA);
        let typeData: typeData = gameData.getTypeDataByindex(Const.TYPE_JINGDIANJINHUA);
        let playway: playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        let senddata: any = {
            userid: UserInfo.getInstance().uid,
            token: UserInfo.getInstance().token,
            playway: playway.id,
            leaveState: statue
        };
        xlLib.WebSocketMgr.getInstance().send(sendstr, senddata, (data) => {
        }, this);
    }
    private onleave(data: any) {
        if (data._obj.code == 200) {
            xlLib.PopUpMgr.removePopUp(ZJHIsLiveRoom, 1);
            let musicBg = ["hall_bg_mp3"];
            xlLib.SoundMgr.instance.playBgMusic(musicBg);
            //xlLib.SceneMgr.instance.changeScene(ZJHroom);
            xlLib.SceneMgr.instance.changeScene(Lobby);
        }
        this.destroy();
    }
    protected dataChanged(): void {

    }
    public destroy(): void {
        this._btn_cancel1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this._btn_quite1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        EventUtil.removeEventListener(EventConst.onUserLeave, this.onleave, this);
    }
}