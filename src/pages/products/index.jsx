import axios from "axios";
import "./style.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Products() {
  const [Data, setData] = useState([]);

  const { categories } = useParams();
  console.log(categories);
  const apiUrl = categories
    ? `https://fakestoreapi.com/products/category/${categories}`
    : "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchData() {
      const response = await axios(apiUrl);
      setData(response.data);
    }

    fetchData();
  }, [apiUrl]);

  let newData;
  const sortA_Z = () => {
    newData = [...Data];
    newData.sort((a, b) => a.title.localeCompare(b.title));
    setData(newData);
  };
  const sortZ_A = () => {
    newData = [...Data];
    newData.sort((a, b) => b.title.localeCompare(a.title));
    setData(newData);
  };
  const sort1_9 = () => {
    newData = [...Data];
    newData.sort((a, b) => a.price - b.price);
    setData(newData);
  };
  const sort9_1 = () => {
    newData = [...Data];
    newData.sort((a, b) => b.price - a.price);
    setData(newData);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  let filteredData = Data.filter((product) => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <>
      <div className="container-full">
        <div className="header">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter Product Name"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="sort-dropdown">
            <select
              onChange={(e) => {
                const value = e.target.value;
                if (value === "az") {
                  sortA_Z();
                } else if (value === "za") {
                  sortZ_A();
                } else if (value === "19") {
                  sort1_9();
                } else if (value === "91") {
                  sort9_1();
                }
              }}
            >
              <option value="">Sort By</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
              <option value="19">Low-High</option>
              <option value="91">High-Low</option>
            </select>
          </div>
        </div>
        <div className="product-container">
          {filteredData.map((e, i) => (
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
      </div>
    </>
  );
}

export default Products;
