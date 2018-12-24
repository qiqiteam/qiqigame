class BRNNUtil {
    private static instance: BRNNUtil = null;
    public constructor() {
        if (BRNNUtil.instance) {
            throw new Error("Instance is alreally exist");
        }
    }

    public static getInstance(): BRNNUtil {
        if (this.instance == null) {
            this.instance = new BRNNUtil();
        }
        return this.instance;
    }

    //获取筹码数量    1w  10w     100w    1000w   5000w   1y
    public getBetNumber(index): number {
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
    }

    //提示消息类型    2开始下注  3下注结束 4 庄家通杀  5 庄家通赔
    public getMsgSource(type): string {
        var src = '';
        switch (type) {
            case 2:
                src = 'nn.d2'
                break;
            case 3:
                src = 'nn.d3'
                break;
            case 4:
                src = 'nn.d4'
                break;
            case 5:
                src = 'nn.d5'
                break;
        }
        return src;
    }

    public getCoinsPos(index): egret.Point {
        var point: egret.Point = new egret.Point();
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
    }

    public getCardType2(index): string {
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
    }
    public getCardType(index): string {
        switch (index) {
            case 0:
                return 'brnntype_normal_0_png';
            case 1:
                return 'brnntype_normal_1_png';
            case 2:
                return 'brnntype_normal_2_png';
            case 3:
                return 'brnntype_normal_3_png';
            case 4:
                return 'brnntype_normal_4_png';
            case 5:
                return 'brnntype_normal_5_png';
            case 6:
                return 'brnntype_normal_6_png';
            case 7:
                return 'brnntype_normal_7_png';
            case 8:
                return 'brnntype_normal_8_png';
            case 9:
                return 'brnntype_normal_9_png';
            case 10:
                return 'brnntype_win_0_png';
            case 11:
                return 'brnntype_normal_14_png';
            case 12:
                return 'brnntype_normal_13_png';
            case 13:
                return 'brnntype_normal_12_png';
        }
    }
    public getCardMusicType(index): string {
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
    }

    //筹码类型        1000w   5000w   1y  3y  5y
    public coinsType(pos: egret.Point, num: number) {
        var src: string = '';
        if (num == 2) {  //2
            src = 'brnn_couma_1_1_png';
        }
        else if (num == 5) {   //5
            src = 'brnn_couma_1_2_png';
        }
        else if (num == 10) {   //10
            src = 'brnn_couma_1_3_png';
        }
        else if (num == 20) { //20
            src = 'brnn_couma_1_4_png';
        }
        else if (num == 50) { //50
            src = 'brnn_couma_1_5_png';
        }
        var coin:BRNNCoin = new BRNNCoin();
        coin.source = src;
        //coin.anchorOffsetX = coin.width / 2,
        //coin.anchorOffsetY = coin.height / 2;
        coin.x = pos.x;
        coin.y = pos.y;
        coin.scaleX = 0.3;
        coin.scaleY = 0.3;
        coin.setType(num);
        return coin;
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

    public getSoundEffect(type): string {
        switch (type) {
            case 0:
                return 'bgm';    //背景音乐
            case 1:
                return 'nn.jackpot'; //自己赢得最多
            case 2:
                return 'nn.start';   //下注开始
            case 3:
                return 'nn.end'; //下注结束
            case 4:
                return 'nn.ts';  //通杀
            case 5:
                return 'nn.tp';  //通赔
            case 6:
                return 'nn.dealCard';  //发牌
            case 7:
                return 'brnn_fanpai';  //开牌
            case 8:
                return 'nn.stake';   //筹码
        }
    }
}