const helpers = {
  randomNumberArray: function (count) {
    const tempTiles = Array.from(Array(count).keys()).map((i) => i + 1);
    tempTiles.sort(() => Math.random() - 0.5);

    return tempTiles;
  },

  isSorted: function (numberArray) {
    for (let i = 0; i < numberArray.length - 1; i++) {
      if (numberArray[i] > numberArray[i + 1]) {
        return false;
      }
    }

    return true;
  },
};

export default helpers;
