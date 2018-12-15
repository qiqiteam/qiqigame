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
        var armatureDisplay;
        var armatureIconDisplay;
        this.effectmask = xlLib.DisplayUtils.createDragonBonesDisplay('bg_daliuguang', "Sprite");
        dragonBones.WorldClock.clock.add(this.effectmask);
        armatureDisplay = this.effectmask.getDisplay();
        armatureDisplay.width = this.width;
        armatureDisplay.height = this.height;
        armatureDisplay.x = 650;
        armatureDisplay.y = 260;
        this.addChild(armatureDisplay);
        xlLib.DisplayUtils.runDragonBonesArmature(this.effectmask, "Sprite");
        if (icondata.ishot) {
            this.effecthot = xlLib.DisplayUtils.createDragonBonesDisplay('bg_remen', "Armature");
            dragonBones.WorldClock.clock.add(this.effecthot);
            armatureDisplay = this.effecthot.getDisplay();
            armatureDisplay.x = 10;
            armatureDisplay.y = 95;
            this.addChild(armatureDisplay);
            xlLib.DisplayUtils.runDragonBonesArmature(this.effecthot, "newAnimation");
        }
        if (icondata.isNew) {
            this.effectnew = xlLib.DisplayUtils.createDragonBonesDisplay('bg_xin', "Armature");
            dragonBones.WorldClock.clock.add(this.effectnew);
            armatureDisplay = this.effectnew.getDisplay();
            armatureDisplay.x = 60;
            armatureDisplay.y = 95;
            this.addChild(armatureDisplay);
            xlLib.DisplayUtils.runDragonBonesArmature(this.effectnew, "newAnimation");
        }
        switch (icondata.type) {
            case Const.TYPE_QZNN:
                this.effectfront = xlLib.DisplayUtils.createDragonBonesDisplay('bg_qiangzhuangniuniu', "Sprite");
                armatureDisplay = this.effectfront.getDisplay();
                armatureDisplay.x = 650;
                armatureDisplay.y = 260;
                this.effectIcon = xlLib.DisplayUtils.createDragonBonesDisplay('qznn_rukou', "armatureName");
                armatureIconDisplay = this.effectIcon.getDisplay();
                armatureIconDisplay.x = 650;
                armatureIconDisplay.y = 260;
                break;
        }
        this.addChildAt(armatureIconDisplay, 0);
        dragonBones.WorldClock.clock.add(this.effectIcon);
        xlLib.DisplayUtils.runDragonBonesArmature(this.effectIcon, "newAnimation");
        this.addChild(armatureDisplay);
        dragonBones.WorldClock.clock.add(this.effectfront);
        xlLib.DisplayUtils.runDragonBonesArmature(this.effectfront, "Sprite");
    };
    return QznnIconItem;
}(eui.Component));
__reflect(QznnIconItem.prototype, "QznnIconItem");
//# sourceMappingURL=QznnIconItem.js.map