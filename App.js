import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
  View,
  TextInput,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Card from "./app/components/card";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScree";
import ViewImageContainer from "./app/screens/ViewScreenImage";
import MessageScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setcategory] = useState("");

  return (
    <Screen>
      <AppTextInput
        item={categories}
        placeholder="Email"
        icon="email"
      ></AppTextInput>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setcategory(item)}
        icon="apps"
        placeholder="Category"
        items={categories}
      ></AppPicker>
    </Screen>
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
