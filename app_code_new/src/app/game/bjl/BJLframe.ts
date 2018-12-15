/**
 * 游戏中显示用户信息
 */
class BJLframe extends eui.ItemRenderer {

    public img_order: eui.Image;
    public label_index: eui.Label;
    public imghead: eui.Image;
    public labelName: eui.Label;
    public labelGold: eui.Label;
    public labelGold1: eui.Label;


    constructor() {
        super();
        this.skinName = "BJLframeSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();

    }

    protected dataChanged(): void {
        if (this.data) {
            this.img_order.source = this.data.tp;
            this.label_index.visible = this.data.fot;
            this.label_index.text = this.data.index + '';
            this.imghead.source = this.data.img;
            this.labelName.text = this.data.name;
            this.labelGold.text = GlobalFunction.Formatconversion(this.data.gold);
            this.labelGold1.text = GlobalFunction.Formatconversion(this.data.gold1);
        }
    }


    public destroy(): void {

    }
}