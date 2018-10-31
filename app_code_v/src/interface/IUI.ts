module xlLib {
    /**
    * UI接口
    */
    export interface IUI {

        /**
        * 更新UI数据
        */
        updateUIData(): void;

        /**
        * UI销毁方法
        */
        destroy(): void;

        resize(): void;
    }
}