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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <SocialButtons /> {/* ✅ Fixed button visible on all pages */}
    </BrowserRouter>
  );
}

export default App;
