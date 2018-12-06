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
 * 游戏中显示用户信息
 */
var QZNNHead = (function (_super) {
    __extends(QZNNHead, _super);
    function QZNNHead() {
        var _this = _super.call(this) || this;
        _this.skinName = "QZNNHeadSkin";
        return _this;
    }
    QZNNHead.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        /*
                var mask2: egret.Shape = new egret.Shape;
                mask2.graphics.beginFill(0xff0000);
                mask2.graphics.drawRect(0, 0, 117, 115);
                mask2.graphics.endFill();
                mask2.x = this.imghead.x + 3;
                mask2.y = this.imghead.y + 3;
                this.addChild(mask2);
                this.imghead.mask = mask2;
        */
        var shp = new egret.Shape();
        var colors = [0xCFF10A, 0xffffff, 0x68FFC8, 0x7D68FF];
        var i = 0;
        var t = 0;
        var currentColorIndex = 0;
        currentColorIndex = i % 4;
        shp.graphics.beginFill(colors[currentColorIndex]);
        shp.graphics.drawRect(0, (i * 30 + 15), 500, 20);
        //指定一种简单的单一颜色填充（0xCFF10A）。
        shp.graphics.beginFill(colors[currentColorIndex]);
        //循环绘制圆角矩形
        shp.graphics.drawRoundRect((t * 100 + i % 2 * 50), (i % 2 == 0 ? (i / 2 * 60) : ((i - 1) / 2 * 60 + 30)), 50, 50, 13, 13);
        shp.graphics.endFill();
        shp.graphics.beginFill(colors[currentColorIndex != 3 ? currentColorIndex + 1 : 0]);
        shp.graphics.drawRoundRect((t * 100 + i % 2 * 50 + 10), (i % 2 == 0 ? (i / 2 * 60 + 10) : ((i - 1) / 2 * 60 + 30 + 10)), 30, 30, 10, 10);
        shp.graphics.endFill();
        shp.graphics.lineStyle(4, 0xcc3333, 1);
        shp.graphics.drawRoundRect(50, 30, 200, 300, 20, 20);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    /**
     * _name 名字
     * _gold 金币
     * _imghead 头像图片
     */
    QZNNHead.prototype.setUserInfo = function (num, _name, _gold, _imghead) {
        this['imghead' + num].source = _imghead;
        this['imghead' + num].source = _imghead;
        this['labelName' + num].text = _name;
        this['labelGold' + num].text = _gold;
    };
    QZNNHead.prototype.setZhuang = function (value) {
        if (value) {
            this.addNNbankerEff();
        }
    };
    QZNNHead.prototype.removeNNbankerEff = function () {
        if (this.nnbankerEff) {
            this.nnbankerEff.stop();
            if (this.nnbankerEff.parent) {
                this.nnbankerEff.parent.removeChild(this.nnbankerEff);
            }
        }
    };
    QZNNHead.prototype.addNNbankerEff = function () {
        if (!this.nnbankerEff) {
            this.nnbankerEff = xlLib.DisplayUtils.createMovieClicp('nn_banker', 'nn_banker');
            this.nnbankerEff.x = 90;
            this.nnbankerEff.y = 70;
            this.nnbankerEff.frameRate = 10;
            this.nnbankerEff.touchEnabled = false;
        }
        this.addChild(this.nnbankerEff);
        this.nnbankerEff.gotoAndPlay(0, 1);
    };
    QZNNHead.prototype.setGold = function (gold) {
        this.labelGold.text = gold + "";
    };
    QZNNHead.prototype.destroy = function () {
        this.removeNNbankerEff();
    };
    return QZNNHead;
}(eui.Component));
__reflect(QZNNHead.prototype, "QZNNHead");
//# sourceMappingURL=QZNNHead.js.map