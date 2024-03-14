import { useContext } from "react";
import AuthContext from "../../context/authLogin/authContext";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function PrivateRoutes({ children }) {
  const { IsLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  if (!IsLoggedIn) {
    console.log(IsLoggedIn);
    return <Navigate to="/login" state={{ redirectedFrom: location }} />;
  } else return children;
}

export default PrivateRoutes;
