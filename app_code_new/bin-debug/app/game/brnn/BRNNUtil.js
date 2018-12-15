var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BRNNUtil = (function () {
    function BRNNUtil() {
        if (BRNNUtil.instance) {
            throw new Error("Instance is alreally exist");
        }
    }
    BRNNUtil.getInstance = function () {
        if (this.instance == null) {
            this.instance = new BRNNUtil();
        }
        return this.instance;
    };
    //获取筹码数量    1w  10w     100w    1000w   5000w   1y
    BRNNUtil.prototype.getBetNumber = function (index) {
        switch (index) {
            case 0:
                return Math.pow(10, 4);
            case 1:
                return Math.pow(10, 5);
            case 2:
                return Math.pow(10, 6);
            case 3:
                return Math.pow(10, 7);
            case 4:
                return 5 * Math.pow(10, 7);
            case 5:
                return Math.pow(10, 8);
        }
    };
    //提示消息类型    2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    BRNNUtil.prototype.getMsgSource = function (type) {
        var src = '';
        switch (type) {
            case 2:
                src = 'nn.d2';
                break;
            case 3:
                src = 'nn.d3';
                break;
            case 4:
                src = 'nn.d4';
                break;
            case 5:
                src = 'nn.d5';
                break;
        }
        return src;
    };
    BRNNUtil.prototype.getCoinsPos = function (index) {
        var point = new egret.Point();
        switch (index) {
            case 1:
                point.x = 320;
                point.y = 350;
                break;
            case 2:
                point.x = 550;
                point.y = 350;
                break;
            case 3:
                point.x = 800;
                point.y = 350;
                break;
            case 4:
                point.x = 1050;
                point.y = 350;
                break;
        }
        return point;
    };
    BRNNUtil.prototype.getCardType2 = function (index) {
        switch (index) {
            case 0:
                return '无牛';
            case 1:
                return '牛一';
            case 2:
                return '牛二';
            case 3:
                return '牛三';
            case 4:
                return '牛四';
            case 5:
                return '牛五';
            case 6:
                return '牛六';
            case 7:
                return '牛七';
            case 8:
                return '牛八';
            case 9:
                return '牛九';
            case 10:
                return '牛牛';
            case 11:
                return '四炸';
            case 12:
                return '五花牛';
            case 13:
                return '五小牛';
        }
    };
    BRNNUtil.prototype.getCardType = function (index) {
        switch (index) {
            case 0:
                return 'nn.n1';
            case 1:
                return 'nn.n2';
            case 2:
                return 'nn.n3';
            case 3:
                return 'nn.n4';
            case 4:
                return 'nn.n5';
            case 5:
                return 'nn.n6';
            case 6:
                return 'nn.n7';
            case 7:
                return 'nn.n8';
            case 8:
                return 'nn.n9';
            case 9:
                return 'nn.n10';
            case 10:
                return 'nn.n11';
            case 11:
                return 'nn.n13';
            case 12:
                return 'nn.n14';
            case 13:
                return 'nn.n12';
        }
    };
    BRNNUtil.prototype.getCardMusicType = function (index) {
        switch (index) {
            case 0:
                return 'nn.niu0';
            case 1:
                return 'nn.niu1';
            case 2:
                return 'nn.niu2';
            case 3:
                return 'nn.niu3';
            case 4:
                return 'nn.niu4';
            case 5:
                return 'nn.niu5';
            case 6:
                return 'nn.niu6';
            case 7:
                return 'nn.niu7';
            case 8:
                return 'nn.niu8';
            case 9:
                return 'nn.niu9';
            case 10:
                return 'nn.niuniu';
            case 11:
                return 'nn.playNiuZhadan';
            case 12:
                return 'nn.playNiu5hua';
            case 13:
                return 'nn.playNiuXiao5';
        }
    };
    //筹码类型        1000w   5000w   1y  3y  5y
    BRNNUtil.prototype.coinsType = function (pos, num) {
        var coinArr = [];
        var coinNum = 0;
        var src = '';
        if (num == 2) {
            coinNum = num;
            src = 'brnn_couma_1_1_png';
        }
        else if (num == 5) {
            coinNum = num;
            src = 'brnn_couma_1_2_png';
        }
        else if (num == 10) {
            coinNum = num;
            src = 'brnn_couma_1_3_png';
        }
        else if (num == 20) {
            coinNum = num;
            src = 'brnn_couma_1_4_png';
        }
        else if (num == 50) {
            coinNum = num;
            src = 'brnn_couma_1_5_png';
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
    BRNNUtil.prototype.coinPos = function () {
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
    BRNNUtil.prototype.getSoundEffect = function (type) {
        switch (type) {
            case 0:
                return 'bgm'; //背景音乐
            case 1:
                return 'nn.jackpot'; //自己赢得最多
            case 2:
                return 'nn.start'; //下注开始
            case 3:
                return 'nn.end'; //下注结束
            case 4:
                return 'nn.ts'; //通杀
            case 5:
                return 'nn.tp'; //通赔
            case 6:
                return 'nn.dealCard'; //发牌
            case 7:
                return 'nn.openCard'; //开牌
            case 8:
                return 'nn.stake'; //筹码
        }
    };
    BRNNUtil.instance = null;
    return BRNNUtil;
}());
__reflect(BRNNUtil.prototype, "BRNNUtil");
//# sourceMappingURL=BRNNUtil.js.map