class typeData {
	public code:string;
	public id:string;
	public name:string;
	public playways:playWayData[] = [];
	public indexStr:string;
	public initData(data:any):void
	{
		this.id = data.id;
		this.code = data.code;
		this.name = data.name;
		this.indexStr = data.indexStr;
		let playwaydata:any;
		for(let index:number = 0;index<data.playways.length;index++)
		{
			playwaydata = new playWayData();
			playwaydata.initData(data.playways[index]);
			this.playways.push(playwaydata);
		}
	}

		/**根据游戏类型 查找游戏数据*/
    public getPlayWayByindex(indexstr: string): playWayData {
        let playway: playWayData;
        for (let index: number = 0; index < this.playways.length; index++) {
            if (this.playways[index].indexStr == indexstr) {
                playway = this.playways[index];
                break;
            }
        }
        return playway;
    }
	public constructor() {}
}