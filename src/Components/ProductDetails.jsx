import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const ProductDetails = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h4>Product not found</h4>
        <button onClick={() => navigate("/products")} className="btn btn-primary mt-3">
          Back to Products
        </button>
        
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row text-white">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ height: "400px", objectFit: "contain" }}
            />
          </div>
          
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4 className="text-info">${product.price}</h4>
            <p className="text-light">
              Rating: {product.rating?.rate || "N/A"} / 5
            </p>
            <button className="btn btn-primary  mt-3 me-2">Add to Cart</button>
            <button onClick={() => navigate("/products")} className="btn btn-primary mt-3">
          Back to Products
        </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
