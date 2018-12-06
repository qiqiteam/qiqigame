/**
 * 消息Item
 */
class SystemMsgItem extends eui.Component {

    public _label_content:eui.Label;
    public _checkBox:eui.CheckBox;


    constructor() {
        super();
        this.skinName = "SystemMsgItemSkin";
    }

    protected childrenCreated() {
		super.childrenCreated();
	}

    public getMsgContent(str:string):void {
        this._label_content.text = str;
    }

    public getSelectedState():boolean {
        return this._checkBox.selected;
    }

    public setSelectedState(state:boolean):void {
        this._checkBox.selected = state;
    }
}