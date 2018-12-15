//**操作时间进度条遮罩 */
 class Opeprogress extends egret.DisplayObjectContainer{
        private display:egret.Shape;
        private mg:egret.Graphics;
        private msk:egret.Shape;
        private radius:number;
        private star:egret.Bitmap;
        private resolutionArc:number;
        private drawMethod:number;
        public static ByDegree = 0;
        public static ByDistance = 1;
        private drawFunc:Function;
        public constructor(w:number, h:number,method:number =Opeprogress.ByDegree) {
            super();
            this.drawMethod = method;
            this.drawFunc = method == 0 ? this.drawByDegree : this.drawByDistance;
            this.width = w;
            this.height = h;
            this.long = (w+h) << 1;
            this.radius = Math.sqrt(w*w+h*h) >> 1;
            this.init();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoved, this);
        }
        private onAdded(e:egret.Event){
            this.rotateTimer = setInterval(()=>{
                this.star.rotation += 10;
            },30);
        }
        private onRemoved(e:egret.Event){
            if(this.rotateTimer != -1){
                clearInterval(this.rotateTimer);
                this.rotateTimer = -1;
            }
        }
        private init(){
            this.star = new egret.Bitmap(RES.getRes('star'));
            this.display = new egret.Shape();
            this.msk = new egret.Shape();
            let g1:egret.Graphics = this.display.graphics;
            g1.beginFill(0x00ff00,0.3);
            g1.drawRoundRect(0,0,this.width,this.height,10,10);
            g1.endFill();
            this.addChild(this.display);
            this.addChild(this.msk);
            this.display.mask = this.msk;
            this.resolutionArc = Math.atan(this.width/this.height);
            this.mg = this.msk.graphics;
            this.startX = this.width >> 1;
            this.startY = this.height >> 1;
            this.mg.moveTo(this.startX, this.startY);
            if( this.drawMethod == Opeprogress.ByDegree){
                this.mg.lineTo(this.startX, this.startY-this.radius);
            }else{
                this.mg.lineTo(this.startX, 0);
                this.lastX = this.startX;
                this.lastY = 0;
            }
            
            this.star.x = this.startX;
            this.star.y = 0;
            this.star.anchorOffsetX = this.star.width >> 1;
            this.star.anchorOffsetY = this.star.height >> 1;
            this.addChild(this.star);
            
            // this.starLine = new egret.Shape();
            // this.addChild(this.starLine);
            // this.starLine.graphics.lineStyle(2,0x00ff);
            // this.starLine.graphics.moveTo(this.star.x,this.star.y);
            
        }
        private rotateTimer:number = -1;
        private startX:number;
        private startY:number;
        private lastArc:number = 0;
        //for debug
        // private starLine:egret.Shape;
        private drawByDegree(){
            let arc = this._percent * 2 * Math.PI;
            this.mg.beginFill(0xff);
            this.mg.moveTo(this.startX+Math.sin(this.lastArc)*this.radius,this.startY-Math.cos(this.lastArc)*this.radius);
            this.mg.lineTo(this.startX+Math.sin(arc)*this.radius,this.startY-Math.cos(arc)*this.radius);
            this.mg.lineTo(this.startX, this.startY);
            this.lastArc = arc;
            
            if( arc < this.resolutionArc || arc > Math.PI*2-this.resolutionArc){
                this.star.y = 0;
                this.star.x = this.startX + this.startY*Math.tan(arc);
            }else     if(arc >= this.resolutionArc && arc < Math.PI-this.resolutionArc ){
                this.star.x = this.width;
                this.star.y = this.startY - this.startX/Math.tan(arc);
            }else if( arc >= Math.PI-this.resolutionArc && arc < Math.PI+this.resolutionArc){
                this.star.x = this.startX-Math.tan(arc)*this.startY;
                this.star.y = this.height;
            }else if( arc >= Math.PI + this.resolutionArc && arc < Math.PI*2-this.resolutionArc){
                this.star.x = 0;
                this.star.y = this.startY + this.startX/Math.tan(arc);
                // console.log(arc/Math.PI,' PI');
            }
            // this.starLine.graphics.lineTo(this.star.x,this.star.y);
        }
        private long:number;
        private lastX:number;
        private lastY:number;
        private drawByDistance(){
            let length:number = this.long * this._percent;

            this.mg.beginFill(0xff);
            this.mg.moveTo(this.lastX,this.lastY);
            if(  length < this.width*0.5){
                this.star.y = 0;
                this.star.x = this.startX + length;
            } else    if(length <= this.width*0.5+this.height ){
                this.star.x = this.width;
                this.star.y = length - this.width*0.5;
            }else if( length <= this.width*1.5+this.height){
                this.star.x = this.width *1.5 - length + this.height ;
                this.star.y = this.height;
            }else if(length <= this.long-0.5*this.width){
                this.star.x = 0;
                this.star.y = 2 * this.height + 1.5*this.width - length;
            }else if( length <= this.long){
                this.star.y = 0;
                this.star.x = this.startX - this.long + length;
            }
            this.lastX = this.star.x;
            this.lastY = this.star.y;
            this.mg.lineTo(this.star.x, this.star.y);
            this.mg.lineTo(this.startX, this.startY);
            // this.starLine.graphics.lineTo(this.star.x,this.star.y);
        }
        private _percent:number
        public set percent(v:number){
            if( v < 0 || v > 1){
                console.warn('Percentage illegal:',v);
                if( this._percent >= 1)
                    return;
                else 
                    v = 1;
            }
            if( this._percent == v) return;
            this._percent = v;
            // this.drawByDegree();
            this.drawFunc.apply(this);
        }
        /**
         * 0-1
         */
        public get percent():number{
            return this._percent;
        }
    }