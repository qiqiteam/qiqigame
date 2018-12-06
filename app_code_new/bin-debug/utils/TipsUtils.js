var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var TipsUtils = (function () {
        function TipsUtils() {
        }
        //从下到上弹出
        TipsUtils.showTipsDownToUp = function (str, x, y, isWarning) {
            if (str === void 0) { str = ""; }
            if (isWarning === void 0) { isWarning = false; }
            var effectTips;
            if (typeof (str) == "string") {
                effectTips = new egret.TextField();
                effectTips.size = 32;
                if (isWarning) {
                    effectTips.textColor = xlLib.Global.TextColors.red;
                }
                else {
                    effectTips.textColor = xlLib.Global.TextColors.green;
                }
                effectTips.alpha = 0;
                effectTips.text = str;
                effectTips.strokeColor = 0xFFFF00;
                effectTips.stroke = 2;
                //effectTips.bold = true;
                effectTips.textAlign = egret.HorizontalAlign.CENTER;
            }
            else
                effectTips = str;
            //effectTips.y = egret.MainContext.instance.stage.stageHeight / 2;
            //effectTips.x = egret.MainContext.instance.stage.stageWidth / 2 - effectTips.width / 2;
            effectTips.y = y;
            effectTips.x = x;
            if (xlLib.SceneMgr.instance.currentScene != null && xlLib.SceneMgr.instance.currentScene.tipsLayer != null) {
                if (!xlLib.SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                    xlLib.SceneMgr.instance.currentScene.tipsLayer.addChild(effectTips);
                }
            }
            else {
                //if (Global.stage)
                //    Global.stage.addChild(effectTips);
                egret.MainContext.instance.stage.addChild(effectTips);
            }
            var onComplete2 = function () {
                //if (SceneMgr.instance.currentScene != null) {
                //    if (!SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                //        SceneMgr.instance.currentScene.tipsLayer.removeChild(effectTips);
                //    }
                //} else {
                //    //if (Global.stage)
                //    //    Global.stage.removeChild(effectTips);
                //    egret.MainContext.instance.stage.removeChild(effectTips);
                //}
                xlLib.DisplayUtils.removeFromParent(effectTips);
                effectTips = null;
            };
            var onComplete1 = function () {
                egret.Tween.get(effectTips).to({ y: effectTips.y - 50, alpha: 0 }, 500).call(onComplete2, this);
            };
            effectTips.visible = true;
            egret.Tween.get(effectTips).to({ y: effectTips.y - 120, alpha: 1 }, 800, egret.Ease.backOut).wait(2000).call(onComplete1, this);
        };
        /**
         * 显示弹出TIPS
         * */
        TipsUtils.showFloatWordTips = function (msg) {
            if (!this._tips) {
                this._tips = new xlLib.FloatTips();
            }
            else {
                egret.Tween.removeTweens(this._tips);
                xlLib.DisplayUtils.removeFromParent(this._tips);
            }
            this._tips.alpha = 1;
            this._tips.setTipsText(msg);
            this._tips.x = (xlLib.Global.screenWidth - this._tips.width) >> 1;
            this._tips.y = (xlLib.Global.screenHeight - this._tips.height) >> 1;
            xlLib.SceneMgr.instance.currentScene.tipsLayer.addChild(this._tips);
            egret.Tween.get(this._tips).wait(500).to({ y: this._tips.y - 50, alpha: 0 }, 1000).call(function () {
                this._tips.alpha = 1;
                xlLib.DisplayUtils.removeFromParent(this._tips);
            }, this);
        };
        //从左至右 或者 从右至左
        TipsUtils.showTipsLeftOrRight = function (str, isWarning, isFromeLeft) {
            if (str === void 0) { str = ""; }
            if (isWarning === void 0) { isWarning = false; }
            if (isFromeLeft === void 0) { isFromeLeft = true; }
            var effectTips;
            if (typeof (str) == "string") {
                effectTips = new egret.TextField();
                effectTips.size = 24;
                if (isWarning) {
                    effectTips.textColor = xlLib.Global.TextColors.red;
                }
                else {
                    effectTips.textColor = xlLib.Global.TextColors.green;
                }
                effectTips.alpha = 0;
                effectTips.text = str;
                effectTips.strokeColor = 0x000000;
                effectTips.stroke = 2;
                effectTips.bold = true;
                effectTips.textAlign = egret.HorizontalAlign.CENTER;
            }
            else
                effectTips = str;
            if (isFromeLeft) {
                effectTips.x = -effectTips.width;
            }
            else {
                effectTips.x = xlLib.Global.screenWidth;
            }
            effectTips.y = xlLib.Global.screenHeight / 2;
            if (!xlLib.SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                xlLib.SceneMgr.instance.currentScene.tipsLayer.addChild(effectTips);
            }
            if (isFromeLeft) {
                egret.Tween.get(effectTips).to({ x: xlLib.Global.screenWidth / 2 - effectTips.width / 2 - 50, alpha: 1 }, 300, egret.Ease.sineInOut);
            }
            else {
                egret.Tween.get(effectTips).to({ x: xlLib.Global.screenHeight / 2 - effectTips.width / 2 + 50, alpha: 1 }, 300, egret.Ease.sineInOut);
            }
            egret.setTimeout(function () {
                if (isFromeLeft) {
                    egret.Tween.get(effectTips).to({ x: effectTips.x + 100 }, 500);
                }
                else {
                    egret.Tween.get(effectTips).to({ x: effectTips.x - 100 }, 500);
                }
            }, this, 300);
            egret.setTimeout(function () {
                if (isFromeLeft) {
                    egret.Tween.get(effectTips).to({ x: xlLib.Global.screenWidth }, 300, egret.Ease.sineIn);
                }
                else {
                    egret.Tween.get(effectTips).to({ x: -effectTips.width }, 300, egret.Ease.sineIn);
                }
            }, this, 800);
            egret.setTimeout(function () {
                if (xlLib.SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                    xlLib.SceneMgr.instance.currentScene.tipsLayer.removeChild(effectTips);
                    effectTips = null;
                }
            }, this, 1100);
        };
        //从里到外
        TipsUtils.showTipsFromCenter = function (str, isWarning) {
            if (str === void 0) { str = ""; }
            if (isWarning === void 0) { isWarning = false; }
            var effectTips;
            if (typeof (str) == "string") {
                effectTips = new egret.TextField();
                effectTips.size = 24;
                if (isWarning) {
                    effectTips.textColor = xlLib.Global.TextColors.red;
                }
                else {
                    effectTips.textColor = xlLib.Global.TextColors.green;
                }
                effectTips.alpha = 0;
                effectTips.text = str;
                effectTips.strokeColor = 0x000000;
                effectTips.stroke = 2;
                effectTips.bold = true;
                effectTips.textAlign = egret.HorizontalAlign.CENTER;
            }
            else
                effectTips = str;
            effectTips.y = xlLib.Global.screenHeight / 2;
            effectTips.scaleX = 0;
            effectTips.scaleY = 0;
            effectTips.anchorOffsetX = effectTips.width >> 1;
            effectTips.anchorOffsetY = effectTips.height >> 1;
            effectTips.x = xlLib.Global.screenWidth / 2;
            if (!xlLib.SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                xlLib.SceneMgr.instance.currentScene.tipsLayer.addChild(effectTips);
            }
            var onComplete2 = function () {
                if (xlLib.SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                    xlLib.SceneMgr.instance.currentScene.tipsLayer.removeChild(effectTips);
                    effectTips = null;
                }
            };
            egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200);
            egret.setTimeout(function () {
                egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
            }, this, 1000);
        };
        //从外到里
        TipsUtils.showTipsBigToSmall = function (str, isWarning) {
            if (str === void 0) { str = ""; }
            if (isWarning === void 0) { isWarning = false; }
            var effectTips;
            if (typeof (str) == "string") {
                effectTips = new egret.TextField();
                effectTips.size = 24;
                if (isWarning) {
                    effectTips.textColor = xlLib.Global.TextColors.red;
                }
                else {
                    effectTips.textColor = xlLib.Global.TextColors.green;
                }
                effectTips.alpha = 0;
                effectTips.text = str;
                effectTips.strokeColor = 0x000000;
                effectTips.stroke = 2;
                effectTips.bold = true;
                effectTips.textAlign = egret.HorizontalAlign.CENTER;
            }
            else
                effectTips = str;
            effectTips.y = xlLib.Global.screenHeight / 2;
            effectTips.anchorOffsetX = effectTips.width >> 1;
            effectTips.anchorOffsetY = effectTips.height >> 1;
            effectTips.scaleX = 4;
            effectTips.scaleY = 4;
            effectTips.x = xlLib.Global.screenWidth / 2;
            if (!xlLib.SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                xlLib.SceneMgr.instance.currentScene.tipsLayer.addChild(effectTips);
            }
            var onComplete2 = function () {
                if (xlLib.SceneMgr.instance.currentScene.tipsLayer.contains(effectTips)) {
                    xlLib.SceneMgr.instance.currentScene.tipsLayer.removeChild(effectTips);
                    effectTips = null;
                }
            };
            egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200);
            egret.setTimeout(function () {
                egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
            }, this, 1000);
        };
        return TipsUtils;
    }());
    xlLib.TipsUtils = TipsUtils;
    __reflect(TipsUtils.prototype, "xlLib.TipsUtils");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=TipsUtils.js.map