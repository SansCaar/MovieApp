import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
const AppContext = createContext({});

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
  const logout = async () => {
      await AsyncStorage.removeItem("user");
      setUser(null);
      const data = await AsyncStorage.getItem("user");
    
  }
  useEffect(async () => {
    try {
      const data = await AsyncStorage.getItem("user");
      if (data != null) {
        setUser(JSON.parse(data));
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, logout}}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
