module xlLib {

    export class PopUpMgr {
        //public static darkSprite: egret.Sprite;
        public static darkSpriteDic: any = {};
        public static curPanel: any;
        private static _container: egret.DisplayObjectContainer;

        public static popupDic: Object = new Object();

        /**
         * 初始化弹出层
         * @param container
         */
        public static init(container?: egret.DisplayObjectContainer): void {
            if (container)
                this._container = container;
            else if (SceneMgr.instance.currentScene.topLayer)
                this._container = SceneMgr.instance.currentScene.topLayer;
            else
                this._container = SceneMgr.instance.currentScene;
        }

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
        public static addPopUp(panel, cotainer: egret.DisplayObjectContainer = null, center: boolean = false, modal: boolean = false, index?: number, effectType: PopUpEffect = 0, popUpWidth: number = 0, popUpHeight: number = 0, panelParam?: any): any {
            var ctw: number = Global.screenWidth;
            var cth: number = Global.screenHeight;

            if (panel.prototype) {
                panel = new panel(panelParam);
            } else {

            }
            //panel.hashCode
            var panelName: string = egret.getQualifiedClassName(panel);
            if (this.popupDic[panelName] == null) {
                this.popupDic[panelName] = [];
            }
            this.popupDic[panelName].push(panel);

            if (this._container == null || this._container.parent == null) {
                if (SceneMgr.instance.currentScene) {
                    if (SceneMgr.instance.currentScene.topLayer) {
                        this._container = SceneMgr.instance.currentScene.topLayer;
                    } else
                        this._container = SceneMgr.instance.currentScene;
                }
            }
            if (SceneMgr.instance.currentScene.scaleX != 1) {
                ctw = Global.designHeight / SceneMgr.instance.currentScene.scaleX;
                cth = Global.designWidth / SceneMgr.instance.currentScene.scaleY;
            }

            var contain: egret.DisplayObjectContainer = (cotainer == null ? this._container : cotainer);
            if (contain.contains(panel)) {//判断是否包含panel
                return;
            }

            if (modal) {
                var pname: string = egret.getQualifiedClassName(panel) + panel.hashCode;
                this.darkSpriteDic[pname] = DisplayUtils.createMask(0.7, ctw, cth);
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
            } else {
                contain.addChild(panel);
            }

            this.curPanel = panel;
            if (popUpWidth != 0 && contain) {
                panel.x = ctw / 2 - popUpWidth / 2;
                panel.y = cth / 2 - popUpHeight / 2;
            } else {
                if (panel.anchorOffsetX == 0) {
                    popUpWidth = panel.width;
                    popUpHeight = panel.height;
                }
            }

            //以下是弹窗动画
            var leftX: number = ctw / 2 - popUpWidth / 2;
            var upY: number = cth / 2 - popUpHeight / 2;

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
                    egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 600, egret.Ease.backOut);
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
                        panel.x = - popUpWidth;
                        egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                    } else {
                        panel.x = - popUpWidth;
                        egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                    }
                    break;
                case PopUpEffect.RIGHT:
                    if (center) {
                        panel.x = popUpWidth;
                        egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                    } else {
                        panel.x = popUpWidth;
                        egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                    }
                    break;
                case PopUpEffect.TOP:
                    if (center) {
                        panel.y = - popUpHeight;
                        egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                    } else {
                        panel.y = - popUpHeight;
                        egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                    }
                    break;
                case PopUpEffect.BOTTOM:
                    if (center) {
                        panel.y = contain.stage.stageHeight;
                        egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                    } else {
                        panel.y = popUpHeight;
                        egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                    }
                    break;
                default:
                    break;
            }
            return panel;
        }

        /**
        * 移除面板方法
        * @param panel       	面板
        * @param effectType     弹出效果,查询字典 PopUpEffect
        */
        public static removePopUp(panel, effectType: number = 0): void {
            var isInstance: boolean = true;
            if (panel.prototype) {
                isInstance = false;
            } else {
                isInstance = true;
            }
            //panel.hashCode

            var panelName: string = egret.getQualifiedClassName(panel);
            if (this.popupDic[panelName]) {
                if (isInstance) {
                    for (var i: number = 0; i < this.popupDic[panelName].length; i++) {
                        if (this.popupDic[panelName][i] == panel) {
                            this.removePanel(this.popupDic[panelName][i], effectType);
                            this.popupDic[panelName].splice(i, 1);
                        }
                    }
                } else {
                    for (var i: number = 0; i < this.popupDic[panelName].length; i++) {
                        this.removePanel(this.popupDic[panelName][i], effectType);
                        this.popupDic[panelName].shift();
                    }
                }
            }
        }

        private static clearPopus(): void {
            if (this.popupDic) {
                for (var str in this.popupDic) {
                    for (var i: number = 0; i < this.popupDic[str].length; i++) {
                        this.removePanel(this.popupDic[str][i]);
                        this.popupDic[str].shift();
                    }
                }
            }
        }

        private static removePanel(panel, effectType: number = 0): void {
            var pname: string = egret.getQualifiedClassName(panel) + panel.hashCode;
            var onComplete: Function = function () {
                if (this.darkSpriteDic[pname] && this.darkSpriteDic[pname].parent) {
                    this.darkSpriteDic[pname].parent.removeChild(this.darkSpriteDic[pname]);
                }
                this.darkSpriteDic[pname] = null
                delete this.darkSpriteDic[pname];
            };
            if (this.darkSpriteDic[pname]) {
                egret.Tween.get(this.darkSpriteDic[pname]).to({ alpha: 0 }, 100).call(onComplete, this);
            }
            var hideTime: number = 600;
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
                DisplayUtils.removeFromParent(panel);
            }, this, hideTime);
        }

        /**
         * 是否已经弹出面板
         * @param panel
         */
        public static hasPopup(panel): boolean {
            var isInstance: boolean = true;
            var panelName: string = egret.getQualifiedClassName(panel);
            if ((typeof (panel) == "object" && panel.prototype)) {
                isInstance = true;
            } else {
                isInstance = false;
            }
            if (isInstance) {
                if (!panel.stage) {
                    return false;
                }
                for (var i: number = 0; i < this.popupDic[panelName].length; i++) {
                    if (this.popupDic[panelName][i] == panel) {
                        return true;
                    }
                }
            } else {
                if (this.popupDic[panelName] && this.popupDic[panelName].length > 0) {
                    for (var i: number = 0; i < this.popupDic[panelName].length; i++) {
                        if (this.popupDic[panelName][i].stage) {
                            return true;
                        } else {
                            DisplayUtils.removeFromParent(this.popupDic[panelName][i]);
                        }
                    }
                }
            }

            return false;
        }

        /**
         * 大小变化时统一通知打开的窗口大小变化
         */
        public static resize(): void {
                if (this.popupDic) {
                for (var uiName in this.popupDic)
                 {
                    var element = this.popupDic[uiName];
                    if (element &&element.parent&&element["resize"]) 
                    {
                        element.resize();
                    }
                }
            }
        }
    }

    /**
   * 弹出效果
   */
    export enum PopUpEffect {
        /**
        * 没有动画
        */
        NOMAL,
        /**
        * 从中间轻微弹出
        */
        CENTER,
        /**
        * 从中间猛烈弹出
        */
        CENTER_S,
        /**
        * 从左向右
        */
        LEFT,
        /**
        * 从右向左
        */
        RIGHT,
        /**
        * 从上到下
        */
        TOP,
        /**
        * 从下到上
        */
        BOTTOM
    }
}