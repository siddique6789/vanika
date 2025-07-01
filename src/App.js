import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SocialButtons from "./components/SocialButtons";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,       // ✅ Animate only once per element
      duration: 800     // ✅ Animation duration in milliseconds
    });
  }, []);

  return (
    <BrowserRouter>
      {/* ✅ Flex column layout that fills screen */}
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        {/* ✅ This section grows to fill available space */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>

      {/* Floating WhatsApp & Instagram buttons */}
      <SocialButtons />
    </BrowserRouter>
  );
}

export default App;
