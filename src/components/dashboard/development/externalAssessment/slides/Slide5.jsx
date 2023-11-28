import React from "react";

const Slide5 = () => {
  return (
    <>
      {/* Slide 20 Starts */}
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">Disruption Strategy</h2>
        <div className="top-line my-3 mx-4"></div>
        <div className="px-5">
          <ul type="disc" className="ps-0 d-grid" style={{ gap: "10px" }}>
            <li>
              There are three main types of innovation: (1) sustaining
              innovation, (2) low-end disruptive innovation, and ( new-market
              disruptive innovation.
            </li>
            <li>
              New technology is not intrinsically disruptive; it depends on how
              it is deployed into the market relative to the business models for
              existing products or services.
              <ul type="none">
                <li>✓ Incumbents typically win sustaining battles</li>
                <li>✓ Entrants typically win disruptive battles.</li>
              </ul>
            </li>
            <li>
              Start innovating today-even while your core business is strong;
              disruption is typically an opportunity long before it is a threat
              <ul type="none">
                <li>
                  ✓ Spot disruption in your industry early by studying customers
                  who stopped using your product or service
                </li>
              </ul>
            </li>
            <li>
              An organization cannot disrupt itself. Disruptive business models
              must be separated from the core business (applying an emergent
              strategy).
            </li>
          </ul>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>
      {/* Slide 20 Ends */}
    </>
  );
};

export default Slide5;
