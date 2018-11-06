class typeData {
	public code:string;
	public id:string;
	public name:string;
	public playways:playWayData[] = [];
	public initData(data:any):void
	{
		this.id = data.id;
		this.code = data.code;
		this.name = data.name;
		let playwaydata:any;
		for(let index:number = 0;index<data.playways.length;index++)
		{
			playwaydata = new playWayData();
			playwaydata.initData(data.playways[index]);
			this.playways.push(playwaydata);
		}
	}
	public constructor() {}
}