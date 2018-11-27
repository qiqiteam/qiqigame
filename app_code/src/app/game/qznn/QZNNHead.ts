/**
 * 游戏中显示用户信息
 */
class QZNNHead extends eui.Component {

    public imghead:eui.Image;
    public img_gold:eui.Image;
    public labelName:eui.Label;
    public labelGold:eui.Label;
    public img_zhuang:eui.Image;

    constructor() {
        super();
        this.skinName = "QZNNHeadSkin";
    }

    protected childrenCreated() {
		super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);

        var mask2: egret.Shape = new egret.Shape;
        mask2.graphics.beginFill(0xff0000);
        mask2.graphics.drawCircle(62, 62, 62);
        mask2.graphics.endFill();
        mask2.x = this.imghead.x+3;
        mask2.y = this.imghead.y+3;
        this.addChild(mask2);
        this.imghead.mask = mask2;
    }

    /**
     * _name 名字
     * _gold 金币
     * _imghead 头像图片
     */
    public setUserInfo(_name,_gold,_imghead) :void {
        this.imghead.source = _imghead;
        this.labelName.text = _name;
        this.labelGold.text = _gold;
    }

    public setZhuang(value:boolean):void {
        this.img_zhuang.visible = value;
    }

    public setGold(gold:number):void {
        this.labelGold.text = gold+"";
    }

    public destroy():void {

	}
}