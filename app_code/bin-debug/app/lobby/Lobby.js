var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
