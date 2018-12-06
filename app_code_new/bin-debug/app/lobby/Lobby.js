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
/**
 * 大厅场景
 * */
var Lobby = (function (_super) {
    __extends(Lobby, _super);
    function Lobby() {
        var _this = _super.call(this) || this;
        _this.lobbyView = new LobbyView();
        _this.uiLayer.addChild(_this.lobbyView);
        return _this;
    }
    Lobby.prototype.destroy = function () {
        this.lobbyView.destroy();
        _super.prototype.destroy.call(this);
    };
    Lobby.prototype.resize = function () {
        if (this.lobbyView) {
            this.lobbyView.resize();
        }
    };
    return Lobby;
}(xlLib.LobbyScene));
__reflect(Lobby.prototype, "Lobby");
//# sourceMappingURL=Lobby.js.map