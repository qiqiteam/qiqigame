class UserInfo {
    public uid:number;
    public username:string;
    public goldcoins:number;
    public token:string;
    public gamelist:gameData[] = [];
    private static _instance: UserInfo;

    public constructor() {}

    public static getInstance(): UserInfo {
        if (!this._instance) {
            this._instance = new UserInfo();
        }
        return this._instance;
    }

    public  initUserInfo(data:any):void
	{
        var info:any = data.data;
		this.uid = info.id;
		this.username = info.username;
		this.goldcoins = info.goldcoins;
		this.token = info.token;
        let gamedata:gameData;
        for(let index:number = 0;index<data.games.length;index++)
        {
           gamedata = new gameData();
           gamedata.initData(data.games[index]);
           this.gamelist.push(gamedata);
        }
	}
}