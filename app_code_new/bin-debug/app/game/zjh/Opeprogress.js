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
//**操作时间进度条遮罩 */
var Opeprogress = (function (_super) {
    __extends(Opeprogress, _super);
    function Opeprogress(w, h, method) {
        if (method === void 0) { method = Opeprogress.ByDegree; }
        var _this = _super.call(this) || this;
        _this.rotateTimer = -1;
        _this.lastArc = 0;
        _this.drawMethod = method;
        _this.drawFunc = method == 0 ? _this.drawByDegree : _this.drawByDistance;
        _this.width = w;
        _this.height = h;
        _this.long = (w + h) << 1;
        _this.radius = Math.sqrt(w * w + h * h) >> 1;
        _this.init();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdded, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemoved, _this);
        return _this;
    }
    Opeprogress.prototype.onAdded = function (e) {
        var _this = this;
        this.rotateTimer = setInterval(function () {
            _this.star.rotation += 10;
        }, 30);
    };
    Opeprogress.prototype.onRemoved = function (e) {
        if (this.rotateTimer != -1) {
            clearInterval(this.rotateTimer);
            this.rotateTimer = -1;
        }
    };
    Opeprogress.prototype.init = function () {
        this.star = new egret.Bitmap(RES.getRes('star'));
        this.display = new egret.Shape();
        this.msk = new egret.Shape();
        var g1 = this.display.graphics;
        g1.beginFill(0x00ff00, 0.3);
        g1.drawRoundRect(0, 0, this.width, this.height, 10, 10);
        g1.endFill();
        this.addChild(this.display);
        this.addChild(this.msk);
        this.display.mask = this.msk;
        this.resolutionArc = Math.atan(this.width / this.height);
        this.mg = this.msk.graphics;
        this.startX = this.width >> 1;
        this.startY = this.height >> 1;
        this.mg.moveTo(this.startX, this.startY);
        if (this.drawMethod == Opeprogress.ByDegree) {
            this.mg.lineTo(this.startX, this.startY - this.radius);
        }
        else {
            this.mg.lineTo(this.startX, 0);
            this.lastX = this.startX;
            this.lastY = 0;
        }
        this.star.x = this.startX;
        this.star.y = 0;
        this.star.anchorOffsetX = this.star.width >> 1;
        this.star.anchorOffsetY = this.star.height >> 1;
        this.addChild(this.star);
        // this.starLine = new egret.Shape();
        // this.addChild(this.starLine);
        // this.starLine.graphics.lineStyle(2,0x00ff);
        // this.starLine.graphics.moveTo(this.star.x,this.star.y);
    };
    //for debug
    // private starLine:egret.Shape;
    Opeprogress.prototype.drawByDegree = function () {
        var arc = this._percent * 2 * Math.PI;
        this.mg.beginFill(0xff);
        this.mg.moveTo(this.startX + Math.sin(this.lastArc) * this.radius, this.startY - Math.cos(this.lastArc) * this.radius);
        this.mg.lineTo(this.startX + Math.sin(arc) * this.radius, this.startY - Math.cos(arc) * this.radius);
        this.mg.lineTo(this.startX, this.startY);
        this.lastArc = arc;
        if (arc < this.resolutionArc || arc > Math.PI * 2 - this.resolutionArc) {
            this.star.y = 0;
            this.star.x = this.startX + this.startY * Math.tan(arc);
        }
        else if (arc >= this.resolutionArc && arc < Math.PI - this.resolutionArc) {
            this.star.x = this.width;
            this.star.y = this.startY - this.startX / Math.tan(arc);
        }
        else if (arc >= Math.PI - this.resolutionArc && arc < Math.PI + this.resolutionArc) {
            this.star.x = this.startX - Math.tan(arc) * this.startY;
            this.star.y = this.height;
        }
        else if (arc >= Math.PI + this.resolutionArc && arc < Math.PI * 2 - this.resolutionArc) {
            this.star.x = 0;
            this.star.y = this.startY + this.startX / Math.tan(arc);
            // console.log(arc/Math.PI,' PI');
        }
        // this.starLine.graphics.lineTo(this.star.x,this.star.y);
    };
    Opeprogress.prototype.drawByDistance = function () {
        var length = this.long * this._percent;
        this.mg.beginFill(0xff);
        this.mg.moveTo(this.lastX, this.lastY);
        if (length < this.width * 0.5) {
            this.star.y = 0;
            this.star.x = this.startX + length;
        }
        else if (length <= this.width * 0.5 + this.height) {
            this.star.x = this.width;
            this.star.y = length - this.width * 0.5;
        }
        else if (length <= this.width * 1.5 + this.height) {
            this.star.x = this.width * 1.5 - length + this.height;
            this.star.y = this.height;
        }
        else if (length <= this.long - 0.5 * this.width) {
            this.star.x = 0;
            this.star.y = 2 * this.height + 1.5 * this.width - length;
        }
        else if (length <= this.long) {
            this.star.y = 0;
            this.star.x = this.startX - this.long + length;
        }
        this.lastX = this.star.x;
        this.lastY = this.star.y;
        this.mg.lineTo(this.star.x, this.star.y);
        this.mg.lineTo(this.startX, this.startY);
        // this.starLine.graphics.lineTo(this.star.x,this.star.y);
    };
    Object.defineProperty(Opeprogress.prototype, "percent", {
        /**
         * 0-1
         */
        get: function () {
            return this._percent;
        },
        set: function (v) {
            if (v < 0 || v > 1) {
                console.warn('Percentage illegal:', v);
                if (this._percent >= 1)
                    return;
                else
                    v = 1;
            }
            if (this._percent == v)
                return;
            this._percent = v;
            // this.drawByDegree();
            this.drawFunc.apply(this);
        },
        enumerable: true,
        configurable: true
    });
    Opeprogress.ByDegree = 0;
    Opeprogress.ByDistance = 1;
    return Opeprogress;
}(egret.DisplayObjectContainer));
__reflect(Opeprogress.prototype, "Opeprogress");
//# sourceMappingURL=Opeprogress.js.map