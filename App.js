import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View } from "react-native";
import Cesta from "./src/telas/Cesta";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cesta />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
