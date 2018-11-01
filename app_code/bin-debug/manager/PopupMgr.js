var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var PopUpMgr = (function () {
        function PopUpMgr() {
        }
        /**
         * 初始化弹出层
         * @param container
         */
        PopUpMgr.init = function (container) {
            if (container)
                this._container = container;
            else if (xlLib.SceneMgr.instance.currentScene.topLayer)
                this._container = xlLib.SceneMgr.instance.currentScene.topLayer;
            else
                this._container = xlLib.SceneMgr.instance.currentScene;
        };
        /**
         *
         * @param panel 需要弹出的面板类或者实例
         * @param cotainer 面板所属容器,不传则会放在初始化的容器上，如果没有初始化则自动添加到当前场景的topLayer层
         * @param center 是否居中
         * @param modal 是否模态
         * @param index 添加的深度
         * @param effectType 弹出效果
         * @param popUpWidth 弹出层宽度
         * @param popUpHeight 弹出层高度
         * @param panelParam 弹出类实例化需要传入的参数
         */
        PopUpMgr.addPopUp = function (panel, cotainer, center, modal, index, effectType, popUpWidth, popUpHeight, panelParam) {
            if (cotainer === void 0) { cotainer = null; }
            if (center === void 0) { center = false; }
            if (modal === void 0) { modal = false; }
            if (effectType === void 0) { effectType = 0; }
            if (popUpWidth === void 0) { popUpWidth = 0; }
            if (popUpHeight === void 0) { popUpHeight = 0; }
            var ctw = xlLib.Global.screenWidth;
            var cth = xlLib.Global.screenHeight;
            if (panel.prototype) {
                panel = new panel(panelParam);
            }
            else {
            }
            //panel.hashCode
            var panelName = egret.getQualifiedClassName(panel);
            if (this.popupDic[panelName] == null) {
                this.popupDic[panelName] = [];
            }
            this.popupDic[panelName].push(panel);
            if (this._container == null || this._container.parent == null) {
                if (xlLib.SceneMgr.instance.currentScene) {
                    if (xlLib.SceneMgr.instance.currentScene.topLayer) {
                        this._container = xlLib.SceneMgr.instance.currentScene.topLayer;
                    }
                    else
                        this._container = xlLib.SceneMgr.instance.currentScene;
                }
            }
            if (xlLib.SceneMgr.instance.currentScene.scaleX != 1) {
                ctw = xlLib.Global.designHeight / xlLib.SceneMgr.instance.currentScene.scaleX;
                cth = xlLib.Global.designWidth / xlLib.SceneMgr.instance.currentScene.scaleY;
            }
            var contain = (cotainer == null ? this._container : cotainer);
            if (contain.contains(panel)) {
                return;
            }
            if (modal) {
                var pname = egret.getQualifiedClassName(panel) + panel.hashCode;
                this.darkSpriteDic[pname] = xlLib.DisplayUtils.createMask(0.7, ctw, cth);
                if (!contain.contains(this.darkSpriteDic[pname])) {
                    contain.addChild(this.darkSpriteDic[pname]);
                }
                this.darkSpriteDic[pname].touchEnabled = true;
                egret.Tween.get(this.darkSpriteDic[pname]).to({ alpha: 1 }, 150);
                this.darkSpriteDic[pname].visible = true;
            }
            if (!contain || !contain.stage)
                return;
            if (index) {
                contain.addChildAt(panel, index);
            }
            else {
                contain.addChild(panel);
            }
            this.curPanel = panel;
            if (popUpWidth != 0 && contain) {
                panel.x = ctw / 2 - popUpWidth / 2;
                panel.y = cth / 2 - popUpHeight / 2;
            }
            else {
                if (panel.anchorOffsetX == 0) {
                    popUpWidth = panel.width;
                    popUpHeight = panel.height;
                }
            }
            //以下是弹窗动画
            var leftX = ctw / 2 - popUpWidth / 2;
            var upY = cth / 2 - popUpHeight / 2;
            //临时修改2015/11/4
            //if (upY < 0) upY = 0;
            //if (leftX < 0) leftX = 0;
            switch (effectType) {
                case PopUpEffect.NOMAL:
                    if (center) {
                        panel.x = leftX;
                        panel.y = upY;
                    }
                    break;
                case PopUpEffect.CENTER:
                    if (center) {
                        panel.x = leftX;
                        panel.y = upY;
                    }
                    panel.alpha = 0;
                    panel.scaleX = 0.5;
                    panel.scaleY = 0.5;
                    panel.x = panel.x + popUpWidth / 4;
                    panel.y = panel.y + popUpHeight / 4;
                    egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 300, egret.Ease.backOut);
                    break;
                case PopUpEffect.CENTER_S:
                    panel.alpha = 0;
                    panel.scaleX = 0.5;
                    panel.scaleY = 0.5;
                    panel.x = panel.x + popUpWidth / 4;
                    panel.y = panel.y + popUpHeight / 4;
                    egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 600, egret.Ease.elasticOut);
                    break;
                case PopUpEffect.LEFT:
                    if (center) {
                        panel.x = -popUpWidth;
                        egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                    }
                    else {
                        panel.x = -popUpWidth;
                        egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                    }
                    break;
                case PopUpEffect.RIGHT:
                    if (center) {
                        panel.x = popUpWidth;
                        egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                    }
                    else {
                        panel.x = popUpWidth;
                        egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                    }
                    break;
                case PopUpEffect.TOP:
                    if (center) {
                        panel.y = -popUpHeight;
                        egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                    }
                    else {
                        panel.y = -popUpHeight;
                        egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                    }
                    break;
                case PopUpEffect.BOTTOM:
                    if (center) {
                        panel.y = contain.stage.stageHeight;
                        egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                    }
                    else {
                        panel.y = popUpHeight;
                        egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                    }
                    break;
                default:
                    break;
            }
            return panel;
        };
        /**
        * 移除面板方法
        * @param panel       	面板
        * @param effectType     弹出效果,查询字典 PopUpEffect
        */
        PopUpMgr.removePopUp = function (panel, effectType) {
            if (effectType === void 0) { effectType = 0; }
            var isInstance = true;
            if (panel.prototype) {
                isInstance = false;
            }
            else {
                isInstance = true;
            }
            //panel.hashCode
            var panelName = egret.getQualifiedClassName(panel);
            if (this.popupDic[panelName]) {
                if (isInstance) {
                    for (var i = 0; i < this.popupDic[panelName].length; i++) {
                        if (this.popupDic[panelName][i] == panel) {
                            this.removePanel(this.popupDic[panelName][i], effectType);
                            this.popupDic[panelName].splice(i, 1);
                        }
                    }
                }
                else {
                    for (var i = 0; i < this.popupDic[panelName].length; i++) {
                        this.removePanel(this.popupDic[panelName][i], effectType);
                        this.popupDic[panelName].shift();
                    }
                }
            }
        };
        PopUpMgr.clearPopus = function () {
            if (this.popupDic) {
                for (var str in this.popupDic) {
                    for (var i = 0; i < this.popupDic[str].length; i++) {
                        this.removePanel(this.popupDic[str][i]);
                        this.popupDic[str].shift();
                    }
                }
            }
        };
        PopUpMgr.removePanel = function (panel, effectType) {
            if (effectType === void 0) { effectType = 0; }
            var pname = egret.getQualifiedClassName(panel) + panel.hashCode;
            var onComplete = function () {
                if (this.darkSpriteDic[pname] && this.darkSpriteDic[pname].parent) {
                    this.darkSpriteDic[pname].parent.removeChild(this.darkSpriteDic[pname]);
                }
                this.darkSpriteDic[pname] = null;
                delete this.darkSpriteDic[pname];
            };
            if (this.darkSpriteDic[pname]) {
                egret.Tween.get(this.darkSpriteDic[pname]).to({ alpha: 0 }, 100).call(onComplete, this);
            }
            var hideTime = 600;
            //以下是弹窗动画
            switch (effectType) {
                case PopUpEffect.NOMAL:
                    hideTime = 0;
                    break;
                case PopUpEffect.CENTER:
                    egret.Tween.get(panel).to({ alpha: 0, scaleX: 0, scaleY: 0, x: panel.x + panel.width / 2, y: panel.y + panel.height / 2 }, 300);
                    break;
                case PopUpEffect.CENTER_S:
                    egret.Tween.get(panel).to({ alpha: 0, scaleX: 0, scaleY: 0, x: panel.x + panel.width / 2, y: panel.y + panel.height / 2 }, 600, egret.Ease.elasticOut);
                    break;
                case PopUpEffect.LEFT:
                    egret.Tween.get(panel).to({ x: -panel.width }, 600, egret.Ease.cubicOut);
                    break;
                case PopUpEffect.RIGHT:
                    egret.Tween.get(panel).to({ x: panel.width }, 600, egret.Ease.cubicOut);
                    break;
                case PopUpEffect.TOP:
                    egret.Tween.get(panel).to({ y: -panel.height }, 600, egret.Ease.cubicOut);
                    break;
                case PopUpEffect.BOTTOM:
                    egret.Tween.get(panel).to({ y: panel.height }, 600, egret.Ease.cubicOut);
                    break;
                default:
                    break;
            }
            egret.setTimeout(function () {
                xlLib.DisplayUtils.removeFromParent(panel);
            }, this, hideTime);
        };
        /**
         * 是否已经弹出面板
         * @param panel
         */
        PopUpMgr.hasPopup = function (panel) {
            var isInstance = true;
            var panelName = egret.getQualifiedClassName(panel);
            if ((typeof (panel) == "object" && panel.prototype)) {
                isInstance = true;
            }
            else {
                isInstance = false;
            }
            if (isInstance) {
                if (!panel.stage) {
                    return false;
                }
                for (var i = 0; i < this.popupDic[panelName].length; i++) {
                    if (this.popupDic[panelName][i] == panel) {
                        return true;
                    }
                }
            }
            else {
                if (this.popupDic[panelName] && this.popupDic[panelName].length > 0) {
                    for (var i = 0; i < this.popupDic[panelName].length; i++) {
                        if (this.popupDic[panelName][i].stage) {
                            return true;
                        }
                        else {
                            xlLib.DisplayUtils.removeFromParent(this.popupDic[panelName][i]);
                        }
                    }
                }
            }
            return false;
        };
        /**
         * 大小变化时统一通知打开的窗口大小变化
         */
        PopUpMgr.resize = function () {
            if (this.popupDic) {
                for (var uiName in this.popupDic) {
                    var element = this.popupDic[uiName];
                    if (element && element.parent && element["resize"]) {
                        element.resize();
                    }
                }
            }
        };
        return PopUpMgr;
    }());
    //public static darkSprite: egret.Sprite;
    PopUpMgr.darkSpriteDic = {};
    PopUpMgr.popupDic = new Object();
    xlLib.PopUpMgr = PopUpMgr;
    __reflect(PopUpMgr.prototype, "xlLib.PopUpMgr");
    /**
   * 弹出效果
   */
    var PopUpEffect;
    (function (PopUpEffect) {
        /**
        * 没有动画
        */
        PopUpEffect[PopUpEffect["NOMAL"] = 0] = "NOMAL";
        /**
        * 从中间轻微弹出
        */
        PopUpEffect[PopUpEffect["CENTER"] = 1] = "CENTER";
        /**
        * 从中间猛烈弹出
        */
        PopUpEffect[PopUpEffect["CENTER_S"] = 2] = "CENTER_S";
        /**
        * 从左向右
        */
        PopUpEffect[PopUpEffect["LEFT"] = 3] = "LEFT";
        /**
        * 从右向左
        */
        PopUpEffect[PopUpEffect["RIGHT"] = 4] = "RIGHT";
        /**
        * 从上到下
        */
        PopUpEffect[PopUpEffect["TOP"] = 5] = "TOP";
        /**
        * 从下到上
        */
        PopUpEffect[PopUpEffect["BOTTOM"] = 6] = "BOTTOM";
    })(PopUpEffect = xlLib.PopUpEffect || (xlLib.PopUpEffect = {}));
})(xlLib || (xlLib = {}));
//# sourceMappingURL=PopupMgr.js.map