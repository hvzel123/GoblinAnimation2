const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./goblinSprite.png");
ASSET_MANAGER.queueDownload("./goblinSpriteRight.png")
ASSET_MANAGER.queueDownload("./goblinAttackLeft.png")
ASSET_MANAGER.queueDownload("./goblinAttackRight.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new goblinLeft(gameEngine));
	gameEngine.addEntity(new goblinRight(gameEngine));
	gameEngine.addEntity(new goblinAttackLeft(gameEngine));
	gameEngine.addEntity(new goblinAttackRight(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
