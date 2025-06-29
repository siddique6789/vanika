import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fzu9kme",     // Replace with your actual Service ID
      "template_9m1lj4f",    // Replace with your actual Template ID
      form.current,
      "L4E-abtTNXvdGCnIR"      // Replace with your actual Public Key
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      () => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center mb-4" data-aos="fade-down">Contact Us</h2>
        <p className="text-muted text-center mb-5 mx-auto" style={{ maxWidth: "600px" }} data-aos="fade-up">
          We'd love to hear from you! Please fill out the form and we'll get back to you shortly.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ maxWidth: "600px" }}
          className="mx-auto mb-5"
          data-aos="fade-up"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-control mb-3"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="form-control mb-3"
            required
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="form-control mb-3"
            required
          ></textarea>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <button type="submit" className="btn btn-success w-100">Send Message</button>
        </form>

        {/* Social Links - Moved Below the Form */}
        <div className="row justify-content-center text-center">
            {/* Instagram */}
            <div className="col-md-4 mb-4" data-aos="zoom-in">
                <a
                href="https://www.instagram.com/vanika_hair_protection"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-success"
                style={{ transition: "0.3s", textAlign: "center" }}
                >
                <FaInstagram size={48} color="#E1306C" className="mb-2" />
                <h5 className="mb-1">Instagram</h5>
                <p>@vanika_hair_protection</p>
                </a>
            </div>

            {/* WhatsApp */}
            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
                <a
                href="https://wa.me/919961147468"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-success"
                style={{ transition: "0.3s", textAlign: "center" }}
                >
                <FaWhatsapp size={48} color="#25D366" className="mb-2" />
                <h5 className="mb-1">WhatsApp</h5>
                <p>+91 99611 47468</p>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;