var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NNGameList = (function (_super) {
    __extends(NNGameList, _super);
    function NNGameList() {
        var _this = _super.call(this) || this;
        _this.dataSource = [];
        _this.skinName = "NNGameListSkin";
        return _this;
    }
    NNGameList.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initData();
        this.arrayCollection = new eui.ArrayCollection(this.dataSource);
        this.list.dataProvider = this.arrayCollection;
        this.list.itemRenderer = NNGameItem;
        this.scroller.viewport = this.list;
        this.scroller.bounces = false;
        this.initEventListener();
    };
    NNGameList.prototype.initEventListener = function () {
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        // EventUtil.addEventListener(EventConst.ON_GAME_STATUS_CHANGE, this.onGameStatusChange, this);
        // EventUtil.addEventListener(EventConst.ON_NN_PEARL_APPEND, this.listAutoScroll, this, )
    };
    NNGameList.prototype.onGameStatusChange = function (data) {
    };
    NNGameList.prototype.initData = function () {
        this.dataSource = [];
    };
    NNGameList.prototype.freshData = function () {
        var obj = this.dataSource[0];
        obj.isNew = false;
        this.arrayCollection.itemUpdated(obj);
    };
    NNGameList.prototype.listAutoScroll = function (data) {
        this.scroller.validateNow();
        var num = this.scroller.viewport.contentWidth - this.scroller.viewport.width;
        if (num > 0) {
            this.scroller.viewport.scrollH = num;
        }
    };
    NNGameList.prototype.newData = function () {
        var obj = this.dataSource[0];
        obj.isNew = true;
        this.arrayCollection.itemUpdated(obj);
    };
    NNGameList.prototype.destroy = function () {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        // EventUtil.removeEventListener(EventConst.ON_GAME_STATUS_CHANGE, this.onGameStatusChange, this);
        // EventUtil.removeEventListener(EventConst.ON_NN_PEARL_APPEND, this.listAutoScroll, this);
    };
    return NNGameList;
}(eui.Component));
__reflect(NNGameList.prototype, "NNGameList");
