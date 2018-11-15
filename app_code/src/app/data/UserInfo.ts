class UserInfo {
    public uid: string;
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
            if (data.player[i].id == this.uid) {
                this.myPlayer = new PlayerData();
                this.myPlayer.initData(data.player[i]);
            }
            let player = new PlayerData();
            player.initData(data.player[i]);
            this.playes.push(player);
        }
    }

    public joinRoomPlayer(data):void {
        if(data.player.id == this.myPlayer.id) {
            //this.playes[0] = data.player;
        } else {
            this.playes.push(data.player);
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

    /**查找用户信息通过UID */
    public findUserInfo(id:string):PlayerData {
        for(let i=0; i<this.playes.length; i++) {
            if(this.playes[i].id == id) {
                return this.playes[i];
            }
        }
    }

    /**查找在本游戏里的实际座位 */
    public findSeatNumber(index:number):number {
        let num = 0;
        if(index == this.playes[0].index) {
            return 0;
        }

        if(index<this.playes[0].index) {
            num = 10-(this.playes[0].index-index);
        } else {
            num = index - this.playes[0].index;
        }

        return num;
    }
}