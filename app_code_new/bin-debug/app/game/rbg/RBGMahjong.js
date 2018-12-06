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
 * 麻将牌
 */
var RBGMahjong = (function (_super) {
    __extends(RBGMahjong, _super);
    function RBGMahjong() {
        var _this = _super.call(this) || this;
        _this.skinName = "RBGMahjongSkin";
        return _this;
    }
    RBGMahjong.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    RBGMahjong.prototype.setPai = function (num) {
        if (num != null) {
            this._mahjong_card.source = "mahjong_" + num + "_png";
        }
        else {
            this._mahjong_card.source = "";
        }
    };
    RBGMahjong.prototype.setAnPai = function (value) {
        if (value == true) {
            this._mahjong_cover.visible = true;
        }
        else {
            this._mahjong_cover.visible = false;
        }
    };
    RBGMahjong.prototype.destroy = function () {
    };
    return RBGMahjong;
}(eui.Component));
__reflect(RBGMahjong.prototype, "RBGMahjong");
//# sourceMappingURL=RBGMahjong.js.map