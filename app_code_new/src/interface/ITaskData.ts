module xlLib {
    /**
    * 任务事件
    */
    export interface ITaskData {
        /**
        * 操作 xlLib.TaskEventEnum 
        */
        action: number;
        /**
        * 限制条件
        */
        limit: number;
    }
}