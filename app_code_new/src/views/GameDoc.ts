module xlLib {
    export class GameDoc extends egret.DisplayObjectContainer implements xlLib.IGameDoc {
        public uiLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        public topLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        public effectLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        public mainUILayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        public maskLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        public tipsLayer: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        protected _gameInfo: IGameConfig;
        public constructor(params?: any) {
            super();
            if (params)
                this._gameInfo = params;
            xlLib.SceneMgr.instance.init(this);
            this.initBaseLayers();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        //初始化场景类
        public initBaseLayers(): void {
            this.addChild(this.uiLayer);
            this.addChild(this.topLayer);
            this.addChild(this.effectLayer);
            this.addChild(this.mainUILayer);
            this.addChild(this.maskLayer);
            this.addChild(this.tipsLayer);
            this.awake();
            //if(this._gameInfo.gameId == 150 && this._gameInfo.defaultOrientation != egret.OrientationMode.LANDSCAPE){
            //    this.scaleX = 1136 / 1280;
            //    this.scaleY = 640 / 720;
            //}
        }

        /**
         * 场景构造完成
         */
        public awake(): void {

        }

        public onAddToStage(e: egret.Event = null): void {
            //初始化Resource资源加载库
            //initiate Resource loading library
            if (this._gameInfo) {
                this.preLoadAndInit();
            } else {
                this.start(e);
            }
        }

        private thmLoaded: boolean = false;
        private resLoaded: boolean = false;

        private preLoadAndInit(): void {
            if (this._gameInfo.gameTheme && this._gameInfo.gameTheme != "") {
                var theme = new eui.Theme(this._gameInfo.gameTheme, this.stage);
                theme.addEventListener(eui.UIEvent.COMPLETE, this.loadedthm, this);
            } else {
                this.thmLoaded = true;
            }
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.loadedCfg, this);
            RES.loadConfig(this._gameInfo.gameResConfigUrl, this._gameInfo.gameResRoot);
        }

        //private onUniThemeComplete(): void {
        //    this.loadCfg();
        //}

        private loadedthm(event: RES.ResourceEvent): void {
            this.thmLoaded = true;
            this.cfgComplete();
        }

        private loadedCfg(event: RES.ResourceEvent): void {
            this.resLoaded = true;
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.loadedCfg, this);
            this.cfgComplete();
        }

        public start(e: egret.Event = null): void {

        }

        /**
         * 配置文件加载完成,开始预加载preload资源组。
         * configuration file loading is completed, start to pre-load the preload resource group
         */
        private cfgComplete(): void {
            if (this.thmLoaded == true && this.resLoaded == true) {
                if(this._gameInfo.preLoad && this._gameInfo.preLoad != "")
                    ResLoadMgr.instance.load(this._gameInfo.preLoad, this.onResComplete, this.onResError, this, this._gameInfo.preloadUI);
                else{
                    this.preLoadEnd();
                    if (this["preLoadCallBack"])
                        this["preLoadCallBack"]();
                }
            }
        }

        /**
         * preload资源组加载完成
         * Preload resource group is loaded
         */
        private onResComplete(event: RES.ResourceEvent): void {
            if (event.groupName == this._gameInfo.preLoad) {
                //this.stage.removeChild(this.loadingView);//通知大厅关闭Loading
                this.preLoadEnd();
                if (this["preLoadCallBack"])
                    this["preLoadCallBack"]();

            }
        }

        public preLoadEnd(): void {

        }

        public resize(): void {
        }

        public destroy(): void {
        }

        /**
         * 资源组加载出错
         *  The resource group loading failed
         */
        private onResError(event: RES.ResourceEvent): void {
            //TODO
            console.warn("Group:" + event.groupName + " has failed to load");
            //忽略加载失败的项目
            //Ignore the loading failed projects
            //this.onResourceLoadComplete(event);
        }

        /**
         * 返回大厅
         */
        public backToLobby(): void {
            //this.parent.removeChild(this);
            if (egret.getQualifiedSuperclassName(SceneMgr.instance.currentScene) == "LobbyScene") {
                (<LobbyScene>SceneMgr.instance.currentScene).removeGame();
            }
        }

    }

}