module AnimationUtils {

    //var uiCore:any;
    //================================二八杠动画===================================

    /**
     * 开始游戏
     */
	
    export function gameStartAnimator() {
		var t = new uiCore.Animation();
		this.gameStartAnimator = t;
		t.animationSource = "bar_effect_start_{0}_png";
		t.autoPlay = false;
		t.frameNum = 17;
		t.frameRate = 70;
		t.horizontalCenter = 0;
		t.loop = false;
		t.source = "bar_effect_start_4_png";
		t.stopAndVisible = true;
		t.verticalCenter = -20;
		t.visible = false;
		return t;
	};

	export function cardBox_i() {
		var t = new uiCore.Animation();
		this.cardBox = t;
		t.animationSource = "0waikuang_{0}_png";
		t.autoPlay = false;
		t.frameNum = 17;
		t.frameRate = 58;
		t.height = 290;
		t.loop = false;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "0waikuang_16_png";
		t.visible = false;
		t.width = 590;
		t.x = 11;
		t.y = 32.5;
		return t;
	};

	export function bankerAnimation_i() {
		var t = new uiCore.Animation();
		this.bankerAnimation = t;
		t.animationSource = "bar_effect_banker_{0}_png";
		t.autoPlay = false;
		t.frameNum = 11;
		t.frameRate = 120;
		t.loop = false;
		t.source = "bar_effect_banker_10_png";
		t.stopAndVisible = false;
		t.visible = false;
		t.x = 124;
		t.y = -52;
		return t;
	};

	export function cardAnimation_i() {
		var t = new uiCore.Animation();
		this.cardAnimation = t;
		t.animationSource = "bar_effect_30_{0}_png";
		t.autoPlay = false;
		t.frameNum = 17;
		t.frameRate = 60;
		t.loop = false;
		t.source = "bar_effect_30_13_png";
		t.stopAndVisible = true;
		t.visible = false;
		t.x = -49;
		t.y = -162;
		return t;
	};

	export function allKillAnimator_i() {
		var t = new uiCore.Animation();
		this.allKillAnimator = t;
		t.animationSource = "bar_effect_kill_{0}_png";
		t.autoPlay = false;
		t.frameNum = 14;
		t.frameRate = 80;
		t.horizontalCenter = 0.5;
		t.loop = false;
		t.source = "bar_effect_kill_13_png";
		t.stopAndVisible = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};

	export function diceTop_i() {
		var t = new eui.Image();
		this.diceTop = t;
		t.height = 278;
		t.horizontalCenter = 0;
		t.source = "bar_sicbo_top_png";
		t.verticalCenter = -64;
		t.visible = false;
		t.width = 210;
		return t;
	};
	export function diceBg_i() {
		var t = new eui.Image();
		this.diceBg = t;
		t.height = 309;
		t.horizontalCenter = 0.5;
		t.source = "bar_sicbo_all_png";
		t.verticalCenter = -49.5;
		t.visible = false;
		t.width = 231;
		return t;
	};

	export function diceBottom_i() {
		var t = new eui.Image();
		this.diceBottom = t;
		t.height = 197;
		t.horizontalCenter = 0.5;
		t.source = "bar_sicbo_bottom_png";
		t.verticalCenter = 7.5;
		t.visible = false;
		t.width = 231;
		return t;
	};

	export function dice1_i() {
		var t = new eui.Image();
		this.dice1 = t;
		t.height = 72;
		t.horizontalCenter = -39.5;
		t.source = "bar_sicbo_1_png";
		t.verticalCenter = -4;
		t.visible = false;
		t.width = 61;
		return t;
	};
	export function dice0_i() {
		var t = new eui.Image();
		this.dice0 = t;
		t.height = 72;
		t.horizontalCenter = 41.5;
		t.source = "bar_sicbo_2_png";
		t.verticalCenter = 8;
		t.visible = false;
		t.width = 61;
		return t;
	};

	export function diceGroup_i() {
		var t = new eui.Group();
		this.diceGroup = t;
		t.bottom = -3;
		t.left = 0;
		t.right = 0;
		t.top = 3;
		t.touchThrough = true;
		t.elementsContent = [this.diceBottom_i(),this.dice1_i(),this.dice0_i(),this.diceTop_i(),this.diceBg_i()];
		return t;
	};

	export function goldFly0_i() {
		var t = new eui.Image();
		this.goldFly0 = t;
		t.horizontalCenter = -450;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_cion_png";
		t.verticalCenter = 270;
		t.visible = false;
		return t;
	};
	export function goldFly1_i() {
		var t = new eui.Image();
		this.goldFly1 = t;
		t.horizontalCenter = -547;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_cion_png";
		t.verticalCenter = 20;
		t.visible = false;
		return t;
	};
	export function goldFly2_i() {
		var t = new eui.Image();
		this.goldFly2 = t;
		t.horizontalCenter = -75;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_cion_png";
		t.verticalCenter = -227;
		t.visible = false;
		return t;
	};
	export function goldFly3_i() {
		var t = new eui.Image();
		this.goldFly3 = t;
		t.horizontalCenter = 547;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nn_cion_png";
		t.verticalCenter = 20;
		t.visible = false;
		return t;
	};

	export function players_i() {
		var t = new eui.Group();
		this.players = t;
		t.percentHeight = 100;
		t.touchThrough = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.player1_i(),this.player2_i(),this.player3_i(),this.player4_i(),this.goldFly0_i(),this.goldFly1_i(),this.goldFly2_i(),this.goldFly3_i(),this.qzNumSetGroup_i()];
		return t;
	};

	export function ItemAnimator_i() {
		var t = new uiCore.Animator();
		this.ItemAnimator = t;
		t.defentAnimationName = "05RSYD";
		t.horizontalCenter = 0;
		t.source = "gamehall_gameItem";
		t.verticalCenter = 0;
		return t;
	};
}

