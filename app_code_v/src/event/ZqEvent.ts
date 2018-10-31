module xlLib {
    /**
     * 自定义事件类
     */
    export class ZqEvent {

        /**
         * 房间聊天事件
         */
        public static CHAT_ROOM: string = "chat_room";
        
        /**
         * 私聊事件
         */
        public static CHAT_PRIVATE: string = "chat_private";

        /**
         * 系统公告
         */
        public static CHAT_SYSTEM: string = "chat_system";
        /**
         * 系统紧急公告
         */ 
        public static CHAT_IMPORTANT: string = "chat_important";
        /**
         * 大厅发给房间 通知后台公告
         */
        public static EVENT_L2G_NOTICE:string = "event_l2g_notice";
        /**
         * GM消息
         */
        public static CHAT_GM: string = "chat_gm";

        public static GM_BEFORE: string = "gm_before";

        public static GM_END: string = "gm_end";
        
        /**
         * 用户喇叭
         */ 
        public static CHAT_HORN: string = "chat_horn";

        /**
        * 用户信息
        */
        public static USER_INFO: string = "user_info";
        /**
         * 退出游戏 大厅请求刷新用户信息
         */ 
        public static UPDATE_USER_INFO: string = "update_user_info";

        public static CHECK_VERSION_UPDATE: string = "check_version_update";

        /**
        * 公用模块
        */
        public static COMMON_MODEL: string = "common_model";

        /**
        * 公用模块
        */
        //public static COMMON_EVENT: string = "common_event";

        /**
        * 大厅发送给游戏
        */
        public static EVENT_L2G: string = "event_l2g";

        /**
        * 游戏发送给大厅
        */
        public static EVENT_G2L: string = "event_g2l";

        public static EVENT_ACTIVE_SOCKET_CACHE_OK: string = "on_active_socket_cache_ok";

        public static EVENT_SERVER_SHUTDOWN: string = "on_server_shutdown";

        public static EVENT_SERVER_DEBUG_LEVEL: string = "on_server_debug_level";
        /**
        * GM命令事件
        */
        public static GM_INFO: string = "gm_info";

        public static KICK_OUT: string = "kick_out";


        /**
        * 断线重连成功
        */
        public static ON_RECONNEC: string = "on_reconnect";

        public static ON_SERVER_SHUTDOWN: string = "on_server_shutdown";

        public static ON_GETZONEINFO: string = "on_get_zoneinfo";

        /**
        * 通知重启事件
        */
        public static ON_RESTART: string = "on_restart";

        /**
         * 网络重连失败事件
         */
        public static RECONNECT_FAIL: string = "reconnect_fail";

        /**
        * 网络异常
        */
        public static NET_ERRER: string = "net_error";

        public static SHARE: string = "share";

        public static TASK_EVENT: string = "task_event";

        /**
        * 在线用户数量事件
        */
        public static ONLINE_NUM: string = "online_num";
        
        /*
         * 隐藏左右滑动提示
         */         
        public static HIDE_SLIP_GAME_GUIDE: string = "hide_slip_game_guide";
        /**
         * 舞台大小发生变化
         */
        //public static STAGE_RESIZE: string = "stage_resize";

        public CLASS_NAME: string = "ZqEvent";
        
        /**
         * 底层向egret层发送消息事件
         */
        public static NATIVE_TO_EGERET: string = "native_to_egret";
        
        private _obj: any;
        public constructor(type: string, obj?: any, bubbles: boolean = false, cancelable: boolean = false) {
            //super(type, bubbles, cancelable);
            //if (obj) {
            this.type = type;
            this._obj = obj;
            //}
        }

        public clone(obj?: any): ZqEvent {
            return new ZqEvent(this.type, obj ? obj : this._obj);
        }

        public toString(): void {
            xlLib.Console.log(this.CLASS_NAME, "type", "bubbles", "cancelable");
        }

        /**
         * 传参获取
         * @returns {Object}
         */
        public get param(): any {
            return this._obj;
        }
        public type: string;

    }
}
