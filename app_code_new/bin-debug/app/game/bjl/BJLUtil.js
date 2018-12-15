var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BJLUtil = (function () {
    function BJLUtil() {
        if (BJLUtil.instance) {
            throw new Error("Instance is alreally exist");
        }
    }
    BJLUtil.getInstance = function () {
        if (this.instance == null) {
            this.instance = new BJLUtil();
        }
        return this.instance;
    };
    //获取筹码数量    1w  10w   100w   1000w  1y  5y
    BJLUtil.prototype.getBetNumber = function (index) {
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
    };
    //提示消息类型    2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    BJLUtil.prototype.getMsgSource = function (type) {
        var src = '';
        switch (type) {
            case 2:
                src = 'd2';
                break;
            case 3:
                src = 'd3';
                break;
            case 4:
                src = 'd4';
                break;
            case 5:
                src = 'd5';
                break;
        }
        return src;
    };
    /**音乐 */
    BJLUtil.prototype.getSoundEffect = function (type) {
        switch (type) {
            case 0:
                return 'bgm'; //背景音乐
            case 1:
                return 'jh.jackpot'; //自己赢得最多
            case 2:
                return 'jh.start'; //下注开始
            case 3:
                return 'jh.end'; //下注结束
            case 4:
                return 'jh.ts'; //通杀
            case 5:
                return 'jh.tp'; //通赔
            case 6:
                return 'jh.dealCard'; //发牌
            case 7:
                return 'jh.openCard'; //开牌
            case 8:
                return 'jh.stake'; //筹码
        }
    };
    BJLUtil.prototype.getCoinsPos = function (index) {
        var point = new egret.Point();
        switch (index) {
            case 1:// 1是庄
                point.x = 240;
                point.y = 240;
                break;
            case 2:// 2是闲
                point.x = 920;
                point.y = 240;
                break;
            case 3:// 3是闲对
                point.x = 260;
                point.y = 430;
                break;
            case 4:// 4是庄对
                point.x = 930;
                point.y = 430;
                break;
            case 5:// 5是和
                point.x = 590;
                point.y = 430;
                break;
        }
        return point;
    };
    BJLUtil.prototype.getCardType = function (index) {
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
    };
    //筹码类型        1000w   5000w   1y  3y  5y
    BJLUtil.prototype.coinsType = function (pos, num) {
        var coinArr = [];
        var coinNum = 0;
        var src = '';
        if (num == 4) {
            coinNum = num;
            src = 'baccarat_game_icon_chouma_4_png';
        }
        else if (num == 10) {
            coinNum = num;
            src = 'baccarat_game_icon_chouma_10_png';
        }
        else if (num == 20) {
            coinNum = num;
            src = 'baccarat_game_icon_chouma_20_png';
        }
        else if (num == 50) {
            coinNum = num;
            src = 'baccarat_game_icon_chouma_50_png';
        }
        else if (num == 100) {
            coinNum = num;
            src = 'baccarat_game_icon_chouma_100_png';
        }
        else if (num == 200) {
            coinNum = num;
            src = 'baccarat_game_icon_chouma_200_png';
        }
        // for (var i = 0; i < Math.round(coinNum); i++) {
        var coin = new eui.Image(src);
        //var p: egret.Point = this.coinPos();
        coin.x = pos.x;
        coin.y = pos.y;
        coin.scaleX = 0.3;
        coin.scaleY = 0.3;
        coinArr.push(coin);
        // }
        return coinArr;
    };
    BJLUtil.prototype.coinPos = function () {
        var p = new egret.Point();
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
    };
    BJLUtil.instance = null;
    return BJLUtil;
}());
__reflect(BJLUtil.prototype, "BJLUtil");
//# sourceMappingURL=BJLUtil.js.map