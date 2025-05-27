// src/components/Checkout.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../slice/ProductSlice";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate, NavLink } from "react-router";


const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.product.cart);
  const user = useSelector((state) => state.user.user);

  // Calculate total
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Form state
  const [shipping, setShipping] = useState({
    fullName: user?.name || "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleShippingChange = (e) =>
    setShipping({ ...shipping, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send `cartItems`, `shipping`, `paymentMethod`
    // to your backend to process the order.
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/products");
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="container bg-secondary text-white rounded text-center py-5 my-5" style={{ height: "70vh" }}>
          <h2>Your Cart is Empty!</h2>
          <NavLink to="/products" className="btn btn-primary mt-4">
            Shop Now
          </NavLink>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container  bg-secondary text-white rounded  my-5">
        <h1 className="mb-4 text-center">Checkout</h1>
        <div className="row">
          {/* Shipping & Payment Form */}
          <div className="col-md-6 mb-4">
            <h4>Shipping Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  value={shipping.fullName}
                  onChange={handleShippingChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={shipping.address}
                  onChange={handleShippingChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={shipping.city}
                  onChange={handleShippingChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  className="form-control"
                  value={shipping.postalCode}
                  onChange={handleShippingChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  value={shipping.country}
                  onChange={handleShippingChange}
                  required
                />
              </div>

              <h4 className="mt-4">Payment Method</h4>
              <div className="form-check">
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  value="card"
                  className="form-check-input"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="card" className="form-check-label">
                  Credit / Debit Card
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  value="paypal"
                  className="form-check-input"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="paypal" className="form-check-label">
                  PayPal
                </label>
              </div>

              <button type="submit" className="btn btn-success mt-4 w-100">
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="col-md-6">
            <h4>Order Summary</h4>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    {item.title} &times; {item.quantity}
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>${totalPrice.toFixed(2)}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
