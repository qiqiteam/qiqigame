/**
 * 百人牛牛洗牌
 */
class BrnnShuffle extends eui.Group {

    public cardName: string = "brnn_card";
    public loop: boolean = true;
    public childNum: number = 30;
    public loopTime: number = 150;
    public imgInterval: number = -1;

    constructor(str:string = "brnn_card") {
        super();
        
        this.horizontalCenter = 277;
        this.verticalCenter = -222;
        this.width = 72;
        this.height = 72;
        this.touchEnabled = false;
        this.touchThrough = true;
        this.cardName = str;

        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoved, this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
    }

    public onRemoved() {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoved, this);
        this.removeAllEffect();
    }
    public onAdded() {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
        this.removeAllEffect();
        this.addEffectChild();
    }

    public addEffectChild() {
        for (var e = 0; e < this.childNum; e++) {
            var t = new eui.Image;
            var i = e - this.childNum;
            var a = 0;
            if(e%2 == 0) {
                a = 50 * Math.random();
            } else {
                a = 50 * -Math.random()
            }

            t.source = this.cardName + "_" + (e + 1) + "_png";
            t.horizontalCenter = 0;
            t.verticalCenter = i;
            t.scaleX = t.scaleY = 0.6;
            this.addChild(t);
            egret.Tween.get(t, {
                loop: this.loop
            }).to({
                horizontalCenter: a,
                verticalCenter: Math.random() * i
            },
            this.loopTime).to({
                horizontalCenter: 0,
                verticalCenter: i
            },
            this.loopTime).wait(200).to({
                horizontalCenter: -a,
                verticalCenter: Math.random() * i
            },
            this.loopTime).to({
                horizontalCenter: 0,
                verticalCenter: i
            },
            this.loopTime);
        }
        this.imgInterval = egret.setInterval(this.changeImg, this, 200);
    }

    public changeImg() {
        for (var e = this.numChildren, t = 0; e > t; t++) {
            let img = this.getChildAt(t) as eui.Image;
            img.source && (img.source = this.cardName + "_" + (Math.floor(52 * Math.random()) + 1) + "_png");
        }
    }

    public removeAllEffect() {
        egret.Tween.removeTweens(this),
        this.removeChildren(),
        this.imgInterval && (egret.clearInterval(this.imgInterval), this.imgInterval = -1)
    }

    public destroy() {
        this.removeAllEffect()
    }

}







/*

var BrnnShuffle1 = function(e) {
    function t(t) {
        var i = e.call(this) || this;
        return i.cardName = "brnn_card",
        i.loop = !0,
        i.childNum = 30,
        i.loopTime = 150,
        i.imgInterval = -1,
        i.horizontalCenter = 277,
        i.verticalCenter = -222,
        i.width = 72,
        i.height = 72,
        i.touchEnabled = !1,
        i.touchThrough = !0,
        t = t ? t: "brnn_card",
        i.cardName = t,
        i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.onRemoved, i),
        i.addEventListener(egret.Event.ADDED_TO_STAGE, i.onAdded, i),
        i
    }
    return __extends(t, e),
    t.prototype.onRemoved = function(e) {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoved, this),
        this.removeAllEffect()
    },
    t.prototype.onAdded = function(e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this),
        this.removeAllEffect(),
        this.addEffectChild()
    },
    t.prototype.addEffectChild = function() {
        for (var e = 0; e < this.childNum; e++) {
            var t = new eui.Image,
            i = e - this.childNum,
            a = e % 2 == 0 ? 50 * Math.random() : 50 * -Math.random();
            t.source = this.cardName + "_" + (e + 1) + "_png",
            t.horizontalCenter = 0,
            t.verticalCenter = i,
            t.scaleX = t.scaleY = .6,
            this.addChild(t),
            egret.Tween.get(t, {
                loop: this.loop
            }).to({
                horizontalCenter: a,
                verticalCenter: Math.random() * i
            },
            this.loopTime).to({
                horizontalCenter: 0,
                verticalCenter: i
            },
            this.loopTime).wait(200).to({
                horizontalCenter: -a,
                verticalCenter: Math.random() * i
            },
            this.loopTime).to({
                horizontalCenter: 0,
                verticalCenter: i
            },
            this.loopTime)
        }
        this.imgInterval = egret.setInterval(this.changeImg, this, 200)
    },
    t.prototype.changeImg = function() {
        for (var e = this.numChildren,
        t = 0; e > t; t++) {
            var i = this.getChildAt(t);
            i.source && (i.source = this.cardName + "_" + (Math.floor(52 * Math.random()) + 1) + "_png")
        }
    },
    t.prototype.removeAllEffect = function() {
        egret.Tween.removeTweens(this),
        this.removeChildren(),
        this.imgInterval && (egret.clearInterval(this.imgInterval), this.imgInterval = -1)
    },
    t.prototype.destroy = function() {
        this.removeAllEffect()
    },
    t
} (eui.Group);
__reflect(BrnnShuffle.prototype, "BrnnShuffle");*/