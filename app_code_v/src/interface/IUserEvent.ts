module xlLib {
    /**
     * 自定义事件类
     */
    export interface IUserEventData {

        /**
        * 事件子类型
        */
        tp: string;

        /**
        * 事件数据
        */
        data: any;

    }
}