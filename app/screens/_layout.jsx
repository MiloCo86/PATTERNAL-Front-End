import { Slot } from "expo-router";
import { View, StyleSheet } from "react-native";

import NavBar from "../layout/NavBar";
import TopBar from "../layout/TopBar";

export default function Layout() {
  return (
    <View style={styles.mainLayout}>
      <TopBar />
      <Slot />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
