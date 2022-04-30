import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";
import LoginScreen from "./src/screens/LoginScreen";
export default function App() {
  let [fontsLoaded] = useFonts({
    "Typold-Bold": require("./assets/fonts/TypoldBold.otf"),
    "Typold": require("./assets/fonts/TypoldRegular.otf"),
    "Typold-Medium": require("./assets/fonts/TypoldMedium.otf"),
  });
  if (fontsLoaded) {
    return (
      <>
        <LoginScreen/>
        <StatusBar />
      </>
    );
  } else {
    return null;
  }
}

