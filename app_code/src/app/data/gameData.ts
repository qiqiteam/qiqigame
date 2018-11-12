class gameData {
	public id:string;
	public code:string;
	public name:string;
	public types:typeData[] = [];
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

	/**根据游戏类型 查找游戏数据*/
    public gettypeDataByCode(code: string): typeData {
        let typedata: typeData;
        for (let index: number = 0; index < this.types.length; index++) {
            if (this.types[index].code == code) {
                typedata = this.types[index];
                break;
            }
        }
        return typedata;
    }
	public constructor() {}
}