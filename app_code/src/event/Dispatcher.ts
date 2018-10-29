module xlLib {
    export class Dispatcher {

        private _funcMap: any;

        public constructor() {
            this._funcMap = {};
        }

        public dispatch($noticeType: any, data: any = null): boolean {
            var funcVector: Array<any> = this._funcMap[$noticeType];
            var i: number = 0;
            if (funcVector == null)
                return;
            while (i < funcVector.length) {
                if (funcVector[i]) {
                    funcVector[i][0].call(funcVector[i][1], data);
                }
                i++;
            }
            return true;
        }

        public addListener(noticeType: any, listener: Function, thisObj: any) {
            if (this._funcMap[noticeType]) {
                var index = this.getNoticeIndex(noticeType, listener, thisObj);
                if (index == -1)
                    this._funcMap[noticeType].push([listener, thisObj]);
            }
            else {
                this._funcMap[noticeType] = [];
                this._funcMap[noticeType].push([listener, thisObj]);
            }
        }

        public hasListener(noticeType: string): boolean {
            if (this._funcMap[noticeType] && this._funcMap[noticeType].length > 0) {
                return true;
            }
            return false;
        }

        public removeListener(noticeType: any, listener: Function, thisObj: any) {
            if (this._funcMap[noticeType]) {
                var index = this.getNoticeIndex(noticeType, listener, thisObj);
                if (index != -1)
                    this._funcMap[noticeType].splice(index, 1);
            }
        }

        private getNoticeIndex(noticeType: any, listener: Function, thisObj: any): number {
            var index: number = -1;
            for (var i in this._funcMap[noticeType]) {
                if (this._funcMap[noticeType][i][0] == listener && this._funcMap[noticeType][i][1] == thisObj) {
                    index = parseInt(i);
                    break;
                }
            }
            return index;
        }

    }
}

