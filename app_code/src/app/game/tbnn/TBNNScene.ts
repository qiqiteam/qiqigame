/**
 * 通比牛牛场景界面
 */
class TBNNScene extends xlLib.GameScene 
{
    private TBNNView: TBNNView;
    constructor()
    {
        super();
        this.TBNNView = new TBNNView();
        this.uiLayer.addChild(this.TBNNView);
    }

    public destroy()
    {
        this.TBNNView.destroy();
        super.destroy();
    }
    /**
     * 添加适配
     * */
    public resize(): void 
    {
        if(this.TBNNView)
        {
             this.TBNNView.resize();
        }
    }
}