interface IGameTableData {
    gameId: number,
    gameType: string,
    gameName: string,
    gameStatus: number,
    gameHistory: Array<number>,
    onlineNum: number,
    gameStatusParams: number,
    timestamp: number,
    showXH: boolean,
}