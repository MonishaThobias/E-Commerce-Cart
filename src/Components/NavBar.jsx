import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router";
//import { toggleCart } from "../slice/ProductSlice";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
 // const isShowCart = useSelector((state) => state.product.isShowCart);
  const cart = useSelector((state) => state.product.cart);
  const cartCount = cart?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 0;
  const dispatch = useDispatch();

  /* const handleOnClick = () => {
    dispatch(toggleCart());
  }; */

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isAuthPage = ["/login", "/register", "/logout", "/products", "/products:id"].includes(location.pathname);

  const renderAuthLinks = () => (
    <>
      <li className="nav-item">
        <p className="nav-link mt-2">{`Welcome to E-Cart`}</p>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link mt-2" to="/">Home</NavLink>
      </li>
    </>
  );

  const renderCartButton = () => (
    <li className="nav-item me-2">
      <NavLink to='/cart' className="btn btn-outline-success position-relative m-2" >
      Cart <span className="fa fa-shopping-cart"></span>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartCount}
        </span>
      </NavLink>
      {/* <button
        type="button"
        className="btn btn-outline-success position-relative m-2"
        onClick={handleOnClick}
      >
        Cart <span className="fa fa-shopping-cart"></span>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartCount}
        </span>
      </button> */}
    </li>
  );

  return (
    <>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
          {isAuthPage && renderAuthLinks()}

          {location.pathname === "/" && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link mt-2" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mt-2" to="/login">Login</NavLink>
              </li>
            </>
          )}

          {location.pathname === "/products" && (
            <>
              {renderCartButton()}
              <li className="nav-item">
                <button className="btn nav-link mt-2" onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
{/* 
      {isShowCart && (
        <div
          className={`offcanvas offcanvas-end ${isShowCart ? "show" : ""}`}
          tabIndex="-1"
          id="cartOffcanvas"
          aria-labelledby="cartOffcanvasLabel"
          style={{ visibility: isShowCart ? "visible" : "hidden" }}
        >
          <div className="offcanvas-header">
            <h5 id="cartOffcanvasLabel">Your Cart</h5>
            <button
              type="button"
              className="btn-close text-reset"
              onClick={handleOnClick}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <p key={index}>{item.name} - {item.quantity}</p>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      )} */}
    </>
  );
};

export default NavBar;
