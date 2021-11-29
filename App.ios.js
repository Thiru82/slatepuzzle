import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SlateParent from "./components/SlateParent";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SlateParent slateRows={5} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#103652",
    justifyContent: "center",
  },
});
