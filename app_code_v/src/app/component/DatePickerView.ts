/** 日期选择界面 */
class DatePickerView  extends  eui.Component
{
	public close_rect:eui.Rect;
	public menu_img:eui.Image;
	public addyear_btn:eui.Button;
	public reyear_btn:eui.Button;
	public remonth_btn:eui.Button;
	public redate_btn:eui.Button;
	public addmonth_btn:eui.Button;
	public adddate_btn:eui.Button;
	public qd_btn:eui.Button;
	public qx_btn:eui.Button;
	public time_txt:eui.Label;
	public year_txt:eui.Label;
	public month_txt:eui.Label;
	public date_txt:eui.Label;

	private currdate:Date;
	private cb:Function;
	private thisArg:any;

	constructor()
	{
		super();
		this.skinName = "DatePickerViewSkin";
		this.initEventListener();            
	}

	public childrenCreated()
	{
		super.childrenCreated();
	    this.resize();
	}

  	public resize(): void 
	{
       if(this.close_rect)
	   {
			this.close_rect.width = xlLib.Global.screenWidth;
			this.close_rect.height = xlLib.Global.screenHeight;
	   }
	}

	public showDatePicker(currdate:any,cb?: Function, thisArg?: any):void
	{
        this.currdate = currdate;
		this.cb = cb;
        this.thisArg = thisArg;
		this.updataDateText();
		this.resize();
	}

	private updataDateText()
	{
		this.time_txt.text = GlobalFunction.getDateString(this.currdate)+'/08:00:00';
		this.year_txt.text =  this.currdate.getFullYear()+"";
		this.month_txt.text =  this.currdate.getMonth()+1+"";
		this.date_txt.text = this.currdate.getDate()+"";
	}



	private initEventListener() 
	{
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	}

	private onTouchHandler(evt:egret.Event):void
	{
		if(evt.target == this.close_rect||evt.target == this.qx_btn)
		{
			xlLib.PopUpMgr.removePopUp(this, 1);
		}
		else if(evt.target == this.qd_btn)
		{
			if(this.cb)
			{
                this.cb.call(this.thisArg,this.currdate);
			}
			xlLib.PopUpMgr.removePopUp(this, 1);
		}
		else if(evt.target == this.addyear_btn)
		{
			this.currdate.setFullYear(this.currdate.getFullYear()+1);
            this.updataDateText();
		}
		else if(evt.target == this.addmonth_btn)
		{
			this.currdate.setMonth(this.currdate.getMonth()+1);
            this.updataDateText();
		}
		else if(evt.target == this.adddate_btn)
		{
			this.currdate.setDate(this.currdate.getDate()+1);
            this.updataDateText();
		}
		else if(evt.target == this.reyear_btn)
		{
			this.currdate.setFullYear(this.currdate.getFullYear()-1);
            this.updataDateText();
		}
		else if(evt.target == this.remonth_btn)
		{
			this.currdate.setMonth(this.currdate.getMonth()-1);
            this.updataDateText();
		}
		else if(evt.target == this.redate_btn)
		{
		    this.currdate.setDate(this.currdate.getDate()-1);
            this.updataDateText();
		}
	}

	 public destroy()
	 {
		 this.cb = null;
         this.thisArg = null;
		 this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
	 }
}