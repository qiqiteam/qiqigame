/**
 * 21点场景界面
 */
class ESYDScene extends xlLib.GameScene 
{
    private ESYDView: ESYDView;
    constructor()
    {
        super();
        this.ESYDView = new ESYDView();
        this.uiLayer.addChild(this.ESYDView);
    }

    public destroy()
    {
        this.ESYDView.destroy();
        super.destroy();
    }
    /**
     * 添加适配
     * */
    public resize(): void 
    {
        if(this.ESYDView)
        {
             this.ESYDView.resize();
        }
    }
}