/**
 * 牛牛场景界面
 */
class NNScene extends xlLib.GameScene 
{
    private nnlistView: NNListView;
    constructor()
    {
        super();
        this.nnlistView = new NNListView();
        this.uiLayer.addChild(this.nnlistView);
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
        if(this.nnlistView)
        {
             this.nnlistView.resize();
        }
    }
}