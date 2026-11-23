import { Link } from "react-router-dom";
import "./style.css";
import SubscribeUs from "../../components/subscribe";
import { useContext } from "react";
import AuthContext from "../../context/authLogin/authContext";
import FeaturedProducts from "../../components/featuredProducts";
import Categories from "../categories";

function Home() {
  const logInCheck = useContext(AuthContext);
  console.log("logInCheck value:", logInCheck);
  console.log("IsLoggedIn value:", logInCheck.IsLoggedIn);

  return (
    <>
      <div className="homepage">
        <div className="content">
          <div className="text">
            <h1>Let&apos;s Do Shopping</h1>
          </div>
          <div className="button">
            <Link to="/products" className="explore-button">
              Explore
            </Link>
          </div>
        </div>
      </div>
      <FeaturedProducts />
      <Categories />
      <SubscribeUs />
    </>
  );
}

export default Home;
