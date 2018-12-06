/**
 * 福利类型Item
 */
class WelfareTypeItem extends eui.ItemRenderer {
	public icon_img:eui.Image;

	constructor() {
		super();
		this.skinName = "WelfareTypeItemSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	protected dataChanged(): void {
		// console.log("------------------"+this.data);
	}
}