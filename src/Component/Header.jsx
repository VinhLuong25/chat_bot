import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="navigation navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <h1 className="brand-title"> Real Estate </h1>
            </a>
          </div>
          <a href="#">
            {" "}
            <p id="menuText" className="navbar-text navbar-right">
              Our Story
            </p>
          </a>

          <a href="#">
            <p id="menuText" className="navbar-text navbar-right">
              Agents
            </p>
          </a>
          <a href="#">
            <p id="menuText" className="navbar-text navbar-right">
              Listings
            </p>
          </a>
          <i
            id="search"
            className="navbar-text navbar-right fa fa-search fa-2x"
          ></i>
        </div>
      </nav>
    </header>
  );
}
