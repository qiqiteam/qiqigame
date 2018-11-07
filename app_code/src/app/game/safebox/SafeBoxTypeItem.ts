class SafeBoxTypeItem extends eui.ItemRenderer {
	public icon_img:eui.Image;

	constructor() {
		super();
		this.skinName = "SafeBoxTypeItemSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	protected dataChanged(): void {
		// console.log("------------------"+this.data);
	}
}