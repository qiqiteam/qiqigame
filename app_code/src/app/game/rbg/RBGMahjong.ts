/**
 * 麻将牌
 */
class RBGMahjong extends eui.Component {

    public _mahjong_turn:eui.Image;
    public _mahjong_card:eui.Image;
    public _mahjong_cover:eui.Image;

    constructor() {
        super();
        this.skinName = "RBGMahjongSkin";
    }

    protected childrenCreated() {
		super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
    }

    public setPai(num):void {
        if(num != null) {
            this._mahjong_card.source = "mahjong_" + num + "_png";
        } else {
            this._mahjong_card.source = "";
        }
    }

    public setAnPai(value:boolean):void {
        if(value == true) {
            this._mahjong_cover.visible = true;
        } else {
            this._mahjong_cover.visible = false;
        }
    }

    public destroy():void {

	}
}