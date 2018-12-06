class ComBoxData {
    public id:number;
	public name:string;
	public data:any;

	public constructor(data: any) 
	{

        this.id = data.id;
        this.name = data.name;
        this.data = data.data;
		
	}
}