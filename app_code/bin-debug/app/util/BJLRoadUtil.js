var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BJLRoadUtil = (function () {
    function BJLRoadUtil() {
    }
    /**
     * 获取百家乐珠子数据
     */
    BJLRoadUtil.getRoadResult = function (result) {
        var bankPlayTie = result & 0x0f;
        bankPlayTie = BJLRoadUtil.getbankPlayTie(bankPlayTie);
        var pair = result >> 4 & 0x0f;
        pair = BJLRoadUtil.getpair(pair);
        // var bigSmall: number = result >> 8;
        // bigSmall = this.getbigSmall(bigSmall);
        var num = bankPlayTie + pair;
        var id = 0;
        switch (num) {
            case 3:
                id = 9;
                break;
            case 203:
                id = 11;
                break;
            case 103:
                id = 10;
                break;
            case 303:
                id = 12;
                break;
            case 2:
                id = 5;
                break;
            case 202:
                id = 7;
                break;
            case 102:
                id = 6;
                break;
            case 302:
                id = 8;
                break;
            case 1:
                id = 1;
                break;
            case 201:
                id = 3;
                break;
            case 101:
                id = 2;
                break;
            case 301:
                id = 4;
                break;
            default:
                break;
        }
        return id;
    };
    BJLRoadUtil.getbankPlayTie = function (num) {
        if (num == 1) {
            return 2;
        }
        else if (num == 2) {
            return 1;
        }
        else if (num == 3) {
            return 3;
        }
        return 0;
    };
    BJLRoadUtil.getpair = function (num) {
        if (num == 4) {
            return 200;
        }
        else if (num == 5) {
            return 100;
        }
        else if (num == 6) {
            return 300;
        }
        return 0;
    };
    BJLRoadUtil.getbigSmall = function (num) {
        if (num == 8) {
            return 20;
        }
        else if (num == 7) {
            return 10;
        }
        return 0;
    };
    return BJLRoadUtil;
}());
__reflect(BJLRoadUtil.prototype, "BJLRoadUtil");
//# sourceMappingURL=BJLRoadUtil.js.map