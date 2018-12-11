/**
 * 游戏中显示用户信息
 */
class BRNNframe extends eui.ItemRenderer {

    public labelName: eui.Label;
    public labelGold: eui.Label;
    public imghead: eui.Image;


    constructor() {
        super();
        this.skinName = "BRNNframeSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();

    }

    protected dataChanged(): void {
        if (this.data) {
            this.imghead.source = this.data.img;
            this.labelName.text = this.data.name;
            this.labelGold.text = GlobalFunction.Formatconversion(this.data.gold);
        }
    }


    public destroy(): void {

    }
}