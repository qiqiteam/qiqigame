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
    /**点数音乐 */
    public dianshuSoundEffect(type): string {
        switch (type) {
            case 0:
                return 'bjl_00_zero';    //0点
            case 1:
                return 'bjl_11_one';    //1点
            case 2:
                return 'bjl_12_two';    //2点
            case 3:
                return 'bjl_13_three';    //3点
            case 4:
                return 'bjl_14_four';    //4点
            case 5:
                return 'bjl_15_five';    //5点
            case 6:
                return 'bjl_16_six';    //6点
            case 7:
                return 'bjl_17_seven';    //7点
            case 8:
                return 'bjl_18_eight';    //8点
            case 9:
                return 'bjl_19_nine';    //9点
        }
    }
    /**音乐 */
    public getSoundEffect(type): string {
        switch (type) {
            case 0:
                return 'bjl_35_bg_imi';    //背景音乐
            case 1:
                return 'jh.jackpot'; //自己赢得最多
            case 2:
                return 'bjl_02_start';   //下注开始
            case 3:
                return 'bjl_03_stop'; //下注结束
            case 4:
                return 'jh.ts';  //通杀
            case 5:
                return 'jh.tp';  //通赔
            case 6:
                return 'jh.dealCard';  //发牌
            case 7:
                return 'jh.openCard';  //开牌
            case 8:
                return 'lh_chipfly_long';   //筹码
            case 9:
                return 'Special_menu';   //按钮点击
            case 10:
                return 'bjl_01_deal';   //我发牌了
            case 11:
                return 'bjl_20_bankwin';   //庄赢
            case 12:
                return 'bjl_21_playwin';   //闲赢
            case 13:
                return 'bjl_22_tie';   //和
            case 14:
                return 'bjl_08_player';   //闲家
            case 15:
                return 'bjl_09_banker';   //庄家 
            case 16:
                return 'bjl_10_draw';   //补牌
        }
    }

    public getCoinsPos(index: Number): egret.Point {
        var point: egret.Point = new egret.Point();
        switch (index) {
            case 1:                 // 1是庄
                point.x = 920;
                point.y = 240;
                break;
            case 2:                 // 2是闲
                point.x = 260;
                point.y = 240;
                break;
            case 3:                 // 3是和       
                point.x = 590;
                point.y = 430;
                break;
            case 4:                 // 4是庄对
                point.x = 930;
                point.y = 430;
                break;
            case 5:                 // 5是闲对
                point.x = 260;
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
    public coinsType(pos: egret.Point, num: number):eui.Image {
        var src: string = '';
        if (num == 4) {  //4
            src = 'baccarat_game_icon_chouma_4_png';
        }
        else if (num == 10) {   //10
            src = 'baccarat_game_icon_chouma_10_png';
        }
        else if (num == 20) {   //10
            src = 'baccarat_game_icon_chouma_20_png';
        }
        else if (num == 50) { //50
            src = 'baccarat_game_icon_chouma_50_png';
        }
        else if (num == 100) { //100
            src = 'baccarat_game_icon_chouma_100_png';
        } else if (num == 200) { //500
            src = 'baccarat_game_icon_chouma_200_png';
        }
        var coin: eui.Image = new eui.Image(src);
        coin.x = pos.x;
        coin.y = pos.y;
        coin.scaleX = 0.3;
        coin.scaleY = 0.3;
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
}