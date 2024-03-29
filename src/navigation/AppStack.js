import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MoviePlayer from "../screens/MoviePlayer";
import FavouriteScreen from "../screens/FavouriteScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Movie" component={MovieDetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MoviePlayer" component={MoviePlayer} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
