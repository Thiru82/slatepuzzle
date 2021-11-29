import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SlateTile = ({ slateNumber, onTilePressed }) => {
  return (
    <LinearGradient colors={["green", "green", "black"]}>
      <TouchableOpacity
        style={[
          styles.container,
          slateNumber ? styles.numberContainer : styles.emptyColumnContainer,
        ]}
        onPressOut={() => onTilePressed(slateNumber)}
      >
        <Text style={styles.textStyle}>{slateNumber}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 3,
    width: "100%",
    height: "100%",
  },
  numberContainer: {
    borderBottomColor: "white",
    borderTopColor: "black",
    borderRightColor: "white",
    borderLeftColor: "black",
  },
  emptyColumnContainer: {
    backgroundColor: "blue",
    borderBottomColor: "black",
    borderTopColor: "white",
    borderRightColor: "black",
    borderLeftColor: "white",
  },
  textStyle: {
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default SlateTile;
