/**
 * 麻将牌
 */
class RBGMahjong extends eui.Component {

    public _mahjong_turn:eui.Image;
    public _mahjong_card:eui.Image;
    public _mahjong_cover:eui.Image;

    private v_pos:egret.Point;

    constructor() {
        super();
        this.skinName = "RBGMahjongSkin";
    }

    protected childrenCreated() {
		super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        this.v_pos = new egret.Point;
        this._mahjong_card.anchorOffsetX = this._mahjong_card.width / 2;
        this._mahjong_card.anchorOffsetY = this._mahjong_card.height / 2;
        this._mahjong_card.x += this._mahjong_card.width / 2;
        this._mahjong_card.y += this._mahjong_card.height / 2;
        this.v_pos.x = this._mahjong_card.x;
        this.v_pos.y = this._mahjong_card.y;
    }

    public setPai(num):void {
        if(num != null) {
            this._mahjong_card.source = "mahjong_" + num + "_png";
            this._mahjong_card.anchorOffsetX = this._mahjong_card.width / 2;
            this._mahjong_card.anchorOffsetY = this._mahjong_card.height / 2;
            this._mahjong_card.x = this.v_pos.x;
            this._mahjong_card.y = this.v_pos.y;
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