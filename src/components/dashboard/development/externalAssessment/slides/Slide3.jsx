import React from "react";

const Slide3 = () => {
  return (
    <>
      {/* Slide 20 Starts */}
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">External Assessment</h2>
        <div className="top-line my-3 mx-4"></div>
        <div className="px-5">
          <h5 className="fw-bold">
            <i>a note on industry and market trends</i>
          </h5>
          <h5 className="fw-bold">Industry/market trend</h5>
          <ul type="disc" className="ps-0 d-grid" style={{ gap: "10px" }}>
            <li>
              Take a quick snapshot of your industry. How are your markets
              segmented, and in which segments do you compete?
            </li>
            <li>
              Roughly, how large are the market segments for your current
              product line and planned future products?
            </li>
            <li>
              Are the market segments for your products (services) growing,
              stable, or shrinking? How fast? Why?
            </li>
            <li>
              What are the dominant trends in your industry? What are the
              underlying forces behind those trends?
            </li>
            <li>
              Most importantly, what are your customers telling you about their
              evolving needs? What are they telling you about how well your
              company is meeting their needs?
            </li>
            <li>
              How are customer demands changing? Direct input from your
              customers is an essential part of setting strategy. Get input
              directly from your customers regularly. That is also called voice
              of customer or VOC.
            </li>
          </ul>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>
      {/* Slide 20 Ends */}
    </>
  );
};

export default Slide3;
