class GameIconData {
	public url:string;
	public isOpen:boolean;
	public game:string;
	public type:string;
	public name:string;
	public initData(data:any):GameIconData
	{
       this.url = data.url;
	   this.isOpen = data.isOpen;
	   return this;
	}
	public constructor() {}
}