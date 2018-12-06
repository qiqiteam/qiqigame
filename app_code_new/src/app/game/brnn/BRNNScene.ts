/**
 * 牛牛场景界面
 */
class BRNNScene extends xlLib.GameScene 
{
    private BRNNView: BRNNView;
    constructor()
    {
        super();
        this.BRNNView = new BRNNView();
        this.uiLayer.addChild(this.BRNNView);
    }

    public destroy()
    {
        this.BRNNView.destroy();
        super.destroy();
    }
    /**
     * 添加适配
     * */
    public resize(): void 
    {
        if(this.BRNNView)
        {
             this.BRNNView.resize();
        }
    }
}