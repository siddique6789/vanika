import React from "react";

const Footer = () => {
  return (
    <footer className="bg-success text-white text-center py-4">
      <div className="container">
        {/* Brand Name */}
        <h5 className="fw-bold mb-3">VANIKA</h5>

        {/* Navigation Links */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mb-3">
          <a href="/" className="text-white text-decoration-none">
            Home
          </a>
          <a href="/products" className="text-white text-decoration-none">
            Products
          </a>
          <a href="/about" className="text-white text-decoration-none">
            About Us
          </a>
          <a href="/contact" className="text-white text-decoration-none">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0 small">
          © {new Date().getFullYear()} VANIKA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;