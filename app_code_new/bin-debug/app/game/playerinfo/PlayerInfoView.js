var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 用户信息
 */
var PlayerInfoView = (function (_super) {
    __extends(PlayerInfoView, _super);
    function PlayerInfoView() {
        var _this = _super.call(this) || this;
        _this.skinName = "PlayerInfoViewSkin";
        return _this;
    }
    PlayerInfoView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
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
        this.btn_xiugai_name.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnclickCangeName, this);
        var dataArr = [{ name: "基本资料", down_url: "btn_info_down_png", up_url: "btn_info_up_png" },
            { name: "我的钱包", down_url: "btn_mywallet_down_png", up_url: "btn_mywallet_up_png" },
            { name: "我的背包", down_url: "btn_pack_down_png", up_url: "btn_pack_up_png" }];
        this._playerInfo_meun.dataProvider = new eui.ArrayCollection(dataArr);
        this._playerInfo_meun.useVirtualLayout = true;
        this._playerInfo_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
    };
    PlayerInfoView.prototype.onBarItemTap = function (e) {
        this._viewstack_viewInerface.selectedIndex = e.itemIndex;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //点击返回按钮
    PlayerInfoView.prototype.OnClickRetuBtn = function (e) {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.PopUpMgr.removePopUp(PlayerInfoView, 1);
    };
    //点击更换图像
    PlayerInfoView.prototype.OnClickMyHead = function (e) {
        this._MaxBtnHid();
        this._MinBtnHid();
        this.group_chang_head.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //点击VIp
    PlayerInfoView.prototype.OnClickVipBtn = function (e) {
        this._MaxBtnHid();
        this._MinBtnHid();
        this.group_Vip.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //选择性别
    PlayerInfoView.prototype.OnClickSelectSex = function (e) {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //点击修改name按钮
    PlayerInfoView.prototype.OnclickCangeName = function (e) {
        this._MaxBtnHid();
        this._MinBtnHid();
        this.group_changename.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //点击绑定手机按钮
    PlayerInfoView.prototype.OnClickBindPhoneNum = function (e) {
        this._MaxBtnHid();
        this._MinBtnHid();
        this.group_bind_number.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //点击绑定支付宝按钮 
    PlayerInfoView.prototype.OnClickBindzfbBtn = function (e) {
        this._MaxBtnHid();
        this._MinBtnHid();
        this.group_bindzfb.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //点击绑定银行卡按钮 
    PlayerInfoView.prototype.OnClickBindBanCard = function (e) {
        this._MaxBtnHid();
        this._MinBtnHid();
        this.group_bind_bankCard.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        var xialak = new InfoBox();
        xialak.x = 420;
        xialak.y = 410;
        var infolist = [new InfoBoxData({ id: 1, name: "建设银行", data: null }), new InfoBoxData({ id: 2, name: "招商银行", data: null }),
            new InfoBoxData({ id: 3, name: "中国银行", data: null }), new InfoBoxData({ id: 4, name: "平安银行", data: null }), new InfoBoxData({ id: 5, name: "工商银行", data: null }),
            new InfoBoxData({ id: 6, name: "农业银行", data: null }), new InfoBoxData({ id: 7, name: "渤海银行", data: null }), new InfoBoxData({ id: 8, name: "汉口银行", data: null })
        ];
        xialak.setInfoBoxData(infolist, this.selectIndexFunction, this);
        this.group_bind_bankCard.addChild(xialak);
    };
    PlayerInfoView.prototype.selectIndexFunction = function () {
    };
    //点击更换支付宝按钮 
    PlayerInfoView.prototype.OnClickChangezfb = function (e) {
        this._MaxBtnHid();
        this._MinBtnHid();
        this.group_wxti.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //点击更换银行卡按钮 
    PlayerInfoView.prototype.OnClickChangeBankCard = function (e) {
        this._MaxBtnHid();
        this._MinBtnHid();
        this.group_wxti.visible = true;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //点击温馨提示返回
    PlayerInfoView.prototype.OnClickWxtsRetu = function (e) {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.TipsUtils.showFloatWordTips("温馨提示");
    };
    PlayerInfoView.prototype._MaxBtnHid = function () {
        this.group_Info.visible = false;
        this.group_wallet.visible = false;
        this.group_pack.visible = false;
        this.group_bind_number.visible = false;
        this.group_chang_head.visible = false;
        this.group_Vip.visible = false;
        this.group_bindzfb.visible = false;
        this.group_bind_bankCard.visible = false;
        this.group_changename.visible = false;
    };
    PlayerInfoView.prototype._MinBtnHid = function () {
        this.group_tittle.visible = false;
        this.group_rechang_btn.visible = false;
    };
    PlayerInfoView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlayerInfoView.prototype.destroy = function () {
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
        this.btn_xiugai_name.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnclickCangeName, this);
    };
    return PlayerInfoView;
}(eui.Component));
__reflect(PlayerInfoView.prototype, "PlayerInfoView");
//# sourceMappingURL=PlayerInfoView.js.map