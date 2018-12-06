/**
 * 系统消息
 */
class SystemMsgView extends eui.Component {

    public _btn_close:eui.Button;
    public _tabBar_meun:eui.TabBar;
    public _image_notice:eui.Image;
    public _btn_notice:eui.Image;
    public _image_push:eui.Image;
    public _btn_push:eui.Image;
    public _btn_viewStack:eui.ViewStack;
    public _group_msg_notice:eui.Group;
    public _group_msg_push:eui.Group;
    public _btn_delete:eui.Button;
    public _btn_select_all:eui.Button;


    public _group_msg:eui.Group;
    private _arr_msg:string[];
    private _ver_item:SystemMsgItem[];


    private arr_msg_1:string[];
    private arr_msg_2:string[];

    constructor() {
        super();
        this.skinName = "SystemMsgViewSkin";
        this._group_msg = null;
        this._arr_msg = [];
        this._ver_item = [];
    }

    public childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        //this._image_notice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchMode, this);
        //this._image_push.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchMode, this);
        this._btn_select_all.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectAll, this);
        this._btn_delete.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);

        let dataArr:any[] = [{name:"系统通知",down_url:"btn_notice_0_png",up_url:"btn_notice_1_png"},
		{name:"推送消息",down_url:"btn_push_0_png",up_url:"btn_push_1_png"}];
		this._tabBar_meun.dataProvider = new eui.ArrayCollection(dataArr);
		this._tabBar_meun.useVirtualLayout = true;
		this._tabBar_meun.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);

        this.arr_msg_1 = ["菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧", 
                       "菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧，菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧", 
                       "菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧，最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧"];
        this.arr_msg_2 = ["最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧", 
                       "菲斯塔中控台呈现“中间饱满，两边锋利”的造型，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧", 
                       "菲斯塔中控台呈现“中间饱满，两边锋利”的造型"];
        this._arr_msg = this.arr_msg_1;
        this._group_msg = this._group_msg_notice;
        this.onAcceptMessage();
    }

    private onBarItemTap(e: eui.ItemTapEvent): void {
        
		this._btn_viewStack.selectedIndex = e.itemIndex;
        if(e.itemIndex == 0) {
            this._arr_msg = this.arr_msg_1;
            this._group_msg = this._group_msg_notice;
            this.onAcceptMessage();
        } else {
            this._arr_msg = this.arr_msg_2;
            this._group_msg = this._group_msg_push;
            this.onAcceptMessage();
        }
    }
/*
    public switchMode(event:egret.TouchEvent):void {
        if(event.target == this._image_notice) {
            this._arr_msg = this.arr_msg_1;
            this._btn_notice.visible = true;
            this._btn_push.visible = false;
            this.onAcceptMessage();
        } else {
            this._arr_msg = this.arr_msg_2;
            this._btn_notice.visible = false;
            this._btn_push.visible = true;
            this.onAcceptMessage();
        }
    }
*/
    public onAcceptMessage():void {
        this._ver_item = [];
        this._group_msg.removeChildren();
        let yy = 10;
        for(let i=0; i<this._arr_msg.length; i++) {
            if(this._arr_msg[i] == null) {
                continue;
            }
            let item = new SystemMsgItem;
            item.getMsgContent(this._arr_msg[i]);
            item.x = 0;
            item.y = item.height*i + 40*i + 10;
            item.y = yy;
            yy = item.y + item.height + 40;
            this._group_msg.addChild(item);
            this._ver_item.push(item);
        }
    }
    
    public onSelectAll(): void {
        for(var i=0; i<this._ver_item.length; i++) {
            this._ver_item[i].setSelectedState(true);
        }
    }

    public onDelete(): void {
        var temArray=[];
        for(var i=0; i<this._ver_item.length; i++) {
            if(this._ver_item[i].getSelectedState() == true) {

            } else {
                temArray.push(this._arr_msg[i]);
            }
        }

        this._arr_msg = temArray;
        this.onAcceptMessage();
    }

    public dispose(): void {
        xlLib.PopUpMgr.removePopUp(this, 1);
    }

    public destroy():void {
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        //this._image_notice.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        //this._image_push.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        this._btn_select_all.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        this._btn_delete.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        this._tabBar_meun.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this._group_msg = null;
        this._arr_msg = [];
        this._ver_item = [];
	}
}