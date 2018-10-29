module xlLib {
    export interface IOrderInfo {
        /**
         * 第三方平台订单号
         */
        platOrder: string,
        /**
         * 游戏订单号
         */
        gameOrder: string,
        /**
         * 支付签名
         */
        sign: string,
        
        /**
         * 货币名称
         */
        currencyName:string,
        
        /**
         * 商品名称
         */
        goodName: string,
        /**
         * 商品单价
         */
        price: number,
        /**
         * 商品数量
         */
        count: number,
        
        /**
         * 充值游戏币数量
         */
        currency:number,

        /**
         * 第三方支付地址
         */
        payUrl: string,

        /**
        * 支付回调地址
        */
        noticeurl: string,

        /**
        * 商品ID(可选项,9g平台使用)
        */
        goodId: string,
        
        /**
         * 用户ID
         */
        uid: string,

        creatTime: number,

        payplatid: string
    }
}