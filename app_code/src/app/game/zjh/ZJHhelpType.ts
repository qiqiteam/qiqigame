/**菜单——玩法面板按钮 */
class ZJHhelpType extends eui.ItemRenderer {
	public img_selicon:eui.Image;


	constructor() {
		super();
		this.skinName = "ZhajhhelpTypeSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
	}

	protected dataChanged(): void {
		// console.log("------------------"+this.data);
	}
}