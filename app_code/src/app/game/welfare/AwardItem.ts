/**
 * 每日任务奖励Item
 */
class AwardItem extends eui.Component {

	public grpExchange:eui.Group;

	constructor() {
		super();
		this.skinName = "AwardItemSkin";
	}

	protected childrenCreated(): void {
		//EventManage.addButtonEvent(this, this.btnTouch, egret.TouchEvent.TOUCH_TAP, this.onTouchExchange.bind(this));
	}

	public setData(data, type): void {
		if (type == 1) {
			this.setExchange(data);
		}
		else if (type == 2) {
			this.setSelfRecord(data);
		}
		else if (type == 3) {
			this.setAllRecord(data);
		}
	}

	private setExchange(data): void {
		
	}

	private setAllRecord(data): void {
		
	}

	private setSelfRecord(data): void {
		
	}

	private onTouchExchange(): void {
		//Net.send(Protocol.HALL_GIFT_EXCHANGE, { giftId: this._id }, this.exchangeCB.bind(this));
	}

	private exchangeCB(msg): void {
		if (msg.code == 200) {
			//lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(EventData.GIFT_ON_EXCHANGE, msg.data));
			//TipsManage.showTips('兑换奖品成功！');
		}
		else {
			//TipsManage.showTips(ErrorMessage.errorMsg(msg.msg));
		}
	}

	public dispose(): void {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		//EventManage.removeEvent(this);
	}

	public setTouchEnabled(): void {
		//QuickManage.setTouchEnabled(this);
	}

}