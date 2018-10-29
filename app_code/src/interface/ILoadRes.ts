module xlLib {
    /**
    * 单个资源加载项目
    */
    export interface ILoadRes {
        /**
        * 资源组名称
        */
        groupName: string,

        /**
        * 资源组描述,在加载资源是显示
        */
        groupDes: string
    }
}