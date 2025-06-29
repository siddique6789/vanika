import React from "react";

const Products = () => {
  const productData = [
    {
      id: 1,
      name: "VANIKA Hair Protection Oil – 100ml",
      price: 260,
      image: "/images/100ml.jpg",
      description: "Perfect for trial use or travel. Herbal nourishment in a compact bottle.",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "VANIKA Hair Protection Oil – 200ml",
      price: 460,
      image: "/images/200ml.jpg",
      description: "Full-size bottle for regular use. Strengthens, protects, and revitalizes.",
      badge: null
    },
    // Add more products here
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center mb-4" data-aos="fade-down">Our Products</h2>
        <p className="text-center text-muted mb-5" data-aos="fade-up">
          Choose the size that fits your hair care routine.
        </p>

        {/* Product Grid Container */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row g-4 justify-content-center">
              {productData.map((product) => (
                <div className="col-sm-6 col-md-6" key={product.id} data-aos="fade-up" data-aos-delay={product.id * 100}>
                  <div
                    className="card h-100 shadow border-0 rounded-4 product-card"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top p-3"
                      style={{
                        height: "220px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="card-body d-flex flex-column text-center position-relative">
                      {/* Ribbon-style badge */}
                      {product.badge && (
                        <div style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          backgroundColor: "#43a047",
                          color: "white",
                          padding: "6px 12px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          borderBottomRightRadius: "8px",
                          zIndex: 2,
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px"
                        }}>
                          {product.badge}
                        </div>
                      )}
                      <h5 className="card-title fw-bold mt-4">{product.name}</h5>
                      <p className="text-muted small mb-3">{product.description}</p>
                      <div className="mt-auto">
                        <p className="fs-5 fw-semibold mb-2">₹{product.price}/-</p>
                        <button className="btn btn-success w-100 rounded-pill">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
