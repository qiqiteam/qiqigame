class RBGUtil {
    private static instance: RBGUtil = null;
    public constructor() {
        if (RBGUtil.instance) {
            throw new Error("Instance is alreally exist");
        }
    }

    public static getInstance(): RBGUtil {
        if (this.instance == null) {
            this.instance = new RBGUtil();
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
                point.x = 195;
                point.y = 523;
                break;
            case 2:
                point.x = 383;
                point.y = 523;
                break;
            case 3:
                point.x = 195;
                point.y = 633;
                break;
            case 4:
                point.x = 383;
                point.y = 633;
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

    //筹码类型
    public coinsType(index, num):eui.Image {
        var src: string = '';
        if (num == 0) {  //10
            src = 'bar_chip_10_png';
        }
        else if (num == 1) {    //50
            src = 'bar_chip_50_png';
        }
        else if (num == 2) {  //100
            src = 'bar_chip_100_png';
        }
        else if (num == 3) { //500
            src = 'bar_chip_500_png';
        }
        else if (num == 4) { //2000
            src = 'bar_chip_2000_png';
        }
        else if (num == 5) { //10000
            src = 'bar_chip_10000_png';
        }
        var coin: eui.Image = new eui.Image(src);
        return coin;
    }

    public coinPos(index): egret.Point {
        var p: egret.Point = new egret.Point();
        switch (index) {
            case 0:
                p.x = 737;
                p.y = 635;
                break;
            case 1:
                p.x = 100;
                p.y = 350;
                break;
            case 2:
                p.x = 737;
                p.y = 115;
                break;
            case 3:
                p.x = 1365;
                p.y = 350;
                break;
        }
        return p;
    }

    public getSoundEffect(type): string {
        switch (type) {
            case 0:
                return 'bgm';
            case 1:
                return 'bar_game_start';
            case 2:
                return 'bar_game_start_0';
            case 3:
                return 'bar_player_select';
            case 4:
                return 'bar_player_selected';
            case 5:
                return 'bar_drop_coin';
            case 6:
                return 'bar_throw_dice';
            case 7:
                return 'bar_send_card';
            case 8:
                return 'bar_open_card';
            case 9:
                return 'bar_player_win';
        }
    }
}