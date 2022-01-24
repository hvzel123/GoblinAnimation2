class goblinAttackRight {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./goblinAttackRight.png"), 1, 1, 63, 60, 5, 0.2);
		
		this.x = 525;
		this.y = 440;
		this.speed = 50;
	};

	update() {
		
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

	};
}