class goblinLeft {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./goblinSprite.png"), 0, 0, 64, 57, 7, 0.2);
		
		this.x = 495;
		this.y = 150;
		this.speed = 50;
	};

	update() {
		this.x -= this.speed * this.game.clockTick;
		if (this.x < 0) this.x = 495;
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

	};
}