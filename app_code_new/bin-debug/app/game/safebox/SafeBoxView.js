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
 * 保险库
 */
var SafeBoxView = (function (_super) {
    __extends(SafeBoxView, _super);
    function SafeBoxView() {
        var _this = _super.call(this) || this;
        _this.skinName = "SafeBoxViewSkin";
        return _this;
    }
    SafeBoxView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);
        var dataArr = [{ name: "存入", down_url: "deposit_down_btn_png", up_url: "deposit_up_btn_png" },
            { name: "取出", down_url: "out_down_btn_png", up_url: "out_up_btn_png" },
            { name: "自动存入", down_url: "autodeposit_down_btn_png", up_url: "autodeposit_up_btn_png" }];
        this._safebox_meun.dataProvider = new eui.ArrayCollection(dataArr);
        this._safebox_meun.useVirtualLayout = true;
        this._safebox_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this.toggle = new EToggleSwitch(this, "ts_off_bg_png", "ts_on_bg_png", "toggleswitch_btn_png");
        this.toggle.x = 350;
        this.toggle.y = 65;
        this.group_autodeposit.addChild(this.toggle);
        this.toggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnToggleSwitch, this);
    };
    SafeBoxView.prototype.onBarItemTap = function (e) {
        this._viewstack_safebox.selectedIndex = e.itemIndex;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    //toggleswitch事件绑定
    SafeBoxView.prototype.OnToggleSwitch = function (e) {
        if (this.toggle.getSelected()) {
            console.log("关闭");
        }
        else {
            console.log("打开");
        }
    };
    //点击返回按钮
    SafeBoxView.prototype.OnClickCloBtn = function (e) {
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
        xlLib.PopUpMgr.removePopUp(SafeBoxView, 1);
    };
    SafeBoxView.prototype._MaxBtnHid = function () {
        this.group_deposit.visible = false;
        this.group_out.visible = false;
        this.group_autodeposit.visible = false;
    };
    SafeBoxView.prototype._MinBtnHid = function () {
    };
    /*public setProgress(loaded: number, total: number, desc?: string, resourceName?: string, force: boolean=false): void {
        if (total && total !=0)
        {
            var widthX: number = Math.floor(598 * (loaded / total));
            this.des_pr_bg.width = widthX;
            this.out_pr_bar.mask = this.des_pr_bg;
            //this.pro_img.x = this.load_rec.width + this.load_img.x - this.pro_img.width/2;
        }
    }*/
    SafeBoxView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SafeBoxView.prototype.destroy = function () {
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickCloBtn, this);
    };
    return SafeBoxView;
}(eui.Component));
__reflect(SafeBoxView.prototype, "SafeBoxView");
//# sourceMappingURL=SafeBoxView.js.map