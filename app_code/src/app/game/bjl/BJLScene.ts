/**
 * 百家乐场景界面
 */
class BJLScene extends xlLib.GameScene 
{
    private BJLView: BJLView;
    constructor()
    {
        super();
        this.BJLView = new BJLView();
        this.uiLayer.addChild(this.BJLView);
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
        if(this.BJLView)
        {
             this.BJLView.resize();
        }
    }
}