class TipsLoading extends egret.DisplayObjectContainer{

    public _tips_bg:egret.Bitmap;

    constructor(){
        super();
        this.init();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddHandler, this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    }

    private init(){
        let mask = xlLib.DisplayUtils.createMask(0.5, xlLib.Global.screenWidth, xlLib.Global.screenHeight);
        mask.touchEnabled = true;
        this.addChild(mask);
        this._tips_bg =  xlLib.DisplayUtils.createBitmapByName("spinner");
        this._tips_bg.x = xlLib.Global.screenWidth >> 1;
        this._tips_bg.y = xlLib.Global.screenHeight >> 1;
        this._tips_bg.anchorOffsetX = this._tips_bg.width/2;
        this._tips_bg.anchorOffsetY = this._tips_bg.height/2;
        this._tips_bg.scaleX = this._tips_bg.scaleY = 0.4;
        this.addChild(this._tips_bg);
    }

    private onAddHandler(evt: egret.Event)
	{
        this.starRotation();
    }

    private starRotation():void
    {
        egret.Tween.get(this._tips_bg).to({ rotation:this._tips_bg.rotation+20}, 100).call(this.starRotation,this);
    }

    public destroy(){
       egret.Tween.removeTweens(this._tips_bg);
        this._tips_bg = null;
    }
}