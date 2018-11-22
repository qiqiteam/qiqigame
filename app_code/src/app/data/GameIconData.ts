class GameIconData {
	public url:string;
	public isOpen:boolean;
	public game:string;
	public type:string;
	public name:string;
	public ishot:boolean;
	public initData(data:any):GameIconData
	{
       this.url = data.url;
	   this.isOpen = data.isOpen;
	   this.game = data.game;
	   this.type = data.type;
	   this.ishot = data.ishot;
	   return this;
	}
	public constructor() {}
}