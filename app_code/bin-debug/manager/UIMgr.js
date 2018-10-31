var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    /**
    * UI管理
    */
    var UIMgr = (function () {
        function UIMgr() {
            /**
            * ui字典
            */
            this._uis = new Object();
            this._loadings = new Object();
            this._effects = {};
        }
        Object.defineProperty(UIMgr, "instance", {
            get: function () {
                if (this._self == null) {
                    this._self = new UIMgr();
                }
                return this._self;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIMgr.prototype, "DefaultLoading", {
            set: function (view) {
                this.defaultLoadingView = view;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 显示UI
         * @param ui 显示类
         * @param data 数据
         * @param cache 是否缓存
         */
        UIMgr.prototype.showUI = function (ui, data, parent, cache) {
            if (cache === void 0) { cache = false; }
            var self = this;
            var uiName = egret.getQualifiedClassName(ui);
            var onUIRemoveFromStage = function (e) {
                if (self._uis[uiName] && self._uis[uiName].hasEventListener(egret.Event.REMOVED_FROM_STAGE, onUIRemoveFromStage, self))
                    self._uis[uiName].removeEventListener(egret.Event.REMOVED_FROM_STAGE, onUIRemoveFromStage, self);
                //DisplayUtils.removeFromParent(self._uis[uiName]);
                if (self._uis[uiName] && self._uis[uiName]["destroy"])
                    self._uis[uiName].destroy();
                if (cache == false) {
                    self._uis[uiName] = null;
                    delete self._uis[uiName];
                }
            };
            if (this._uis[uiName] == null) {
                this._uis[uiName] = new ui(data);
            }
            else {
                if (this._uis[uiName]["updateUIData"]) {
                    this._uis[uiName]["updateUIData"](data);
                }
            }
            if (this._uis[uiName]) {
                if (cache == false) {
                    if (!this._uis[uiName].hasEventListener(egret.Event.REMOVED_FROM_STAGE, onUIRemoveFromStage, this))
                        this._uis[uiName].addEventListener(egret.Event.REMOVED_FROM_STAGE, onUIRemoveFromStage, this);
                }
                if (this._uis[uiName].stage == null || this._uis[uiName].parent == null) {
                    //if (parent) {
                    //    parent.addChild(this._uis[uiName]);
                    //} else {
                    if (xlLib.SceneMgr.instance.currentScene && xlLib.SceneMgr.instance.currentScene.topLayer) {
                        //if (SceneMgr.instance.currentScene.scaleX != 1) {
                        //}
                        xlLib.SceneMgr.instance.currentScene.topLayer.addChild(this._uis[uiName]);
                    }
                    else {
                        egret.MainContext.instance.stage.addChild(this._uis[uiName]);
                    }
                }
                else {
                }
                return this._uis[uiName];
            }
        };
        Object.defineProperty(UIMgr.prototype, "commonLoadUI", {
            get: function () {
                return this._commonLoadUI;
            },
            set: function (loadClass) {
                this._commonLoadUI = loadClass;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIMgr.prototype, "tipsLoadUI", {
            get: function () {
                return this._tipsLoadUI;
            },
            set: function (loadClass) {
                this._tipsLoadUI = loadClass;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 显示Loading
         */
        UIMgr.prototype.showProcessBar = function (loadClass, loaded, total, desc, resourceName, force) {
            if (force === void 0) { force = false; }
            return this.showLoading(loadClass, loaded, total, desc, resourceName, force);
        };
        UIMgr.prototype.showLoadingTimeout = function (loadClass, key, timeout_msec, desc) {
            if (key === void 0) { key = ""; }
            if (timeout_msec === void 0) { timeout_msec = 30000; }
            if (desc === void 0) { desc = ""; }
            this.showLoading(loadClass, null, null, desc, null, false, key);
            var self = this;
            if (timeout_msec) {
                setTimeout(function () {
                    self.hideLoading(loadClass, key);
                }, timeout_msec);
            }
        };
        UIMgr.prototype.showLoading = function (loadClass, loaded, total, desc, resourceName, force, uiName) {
            if (force === void 0) { force = false; }
            if (uiName === void 0) { uiName = ""; }
            if (uiName == "") {
                if (loadClass && loadClass != null) {
                    uiName = egret.getQualifiedClassName(loadClass);
                }
                else {
                    uiName = egret.getQualifiedClassName(this._commonLoadUI);
                    loadClass = this._commonLoadUI;
                }
            }
            else {
                if (loadClass == null) {
                    uiName = egret.getQualifiedClassName(this._tipsLoadUI);
                    loadClass = this._tipsLoadUI;
                }
            }
            if (xlLib.StringUtils.stringIsNullOrEmpty(uiName) || loadClass == null)
                return;
            if (this._loadings[uiName] == null) {
                this._loadings[uiName] = new loadClass();
            }
            if (this._loadings[uiName]["setProgress"]) {
                this._loadings[uiName].setProgress(2, 100);
            }
            if (this._loadings[uiName].stage == null) {
                if (xlLib.SceneMgr.instance.currentScene) {
                    if (xlLib.SceneMgr.instance.currentScene.currentGame && xlLib.SceneMgr.instance.currentScene.currentGame.parent) {
                        xlLib.SceneMgr.instance.currentScene.currentGame.addChild(this._loadings[uiName]);
                    }
                    else if (xlLib.SceneMgr.instance.currentScene.tipsLayer) {
                        xlLib.SceneMgr.instance.currentScene.tipsLayer.addChild(this._loadings[uiName]);
                    }
                }
                else
                    egret.MainContext.instance.stage.addChild(this._loadings[uiName]);
            }
            if (this._loadings[uiName]["setProgress"]) {
                this._loadings[uiName].setProgress(loaded, total, desc, resourceName, force);
            }
        };
        UIMgr.prototype.hideLoading = function (loadClass, uiName, destroy) {
            if (uiName === void 0) { uiName = ""; }
            if (destroy === void 0) { destroy = true; }
            if (uiName == "") {
                if (loadClass && loadClass != null) {
                    uiName = egret.getQualifiedClassName(loadClass);
                }
                else {
                    uiName = egret.getQualifiedClassName(this._commonLoadUI);
                    loadClass = this._commonLoadUI;
                }
            }
            if (this._loadings[uiName] != null) {
                if (this._loadings[uiName]["setProgress"]) {
                    this._loadings[uiName].setProgress(2, 100);
                }
                xlLib.DisplayUtils.removeFromParent(this._loadings[uiName]);
                if (destroy) {
                    //console.error("hideLoading:" + uiName);
                    this._loadings[uiName] = null;
                    delete this._loadings[uiName];
                }
            }
        };
        UIMgr.prototype.hideUI = function (ui, destroy) {
            if (destroy === void 0) { destroy = true; }
            var uiName = egret.getQualifiedClassName(ui);
            xlLib.DisplayUtils.removeFromParent(this._uis[uiName]);
            if (destroy) {
                this._uis[uiName] = null;
                delete this._uis[uiName];
            }
        };
        UIMgr.prototype.destroyUI = function (ui) {
            var uiName = egret.getQualifiedClassName(ui);
            if (this._uis[uiName] != null && this._uis[uiName] != undefined) {
                xlLib.DisplayUtils.removeFromParent(this._uis[uiName]);
                delete this._uis[uiName];
            }
        };
        /**
        * 大小变化时统一通知打开的窗口大小变化
        */
        UIMgr.prototype.resize = function () {
            if (this._uis) {
                for (var uiName in this._uis) {
                    var element = this._uis[uiName];
                    if (element && element.parent && element["resize"]) {
                        element.resize();
                    }
                }
            }
        };
        UIMgr.prototype.clearOldSceneUis = function () {
            //var common_uiName: string = "";
            //common_uiName = egret.getQualifiedClassName(this._commonLoadUI);
            if (this._uis) {
                for (var uiName in this._uis) {
                    var element = this._uis[uiName];
                    if (element && element.parent == null) {
                        delete this._uis[uiName];
                    }
                }
            }
            if (this._loadings) {
                for (var uiName in this._loadings) {
                    var element = this._loadings[uiName];
                    if (element && element.parent == null) {
                        delete this._loadings[uiName];
                    }
                }
            }
        };
        return UIMgr;
    }());
    UIMgr._self = null;
    xlLib.UIMgr = UIMgr;
    __reflect(UIMgr.prototype, "xlLib.UIMgr");
})(xlLib || (xlLib = {}));
