import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/authLogin/authContext";
import { useContext } from "react";
import "./style.css";
import { getAuth, signOut } from "firebase/auth";
function NavBar() {
  const { IsLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const auth = getAuth();
  const logout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const renderLoginButton = () => {
    if (IsLoggedIn) {
      return (
        <div className="logout">
          <button onClick={logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <button>
          <Link to="/login">Log In</Link>
        </button>
      );
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="heading">
          <Link to="/">ECommerce</Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
        <div className="login">{renderLoginButton()}</div>
      </div>
    </>
  );
}

export default NavBar;
