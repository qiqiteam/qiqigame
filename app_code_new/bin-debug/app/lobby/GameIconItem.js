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
            xlLib.DisplayUtils.destoryDragonBonesArmature(this.effecthot, "newAnimation");
        }
        if (this.effectnew) {
            xlLib.DisplayUtils.destoryDragonBonesArmature(this.effectnew, "newAnimation");
        }
        xlLib.DisplayUtils.destoryDragonBonesArmature(this.effectmask, "Sprite");
        xlLib.DisplayUtils.destoryDragonBonesArmature(this.effectfront, "Sprite");
        xlLib.DisplayUtils.destoryDragonBonesArmature(this.effectIcon, "newAnimation");
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
        var armatureDisplay;
        var armatureIconDisplay;
        this.effectmask = xlLib.DisplayUtils.createDragonBonesDisplay('bg_xiaoliuguang', "Sprite");
        dragonBones.WorldClock.clock.add(this.effectmask);
        armatureDisplay = this.effectmask.getDisplay();
        armatureDisplay.width = this.width;
        armatureDisplay.height = this.height;
        armatureDisplay.x = 350;
        armatureDisplay.y = 250;
        this.addChild(armatureDisplay);
        xlLib.DisplayUtils.runDragonBonesArmature(this.effectmask, "Sprite");
        if (icondata.ishot) {
            this.effecthot = xlLib.DisplayUtils.createDragonBonesDisplay('bg_remen', "Armature");
            dragonBones.WorldClock.clock.add(this.effecthot);
            armatureDisplay = this.effecthot.getDisplay();
            armatureDisplay.x = 25;
            armatureDisplay.y = 92;
            this.addChild(armatureDisplay);
            xlLib.DisplayUtils.runDragonBonesArmature(this.effecthot, "newAnimation");
        }
        if (icondata.isNew) {
            this.effectnew = xlLib.DisplayUtils.createDragonBonesDisplay('bg_xin', "Armature");
            dragonBones.WorldClock.clock.add(this.effectnew);
            armatureDisplay = this.effectnew.getDisplay();
            armatureDisplay.x = 80;
            armatureDisplay.y = 92;
            this.addChild(armatureDisplay);
            xlLib.DisplayUtils.runDragonBonesArmature(this.effectnew, "newAnimation");
        }
        switch (icondata.type) {
            case Const.TYPE_TBNN:
                this.effectfront = xlLib.DisplayUtils.createDragonBonesDisplay('bg_tongbiniuniu', "Sprite");
                armatureDisplay = this.effectfront.getDisplay();
                armatureDisplay.x = 63;
                armatureDisplay.y = -15;
                this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('tbnn_rukou', "armatureName");
                armatureIconDisplay = this.effectIcon.getDisplay();
                armatureIconDisplay.x = 63;
                armatureIconDisplay.y = -15;
                break;
            case Const.TYPE_JINGDIANBAIJIALE:
                this.effectfront = xlLib.DisplayUtils.createDragonBonesDisplay('bg_baijiale', "Sprite");
                armatureDisplay = this.effectfront.getDisplay();
                armatureDisplay.x = 70;
                armatureDisplay.y = 255;
                this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('bjl_rukou', "armatureName");
                armatureIconDisplay = this.effectIcon.getDisplay();
                armatureIconDisplay.x = 70;
                armatureIconDisplay.y = 255;
                break;
            case Const.TYPE_ERBAGANGJINDIAN:
                this.effectfront = xlLib.DisplayUtils.createDragonBonesDisplay('bg_ewrbagang', "Sprite");
                armatureDisplay = this.effectfront.getDisplay();
                armatureDisplay.x = -220;
                armatureDisplay.y = 255;
                this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('ebg_rukou', "armatureName");
                armatureIconDisplay = this.effectIcon.getDisplay();
                armatureIconDisplay.x = -220;
                armatureIconDisplay.y = 255;
                break;
            case Const.TYPE_QRNIUNIU:
                this.effectfront = xlLib.DisplayUtils.createDragonBonesDisplay('bg_bairenniuniu', "Sprite");
                armatureDisplay = this.effectfront.getDisplay();
                armatureDisplay.x = 350;
                armatureDisplay.y = -15;
                this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('brnn_rukou', "armatureName");
                armatureIconDisplay = this.effectIcon.getDisplay();
                armatureIconDisplay.x = 350;
                armatureIconDisplay.y = -15;
                break;
            case Const.TYPE_JINGDIANJINHUA:
                this.effectfront = xlLib.DisplayUtils.createDragonBonesDisplay('bg_zhajinhua', "Sprite");
                armatureDisplay = this.effectfront.getDisplay();
                armatureDisplay.x = 350;
                armatureDisplay.y = 255;
                this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('zjh_rukou', "armatureName");
                armatureIconDisplay = this.effectIcon.getDisplay();
                armatureIconDisplay.x = 350;
                armatureIconDisplay.y = 255;
                break;
        }
        this.addChildAt(armatureIconDisplay, 0);
        dragonBones.WorldClock.clock.add(this.effectIcon);
        xlLib.DisplayUtils.runDragonBonesArmature(this.effectIcon, "newAnimation");
        this.addChild(armatureDisplay);
        dragonBones.WorldClock.clock.add(this.effectfront);
        xlLib.DisplayUtils.runDragonBonesArmature(this.effectfront, "Sprite");
    };
    return GameIconItem;
}(eui.Component));
__reflect(GameIconItem.prototype, "GameIconItem");
//# sourceMappingURL=GameIconItem.js.map