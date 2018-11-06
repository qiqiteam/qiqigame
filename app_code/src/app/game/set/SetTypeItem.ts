class SetTypeItem extends eui.ItemRenderer {
	//public bg_img:eui.Image;
	public icon_img:eui.Image;

	constructor() {
		super();
		this.skinName = "SetTypeItemSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	protected dataChanged(): void {
		// console.log("------------------"+this.data);
	}
}