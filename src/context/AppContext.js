import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
const AppContext = createContext({});

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
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
    <AppContext.Provider value={{ user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
