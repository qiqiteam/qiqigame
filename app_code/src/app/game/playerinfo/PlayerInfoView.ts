/**
 * 用户信息
 */
class PlayerInfoView extends eui.Component {

	public bgImg: eui.Image;
	public group_index: eui.Group;
	public btn_Info: eui.Button;
	public btn_wallet: eui.Button;
	public btn_mypack: eui.Button;
	public group_Info: eui.Group;
	public btn_myhead: eui.Button;
	public btn_vip: eui.Button;
	public btn_boy: eui.Button;
	public btn_girl: eui.Button;
	public ID: eui.Label;
	public Num_txt: eui.Label;
	public phonenum: eui.Label;
	public btn_copyID: eui.Button;
	public btn_xiugai_name: eui.Button;
	public btn_bind_number: eui.Button;
	public group_wallet: eui.Group;
	public CarryMoney: eui.Label;
	public safebox: eui.Label;
	public Alipay: eui.Label;
	public bankcard: eui.Label;
	public money_num: eui.Label;
	public safebox_num: eui.Label;
	public zfb_num: eui.Label;
	public card_num: eui.Label;
	public btn_Pay: eui.Button;
	public btn_manage: eui.Button;
	public btn_bindzfb: eui.Button;
	public btn_bindcard: eui.Button;
	public group_pack: eui.Group;
	public group_bind_number: eui.Group;
	public Input_phone_num: eui.TextInput;
	public Input_autu_code: eui.TextInput;
	public btn_code: eui.Button;
	public btn_enter: eui.Button;
	public group_Vip: eui.Group;
	public btn_LiKeCZ: eui.Button;
	public group_chang_head: eui.Group;
	public btn_return: eui.Button;






	public constructor() {
		super();
		this.skinName = "PlayerInfoViewSkin";
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickRetuBtn, this);
		this.btn_bind_number.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBindPhoneNum, this);
		this.btn_myhead.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickMyHead, this);
		this.btn_Info.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickInfoBtn, this);
		this.btn_wallet.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickMyWalletBtn, this);
		this.btn_mypack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickMyPackBtn, this);
		this.btn_vip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickVipBtn, this);
		this.btn_boy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBoyBtn, this);
		this.btn_girl.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickGirlBtn, this);

	}


	//点击返回按钮
	private OnClickRetuBtn(e: egret.TouchEvent): void {
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
		xlLib.PopUpMgr.removePopUp(PlayerInfoView, 1);
	}


	//点击基本资料
	private OnClickInfoBtn(e: egret.TouchEvent): void {
		this._MinBtnHid();
		this.group_Info.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//点击我的钱包
	private OnClickMyWalletBtn(e: egret.TouchEvent): void {
		this._MinBtnHid();
		this.group_wallet.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//点击我的背包
	private OnClickMyPackBtn(e: egret.TouchEvent): void {
		this._MinBtnHid();
		this.group_pack.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//点击更换图像
	private OnClickMyHead(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this.group_chang_head.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//点击VIp
	private OnClickVipBtn(e: egret.TouchEvent): void {
		this._MaxBtnHid();
        this.group_Vip.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//选择性别
	private OnClickBoyBtn(e: egret.TouchEvent): void {
		this.btn_girl.currentState = "down";
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//选择性别
	private OnClickGirlBtn(e: egret.TouchEvent): void {
		this.btn_boy.currentState = "down";
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//点击绑定手机按钮
	private OnClickBindPhoneNum(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this.group_bind_number.visible = true;
		this.group_index.visible = false;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");

	}

	private _MaxBtnHid() {
		this.group_index.visible = false;
		this.group_bind_number.visible = false;
		this.group_chang_head.visible = false;
		this.group_Vip.visible = false;
	}

	private _MinBtnHid() {
		this.group_Info.visible = false;
		this.group_wallet.visible = false;
		this.group_pack.visible = false;

		this.group_bind_number.visible = false;
		this.group_chang_head.visible = false;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
	}
	public destroy() {
		this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickRetuBtn, this);
		this.btn_bind_number.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBindPhoneNum, this);
		this.btn_myhead.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickMyHead, this);
		this.btn_Info.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickInfoBtn, this);
		this.btn_wallet.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickMyWalletBtn, this);
		this.btn_mypack.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickMyPackBtn, this);
		this.btn_vip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickVipBtn, this);
		this.btn_boy.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBoyBtn, this);
		this.btn_girl.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickGirlBtn, this);

	}
}