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
var GameIconItem = (function (_super) {
    __extends(GameIconItem, _super);
    function GameIconItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameIconItemSkin";
        return _this;
    }
    GameIconItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGame, this);
    };
    GameIconItem.prototype.partRemoved = function (partName, instance) {
        if (this.effecthot) {
            this.effecthot.stop();
        }
        if (this.effectIcon) {
            this.effectIcon.stop();
        }
        _super.prototype.partRemoved.call(this, partName, instance);
    };
    GameIconItem.prototype.onEnterGame = function (e) {
        var _this = this;
        EffectUtils.playButtonEffect(this, function () {
            _this.clickCallback();
        });
        xlLib.SoundMgr.instance.playSound("Special_menu_mp3");
    };
    GameIconItem.prototype.clickCallback = function () {
        if (!this.icondata.isOpen) {
            xlLib.TipsUtils.showFloatWordTips("该功能暂时开放！");
            return;
        }
        switch (this.icondata.type) {
            case Const.TYPE_QRNIUNIU:
                var brnnroomView = xlLib.PopUpMgr.addPopUp(BRNNroomView, null, true, true, null, 1);
                brnnroomView.setGameIconData(this.icondata);
                break;
            case Const.TYPE_TBNN:
                var tbrommView = xlLib.PopUpMgr.addPopUp(TBNNroomView, null, true, true, null, 1);
                tbrommView.setGameIconData(this.icondata);
                break;
            case Const.TYPE_JINGDIANBAIJIALE:
                var bjlroomView = xlLib.PopUpMgr.addPopUp(BJLroomView, null, true, true, null, 1);
                bjlroomView.setGameIconData(this.icondata);
                break;
            case Const.TYPE_JINGDIANJINHUA:
                var zjhrommView = xlLib.PopUpMgr.addPopUp(ZJHroomView, null, true, true, null, 1);
                zjhrommView.setGameIconData(this.icondata);
                break;
            case Const.TYPE_ERBAGANGJINDIAN:
                var erBaGangroomView = xlLib.PopUpMgr.addPopUp(ErBaGangroomView, null, true, true, null, 1);
                erBaGangroomView.setGameIconData(this.icondata);
                break;
        }
    };
    GameIconItem.prototype.setGameIconData = function (icondata) {
        this.icondata = icondata;
        this.bg_img.source = icondata.url;
        if (icondata.ishot) {
            this.effecthot = xlLib.DisplayUtils.createAsyncMovieClicp("effcet_hot", "effcet_hot");
            this.effecthot.x = 25;
            this.effecthot.y = 0;
            this.effecthot.play(-1);
            this.addChild(this.effecthot);
        }
        if (icondata.game == Const.GAME_ERBAGANG) {
            this.effectIcon = xlLib.DisplayUtils.createAsyncMovieClicp("game_720_effect_logo", "game_720_effect_logo");
            this.effectIcon.x = 130;
            this.effectIcon.play(-1);
            this.addChild(this.effectIcon);
            this.effectmask = xlLib.DisplayUtils.createAsyncMovieClicp("game_720_effect", "game_720_effect");
        }
        else if (icondata.game == Const.GAME_ZHAJINHUA) {
            this.effectmask = xlLib.DisplayUtils.createAsyncMovieClicp("game_610_effect", "game_610_effect");
        }
        else {
            this.effectmask = xlLib.DisplayUtils.createAsyncMovieClicp("game_230_effect", "game_230_effect");
        }
        this.effectmask.play(-1);
        this.effectmask.touchEnabled = false;
        this.effectmask.x = -12;
        this.effectmask.y = -11;
        this.addChild(this.effectmask);
    };
    return GameIconItem;
}(eui.Component));
__reflect(GameIconItem.prototype, "GameIconItem");
//# sourceMappingURL=GameIconItem.js.map