var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 自定义UI
 */
var uiCore;
(function (uiCore) {
    /**
     * 自定义动画类
     */
    var Animation = (function (_super) {
        __extends(Animation, _super);
        function Animation() {
            var _this = _super.call(this) || this;
            _this.animationSource = "demo{0}_png";
            _this.autoPlay = true;
            _this.loop = true;
            _this.loopTime = 0;
            _this.frameRate = 24;
            _this.frameNum = 0;
            _this.stopIndex = 0;
            _this.stopAndVisible = false;
            _this.loopID = -1;
            _this.frames = new Array;
            _this._currentFrame = -1;
            _this._isPlaying = false;
            _this.timerID = 0;
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemoved, _this);
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdded, _this);
            return _this;
        }
        Object.defineProperty(Animation.prototype, "isPlaying", {
            get: function () {
                return this._isPlaying;
            },
            enumerable: true,
            configurable: true
        });
        Animation.prototype.onRemoved = function (e) {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoved, this);
            this.stop();
        };
        Animation.prototype.onAdded = function (e) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
            this.refresh();
        };
        Animation.prototype.childrenCreated = function () {
            this.getResources();
        };
        Animation.prototype.getResources = function () {
            if (this.frames = [], 0 == this.frameNum)
                for (var t = 0; RES.getRes(uiCore.StringUtils.format(this.animationSource, t));)
                    this.frames.push(uiCore.StringUtils.format(this.animationSource, t)),
                        t++;
            else
                for (var t = 0; t < this.frameNum; t++)
                    this.frames.push(uiCore.StringUtils.format(this.animationSource, t));
        };
        Animation.prototype.play = function () {
            this.visible = true;
            //this._isPlaying && this.stop();
            //this.timerID;
            //clearInterval(this.timerID);
            //this.timerID = setInterval(this.onInterval.bind(this), this.frameRate);
            this.timerID = setInterval(this.onInterval.bind(this), this.frameRate);
            this._isPlaying = true;
        };
        Animation.prototype.playToIndex = function (e) {
            this.visible = true,
                this._isPlaying && this.stop(),
                e > this.frameNum - 1 && (e = this.frameNum - 1),
                this.stopIndex = e,
                this.timerID = setInterval(this.onIntervalControlByIndex.bind(this), this.frameRate),
                this._isPlaying = true;
        };
        Animation.prototype.stop = function () {
            this.currentFrame = 0,
                clearInterval(this.timerID),
                this._isPlaying = false,
                -1 != this.loopID && clearTimeout(this.loopID);
        };
        Animation.prototype.stopToIndex = function (e) {
            this.setFrame(e),
                this.currentFrame = e;
        };
        Object.defineProperty(Animation.prototype, "currentFrame", {
            set: function (e) {
                this._currentFrame = e;
            },
            enumerable: true,
            configurable: true
        });
        Animation.prototype.setFrame = function (e) {
            this.stop(),
                e > this.frameNum - 1 && (e = this.frameNum - 1),
                this.source = this.frames[e],
                this.visible = true;
        };
        Animation.prototype.getCurrentFrame = function () {
            return this._currentFrame;
        };
        Animation.prototype.refresh = function () {
            this.stop(),
                this.autoPlay ? (this.onInterval(), this.play()) : this.source = this.frames[this._currentFrame];
        };
        Animation.prototype.onInterval = function () {
            this.checkRealVisible(this) && (this.source = this.frames[this._currentFrame], this.currentFrame = this._currentFrame + 1, this._currentFrame == this.frames.length && (this.loop ? (this.currentFrame = 0, this.loopTime > 0 && (this.stop(), this.loopID = setTimeout(this.play.bind(this), this.loopTime))) : (this.stop(), this.visible = !this.stopAndVisible), this.completeEvent || (this.completeEvent = new egret.Event(egret.Event.ENDED)), this.dispatchEvent(this.completeEvent)));
        };
        Animation.prototype.onIntervalControlByIndex = function () {
            this.checkRealVisible(this) && (this.source = this.frames[this._currentFrame], this.currentFrame = this._currentFrame + 1, this._currentFrame == this.frames.length && (this.currentFrame = 0, this.play()), this._currentFrame == this.stopIndex && (this.stopToIndex(this.stopIndex), this.completeEvent || (this.completeEvent = new egret.Event(egret.Event.ENDED)), this.dispatchEvent(this.completeEvent)));
        };
        Animation.prototype.checkRealVisible = function (e) {
            for (var t = e; t && !egret.is(t, "egret.Stage");) {
                if (!t.visible)
                    return false;
                t = t.parent;
            }
            return true;
        };
        return Animation;
    }(eui.Image));
    uiCore.Animation = Animation;
    __reflect(Animation.prototype, "uiCore.Animation");
    /**
     * 自定义String
     */
    var StringUtils = (function () {
        function StringUtils() {
        }
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
        StringUtils.format = function (e, t) {
            return e.replace("{0}", "" + t);
        };
        StringUtils.isEmpty = function (e) {
            return null == e || void 0 == e || 0 == e.length;
        };
        StringUtils.trim = function (e) {
            return e.replace(/(^\s*)|(\s*$)/g, "");
        };
        StringUtils.textToRichText = function (e) {
            if (null != e)
                return (new egret.HtmlTextParser).parser(e);
        };
        return StringUtils;
    }());
    uiCore.StringUtils = StringUtils;
    __reflect(StringUtils.prototype, "uiCore.StringUtils");
    /**
     * 自定义String
     */
    var SoundManager = (function () {
        function SoundManager() {
            this.effectList = [];
            this._musicVolume = 1;
            this._effectVolume = 1;
            this.music = null;
        }
        SoundManager.playEffect = function (i) {
        };
        return SoundManager;
    }());
    uiCore.SoundManager = SoundManager;
    __reflect(SoundManager.prototype, "uiCore.SoundManager");
    var Animator = (function (_super) {
        __extends(Animator, _super);
        function Animator() {
            var _this = _super.call(this) || this;
            _this.source = "";
            _this.sourceGroup = "";
            _this.speed = 1;
            _this.autoPlay = true;
            _this.playOnce = false;
            _this.defentAnimationName = "";
            _this.stopAndVisible = false;
            _this._isLoaded = false;
            _this.isAdvanceTime = false;
            _this.EVENT_LOADCOMPLETE = "loadComplete";
            _this.onResourceLoadComplete = function (e) {
                e.groupName == this.sourceGroup && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
                    this.init());
            };
            return _this;
        }
        Object.defineProperty(Animator.prototype, "isPlaying", {
            get: function () {
                return this.armature ? this.armature.animation.isPlaying : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animator.prototype, "isLoaded", {
            get: function () {
                return this._isLoaded;
            },
            enumerable: true,
            configurable: true
        });
        Animator.prototype.getResource = function () {
            "" != this.source && ("" != this.sourceGroup ? RES.isGroupLoaded(this.sourceGroup) ? this.armature && this.contains(this.armature) ? (this.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this),
                this.removeChild(this.armature)) : this.init() : (RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
                RES.loadGroup(this.sourceGroup)) : this.loadRESComplete() && (RES.getResAsync(this.source + "_ske_json", this.loadRESComplete, this),
                RES.getResAsync(this.source + "_tex_json", this.loadRESComplete, this),
                RES.getResAsync(this.source + "_tex_png", this.loadRESComplete, this)));
        };
        Animator.prototype.loadRESComplete = function () {
            return RES.getRes(this.source + "_ske_json") && RES.getRes(this.source + "_tex_json") && RES.getRes(this.source + "_tex_png") ? (this.init(),
                !1) : true;
        };
        Animator.prototype.childrenCreated = function () {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemovedFromStage, this),
                this.getResource();
        };
        Animator.prototype.warn = function (e) {
            console.log(e);
        };
        Animator.prototype.init = function () {
            this._isLoaded = !0;
            var e = RES.getRes(this.source + "_ske_json"), i = RES.getRes(this.source + "_tex_json"), a = RES.getRes(this.source + "_tex_png");
            if (!e || !i || !a)
                return void this.warn("资源" + this.source + "不存在");
            this.armature && this.removeChild(this.armature);
            var n = dragonBones.EgretFactory.factory;
            n.getDragonBonesData(this.source) || (n.parseDragonBonesData(e),
                n.parseTextureAtlasData(i, a)),
                this.armature = n.buildArmatureDisplay(this.source, this.source);
            var s = n.getAllDragonBonesData(), r = s[this.source], o = r.armatureNames[0];
            if (this.armature = n.buildArmatureDisplay(o, this.source),
                this.addChild(this.armature),
                this.armature.addEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this),
                this.visible = !this.stopAndVisible,
                this.autoPlay) {
                var l = -1 == this.armature.animation.animationList.indexOf(this.defentAnimationName) ? this.armature.animation.animationList[0] : this.defentAnimationName;
                this.playOnce ? this.play(l, 1).timeScale = this.speed : this.play(l, 1).timeScale = this.speed;
            }
            this.isAdvanceTime || (egret.Ticker.getInstance().register(this.onTicker, this),
                this.isAdvanceTime = !0),
                this.dispatchEventWith(this.EVENT_LOADCOMPLETE);
        };
        Animator.prototype.onTicker = function (e) {
            dragonBones.WorldClock.clock.advanceTime(e / 1e3);
        };
        Animator.prototype.onRemovedFromStage = function (e) {
            this.stop(),
                this.isAdvanceTime || egret.Ticker.getInstance().unregister(this.onTicker, this),
                this.armature && (this.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this),
                    this.armature.dispose(true),
                    this.armature && this.armature.parent && this.armature.parent.removeChild(this.armature)),
                dragonBones.EgretFactory.factory.getDragonBonesData(this.source) && dragonBones.EgretFactory.factory.removeDragonBonesData(this.source, false),
                this.armature = null,
                this.okHander = null,
                this.thisObject = null,
                this.params = null;
        };
        Animator.prototype.onAnimationComplete = function (e) {
            this.visible = !this.stopAndVisible,
                this.dispatchEvent(e),
                this.okHander && this.okHander.apply(this.thisObject, this.params);
        };
        Animator.prototype.play = function (e, t) {
            return this.armature ? (this.armature.animation.stop(),
                this.visible = true,
                this.armature.animation.play(e, t)) : void 0;
        };
        Animator.prototype.stop = function () {
            this.armature && this.armature.animation && (this.armature.animation.stop(),
                this.visible = !this.stopAndVisible);
        };
        Animator.prototype.getAnimDuration = function () {
            return 1e3 * this.armature.animation.getState(this.armature.animation.animationList[0]).totalTime;
        };
        Animator.prototype.addHander = function (e, t, i) {
            this.okHander = e,
                this.thisObject = t,
                this.params = i;
        };
        Animator.prototype.replaceSlot = function (e, t) {
            var i = this.armature.armature.getSlot(e);
            i.displayController = "none",
                i.displayIndex = t;
        };
        return Animator;
    }(eui.Group));
    uiCore.Animator = Animator;
    __reflect(Animator.prototype, "uiCore.Animator");
    /**
        *Created by 渔歌烟火 on 2018/3/28.
        * 字体缓动动画
        */
    var LabelEffect = (function () {
        function LabelEffect() {
        }
        Object.defineProperty(LabelEffect, "instance", {
            get: function () {
                if (null == LabelEffect._instance) {
                    LabelEffect._instance = new LabelEffect();
                }
                return LabelEffect._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param target 显示对象
         * @param options 例如{ time: 1500,initNum:100,num: 88888, regulator: 50 }
         */
        LabelEffect.prototype.playEffect = function (target, options, str) {
            options = options || {};
            if (options.initNum == options.num)
                return;
            var time = options.time, //总时间--毫秒为单位 
            finalNum = options.num, //要显示的真实数值
            regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度          
            step = (finalNum - options.initNum) / (time / regulator), /*每30ms增加的数值--*/ count = options.initNum, //计数器       
            initial = options.initNum;
            var timer = setInterval(function () {
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
                if (t == initial)
                    return;
                initial = t;
                target.text = str + initial + "";
            }, 30);
        };
        return LabelEffect;
    }());
    uiCore.LabelEffect = LabelEffect;
    __reflect(LabelEffect.prototype, "uiCore.LabelEffect");
})(uiCore || (uiCore = {}));
/*
    var uiCore;
!function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.source = "",
            t.sourceGroup = "",
            t.speed = 1,
            t.autoPlay = !0,
            t.playOnce = !1,
            t.defentAnimationName = "",
            t.stopAndVisible = !1,
            t._isLoaded = !1,
            t
        }
        return __extends(t, e),
        Object.defineProperty(t.prototype, "isPlaying", {
            get: function() {
                return this.armature ? this.armature.animation.isPlaying : !1
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isLoaded", {
            get: function() {
                return this._isLoaded
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.getResource = function() {
            "" != this.source && ("" != this.sourceGroup ? RES.isGroupLoaded(this.sourceGroup) ? this.armature && this.contains(this.armature) ? (this.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this),
            this.removeChild(this.armature)) : this.init() : (RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
            RES.loadGroup(this.sourceGroup)) : this.loadRESComplete() && (RES.getResAsync(this.source + "_ske_json", this.loadRESComplete, this),
            RES.getResAsync(this.source + "_tex_json", this.loadRESComplete, this),
            RES.getResAsync(this.source + "_tex_png", this.loadRESComplete, this)))
        }
        ,
        t.prototype.loadRESComplete = function() {
            return RES.getRes(this.source + "_ske_json") && RES.getRes(this.source + "_tex_json") && RES.getRes(this.source + "_tex_png") ? (this.init(),
            !1) : !0
        }
        ,
        t.prototype.onResourceLoadComplete = function(e) {
            e.groupName == this.sourceGroup && (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
            this.init())
        }
        ,
        t.prototype.childrenCreated = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemovedFromStage, this),
            this.getResource()
        }
        ,
        t.prototype.init = function() {
            this._isLoaded = !0;
            var e = RES.getRes(this.source + "_ske_json")
              , i = RES.getRes(this.source + "_tex_json")
              , a = RES.getRes(this.source + "_tex_png");
            if (!e || !i || !a)
                return void warn("资源" + this.source + "不存在");
            this.armature && this.removeChild(this.armature);
            var n = dragonBones.EgretFactory.factory;
            n.getDragonBonesData(this.source) || (n.parseDragonBonesData(e),
            n.parseTextureAtlasData(i, a)),
            this.armature = n.buildArmatureDisplay(this.source, this.source);
            var s = n.getAllDragonBonesData()
              , r = s[this.source]
              , o = r.armatureNames[0];
            if (this.armature = n.buildArmatureDisplay(o, this.source),
            this.addChild(this.armature),
            this.armature.addEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this),
            this.visible = !this.stopAndVisible,
            this.autoPlay) {
                var l = -1 == this.armature.animation.animationList.indexOf(this.defentAnimationName) ? this.armature.animation.animationList[0] : this.defentAnimationName;
                this.playOnce ? this.play(l, 1).timeScale = this.speed : this.play(l).timeScale = this.speed
            }
            t.isAdvanceTime || (egret.Ticker.getInstance().register(t.onTicker, this),
            t.isAdvanceTime = !0),
            this.dispatchEventWith(t.EVENT_LOADCOMPLETE)
        }
        ,
        t.onTicker = function(e) {
            dragonBones.WorldClock.clock.advanceTime(e / 1e3)
        }
        ,
        t.prototype.onRemovedFromStage = function(e) {
            this.stop(),
            t.isAdvanceTime || egret.Ticker.getInstance().unregister(t.onTicker, this),
            this.armature && (this.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.onAnimationComplete, this),
            this.armature.dispose(!0),
            this.armature && this.armature.parent && this.armature.parent.removeChild(this.armature)),
            dragonBones.EgretFactory.factory.getDragonBonesData(this.source) && dragonBones.EgretFactory.factory.removeDragonBonesData(this.source, !1),
            this.armature = null,
            this.okHander = null,
            this.thisObject = null,
            this.params = null
        }
        ,
        t.prototype.onAnimationComplete = function(e) {
            this.visible = !this.stopAndVisible,
            this.dispatchEvent(e),
            this.okHander && this.okHander.apply(this.thisObject, this.params)
        }
        ,
        t.prototype.play = function(e, t) {
            return this.armature ? (this.armature.animation.stop(),
            this.visible = !0,
            this.armature.animation.play(e, t)) : void 0
        }
        ,
        t.prototype.stop = function() {
            this.armature && this.armature.animation && (this.armature.animation.stop(),
            this.visible = !this.stopAndVisible)
        }
        ,
        t.prototype.getAnimDuration = function() {
            return 1e3 * this.armature.animation.getState(this.armature.animation.animationList[0]).totalTime
        }
        ,
        t.prototype.addHander = function(e, t, i) {
            this.okHander = e,
            this.thisObject = t,
            this.params = i
        }
        ,
        t.prototype.replaceSlot = function(e, t) {
            var i = this.armature.armature.getSlot(e);
            i.displayController = "none",
            i.displayIndex = t
        }
        ,
        t.isAdvanceTime = !1,
        t.EVENT_LOADCOMPLETE = "loadComplete",
        t
    }(eui.Group);
    e.Animator = t,
    __reflect(t.prototype, "uiCore.Animator")
}(uiCore || (uiCore = {}));
}
*/
/*
var uiCore;
!function(e) {
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
                for (var t = 0; t < this.effectList.length; t++)
                    this.effectList[t].volume(e)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.init = function() {
            this.isInited || (this.isInited = !0,
            e.EventManager.getInstance(this).addEventListener(e.Application.APPEVENT_PAUSE, this.onAppPause, this),
            e.EventManager.getInstance(this).addEventListener(e.Application.APPEVENT_RESUME, this.onAppResume, this))
        }
        ,
        t.onAppPause = function() {
            this._lastmusicVolume = this.musicVolume,
            0 != this.musicVolume && (this.musicVolume = 0),
            this._lasteffectVolume = this.effectVolume,
            0 != this.effectVolume && (this.effectVolume = 0),
            this.stopAllEffects()
        }
        ,
        t.onAppResume = function() {
            void 0 != this._lastmusicVolume && (this.musicVolume = this._lastmusicVolume,
            this._lastmusicVolume = 0),
            void 0 != this._lasteffectVolume && (this.effectVolume = this._lasteffectVolume,
            this._lasteffectVolume = 0)
        }
        ,
        t.playMusic = function(e, t, i, a, n) {
            var s = this;
            if (void 0 === t && (t = !0),
            void 0 === i && (i = 0),
            void 0 === a && (a = null),
            void 0 === n && (n = null),
            this.init(),
            this.music) {
                if (this.musicSource == e)
                    return;
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
            }),
            this.music.play()) : RES.getResAsync(e, function(e, t) {
                t == s.musicSource && s.playMusic(s.musicSource, s.musicLoop)
            }, this)
        }
        ,
        t.stopMusic = function() {
            this.musicSource = null,
            this.music && (this.music.stop(),
            this.music = null)
        }
        ,
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
                        for (var t = 0; t < e.SoundManager.effectList.length; t++)
                            e.SoundManager.effectList[t] == n && e.SoundManager.effectList.splice(t, 1)
                    }
                });
                e.SoundManager.effectList.push(n),
                n.play()
            } else
                RES.getResAsync(t, function(e, t) {}, this)
        }
        ,
        t.stopAllEffects = function() {
            for (; this.effectList.length; )
                this.effectList.shift().stop()
        }
        ,
        t.effectList = [],
        t._musicVolume = 1,
        t._effectVolume = 1,
        t
    }();
    e.SoundManager = t,
    __reflect(t.prototype, "uiCore.SoundManager")
}(uiCore || (uiCore = {}));
*/ 
//# sourceMappingURL=uiCore.js.map