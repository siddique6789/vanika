import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, changeQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center" data-aos="fade-up">
        <h2 className="mb-3">Your Cart is Empty</h2>
        <Link to="/products" className="btn btn-success rounded-pill">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <section className="container py-5" data-aos="fade-up">
      <h2 className="mb-4 text-center">Your Cart</h2>

      <div className="table-responsive">
        <table className="table align-middle text-center">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                      borderRadius: "8px",
                      background: "#f8f8f8",
                      padding: "6px",
                    }}
                  />
                  <div className="text-start">
                    <strong>{item.name}</strong>
                  </div>
                </td>

                {/* Quantity Controls */}
                <td>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => changeQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => changeQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>

                <td>₹{item.price}</td>
                <td>₹{item.price * item.quantity}</td>
                <td>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>Total: ₹{totalPrice}</h4>
        <div className="d-flex flex-column flex-md-row gap-2">
          <button className="btn btn-outline-secondary w-100" onClick={clearCart}>
            Clear Cart
          </button>
          <Link to="/checkout" className="btn btn-success w-100">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
