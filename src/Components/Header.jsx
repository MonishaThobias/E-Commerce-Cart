import React from "react";
import NavBar from "./NavBar";


const Header = () =>{
    return(
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">E-Cart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<NavBar />
  </div>
</nav>
        </>
    );
}

export default  Header;