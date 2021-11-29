import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SlateDistributor from "./SlateDistributor";
import { LinearGradient } from "expo-linear-gradient";

import TileHandler from "./TileHandler";
import SlateMatrixPiker from "./SlateMatrixPicker";

const SlateParent = () => {
  const [tileHandler, setTileHandler] = useState(null);
  const [resetGame, setResetGame] = useState(false);
  const [tiles, setTiles] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [slateRows, setSlateRows] = useState(4);

  useEffect(() => {
    const tempTileHandler = new TileHandler(slateRows);
    setTileHandler(tempTileHandler);

    setTiles(tempTileHandler.tiles);
    setGameCompleted(false);
  }, [resetGame, slateRows]);

  const onTilePressed = (slateNumber) => {
    if (slateNumber === "") return;

    if (gameCompleted) return;

    tileHandler.swapTiles(slateNumber);

    setTiles(tileHandler.tiles);

    const issorted = tileHandler.isSorted();
    if (issorted) setGameCompleted(true);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["blue", "blue", "black"]}>
        <Text style={styles.title}>Slate Puzzle</Text>
      </LinearGradient>

      <View style={styles.pickerButtonView}>
        <View style={{ width: "40%" }}>
          <SlateMatrixPiker slateRows={slateRows} setSlateRows={setSlateRows} />
        </View>
        <View style={{ width: "60%" }}>
          <LinearGradient colors={["red", "red", "black"]}>
            <TouchableOpacity
              style={styles.resetButton}
              onPressOut={() => setResetGame(!resetGame)}
            >
              <Text style={styles.resetText}>
                {gameCompleted ? "Start New Game" : "Reset Game"}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>

      {tiles ? (
        <SlateDistributor
          onTilePressed={onTilePressed}
          slateRows={slateRows}
          tiles={tiles}
        />
      ) : (
        <View></View>
      )}

      {gameCompleted ? (
        <Text style={styles.successStatus}>Game Completed!!!!!</Text>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    height: 50,
  },
  resetButton: {
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "grey",
    fontSize: 40,
    padding: 5,
    width: "100%",
  },
  resetText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  successStatus: {
    backgroundColor: "green",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickerButtonView: {
    flexDirection: "row",
    height: 60,
  },
});

export default SlateParent;
