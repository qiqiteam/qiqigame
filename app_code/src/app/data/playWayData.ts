class playWayData {
	public changecard:boolean;
	public code:string;
	public extpro:boolean;
	public free:boolean;
	public groups:any[];
	public id:string;
	public items:any[];
	public level:number;
	public maxcoins:number;
	public memo:string;
	public mincoins:number;
	public name:string;
	public onlineusers:number;
	public roomtitle:string;
	public score:number;
	public shuffle:boolean;
	public  initData(data:any):void
	{
      	this.changecard = data.changecard;
		this.code = data.code;
		this.extpro = data.extpro;
		this.free = data.free;
		this.groups = data.groups;
		this.id = data.id;
		this.items = data.items;
		this.level = data.level;
		this.maxcoins = data.maxcoins;
		this.memo = data.memo;
		this.mincoins = data.mincoins;
		this.name = data.name;
		this.onlineusers = data.onlineusers;
		this.roomtitle = data.roomtitle;
		this.score = data.score;
		this.shuffle = data.shuffle;
	}
	public constructor() {}
}