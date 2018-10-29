interface IGameRecord {
    gameNum: string,
    gameName: string,
    gameType: string,
    diskNum: string,
    sTime: number,
    orderType: number,
    money: number,
    userProfit: number,
    payResult: number,
    payouttype: number,
    seat: number,//牛牛：闲1 2 3
    tdMoney: number//牛牛：算押金时需用到
}