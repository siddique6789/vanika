import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4" href="/">VANIKA</a>

        {/* Desktop Nav (visible on lg and up) */}
        <div className="d-none d-lg-flex ms-auto">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/login"><FaUser /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/cart"><FaShoppingCart /></a>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle (visible below lg) */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu for Mobile */}
        <div
          className="offcanvas offcanvas-end d-lg-none bg-success text-white"
          tabIndex="-1"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          {/* ✅ Centered, larger, vertical menu */}
          <div className="offcanvas-body d-flex flex-column align-items-center justify-content-center text-center">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link text-white fs-5 fw-semibold" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-5 fw-semibold" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-5 fw-semibold" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-5 fw-semibold" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/login"><FaUser /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/cart"><FaShoppingCart /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
