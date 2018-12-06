var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var DisplayUtils = (function () {
        function DisplayUtils() {
        }
        /**
         * 创建资源
         */
        DisplayUtils.createBitmapByName = function (keyName) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(keyName);
            result.texture = texture;
            return result;
        };
        DisplayUtils.createAsyncMovieClicp = function (groupName, keyName, isloop, playTimes) {
            if (isloop === void 0) { isloop = true; }
            var mdf;
            var mc;
            mdf = new egret.MovieClipDataFactory();
            mc = new egret.MovieClip(); //创建MovieClip
            xlLib.ResUtils.getRes(groupName + "_png", function (textureobj, url) {
                mdf.texture = textureobj;
                mc.movieClipData = mdf.generateMovieClipData(keyName);
                if (isloop) {
                    mc.play(-1);
                }
                else {
                    mc.gotoAndPlay(0, playTimes);
                }
            });
            xlLib.ResUtils.getRes(groupName + "_json", function (jsonobj, url) {
                mdf.mcDataSet = jsonobj;
                mc.movieClipData = mdf.generateMovieClipData(keyName);
                if (isloop) {
                    mc.play(-1);
                }
                else {
                    mc.gotoAndPlay(0, playTimes);
                }
            });
            return mc;
        };
        /**
         * 创建动画
         * @param groupName
         * @param keyName
         */
        DisplayUtils.createMovieClicp = function (groupName, keyName) {
            var data = RES.getRes(groupName + "_json"); //获取动画文件的信息配置文件
            var texture = RES.getRes(groupName + "_png"); //获取动画文件的图片
            var mdf;
            var mc;
            mdf = new egret.MovieClipDataFactory(data, texture);
            mc = new egret.MovieClip(mdf.generateMovieClipData(keyName)); //创建MovieClip
            return mc;
        };
        /**
         * 创建矩形
         * @param alpha
         * @param w
         * @param h
         * @param color
         */
        DisplayUtils.createMask = function (alpha, w, h, color) {
            if (alpha === void 0) { alpha = 0.3; }
            if (color === void 0) { color = 0x000000; }
            var sp = new egret.Sprite();
            sp.graphics.clear();
            sp.graphics.beginFill(color, alpha);
            sp.graphics.drawRect(0, 0, w ? w : xlLib.Global.screenWidth, h ? h : xlLib.Global.screenHeight);
            sp.graphics.endFill();
            return sp;
        };
        /**
         * 创建矩形
         * @param alpha
         * @param w
         * @param h
         * @param color
         */
        DisplayUtils.createShape = function (alpha, w, h, color) {
            if (alpha === void 0) { alpha = 0.3; }
            if (color === void 0) { color = 0x000000; }
            var sp = new egret.Shape();
            sp.graphics.clear();
            sp.graphics.beginFill(color, alpha);
            sp.graphics.drawRect(0, 0, w ? w : xlLib.Global.screenWidth, h ? h : xlLib.Global.screenHeight);
            sp.graphics.endFill();
            return sp;
        };
        /**
         * 创建圆形
         */
        DisplayUtils.createCircle = function (alpha, r, color) {
            if (alpha === void 0) { alpha = 0.3; }
            if (color === void 0) { color = 0x000000; }
            var sp = new egret.Sprite();
            sp.graphics.clear();
            sp.graphics.beginFill(color, alpha);
            sp.graphics.drawCircle(0, 0, r);
            sp.graphics.endFill();
            return sp;
        };
        /**
         * 创建DragonBones显示对象
         */
        DisplayUtils.createDragonBonesDisplay = function (dragonJson, json, png, bones, cache) {
            var dragonbonesData = RES.getRes(dragonJson);
            if (png && png != null) {
                var textureData = RES.getRes(json);
                var texture = RES.getRes(png);
            }
            else {
                var textureData = RES.getRes(json + "_json");
                var texture = RES.getRes(json + "_png");
            }
            if (xlLib.StringUtils.stringIsNullOrEmpty(bones))
                bones = "armature";
            var armature;
            if (dragonBones) {
                var dragonbonesFactory = new dragonBones["EgretFactory"]();
                dragonbonesFactory.addDragonBonesData(dragonBones["DataParser"].parseDragonBonesData(dragonbonesData));
                dragonbonesFactory.addTextureAtlas(new dragonBones["EgretTextureAtlas"](texture, textureData));
                if (cache) {
                    armature = dragonbonesFactory.buildFastArmature(bones);
                    armature.enableAnimationCache(cache);
                }
                else
                    armature = dragonbonesFactory.buildArmature(bones);
            }
            return armature;
        };
        /**
         * 运行龙骨动画
         * @param animationName {string} 指定播放的动画名称.
         * @param playTimes {number} 动画播放次数(0:循环播放, >=1:播放次数, NaN:使用动画数据中的播放时间), 默认值：NaN
         * @returns {AnimationState} 动画播放状态实例
         *
         */
        DisplayUtils.runDragonBonesArmature = function (armature, animationName, playTimes, isPlay) {
            if (isPlay === void 0) { isPlay = true; }
            if (armature == null) {
                xlLib.Console.error("armature不能为空");
                return;
            }
            dragonBones["WorldClock"].clock.add(armature);
            if (isPlay) {
                armature.animation.gotoAndPlay(animationName, 0, -1, playTimes, 0);
            }
            else {
                armature.animation.gotoAndStop(animationName, 0);
            }
        };
        /**
         * 设置按钮变灰
         * 	xlLib.DisplayUtils.setButtonEnabled(this._btn_visitor,false);
         */
        DisplayUtils.setComponentEnabled = function (btn, enabled) {
            if (!enabled) {
                var colorMatrix = [
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0, 0, 0, 1, 0
                ];
                var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
                btn.filters = [colorFlilter];
            }
            else {
                btn.filters = [];
            }
            btn.enabled = enabled;
        };
        /**
         * 删除龙骨动画
         */
        DisplayUtils.destoryDragonBonesArmature = function (armature, animationName) {
            if (armature == null) {
                xlLib.Console.error("armature不能为空");
                return;
            }
            dragonBones["WorldClock"].clock.remove(armature);
            armature.animation.stop();
            //egret.stopTick(this.onTicker,this);
            armature.dispose();
        };
        /**
         * 文本资源
         */
        DisplayUtils.createTextLabel = function (txt, color, size, x, y, width, height, align, rotation, skewX, strokeColor, stroke) {
            if (txt === void 0) { txt = "none"; }
            if (color === void 0) { color = 0x000000; }
            if (size === void 0) { size = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (align === void 0) { align = "left"; }
            if (rotation === void 0) { rotation = 0; }
            if (skewX === void 0) { skewX = 0; }
            if (strokeColor === void 0) { strokeColor = 0; }
            if (stroke === void 0) { stroke = 0; }
            var text = new egret.TextField();
            text.textColor = color;
            text.textAlign = align;
            text.fontFamily = "微软雅黑";
            text.text = txt;
            text.size = size;
            if (0 != width)
                text.width = width;
            if (height != 0)
                text.height = height;
            if (strokeColor != 0 && strokeColor != stroke) {
                text.strokeColor = strokeColor;
                text.stroke = stroke;
            }
            text.rotation = rotation;
            if (skewX != 0)
                text.skewX = skewX;
            text.x = x;
            text.y = y;
            return text;
        };
        /**
        * eui文本资源
        */
        DisplayUtils.createEuiTextLabel = function (txt, color, size, x, y, width, height, align, rotation, skewX, strokeColor, stroke) {
            if (txt === void 0) { txt = "none"; }
            if (color === void 0) { color = 0x000000; }
            if (size === void 0) { size = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (align === void 0) { align = "left"; }
            if (rotation === void 0) { rotation = 0; }
            if (skewX === void 0) { skewX = 0; }
            if (strokeColor === void 0) { strokeColor = 0; }
            if (stroke === void 0) { stroke = 0; }
            var text = new eui.Label();
            text.textColor = color;
            text.textAlign = align;
            text.fontFamily = "微软雅黑";
            text.text = txt;
            text.size = size;
            if (0 != width)
                text.width = width;
            if (height != 0)
                text.height = height;
            if (strokeColor != 0 && strokeColor != stroke) {
                text.strokeColor = strokeColor;
                text.stroke = stroke;
            }
            text.rotation = rotation;
            if (skewX != 0)
                text.skewX = skewX;
            text.x = x;
            text.y = y;
            return text;
        };
        /**
         * 从父移除
         * @param obj
         */
        DisplayUtils.removeFromParent = function (obj) {
            if (obj && obj.parent) {
                obj.parent.removeChild(obj);
            }
        };
        /**
        * 移除显示容器中的所有子集但不包括自己
        * @param disContainer
        */
        DisplayUtils.removeAllChildren = function (disContainer) {
            while (disContainer && disContainer.numChildren && disContainer.numChildren > 0) {
                this.removeFromParent(disContainer.getChildAt(0));
            }
        };
        /**
         * 截屏
         * @param obj
         * @param rect
         */
        DisplayUtils.catchScreen = function (obj, rect) {
            var renderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(obj);
            return renderTexture.toDataURL("image/png", rect ? rect : new egret.Rectangle(0, 0, obj.width, obj.height));
        };
        /**
         * 截屏
         * @param obj
         * @param rect
         */
        DisplayUtils.catchScreenToTex = function (obj, rect, scale) {
            var renderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(obj, rect, scale);
            return renderTexture;
        };
        DisplayUtils.lightArea = function (area, maskAlpha) {
            if (maskAlpha === void 0) { maskAlpha = 0.8; }
            var container = new egret.DisplayObjectContainer();
            var mask = xlLib.DisplayUtils.createShape(maskAlpha, xlLib.Global.screenWidth, xlLib.Global.screenHeight);
            container.addChild(mask);
            container.addChild(area);
            area.blendMode = egret.BlendMode.ERASE;
            var renderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(container);
            var bitmap = new egret.Bitmap();
            bitmap.texture = renderTexture;
            return bitmap;
        };
        DisplayUtils.ticketStarted = false;
        return DisplayUtils;
    }());
    xlLib.DisplayUtils = DisplayUtils;
    __reflect(DisplayUtils.prototype, "xlLib.DisplayUtils");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=DisplayUtils.js.map