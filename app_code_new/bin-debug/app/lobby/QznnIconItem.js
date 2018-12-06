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
var QznnIconItem = (function (_super) {
    __extends(QznnIconItem, _super);
    function QznnIconItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "QznnIconItemSkin";
        return _this;
    }
    QznnIconItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
    };
    QznnIconItem.prototype.partRemoved = function (partName, instance) {
        if (this.effecthot) {
            this.effecthot.stop();
        }
        if (this.effectIcon) {
            this.effectIcon.stop();
        }
        _super.prototype.partRemoved.call(this, partName, instance);
    };
    QznnIconItem.prototype.onEnterGame = function (e) {
        var _this = this;
        EffectUtils.playButtonEffect(this, function () {
            _this.clickCallback();
        });
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    QznnIconItem.prototype.clickCallback = function () {
        if (!this.icondata.isOpen) {
            xlLib.TipsUtils.showFloatWordTips("该功能暂时开放！");
            return;
        }
        var rommView = xlLib.PopUpMgr.addPopUp(QZNNroomView, null, true, true, null, 1);
        rommView.setGameIconData(this.icondata);
    };
    QznnIconItem.prototype.setGameIconData = function (icondata) {
        this.icondata = icondata;
        this.bg_img.source = icondata.url;
        if (icondata.ishot) {
            this.effecthot = xlLib.DisplayUtils.createAsyncMovieClicp("effcet_hot", "effcet_hot");
            this.effecthot.x = 25;
            this.effecthot.y = 0;
            this.addChild(this.effecthot);
        }
        this.effecthot.play(-1);
        if (icondata.game == Const.GAME_NIUNIU) {
            this.effectIcon = xlLib.DisplayUtils.createAsyncMovieClicp("game_830_effect_logo", "game_830_effect_logo");
            this.effectIcon.x = 130;
            this.addChild(this.effectIcon);
        }
        this.effectIcon.play(-1);
        this.effectmask = xlLib.DisplayUtils.createAsyncMovieClicp("game_830_effect", "game_830_effect");
        this.effectmask.touchEnabled = false;
        this.effectmask.x = 20;
        this.effectmask.y = -9;
        this.addChild(this.effectmask);
    };
    return QznnIconItem;
}(eui.Component));
__reflect(QznnIconItem.prototype, "QznnIconItem");
//# sourceMappingURL=QznnIconItem.js.map