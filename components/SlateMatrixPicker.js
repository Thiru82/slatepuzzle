import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Picker from "react-native-picker-dropdown/Picker";
import { StyleSheet } from "react-native";

const SlateMatrixPiker = ({ slateRows, setSlateRows }) => {
  return (
    <LinearGradient colors={["yellow", "yellow", "black"]}>
      <Picker
        selectedValue={slateRows}
        onValueChange={setSlateRows}
        mode="dialog"
        textStyle={styles.pickerText}
        style={styles.picker}
      >
        <Picker.Item label="3x3" value={3} />
        <Picker.Item label="4x4" value={4} />
        <Picker.Item label="5x5" value={5} />
        <Picker.Item label="6x6" value={6} />
      </Picker>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  pickerText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  picker: {
    height: 60,
  },
});

export default SlateMatrixPiker;
