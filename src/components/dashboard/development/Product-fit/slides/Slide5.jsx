import React from "react";

export const Slide5 = () => {
  return (
    <div>
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">
          Strategy can be Deliberate and/or Emergent
        </h2>
        <div className="top-line my-3 mx-4"></div>
        <img
          src="/static/img/product-fit-slide2.png"
          alt="..."
          className="img-fluid px-4"
        />
        <div className="bottom-line mt-3"></div>
      </section>
      <section className="p-3">
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
            Slide Content
          </h1>
          <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
          Instructions: This is meant as an illustrative slide. Not all your audience are well versed in strategy as a knowledge domain. This’ll help establish some level of basic strategy knowledge..{" "}
          </p>
          
        </div>
      </section>
    </div>
  );
};
