/**
 * 福利
 */
class WelfareView extends eui.Component {

    public _btn_close:eui.Button;
    public _tabBar_meun:eui.TabBar;
    public _viewlist:eui.ViewStack;
    public _group_activity:eui.Group;
    public _group_task:eui.Group;
    public _list_reward:eui.Scroller;
    public _reward_area:eui.Group;
    public _group_turntable:eui.Group;
    public _group_sign:eui.Group;

    constructor () {
        super()

        this.skinName = "WelfareViewSkin";
    }

    public childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        //let lottery = new LotteryPanel;
        //lottery.x = 400;
        //lottery.y = 300;
        //this.addChild(lottery);
        let dataArr:any[] = [{name:"精彩活动",down_url:"title_huodong_1_png",up_url:"title_huodong_0_png"},
		{name:"每日任务",down_url:"title_renwu_1_png",up_url:"title_renwu_0_png"},
		{name:"幸运轮盘",down_url:"title_zhuanpan_1_png",up_url:"title_zhuanpan_0_png"},
		{name:"每日签到",down_url:"title_qiandao_1_png",up_url:"title_qiandao_0_png"}];
		this._tabBar_meun.dataProvider = new eui.ArrayCollection(dataArr);
		this._tabBar_meun.useVirtualLayout = true;
		this._tabBar_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);

        this.getTaskList();
    }

    public getTaskList(): void {
        
        let arr = ["1","1","1","1","1","1","1"];
        for (var i = 0; i < arr.length; i++) {
            var task = new AwardItem;
            this._reward_area.addChild(task);
            task.x = 5;
            task.y = 125*i;
			
        }
    }

    private onBarItemTap(e: eui.ItemTapEvent): void {
		this._viewlist.selectedIndex = e.itemIndex;
    }

    public dispose(): void {
        xlLib.PopUpMgr.removePopUp(this, 1);
    }

    public destroy():void {
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        this._tabBar_meun.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
	}

}