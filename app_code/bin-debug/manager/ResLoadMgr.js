var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var xlLib;
(function (xlLib) {
    /**
    * 资源加载管理(单例)
    */
    var ResLoadMgr = (function (_super) {
        __extends(ResLoadMgr, _super);
        function ResLoadMgr() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._autoHide = true;
            _this._curLoadingId = 0;
            _this._currentLoadIndex = 0;
            return _this;
        }
        Object.defineProperty(ResLoadMgr, "instance", {
            get: function () {
                if (this._self == null) {
                    this._self = new ResLoadMgr();
                    this._self.initLoadingUI();
                }
                return this._self;
            },
            enumerable: true,
            configurable: true
        });
        ResLoadMgr.prototype.initLoadingUI = function () {
            this._loadingMap = {};
            this._thisObj = {};
            this._loadSucc = {};
            this._loadError = {};
        };
        /**
         * 加载资源组
         */
        ResLoadMgr.prototype.load = function (groupName, loadSucc, loadError, thisObj, loadIngClass, autoHideLoadUI, isprocess, mustResList) {
            if (autoHideLoadUI === void 0) { autoHideLoadUI = true; }
            if (isprocess === void 0) { isprocess = true; }
            if (!isprocess || isprocess == null) {
                isprocess = true;
            }
            if (loadIngClass) {
                this._loadingClass = loadIngClass;
                if (isprocess) {
                    xlLib.UIMgr.instance.showProcessBar(loadIngClass);
                }
                else {
                    xlLib.UIMgr.instance.showLoadingTimeout(loadIngClass);
                }
            }
            else {
                this._loadingClass = xlLib.UIMgr.instance.commonLoadUI;
            }
            if (mustResList) {
                xlLib.ResUtils.setMustRes(mustResList);
            }
            // if (this._loadSucc)
            //     this._loadSucc = null;
            // if (this._loadError)
            //     this._loadError = null;
            // if (this._thisObj)
            //     this._thisObj = null;
            if (loadSucc)
                this._loadSucc[groupName] = loadSucc;
            if (loadError)
                this._loadError[groupName] = loadError;
            if (thisObj)
                this._thisObj[groupName] = thisObj;
            this._autoHide = autoHideLoadUI;
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onxlLibResLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onxlLibResLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onxlLibResProgress, this);
            RES.loadGroup(groupName);
        };
        /**
         * 加载多个资源组(暂未实现完)
         * @param groups
         * @param loadSucc
         * @param loadError
         * @param thisObj
         * @param loadIngClass
         */
        ResLoadMgr.prototype.loadArr = function (groups, loadSucc, loadError, thisObj, loadIngClass) {
            if (this._currentLoadArr && this._currentLoadArr.length > 0) {
                this._currentLoadArr.concat(groups);
            }
            else {
                this._currentLoadArr = groups;
                this._currentLoadIndex = 0;
            }
        };
        ///**
        // * 加载资源组
        // */
        //public load(groupname: string, gameId?: number): void {
        //    if (gameId)
        //        this._curLoadingId = gameId;
        //    //this._loadingUI.show();
        //    RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        //    RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        //    RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        //    RES.loadGroup(groupname);
        //}
        /**
         * 资源组加载完成
         */
        ResLoadMgr.prototype.onxlLibResLoadComplete = function (event) {
            var grpName = event.groupName;
            if (event.groupName) {
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onxlLibResLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onxlLibResLoadError, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onxlLibResProgress, this);
            }
            if (this._loadingClass && this._autoHide == true)
                xlLib.UIMgr.instance.hideLoading(this._loadingClass);
            if (this._loadingClass)
                this._loadingClass = null;
            if (this._loadSucc[grpName]) {
                this._loadSucc[grpName].call(this._thisObj[grpName], event);
            }
            this.removeLoadDic(grpName);
        };
        /**
        * 资源组加载出错
        */
        ResLoadMgr.prototype.onxlLibResLoadError = function (event) {
            //TODO
            var grpName = event.groupName;
            xlLib.Console.warn("Group:" + event.groupName + " has failed to load");
            //忽略加载失败的项目
            if (event.groupName) {
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onxlLibResLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onxlLibResLoadError, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onxlLibResProgress, this);
                if (this._loadError[grpName])
                    this._loadError[grpName].call(this._thisObj[grpName], event);
                // this.removeRefrence();
                this.removeLoadDic(grpName);
            }
        };
        ResLoadMgr.prototype.removeLoadDic = function (grpName) {
            this._loadError[grpName] = null;
            delete this._loadError[grpName];
            this._thisObj[grpName] = null;
            delete this._thisObj[grpName];
            this._loadSucc[grpName] = null;
            delete this._loadSucc[grpName];
        };
        /**
         * 资源组加载进度
         */
        ResLoadMgr.prototype.onxlLibResProgress = function (event) {
            //this._loadingUI.setProgress(event.groupName, event.itemsLoaded, event.itemsTotal);
            if (this._loadingClass)
                xlLib.UIMgr.instance.showProcessBar(this._loadingClass, event.itemsLoaded, event.itemsTotal, "", event.groupName);
        };
        ResLoadMgr.prototype.removeRefrence = function () {
            if (this._loadSucc)
                this._loadSucc = null;
            if (this._loadingClass)
                this._loadingClass = null;
            if (this._loadError)
                this._loadSucc = null;
            if (this._thisObj)
                this._thisObj = null;
        };
        return ResLoadMgr;
    }(egret.EventDispatcher));
    ResLoadMgr._self = null;
    xlLib.ResLoadMgr = ResLoadMgr;
    __reflect(ResLoadMgr.prototype, "xlLib.ResLoadMgr");
})(xlLib || (xlLib = {}));
