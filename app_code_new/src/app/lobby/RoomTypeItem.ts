class RoomTypeItem extends eui.ItemRenderer {
	public icon_img:eui.Image;

	constructor() {
		super();
		this.skinName = "RoomTypeItemSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	protected dataChanged(): void {
		// console.log("------------------"+this.data);
	}
}