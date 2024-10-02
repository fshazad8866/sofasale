import React from "react";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Sofa</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="index.html#about">About</a>
            </li>
            <li>
              <a href="/allproducts">Products</a>
            </li>
            <li>
              <a href="index.html#portfolio">New In</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="index.html#about">
          Sales - UP TO 30% Off
        </a>
      </div>
    </header>
  );
};

export default Header;
