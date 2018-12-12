/**
 * 加载界面
 * */
class LodingView extends  eui.Component
{
    public bg_img:eui.Image;
    public image18:eui.Image;
    public image1:eui.Image;
    public image10:eui.Image;
    public image:eui.Image;
    public image8:eui.Image;
    public image0:eui.Image;
    public image17:eui.Image;
    public image14:eui.Image;
    public image9:eui.Image;
    public image4:eui.Image;
    public image16:eui.Image;
    public image15:eui.Image;
    public image13:eui.Image;
    public image2:eui.Image;
    public image5:eui.Image;
    public image3:eui.Image;
    public image7:eui.Image;
    public image11:eui.Image;
    public image6:eui.Image;
    public image12:eui.Image;
    public image19:eui.Image;
    public load_rec:eui.Rect;
    public load_img:eui.Image;

    public ami: egret.tween.TweenGroup;
    private  liuguang:dragonBones.Armature;
    constructor()
    {
        super();
        this.skinName = "LodingViewSkin";
    }


    private playLiuguang():void
    {
        this.liuguang = xlLib.DisplayUtils.createDragonBonesDisplay('wzqp',"wzqp");
        dragonBones.WorldClock.clock.add(this.liuguang);
        let armatureDisplay = this.liuguang.getDisplay();
        armatureDisplay.x = 1230;
        armatureDisplay.y = 400;
        this.addChild(armatureDisplay);

        xlLib.DisplayUtils.runDragonBonesArmature(this.liuguang,"wzqp");
    }


    protected childrenCreated()
    {
        super.childrenCreated();
        this.ami.addEventListener(egret.Event.COMPLETE, this.onTweenComplete, this);
        this.play();
        this.playLiuguang();
        this.resize();
    }

    protected partRemoved(partName: string, instance: any): void
    {
        this.stop();
        //  xlLib.DisplayUtils.destoryDragonBonesArmature(this.liuguang,"wzqp");
        super.partRemoved(partName,instance);
    }

    private onTweenComplete(evt: egret.Event): void {
        this.ami.play(0);
    }

    public play(): void {
        this.ami.play(0);
    }


    public stop(): void {
        this.ami.stop();
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
        var widthX: number = Math.floor(524 * (loaded / total));
        this.load_rec.width = widthX;
        this.load_img.mask = this.load_rec;
    }
    }
}