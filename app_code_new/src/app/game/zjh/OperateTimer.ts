/**圆形遮,矩形进度条。*/
class OperateTimer extends egret.Sprite {

    private _shape: egret.Shape;
    private angle: number = 0;
    private index:number = 1;
    constructor() {
        super();
        this.initGraphics();
    }

    private bitmap: egret.Bitmap;
    //初始化赋值
    private initGraphics(): void {
        var shape: egret.Shape = this._shape = new egret.Shape();
        shape.x = 0;
        shape.y = 0;
        this.addChild(shape);

        this.bitmap = new eui.Image("gf_wait_png");

        /* this.bitmap.width = 228;
         this.bitmap.height = 380;*/
        this.bitmap.width = 134;
        this.bitmap.height = 170;
        this.bitmap.x = shape.x - this.bitmap.width / 2;
        this.bitmap.y = shape.y - this.bitmap.height / 2;

        this.bitmap.mask = shape;
        this.addChild(this.bitmap);

    }

    public stop():void
    {
        this._shape.graphics.clear();
        egret.stopTick(this.onTick, this);
    }

    public play():void
    {
        this.changeGraphics();
    }
    
    private onTick(timeStamp: number):boolean
    {
        var shape: egret.Shape = this._shape;
        changeGraphics(this.angle);
        this.angle += 1;
        if (this.angle >= 360) {
            this.angle = this.angle % 360;
            this.index *= -1;
        }

        return false;
        
        function changeGraphics(angle: number): void {
            shape.graphics.clear();

            shape.graphics.beginFill(0x00ffff, 1);
            //shape.graphics.beginFill(0x2222ff, 1);
            shape.graphics.moveTo(0, 0);
            shape.graphics.lineTo(200, 0);
            //shape.graphics.drawArc(0, 0, 200, -Math.PI / 2,  (angle * Math.PI / 180)-90, i == -1);
            shape.graphics.drawArc(0, 0, 200, 0, angle * Math.PI / 180, this.index == -1);
            shape.graphics.lineTo(0, 0);
            shape.graphics.endFill();
        }
        
    }
    //轻触修改属性
    private changeGraphics(): void {
        var shape: egret.Shape = this._shape;

        /*** 本示例关键代码段开始 ***/

        this.index = 1;
        this.angle = 0;
        egret.startTick(this.onTick, this);
        /*** 本示例关键代码段结束 ***/
    }
}

