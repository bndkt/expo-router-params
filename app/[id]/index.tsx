import { Link, useSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  // When navigating to "Tab One", this logs `TabOneScreen {"id": "foo"}` correctly
  // When navigating to "Tab Two", this logs `TabOneScreen {}`
  console.log("TabOneScreen", useSearchParams());

  const { id } = useSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One (ID: {id})</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Link href={"../"} style={{ color: "red" }}>
        Tap here to go to `../`
      </Link>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/[id]/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
