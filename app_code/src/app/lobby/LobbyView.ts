/**
 * 大厅界面
 * */
class LobbyView extends eui.Component {
	public bgImg:eui.Image;
	public _set:eui.Button;
	public _service:eui.Button;
	public _information:eui.Button;
	public _playerinfo:eui.Button;
	public _head_label:eui.Label;
	public _coin_label:eui.Label;
	public _generalize:eui.Button;
	public _safebox:eui.Button;
	public _challenge:eui.Button;
	public _welfare:eui.Button;
	public _shoppingmall:eui.Button;
	public _topup:eui.Button;
	public menu_bar:eui.TabBar;
	public viewlist:eui.ViewStack;
	public _group_wanfa:eui.Group;
	public _wanfa_btn_area:eui.Group;
	public _group_pk:eui.Group;
	public _pk_btn_area:eui.Group;
	public _group_mahjong:eui.Group;
	public _mahjong_btn_area:eui.Group;
	public _group_game:eui.Group;
	public _game_btn_area:eui.Group;


	constructor() {
		super();
		this.skinName = "LobbyViewSkin";
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		EventUtil.addEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);
		this._set.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._service.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._information.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._playerinfo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);

		this._generalize.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._safebox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._challenge.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._welfare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._shoppingmall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
		this._topup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick2, this);
	}

	protected childrenCreated() {
		super.childrenCreated();
		let dataArr:any[] = [{name:"热门玩法",down_url:"Font_dating_remenwanfa1_png",up_url:"Font_dating_remenwanfa_png"},
		{name:"扑克类",down_url:"Font_dating_pukelei1_png",up_url:"Font_dating_pukelei_png"},
		{name:"麻将类",down_url:"Font_dating_majianglei1_png",up_url:"Font_dating_majianglei_png"},
		{name:"游戏类",down_url:"Font_dating_youxilei1_png",up_url:"Font_dating_youxilei_png"}];
		this.menu_bar.dataProvider = new eui.ArrayCollection(dataArr);
		this.menu_bar.useVirtualLayout = true;
		this.menu_bar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
		this.createGameBtn();
	}

	private onBarItemTap(e: eui.ItemTapEvent): void {
		this.viewlist.selectedIndex = e.itemIndex;
    }

	private createGameBtn(): void {
        var arr_wanfa = ["btn_niuniu_png", "btn_jinhua_png", "btn_baijiale_png"];
		var arr_pk = ["btn_niuniu_png", "btn_jinhua_png", "btn_baijiale_png"];
		var arr_mahjong = ["btn_28_png", "btn_28_png", "btn_28_png"];
		var arr_game = ["btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png"];
		var yy = 10;
		
        for (var i = 0; i < arr_wanfa.length; i++) {
            var btn = new eui.Image(arr_wanfa[i]);
            this._wanfa_btn_area.addChild(btn);
            let num = i % 3;
			btn.x = 70 + num*340;
			if (num == 0 && i != 0) {
                yy = 265;
            }
			btn.y = yy;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
		for (var i = 0; i < arr_pk.length; i++) {
            var btn = new eui.Image(arr_pk[i]);
            this._pk_btn_area.addChild(btn);
            let num = i % 3;
			btn.x = 70 + num*340;
			if (num == 0 && i != 0) {
                yy = 265;
            }
			btn.y = yy;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
		for (var i = 0; i < arr_mahjong.length; i++) {
            var btn = new eui.Image(arr_mahjong[i]);
            this._mahjong_btn_area.addChild(btn);
            let num = i % 3;
			btn.x = 70 + num*340;
			if (num == 0 && i != 0) {
                yy = 265;
            }
			btn.y = yy;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
		
		for (var i = 0; i < arr_game.length; i++) {
            var btn = new eui.Image(arr_game[i]);
            this._game_btn_area.addChild(btn);
			let num = i % 3;
			btn.x = 70 + num*340;
			if (num == 0 && i != 0) {
                yy = 265;
            }
			btn.y = yy;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
		this._head_label.text = UserInfo.getInstance().username;
		this._coin_label.text = ""+UserInfo.getInstance().goldcoins;
    }

	private onClick(e:egret.TouchEvent):void {
		EffectUtils.playButtonEffect(e.target,null);
		this.playClickSound();

        let senddata:any = {
			userid:UserInfo.getInstance().uid,
			token:UserInfo.getInstance().token,playway:UserInfo.getInstance().gamelist[0].types[0].playways[0].id};
		xlLib.WebSocketMgr.getInstance().send(WebSockeAddress.joinroom,senddata,(data)=>{
				 xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
			},this);


		xlLib.WebSocketMgr.getInstance().registerMsgHandler(WebSockeAddress.hog,()=>{
			
		});
		// let senddata:any = {
		// 	userid:UserInfo.getInstance().uid,
		// 	token:UserInfo.getInstance().token,playway:UserInfo.getInstance().gamelist[0].types[0].playways[0].id};
		// xlLib.WebSocketMgr.getInstance().send(WebSockeAddress.niuniu_start,senddata,(data)=>{
		// 		 xlLib.TipsUtils.showFloatWordTips("加入房间成功！");
		// 	},this);
	}

	private onClick2(e:egret.TouchEvent):void {
		this.playClickSound();
		if(e.target == this._set) {
			console.log("_set");
			xlLib.PopUpMgr.addPopUp(SetView, null, true, true, null ,1);
		} else if(e.target == this._playerinfo) {
			console.log("_playerinfo");
			xlLib.PopUpMgr.addPopUp(PlayerInfoView, null, true, true, null ,1);
		} else if(e.target == this._service) {
			console.log("_service");
		} else if(e.target == this._information) {
			console.log("_information");
			xlLib.PopUpMgr.addPopUp(SystemMsgView, null, true, true, null ,1);
		} else if(e.target == this._generalize) {
			console.log("_generalize");
		} else if(e.target == this._safebox) {
			console.log("_safebox");
			xlLib.PopUpMgr.addPopUp(SafeBoxView, null, true, true, null ,1);
		} else if(e.target == this._challenge) {
			console.log("_challenge");
		} else if(e.target == this._welfare) {
			console.log("_welfare");
			xlLib.PopUpMgr.addPopUp(WelfareView, null, true, true, null ,1);
		} else if(e.target == this._shoppingmall) {
			console.log("_shoppingmall");
		} else if(e.target == this._topup) {
			console.log("_topup");
			xlLib.PopUpMgr.addPopUp(RechargeView, null, true, true, null ,1);
		}
	}

	private _btnHide() {
		this._group_wanfa.visible = false;
		this._group_pk.visible = false;
		this._group_mahjong.visible = false;
		this._group_game.visible = false;
		this.playClickSound();
	}

	private onTouchHandler(evt: egret.Event): void {
	}

	/**添加适配处理*/
	public resize(): void {
		if (this.bgImg) {
			this.bgImg.width = xlLib.Global.screenWidth;
			this.bgImg.height = xlLib.Global.screenHeight;
		}
	}

	private onSocketClose(data: any): void {
		
	}

	private onNotify(data: any): void {
		
	}

	
	public destroy() {
		EventUtil.removeEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		egret.Tween.removeTweens(this);
	}

	public playClickSound() {
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
}
