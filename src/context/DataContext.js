import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loginData, setLoginData] = useState([]);
  const [signupData, setSignupData] = useState([]);

  const addLoginData = (data) => setLoginData((prev) => [...prev, data]);
  const addSignupData = (data) => setSignupData((prev) => [...prev, data]);

  return (
    <DataContext.Provider value={{ loginData, signupData, addLoginData, addSignupData }}>
      {children}
    </DataContext.Provider>
  );
};
