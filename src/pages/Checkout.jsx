import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.phone || !form.address || !form.pincode) {
      alert("Please fill all fields");
      return;
    }

    alert("✅ Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <section className="container py-5" data-aos="fade-up">
      <h2 className="mb-4 text-center">Checkout</h2>

      <div className="row g-4">
        {/* Form Section */}
        <div className="col-md-6">
          <h5 className="mb-3">Shipping Information</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="form-control mb-3"
              placeholder="Full Address"
              rows="3"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            ></textarea>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Pincode"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-success w-100 mt-2">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <h5 className="mb-3">Order Summary</h5>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={item.id}
              >
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  <small>Qty: {item.quantity}</small>
                </div>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <strong>Total</strong>
              <strong>₹{totalPrice}</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
