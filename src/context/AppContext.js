import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
const AppContext = createContext({});
import AppLoading from "expo-app-loading";

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [favourite, setFavourite] = useState(null);
  const logout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
  };
  useEffect(async () => {
    try {
      const data = await AsyncStorage.getItem("user");
      const fav = await AsyncStorage.getItem("favourite");
      if (data != null) {
        setUser(JSON.parse(data));
      }
      if (fav != null) {
        setFavourite(fav);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        logout,
        favourite,
        setFavourite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
