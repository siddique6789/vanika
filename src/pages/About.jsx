import React from "react";

const About = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="container d-flex justify-content-center mb-4">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4">
            <img
              src="/images/vanika-about.jpg"
              alt="Vanika Hair Protection"
              className="img-fluid rounded"
              data-aos="zoom-in"
            />
          </div>
        </div>
        {/* Heading */}
        <h2 className="text-center mb-4" data-aos="fade-down">
          About VANIKA
        </h2>
        <p
          className="text-muted text-center mx-auto mb-5"
          style={{ maxWidth: "700px" }}
          data-aos="fade-up"
        >
          VANIKA Hair Protection Oil is rooted in tradition and powered by nature. Our vision is
          to bring ancestral wisdom to modern hair care — creating products that are honest,
          herbal, and effective. Every drop of VANIKA carries years of research and family
          formulation.
        </p>

        {/* Core Values Section */}
        <div className="row text-center">
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://img.icons8.com/ios-filled/100/4caf50/leaf.png"
              alt="Natural"
              height={60}
            />
            <h5 className="mt-3">All-Natural Ingredients</h5>
            <p className="text-muted small">
              Neem, Amla, Castor, Coconut — nothing synthetic. Gentle, safe & nourishing.
            </p>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
            <img
              src="https://img.icons8.com/ios-filled/100/4caf50/like.png"
              alt="Trusted"
              height={60}
            />
            <h5 className="mt-3">Family-Trusted Formula</h5>
            <p className="text-muted small">
              Passed down through generations of traditional care. Trusted by thousands.
            </p>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="500">
            <img
              src="https://img.icons8.com/ios-filled/100/4caf50/water.png"
              alt="Moisture"
              height={60}
            />
            <h5 className="mt-3">Hydration + Strength</h5>
            <p className="text-muted small">
              Deeply hydrates your scalp, strengthens roots, and prevents breakage and dandruff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
