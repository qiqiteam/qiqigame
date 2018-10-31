class NNGameItem extends eui.ItemRenderer {
    public dataGroup: eui.Group;
    private pearlGroup: eui.Group;
    private rectGroup: eui.Group;
    private currLen: number = -1;

    constructor() {
        super();
    }

    public childrenCreated() {
        super.childrenCreated();
    }
}
