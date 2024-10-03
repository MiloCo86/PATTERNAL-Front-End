import { Slot } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <View style={styles.mainLayout}>
      <Slot />
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


