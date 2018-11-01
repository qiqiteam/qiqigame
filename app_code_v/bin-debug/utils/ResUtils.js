var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    /**
   * 资源工具
   */
    var ResUtils = (function () {
        function ResUtils() {
        }
        ResUtils.resetSoundLoadTimes = function () {
            for (var i in this._resRequestSoundLoadTimes) {
                this._resRequestSoundLoadTimes[i] = null;
                delete this._resRequestSoundLoadTimes[i];
            }
        };
        ResUtils.setMustRes = function (reslist) {
            try {
                this._mustResList = [];
                for (var key in reslist) {
                    var item = reslist[key];
                    if (item && item.resName && this._mustResList.indexOf(item.resName) == -1) {
                        this._mustResList.push(item.resName);
                    }
                }
            }
            catch (e) {
                xlLib.Console.warn("setMustRes:必须资源列表出错,请检查必须资源列表格式");
            }
        };
        ResUtils.init = function () {
            if (this.inited == false) {
                this.inited = true;
                RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
                egret.startTick(this.onDragonBonesTick, egret.MainContext.instance.stage);
            }
        };
        ResUtils.onDragonBonesTick = function (timeStamp) {
            dragonBones["WorldClock"].clock.advanceTime(-1);
            return true;
        };
        ResUtils.onItemLoadError = function (event) {
            //if (event.resItem.name.indexOf("js") != -1) {
            //    xlLib.Console.error("RES.ResourceEvent.ITEM_LOAD_ERROR:", event.resItem.name);
            //} else {
            //    xlLib.Console.warn("RES.ResourceEvent.ITEM_LOAD_ERROR:", event.resItem.name);
            //}
            if (this._mustResList.indexOf(event.resItem.name) >= 0) {
                xlLib.Utils.restart(event.resItem.name + "资源加载失败,请重新启动游戏", "确定");
            }
        };
        //private static mcPool: ObjectFactoryGroup = new ObjectFactoryGroup();
        /**
        * @language zh_CN
        * 解析素材
        * @param source 待解析的新素材标识符
        * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
        * @param thisObject callBack的 this 引用
        */
        ResUtils.getRes = function (source, compFunc, thisObject, type) {
            var self = this;
            function onGetRes(data) {
                if (self._needLoadDicCallBack[source]) {
                    while (self._needLoadDicCallBack[source].length > 0) {
                        var load = self._needLoadDicCallBack[source].shift();
                        load[0].call(load[1], data, source);
                    }
                    delete self._needLoadDicCallBack[source];
                }
                else {
                    if (thisObject != null) {
                        compFunc.call(thisObject, data, source);
                    }
                    else {
                        if (compFunc)
                            compFunc(data, source);
                    }
                }
                if (self._loadingDic.indexOf(source) != -1) {
                    self._asynLoadLevel--;
                    self._loadingDic.splice(self._loadingDic.indexOf(source), 1);
                }
                if (self._needloadDic.length > 0 && this._asynLoadLevel < this.MAX_LOAD_LEVEL) {
                    var loadResName = self._needloadDic.shift();
                    self.getRes(loadResName, onGetRes, self);
                }
            }
            function soundLoaded(evt) {
                self._resRequestSoundLoadTimes[source] = 0;
                var loader2 = evt.target;
                loader2.removeEventListener(egret.Event.COMPLETE, soundLoaded, self);
                loader2.removeEventListener(egret.IOErrorEvent.IO_ERROR, onSoundLoadError, self);
                var sound = loader2.data;
                if (compFunc) {
                    compFunc(sound, source);
                }
            }
            function onSoundLoadError(evt) {
                var loader2 = evt.target;
                loader2.removeEventListener(egret.Event.COMPLETE, soundLoaded, self);
                loader2.removeEventListener(egret.IOErrorEvent.IO_ERROR, onSoundLoadError, self);
                xlLib.Console.error("加载资源失败：" + source);
                if (self._resRequestSoundLoadTimes[source] != null) {
                    if (self._resRequestSoundLoadTimes[source] > 0) {
                        self._resRequestSoundLoadTimes[source]--;
                        var loader = new egret.URLLoader();
                        //设置加载方式为声音
                        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
                        //添加加载完成侦听
                        loader.once(egret.Event.COMPLETE, soundLoaded, self);
                        loader.once(egret.IOErrorEvent.IO_ERROR, onSoundLoadError, self);
                        var resConfig = RES["configInstance"];
                        var item = resConfig.getResourceItem(source);
                        var url = RES.getVersionController().getVirtualUrl(item.url);
                        var request = new egret.URLRequest(url);
                        //开始加载
                        loader.load(request);
                    }
                }
            }
            if (type == egret.URLLoaderDataFormat.SOUND) {
                if (this._resRequestSoundLoadTimes[source] == null) {
                    this._resRequestSoundLoadTimes[source] = 1;
                }
                else if (this._resRequestSoundLoadTimes[source] == 0) {
                    return;
                }
                else {
                    this._resRequestSoundLoadTimes[source]++;
                    return;
                }
                var loader = new egret.URLLoader();
                //设置加载方式为声音
                loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
                //添加加载完成侦听
                loader.once(egret.Event.COMPLETE, soundLoaded, self);
                loader.once(egret.IOErrorEvent.IO_ERROR, onSoundLoadError, self);
                var resConfig = RES["configInstance"];
                var item = resConfig.getResourceItem(source);
                if (item != null) {
                    var url = RES.getVersionController().getVirtualUrl(item.url);
                    //Console.error("将要加载资源：" + source + ":" + url + ":" + item.url);
                    var request = new egret.URLRequest(url);
                    //开始加载
                    loader.load(request);
                }
                else {
                    xlLib.Console.error("找不到将要加载的资源：" + source + "\t" + url);
                }
            }
            else {
                if (RES.hasRes(source)) {
                    var data = RES.getRes(source);
                    if (data) {
                        onGetRes(data);
                    }
                    else {
                        if (this._loadingDic.indexOf(source) >= 0) {
                            var need = [compFunc, thisObject];
                            if (this._needLoadDicCallBack[source] == null)
                                this._needLoadDicCallBack[source] = [];
                            this._needLoadDicCallBack[source].push(need);
                            return;
                        }
                        else {
                            if (this._asynLoadLevel < this.MAX_LOAD_LEVEL) {
                                this._loadingDic.push(source);
                                this._asynLoadLevel++;
                                RES.getResAsync(source, onGetRes, this);
                            }
                            else {
                                var need = [compFunc, thisObject];
                                if (this._needloadDic.indexOf(source) == -1) {
                                    this._needloadDic.push(source);
                                }
                                if (this._needLoadDicCallBack[source] == null)
                                    this._needLoadDicCallBack[source] = [];
                                this._needLoadDicCallBack[source].push(need);
                            }
                        }
                    }
                }
                else {
                    RES.getResByUrl(source, onGetRes, this);
                }
            }
        };
        /**
         * 退出游戏时清理游戏的组和对应资源配置
         */
        ResUtils.clearResConfigByConfigName = function (arr) {
            var configRes = RES["configInstance"];
            for (var key in configRes.groupDic) {
                var group = configRes.groupDic[key];
                for (var keyname in group) {
                    if (arr.indexOf(keyname) >= 0) {
                        if (configRes.keyMap[group[keyname].name]) {
                            group[keyname].name = null;
                            delete group[keyname].name;
                        }
                    }
                }
                configRes.groupDic[key] = null;
                delete configRes.groupDic[key];
            }
        };
        /**
        * 退出游戏时通过资源组名清除资源
        * @groupArr 需要清除的资源组数组
        */
        ResUtils.clearResConfigByGroupName = function (groupArr) {
            var configRes = RES["configInstance"];
            for (var i = 0; i < groupArr.length; i++) {
                var itemArr = RES.getGroupByName(groupArr[i]);
                for (var k = 0; k < itemArr.length; k++) {
                    itemArr[k].loaded = false;
                    configRes["keyMap"][itemArr[k].name] = null;
                    delete configRes["keyMap"][itemArr[k].name];
                }
                if (configRes["groupDic"][groupArr[i]]) {
                    configRes["groupDic"][groupArr[i]] = null;
                    delete configRes["groupDic"][groupArr[i]];
                }
            }
        };
        ResUtils.getMovieClip = function (group, name, compFunc, thisObject, cache) {
            if (cache === void 0) { cache = false; }
            var loadNum = 0;
            if (name == null)
                name = "";
            var sources = [group + "_json", group + "_png"];
            function onGetMCRes(data, resName) {
                loadNum++;
                if (loadNum == sources.length) {
                    var mdf = new egret.MovieClipDataFactory(RES.getRes(group + "_json"), RES.getRes(group + "_png"));
                    var mc = new egret.MovieClip(mdf.generateMovieClipData(name)); //创建MovieClip
                    compFunc.call(thisObject, mc);
                    return;
                }
            }
            //if (this.resPool.isNew("mc_" + group + "_" + name)) {
            for (var i in sources) {
                this.getRes(sources[i], onGetMCRes, this);
            }
            //} else {
            //    this.resPool.active("mc_" + group + "_" + name)
            //}
        };
        /**
         * 回收movieClip到池
         * @param source
         * @param obj
         */
        ResUtils.freeMovieClip = function (obj, group, name) {
            //this.resPool.free(obj, "mc_" + group + "_" + name);
        };
        ResUtils.loadResConfig = function (configUrl) {
        };
        /**
         * 通过gameid加载资源组
         */
        ResUtils.loadGameGroupReses = function (configUrl, complete, progress, loadError, thisObj, resourceFolder) {
            if (resourceFolder === void 0) { resourceFolder = "resource/"; }
            var groupLoadComplete = function (e) {
                if (e.groupName == configUrl) {
                    this.loadedConfig[configUrl].status = GROUP_LOAD_STATUS.LOADED;
                    RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, groupLoadComplete, this);
                    RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, progress, this);
                    RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, loadError, this);
                    complete.call(thisObj, e);
                }
            };
            var groupLoadProgress = function (e) {
                if (e.groupName == configUrl) {
                    if (progress) {
                        progress.call(thisObj, e);
                    }
                }
            };
            var groupLoadError = function (e) {
                if (e.groupName == configUrl) {
                    RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, groupLoadComplete, this);
                    RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, progress, this);
                    RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, loadError, this);
                    if (loadError) {
                        loadError.call(thisObj, e);
                    }
                }
            };
            var onGetResConfig = function (e) {
                RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, onGetResConfig, this);
                var groups = [];
                for (var str in e.target.resConfig.groupDic) {
                    groups.push(str);
                }
                RES.createGroup(configUrl, groups);
                RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, groupLoadComplete, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, groupLoadProgress, this);
                RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, groupLoadError, this);
                RES.loadGroup(configUrl);
            };
            if (this.loadedConfig[configUrl] == null) {
                this.loadedConfig[configUrl] = {};
                this.loadedConfig[configUrl].status = GROUP_LOAD_STATUS.LOADDING;
                RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, onGetResConfig, this);
                RES.loadConfig(configUrl, resourceFolder);
            }
            else if (this.loadedConfig[configUrl].status == GROUP_LOAD_STATUS.LOADED) {
                complete.call(thisObj);
            }
        };
        return ResUtils;
    }());
    ResUtils.MAX_LOAD_LEVEL = 1;
    ResUtils._asynLoadLevel = 0;
    ResUtils._loadingDic = [];
    ResUtils._needloadDic = [];
    ResUtils._needLoadDicCallBack = {};
    ResUtils._resRequestSoundLoadTimes = {};
    ResUtils._mustResList = [];
    ResUtils.inited = false;
    ResUtils.loadedConfig = {};
    xlLib.ResUtils = ResUtils;
    __reflect(ResUtils.prototype, "xlLib.ResUtils");
    var GROUP_LOAD_STATUS;
    (function (GROUP_LOAD_STATUS) {
        GROUP_LOAD_STATUS[GROUP_LOAD_STATUS["LOADDING"] = 0] = "LOADDING";
        GROUP_LOAD_STATUS[GROUP_LOAD_STATUS["LOADED"] = 1] = "LOADED";
    })(GROUP_LOAD_STATUS = xlLib.GROUP_LOAD_STATUS || (xlLib.GROUP_LOAD_STATUS = {}));
})(xlLib || (xlLib = {}));
//# sourceMappingURL=ResUtils.js.map