/**
 * 单选对话框
 * */
class AlertDialog extends eui.Component
{
	public close_rect:eui.Rect;
	public menu_img:eui.Image;
	public qd_btn:eui.Button;
	public des_txt:eui.Label;


	private cb:Function;
	private thisArg:any;

	constructor()
	{
		super();
		this.skinName = "AlertDialogSkin";
	}

	protected childrenCreated()
	{
		super.childrenCreated();
		this.resize();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	}

	public resize(): void 
	{
       if(this.close_rect)
	   {
			this.close_rect.width = xlLib.Global.screenWidth;
			this.close_rect.height = xlLib.Global.screenHeight;
	   }
	}

	public showAlertDialog(str:string,cb?: Function, thisArg?: any):void
	{
        this.des_txt.text = str;
		this.cb = cb;
        this.thisArg = thisArg;
	}

	private onTouchHandler(evt:egret.Event):void
	{
		if(evt.target == this.qd_btn)
		{
			if(this.cb)
			{
                this.cb.call(this.thisArg);
			}
			xlLib.UIMgr.instance.hideUI(this);
		}
	}

	 public destroy()
	 {
		 this.cb = null;
         this.thisArg = null;
		 this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
	 }
}