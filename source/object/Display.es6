import * as PIXI from 'pixi.js';
const LevelView = require('../class/widget/LevelView.es6');

const SPRITES = [
	{ id: 'wall', file: 'asset/dungeonSprites/Stone.png'},
	{ id: 'floor', file: 'asset/dungeonSprites/Gravel.png'},
	{ id: 'void', file: 'asset/dungeonSprites/Void.png'},
];

module.exports = {
	init() {
		this.widgets = {};
		this.app = new PIXI.Application({width: 800, height: 600});
		document.body.appendChild(this.app.view);
		return this.__loadSprites().then(() => this.__initUI());
	},

	__loadSprites() {
		SPRITES.forEach(s => PIXI.loader.add(s.id, s.file));
		return new Promise(r => {
			PIXI.loader.load(r);
		});
	},

	__initUI () {
		this.widgets.levelView = new LevelView(this.app.stage);
		
	},

	setLevel(level) {
		this.widgets.levelView.setLevel(level);
	}
}