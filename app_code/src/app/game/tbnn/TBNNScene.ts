/**
 * 牛牛场景界面
 */
class TBNNScene extends xlLib.GameScene 
{
    private TBNNView: TBNNScene;
    constructor()
    {
        super();
        this.TBNNView = new TBNNScene();
        this.uiLayer.addChild(this.TBNNView);
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
        if(this.TBNNView)
        {
             this.TBNNView.resize();
        }
    }
}