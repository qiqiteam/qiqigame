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
var GameIconListView = (function (_super) {
    __extends(GameIconListView, _super);
    function GameIconListView() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameIconListViewSkin";
        return _this;
    }
    GameIconListView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameIconListView.prototype.setData = function (iconlist) {
        this.gamelist_grp.removeChildren();
        var yy = 8;
        var gameIconItem;
        for (var i = 0; i < iconlist.length; i++) {
            gameIconItem = new GameIconItem();
            gameIconItem.setGameIconData(iconlist[i]);
            this.gamelist_grp.addChild(gameIconItem);
            var num = i % 4;
            gameIconItem.x = 10 + num * 245;
            if (num == 0 && i != 0) {
                yy = 285;
            }
            gameIconItem.y = yy;
        }
    };
    return GameIconListView;
}(eui.Component));
__reflect(GameIconListView.prototype, "GameIconListView");
//# sourceMappingURL=GameIconListView.js.map