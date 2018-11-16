class GameIconData {
	public url:string;
	public initData(data:any):GameIconData
	{
       this.url = data.url;
	   return this;
	}
	public constructor() {}
}