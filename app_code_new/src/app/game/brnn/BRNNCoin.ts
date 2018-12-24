/**
 * 百人牛牛筹码
 */

class BRNNCoin extends eui.Image {

    private _isMy:boolean = false;//是否是我下的注
    private _type:number = 0;//筹码类型
    private _zhuoNum = 0;//桌号
    constructor() {
        super();
        this._isMy = false;
    }

    protected childrenCreated() {
		super.childrenCreated();
        
    }

    public getIsMy(): boolean {
        return this._isMy;
    }

    public setIsMy(isMy:boolean):void {
        this._isMy = isMy;
    }

    public getType(): number {
        return this._type;
    }

    public setType(type:number):void {
        this._type = type;
    }

    public getZhuoNum(): number {
        return this._zhuoNum;
    }

    public setZhuoNum(num:number):void {
        this._zhuoNum = num;
    }
}