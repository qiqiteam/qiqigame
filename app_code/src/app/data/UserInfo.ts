class UserInfo {
    public uid: number;
    public username: string;
    public goldcoins: number;
    public token: string;
    public gamelist: gameData[] = [];
    public playes: PlayerData[] = [];//玩家数据表
    public myPlayer: PlayerData;
    public isGameStart: boolean;
    private static _instance: UserInfo;

    public constructor() { }

    public static getInstance(): UserInfo {
        if (!this._instance) {
            this._instance = new UserInfo();
        }
        return this._instance;
    }

    /**根据游戏类型 查找游戏数据*/
    public getGameDataByindex(indexstr: string): gameData {
        let gamedata: gameData;
        for (let index: number = 0; index < this.gamelist.length; index++) {
            if (this.gamelist[index].indexStr == indexstr) {
                gamedata = this.gamelist[index];
                break;
            }
        }
        return gamedata;
    }
    
    public addPlayes(data): void {
        for (let i = 0; i < data.player.length; i++) {
            if (data.player[i].uid = this.uid) {
                this.myPlayer = new PlayerData();
                this.myPlayer.initData(data.player[i]);
            } else {
                let player = new PlayerData();
                player.initData(data.player[i]);
                this.playes.push(player);
            }
        }
    }

    /**初始化用户数据*/
    public initUserInfo(data: any): void {
        var info: any = data.data;
        this.uid = info.id;
        this.username = info.username;
        this.goldcoins = info.goldcoins;
        this.token = info.token;
        let gamedata: gameData;
        for (let index: number = 0; index < data.games.length; index++) {
            gamedata = new gameData();
            gamedata.initData(data.games[index]);
            this.gamelist.push(gamedata);
        }
    }
}