/**
 * 大厅场景
 * */
class Lobby extends xlLib.LobbyScene
{
    private lobbyView:LobbyView;
    constructor(){
        super();
        this.lobbyView = new LobbyView();
        this.uiLayer.addChild(this.lobbyView);
    }
     public destroy(){
        this.lobbyView.destroy();
        super.destroy();
     }

      public resize(): void 
      {
         if(this.lobbyView)
         {
            this.lobbyView.resize();
         }
      }
}