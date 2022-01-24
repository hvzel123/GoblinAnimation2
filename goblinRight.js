class goblinRight {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./goblinSpriteRight.png"), 0, 0, 64, 57, 7, 0.2);
		
		this.x = 525;
		this.y = 5;
		this.speed = 50;
	};

	update() {
		this.x += this.speed * this.game.clockTick;
		if (this.x > 1024) this.x = 525;
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

	};
}