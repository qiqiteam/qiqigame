/**
 * 炸金花导航场景
 * */
class ZJHroom extends xlLib.LobbyScene
{
    private zjhroom:ZJHroomView;
    constructor(){
        super();
        this.zjhroom = new ZJHroomView();
        this.uiLayer.addChild(this.zjhroom);
    }
     public destroy(){
        this.zjhroom.destroy();
        super.destroy();
     }

      public resize(): void 
      {
         if(this.zjhroom)
         {
            this.zjhroom.resize();
         }
      }
}