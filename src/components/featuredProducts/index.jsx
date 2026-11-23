import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios("https://fakestoreapi.com/products");
        setProducts(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container-full">
      <h1>Our Featured Products</h1>
      <div className="product-container">
        {products.map((e, i) => (
          <Link
            to={`/product-details/${e.id}`}
            className="product-card"
            key={i}
          >
            <img src={e.image} alt={e.title} />
            <h1>{e.title}</h1>
            <h3>{`$${e.price}`}</h3>
          </Link>
        ))}
      </div>
      <Link to="/products" className="show-all-button">
        Show All
      </Link>
    </div>
  );
};

export default FeaturedProducts;
