/**
 * 自定义UI
 */
module uiCore {

    /**
     * 自定义动画类
     */
    export class Animation extends eui.Image {
        public animationSource: string = "demo{0}_png";
        public autoPlay: boolean = true;
        public loop: boolean = true;
        public loopTime: number = 0;
        public frameRate: number = 24;
        public frameNum: number = 0;
        public stopIndex: number = 0;
        public stopAndVisible: boolean = false;
        public loopID: number = -1;
        public frames: string[] = new Array;
        public _currentFrame: number = -1;
        public _isPlaying: boolean = false;


        public completeEvent: egret.Event;

        constructor() {
            super();

            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoved, this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
        }

        public get isPlaying(): boolean {
            return this._isPlaying;
        }

        public onRemoved(e) {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoved, this);
            this.stop();
        }

        public onAdded(e) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
            this.refresh();
        }

        protected childrenCreated(): void {
            this.getResources();
        }

        public getResources() {
            if (this.frames = [], 0 == this.frameNum) for (var t = 0; RES.getRes(uiCore.StringUtils.format(this.animationSource, t));) this.frames.push(uiCore.StringUtils.format(this.animationSource, t)),
                t++;
            else for (var t = 0; t < this.frameNum; t++) this.frames.push(uiCore.StringUtils.format(this.animationSource, t))
        }

        private timerID: number = 0;
        public play() {
            this.visible = true;
            //this._isPlaying && this.stop();
            //this.timerID;
            //clearInterval(this.timerID);
            //this.timerID = setInterval(this.onInterval.bind(this), this.frameRate);
            this.timerID = setInterval(this.onInterval.bind(this), this.frameRate);
            this._isPlaying = true;
        }

        public playToIndex(e) {
            this.visible = true,
                this._isPlaying && this.stop(),
                e > this.frameNum - 1 && (e = this.frameNum - 1),
                this.stopIndex = e,
                this.timerID = setInterval(this.onIntervalControlByIndex.bind(this), this.frameRate),
                this._isPlaying = true
        }

        public stop() {
            this.currentFrame = 0,
                clearInterval(this.timerID),
                this._isPlaying = false,
                -1 != this.loopID && clearTimeout(this.loopID)
        }

        public stopToIndex(e) {
            this.setFrame(e),
                this.currentFrame = e
        }

        public set currentFrame(e) {
            this._currentFrame = e;
        }

        public setFrame(e) {
            this.stop(),
                e > this.frameNum - 1 && (e = this.frameNum - 1),
                this.source = this.frames[e],
                this.visible = true
        }

        public getCurrentFrame() {
            return this._currentFrame
        }

        public refresh() {
            this.stop(),
                this.autoPlay ? (this.onInterval(), this.play()) : this.source = this.frames[this._currentFrame]
        }

        public onInterval(): void {
            this.checkRealVisible(this) && (this.source = this.frames[this._currentFrame], this.currentFrame = this._currentFrame + 1, this._currentFrame == this.frames.length && (this.loop ? (this.currentFrame = 0, this.loopTime > 0 && (this.stop(), this.loopID = setTimeout(this.play.bind(this), this.loopTime))) : (this.stop(), this.visible = !this.stopAndVisible), this.completeEvent || (this.completeEvent = new egret.Event(egret.Event.ENDED)), this.dispatchEvent(this.completeEvent)))
        }

        public onIntervalControlByIndex() {
            this.checkRealVisible(this) && (this.source = this.frames[this._currentFrame], this.currentFrame = this._currentFrame + 1, this._currentFrame == this.frames.length && (this.currentFrame = 0, this.play()), this._currentFrame == this.stopIndex && (this.stopToIndex(this.stopIndex), this.completeEvent || (this.completeEvent = new egret.Event(egret.Event.ENDED)), this.dispatchEvent(this.completeEvent)))
        }

        public checkRealVisible(e) {
            for (var t = e; t && !egret.is(t, "egret.Stage");) {
                if (!t.visible) return false;
                t = t.parent;
            }
            return true;
        }
    }

    /**
     * 自定义String
     */
    export class StringUtils {
        /*
        public static format(e) {
            for (var t = [], i = 1; i < arguments.length; i++){
                t[i - 1] = arguments[i];
            } 
            for (var a = e, n = 0; n < t.length; n++) {
                a = a.replace("{" + n + "}", t[n].toString());
            }
            return a;
        }*/

        public static format(e, t) {
            return e.replace("{0}", "" + t);
        }

        public static isEmpty(e) {
            return null == e || void 0 == e || 0 == e.length;
        }

        public static trim(e) {
            return e.replace(/(^\s*)|(\s*$)/g, "");
        }

        public static textToRichText(e) {
            if (null != e) return (new egret.HtmlTextParser).parser(e);
        }
    }

    /**龙骨动画 */
    export class Animator extends eui.Group {

        public source: string = "";
        public sourceGroup: string = "";
        public autoPlay: boolean = true;
        public playOnce: boolean = false;
        public defentAnimationName: string = "";
        public stopAndVisible: boolean = false;
        public _isLoaded: boolean = false;

        //public speed: number = 1;
        public isAdvanceTime = false;
        public EVENT_LOADCOMPLETE = "loadComplete";
        public armature: dragonBones.EgretArmatureDisplay;

        //public okHander;
        //public thisObject;
        //public params;

        constructor() {
            super();
        }

        public get isPlaying(): boolean {
            return this.armature ? this.armature.animation.isPlaying : false
        }

        public get isLoaded(): boolean {
            return this._isLoaded;
        }

        public getResource() {
            "" != this.source && ("" != this.sourceGroup ? RES.isGroupLoaded(this.sourceGroup) ? this.armature && this.contains(this.armature) ? (this.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this), this.removeChild(this.armature)) : this.init() : (RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.loadGroup(this.sourceGroup)) : this.loadRESComplete() && (RES.getResAsync(this.source + "_ske_json", this.loadRESComplete, this), RES.getResAsync(this.source + "_tex_json", this.loadRESComplete, this), RES.getResAsync(this.source + "_tex_png", this.loadRESComplete, this)))
        }

        public loadRESComplete() {
            return RES.getRes(this.source + "_ske_json") && RES.getRes(this.source + "_tex_json") && RES.getRes(this.source + "_tex_png") ? (this.init(), !1) : !0
        }

        public onResourceLoadComplete = function (e) {
            e.groupName == this.sourceGroup && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), this.init())
        }

        protected childrenCreated(): void {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemovedFromStage, this);
            this.getResource();
        }

        public warn(e) {
            console.log(e);
        }

        public init() {
            this._isLoaded = !0;
            var e = RES.getRes(this.source + "_ske_json"),
                i = RES.getRes(this.source + "_tex_json"),
                a = RES.getRes(this.source + "_tex_png");
            if (!e || !i || !a) return void this.warn("资源" + this.source + "不存在");
            this.armature && this.removeChild(this.armature);
            var n = dragonBones.EgretFactory.factory;
            if (n.getDragonBonesData(this.source) || (n.parseDragonBonesData(e), n.parseTextureAtlasData(i, a)), this.armature = n.buildArmatureDisplay(this.defentAnimationName, this.source), this.addChild(this.armature), this.armature.addEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this), this.visible = !this.stopAndVisible, this.autoPlay) {
                var s = -1 == this.armature.animation.animationList.indexOf(this.defentAnimationName) ? this.armature.animation.animationList[0] : this.defentAnimationName;
                this.playOnce ? this.play(s, 1) : this.play(s)
            }
            this.isAdvanceTime || (egret.Ticker.getInstance().register(this.onTicker, this), this.isAdvanceTime = !0),
                this.dispatchEventWith(this.EVENT_LOADCOMPLETE)
        }

        public onTicker(e) {
            dragonBones.WorldClock.clock.advanceTime(e / 1000)
        }

        public onRemovedFromStage(e) {
            this.stop(),
                this.isAdvanceTime || egret.Ticker.getInstance().unregister(this.onTicker, this),
                this.armature && (this.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this), this.armature.dispose(!0), this.armature && this.armature.parent && this.armature.parent.removeChild(this.armature)),
                dragonBones.EgretFactory.factory.getDragonBonesData(this.source) && dragonBones.EgretFactory.factory.removeDragonBonesData(this.source, !1),
                this.armature = null
            //this.okHander = null,
            //this.thisObject = null,
            //this.params = null
        }

        public onAnimationComplete(e) {
            this.visible = !this.stopAndVisible,
                this.dispatchEvent(e)
            //this.okHander && this.okHander.apply(this.thisObject, this.params)
        }

        public play(e, t = -1) {
            this.armature && (this.armature.animation.stop(), this.visible = !0, this.armature.animation.play(e, t))
        }

        public stop() {
            this.armature && this.armature.animation && (this.armature.animation.stop(), this.visible = !this.stopAndVisible)
        }

        public getAnimDuration() {
            return 1e3 * this.armature.animation.getState(this.armature.animation.animationList[0]).totalTime
        }

        //public addHander(e, t, i) {
        //this.okHander = e,
        //this.thisObject = t,
        //this.params = i
        //}
    }

    /** 
        *Created by 渔歌烟火 on 2018/3/28.
        * 字体缓动动画
        */
    export class LabelEffect {
        private static _instance: LabelEffect;
        public static get instance(): LabelEffect {
            if (null == LabelEffect._instance) {
                LabelEffect._instance = new LabelEffect();
            }
            return LabelEffect._instance;
        }
        /**
         * @param target 显示对象
         * @param options 例如{ time: 1500,initNum:100,num: 88888, regulator: 50 }
         */
        public playEffect(target: any, options: any, str) {
            options = options || {};
            if (options.initNum == options.num) return;
            var time = options.time,//总时间--毫秒为单位 
                finalNum = options.num, //要显示的真实数值
                regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度          
                step = (finalNum - options.initNum) / (time / regulator),/*每30ms增加的数值--*/
                count = options.initNum, //计数器       
                initial = options.initNum;
            var timer = setInterval(() => {
                count = count + step;
                if (count >= finalNum && options.initNum < finalNum) {
                    clearInterval(timer);
                    count = finalNum;
                }

                if (count <= finalNum && options.initNum > finalNum) {
                    clearInterval(timer);
                    count = finalNum;
                }
                //t未发生改变的话就直接返回         
                var t = Math.floor(count);
                if (t == initial) return;
                initial = t;
                target.text = str + initial + "";
            }, 30);
        }
    }



    export class KShape extends egret.Shape {

        constructor() {
            super();
            this.graphics.beginFill(0xff0000);
            this.graphics.drawRect(0, 0, 100, 100);
            this.graphics.endFill();
        }

        public childrenCreated() {

        }
    }

    /*
        export class SoundManager extends eui.Group {
    
            public effectList = [];
            public _musicVolume:number = 1;
            public _effectVolume:number = 1;
    
            public get musicVolume(): boolean {
                return this._musicVolume;
            }
    
            public set musicVolume(e) {
                this._musicVolume = e,
                    this.music && this.music.volume(e)
            }
    
            public get effectVolume(): boolean {
                return this._effectVolume
            }
    
            public set effectVolume(e) {
                this._effectVolume = e;
                for (var t = 0; t < this.effectList.length; t++) this.effectList[t].volume(e)
            }
    
            public init() {
                this.isInited || (this.isInited = !0, e.EventManager.getInstance(this).addEventListener(e.Application.APPEVENT_PAUSE, this.onAppPause, this), e.EventManager.getInstance(this).addEventListener(e.Application.APPEVENT_RESUME, this.onAppResume, this))
            }
    
            public onAppPause() {
                this._lastmusicVolume = this.musicVolume,
                0 != this.musicVolume && (this.musicVolume = 0),
                this._lasteffectVolume = this.effectVolume,
                0 != this.effectVolume && (this.effectVolume = 0),
                this.stopAllEffects()
            }
    
            public onAppResume() {
                void 0 != this._lastmusicVolume && (this.musicVolume = this._lastmusicVolume, this._lastmusicVolume = 0),
                void 0 != this._lasteffectVolume && (this.effectVolume = this._lasteffectVolume, this._lasteffectVolume = 0)
            }
    
            public playMusic(e, t, i, a, n) {
                var s = this;
                if (void 0 === t && (t = !0), void 0 === i && (i = 0), void 0 === a && (a = null), void 0 === n && (n = null), this.init(), this.music) {
                    if (this.musicSource == e) return;
                    this.music.stop(),
                    this.music = null
                }
                this.musicSource = e,
                this.musicLoop = t;
                var r = RES.getRes(e);
                r ? (this.music = new Howl({
                    src: [r.url],
                    loop: t,
                    volume: this._musicVolume
                }), this.music.play()) : RES.getResAsync(e,
                function(e, t) {
                    t == s.musicSource && s.playMusic(s.musicSource, s.musicLoop)
                },
                this)
            }
    
            public stopMusic() {
                this.musicSource = null,
                this.music && (this.music.stop(), this.music = null)
            }
    
            public playEffect(t, i) {
                void 0 === i && (i = !1),
                this.init();
                var a = RES.getRes(t);
                if (a) {
                    var n = new Howl({
                        src: [a.url],
                        loop: i,
                        volume: this._effectVolume,
                        onend: function() {
                            for (var t = 0; t < e.SoundManager.effectList.length; t++) e.SoundManager.effectList[t] == n && e.SoundManager.effectList.splice(t, 1)
                        }
                    });
                    e.SoundManager.effectList.push(n),
                    n.play()
                } else RES.getResAsync(t,
                function(e, t) {},
                this)
            }
    
            public stopAllEffects() {
                for (; this.effectList.length;) this.effectList.shift().stop()
            }
        }
    
    
        var uiCore; !
    function(e) {
        var t = function() {
            function t() {}
    
    
            return Object.defineProperty(t, "musicVolume", {
                get: function() {
                    return this._musicVolume
                },
                set: function(e) {
                    this._musicVolume = e,
                    this.music && this.music.volume(e)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t, "effectVolume", {
                get: function() {
                    return this._effectVolume
                },
                set: function(e) {
                    this._effectVolume = e;
                    for (var t = 0; t < this.effectList.length; t++) this.effectList[t].volume(e)
                },
                enumerable: !0,
                configurable: !0
            }),
            t.init = function() {
                this.isInited || (this.isInited = !0, e.EventManager.getInstance(this).addEventListener(e.Application.APPEVENT_PAUSE, this.onAppPause, this), e.EventManager.getInstance(this).addEventListener(e.Application.APPEVENT_RESUME, this.onAppResume, this))
            },
            t.onAppPause = function() {
                this._lastmusicVolume = this.musicVolume,
                0 != this.musicVolume && (this.musicVolume = 0),
                this._lasteffectVolume = this.effectVolume,
                0 != this.effectVolume && (this.effectVolume = 0),
                this.stopAllEffects()
            },
            t.onAppResume = function() {
                void 0 != this._lastmusicVolume && (this.musicVolume = this._lastmusicVolume, this._lastmusicVolume = 0),
                void 0 != this._lasteffectVolume && (this.effectVolume = this._lasteffectVolume, this._lasteffectVolume = 0)
            },
            t.playMusic = function(e, t, i, a, n) {
                var s = this;
                if (void 0 === t && (t = !0), void 0 === i && (i = 0), void 0 === a && (a = null), void 0 === n && (n = null), this.init(), this.music) {
                    if (this.musicSource == e) return;
                    this.music.stop(),
                    this.music = null
                }
                this.musicSource = e,
                this.musicLoop = t;
                var r = RES.getRes(e);
                r ? (this.music = new Howl({
                    src: [r.url],
                    loop: t,
                    volume: this._musicVolume
                }), this.music.play()) : RES.getResAsync(e,
                function(e, t) {
                    t == s.musicSource && s.playMusic(s.musicSource, s.musicLoop)
                },
                this)
            },
            t.stopMusic = function() {
                this.musicSource = null,
                this.music && (this.music.stop(), this.music = null)
            },
            t.playEffect = function(t, i) {
                void 0 === i && (i = !1),
                this.init();
                var a = RES.getRes(t);
                if (a) {
                    var n = new Howl({
                        src: [a.url],
                        loop: i,
                        volume: this._effectVolume,
                        onend: function() {
                            for (var t = 0; t < e.SoundManager.effectList.length; t++) e.SoundManager.effectList[t] == n && e.SoundManager.effectList.splice(t, 1)
                        }
                    });
                    e.SoundManager.effectList.push(n),
                    n.play()
                } else RES.getResAsync(t,
                function(e, t) {},
                this)
            },
            t.stopAllEffects = function() {
                for (; this.effectList.length;) this.effectList.shift().stop()
            },
            t.effectList = [],
            t._musicVolume = 1,
            t._effectVolume = 1,
            t
        } ();
        e.SoundManager = t,
        __reflect(t.prototype, "uiCore.SoundManager")
    } (uiCore || (uiCore = {}));
    
    */
}