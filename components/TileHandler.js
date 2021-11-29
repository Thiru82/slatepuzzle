import helpers from "./util/ArrayUtil.js";

class TileHandler {
  constructor(parentRows) {
    this.parentRows = parentRows;

    this.tiles = this.getTiles();
  }

  getTiles() {
    const numbers = this.parentRows * this.parentRows - 1;
    const tempTiles = helpers.randomNumberArray(numbers);

    tempTiles[tempTiles.length] = "";

    return tempTiles;
  }

  swapTiles(tileNumber) {
    const { tileIndex, row, column } = this.getTileCooredinate(tileNumber);

    const upperIndex = this.upperRowEmpty(row, column);
    const lowerIndex = this.lowerRowEmpty(row, column);
    const leftIndex = this.leftColumnEmpty(row, column);
    const rightIndex = this.rightColumnEmpty(row, column);

    this.swapAndChange(tileIndex, upperIndex);
    this.swapAndChange(tileIndex, lowerIndex);
    this.swapAndChange(tileIndex, leftIndex);
    this.swapAndChange(tileIndex, rightIndex);
  }

  swapAndChange(tileIndex, emptyTileIndex) {
    if (emptyTileIndex === null) return;

    const tempTiles = [...this.tiles];

    let value = tempTiles[tileIndex];
    tempTiles[tileIndex] = "";
    tempTiles[emptyTileIndex] = value;

    this.tiles = tempTiles;
  }

  isSorted() {
    const tempArray = [...this.tiles];
    tempArray.pop();

    return helpers.isSorted(tempArray);
  }

  upperRowEmpty(row, column) {
    if (row === 0) return null;

    const upperIndex = (row - 1) * this.parentRows + column;

    return this.tiles[upperIndex] === "" ? upperIndex : null;
  }

  lowerRowEmpty(row, column) {
    if (row === this.parentRows - 1) return null;

    const lowerIndex = (row + 1) * this.parentRows + column;

    return this.tiles[lowerIndex] === "" ? lowerIndex : null;
  }

  leftColumnEmpty(row, column) {
    if (column === 0) return null;

    const leftIndex = row * this.parentRows + column - 1;

    return this.tiles[leftIndex] === "" ? leftIndex : null;
  }

  rightColumnEmpty(row, column) {
    if (column === this.parentRows - 1) return null;

    const rightIndex = row * this.parentRows + column + 1;

    return this.tiles[rightIndex] === "" ? rightIndex : null;
  }

  getTileCooredinate(tileNumber) {
    const tileIndex = this.tiles.indexOf(tileNumber);
    const row = this.rowNumber(tileIndex);
    const column = this.columnNumber(tileIndex);

    return { tileIndex, row, column };
  }

  rowNumber(num) {
    return Math.floor(num / this.parentRows);
  }

  columnNumber(num) {
    return num % this.parentRows;
  }
}

export default TileHandler;
