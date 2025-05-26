import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../slice/ProductSlice"; // Assuming these actions exist
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router";

const CartView = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cart);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({id})); // Removes a single item from the cart
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Clears all items from the cart
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="container text-center bg-secondary px-4 mt-5 rounded mb-5 py-5" style={{height:"100vh"}}>
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
      <div className="container bg-secondary px-4 mt-5 rounded mb-5 py-5">
        <h1 className="text-center mb-4">Your Cart</h1>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <div>
            <button className="btn btn-secondary me-3" onClick={handleClearCart}>
              Clear Cart
            </button>
          {/*   <NavLink to="/checkout" className="btn btn-success">
              Proceed to Checkout
            </NavLink> */}
          </div>
        </div>
        <NavLink to="/products" className="btn btn-primary mt-4">
            Shop Now
          </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default CartView;
