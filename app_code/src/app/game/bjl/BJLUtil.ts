class BJLUtil {
    private static instance: BJLUtil = null;
    public constructor() {
        if (BJLUtil.instance) {
            throw new Error("Instance is alreally exist");
        }
    }

    public static getInstance(): BJLUtil {
        if (this.instance == null) {
            this.instance = new BJLUtil();
        }
        return this.instance;
    }

    //获取筹码数量    1w  10w   100w   1000w  1y  5y
    public getBetNumber(index): number {
        switch (index) {
            case 0:
                return Math.pow(10, 4);
            case 1:
                return Math.pow(10, 5);
            case 2:
                return 5 * Math.pow(10, 6);
            case 3:
                return Math.pow(10, 7);
            case 4:
                return 1 * Math.pow(10, 8);
            case 5:
                return 5 * Math.pow(10, 8);
        }
    }

    //提示消息类型    2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    public getMsgSource(type): string {
        var src = '';
        switch (type) {
            case 2:
                src = 'd2'
                break;
            case 3:
                src = 'd3'
                break;
            case 4:
                src = 'd4'
                break;
            case 5:
                src = 'd5'
                break;
        }
        return src;
    }
    /**音乐 */
    public getSoundEffect(type): string {
        switch (type) {
            case 0:
                return 'bgm';    //背景音乐
            case 1:
                return 'jh.jackpot'; //自己赢得最多
            case 2:
                return 'jh.start';   //下注开始
            case 3:
                return 'jh.end'; //下注结束
            case 4:
                return 'jh.ts';  //通杀
            case 5:
                return 'jh.tp';  //通赔
            case 6:
                return 'jh.dealCard';  //发牌
            case 7:
                return 'jh.openCard';  //开牌
            case 8:
                return 'jh.stake';   //筹码
        }
    }

    public getCoinsPos(index: Number): egret.Point {
        var point: egret.Point = new egret.Point();
        switch (index) {
            case 1:                 // 1是庄
                point.x = 340;
                point.y = 240;
                break;
            case 2:                 // 2是闲
                point.x = 1020;
                point.y = 240;
                break;
            case 3:                 // 3是庄对
                point.x = 360;
                point.y = 430;
                break;
            case 4:                 // 4是闲对
                point.x = 1030;
                point.y = 430;
                break;
            case 5:                 // 5是和
                point.x = 690;
                point.y = 430;
                break;
        }
        return point;
    }

    public getCardType(index): string {
        switch (index) {
            case 1:
                return '豹子';
            case 2:
                return '同花顺';
            case 3:
                return '金花';
            case 4:
                return '顺子';
            case 5:
                return '对子';
            case 6:
                return '单张';
        }
    }

    //筹码类型        1000w   5000w   1y  3y  5y
    public coinsType(pos: egret.Point, num: number): Array<eui.Image> {
        var coinArr = [];
        var coinNum: number = 0;
        var src: string = '';
        if (num == 4) {  //4
            coinNum = num;
            src = 'baccarat_game_icon_chouma_4_png';
        }
        else if (num == 10) {   //10
            coinNum = num;
            src = 'baccarat_game_icon_chouma_10_png';
        }
        else if (num == 20) {   //10
            coinNum = num;
            src = 'baccarat_game_icon_chouma_20_png';
        }
        else if (num == 50) { //50
            coinNum = num;
            src = 'baccarat_game_icon_chouma_50_png';
        }
        else if (num == 100) { //100
            coinNum = num;
            src = 'baccarat_game_icon_chouma_100_png';
        } else if (num == 200) { //500
            coinNum = num;
            src = 'baccarat_game_icon_chouma_200_png';
        }
        // for (var i = 0; i < Math.round(coinNum); i++) {
        var coin: eui.Image = new eui.Image(src);
        //var p: egret.Point = this.coinPos();
        coin.x = pos.x;
        coin.y = pos.y;
        coin.scaleX = 0.3;
        coin.scaleY = 0.3;
        coinArr.push(coin);
        // }
        return coinArr;
    }


    private coinPos(): egret.Point {
        var p: egret.Point = new egret.Point();
        var index = Math.floor(Math.random() * 4);
        switch (index) {
            case 0:
                p.x = -100;
                p.y = 400;
                break;
            case 1:
                p.x = -100;
                p.y = 800;
                break;
            case 2:
                p.x = 650;
                p.y = 400;
                break;
            case 3:
                p.x = 650;
                p.y = 800;
                break;
        }
        return p;
    }
}