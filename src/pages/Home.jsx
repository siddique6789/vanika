import React from "react";
import { Link } from "react-router-dom"; // ✅ Required for routing
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <Banner />

      {/* About VANIKA Section */}
      <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <h2 className="text-center mb-4" data-aos="fade-down">Why VANIKA</h2>
          <p
            className="text-center text-muted mb-5 mx-auto"
            style={{ maxWidth: "700px" }}
            data-aos="fade-up"
          >
            At VANIKA, we believe that true hair care starts with nature...
          </p>

          <div className="row text-center">
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <img src="https://img.icons8.com/ios-filled/100/4caf50/leaf.png" alt="Natural" height={60} />
              <h5 className="mt-3">100% Natural</h5>
              <p className="text-muted">Made from neem, amla, castor, and coconut oils...</p>
            </div>

            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
              <img src="https://img.icons8.com/ios-filled/100/4caf50/like.png" alt="Trust" height={60} />
              <h5 className="mt-3">Trusted by Families</h5>
              <p className="text-muted">Formulated through generations of Ayurvedic tradition...</p>
            </div>

            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="500">
              <img src="https://img.icons8.com/ios-filled/100/4caf50/water.png" alt="Hydration" height={60} />
              <h5 className="mt-3">Scalp Hydration</h5>
              <p className="text-muted">Deep moisturization helps reduce dandruff, itchiness, and breakage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-light py-5" style={{
        background: "radial-gradient(circle at center, #4caf50 0%, #198754 100%)"
      }}>
        <div className="container text-center">
          <h2 className="mb-4" data-aos="fade-down">Available Sizes</h2>
          <div className="row justify-content-center g-4">

            {/* Product Card 1 */}
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 shadow-sm position-relative">
                <Link to="/product/1" className="stretched-link"></Link>
                <img
                  src="/images/100ml.jpg"
                  className="card-img-top"
                  alt="100 ml bottle"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">100 ml</h5>
                  <p className="card-text">₹260/-</p>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-sm position-relative">
                <Link to="/product/2" className="stretched-link"></Link>
                <img
                  src="/images/200ml.jpg"
                  className="card-img-top"
                  alt="200 ml bottle"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">200 ml</h5>
                  <p className="card-text">₹460/-</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-5 text-center" data-aos="fade-up">
        <h2 className="mb-3">Get in Touch</h2>
        <p className="text-muted">Follow us on Instagram or send us a message</p>
        <a
          href="https://www.instagram.com/vanika_hair_protection"
          className="btn btn-outline-success"
          target="_blank"
          rel="noreferrer"
        >
          @vanika_hair_protection
        </a>
      </section>
    </>
  );
}
