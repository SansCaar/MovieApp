import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
const AppContect = createContext({});

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)
  
  useEffect(async () => {
    try {
      const data = await AsyncStorage.getItem("user");
      if (data != null) {
        setUser(JSON.parse(data));
        console.log("user");
        console.log(user.email);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <AppContect.Provider value={{ user, setUser, setLoading }}>
      {!loading && children}
    </AppContect.Provider>
  );
};
export default AppContect;
