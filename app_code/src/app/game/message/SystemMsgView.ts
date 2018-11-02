/**
 * 系统消息
 */
class SystemMsgView extends eui.Component {

    public _btn_close:eui.Button;
    public _btn_notice:eui.Button;
    public _btn_push:eui.Button;
    public _group_msg:eui.Group;
    public _btn_delete:eui.Button;
    public _btn_select_all:eui.Button;
    private _ver_checkBox:eui.CheckBox[];
    private _arr_msg:string[];


    private arr_msg_1:string[];
    private arr_msg_2:string[];

    constructor() {
        super();
        this.skinName = "SystemMsgViewSkin";
    }

    public childrenCreated() {
        super.childrenCreated();
        this._btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dispose, this);
        this._btn_notice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchMode, this);
        this._btn_push.addEventListener(egret.TouchEvent.TOUCH_TAP, this.switchMode, this);
        this._btn_select_all.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectAll, this);
        this._btn_delete.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDelete, this);

        this.arr_msg_1 = ["菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧", 
                       "菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧，菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧", 
                       "菲斯塔中控台呈现“中间饱满，两边锋利”的造型，相比原先车型软绵绵的风格，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧，最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧"];
        this.arr_msg_2 = ["最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧", 
                       "菲斯塔中控台呈现“中间饱满，两边锋利”的造型，不要硬朗太多。最为显眼就是正中央的10.25英寸中控彩色大屏，辨识度很高。但传统的物理按键都偏向了驾驶一侧", 
                       "菲斯塔中控台呈现“中间饱满，两边锋利”的造型"];
        this._arr_msg = this.arr_msg_1;
        this.onAcceptMessage();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    }

    public switchMode(event:egret.TouchEvent):void {
        if(event.target == this._btn_notice) {
            this._arr_msg = this.arr_msg_1;
            this.onAcceptMessage();
        } else {
            this._arr_msg = this.arr_msg_2;
            this.onAcceptMessage();
        }
    }

    public onAcceptMessage():void {
        this._ver_checkBox = [];
        this._group_msg.removeChildren();
        let yy = 10;
        for(let i=0; i<this._arr_msg.length; i++) {
            if(this._arr_msg[i] == null) {
                continue;
            }
            let label:eui.Label = new eui.Label;
            label.text = this._arr_msg[i];
            label.width = 400;
            label.x = 25;
            label.size = 25;
            label.y = label.height*i + 40*i + 10;
            label.y = yy;
            yy = label.y + label.height + 40;
            this._group_msg.addChild(label);
            
            var checkBox:eui.CheckBox = new eui.CheckBox();
            checkBox.skinName = "skins.CheckBoxSkin";
            checkBox.x = 470;
            checkBox.y = label.y + label.height/2 - 15;
            this._group_msg.addChild(checkBox);
            this._ver_checkBox.push(checkBox);
        }
    }
    
    public onSelectAll(): void {
        for(var i=0; i<this._ver_checkBox.length; i++) {
            this._ver_checkBox[i].selected = true;
        }
    }

    public onDelete(): void {
        for(var i=0; i<this._ver_checkBox.length; i++) {
            if(this._ver_checkBox[i].selected == true) {
                //console.log(this._arr_msg[i]);
                 //this._arr_msg.slice(i, i);
                 //console.log(this._arr_msg[i].length);
                 //let aa = new Array();
                 delete this._arr_msg[i];
            }
        }

        //console.log(this._arr_msg.length);
        //console.log(this._arr_msg);
        this.onAcceptMessage();
    }

    public dispose(): void {
        xlLib.PopUpMgr.removePopUp(this, 1);
    }

    public destroy():void {
        this._btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        this._btn_notice.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        this._btn_push.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        this._btn_select_all.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
        this._btn_delete.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.dispose,this);
	}
}