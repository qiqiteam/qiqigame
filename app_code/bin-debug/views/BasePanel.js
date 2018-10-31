/**
  * 面板基类
  */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var xlLib;
(function (xlLib) {
    var BasePanel = (function (_super) {
        __extends(BasePanel, _super);
        // 构造函数
        function BasePanel(assetsName) {
            if (assetsName === void 0) { assetsName = "assets"; }
            var _this = _super.call(this) || this;
            _this.w = 0;
            _this.h = 0;
            _this.assets = RES.getRes(assetsName);
            _this.w = xlLib.Global.screenWidth;
            _this.h = xlLib.Global.screenHeight;
            _this.initPanel();
            return _this;
        }
        // 初始化面板
        BasePanel.prototype.initPanel = function () {
        };
        // 初始化面板数据
        BasePanel.prototype.initData = function () {
        };
        // 进入面板
        BasePanel.prototype.onEnter = function () {
        };
        // 退出面板
        BasePanel.prototype.onExit = function () {
        };
        // 关闭面板
        BasePanel.prototype.closePanel = function () {
            xlLib.PopUpMgr.removePopUp(this);
        };
        // 获取面板宽度
        BasePanel.prototype.getWidth = function () {
            return this.width;
        };
        // 获取面板高度
        BasePanel.prototype.getHeight = function () {
            return this.height;
        };
        return BasePanel;
    }(egret.DisplayObjectContainer));
    xlLib.BasePanel = BasePanel;
    __reflect(BasePanel.prototype, "xlLib.BasePanel");
})(xlLib || (xlLib = {}));
