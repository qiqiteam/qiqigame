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
var ComBox = (function (_super) {
    __extends(ComBox, _super);
    function ComBox(txtColor) {
        if (txtColor === void 0) { txtColor = 0xFFFFFF; }
        var _this = _super.call(this) || this;
        _this.skinName = "ComBoxSkin";
        _this.tab_txt.textColor = txtColor;
        _this.initEventListener();
        return _this;
    }
    ComBox.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.isShowMenu(false);
    };
    ComBox.prototype.initEventListener = function () {
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
        this.table_list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.itemClickHandler, this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    ComBox.prototype.isShowMenu = function (isShow) {
        this.isShow = isShow;
        this.scroller.visible = isShow;
        this.table_list.visible = isShow;
        this.bgImg.visible = isShow;
    };
    ComBox.prototype.onTouchStageHandler = function (evt) {
        if (!(evt.target == this.sel_btn
            || evt.target == this.combox_grp
            || evt.target == this.scroller
            || evt.target == this.table_list)) {
            this.isShowMenu(false);
        }
    };
    ComBox.prototype.itemClickHandler = function (evt) {
        var item = evt.target;
        if (!item)
            return;
        if (this.cb) {
            this.cb.call(this.thisArg, item.data);
        }
        if (item.data) {
            this.tab_txt.text = item.data.name;
        }
        this.isShowMenu(false);
    };
    ComBox.prototype.onTouchHandler = function (evt) {
        if (evt.target == this.sel_btn || evt.target == this.combox_grp) {
            this.isShowMenu(!this.isShow);
        }
    };
    ComBox.prototype.setComBoxData = function (dataSource, cb, thisArg) {
        this.cb = cb;
        this.thisArg = thisArg;
        this.arrayCollection = new eui.ArrayCollection(dataSource);
        this.table_list.dataProvider = this.arrayCollection;
        this.table_list.itemRenderer = ComBoxItem;
        this.scroller.viewport = this.table_list;
        this.tab_txt.text = dataSource[0].name;
    };
    ComBox.prototype.destroy = function () {
        this.cb = null;
        this.thisArg = null;
        this.scroller.stopAnimation();
        this.table_list.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.itemClickHandler, this);
        egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandler, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
    };
    return ComBox;
}(eui.Component));
__reflect(ComBox.prototype, "ComBox");
//# sourceMappingURL=ComBox.js.map