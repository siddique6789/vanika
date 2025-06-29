import React from "react";

const NotFound = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center py-5"
      style={{ minHeight: "60vh" }}
    >
      {/* ✅ Responsive image container */}
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4 text-center">
            <img
              src="/images/vanika-404.png" // Make sure image is inside public/images/
              alt="Vanika 404"
              className="img-fluid rounded"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      {/* ✅ Fun message with animation */}
      <h1 className="fw-bold text-danger mb-3" data-aos="fade-down">
        404 - This Page Had a Bad Hair Day
      </h1>

      <p className="text-muted mb-0" data-aos="fade-up">
        We couldn't find what you were looking for. But don’t worry — your hair’s still protected.
      </p>
    </section>
  );
};

export default NotFound;
