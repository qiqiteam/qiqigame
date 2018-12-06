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
/** 日期选择界面 */
var DatePickerView = (function (_super) {
    __extends(DatePickerView, _super);
    function DatePickerView() {
        var _this = _super.call(this) || this;
        _this.skinName = "DatePickerViewSkin";
        _this.initEventListener();
        return _this;
    }
    DatePickerView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.resize();
    };
    DatePickerView.prototype.resize = function () {
        if (this.close_rect) {
            this.close_rect.width = xlLib.Global.screenWidth;
            this.close_rect.height = xlLib.Global.screenHeight;
        }
    };
    DatePickerView.prototype.showDatePicker = function (currdate, cb, thisArg) {
        this.currdate = currdate;
        this.cb = cb;
        this.thisArg = thisArg;
        this.updataDateText();
        this.resize();
    };
    DatePickerView.prototype.updataDateText = function () {
        this.time_txt.text = GlobalFunction.getDateString(this.currdate) + '/08:00:00';
        this.year_txt.text = this.currdate.getFullYear() + "";
        this.month_txt.text = this.currdate.getMonth() + 1 + "";
        this.date_txt.text = this.currdate.getDate() + "";
    };
    DatePickerView.prototype.initEventListener = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    };
    DatePickerView.prototype.onTouchHandler = function (evt) {
        if (evt.target == this.close_rect || evt.target == this.qx_btn) {
            xlLib.PopUpMgr.removePopUp(this, 1);
        }
        else if (evt.target == this.qd_btn) {
            if (this.cb) {
                this.cb.call(this.thisArg, this.currdate);
            }
            xlLib.PopUpMgr.removePopUp(this, 1);
        }
        else if (evt.target == this.addyear_btn) {
            this.currdate.setFullYear(this.currdate.getFullYear() + 1);
            this.updataDateText();
        }
        else if (evt.target == this.addmonth_btn) {
            this.currdate.setMonth(this.currdate.getMonth() + 1);
            this.updataDateText();
        }
        else if (evt.target == this.adddate_btn) {
            this.currdate.setDate(this.currdate.getDate() + 1);
            this.updataDateText();
        }
        else if (evt.target == this.reyear_btn) {
            this.currdate.setFullYear(this.currdate.getFullYear() - 1);
            this.updataDateText();
        }
        else if (evt.target == this.remonth_btn) {
            this.currdate.setMonth(this.currdate.getMonth() - 1);
            this.updataDateText();
        }
        else if (evt.target == this.redate_btn) {
            this.currdate.setDate(this.currdate.getDate() - 1);
            this.updataDateText();
        }
    };
    DatePickerView.prototype.destroy = function () {
        this.cb = null;
        this.thisArg = null;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
    };
    return DatePickerView;
}(eui.Component));
__reflect(DatePickerView.prototype, "DatePickerView");
//# sourceMappingURL=DatePickerView.js.map