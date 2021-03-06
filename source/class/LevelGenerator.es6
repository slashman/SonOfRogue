{
	// (Abstract) base class for level generators
	let MapCell = require('./MapCell.es6');

	module.exports = class LevelGenerator {
		constructor() {
		}

		/**
		 * return a 2-dimensional array of Cells.
		 * base class returns empty map
		 */
		generateLevelMap(mapSeed) {
			return {
				cells: [],
				entry: {
					x: undefined,
					y: undefined
				}
			};
		}
		getCell(typ) {
			return MapCell.getMapCell(typ);
		}
	};
}
