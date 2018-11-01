var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserInfo = (function () {
    function UserInfo() {
    }
    UserInfo.getInstance = function () {
        if (!this._instance) {
            this._instance = new UserInfo();
        }
        return this._instance;
    };
    Object.defineProperty(UserInfo.prototype, "userType", {
        get: function () {
            return this.puserType;
        },
        set: function (type) {
            this.puserType = type;
        },
        enumerable: true,
        configurable: true
    });
    return UserInfo;
}());
__reflect(UserInfo.prototype, "UserInfo");
//# sourceMappingURL=UserInfo.js.map