import React, { createContext } from "react";

import useFirebase from "../hooks/useFirebase";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContest = useFirebase();
  return (
    <AuthContext.Provider value={allContest}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
