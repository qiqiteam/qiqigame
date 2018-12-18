class ZJHUtil {
    private static instance: ZJHUtil = null;
    public constructor() {
        if (ZJHUtil.instance) {
            throw new Error("Instance is alreally exist");
        }
    }

    public static getInstance(): ZJHUtil {
        if (this.instance == null) {
            this.instance = new ZJHUtil();
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

    /**获取玩家初始图像位置 */
    public getPlayerIconPos(index): egret.Point {
        var point: egret.Point = new egret.Point();
        switch (index) {
            case 0:
                point.x = 516;
                point.y = 486;
                break;
            case 1:
                point.x = 1171;
                point.y = 410;
                break;
            case 2:
                point.x = 1211;
                point.y = 175;
                break;
            case 3:
                point.x = 121;
                point.y = 175;
                break;
            case 4:
                point.x = 170;
                point.y = 410;
                break;
        }
        return point;
    }

    /**获取玩家比牌胜利标 */
    public getP(index): egret.Point {
        var point: egret.Point = new egret.Point();
        switch (index) {
             case 0:
                point.x = 220;
                point.y = 160;
                break;
            case 1:
                point.x = -125;
                point.y = -315;
                break;
            case 2:
                point.x = -85;
                point.y = -550;
                break;
            case 3:
                point.x = -860;
                point.y = -550;
                break;
            case 4:
                point.x = -810;
                point.y = -315;
                break;
        }
        return point;
    }
    /**飞筹码的范围 */
    public getCoinsPos(): egret.Point {
        var point: egret.Point = new egret.Point();
        /*
        switch (index) {
            case 1:
                point.x = 190;
                point.y = 510;
                break;
            case 2:
                point.x = 370;
                point.y = 510;
                break;
            case 3:
                point.x = 190;
                point.y = 650;
                break;
            case 4:
                point.x = 370;
                point.y = 650;
                break;
        }
        */
        point.x = 700;
        point.y = 300;
        return point;
    }
    /**气泡背景 */
    public operateTypeBGPos(index: number): egret.Point {
        var pos: egret.Point = new egret.Point();
        switch (index) {
            case 0:
                pos.x = 760;
                pos.y = 512;
                break;
            case 1:
                pos.x = 1020;
                pos.y = 449;
                break;
            case 2:
                pos.x = 1060;
                pos.y = 219;
                break;
            case 3:
                pos.x = 290;
                pos.y = 219;
                break;
            case 4:
                pos.x = 339;
                pos.y = 449;
                break;
        }
        return pos;
    }
    /**气泡状态 */
    public operateTypePos(index: number): egret.Point {
        var pos: egret.Point = new egret.Point();
        switch (index) {
            case 0:
                pos.x = 790;
                pos.y = 520;
                break;
            case 1:
                pos.x = 1048;
                pos.y = 457;
                break;
            case 2:
                pos.x = 1090;
                pos.y = 229;
                break;
            case 3:
                pos.x = 317;
                pos.y = 229;
                break;
            case 4:
                pos.x = 372;
                pos.y = 457;
                break;
        }
        return pos;
    }
    /**牌型 */
    public getCardType(index): string {
        switch (index) {
            case 1:
                return 'gf_px6_png';
            case 2:
                return 'gf_px5_png';
            case 3:
                return 'gf_px4_png';
            case 4:
                return 'gf_px3_png';
            case 5:
                return 'gf_px2_png';
            case 6:
                return 'gf_px1_png';
        }
    }
    /**显示玩家加注类型 */
    public getChipType(index): number {
        switch (index) {
            case 1:
                return 2;//2金币
            case 2:
                return 3;
            case 3:
                return 4;
            case 4:
                return 5;
            case 5:
                return 6;
            case 6:
                return 7;
        }
    }
    /**显示玩家操作状态*/
    public getplayerstatue(index): string {
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
    public coinsType(pos: egret.Point, num): Array<egret.Sprite> {
        var splist: Array<egret.Sprite> = [];
        var coinNum: number = 0;
        var src: string = '';
        num = Math.round(num / 100);
        if (num == 1 || num == 2) {  //（初级场：1，2）
            coinNum = num;
            src = 'gf_icon_chip_sm1_png';
        } else if (num == 3 || num == 6) {  //（初级场：3，6）
            coinNum = num;
            src = 'gf_icon_chip_sm5_png';
        } else if (num == 4 || num == 8) {  //（初级场：4，8）
            coinNum = num;
            src = 'gf_icon_chip_sm3_png';
        } else if (num == 5 || num == 10) {  //（初级场：5，10）
            coinNum = num;
            src = 'gf_icon_chip_sm6_png';
        } else if (num == 6 || num == 12) {  //（初级场：6，12）
            coinNum = num;
            src = 'gf_icon_chip_sm4_png';
        } else if (num == 7 || num == 14) {  //（初级场：7，14）
            coinNum = num;
            src = 'gf_icon_chip_sm2_png';
        }
        /*for (var i = 0; i < Math.round(coinNum); i++) {
            var coin: eui.Image = new eui.Image(src);
            coin.x = pos.x;
            coin.y = pos.y;
            coinArr.push(coin);
        }*/
        /*if (Math.round(coinNum) <= 7) {
            var coin: eui.Image = new eui.Image(src);
            coin.x = pos.x;
            coin.y = pos.y;
            coinArr.push(coin);
        } else if (Math.round(coinNum) > 7 && Math.round(coinNum) <= 14) {
            for (let i = 0; i < 2; i++) {
                var coin: eui.Image = new eui.Image(src);
                coin.x = pos.x;
                coin.y = pos.y;
                coinArr.push(coin);
            }
        }*/

        if (Math.round(coinNum) <= 7) {
            var sp: egret.Sprite = new egret.Sprite();
            var coin: eui.Image = new eui.Image(src);
            var cmnum: eui.Label = new eui.Label(Math.round(coinNum).toString());
            coin.name = "img";
            coin.x = 0;
            coin.y = 0;
            cmnum.name = "txt";
            cmnum.x = 0;
            cmnum.y = 10;
            cmnum.width = 62;
            cmnum.height = 20;
            cmnum.textAlign = egret.HorizontalAlign.CENTER;
            sp.addChild(coin);
            sp.addChild(cmnum);
            sp.x = pos.x;
            sp.y = pos.y;
            splist.push(sp);
        } else if (Math.round(coinNum) > 7 && Math.round(coinNum) <= 14) {
            for (let i = 0; i < 2; i++) {
                var sp: egret.Sprite = new egret.Sprite();
                var coin: eui.Image = new eui.Image(src);
                var cmnum: eui.Label = new eui.Label(Math.round(coinNum / 2).toString());
                coin.name = "img";
                coin.x = 0;
                coin.y = 0;
                cmnum.name = "txt";
                cmnum.x = 0;
                cmnum.y = 10;
                cmnum.width = 62;
                cmnum.height = 20;
                cmnum.textAlign = egret.HorizontalAlign.CENTER;
                sp.addChild(coin);
                sp.addChild(cmnum);
                sp.x = pos.x;
                sp.y = pos.y;
                splist.push(sp);
            }
        }
        return splist;
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