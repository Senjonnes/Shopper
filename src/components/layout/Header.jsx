import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const topNavStyle = {
  paddingTop: "10px",
  paddingBottom: "10px",
  fontWeight: "bold",
  fontSize: "13px"
};

const secondNavStyle = {
  backgroundColor: "#333"
};

const shopmateStyle = {
  color: "red",
  letterSpacing: "6px"
};

const aTagStyle = {
  color: "red",
  cursor: "pointer"
};

function Header() {
  return (
    <React.Fragment>
      <div className="container" style={topNavStyle}>
        <div className="d-flex justify-content-between">
          <div>
            Hi <a style={aTagStyle}>Sign in</a> or{" "}
            <a style={aTagStyle}>Register</a>
          </div>
          <div>
            <span className="pr-4">Daily Deals</span>
            <span className="pr-4">Sell</span>
            <span>Help & Contact</span>
          </div>
          <div>GBP</div>
          <div>
            Your bag: #<span>3.99</span>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md" style={secondNavStyle}>
        <a href="#" className="navbar-brand" style={shopmateStyle}>
          SHOPMATE
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav row offset-md-1">
            <a href="#" className="nav-item nav-link pl-3 active">
              Women
            </a>
            <a href="#" className="nav-item nav-link pl-3">
              Men
            </a>
            <a href="#" className="nav-item nav-link pl-3">
              Kids
            </a>
            <a href="#" className="nav-item nav-link pl-3">
              Shoes
            </a>
            <a href="#" className="nav-item nav-link pl-3">
              Brands
            </a>
          </div>
          <form className="form-inline">
            <div className="input-group" style={{ position: "relative" }}>
              <input
                type="text"
                className="form-control search-input place-holder-white"
                placeholder="search anything"
              />
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </div>
          </form>
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link">
              <FontAwesomeIcon
                icon={faShoppingBag}
                style={{ color: "#fff", zIndex: "100" }}
              />
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
