class PlayerData {
	public integral:number;
	public lastlogintime:string;
	public login:boolean;
	public message:string;
	public online:boolean;
	public opendeal:boolean;
	public orgi:string;
	public passupdatetime:string;
	public playerindex:number;
	public playertype:string;
	public province:string;
	public roomid:string;
	public roomready:boolean;
	public token:string;
	public updatetime:string;
	public username:string;
	public goldcoins:number;
	public id:string;
	public index:number;
	public initData(data:any):void
	{
		this.integral = data.id;
		this.lastlogintime = data.lastlogintime;
		this.login = data.login;
		this.message = data.message;
		this.online= data.online;
		this.opendeal = data.opendeal;

		this.orgi= data.orgi;
		this.passupdatetime= data.passupdatetime;
		this.playerindex =  data.playerindex;
		this.playertype= data.playertype
		this.province= data.province
		this.roomid= data.roomid
		this.roomready = data.roomready;
		this.token= data.token;
		this.updatetime= data.updatetime;
		this.username= data.username;
		this.goldcoins = data.goldcoins;
		this.id = data.id;
		this.index = data.index;
	}
	public constructor() {}
}