/**
 * 牛牛场景界面
 */
class RBGScene extends xlLib.GameScene 
{
    private RBGView: RBGView;
    constructor()
    {
        super();
        this.RBGView = new RBGView();
        this.uiLayer.addChild(this.RBGView);
    }

    public destroy()
    {
        this.RBGView.destroy();
        super.destroy();
    }
    /**
     * 添加适配
     * */
    public resize(): void 
    {
        if(this.RBGView)
        {
             this.RBGView.resize();
        }
    }
}