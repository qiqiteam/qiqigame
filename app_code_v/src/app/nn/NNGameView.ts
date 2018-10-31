class NNGameView extends xlLib.GameScene {
    private view: NNView;
    constructor(isReConnect: boolean = false)
    {
        super();
        this.view = new NNView(isReConnect);
        this.uiLayer.addChild(this.view);
    }
     public destroy(){
        super.destroy();
     }
        /**
     * 添加适配
     * */
      public resize(): void 
      {
         if(this.view)
         {
            this.view.resize();
         }
      }
}