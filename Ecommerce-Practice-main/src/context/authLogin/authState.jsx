import { useState } from "react";
import AuthContext from "./authContext";

const AuthState = (props) => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ IsLoggedIn, setIsLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
