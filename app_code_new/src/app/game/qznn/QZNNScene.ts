/**
 * 牛牛场景界面
 */
class QZNNScene extends xlLib.GameScene 
{
    private QZNNView: QZNNView;
    constructor()
    {
        super();
        this.QZNNView = new QZNNView();
        this.uiLayer.addChild(this.QZNNView);
    }

    public destroy()
    {
        this.QZNNView.destroy();
        super.destroy();
    }
    /**
     * 添加适配
     * */
    public resize(): void 
    {
        if(this.QZNNView)
        {
             this.QZNNView.resize();
        }
    }
}