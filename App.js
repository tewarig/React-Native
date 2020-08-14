import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TouchableOpacityBase,
  Alert,
  Button,
  Platform,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log("yo", useDimensions(), useDeviceOrientation());

  const handlePress = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click me!"
        onPress={() =>
          Alert.alert("My Name", "My Message", [
            {
              text: "Yes",
              onPress: () => {
                console.log("Hello");
              },
            },
            { text: "No" },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
