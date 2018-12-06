class PlayerInfoTypeItem extends eui.ItemRenderer {
	public icon_img:eui.Image;

	constructor() {
		super();
		this.skinName = "PlayerInfoTypeItemSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	protected dataChanged(): void {
		// console.log("------------------"+this.data);
	}
}