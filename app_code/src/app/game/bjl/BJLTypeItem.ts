class BJLTypeItem extends eui.ItemRenderer {
	//public bg_img:eui.Image;
	public icon_img:eui.Image;

	constructor() {
		super();
		this.skinName = "BJLTypeItemSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	protected dataChanged(): void {
		// console.log("------------------"+this.data);
	}
}