/**
 * 牛牛场景界面
 */
class NiuNiuScene extends xlLib.GameScene 
{
    private niuNiuView: NiuNiuView;
    constructor()
    {
        super();
        this.niuNiuView = new NiuNiuView();
        this.uiLayer.addChild(this.niuNiuView);
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
        if(this.niuNiuView)
        {
             this.niuNiuView.resize();
        }
    }
}