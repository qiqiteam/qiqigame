var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var MySoundChannel = (function () {
        function MySoundChannel() {
            this.isStopped = false;
            this.isMusic = false;
            this.name = "";
            this.position = 0;
            this.egret_channel = null;
        }
        MySoundChannel.prototype.stop = function () {
            if (this.egret_channel) {
                //xlLib.Console.log("[SOUND MySoundChannel stop] " + this.egret_channel.position +":" + this.isStopped + ":" + this.egret_channel);
                this.position = this.egret_channel.position;
                this.egret_channel.stop();
                this.isStopped = true;
                this.egret_channel = null;
            }
        };
        return MySoundChannel;
    }());
    __reflect(MySoundChannel.prototype, "MySoundChannel");
    /**
    * 音频管理
    */
    var SoundMgr = (function () {
        function SoundMgr() {
            this._soundRes = {}; //egret.Sound
            this._musicVolume = 0.8;
            this._soundVolume = 1;
            this._musicOpen = true;
            this._soundOpen = true;
            this._activeSound = {};
            this._activeSoundLoop = {};
            this.loadTimeDic = {};
            this._currentMusicIndex = 0;
            this._currentMusicChanel = null;
        }
        Object.defineProperty(SoundMgr, "instance", {
            get: function () {
                var self = this;
                if (this._instance == null) {
                    this._instance = new SoundMgr();
                    xlLib.Utils.getLocalStorage(SoundMgr.SOUND_TOGGLE, function (data) {
                        if (data != null) {
                            self._instance.soundOpen = Boolean(Number(data));
                        }
                    });
                    xlLib.Utils.getLocalStorage(SoundMgr.MUSIC_TOGGLE, function (data) {
                        if (data != null) {
                            self._instance.musicOpen = Boolean(Number(data));
                        }
                    });
                    if (egret.Capabilities.engineVersion < "3.2.6") {
                        setTimeout(function () {
                            // xlLib.ZQGameSdk.speakerActive();
                            //xlLib.Console.log("[SOUND xlLib.ZQGameSdk.speakerActive] ");
                        }, 10000);
                    }
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        SoundMgr.prototype.onActive = function (e) {
            if (this._musicOpen) {
                if (egret.Capabilities.engineVersion < "3.2.6") {
                    setTimeout(function () {
                        // xlLib.ZQGameSdk.speakerActive();
                        SoundMgr.instance.resumeBgMusic();
                    }, 2000);
                }
            }
        };
        SoundMgr.prototype.onDeActive = function (e) {
            if (egret.Capabilities.engineVersion < "3.2.6") {
                SoundMgr.instance.pauseBgMusic();
            }
        };
        /**
         * 播放音效
         * @param soundName
         * @param loops
         * @param position
         * @param playEndBack
         * @param thisObj
         */
        SoundMgr.prototype.playSound = function (soundName, loops, position, playEndBack, thisObj) {
            if (loops === void 0) { loops = 1; }
            if (!this._soundOpen)
                return;
            var self = this;
            var channel;
            if (this._activeSound[soundName] && this._activeSound[soundName]["$loops"] == 0) {
                return;
            }
            if (playEndBack) {
                var onSoundEnd = function (soundName, channel) {
                    channel.stop(); //这里stop有冗余,不这样做,有可能导致内存泄露,有空再优化写法
                    self.stopSound(soundName);
                    if (playEndBack)
                        playEndBack.call(thisObj);
                };
                //this.lastPlayTime = new Date().getTime();
                channel = this.play(soundName, loops, position, [onSoundEnd], false);
            }
            else {
                channel = this.play(soundName, loops, position, [], false);
            }
            if (channel != null)
                this._activeSound[soundName] = channel;
            return channel;
        };
        SoundMgr.prototype.stopSounds = function () {
            for (var i in this._activeSound) {
                if (this._activeSound[i] != null && this._activeSound[i] != undefined) {
                    this._activeSound[i].stop();
                    this._activeSound[i] = null;
                    delete this._activeSound[i];
                }
            }
            for (var i in this._soundRes) {
                this._soundRes[i] = null;
                delete this._soundRes[i];
            }
            xlLib.ResUtils.resetSoundLoadTimes();
        };
        SoundMgr.prototype.stopSound = function (soundName) {
            if (this._activeSound[soundName] != null && this._activeSound[soundName] != undefined) {
                this._activeSound[soundName].stop();
                this._activeSound[soundName].dispatchEventWith(egret.Event.SOUND_COMPLETE);
                this._activeSound[soundName] = null;
                delete this._activeSound[soundName];
            }
        };
        SoundMgr.prototype.play = function (soundName, loops, position, asyn, isMusic) {
            if (loops === void 0) { loops = 1; }
            if (isMusic === void 0) { isMusic = true; }
            //soundName = "hb_backSound_1_mp3";
            var self = this;
            var callSoundBack;
            if (asyn && asyn.length > 0) {
                callSoundBack = function (e) {
                    var endChanel = e.currentTarget;
                    //xlLib.Console.log("[SOUND removeEventListener] " + soundName);
                    if (endChanel != null && endChanel != undefined) {
                        endChanel.removeEventListener(egret.Event.SOUND_COMPLETE, callSoundBack, self);
                        if (asyn != null && asyn != undefined) {
                            if (asyn.length > 1)
                                asyn[0].call(asyn[1], soundName, endChanel);
                            else
                                asyn[0](soundName, endChanel);
                        }
                    }
                };
            }
            var onLoadSound = function (data) {
                self._soundRes[soundName] = data;
                if (isMusic == true) {
                    var reset = true;
                    if (self._currentMusicChanel && self.loadTimeDic[self._currentMusicChanel.name] != null && self.loadTimeDic[soundName] != null && self.loadTimeDic[self._currentMusicChanel.name] > self.loadTimeDic[soundName]) {
                        reset = false;
                    }
                    if (reset == true) {
                        var channel = self.play(soundName, loops, position, asyn, isMusic);
                        self.resetCurrentMusic(channel, soundName);
                    }
                }
                else if (new Date().getTime() - self.loadTimeDic[soundName] <= 1000) {
                    self.loadTimeDic[soundName] = 0;
                    self._activeSound[soundName] = self.play(soundName, loops, position, asyn, isMusic);
                }
            };
            var lastTime = 0;
            if (this.loadTimeDic[soundName] != null) {
                lastTime = this.loadTimeDic[soundName];
            }
            this.loadTimeDic[soundName] = new Date().getTime();
            if (this._soundRes[soundName] == null || this._soundRes[soundName] == undefined) {
                if (RES.hasRes(soundName)) {
                    var res = RES.getRes(soundName);
                    if (res != null || res != undefined) {
                        onLoadSound(res);
                    }
                    else {
                        xlLib.Console.log("sound声音资源没有预加载到本地,建议进行预加载:" + soundName);
                        xlLib.ResUtils.getRes(soundName, onLoadSound, null, egret.URLLoaderDataFormat.SOUND);
                    }
                }
                else
                    xlLib.ResUtils.getRes(soundName, onLoadSound, null, egret.URLLoaderDataFormat.SOUND);
                return null;
            }
            if (this._soundRes[soundName]) {
                if (isMusic == false && new Date().getTime() - lastTime < 30) {
                    this.loadTimeDic[soundName] = lastTime;
                    return null;
                }
                var channel = this._soundRes[soundName].play(position, loops);
                if (channel != null && channel != undefined) {
                    if (callSoundBack) {
                        channel.addEventListener(egret.Event.SOUND_COMPLETE, callSoundBack, self);
                    }
                    var volume = (isMusic == true ? this._musicVolume : this._soundVolume);
                    channel.volume = volume;
                    return channel;
                }
                else {
                    return null;
                }
            }
            return null;
        };
        SoundMgr.prototype.randomSounds = function (soundsName) {
            if (soundsName)
                this._bgMusics = soundsName;
            var idx = Math.floor(this._bgMusics.length * Math.random());
            this.play(this._bgMusics[idx], 0);
        };
        SoundMgr.prototype.playBgMusic = function (musics, position) {
            var self = this;
            self._bgMusics = musics;
            if (position)
                self._currentMusicIndex = position;
            if (!self._musicOpen)
                return;
            if (self._bgMusics.length > 0) {
                if (self._currentMusicIndex >= self._bgMusics.length) {
                    self._currentMusicIndex = 0;
                }
                if (self._currentMusicChanel == null || self._bgMusics[self._currentMusicIndex] != self._currentMusicChanel.name) {
                    var channel = self.play(self._bgMusics[self._currentMusicIndex], 1, position, [self.onMusicEnd, self]);
                    self.resetCurrentMusic(channel, self._bgMusics[self._currentMusicIndex]);
                }
            }
        };
        SoundMgr.prototype.onMusicEnd = function (e) {
            var self = this;
            //e.currentTarget.removeEventListener(egret.Event.SOUND_COMPLETE, this.onMusicEnd, this);
            self._currentMusicIndex++;
            if (self._currentMusicIndex == self._bgMusics.length)
                self._currentMusicIndex = 0;
            if (!self._musicOpen)
                return;
            if (self._bgMusics.length > 0) {
                var channel = self.play(self._bgMusics[self._currentMusicIndex], 1, 0, [self.onMusicEnd, self]);
                self.resetCurrentMusic(channel, self._bgMusics[self._currentMusicIndex]);
            }
        };
        SoundMgr.prototype.resetCurrentMusic = function (channel, musicName) {
            if (channel == null || channel == undefined) {
                return;
            }
            var mychannel = new MySoundChannel();
            mychannel.name = musicName;
            mychannel.isMusic = true;
            mychannel.egret_channel = channel;
            mychannel.res = this._soundRes[musicName];
            if (this._currentMusicChanel != null && this._currentMusicChanel != mychannel && this._currentMusicChanel.name != mychannel.name) {
                this.stopBgMusic();
            }
            this._currentMusicChanel = mychannel;
            this._currentMusicChanel.isStopped = false;
            this._currentMusicChanel.egret_channel.volume = this._musicVolume;
        };
        SoundMgr.prototype.stopBgMusic = function () {
            if (this._currentMusicChanel) {
                this._currentMusicChanel.stop();
                this.loadTimeDic[this._currentMusicChanel.name] = 0;
                this._currentMusicChanel = null;
            }
        };
        SoundMgr.prototype.pauseBgMusic = function () {
            if (this._currentMusicChanel) {
                this._currentMusicChanel.stop();
            }
        };
        SoundMgr.prototype.resumeBgMusic = function () {
            if (!this._musicOpen || (this._currentMusicChanel && !this._currentMusicChanel.isStopped))
                return;
            var self = this;
            var position = 0;
            if (this._currentMusicChanel) {
                position = this._currentMusicChanel.position;
            }
            if (this._bgMusics && this._bgMusics.length > 0) {
                var channel = this.play(this._bgMusics[this._currentMusicIndex], 1, position, [self.onMusicEnd, self]);
                this.resetCurrentMusic(channel, this._bgMusics[this._currentMusicIndex]);
            }
        };
        SoundMgr.prototype.isPlayingBgMusic = function () {
            if (this._currentMusicChanel && this._currentMusicChanel.isStopped == false)
                return true;
            return false;
        };
        SoundMgr.prototype.isSoundPlaying = function (soundName) {
            if (this._activeSound[soundName] && this._activeSound[soundName].position)
                return true;
            else
                return false;
        };
        Object.defineProperty(SoundMgr.prototype, "musicVolume", {
            get: function () {
                return this._musicVolume;
            },
            set: function (value) {
                this._musicVolume = value;
                this._currentMusicChanel.egret_channel.volume = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundMgr.prototype, "soundVolume", {
            get: function () {
                return this._soundVolume;
            },
            set: function (value) {
                this._soundVolume = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundMgr.prototype, "musicOpen", {
            get: function () {
                return this._musicOpen;
            },
            set: function (b) {
                this._musicOpen = b;
                if (!b)
                    this.pauseBgMusic();
                else
                    this.resumeBgMusic();
                xlLib.Utils.setLocalStorage(SoundMgr.MUSIC_TOGGLE, Number(this._musicOpen));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundMgr.prototype, "soundOpen", {
            get: function () {
                return this._soundOpen;
            },
            set: function (b) {
                this._soundOpen = b;
                xlLib.Utils.setLocalStorage(SoundMgr.SOUND_TOGGLE, Number(this._soundOpen));
            },
            enumerable: true,
            configurable: true
        });
        SoundMgr.SOUND_TOGGLE = "sound_toggle";
        SoundMgr.MUSIC_TOGGLE = "music_toggle";
        return SoundMgr;
    }());
    xlLib.SoundMgr = SoundMgr;
    __reflect(SoundMgr.prototype, "xlLib.SoundMgr");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=SoundMgr.js.map