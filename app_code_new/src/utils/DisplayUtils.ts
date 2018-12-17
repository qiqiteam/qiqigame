module xlLib {

    export class DisplayUtils {
        /**
         * 创建资源
         */
        public static createBitmapByName(keyName: string): egret.Bitmap {
            var result: egret.Bitmap = new egret.Bitmap();
            var texture: egret.Texture = RES.getRes(keyName);
            result.texture = texture;
            return result;
        }

        public static createAsyncMovieClicp(groupName: string, keyName?: string,isloop:boolean=true, playTimes?:number): egret.MovieClip 
        {
            var mdf:egret.MovieClipDataFactory;
            var mc:egret.MovieClip;
            mdf = new egret.MovieClipDataFactory();
            mc = new egret.MovieClip();//创建MovieClip
            xlLib.ResUtils.getRes(groupName + "_png",(textureobj:any,url:string)=>{
                mdf.texture = textureobj;
                mc.movieClipData = mdf.generateMovieClipData(keyName);
                if(isloop)
                {
                    mc.play(-1);
                }else{
                    mc.gotoAndPlay(0,playTimes);
                }
            });
            xlLib.ResUtils.getRes(groupName + "_json",(jsonobj:any,url:string)=>{
                mdf.mcDataSet = jsonobj;
                mc.movieClipData = mdf.generateMovieClipData(keyName);
                if(isloop)
                {
                    mc.play(-1);
                }else{
                    mc.gotoAndPlay(0,playTimes);
                }
            });
            return mc;
        }

        /**
         * 创建动画
         * @param groupName
         * @param keyName
         */
        public static createMovieClicp(groupName: string, keyName?: string): egret.MovieClip 
        {
            var data = RES.getRes(groupName + "_json");//获取动画文件的信息配置文件
            var texture = RES.getRes(groupName + "_png");//获取动画文件的图片
            var mdf:egret.MovieClipDataFactory;
            var mc:egret.MovieClip;
            mdf = new egret.MovieClipDataFactory(data, texture);
            mc = new egret.MovieClip(mdf.generateMovieClipData(keyName));//创建MovieClip
            return mc;
        }

        /**
         * 创建矩形
         * @param alpha
         * @param w
         * @param h
         * @param color
         */
        public static createMask(alpha: number = 0.3, w?: number, h?: number, color: number = 0x000000): egret.Sprite {
            var sp: egret.Sprite = new egret.Sprite();
            sp.graphics.clear();
            sp.graphics.beginFill(color, alpha);
            sp.graphics.drawRect(0, 0, w ? w : xlLib.Global.screenWidth, h ? h : xlLib.Global.screenHeight);
            sp.graphics.endFill();
            return sp;
        }

        /**
         * 创建矩形
         * @param alpha
         * @param w
         * @param h
         * @param color
         */
        public static createShape(alpha: number = 0.3, w?: number, h?: number, color: number = 0x000000): egret.Shape {
            var sp: egret.Shape = new egret.Shape();
            sp.graphics.clear();
            sp.graphics.beginFill(color, alpha);
            sp.graphics.drawRect(0, 0, w ? w : xlLib.Global.screenWidth, h ? h : xlLib.Global.screenHeight);
            sp.graphics.endFill();
            return sp;
        }
        /**
         * 创建圆形
         */
         public static createCircle(alpha: number = 0.3, r?: number, color: number = 0x000000): egret.Sprite {
            var sp: egret.Sprite = new egret.Sprite();
            sp.graphics.clear();
            sp.graphics.beginFill(color, alpha);
            sp.graphics.drawCircle(0, 0, r);
            sp.graphics.endFill();
            return sp;
        }

        /**
         * 创建DragonBones显示对象
         */
        public static createDragonBonesDisplay(source: string,bones?: string,compFunc?: Function, thisObject?: any):void {
            let armatureDisplay:dragonBones.EgretArmatureDisplay = new dragonBones.EgretArmatureDisplay();
            let dragonbonesData = RES.getRes(source + "_ske_json");
            let textureData = RES.getRes(source + "_tex_json");
            let texture = RES.getRes(source + "_tex_png");
            if (StringUtils.stringIsNullOrEmpty(bones))
            {
                bones = "armature";
            }
            var armature: dragonBones.Armature;
            if(dragonbonesData)
            {
                armature = this.creatArmature(dragonbonesData,textureData,texture,bones);
                if(armature){
                    armatureDisplay = armature.display;
                    if (thisObject != null) {
                        compFunc.call(thisObject,armatureDisplay);
                    } else {
                        if (compFunc)
                            compFunc(armatureDisplay);
                    }
                }
            }
            else
            {
                xlLib.ResUtils.getRes(source + "_ske_json",(db:any,url:string)=>{
                    dragonbonesData = db
                    armature = this.creatArmature(dragonbonesData,textureData,texture,bones);
                    if(armature){
                        armatureDisplay = armature.display;
                        if (thisObject != null) {
                            compFunc.call(thisObject,armatureDisplay);
                        } else {
                            if (compFunc)
                                compFunc(armatureDisplay);
                    }
                }
                });
            }
            if(textureData)
            {
               armature = this.creatArmature(dragonbonesData,textureData,texture,bones);
                  if(armature){
                    armatureDisplay = armature.display;
                    if (thisObject != null) {
                        compFunc.call(thisObject,armatureDisplay);
                    } else {
                        if (compFunc)
                            compFunc(armatureDisplay);
                    }
                  }
            }
            else
            {
               xlLib.ResUtils.getRes(source + "_tex_json",(td:any,url:string)=>{
                    textureData = td;
                    armature = this.creatArmature(dragonbonesData,textureData,texture,bones);
                    if(armature){
                        armatureDisplay = armature.display;
                        if (thisObject != null) {
                            compFunc.call(thisObject,armatureDisplay);
                        } else {
                            if (compFunc)
                                compFunc(armatureDisplay);
                        }
                    }
                });
            }
            if(texture)
            {
                armature = this.creatArmature(dragonbonesData,textureData,texture,bones);
                if(armature){
                        armatureDisplay = armature.display;
                        if (thisObject != null) {
                            compFunc.call(thisObject,armatureDisplay);
                        } else {
                            if (compFunc)
                                compFunc(armatureDisplay);
                        }
                    }
            }
            else
            {
                 xlLib.ResUtils.getRes(source + "_tex_png",(tr:any,url:string)=>{
                    texture = tr;
                    armature = this.creatArmature(dragonbonesData,textureData,texture,bones);
                    if(armature){
                        armatureDisplay = armature.display;
                        if (thisObject != null) {
                            compFunc.call(thisObject,armatureDisplay);
                        } else {
                            if (compFunc)
                                compFunc(armatureDisplay);
                        }
                    }
                });
            }
        }

        private static creatArmature(dragonbonesData,textureData,texture,bones?:string):dragonBones.Armature
        {
            if (!dragonbonesData || !textureData || !texture)
            {
               return;
            }
            var armature: dragonBones.Armature;
            var dragonbonesFactory:dragonBones.EgretFactory = new dragonBones.EgretFactory();
            var db:dragonBones.DragonBonesData = dragonBones.DataParser.parseDragonBonesData(dragonbonesData);
            dragonbonesFactory.addDragonBonesData(db);
            var tx:dragonBones.EgretTextureAtlas = new dragonBones.EgretTextureAtlas(texture, textureData);
            dragonbonesFactory.addTextureAtlasData(tx);
            armature = dragonbonesFactory.buildArmature(bones);
            return armature;
        }

        private static ticketStarted: boolean=false;


        public static stopDragonBonesArmature(armature:dragonBones.Armature,animationName?:string):void
        {
            var _time:number;
            egret.stopTick((timeStamp)=>{
                return true;
            }, armature);
            armature.animation.stop(animationName);
            dragonBones.WorldClock.clock.remove(armature);
        }
        /**
         * 运行龙骨动画
         * @param animationName {string} 指定播放的动画名称.
         * @param playTimes {number} 动画播放次数(0:循环播放, >=1:播放次数, NaN:使用动画数据中的播放时间), 默认值：NaN
         * @returns {AnimationState} 动画播放状态实例
         * 
         */ 
        public static runDragonBonesArmature(armature:dragonBones.Armature,animationName: string,playTimes?: number,isPlay:boolean = true) {
            if(armature == null) {
                xlLib.Console.error("armature不能为空");
                return;
                }
                dragonBones.WorldClock.clock.add(armature);
                if(isPlay){
                    armature.animation.gotoAndPlay(animationName, 0, -1, playTimes, 0);
                }
                else{
                    armature.animation.gotoAndStop(animationName,0);
                }
        }


        /**
         * 设置按钮变灰
         * 	xlLib.DisplayUtils.setButtonEnabled(this._btn_visitor,false);
         */ 
        public static setComponentEnabled(btn:eui.Component,enabled:boolean):void
        {
            if(!enabled)
            {
                var colorMatrix = [
                    0.3,0.6,0,0,0,
                    0.3,0.6,0,0,0,
                    0.3,0.6,0,0,0,
                    0,0,0,1,0
                ];
                var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
                btn.filters = [colorFlilter];
            }else{
                btn.filters = [];
            }
            btn.enabled = enabled;
        }


        /**
         * 删除龙骨动画
         */ 
        public static destoryDragonBonesArmature(armature:any) {
            if(armature == null) {
                xlLib.Console.error("armature不能为空");
                return;
            }
            dragonBones.WorldClock.clock.remove(armature);
            armature.animation.stop();
            armature.dispose();
        }
        /**
         * 文本资源
         */
        public static createTextLabel(txt: string = "none", color: number = 0x000000, size: number = 0, x: number = 0, y: number = 0, width: number = 0, height: number = 0, align: string = "left", rotation: number = 0, skewX: number = 0, strokeColor: number = 0, stroke: number = 0): egret.TextField {
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
                text.skewX = skewX
            text.x = x;
            text.y = y;
            return text;
        }

         /**
         * eui文本资源
         */
        public static createEuiTextLabel(txt: string = "none", color: number = 0x000000, size: number = 0, x: number = 0, y: number = 0, width: number = 0, height: number = 0, align: string = "left", rotation: number = 0, skewX: number = 0, strokeColor: number = 0, stroke: number = 0): eui.Label {
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
                text.skewX = skewX
            text.x = x;
            text.y = y;
            return text;
        }

        /**
         * 从父移除
         * @param obj
         */
        public static removeFromParent(obj: egret.DisplayObject): void {
            if (obj && obj.parent) {
                obj.parent.removeChild(obj);
            }
        }
        /**
    	* 移除显示容器中的所有子集但不包括自己 
    	* @param disContainer
    	*/
        public static removeAllChildren(disContainer: egret.DisplayObjectContainer): void {
            while (disContainer && disContainer.numChildren && disContainer.numChildren > 0) {
                this.removeFromParent(disContainer.getChildAt(0));
            }
        }

        /**
         * 截屏
         * @param obj
         * @param rect
         */
        public static catchScreen(obj: egret.DisplayObject, rect?: egret.Rectangle): string {
            var renderTexture: egret.RenderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(obj);
            return renderTexture.toDataURL("image/png", rect ? rect : new egret.Rectangle(0, 0, obj.width, obj.height));
        }

        /**
         * 截屏
         * @param obj
         * @param rect
         */
        public static catchScreenToTex(obj: egret.DisplayObject, rect?: egret.Rectangle, scale?: number): egret.RenderTexture {
            var renderTexture: egret.RenderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(obj, rect,scale);
            return renderTexture;
        }

        public static lightArea(area: egret.DisplayObject, maskAlpha: number = 0.8): egret.Bitmap {
            var container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            var mask: egret.Shape = xlLib.DisplayUtils.createShape(maskAlpha, xlLib.Global.screenWidth, xlLib.Global.screenHeight);
            container.addChild(mask);
            container.addChild(area);

            area.blendMode = egret.BlendMode.ERASE;


            var renderTexture: egret.RenderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(container);

            var bitmap: egret.Bitmap = new egret.Bitmap();
            bitmap.texture = renderTexture;
            return bitmap;
        }

    }
}
