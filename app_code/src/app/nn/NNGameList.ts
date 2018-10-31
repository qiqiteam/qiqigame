class NNGameList extends eui.Component {
    public scroller: eui.Scroller;
    public list: eui.List;

    private arrayCollection: eui.ArrayCollection;
    private dataSource: Array<pearlItem> = [];

    constructor() {
        super();
        this.skinName = "NNGameListSkin";
    }
    public childrenCreated() {
        super.childrenCreated();
        this.initData();
        this.arrayCollection = new eui.ArrayCollection(this.dataSource);
        this.list.dataProvider = this.arrayCollection;
        this.list.itemRenderer = NNGameItem;
        this.scroller.viewport = this.list;
        this.scroller.bounces = false;

        this.initEventListener();
    }

    private initEventListener() {
        this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        // EventUtil.addEventListener(EventConst.ON_GAME_STATUS_CHANGE, this.onGameStatusChange, this);
        // EventUtil.addEventListener(EventConst.ON_NN_PEARL_APPEND, this.listAutoScroll, this, )
    }

    private onGameStatusChange(data: any): void {
    }

    private initData() {
        this.dataSource = [];
    }

    private freshData() {
        var obj: any = this.dataSource[0];
        obj.isNew = false;
        this.arrayCollection.itemUpdated(obj);
    }

    private listAutoScroll(data: any) {
        this.scroller.validateNow();
        var num: number = this.scroller.viewport.contentWidth - this.scroller.viewport.width;
        if (num > 0) {
            this.scroller.viewport.scrollH = num;
        }
    }

    private newData() {
        var obj: any = this.dataSource[0];
        obj.isNew = true;
        this.arrayCollection.itemUpdated(obj);
    }

    private destroy() {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
        // EventUtil.removeEventListener(EventConst.ON_GAME_STATUS_CHANGE, this.onGameStatusChange, this);
        // EventUtil.removeEventListener(EventConst.ON_NN_PEARL_APPEND, this.listAutoScroll, this);
    }
}

interface pearlItem {
    type: string;
    isNew: boolean;
    isWen: boolean;
    status: number;
    num: number;
}