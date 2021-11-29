import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SlateParent from "./components/SlateParent";

export default function App() {
  return (
    <View style={styles.container}>
      <SlateParent slateRows={4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
