/**
 * 牛牛场景界面
 */
class ZJHScene extends xlLib.GameScene 
{
    private ZJHView: ZJHView;
    constructor()
    {
        super();
        this.ZJHView = new ZJHView();
        this.uiLayer.addChild(this.ZJHView);
    }

    public destroy()
    {
    super.destroy();
    }
    /**
     * 添加适配
     * */
    public resize(): void 
    {
        if(this.ZJHView)
        {
             this.ZJHView.resize();
        }
    }
}