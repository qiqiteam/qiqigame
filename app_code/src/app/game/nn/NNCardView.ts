/*** 翻牌界面**/
class NNCardView extends eui.Component 
{
	public bg_group:eui.Group;
	public bg_img:eui.Image;

    constructor() {
        super();
        this.skinName = "NNCardViewSkin";
    }

	 public childrenCreated() 
	 {
        super.childrenCreated();
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	 }

	 private destroy() 
	 {

	 }
}