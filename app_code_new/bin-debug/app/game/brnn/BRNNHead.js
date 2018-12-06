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
var BRNNHead = (function (_super) {
    __extends(BRNNHead, _super);
    function BRNNHead() {
        var _this = _super.call(this) || this;
        _this.skinName = "BRNNHeadSkin";
        return _this;
    }
    BRNNHead.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        var mask2 = new egret.Shape;
        mask2.graphics.beginFill(0xff0000);
        mask2.graphics.drawCircle(46, 46, 46);
        mask2.graphics.endFill();
        mask2.x = this.imghead.x + 3;
        mask2.y = this.imghead.y + 3;
        this.addChild(mask2);
        this.imghead.mask = mask2;
    };
    /**
     * _name 名字
     * _gold 金币
     * _imghead 头像图片
     */
    BRNNHead.prototype.setUserInfo = function (_name, _gold, _imghead) {
        this.imghead.source = _imghead;
        this.labelName.text = _name;
        this.labelGold.text = _gold;
    };
    BRNNHead.prototype.setGold = function (gold) {
        this.labelGold.text = gold + "";
    };
    BRNNHead.prototype.destroy = function () {
    };
    return BRNNHead;
}(eui.Component));
__reflect(BRNNHead.prototype, "BRNNHead");
//# sourceMappingURL=BRNNHead.js.map