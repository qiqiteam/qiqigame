var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var xlLib;
(function (xlLib) {
    var CommonModelMgr = (function () {
        function CommonModelMgr() {
            this._models = {};
        }
        Object.defineProperty(CommonModelMgr, "Instance", {
            get: function () {
                if (this._self == null) {
                    this._self = new CommonModelMgr();
                }
                return this._self;
            },
            enumerable: true,
            configurable: true
        });
        CommonModelMgr.prototype.addEvents = function () {
            //xlLib.Global.addEventListener(xlLib.ZqEvent.COMMON_MODEL, this.onCommonMode, this);
        };
        CommonModelMgr.prototype.registerCommonModel = function (modelId, model, loadGroupName) {
            if (this._models[modelId] == null) {
                this._models[modelId] = model;
                this._models["loadName_" + modelId] = loadGroupName;
            }
            else {
                xlLib.Console.warn("registerCommonModel:公用模块只能注册一次");
            }
        };
        CommonModelMgr.prototype.openCommonModel = function (modelId, openType, param, openFunc, thisObj) {
            if (openType === void 0) { openType = 0; }
            var md;
            if (!this._models[modelId])
                return;
            var self = this;
            function openModel() {
                if (openFunc) {
                    //自定义打开方式
                    md = new self._models[modelId](param);
                    openFunc.call(thisObj, md);
                }
                else {
                    if (openType == 0) {
                        md = new self._models[modelId](param);
                        xlLib.PopUpMgr.addPopUp(md, null, true, true);
                    }
                    else {
                        xlLib.UIMgr.instance.showUI(self._models[modelId], param);
                    }
                }
            }
            if (this._models["loadName_" + modelId]) {
                xlLib.ResLoadMgr.instance.load(this._models["loadName_" + modelId], openModel, function () { xlLib.Console.error("加载资源组失败:" + "loadName_" + modelId); }, null, xlLib.UIMgr.instance.tipsLoadUI, true, true);
            }
            else
                openModel();
            return md;
        };
        CommonModelMgr.prototype.showCommonUI = function (UIId, data) {
            if (!this._models[UIId])
                return;
            return xlLib.UIMgr.instance.showUI(this._models[UIId], data);
        };
        CommonModelMgr.prototype.getCommonUI = function (UIId, data) {
            if (!this._models[UIId])
                return;
            var obj = new this._models[UIId](data);
            return obj;
        };
        CommonModelMgr._self = null;
        return CommonModelMgr;
    }());
    xlLib.CommonModelMgr = CommonModelMgr;
    __reflect(CommonModelMgr.prototype, "xlLib.CommonModelMgr");
})(xlLib || (xlLib = {}));
//# sourceMappingURL=CommonModelMgr.js.map