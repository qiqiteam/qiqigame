class BJLRoadUtil {
    /**
     * 获取百家乐珠子数据
     */
    public static getRoadResult(result: number): number {
        var bankPlayTie: number = result & 0x0f;
        bankPlayTie = BJLRoadUtil.getbankPlayTie(bankPlayTie);

        var pair: number = result >> 4 & 0x0f;
        pair = BJLRoadUtil.getpair(pair);

        // var bigSmall: number = result >> 8;
        // bigSmall = this.getbigSmall(bigSmall);

        var num: number = bankPlayTie + pair;
        var id: number = 0;
        switch (num) {
            case 3://和局
                id = 9;
                break;
            case 203://和局闲对
                id = 11;
                break;
            case 103://和局庄对
                id = 10;
                break;
            case 303://和局庄闲对
                id = 12;
                break;
            case 2://闲赢
                id = 5;
                break;
            case 202://闲赢闲对
                id = 7;
                break;
            case 102://闲赢庄对
                id = 6;
                break;
            case 302://闲赢庄闲对
                id = 8;
                break;
            case 1://庄赢
                id = 1;
                break;
            case 201://庄赢闲对
                id = 3;
                break;
            case 101://庄赢庄对
                id = 2;
                break;
            case 301://庄赢庄闲对
                id = 4;
                break;
            default:
                break;
        }
        return id;
    }

    public static getbankPlayTie(num: number): number {
        if (num == 1) {//闲
            return 2;
        } else if (num == 2) {//庄
            return 1;
        } else if (num == 3) {//和
            return 3;
        }
        return 0;
    }

    public static getpair(num: number): number {
        if (num == 4) {//闲对
            return 200;
        } else if (num == 5) {//庄对
            return 100;
        } else if (num == 6) {//庄闲对
            return 300;
        }
        return 0;
    }

    public static getbigSmall(num: number): number {
        if (num == 8) {//大
            return 20;
        } else if (num == 7) {//小
            return 10;
        }
        return 0;
    }
}