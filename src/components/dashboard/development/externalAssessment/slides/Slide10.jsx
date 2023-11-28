import React from "react";

const Slide10 = () => {
  return (
    <>
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">
          Product Strategy Gauge
        </h2>
        <div className="top-line my-3 mx-4 "></div>
        <div className="px-5">
          <h5 className="fw-bold">
            <i>Deliberate or Emergent Strategy</i>
          </h5>
          <p>
            This is meant to help users determine if the identified product
            needs an Emergent Strategy or a Deliberate Strategy. While some
            answers might produce a borderline result, the gauge is meant to
            help design your strategy around six main elements:
          </p>
          <ul type="number" className="ps-0 d-grid" style={{ gap: "10px" }}>
            <li>Tension between control and innovation</li>
            <li>Project clearness of requirements.</li>
            <li>Industry evolution stage.</li>
            <li>
              Type of innovation being introduced: sustaining or disruptive.
            </li>
            <li>Theory of Interdependence and Modularity.</li>
            <li>Integrated or specialized approach.</li>
          </ul>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>
    </>
  );
};

export default Slide10;
