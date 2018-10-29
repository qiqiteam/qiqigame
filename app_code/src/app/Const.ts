class Const {

    public static GAME_HOST:string = "192.168.1.36";
    public static GAME_PORT:string = "0981";

    /**珠盘珠子宽度 */
    public static ZP_PEARL_WIDTH: number = 40;
    /**珠盘珠子高度 */
    public static ZP_PEARL_HEIGHT: number = 40;
    /**大路珠子宽度 */
    public static DL_PEARL_WIDTH: number = 20;
    /**大路珠子高度 */
    public static DL_PEARL_HEIGHT: number = 20;

    /**游戏珠盘珠子宽度 */
    public static ZP_GAME_PEARL_WIDTH: number = 40;
    /**游戏珠盘珠子高度 */
    public static ZP_GAME_PEARL_HEIGHT: number = 40;
    /**游戏大路珠子宽度 */
    public static DL_GAME_PEARL_WIDTH: number = 20;
    /**游戏大路珠子高度 */
    public static DL_GAME_PEARL_HEIGHT: number = 20;

    /**牛牛珠子宽度 */
    public static NN_GAME_PEARL_WIDTH: number = 42;
    /**牛牛珠子高度 */
    public static NN_GAME_PEARL_HEIGHT: number = 42;

    public static NN_GAME_NET_WIDTH: number = 50;

    /**百家乐游戏类型 */
    public static BJLName: string = "bacc";
    /**龙虎游戏类型 */
    public static LFName: string = "dt";
    /**牛牛游戏类型 */
    public static NNName: string = "nn";
    /**庄闲牛游戏类型 */
    public static ZXName: string = "nb";

    /**庄 */
    public static TYPE_Z:string = "Z";
    /**闲 */
    public static TYPE_X:string = "X";
    /**和 */
    public static TYPE_H:string = "H";
    /**庄对 */
    public static TYPE_ZD:string = "ZD";
    /**闲对 */
    public static TYPE_XD:string = "XD";
    /**龙 */
    public static TYPE_LONG:string = "LONG";
    /**虎 */
    public static TYPE_HU:string = "HU";
    /**和 */
    public static TYPE_HE:string = "HE";

    /**牛牛 闲1 A1*/
    public static TYPE_NN_X_A1:string = "a1";
    /**牛牛 闲1 A2*/
    public static TYPE_NN_X_A2:string = "a2";
    /**牛牛 闲1 A2*/
    public static TYPE_NN_X_A3:string = "a3";

    /**牛牛 闲2 B1*/
    public static TYPE_NN_X_B1:string = "b1";
    /**牛牛 闲2 B2*/
    public static TYPE_NN_X_B2:string = "b2";
    /**牛牛 闲2 B2*/
    public static TYPE_NN_X_B3:string = "b3";

    /**牛牛 闲2 C1*/
    public static TYPE_NN_X_C1:string = "c1";
    /**牛牛 闲2 C2*/
    public static TYPE_NN_X_C2:string = "c2";
    /**牛牛 闲2 C2*/
    public static TYPE_NN_X_C3:string = "c3";


    /**庄闲牛 A1*/
    public static TYPE_ZXN_X_A1:string = "a1";
    /**庄闲牛 A2*/
    public static TYPE_ZXN_X_A2:string = "a2";
    /**庄闲牛 A3*/
    public static TYPE_ZXN_X_A3:string = "a3";
    /**庄闲牛 A4*/
    public static TYPE_ZXN_X_A4:string = "a4";
    /**庄闲牛 A5*/
    public static TYPE_ZXN_X_A5:string = "a5";
    /**庄闲牛 A6*/
    public static TYPE_ZXN_X_A6:string = "a6";
    /**庄闲牛 A6*/
    public static TYPE_ZXN_X_A7:string = "a7";

    /** 维护 */
    public static GAME_STATE_0:number = 0;
    /** 洗牌 */
    public static GAME_STATE_1:number = 1;
    /** 开始下注 */
    public static GAME_STATE_2:number = 2;
    /** 停止下注 */
    public static GAME_STATE_3:number = 3;
    /** 派牌 */
    public static GAME_STATE_4:number = 4;
    /** 结算 */
    public static GAME_STATE_5:number = 5;
    /** 结算完成 */
    public static GAME_STATE_6:number = 6;
    /** 等待开始 */
    public static GAME_STATE_7:number = 7;

    public static NN_NAMES: Array<string> = ["无牛", "牛一", "牛二", "牛三", "牛四", "牛五", "牛六", "牛七", "牛八", "牛九",
                            "牛牛", "五花"];

    public static getNNType(seatId:Number):string
    {
       let type:string = "";
       switch(seatId)
        {
            case 1:
             type = "a";
             break;
            case 2:
             type = "b";
             break;
            case 3:
             type = "c";
             break;
        }
       return type;
    }
    
    public static getSeatByBetType(type:String):number
    {
        let seatId:number= -1;
        switch(type)
        {
            case this.TYPE_NN_X_A1:
            case this.TYPE_NN_X_A2:
            case this.TYPE_NN_X_A3:
               seatId = 1;
               break;
            case this.TYPE_NN_X_B1:
            case this.TYPE_NN_X_B2:
            case this.TYPE_NN_X_B3:
               seatId = 2;
               break;
            case this.TYPE_NN_X_C1:
            case this.TYPE_NN_X_C2:
            case this.TYPE_NN_X_C3:
               seatId = 3;
               break;
        }
        return seatId;
    }

    public static getZXNBetTypeString(betType:number):string
    {
        let type:string = "";
        switch(betType)
        {
            case 1:
               type = this.TYPE_ZXN_X_A2;
               break;
            case 0:
               type = this.TYPE_ZXN_X_A1;
               break;
            case 3:
               type = this.TYPE_ZXN_X_A4;
               break;
            case 2:
               type = this.TYPE_ZXN_X_A3;
               break;
            case 4:
               type = this.TYPE_ZXN_X_A5;
               break;
            case 5:
               type = this.TYPE_ZXN_X_A6;
               break;
            case 6:
               type = this.TYPE_ZXN_X_A7;
               break;
        }
        return type;
    }

    public static getZXNBetType(type:string):number
    {
        let betType:number= -1;
        switch(type)
        {
            case this.TYPE_ZXN_X_A2:
               betType = 1;
               break;
            case this.TYPE_ZXN_X_A1:
               betType = 0;
               break;
            case this.TYPE_ZXN_X_A4:
               betType = 3;
               break;
            case this.TYPE_ZXN_X_A3:
               betType = 2;
               break;
            case this.TYPE_ZXN_X_A5:
               betType = 4;
               break;
            case this.TYPE_ZXN_X_A6:
               betType = 5;
               break;
            case this.TYPE_ZXN_X_A7:
               betType = 6;
               break;
        }
        return betType;
    }


    public static getBetType(type:String):number
    {
        let betType:number= -1;
        switch(type)
        {
            case this.TYPE_Z:
               betType = 1;
               break;
            case this.TYPE_X:
               betType = 0;
               break;
            case this.TYPE_H:
               betType = 2;
               break;
            case this.TYPE_ZD:
               betType = 4;
               break;
            case this.TYPE_XD:
               betType = 3;
               break;
            case this.TYPE_LONG:
               betType = 0;
               break;
            case this.TYPE_HU:
               betType = 1;
               break;
            case this.TYPE_HE:
               betType = 2;
               break;
            case this.TYPE_NN_X_A1:
               betType = 0;
               break;
            case this.TYPE_NN_X_A2:
               betType = 1;
               break;
            case this.TYPE_NN_X_A3:
               betType = 2;
               break;
            case this.TYPE_NN_X_B1:
               betType = 0;
               break;
            case this.TYPE_NN_X_B2:
               betType = 1;
               break;
            case this.TYPE_NN_X_B3:
               betType = 2;
               break;
            case this.TYPE_NN_X_C1:
               betType = 0;
               break;
            case this.TYPE_NN_X_C2:
               betType = 1;
               break;
            case this.TYPE_NN_X_C3:
               betType = 2;
               break;
        }
        return betType;
    }

    public static tableTxtXPos: Array<number> = [139, 191, 242, 295, 430, 290, 360];
    public static tableLhXPos: Array<number> = [139, 245, 342, 295, 430, 290, 360];

    /**
     * 权限管理
     */
    /**开启或关闭登录功能 前端无需处理 */
    public static loginable: number = 1;
    /**开启或关闭投注功能 投注时，应立即显示  投注失败：您的帐号已被管理员设定禁止投注 */
    public static betable: number = 2;
    /**开启或关闭hide功能 前端无需处理 */
    public static hideable: number = 4;
    /**开启或关闭自主取款功能  在点击大厅或游戏左侧“在线存取款” 功能时，应立即显示 请求失败：您的帐号已被管理员设定禁止在线存取款 */
    public static moneyable: number = 8;
    /**开启或关闭聊天功能功能  在发送聊天信息时，应立即显示 发送聊天内容失败：您的帐号已被管理设定禁止聊天 */
    public static chatable: number = 16;
    /**开启或关闭联系客服功能  在点击大厅或游戏左侧“联系在线客服” 功能时，应立即显示 请求失败：您的帐号已被管理员设定禁止联系在线客服 */
    public static serviceable: number = 32;
    /**开启或关闭意见反馈功能  在点击大厅或游戏上方的“意见反馈”功能时，应立即显示 请求失败：您的帐号已被管理员设定禁止意见反馈 */
    public static feedable: number = 64;
    /**API用户标志位  前端需要针对不拥有此类权限用户，做桌台限红处理，在投注条件不满足(超过限红)时，应立即显示， 投注失败：本游戏桌的限红已超过最高上限 */
    public static apiuser: number = 128;
    /**显示或隐藏洗码 */
    public static showXiMa: number = 256; 

    /**
	 *处理游戏结果 
	 * @param data
	 * data.resutls： 游戏结果
        0：庄
        1：庄 庄对 
        2:庄 闲对 
        3:庄 双对
        4:闲
        5:闲 庄对 
        6:闲 闲对
        7:闲 双对
        8:和 
        9:和 庄对 
        10:和 闲对 
        11:和 双对
        大加20  
        data.zxh 0庄 1闲 2和
        data.zbool 庄对 false true
        data.xbool 闲对 false true
        data.bigSmall 大小 false true
        data.xOdd 闲单
        data.zOdd 庄单
        data.dealArr 牌组
	 */	

}

enum DeviceType {
    win = 0x01,
    mac = 0x02,
    android = 0x03,
    ios = 0x04,
}

enum LoginType {
    normal = 0x01,
    open = 0x02,
}
