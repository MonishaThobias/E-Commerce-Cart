import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts,addToCart } from "../slice/ProductSlice"; 
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router";

const ProductView = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  // Get user from Redux state
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (!products.length) {
    return <div>Loading products...</div>;
  }

  return (
    <>
      <Header />
      <div className="container bg-secondary p-4 mt-5 rounded mb-5">
        <h1 className="text-white text-center p-4">Product List</h1>
        {/* Show username if available */}
        <h5 className="text-white text-end mb-4">
          Hi, {user ? user.name : "User"}!
        </h5>
       {/*  <div className="row my-5">
          <form className="d-flex">
            <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
            <select name="" id="" className="form-select me-2">
              <option value="">All categories</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <NavLink className="btn btn-success" type="submit">Search</NavLink>
          </form>
        </div> */}
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4" style={{ height: "450px" }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <NavLink to={`/products/${product.id}`} className="btn btn-primary me-2">
                    View Details
                  </NavLink>
                  <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>
                    <span className="fa fa-shopping-cart"></span>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
