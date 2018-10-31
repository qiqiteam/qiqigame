/**
 * 大厅界面
 * */
class LobbyView extends eui.Component {

	public bgImg:eui.Image;
	public _set:eui.Button;
	public _service:eui.Button;
	public _information:eui.Button;
	public _generalize:eui.Button;
	public _safebox:eui.Button;
	public _challenge:eui.Button;
	public _welfare:eui.Button;
	public _shoppingmall:eui.Button;
	public _topup:eui.Button;
	public _btn_wanfa:eui.Image;
	public _btn_pk:eui.Image;
	public _btn_mahjong:eui.Image;
	public _btn_game:eui.Image;
	public _dis_wanfa:eui.Group;
	public _dis_pk:eui.Group;
	public _dis_mahjong:eui.Group;
	public _dis_game:eui.Group;
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
		//this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		//EventUtil.addEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);

		this._btn_wanfa.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnWanfa, this);
		this._btn_pk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnPk, this);
		this._btn_mahjong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnMahjong, this);
		this._btn_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnGame, this);
	}

	protected childrenCreated() {
		super.childrenCreated();

		this.createGameBtn();
	}

	private createGameBtn(): void {
        var arr_wanfa = ["btn_niuniu_png", "btn_jinhua_png", "btn_baijiale_png"];
		var arr_pk = ["btn_niuniu_png", "btn_jinhua_png", "btn_baijiale_png"];
		var arr_mahjong = ["btn_28_png", "btn_28_png", "btn_28_png"];
		var arr_game = ["btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png", "btn_jinhua_png"];
		var yy = 10;
		
        for (var i = 0; i < arr_wanfa.length; i++) {
            //var btn = new eui.Image(GlobalData.cdnResUrl + "resource/assets/noload/" + arr[i] + ".png");
            var btn = new eui.Image(arr_wanfa[i]);
            this._wanfa_btn_area.addChild(btn);
            let num = i % 3;
			btn.x = 70 + num*340;
			if (num == 0 && i != 0) {
                yy = 265;
            }
			btn.y = yy;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            //EventManage.addEvent(this, btn, egret.TouchEvent.TOUCH_TAP, this.onTouchEend.bind(this, arr[i]));
        }
		for (var i = 0; i < arr_pk.length; i++) {
            //var btn = new eui.Image(GlobalData.cdnResUrl + "resource/assets/noload/" + arr[i] + ".png");
            var btn = new eui.Image(arr_pk[i]);
            this._pk_btn_area.addChild(btn);
            let num = i % 3;
			btn.x = 70 + num*340;
			if (num == 0 && i != 0) {
                yy = 265;
            }
			btn.y = yy;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            //EventManage.addEvent(this, btn, egret.TouchEvent.TOUCH_TAP, this.onTouchEend.bind(this, arr[i]));
        }
		for (var i = 0; i < arr_mahjong.length; i++) {
            //var btn = new eui.Image(GlobalData.cdnResUrl + "resource/assets/noload/" + arr[i] + ".png");
            var btn = new eui.Image(arr_mahjong[i]);
            this._mahjong_btn_area.addChild(btn);
            let num = i % 3;
			btn.x = 70 + num*340;
			if (num == 0 && i != 0) {
                yy = 265;
            }
			btn.y = yy;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            //EventManage.addEvent(this, btn, egret.TouchEvent.TOUCH_TAP, this.onTouchEend.bind(this, arr[i]));
        }
		
		for (var i = 0; i < arr_game.length; i++) {
            //var btn = new eui.Image(GlobalData.cdnResUrl + "resource/assets/noload/" + arr[i] + ".png");
            var btn = new eui.Image(arr_game[i]);
            this._game_btn_area.addChild(btn);

			let num = i % 3;
			btn.x = 70 + num*340;
			if (num == 0 && i != 0) {
                yy = 265;
            }
			btn.y = yy;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            //EventManage.addEvent(this, btn, egret.TouchEvent.TOUCH_TAP, this.onTouchEend.bind(this, arr[i]));
        }
    }

	private onClick(e:egret.TouchEvent):void {
		//EffectUtils.playEffect(e.target,2);
		EffectUtils.playButtonEffect(e.target,null);
	}

	private onBtnWanfa(e:egret.TouchEvent):void {
		this._btnHide();
		this._dis_wanfa.visible = true;
		this._group_wanfa.visible = true;
	}

	private onBtnPk(e:egret.TouchEvent):void {
		this._btnHide();
		this._dis_pk.visible = true;
		this._group_pk.visible = true;
	}

	private onBtnMahjong(e:egret.TouchEvent):void {
		this._btnHide();
		this._dis_mahjong.visible = true;
		this._group_mahjong.visible = true;
	}

	private onBtnGame(e:egret.TouchEvent):void {
		this._btnHide();
		this._dis_game.visible = true;
		this._group_game.visible = true;
	}

	private _btnHide() {
		this._dis_wanfa.visible = false;
		this._dis_pk.visible = false;
		this._dis_mahjong.visible = false;
		this._dis_game.visible = false;
		this._group_wanfa.visible = false;
		this._group_pk.visible = false;
		this._group_mahjong.visible = false;
		this._group_game.visible = false;
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
}
