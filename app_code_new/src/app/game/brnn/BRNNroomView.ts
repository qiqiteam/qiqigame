class BRNNroomView extends eui.Component implements  eui.UIComponent {
	public bgImg:eui.Image;
	public _menu:eui.Button;
	public _rule:eui.Button;
	public _coin_label:eui.Label;
	public _btn_close:eui.Button;
	public _record:eui.Button;
	public _btn_cjc:eui.Button;

	private  effectIcon: egret.MovieClip;
 	private gameIconData:GameIconData;

	public constructor() {
		super();
		this.skinName = "BRNNroomViewSkin";
	}

	protected partRemoved(partName: string, instance: any): void
	{
		if(this.effectIcon){
			this.effectIcon.stop();
		}
       super.partRemoved(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
		this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
		this.effectIcon = xlLib.DisplayUtils.createAsyncMovieClicp("brnn_hall_effect_hg", "brnn_hall_effect_hg");
		this.effectIcon.play(-1);
		this.effectIcon.x = 400; 
		this.effectIcon.y = 205;
		this.effectIcon.frameRate = 20; 
		this.addChild(this.effectIcon);
		this._coin_label.text = "" + UserInfo.getInstance().goldcoins;
		this._btn_cjc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
	}

	private onEnterGame():void
	{
		if(!this.gameIconData)
		{ 
           return;
		}
		let gameData:gameData = UserInfo.getInstance().getGameDataByindex(this.gameIconData.game);
        let typeData:typeData = gameData.getTypeDataByindex(this.gameIconData.type);
        let playway:playWayData = typeData.getPlayWayByindex(Const.PLAYWAY_CHUJICHANG);
        let senddata:any = {
			userid:UserInfo.getInstance().uid,
        token:UserInfo.getInstance().token,playway:playway.id};
		 xlLib.WebSocketMgr.getInstance().send(EventConst.joinroom,senddata,(data)=>{
                    xlLib.SceneMgr.instance.changeScene(BRNNScene);
                    xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
        },this);
	}

	 public setGameIconData(gameIconData:GameIconData):void
    {
        this.gameIconData = gameIconData;
    }

	public dispose(): void {
        xlLib.PopUpMgr.removePopUp(this, 1);
    }

    public destroy(): void {
        this.gameIconData = null;
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
    }
	
}