import React from 'react';

import AppStack from "./src/navigation/AppStack";
import { useFonts } from "expo-font";
import { ContextProvider } from './src/context/AppContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Typold-Bold": require("./assets/fonts/TypoldBold.otf"),
    Typold: require("./assets/fonts/TypoldRegular.otf"),
    "Typold-Medium": require("./assets/fonts/TypoldMedium.otf"),
  });
  if (!fontsLoaded) return null;
  return (
    <ContextProvider>
      <AppStack/>
    </ContextProvider>
  );
}
