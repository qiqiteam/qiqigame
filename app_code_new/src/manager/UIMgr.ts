module xlLib {
    /**
    * UI管理
    */
    export class UIMgr {

        private static _self: UIMgr = null;

        public static get instance(): UIMgr {
            if (this._self == null) {
                this._self = new UIMgr();
            }
            return this._self;
        }

        /**
        * 默认Loading显示
        */
        public defaultLoadingView: any;

        public set DefaultLoading(view: any) {
            this.defaultLoadingView = view;
        }

        /**
        * ui字典
        */
        private _uis: Object = new Object();

        private _loadings: Object = new Object();

        private _effects: any = {};

        /**
         * 显示UI
         * @param ui 显示类
         * @param data 数据
         * @param cache 是否缓存
         */
        public showUI(ui: any, data?: any, parent?: any, cache: boolean = false): any {
            var self: any = this;
            var uiName: string = egret.getQualifiedClassName(ui);
            var onUIRemoveFromStage = function (e: egret.Event) {
                if (self._uis[uiName] && self._uis[uiName].hasEventListener(egret.Event.REMOVED_FROM_STAGE, onUIRemoveFromStage, self))
                    self._uis[uiName].removeEventListener(egret.Event.REMOVED_FROM_STAGE, onUIRemoveFromStage, self);
                //DisplayUtils.removeFromParent(self._uis[uiName]);
                if (self._uis[uiName] &&self._uis[uiName]["destroy"])
                    self._uis[uiName].destroy();
                if (cache == false) {
                    self._uis[uiName] = null;
                    delete self._uis[uiName];
                }
            }

            if (this._uis[uiName] == null) {
                this._uis[uiName] = new ui(data);
            } else {
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
                    if (SceneMgr.instance.currentScene && SceneMgr.instance.currentScene.topLayer) {
                        //if (SceneMgr.instance.currentScene.scaleX != 1) {

                        //}
                        SceneMgr.instance.currentScene.topLayer.addChild(this._uis[uiName]);
                    }
                    else {
                        egret.MainContext.instance.stage.addChild(this._uis[uiName]);
                    }
                    //}
                    
                }
                else {
                    //外部更新UI数据,暂时不处理
                    //this._uis[uiName]
                }
                return this._uis[uiName];
            }
        }

        private _commonLoadUI: any;
        public set commonLoadUI(loadClass: any) {
            this._commonLoadUI = loadClass;
        }

        public get commonLoadUI(): any {
            return this._commonLoadUI;
        }

        private _tipsLoadUI: any;
        public set tipsLoadUI(loadClass: any) {
            this._tipsLoadUI = loadClass;
        }

        public get tipsLoadUI(): any {
            return this._tipsLoadUI;
        }
        
        /**
         * 显示Loading
         */
        public showProcessBar(loadClass?: any, loaded?: any, total?: number, desc?: string, resourceName?: string, force: boolean = false): void {
            return this.showLoading(loadClass, loaded, total, desc, resourceName, force);
        }

        public showLoadingTimeout(loadClass?: any, key: string = "", timeout_msec: number = 30000, desc: string = ""): void {
            this.showLoading(loadClass, null, null, desc, null, false, key);
            var self = this;
            if (timeout_msec) {
                setTimeout(function (): void {
                    self.hideLoading(loadClass,key);
                }, timeout_msec);
            }
        }

        public showLoading(loadClass?: any, loaded?: any, total?: number, desc?: string, resourceName?: string, force: boolean = false, uiName: string = ""): void {
            if (uiName == "") {
                if (loadClass && loadClass != null) {
                    uiName = egret.getQualifiedClassName(loadClass);
                } else {
                    uiName = egret.getQualifiedClassName(this._commonLoadUI);
                    loadClass = this._commonLoadUI;
                }
            } else {
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
                    if ((<xlLib.LobbyScene>xlLib.SceneMgr.instance.currentScene).currentGame && (<xlLib.LobbyScene>xlLib.SceneMgr.instance.currentScene).currentGame.parent) {
                        (<xlLib.LobbyScene>xlLib.SceneMgr.instance.currentScene).currentGame.addChild(this._loadings[uiName]);
                    } else if (SceneMgr.instance.currentScene.tipsLayer) {
                        SceneMgr.instance.currentScene.tipsLayer.addChild(this._loadings[uiName]);
                    }
                }
                else
                    egret.MainContext.instance.stage.addChild(this._loadings[uiName]);
            }

            if (this._loadings[uiName]["setProgress"]) {
                this._loadings[uiName].setProgress(loaded, total, desc, resourceName, force);
            }
        }

        public hideLoading(loadClass?: any, uiName: string = "", destroy: boolean = true): void {
            if (uiName == "") {
                if (loadClass && loadClass != null) {
                    uiName = egret.getQualifiedClassName(loadClass);
                } else {
                    uiName = egret.getQualifiedClassName(this._commonLoadUI);
                    loadClass = this._commonLoadUI;
                }
            }
            if (this._loadings[uiName] != null) {
                if (this._loadings[uiName]["setProgress"]) {
                    this._loadings[uiName].setProgress(2, 100);
                }
                DisplayUtils.removeFromParent(this._loadings[uiName]);
                if (destroy) {
                    //console.error("hideLoading:" + uiName);
                    this._loadings[uiName] = null;
                    delete this._loadings[uiName];
                }
            }
        }

        public hideUI(ui: any, destroy: boolean = true): void {
            var uiName: string = egret.getQualifiedClassName(ui);
            xlLib.DisplayUtils.removeFromParent(this._uis[uiName]);
            if (destroy) {
                this._uis[uiName] = null;
                delete this._uis[uiName];
            }
        }

        public destroyUI(ui: any): void {
            var uiName: string = egret.getQualifiedClassName(ui);
            if (this._uis[uiName] != null && this._uis[uiName] != undefined) {
                xlLib.DisplayUtils.removeFromParent(this._uis[uiName]);
                delete this._uis[uiName];
            }
        }

         /**
         * 大小变化时统一通知打开的窗口大小变化
         */
        public  resize(): void 
        {
            if (this._uis) {
                for (var uiName in this._uis) {
                    var element = this._uis[uiName];
                    if (element &&element.parent&&element["resize"]) 
                    {
                        element.resize();
                    }
                }
            }
        }

        public clearOldSceneUis(): void {
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

        }

    }
}
