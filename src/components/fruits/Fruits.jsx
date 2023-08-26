import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import ReactPaginate from "react-paginate";
import CommonSection from "../commonsection/CommonSection";
import "./Fruits.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemsPerPage = 12;

function Fruits() {
  const [minPrice, setMinPrice] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const showLoginFailure = () => toast.warning("Please login first!");
  const showAddingSuccess = () => toast.success(`Item added successfully`);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleFilter = () => {
    const filtered = filteredProducts.filter(
      (product) =>
        (minPrice === "" ||
          Math.floor(product.price * (1 - 20 / 100)) >= parseFloat(minPrice)) &&
        (maxPrice === "" ||
          Math.floor(product.price * (1 - 20 / 100)) <= parseFloat(maxPrice))
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = () => {
    // const value = e.target.value;
    // setSearchTerm(value);

    const filtered = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const sortOptions = {
    default: "Default",
    aToz: "Alphabetically A-Z",
    zToa: "Alphabetically Z-A",
    highToLow: "High Price",
    lowToHigh: "Low Price",
  };

  const sortProducts = (a, b) => {
    switch (sortBy) {
      case "aToz":
        return a.name.localeCompare(b.name);
      case "zToa":
        return b.name.localeCompare(a.name);
      case "highToLow":
        return b.price - a.price;
      case "lowToHigh":
        return a.price - b.price;
      default:
        return a.id - b.id;
    }
  };

  const sortedAndFilteredProducts = filteredProducts.sort(sortProducts);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = sortedAndFilteredProducts.slice(
    startIndex,
    endIndex
  );

  useEffect(() => {
    const getAllFruits = async () => {
      const data = (
        await axios.get("http://localhost:3001/api/products/fruits")
      ).data;
      console.log(data);
      setFilteredProducts(data);
    };
    getAllFruits();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="fruits-page">
        <CommonSection title="Fruits" />
        <div className="search-sort">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for fruits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="sort-section">
            <select
              className="sort-section-list"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {Object.entries(sortOptions).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="fruits-container">
          <div className="fruits-filter-section">
            <h2 className="filterheading">Price Filter</h2>
            <div className="filter-row">
              <input
                type="text"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <button className="apply-button" onClick={handleFilter}>
              Apply
            </button>
          </div>

          <div className="product-list">
            {displayedProducts.map((product) => (
              <Card
                key={product._id}
                name={product.name}
                price={product.price}
                url={product.photoArray[0].url}
                discount={product.discount}
                desc={product.desc}
                category={product.category}
                productId={product._id}
                showAddingSuccess={showAddingSuccess}
                showLoginFailure={showLoginFailure}
              ></Card>
            ))}
          </div>
        </div>
        <ReactPaginate
          pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName="paginationBttns"
          activeClassName="active"
        />
      </div>
    </>
  );
}

export default Fruits;
