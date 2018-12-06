var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    /**
     * 自定义事件类
     */
    var ZqEvent = (function () {
        function ZqEvent(type, obj, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            /**
             * 舞台大小发生变化
             */
            //public static STAGE_RESIZE: string = "stage_resize";
            this.CLASS_NAME = "ZqEvent";
            //super(type, bubbles, cancelable);
            //if (obj) {
            this.type = type;
            this._obj = obj;
            //}
        }
        ZqEvent.prototype.clone = function (obj) {
            return new ZqEvent(this.type, obj ? obj : this._obj);
        };
        ZqEvent.prototype.toString = function () {
            xlLib.Console.log(this.CLASS_NAME, "type", "bubbles", "cancelable");
        };
        Object.defineProperty(ZqEvent.prototype, "param", {
            /**
             * 传参获取
             * @returns {Object}
             */
            get: function () {
                return this._obj;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 房间聊天事件
         */
        ZqEvent.CHAT_ROOM = "chat_room";
        /**
         * 私聊事件
         */
        ZqEvent.CHAT_PRIVATE = "chat_private";
        /**
         * 系统公告
         */
        ZqEvent.CHAT_SYSTEM = "chat_system";
        /**
         * 系统紧急公告
         */
        ZqEvent.CHAT_IMPORTANT = "chat_important";
        /**
         * 大厅发给房间 通知后台公告
         */
        ZqEvent.EVENT_L2G_NOTICE = "event_l2g_notice";
        /**
         * GM消息
         */
        ZqEvent.CHAT_GM = "chat_gm";
        ZqEvent.GM_BEFORE = "gm_before";
        ZqEvent.GM_END = "gm_end";
        /**
         * 用户喇叭
         */
        ZqEvent.CHAT_HORN = "chat_horn";
        /**
        * 用户信息
        */
        ZqEvent.USER_INFO = "user_info";
        /**
         * 退出游戏 大厅请求刷新用户信息
         */
        ZqEvent.UPDATE_USER_INFO = "update_user_info";
        ZqEvent.CHECK_VERSION_UPDATE = "check_version_update";
        /**
        * 公用模块
        */
        ZqEvent.COMMON_MODEL = "common_model";
        /**
        * 公用模块
        */
        //public static COMMON_EVENT: string = "common_event";
        /**
        * 大厅发送给游戏
        */
        ZqEvent.EVENT_L2G = "event_l2g";
        /**
        * 游戏发送给大厅
        */
        ZqEvent.EVENT_G2L = "event_g2l";
        ZqEvent.EVENT_ACTIVE_SOCKET_CACHE_OK = "on_active_socket_cache_ok";
        ZqEvent.EVENT_SERVER_SHUTDOWN = "on_server_shutdown";
        ZqEvent.EVENT_SERVER_DEBUG_LEVEL = "on_server_debug_level";
        /**
        * GM命令事件
        */
        ZqEvent.GM_INFO = "gm_info";
        ZqEvent.KICK_OUT = "kick_out";
        /**
        * 断线重连成功
        */
        ZqEvent.ON_RECONNEC = "on_reconnect";
        ZqEvent.ON_SERVER_SHUTDOWN = "on_server_shutdown";
        ZqEvent.ON_GETZONEINFO = "on_get_zoneinfo";
        /**
        * 通知重启事件
        */
        ZqEvent.ON_RESTART = "on_restart";
        /**
         * 网络重连失败事件
         */
        ZqEvent.RECONNECT_FAIL = "reconnect_fail";
        /**
        * 网络异常
        */
        ZqEvent.NET_ERRER = "net_error";
        ZqEvent.SHARE = "share";
        ZqEvent.TASK_EVENT = "task_event";
        /**
        * 在线用户数量事件
        */
        ZqEvent.ONLINE_NUM = "online_num";
        /*
         * 隐藏左右滑动提示
         */
        ZqEvent.HIDE_SLIP_GAME_GUIDE = "hide_slip_game_guide";
        /**
         * 底层向egret层发送消息事件
         */
        ZqEvent.NATIVE_TO_EGERET = "native_to_egret";
        return ZqEvent;
    }());
    xlLib.ZqEvent = ZqEvent;
    __reflect(ZqEvent.prototype, "xlLib.ZqEvent");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=ZqEvent.js.map