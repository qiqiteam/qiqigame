class UserInfo {
    /**0：试玩的会员  非0：正式会员 */
    private puserType: number;

    public uid:number;
    public username:string;
    public goldcoins:number;
    private static _instance: UserInfo;

    public constructor() {}

    public static getInstance(): UserInfo {
        if (!this._instance) {
            this._instance = new UserInfo();
        }
        return this._instance;
    }
    
    public set userType(type: number) {
        this.puserType = type;
    }

    public get userType(): number {
        return this.puserType;
    }

}