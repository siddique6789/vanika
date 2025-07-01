import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ Import Cart context

// Temporary hardcoded product data (replace with API later)
const productData = [
  {
    id: 1,
    name: "VANIKA Hair Protection Oil – 100ml",
    price: 260,
    image: "/images/100ml.jpg",
    description: "Perfect for trial use or travel. Herbal nourishment in a compact bottle.",
  },
  {
    id: 2,
    name: "VANIKA Hair Protection Oil – 200ml",
    price: 460,
    image: "/images/200ml.jpg",
    description: "Full-size bottle for regular use. Strengthens, protects, and revitalizes.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // ✅ Get addToCart function
  const quantityRef = useRef(); // ✅ Reference for quantity input

  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    const qty = parseInt(quantityRef.current.value);
    if (qty >= 1) {
      const productToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      };
      console.log("🟢 Adding to cart:", productToAdd, qty);
      addToCart(productToAdd, qty);
      alert("Added to cart!");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 mb-4 text-center" data-aos="fade-right">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>

          {/* Info */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-bold">{product.name}</h2>
            <p className="text-muted">{product.description}</p>
            <h4 className="text-success mb-3">₹{product.price}/-</h4>

            {/* Quantity */}
            <div className="d-flex align-items-center mb-3">
              <label className="me-2">Qty:</label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="form-control"
                style={{ width: "80px" }}
                ref={quantityRef} // ✅ Connect ref
              />
            </div>

            {/* Add to Cart Button */}
            <button
              className="btn btn-success rounded-pill px-4"
              onClick={handleAddToCart} // ✅ Call handler
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
