class gameData {
	public id:string;
	public code:string;
	public name:string;
    public types:typeData[];
	public initData(data:any):void
	{
       this.id = data.id;
	   this.code = data.code;
	   this.name = data.name;
	   let typedata:any;
		for(let index:number = 0;index<data.types.length;index++)
		{
			typedata = new typeData();
			typedata.initData(data.types[index]);
			this.types.push(typedata);
		}
	}
	public constructor() {}
}