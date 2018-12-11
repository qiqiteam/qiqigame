/**帮助玩法面板 */
class ZJHHelpPanl extends eui.Component{
    public _btn_help_close: eui.Button;
    public _tabbar_help: eui.TabBar;
    public _vk_help: eui.ViewStack;
    public grp_paixing0: eui.Group;
    public grp_wanfa0: eui.Group;
    public grp_odds0: eui.Group;
    public grp_aboutus0: eui.Group;

    constructor() {
        super();
        this.skinName = "ZJHHelpPanlSkin";
    }

    public childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);

       let dataArr: any[] = [{ name: "牌型", down_url: "gf_px3_png", up_url: "gf_px3_png" },
        { name: "玩法", down_url: "gf_px3_png", up_url: "gf_px3_png" },
        { name: "赔率", down_url: "gf_px3_png", up_url: "gf_px3_png" },
        { name: "关于我们", down_url: "gf_px3_png", up_url: "gf_px3_png" }];
        this._tabbar_help.dataProvider = new eui.ArrayCollection(dataArr);
        this._tabbar_help.useVirtualLayout = true;
        this._tabbar_help.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);

        this._btn_help_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    }
    private onBarItemTap(e: eui.ItemTapEvent): void {
        this._vk_help.selectedIndex = e.itemIndex;
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    }
    public onclosepanl(): void {
        xlLib.PopUpMgr.removePopUp(ZJHHelpPanl, 1);
        console.log("移除面板");

    }
    protected dataChanged(): void {

    }
    public destroy(): void {
        this._tabbar_help.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this._btn_help_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclosepanl, this);
    }
}