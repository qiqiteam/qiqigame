module xlLib {
    /**
    * 场景接口
    */
    export interface ILoading {

        /**
        * 设置加载进度
        */
        setProgress(current, total): void;
    }
}