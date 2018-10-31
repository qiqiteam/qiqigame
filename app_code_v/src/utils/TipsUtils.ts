module xlLib {
    export class TipsUtils {
        //从下到上弹出
        public static showTipsDownToUp(str: any = "", isWarning: boolean = false): void {
            var effectTips;
            if (typeof (str) == "string") {
                effectTips = new egret.TextField();
                effectTips.size = 24;

                if (isWarning) {
                    effectTips.textColor = Global.TextColors.red;
                } else {
                    effectTips.textColor = Global.TextColors.green;
                }
                effectTips.alpha = 0;

                effectTips.text = str;
                effectTips.strokeColor = 0x000000;
                effectTips.stroke = 2;
                effectTips.bold = true;
                effectTips.textAlign = egret.HorizontalAlign.CENTER;
            } else
                effectTips = str;

            effectTips.y = egret.MainContext.instance.stage.stageHeight / 2;
            effectTips.x = egret.MainContext.instance.stage.stageWidth / 2 - effectTips.width / 2;
            if (SceneMgr.instance.currentScene != null && SceneMgr.instance.currentScene.tipsLayer !=null) {
                if (!SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                    SceneMgr.instance.currentScene.tipsLayer.addChild(effectTips);
                }
            } else {
                //if (Global.stage)
                //    Global.stage.addChild(effectTips);
                egret.MainContext.instance.stage.addChild(effectTips);
            }
            

            var onComplete2: Function = function () {
                //if (SceneMgr.instance.currentScene != null) {
                //    if (!SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                //        SceneMgr.instance.currentScene.tipsLayer.removeChild(effectTips);
                //    }
                //} else {
                //    //if (Global.stage)
                //    //    Global.stage.removeChild(effectTips);
                //    egret.MainContext.instance.stage.removeChild(effectTips);
                //}
                DisplayUtils.removeFromParent(effectTips);
                effectTips = null;
            };
            var onComplete1: Function = function () {
                egret.Tween.get(effectTips).to({ y: effectTips.y - 50, alpha: 0 }, 500).call(onComplete2, this);
            };
            effectTips.visible = true;
            egret.Tween.get(effectTips).to({ y: effectTips.y - 120, alpha: 1 }, 800, egret.Ease.backOut).wait(2000).call(onComplete1, this);
        }    

        private static _tips:FloatTips;
        /**
         * 显示弹出TIPS
         * */
        public static showFloatWordTips(msg: string) 
        {
            if(!this._tips)
            {
                this._tips = new FloatTips();
            }
            else
            {
                egret.Tween.removeTweens(this._tips);
                xlLib.DisplayUtils.removeFromParent(this._tips);
            }
            this._tips.alpha = 1;
            this._tips.setTipsText(msg);
            this._tips.x = (xlLib.Global.screenWidth - this._tips.width) >> 1;
            this._tips.y = (xlLib.Global.screenHeight - this._tips.height) >> 1;
            SceneMgr.instance.currentScene.tipsLayer.addChild(this._tips);
            egret.Tween.get(this._tips).wait(500).to({y:this._tips.y-50 ,alpha: 0 }, 1000).call(function () {
                this._tips.alpha = 1;
                xlLib.DisplayUtils.removeFromParent(this._tips);
            }, this);
        }

        //从左至右 或者 从右至左
        public static showTipsLeftOrRight(str: any = "", isWarning: boolean = false, isFromeLeft: boolean = true): void {
            var effectTips;
            if (typeof (str) == "string") {
                effectTips = new egret.TextField();
                effectTips.size = 24;

                if (isWarning) {
                    effectTips.textColor = Global.TextColors.red;
                } else {
                    effectTips.textColor = Global.TextColors.green;
                }
                effectTips.alpha = 0;

                effectTips.text = str;
                effectTips.strokeColor = 0x000000;
                effectTips.stroke = 2;
                effectTips.bold = true;
                effectTips.textAlign = egret.HorizontalAlign.CENTER;
            } else
                effectTips = str;

            if (isFromeLeft) {
                effectTips.x = - effectTips.width;
            } else {
                effectTips.x = Global.screenWidth;
            }
            effectTips.y = Global.screenHeight / 2;
            if (!SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                SceneMgr.instance.currentScene.tipsLayer.addChild(effectTips);
            }

            if (isFromeLeft) {
                egret.Tween.get(effectTips).to({ x: Global.screenWidth / 2 - effectTips.width / 2 - 50, alpha: 1 }, 300, egret.Ease.sineInOut);
            } else {
                egret.Tween.get(effectTips).to({ x: Global.screenHeight / 2 - effectTips.width / 2 + 50, alpha: 1 }, 300, egret.Ease.sineInOut);
            }

            egret.setTimeout(function () {
                if (isFromeLeft) {
                    egret.Tween.get(effectTips).to({ x: effectTips.x + 100 }, 500);
                } else {
                    egret.Tween.get(effectTips).to({ x: effectTips.x - 100 }, 500);
                }
            }, this, 300);

            egret.setTimeout(function () {
                if (isFromeLeft) {
                    egret.Tween.get(effectTips).to({ x: Global.screenWidth }, 300, egret.Ease.sineIn);
                } else {
                    egret.Tween.get(effectTips).to({ x: -effectTips.width }, 300, egret.Ease.sineIn);
                }
            }, this, 800);

            egret.setTimeout(function () {
                if (SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                    SceneMgr.instance.currentScene.tipsLayer.removeChild(effectTips);
                    effectTips = null;
                }
            }, this, 1100);

        }  

        //从里到外
        public static showTipsFromCenter(str: any = "", isWarning: boolean = false): void {
            var effectTips;
            if (typeof (str) == "string") {
                effectTips = new egret.TextField();
                effectTips.size = 24;

                if (isWarning) {
                    effectTips.textColor = Global.TextColors.red;
                } else {
                    effectTips.textColor = Global.TextColors.green;
                }
                effectTips.alpha = 0;

                effectTips.text = str;
                effectTips.strokeColor = 0x000000;

                effectTips.stroke = 2;
                effectTips.bold = true;
                effectTips.textAlign = egret.HorizontalAlign.CENTER;
            } else
                effectTips = str;

            effectTips.y = Global.screenHeight / 2;
            effectTips.scaleX = 0;
            effectTips.scaleY = 0;
            effectTips.anchorOffsetX = effectTips.width >> 1;
            effectTips.anchorOffsetY = effectTips.height >> 1;
            effectTips.x = Global.screenWidth / 2;

            if (!SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                SceneMgr.instance.currentScene.tipsLayer.addChild(effectTips);
            }

            var onComplete2: Function = function () {
                if (SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                    SceneMgr.instance.currentScene.tipsLayer.removeChild(effectTips);
                    effectTips = null;
                }
            };
            egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200);
            egret.setTimeout(function () {
                egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
            }, this, 1000);

        }    

        //从外到里
        public static showTipsBigToSmall(str: any = "", isWarning: boolean = false): void {
            var effectTips;
            if (typeof (str) == "string") {
                effectTips = new egret.TextField();
                effectTips.size = 24;

                if (isWarning) {
                    effectTips.textColor = Global.TextColors.red;
                } else {
                    effectTips.textColor = Global.TextColors.green;
                }
                effectTips.alpha = 0;

                effectTips.text = str;
                effectTips.strokeColor = 0x000000;

                effectTips.stroke = 2;
                effectTips.bold = true;
                effectTips.textAlign = egret.HorizontalAlign.CENTER;

            } else
                effectTips = str;

            effectTips.y = Global.screenHeight / 2;
            effectTips.anchorOffsetX = effectTips.width >> 1;
            effectTips.anchorOffsetY = effectTips.height >> 1;
            effectTips.scaleX = 4;
            effectTips.scaleY = 4;
            effectTips.x = Global.screenWidth / 2;

            if (!SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                SceneMgr.instance.currentScene.tipsLayer.addChild(effectTips);
            }

            var onComplete2: Function = function () {
                if (SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                    SceneMgr.instance.currentScene.tipsLayer.removeChild(effectTips);
                    effectTips = null;
                }
            };
            egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200);
            egret.setTimeout(function () {
                egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
            }, this, 1000);

        }

    }

}