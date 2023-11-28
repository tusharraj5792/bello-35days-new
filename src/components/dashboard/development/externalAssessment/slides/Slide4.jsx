import React from "react";

const Slide4 = () => {
  return (
    <>
      {/* Slide 20 Starts */}
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">
          A note on Industry and market trends
        </h2>
        <div className="top-line my-3 mx-4"></div>
        <div className="row px-5">
          <div className="col-6">
            <p>
              Determine the level of maturity for your industry; emerging, rapid
              growth, mature, or declining. Your strategic planning must factor
              in evolution when deciding on objectives and perspectives.
            </p>
            <p>
              Maturing or declining industries are more vulnerable to
              disruption. Revisit Disruption Strategy to further understand your
              position.
            </p>
          </div>
          <div className="col-6">
            <img
              src="../static/img/slide12.png"
              alt="..."
              className="img-fluid px-4"
            />
          </div>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>
      {/* Slide 20 Ends */}
    </>
  );
};

export default Slide4;
