import React from "react";
import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [menu, setMenu] = useState(false);

  return (
    <AppContext.Provider value={{ menu, setMenu }}>
      {props.children}
    </AppContext.Provider>
  );
};
