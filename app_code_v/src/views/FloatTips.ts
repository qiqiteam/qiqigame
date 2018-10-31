
/**
 * 提示信息
 */
module xlLib {
    export class FloatTips extends egret.DisplayObjectContainer{

    private _tips_tf: egret.TextField;
    private tipsBg:egret.Bitmap;

    constructor(){
        super();
        this.init();
    }

    private init(){
        this.tipsBg = xlLib.DisplayUtils.createBitmapByName("tipsBg");
        let scale9Grid = new egret.Rectangle(190,10,2,2);
        this.tipsBg.scale9Grid = scale9Grid;
        this.addChild(this.tipsBg);
        this._tips_tf = xlLib.DisplayUtils.createTextLabel("", 0xffffff, 22);
        this.addChild(this._tips_tf);
    }

    public setTipsText(tipsMsg: string) {
        this._tips_tf.text = tipsMsg;
        this.tipsBg.width = this._tips_tf.width+80;
        this.width = this.tipsBg.width;
        this._tips_tf.x = (this.width - this._tips_tf.width) >> 1;
        this._tips_tf.y = (this.height - this._tips_tf.height) >> 1;
        this.tipsBg.x = (this.width - this.tipsBg.width) >> 1;
    }
    }
}