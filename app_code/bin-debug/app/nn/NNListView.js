var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 牛牛列表界面
 * */
var NNListView = (function (_super) {
    __extends(NNListView, _super);
    function NNListView() {
        var _this = _super.call(this) || this;
        _this.dataSource = [];
        _this.skinName = "NNListViewSkin";
        return _this;
    }
    NNListView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initEventListener();
        this.init();
        this.resize();
    };
    NNListView.prototype.resize = function () {
        if (this.bgImg) {
            this.bgImg.width = xlLib.Global.screenWidth;
            this.bgImg.height = xlLib.Global.screenHeight;
        }
        if (this.scroller) {
            this.scroller.height = xlLib.Global.screenHeight - 72;
        }
    };
    NNListView.prototype.initEventListener = function () {
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
    };
    NNListView.prototype.init = function () {
        this.itemArrayCollection = new eui.ArrayCollection(this.dataSource);
        this.table_list.dataProvider = this.itemArrayCollection;
        // this.table_list.itemRenderer = NNTableItem;
        this.scroller.viewport = this.table_list;
    };
    NNListView.prototype.onTouchHandler = function (evt) {
        if (evt.target == this.rt_btn) {
            xlLib.SceneMgr.instance.changeScene(Lobby);
        }
    };
    NNListView.prototype.destroy = function () {
        xlLib.UIMgr.instance.hideLoading(TipsLoading);
        this.table_list.removeChildren();
        this.scroller.stopAnimation();
        this.scroller.removeChildren();
        this.table_list = null;
        this.dataSource = null;
        this.itemArrayCollection = null;
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
    };
    return NNListView;
}(eui.Component));
__reflect(NNListView.prototype, "NNListView");
