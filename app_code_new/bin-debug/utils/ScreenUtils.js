var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    /**
     * 屏幕工具类
     */
    var ScreenUtils = (function () {
        function ScreenUtils() {
        }
        ScreenUtils.init = function (scale) {
            this.scaleMode = scale;
            xlLib.Global.screenWidth = egret.MainContext.instance.stage.stageWidth;
            xlLib.Global.screenHeight = egret.MainContext.instance.stage.stageHeight;
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResizeNotify, this);
            this.resetScaleMode();
            this.scaleFactor = xlLib.Global.screenHeight / xlLib.Global.designHeight;
            //Global.stage = egret.MainContext.instance.stage;
            //if (window) {
            //    window.onbeforeunload = function (event) {
            //        return '确定要退出吗?';
            //    }
            //};
            if (global) {
            }
            else {
                // if (egret && xlLib.BrowersUtils.GetRequest("debug") != "true") {
                //     egret.MainContext.instance.stage.addEventListener(egret.Event.DEACTIVATE, ScreenUtils.onDeactive, Global);
                //     egret.MainContext.instance.stage.addEventListener(egret.Event.ACTIVATE, ScreenUtils.onActive, Global);
                // }
            }
        };
        ScreenUtils.onDeactive = function (e) {
            xlLib.Global.isActive = false;
            egret.Tween.pauseTweens(egret.MainContext.instance.stage);
            xlLib.SoundMgr.instance.onDeActive(e);
        };
        ScreenUtils.onActive = function (e) {
            xlLib.Global.isActive = true;
            egret.Tween.resumeTweens(egret.MainContext.instance.stage);
            xlLib.SoundMgr.instance.onActive(e);
        };
        /**
         * 屏幕大小发生变化时的消息
         */
        ScreenUtils.onResizeNotify = function () {
            if (xlLib.Global.isH5 == true) {
                xlLib.Global.screenWidth = egret.MainContext.instance.stage.stageWidth;
                xlLib.Global.screenHeight = egret.MainContext.instance.stage.stageHeight;
            }
            else {
                if (this._landscape == true) {
                    xlLib.Global.screenWidth = egret.MainContext.instance.stage.stageHeight;
                    xlLib.Global.screenHeight = egret.MainContext.instance.stage.stageWidth;
                }
                else {
                    xlLib.Global.screenWidth = egret.MainContext.instance.stage.stageWidth;
                    xlLib.Global.screenHeight = egret.MainContext.instance.stage.stageHeight;
                }
            }
            this.scaleFactor = xlLib.Global.screenHeight / xlLib.Global.designHeight;
            if (xlLib.SceneMgr.instance.currentScene) {
                xlLib.SceneMgr.instance.currentScene.resize();
            }
            xlLib.PopUpMgr.resize();
            xlLib.UIMgr.instance.resize();
            // DebugView.Instance.resize();
        };
        ScreenUtils.resetScaleMode = function () {
            //egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.EXACT_FIT;
            if (this.scaleMode) {
                egret.MainContext.instance.stage.scaleMode = this.scaleMode;
            }
            else {
                if (egret.Capabilities.isMobile) {
                    egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
                }
                else {
                    egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
                }
            }
        };
        Object.defineProperty(ScreenUtils, "landscape", {
            get: function () {
                return this._landscape;
            },
            /**
            * 设置横屏
            */
            set: function (b) {
                //if (b != this._landscape) {
                this._landscape = b;
                if (xlLib.Global.isH5 == true) {
                    if (this._landscape == true) {
                        egret.MainContext.instance.stage.orientation = egret.OrientationMode.LANDSCAPE;
                        egret.MainContext.instance.stage.setContentSize(xlLib.Global.designHeight, xlLib.Global.designWidth);
                    }
                    else {
                        egret.MainContext.instance.stage.orientation = egret.OrientationMode.AUTO;
                        egret.MainContext.instance.stage.setContentSize(xlLib.Global.designWidth, xlLib.Global.designHeight);
                    }
                }
                else {
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
                        }
                        else {
                            scalex = xlLib.Global.screenHeight / xlLib.Global.designWidth;
                            offsety = (xlLib.Global.screenWidth - scalex * xlLib.Global.designHeight) / 2;
                        }
                        xlLib.SceneMgr.instance.currentScene.x = xlLib.Global.designWidth;
                        xlLib.SceneMgr.instance.currentScene.y = offsety;
                        xlLib.SceneMgr.instance.currentScene.rotation = 90;
                    }
                    else {
                        //egret.MainContext.instance.stage.setContentSize(Global.designHeight, Global.designWidth);
                        var c = xlLib.Global.screenWidth;
                        xlLib.Global.screenWidth = xlLib.Global.screenHeight;
                        xlLib.Global.screenHeight = c;
                        xlLib.SceneMgr.instance.currentScene.rotation = 0;
                        xlLib.SceneMgr.instance.currentScene.x = 0;
                        xlLib.SceneMgr.instance.currentScene.y = 0;
                    }
                }
                this.onResizeNotify();
                //}
            },
            enumerable: true,
            configurable: true
        });
        ScreenUtils.scaleFactor = 1;
        return ScreenUtils;
    }());
    xlLib.ScreenUtils = ScreenUtils;
    __reflect(ScreenUtils.prototype, "xlLib.ScreenUtils");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=ScreenUtils.js.map