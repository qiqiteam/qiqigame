/**
 * 用户信息
 */
class PlayerInfoView extends eui.Component {

	public bgImg: eui.Image;
	public group_tittle: eui.Group;
	public group_rechang_btn: eui.Group;
	public _playerInfo_meun: eui.TabBar;
	public _viewstack_viewInerface: eui.ViewStack;
	public group_Info: eui.Group;
	public btn_myhead: eui.Button;
	public select_sex: eui.CheckBox;
	public btn_vip: eui.Button;
	public ID_txt: eui.EditableText;
	public Num_txt: eui.EditableText;
	public phonenum_txt: eui.EditableText;
	public btn_copyID: eui.Button;
	public btn_xiugai_name: eui.Button;
	public btn_bind_number: eui.Button;
	public group_wallet: eui.Group;
	public money_num: eui.Label;
	public safebox_num: eui.Label;
	public zfb_num: eui.Label;
	public card_num: eui.Label;
	public btn_Pay: eui.Button;
	public btn_manage: eui.Button;
	public btn_bindzfb: eui.Button;
	public btn_changezfb: eui.Button;
	public btn_bindcard: eui.Button;
	public btn_changebancard: eui.Button;
	public group_pack: eui.Group;
	public group_bind_number: eui.Group;
	public Input_phone_num: eui.EditableText;
	public Input_autu_code: eui.EditableText;
	public btn_code: eui.Button;
	public btn_enter: eui.Button;
	public group_Vip: eui.Group;
	public btn_LiKeCZ: eui.Button;
	public group_chang_head: eui.Group;
	public group_bindzfb: eui.Group;
	public input_zfb_account: eui.EditableText;
	public input_smz_name: eui.EditableText;
	public btn_bindZFB_enter: eui.Button;
	public group_bind_bankCard: eui.Group;
	public input_name: eui.EditableText;
	public input_bankCard_num: eui.EditableText;
	public input_Enter_bankCard_num: eui.EditableText;
	public btn_bindZFB_enter0: eui.Button;
	public group_wxti: eui.Group;
	public btn_wxti_enter: eui.Button;
	public btn_wxti_return: eui.Button;
	public group_changename: eui.Group;
	public btn_cn_enter: eui.Button;
	public input_name_: eui.EditableText;
	public btn_return: eui.Button;







	public constructor() {
		super();
		this.skinName = "PlayerInfoViewSkin";

	}

	protected childrenCreated(): void {
		super.childrenCreated();

		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickRetuBtn, this);
		this.btn_bind_number.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBindPhoneNum, this);
		this.btn_myhead.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickMyHead, this);
		this.btn_vip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickVipBtn, this);
		this.btn_bindzfb.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBindzfbBtn, this);
		this.btn_bindcard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBindBanCard, this);
		this.select_sex.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickSelectSex, this);

		this.btn_changezfb.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickChangezfb, this);
		this.btn_changebancard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickChangeBankCard, this);
		this.btn_wxti_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickWxtsRetu, this);
		this.btn_xiugai_name.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnclickCangeName,this);

		let dataArr: any[] = [{ name: "基本资料", down_url: "btn_info_down_png", up_url: "btn_info_up_png" },
		{ name: "我的钱包", down_url: "btn_mywallet_down_png", up_url: "btn_mywallet_up_png" },
		{ name: "我的背包", down_url: "btn_pack_down_png", up_url: "btn_pack_up_png" }];
		this._playerInfo_meun.dataProvider = new eui.ArrayCollection(dataArr);
		this._playerInfo_meun.useVirtualLayout = true;
		this._playerInfo_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
	}

	private onBarItemTap(e: eui.ItemTapEvent): void {
		this._viewstack_viewInerface.selectedIndex = e.itemIndex;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}


	//点击返回按钮
	private OnClickRetuBtn(e: egret.TouchEvent): void {
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
		xlLib.PopUpMgr.removePopUp(PlayerInfoView, 1);
	}


	//点击更换图像
	private OnClickMyHead(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this._MinBtnHid();
		this.group_chang_head.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//点击VIp
	private OnClickVipBtn(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this._MinBtnHid();
		this.group_Vip.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//选择性别
	private OnClickSelectSex(e: egret.TouchEvent): void {
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}

   //点击修改name按钮
	private OnclickCangeName(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this._MinBtnHid();
		this.group_changename.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");

	}
	//点击绑定手机按钮
	private OnClickBindPhoneNum(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this._MinBtnHid();
		this.group_bind_number.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");

		

	}
	//点击绑定支付宝按钮 
	private OnClickBindzfbBtn(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this._MinBtnHid();
		this.group_bindzfb.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//点击绑定银行卡按钮 
	private OnClickBindBanCard(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this._MinBtnHid();
		this.group_bind_bankCard.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");

		let xialak:InfoBox=new InfoBox();
		xialak.x=420;
		xialak.y=410;
		let infolist:Array<InfoBoxData> = [new InfoBoxData({id:1,name:"建设银行",data:null}),new InfoBoxData({id:2,name:"招商银行",data:null}),
		new InfoBoxData({id:3,name:"中国银行",data:null}),new InfoBoxData({id:4,name:"平安银行",data:null}),new InfoBoxData({id:5,name:"工商银行",data:null}),
		new InfoBoxData({id:6,name:"农业银行",data:null}),new InfoBoxData({id:7,name:"渤海银行",data:null}),new InfoBoxData({id:8,name:"汉口银行",data:null})
		];
		xialak.setInfoBoxData(infolist,this.selectIndexFunction,this);
		this.group_bind_bankCard.addChild(xialak);
	}

	private selectIndexFunction():void
	{

	}
	//点击更换支付宝按钮 
	private OnClickChangezfb(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this._MinBtnHid();
		this.group_wxti.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//点击更换银行卡按钮 
	private OnClickChangeBankCard(e: egret.TouchEvent): void {
		this._MaxBtnHid();
		this._MinBtnHid();
		this.group_wxti.visible = true;
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
	}
	//点击温馨提示返回
	private OnClickWxtsRetu(e: egret.TouchEvent): void {
		xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
		xlLib.TipsUtils.showFloatWordTips("温馨提示");
	}

	private _MaxBtnHid() {
		this.group_Info.visible = false;
		this.group_wallet.visible = false;
		this.group_pack.visible = false;

		this.group_bind_number.visible = false;
		this.group_chang_head.visible = false;
		this.group_Vip.visible = false;
		this.group_bindzfb.visible = false;
		this.group_bind_bankCard.visible = false;
		this.group_changename.visible=false;
	}

	private _MinBtnHid() {
		this.group_tittle.visible = false;
		this.group_rechang_btn.visible = false;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	public destroy() {
		this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickRetuBtn, this);
		this.btn_bind_number.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBindPhoneNum, this);
		this.btn_myhead.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickMyHead, this);
		this.btn_vip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickVipBtn, this);
		this.select_sex.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickSelectSex, this);
		this.btn_bindzfb.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBindzfbBtn, this);
		this.btn_bindcard.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickBindBanCard, this);
		this.btn_changezfb.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickChangezfb, this);
		this.btn_changebancard.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickChangeBankCard, this);
		this.btn_wxti_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickWxtsRetu, this);
		this.btn_xiugai_name.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.OnclickCangeName,this);
	}
}