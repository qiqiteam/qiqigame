class GameIconListView extends eui.Component {
	public scroller:eui.Scroller;
	public gamelist_grp:eui.Group;


	constructor() {
		super();
		this.skinName = "GameIconListViewSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	public setData(iconlist:GameIconData[]):void
	{
		this.gamelist_grp.removeChildren();
		var yy = 8;
		var gameIconItem:GameIconItem ;
		for (var i = 0; i < iconlist.length; i++) {
			gameIconItem= new GameIconItem();
			gameIconItem.setGameIconData(iconlist[i]);
			this.gamelist_grp.addChild(gameIconItem);
			let num = i % 4;
			gameIconItem.x = 20 + num*270;
			if (num == 0 && i != 0) {
				yy = 285;
			}
			gameIconItem.y = yy;
		}
	}
}