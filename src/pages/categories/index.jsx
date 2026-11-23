import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `https://fakestoreapi.com/products/categories`
      );
      setCategories(response.data);
    }
    fetchData();
  }, []);

  const toTitleCase = (text) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <div className="container-full">
        <div className="categories-container">
          <h1>Categories</h1>
          <div className="category-cards">
            {categories.map((e, i) => (
              <Link key={i} to={`/products/${e}`}>
                <div className="cat-card">
                  <img src="https://picsum.photos/200/300" alt={e} />
                  <h3>{toTitleCase(e)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
