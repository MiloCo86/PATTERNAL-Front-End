import { Slot } from "expo-router";
import { View, StyleSheet } from "react-native";

import NavBar from "../layout/NavBar";

export default function Layout() {
  return (
    <View style={styles.mainLayout}>
      <Slot />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
