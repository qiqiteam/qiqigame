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
var SetView = (function (_super) {
    __extends(SetView, _super);
    function SetView() {
        var _this = _super.call(this) || this;
        _this.skinName = "SetViewSkin";
        return _this;
    }
    SetView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var dataArr = [{ name: "游戏设置", down_url: "btn_settings_1_png", up_url: "btn_settings_0_png" },
            { name: "新手教程", down_url: "btn_xsjc_1_png", up_url: "btn_xsjc_0_png" },
            { name: "账号管理", down_url: "btn_accountmanagement_1_png", up_url: "btn_accountmanagement_0_png" },
            { name: "意见反馈", down_url: "btn_yjfk_1_png", up_url: "btn_yjfk_0_png" }];
        this._Set_meun.dataProvider = new eui.ArrayCollection(dataArr);
        this._Set_meun.useVirtualLayout = true;
        this._Set_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
        this.toggleSwitch0 = new EToggleSwitch(this, "switchOff_png", "switchOn_png", "switchBar_png", this.toggleCallback);
        this.toggleSwitch0.setBindData("toggleSwitch0");
        this.toggleSwitch0.x = 285;
        this.toggleSwitch0.y = 75;
        this.toggleSwitch1 = new EToggleSwitch(this, "switchOff_png", "switchOn_png", "switchBar_png", this.toggleCallback);
        this.toggleSwitch1.setBindData("toggleSwitch1");
        this.toggleSwitch1.x = 736;
        this.toggleSwitch1.y = 75;
        this.toggleSwitch2 = new EToggleSwitch(this, "switchOff_png", "switchOn_png", "switchBar_png", this.toggleCallback);
        this.toggleSwitch2.setBindData("toggleSwitch2");
        this.toggleSwitch2.x = 285;
        this.toggleSwitch2.y = 245;
        this.txt0 = new eui.Label();
        this.txt0.text = "开";
        this.txt0.x = 360;
        this.txt0.y = 85;
        this.txt0.touchEnabled = false;
        this.txt1 = new eui.Label();
        this.txt1.text = "开";
        this.txt1.x = 811;
        this.txt1.y = 85;
        this.txt1.touchEnabled = false;
        this.txt2 = new eui.Label();
        this.txt2.text = "开";
        this.txt2.x = 360;
        this.txt2.y = 255;
        this.txt2.touchEnabled = false;
        this.btn_yxsz_1.addChild(this.toggleSwitch0);
        this.btn_yxsz_1.addChild(this.toggleSwitch1);
        this.btn_yxsz_1.addChild(this.toggleSwitch2);
        this.btn_yxsz_1.addChild(this.txt0);
        this.btn_yxsz_1.addChild(this.txt1);
        this.btn_yxsz_1.addChild(this.txt2);
    };
    SetView.prototype.toggleCallback = function (datastr) {
        if (datastr == "toggleSwitch0") {
            if (this.toggleSwitch0.getSelected()) {
                this.txt0.text = "关";
                return;
            }
            this.txt0.text = "开";
        }
        else if (datastr == "toggleSwitch1") {
            if (this.toggleSwitch1.getSelected()) {
                this.txt1.text = "关";
                return;
            }
            this.txt1.text = "开";
        }
        else if (datastr == "toggleSwitch2") {
            if (this.toggleSwitch2.getSelected()) {
                this.txt2.text = "关";
                return;
            }
            this.txt2.text = "开";
        }
    };
    SetView.prototype.onBarItemTap = function (e) {
        this._viewlist_set.selectedIndex = e.itemIndex;
    };
    SetView.prototype.onClick1 = function (e) {
        xlLib.PopUpMgr.removePopUp(SetView, 1);
    };
    SetView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SetView.prototype.destroy = function () {
        this._Set_meun.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this.btn_return.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick1, this);
    };
    return SetView;
}(eui.Component));
__reflect(SetView.prototype, "SetView");
//# sourceMappingURL=SetView.js.map