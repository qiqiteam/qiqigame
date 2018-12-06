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
 * 大厅界面
 * */
var LobbyView = (function (_super) {
    __extends(LobbyView, _super);
    function LobbyView() {
        var _this = _super.call(this) || this;
        _this.skinName = "LobbyViewSkin";
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchHandler, _this);
        EventUtil.addEventListener(EventConst.ON_SOCKET_CLOSE, _this.onSocketClose, _this);
        _this._set.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._service.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._information.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._playerinfo.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._generalize.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._safebox.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._welfare.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._shoppingmall.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        _this._topup.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick2, _this);
        return _this;
    }
    LobbyView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this._head_label.text = UserInfo.getInstance().username;
        this._coin_label.text = GlobalFunction.Formatconversion(UserInfo.getInstance().goldcoins);
        this.initGameIconList();
    };
    LobbyView.prototype.initGameIconList = function () {
        var allgameList = [
            new GameIconData().initData({ name: "通比牛牛", url: "tbnn_game_870_bg", ishot: true, isOpen: true, game: Const.GAME_NIUNIU, type: Const.TYPE_TBNN }),
            new GameIconData().initData({ name: "炸金花", url: "zjh_game_230_bg", ishot: true, isOpen: false, game: Const.GAME_ZHAJINHUA, type: Const.TYPE_JINGDIANJINHUA }),
            new GameIconData().initData({ name: "百家乐", url: "bjl_game_18_bg", ishot: true, isOpen: false, game: Const.GAME_BAIJIALE, type: Const.TYPE_JINGDIANBAIJIALE }),
            new GameIconData().initData({ name: "二八杠", url: "ebg_game_720_bg", ishot: true, isOpen: false, game: Const.GAME_ERBAGANG, type: Const.TYPE_ERBAGANGJINDIAN }),
            new GameIconData().initData({ name: "百人牛牛", url: "brnn_game_930_bg", ishot: true, isOpen: false, game: Const.GAME_NIUNIU, type: Const.TYPE_QRNIUNIU })
        ];
        this.gameIconDataList = allgameList;
        this.gamelistView = new GameIconListView();
        this.gamelistView.x = 322;
        this.gamelistView.y = 153;
        this.gamelistView.setData(this.gameIconDataList);
        this.addChild(this.gamelistView);
        this.qznnGameIconData = new GameIconData().initData({ name: "抢庄牛牛", url: "qznn_game_830_bg", ishot: true, isOpen: true, game: Const.GAME_NIUNIU, type: Const.TYPE_QZNN });
        this.qznnGameIcon = new QznnIconItem();
        this.qznnGameIcon.x = 42;
        this.qznnGameIcon.y = 158;
        this.qznnGameIcon.setGameIconData(this.qznnGameIconData);
        this.addChild(this.qznnGameIcon);
    };
    LobbyView.prototype.onClick2 = function (e) {
        this.playClickSound();
        if (e.target == this._set) {
            console.log("_set");
            xlLib.PopUpMgr.addPopUp(SetView, null, true, true, null, 1);
        }
        else if (e.target == this._playerinfo) {
            console.log("_playerinfo");
            xlLib.PopUpMgr.addPopUp(PlayerInfoView, null, true, true, null, 1);
        }
        else if (e.target == this._service) {
            console.log("_service");
            xlLib.TipsUtils.showFloatWordTips("敬请期待！");
        }
        else if (e.target == this._information) {
            console.log("_information");
            xlLib.PopUpMgr.addPopUp(SystemMsgView, null, true, true, null, 1);
        }
        else if (e.target == this._generalize) {
            console.log("_generalize");
        }
        else if (e.target == this._safebox) {
            console.log("_safebox");
            xlLib.PopUpMgr.addPopUp(SafeBoxView, null, true, true, null, 1);
        }
        else if (e.target == this._welfare) {
            console.log("_welfare");
            xlLib.PopUpMgr.addPopUp(WelfareView, null, true, true, null, 1);
        }
        else if (e.target == this._shoppingmall) {
            console.log("_shoppingmall");
        }
        else if (e.target == this._topup) {
            console.log("_topup");
            xlLib.PopUpMgr.addPopUp(RechargeView, null, true, true, null, 1);
        }
    };
    LobbyView.prototype.onTouchHandler = function (evt) {
    };
    /**添加适配处理*/
    LobbyView.prototype.resize = function () {
        if (this.bgImg) {
            this.bgImg.width = xlLib.Global.screenWidth;
            this.bgImg.height = xlLib.Global.screenHeight;
        }
    };
    LobbyView.prototype.onSocketClose = function (data) {
    };
    LobbyView.prototype.onNotify = function (data) {
    };
    LobbyView.prototype.destroy = function () {
        EventUtil.removeEventListener(EventConst.ON_SOCKET_CLOSE, this.onSocketClose, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
        egret.Tween.removeTweens(this);
    };
    LobbyView.prototype.playClickSound = function () {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    return LobbyView;
}(eui.Component));
__reflect(LobbyView.prototype, "LobbyView");
//# sourceMappingURL=LobbyView.js.map