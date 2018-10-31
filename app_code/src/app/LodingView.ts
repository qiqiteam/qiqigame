/**
 * 加载界面
 * */
class LodingView extends  eui.Component
{
    public bg_img:eui.Image;
    public load_rec:eui.Rect;
    public load_img:eui.Image;
    //public pro_img:eui.Image;


    constructor()
    {
        super();
        this.skinName = "LodingViewSkin";
    }

    protected childrenCreated()
    {
        super.childrenCreated();
        this.resize();
	}

    public resize(): void 
	{
       if(this.bg_img)
	   {
			this.bg_img.width = xlLib.Global.screenWidth;
			this.bg_img.height = xlLib.Global.screenHeight;
	   }
	}
    /**
     * 进度回调
     * */
        public setProgress(loaded: number, total: number, desc?: string, resourceName?: string, force: boolean=false): void {
        if (total && total !=0)
        {
            var widthX: number = Math.floor(598 * (loaded / total));
            this.load_rec.width = widthX;
            this.load_img.mask = this.load_rec;
            //this.pro_img.x = this.load_rec.width + this.load_img.x - this.pro_img.width/2;
        }
    }
}