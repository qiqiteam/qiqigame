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
var Hint = (function (_super) {
    __extends(Hint, _super);
    function Hint() {
        var _this = _super.call(this) || this;
        _this.skinName = "HintSkin";
        return _this;
    }
    Hint.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Hint.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this._qding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    Hint.prototype.onClick = function (e) {
        xlLib.PopUpMgr.removePopUp(Hint, 1);
    };
    return Hint;
}(eui.Component));
__reflect(Hint.prototype, "Hint", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Hint.js.map