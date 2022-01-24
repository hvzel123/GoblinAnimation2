class goblinAttackLeft {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./goblinAttackLeft.png"), 1, 0, 63, 59, 5, 0.2);
		
		this.x = 495;
		this.y = 295;
		this.speed = 50;
	};

	update() {
		
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

	};
}