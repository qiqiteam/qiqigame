module xlLib {
    export class CommonModelMgr {
        private static _self: CommonModelMgr = null;

        public constructor() {
            this._models = {};
        }

        public static get Instance(): CommonModelMgr {
            if (this._self == null) {
                this._self = new CommonModelMgr();
            }
            return this._self;
        }

        private _models: any;

        private addEvents(): void {
            //xlLib.Global.addEventListener(xlLib.ZqEvent.COMMON_MODEL, this.onCommonMode, this);
        }

        public registerCommonModel(modelId: number, model: any, loadGroupName?:string): void {
            if (this._models[modelId] == null) {
                this._models[modelId] = model;
                this._models["loadName_" + modelId] = loadGroupName;
            } else {
                xlLib.Console.warn("registerCommonModel:公用模块只能注册一次");
            }
        }

        public openCommonModel(modelId: number, openType: number = 0,param?:any, openFunc?: Function, thisObj?: any): any {
            var md: any;
            if (!this._models[modelId])
                return;
                
            var self = this;
            function openModel() {
               if (openFunc) {
                //自定义打开方式
                md = new self._models[modelId](param);
                openFunc.call(thisObj, md);
                } 
                else {
                    if (openType == 0) {
                        md = new self._models[modelId](param);
                        PopUpMgr.addPopUp(md, null, true, true);
                    } else {
                        UIMgr.instance.showUI(self._models[modelId], param);
                    }
                } 
            }
            if(this._models["loadName_" + modelId]){
                ResLoadMgr.instance.load(this._models["loadName_" + modelId],openModel,()=>{xlLib.Console.error("加载资源组失败:" + "loadName_" + modelId)}, null, UIMgr.instance.tipsLoadUI,true,true);
            }
            else
                openModel();
            return md;
        }

        public showCommonUI(UIId: number, data?: any): any {
            if (!this._models[UIId])
                return;
            return UIMgr.instance.showUI(this._models[UIId], data);
        }

        public getCommonUI(UIId: number, data?: any): any {
            if (!this._models[UIId])
                return;
            var obj = new this._models[UIId](data);
            return obj;
        }

    }

}
