module xlLib {

    /**
     * 屏幕工具类
     */

    export class ScreenUtils {
        private static scaleMode: any;
        public static scaleFactor: number = 1;
        public static init(scale): void {
            this.scaleMode = scale;
            Global.screenWidth = egret.MainContext.instance.stage.stageWidth;
            Global.screenHeight = egret.MainContext.instance.stage.stageHeight;
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResizeNotify, this);
            this.resetScaleMode();
            this.scaleFactor = Global.screenHeight / Global.designHeight;
            //Global.stage = egret.MainContext.instance.stage;
            //if (window) {
            //    window.onbeforeunload = function (event) {
            //        return '确定要退出吗?';
            //    }
            //};
            if (global) {

            } else {
                // if (egret && xlLib.BrowersUtils.GetRequest("debug") != "true") {
                //     egret.MainContext.instance.stage.addEventListener(egret.Event.DEACTIVATE, ScreenUtils.onDeactive, Global);
                //     egret.MainContext.instance.stage.addEventListener(egret.Event.ACTIVATE, ScreenUtils.onActive, Global);
                // }
            }
        }

        public static onDeactive(e: egret.Event): void {
            xlLib.Global.isActive = false;
            egret.Tween.pauseTweens(egret.MainContext.instance.stage);
            SoundMgr.instance.onDeActive(e);

        }

        public static onActive(e: egret.Event): void {
            xlLib.Global.isActive = true;
            egret.Tween.resumeTweens(egret.MainContext.instance.stage);
            SoundMgr.instance.onActive(e);
        }



        /**
         * 屏幕大小发生变化时的消息
         */
        public static onResizeNotify(): void {
            if (xlLib.Global.isH5 == true) {
                Global.screenWidth = egret.MainContext.instance.stage.stageWidth;
                Global.screenHeight = egret.MainContext.instance.stage.stageHeight;
            } else {
                if (this._landscape == true) {
                    Global.screenWidth = egret.MainContext.instance.stage.stageHeight;
                    Global.screenHeight = egret.MainContext.instance.stage.stageWidth;
                } else {
                    Global.screenWidth = egret.MainContext.instance.stage.stageWidth;
                    Global.screenHeight = egret.MainContext.instance.stage.stageHeight;
                }
            }
            this.scaleFactor = Global.screenHeight / Global.designHeight;

            if (SceneMgr.instance.currentScene) {
                SceneMgr.instance.currentScene.resize();
            }
            PopUpMgr.resize();
            xlLib.UIMgr.instance.resize();
	    // DebugView.Instance.resize();
        }

        private static resetScaleMode(): void {
            
            //egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.EXACT_FIT;
            if (this.scaleMode) {
                egret.MainContext.instance.stage.scaleMode = this.scaleMode;
            }
            else {
                if (egret.Capabilities.isMobile) {
                    egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
                } else {
                    egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
                }

            }

        }

        private static _landscape: boolean;

        public static get landscape(): boolean {
            return this._landscape;
        }

        /**
        * 设置横屏
        */
        public static set landscape(b: boolean) {
            //if (b != this._landscape) {
            this._landscape = b;
            if (xlLib.Global.isH5 == true) {
                if (this._landscape == true) {
                    egret.MainContext.instance.stage.orientation = egret.OrientationMode.LANDSCAPE;
                    egret.MainContext.instance.stage.setContentSize(Global.designHeight, Global.designWidth);
                } else {
                    egret.MainContext.instance.stage.orientation = egret.OrientationMode.AUTO;
                    egret.MainContext.instance.stage.setContentSize(Global.designWidth, Global.designHeight);
                }
            } else {

                //ZQGameSdk.landscape = this._landscape;
                ////if (this._landscape == true) {
                //    egret.MainContext.instance.stage.setContentSize(Global.designWidth, Global.designHeight);
                ////} else {
                ////    egret.MainContext.instance.stage.setContentSize(Global.designHeight, Global.designWidth);
                ////}

                if (this._landscape == true) {
                    //egret.MainContext.instance.stage.setContentSize(Global.designWidth, Global.designHeight);
                    // egret.MainContext.instance.stage.orientation = egret.OrientationMode.PORTRAIT;
                    var scalex = 0;
                    var offsety = 0;
                    if (xlLib.Global.screenWidth < xlLib.Global.screenHeight) {
                        //egret.MainContext.instance.stage.height = scalex*Global.designHeight;
                        scalex = xlLib.Global.screenWidth / xlLib.Global.designWidth;
                        offsety = (xlLib.Global.screenHeight - scalex * xlLib.Global.designHeight) / 2;
                        var c = xlLib.Global.screenWidth;
                        xlLib.Global.screenWidth = xlLib.Global.screenHeight;
                        xlLib.Global.screenHeight = c;
                    } else {
                        scalex = xlLib.Global.screenHeight / xlLib.Global.designWidth;
                        offsety = (xlLib.Global.screenWidth - scalex * xlLib.Global.designHeight) / 2;
                    }
                    SceneMgr.instance.currentScene.x = Global.designWidth;
                    SceneMgr.instance.currentScene.y = offsety;
                    SceneMgr.instance.currentScene.rotation = 90;
                } else {
                    //egret.MainContext.instance.stage.setContentSize(Global.designHeight, Global.designWidth);
                    var c = xlLib.Global.screenWidth;
                    xlLib.Global.screenWidth = xlLib.Global.screenHeight;
                    xlLib.Global.screenHeight = c;
                    SceneMgr.instance.currentScene.rotation = 0;
                    SceneMgr.instance.currentScene.x = 0;
                    SceneMgr.instance.currentScene.y = 0;
                }

            }

            this.onResizeNotify();
            //}
        }

    }
}
