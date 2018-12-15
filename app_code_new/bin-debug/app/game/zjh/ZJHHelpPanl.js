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
/**帮助玩法面板 */
var ZJHHelpPanl = (function (_super) {
    __extends(ZJHHelpPanl, _super);
    function ZJHHelpPanl() {
        var _this = _super.call(this) || this;
        _this.skinName = "ZJHHelpPanlSkin";
        return _this;
    }
    ZJHHelpPanl.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        var dataArr = [{ name: "牌型", down_url: "gf_px3_png", up_url: "gf_px3_png" },
            { name: "玩法", down_url: "gf_px3_png", up_url: "gf_px3_png" },
            { name: "赔率", down_url: "gf_px3_png", up_url: "gf_px3_png" },
            { name: "关于我们", down_url: "gf_px3_png", up_url: "gf_px3_png" }];
        this._tabbar_help.dataProvider = new eui.ArrayCollection(dataArr);
        this._tabbar_help.useVirtualLayout = true;
        this._tabbar_help.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this._btn_help_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this.rect_bg2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    };
    ZJHHelpPanl.prototype.onBarItemTap = function (e) {
        this._vk_help.selectedIndex = e.itemIndex;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    ZJHHelpPanl.prototype.onclosepanl = function () {
        xlLib.PopUpMgr.removePopUp(ZJHHelpPanl, 1);
        console.log("移除面板");
    };
    ZJHHelpPanl.prototype.dataChanged = function () {
    };
    ZJHHelpPanl.prototype.destroy = function () {
        this._tabbar_help.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this._btn_help_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
        this.rect_bg2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    };
    return ZJHHelpPanl;
}(eui.Component));
__reflect(ZJHHelpPanl.prototype, "ZJHHelpPanl");
//# sourceMappingURL=ZJHHelpPanl.js.map