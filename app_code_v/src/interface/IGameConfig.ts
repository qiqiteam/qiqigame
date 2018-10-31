module xlLib {
    export class IGameConfig {

        id: number;
        /**
         * 游戏ID
         */
        gameId: number;
        /**
         * 游戏文档类
         */
        gameDoc: string;
        /**
        * 游戏状态
        */
        status: number;
        /**
         * 游戏文档类
         */
        gameResConfigUrl: string;
        /**
         * 游戏文档类
         */
        gameResRoot: string;
        /**
         * 游戏文档类
         */
        preLoad: string;
        /**
         * 游戏名称
         */
        gameName: string;
        /**
         * 游戏介绍
         */
        gameDes: string;
        /**
         * 游戏代码URL
         */
        gameCodeUrl: string;
        /**
         * 游戏在大厅图标
         */
        gameIconUrl: string;
        /**
         * 游戏分享地址
         */
        gameShareUrl: string;
        /**
         * 游戏图标上的mark
         */
        markIconUrl: string;

        /**
        * 是否有选场
        */
        selectScene: number;

        /**
        * 皮肤配置
        */
        gameTheme: string;

        /**
        * 扩展字段
        */
        extData: any;
    
        /**
         * 是否显示返回按钮
         */
        showBack: boolean = true;

        /**
        * 游戏默认朝向
        */
        defaultOrientation: string = "auto";

        preloadUI: any;

        /**
        * 退出时是否销毁资源
        */
        destroyResOnExit: boolean;

        /**
        * 是否体验币模式 true有体验币 false无体验币
        */
        hasTestChips: boolean = false;

        /**
        * 游戏分类
        */
        category: number;

        /**
        * 游戏状态分类 0直接进游戏场景 1只有选场  2即有选场又有选桌
        */ 
        gameType: number;

        /**
        * 游戏进入所需的最小资源组
        */
        minResGroup: string;

        /**
        * 货币比例
        */
        currencyNum: number;

        /**
        * 货币单位
        */
        currency: string;

        /**
        * 是否允许充值
        */
        rechargeEnable: boolean;
    }
}