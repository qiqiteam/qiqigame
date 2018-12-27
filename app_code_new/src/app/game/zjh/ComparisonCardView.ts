class ComparisonCardView extends eui.Component {
	public grp_bg: eui.Group;
	public image: eui.Image;
	public image0: eui.Image;
	public image1: eui.Image;
	public image2: eui.Image;
	public image3: eui.Image;
	public image4: eui.Image;
	public head0: eui.Group;
	public imghead0: eui.Image;
	public labelName0: eui.Label;
	public labelGold0: eui.Label;
	public card0: eui.Group;
	public img_card_0_0: eui.Image;
	public img_card_0_1: eui.Image;
	public img_card_0_2: eui.Image;
	public head1: eui.Group;
	public imghead1: eui.Image;
	public labelName1: eui.Label;
	public labelGold1: eui.Label;
	public card1: eui.Group;
	public img_card_1_0: eui.Image;
	public img_card_1_1: eui.Image;
	public img_card_1_2: eui.Image;
	public orginPlayerCard = [];    // 2存储玩家扑克位置

	private timeIndex1: number = -1;
	private timeIndex2: number = -1;

	private niyingleVSEffect: NiyingleVSEffect;
	private zjh_huaheng: DragonBonesSprite = new DragonBonesSprite('zjh_huaheng', "Sprite");
	constructor() {
		super();
		this.skinName = "ComparisonCardSkin";
	}

	protected childrenCreated() {
		super.childrenCreated();
		this.init();
		this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
	}
	private init() {
		//this.grp_bg.visible = false;
		// this.head0.visible = false;
		// this.head1.visible = false;

	}
	public play(): void {

	}
	public stop(): void {

	}
	public destroy(): void {
		egret.Tween.removeTweens(this.head0);
		egret.Tween.removeTweens(this.head1);
		egret.Tween.removeTweens(this.card0);
		egret.Tween.removeTweens(this.card1);

		if (this.timeIndex1 != -1) {
			clearTimeout(this.timeIndex1);
		}
		if (this.timeIndex2 != -1) {
			clearTimeout(this.timeIndex2);
		}
	}
	public setIcon(open: number, byopen: number, winindex: number): void {
		if (byopen == winindex) {
			this.zjh_huaheng.x = 1150;
			this.zjh_huaheng.y = 450;
		} else if (open == winindex) {
			this.zjh_huaheng.x = 320;
			this.zjh_huaheng.y = 350;
		}
	}
	public setPlayer(winindex: number): void {
		// this.zjh_huaheng.x = 1050;
		// this.zjh_huaheng.y = 450;
		if (winindex) {
			this.zjh_huaheng.x = 1050;
			this.zjh_huaheng.y = 450;
		} else {
			this.zjh_huaheng.x = 400;
			this.zjh_huaheng.y = 350;
		}

	}
	private Pos1: egret.Point = new egret.Point();
	private Pos2: egret.Point = new egret.Point();
	private CrdPos1: egret.Point = new egret.Point();
	private CrdPos2: egret.Point = new egret.Point();
	public grpHeadMove(open: number, byopen: number): void {
		this.head0.visible = true;
		this.head1.visible = true;
		this.card0.visible = true;
		this.card1.visible = true;
		var point1: egret.Point = this.getHeadPos(open);
		this.head0.x = point1.x;
		this.head0.y = point1.y;
		this.Pos1.x = point1.x;
		this.Pos1.y = point1.y;
		var point2: egret.Point = this.getHeadPos(byopen);
		this.head1.x = point2.x;
		this.head1.y = point2.y;
		this.Pos2.x = point2.x;
		this.Pos2.y = point2.y;
		console.log("++++++++++++++++++++++", this.orginPlayerCard);
		this.card0.x = this.orginPlayerCard[open][0].x;
		this.card0.y = this.orginPlayerCard[open][0].y;
		this.CrdPos1.x = this.orginPlayerCard[open][0].x;
		this.CrdPos1.y = this.orginPlayerCard[open][0].y;
		this.card1.x = this.orginPlayerCard[byopen][0].x;
		this.card1.y = this.orginPlayerCard[byopen][0].y;
		this.CrdPos2.x = this.orginPlayerCard[byopen][0].x;
		this.CrdPos2.y = this.orginPlayerCard[byopen][0].y;
		egret.Tween.get(this.head0).to({ x: 250, y: 273 }, 600, egret.Ease.sineIn).call(() => {

		});
		egret.Tween.get(this.card0).to({ x: 392, y: 305 }, 600, egret.Ease.sineIn).call(() => {

		});
		egret.Tween.get(this.head1).to({ x: 1092, y: 355 }, 600, egret.Ease.sineIn).call(() => {
			this.niyingleVSEffect = new NiyingleVSEffect();
			this.addChildAt(this.niyingleVSEffect, 0);
			this.niyingleVSEffect.play();
			this.addChild(this.zjh_huaheng);
			this.zjh_huaheng.play("Sprite",1);
			this.timeIndex1 = setTimeout(() => {
				egret.Tween.get(this.head0).to({ x: this.Pos1.x, y: this.Pos1.y }, 600, egret.Ease.sineIn).call(() => {

				});
				egret.Tween.get(this.head1).to({ x: this.Pos2.x, y: this.Pos2.y }, 600, egret.Ease.sineIn).call(() => {

				});
			}, 2500)
		});
		egret.Tween.get(this.card1).to({ x: 927, y: 391 }, 600, egret.Ease.sineIn).call(() => {
			this.timeIndex2 = setTimeout(() => {
				egret.Tween.get(this.card0).to({ x: this.CrdPos1.x, y: this.CrdPos1.y }, 600, egret.Ease.sineIn).call(() => {

				});
				egret.Tween.get(this.card1).to({ x: this.CrdPos2.x, y: this.CrdPos2.y }, 600, egret.Ease.sineIn).call(() => {

				});
			}, 2500)
		});
	}
	private getHeadPos(index): egret.Point {
		var point: egret.Point = new egret.Point();
		switch (index) {
			case 0:
				point.x = 516;
				point.y = 486;
				break;
			case 1:
				point.x = 1171;
				point.y = 410;
				break;
			case 2:
				point.x = 1211;
				point.y = 175;
				break;
			case 3:
				point.x = 121;
				point.y = 175;
				break;
			case 4:
				point.x = 170;
				point.y = 410;
				break;
		}
		return point;
	}
	/*** _name 名字 * _gold 金币* _imghead 头像图片*/
	// public setPlayerInfo0(_name, _gold, _imghead): void {
	// 	this.imghead0.source = _imghead;
	// 	this.labelName0.text = _name;
	// 	this.labelGold0.text = GlobalFunction.Formatconversion(_gold);
	// }
	// public setPlayerInfo1(_name, _gold, _imghead): void {
	// 	this.imghead1.source = _imghead;
	// 	this.labelName1.text = _name;
	// 	this.labelGold1.text = GlobalFunction.Formatconversion(_gold);	
	// }

}