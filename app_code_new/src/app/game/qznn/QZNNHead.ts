/**
 * 游戏中显示用户信息
 */
class QZNNHead extends eui.Component {

    public imghead: eui.Image;
    public img_gold: eui.Image;
    public labelName: eui.Label;
    public labelGold: eui.Label;
    private nnbankerEff: egret.MovieClip;
    constructor() {
        super();
        this.skinName = "QZNNHeadSkin";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
/*
        var mask2: egret.Shape = new egret.Shape;
        mask2.graphics.beginFill(0xff0000);
        mask2.graphics.drawRect(0, 0, 117, 115);
        mask2.graphics.endFill();
        mask2.x = this.imghead.x + 3;
        mask2.y = this.imghead.y + 3;
        this.addChild(mask2);
        this.imghead.mask = mask2;
*/

        var shp:egret.Shape = new egret.Shape();
        var colors:number[] = [0xCFF10A,0xffffff,0x68FFC8,0x7D68FF];    
        var i:number = 0;
        var t:number = 0;
        var currentColorIndex:number = 0;
        currentColorIndex = i%4;    
        shp.graphics.beginFill(colors[currentColorIndex]);
        shp.graphics.drawRect(0,(i*30+15),500,20);   
        //指定一种简单的单一颜色填充（0xCFF10A）。
        shp.graphics.beginFill(colors[currentColorIndex]);
        //循环绘制圆角矩形
        shp.graphics.drawRoundRect((t*100+i%2*50),
        (i%2==0?(i/2*60):((i-1)/2*60+30)),50,50,13,13);
        shp.graphics.endFill();
        shp.graphics.beginFill(colors[currentColorIndex!=3?currentColorIndex+1:0]);
        shp.graphics.drawRoundRect((t*100+i%2*50+10),
        (i%2==0?(i/2*60+10):((i-1)/2*60+30+10)),30,30,10,10);
        shp.graphics.endFill();
        shp.graphics.lineStyle(4,0xcc3333,1);
        shp.graphics.drawRoundRect(50,30,200,300,20,20);
        shp.graphics.endFill();
        this.addChild(shp);


    }

    /**
     * _name 名字
     * _gold 金币
     * _imghead 头像图片
     */
    public setUserInfo(num, _name, _gold, _imghead): void {
        this['imghead' + num].source = _imghead;
        this['imghead'+num].source = _imghead;
        this['labelName'+num].text = _name;
        this['labelGold'+num].text = _gold;
    }

    public setZhuang(value: boolean): void {
        if (value) {
            this.addNNbankerEff();
        }
    }

    private removeNNbankerEff(): void {
        if (this.nnbankerEff) {
            this.nnbankerEff.stop();
            if (this.nnbankerEff.parent) {
                this.nnbankerEff.parent.removeChild(this.nnbankerEff);
            }
        }
    }

    private addNNbankerEff() {
        if (!this.nnbankerEff) {
            this.nnbankerEff = xlLib.DisplayUtils.createMovieClicp('nn_banker', 'nn_banker');
            this.nnbankerEff.x = 90;
            this.nnbankerEff.y = 70;
            this.nnbankerEff.frameRate = 10;
            this.nnbankerEff.touchEnabled = false;
        }
        this.addChild(this.nnbankerEff);
        this.nnbankerEff.gotoAndPlay(0, 1);
    }

    public setGold(gold: number): void {
        this.labelGold.text = gold + "";
    }

    public destroy(): void {
        this.removeNNbankerEff();
    }
}