import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/homepage";
import Contact from "./pages/contact";
import PageNotFound from "./pages/pagenotfound";
import Products from "./pages/products";
import ProductDetails from "./pages/productsdetails";
import Categories from "./pages/categories";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./pages/cart";
import Footer from "./components/footer";
import PrivateRoutes from "./components/privateRoutes";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categories?" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
