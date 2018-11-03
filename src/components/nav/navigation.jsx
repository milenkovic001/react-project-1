import React, { Component } from "react";
import "./navigation.css";

const Navigation = props => {
  const { goHome } = props;
  return (
    //    <nav class="navbar navbar-dark bg-dark">
    // navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar
    //    </nav>
    <nav className=" navbar navbar-expand-sm navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand text-white" href="#" onClick={goHome}>
        Home
      </a>

      <div
        className="collapse navbar-collapse text-white"
        id="navbarTogglerDemo03"
      >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active" />
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
