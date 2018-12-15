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
 * @class Annular
 * @classdesc
 * 环形类
 * @param x 中心点X坐标
 * @param y 中心点Y坐标
 * @param r 环形内圆半径
 * @param r2 环形外圆半径
 * @param color 填充颜色
 */
var Annular = (function (_super) {
    __extends(Annular, _super);
    function Annular(x, y, r, r2, color) {
        var _this = _super.call(this) || this;
        _this.centerPoint = {
            x: 0,
            y: 0
        };
        _this.radius = 0;
        _this.radius2 = 0;
        _this.distance = 0;
        _this.color = 0;
        _this.spriteList = [];
        _this.centerPoint.x = x;
        _this.centerPoint.y = y;
        _this.radius = r;
        _this.radius2 = r2;
        _this.distance = r2 - r;
        _this.color = color;
        _this.createMaskRound();
        return _this;
    }
    Annular.prototype.createMaskRound = function () {
        var mask1 = new egret.Sprite();
        mask1.anchorOffsetX = 0.5;
        mask1.anchorOffsetY = 0.5;
        mask1.x = this.centerPoint.x;
        mask1.y = this.centerPoint.y;
        this.addChild(mask1);
        var sprite1 = new egret.Sprite();
        sprite1.anchorOffsetX = 0.5;
        sprite1.anchorOffsetY = 0.5;
        mask1.addChild(sprite1);
        this.spriteList.push(sprite1);
        /**绘制大圆 */
        var shape4 = new egret.Shape();
        shape4.graphics.beginFill(this.color, 1);
        shape4.graphics.drawCircle(this.radius2, this.radius2, this.radius2);
        shape4.graphics.endFill();
        sprite1.addChild(shape4);
        var rect1 = new egret.Shape();
        rect1.graphics.beginFill(0xFFFFFF, 1);
        rect1.graphics.drawRect(0, 0, shape4.width / 2, shape4.height);
        rect1.graphics.endFill();
        sprite1.addChild(rect1);
        mask1.width = sprite1.width;
        mask1.height = sprite1.height;
        mask1.mask = new egret.Rectangle(mask1.width / 2, 0, mask1.width / 2, mask1.height);
        sprite1.x = sprite1.width / 2;
        sprite1.y = sprite1.height / 2;
        sprite1.rotation = -180;
        var mask2 = new egret.Sprite();
        mask2.anchorOffsetX = -100; //******************** */
        mask2.anchorOffsetY = -100; //***************** */
        mask2.x = this.centerPoint.x;
        mask2.y = this.centerPoint.y;
        this.addChild(mask2);
        var sprite2 = new egret.Sprite();
        sprite2.anchorOffsetX = 0.5;
        sprite2.anchorOffsetY = 0.5;
        mask2.addChild(sprite2);
        this.spriteList.push(sprite2);
        sprite2.rotation = -180;
        var shape3 = new egret.Shape();
        shape3.graphics.beginFill(this.color, 1);
        shape3.graphics.drawCircle(this.radius2, this.radius2, this.radius2);
        shape3.graphics.endFill();
        sprite2.addChild(shape3);
        var rect2 = new egret.Shape();
        rect2.graphics.beginFill(0xFFFFFF, 1);
        rect2.graphics.drawRect(shape4.width / 2, 0, shape4.width / 2, shape4.height);
        rect2.graphics.endFill();
        sprite2.addChild(rect2);
        mask2.width = sprite2.width;
        mask2.height = sprite2.height;
        mask2.mask = new egret.Rectangle(0, 0, mask2.width / 2, mask2.height);
        sprite2.x = sprite2.width / 2;
        sprite2.y = sprite2.height / 2;
        var shape = new egret.Shape();
        shape.anchorOffsetX = 0.5;
        shape.anchorOffsetY = 0.5;
        shape.x = this.centerPoint.x;
        shape.y = this.centerPoint.y;
        shape.graphics.lineStyle(2, 0x999999, 1);
        shape.graphics.beginFill(0x00AAFF, 0);
        shape.graphics.drawCircle(this.radius2, this.radius2, this.radius2);
        shape.graphics.endFill();
        this.addChild(shape);
        var shape2 = new egret.Shape();
        shape2.anchorOffsetX = 0.5;
        shape2.anchorOffsetY = 0.5;
        shape2.x = this.centerPoint.x;
        shape2.y = this.centerPoint.y;
        shape2.graphics.lineStyle(2, 0x999999, 1);
        shape2.graphics.beginFill(0xFFFFFF, 1);
        shape2.graphics.drawCircle(this.radius, this.radius, this.radius);
        shape2.graphics.endFill();
        this.addChild(shape2);
    };
    /**
     * 设置环形填充百分比
     * @param percent {number} 百分比 0-100;
     */
    Annular.prototype.setPercent = function (percent) {
        if (percent <= 0 || percent > 100) {
            return;
        }
        if (percent <= 50) {
            this.spriteList[0].rotation += percent * 3.6;
        }
        else {
            this.spriteList[0].rotation += 50 * 3.6;
            this.spriteList[1].rotation += (percent - 50) * 3.6;
        }
    };
    /**
     * 设置带动画的环形填充百分比
     * @param percent {number} 百分比 0-100;
     * @param time {number} 填充360度所需时间;
     */
    Annular.prototype.setPercentWithAnimation = function (percent, time) {
        if (percent <= 0 || percent > 100) {
            return;
        }
        var speed = time / 360;
        if (percent <= 50) {
            var angle = percent * 3.6;
            egret.Tween.get(this.spriteList[0]).to({ rotation: angle - 180 }, angle * speed);
        }
        else {
            var self = this;
            var angle = 50 * 3.6;
            egret.Tween.get(this.spriteList[0]).to({ rotation: angle - 180 }, angle * speed).call(function () {
                var angle = (percent - 50) * 3.6;
                console.log(percent);
                egret.Tween.get(self.spriteList[1]).to({ rotation: angle - 180 }, angle * speed);
            });
        }
    };
    return Annular;
}(egret.Sprite));
__reflect(Annular.prototype, "Annular");
//# sourceMappingURL=Annular.js.map