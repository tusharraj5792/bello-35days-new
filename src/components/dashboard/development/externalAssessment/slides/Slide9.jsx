import React from "react";

const Slide9 = () => {
  return (
    <>
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">External Assessment</h2>
        <div className="top-line my-3 mx-4"></div>
        <div className="px-5">
          <h5 className="fw-bold">
            <i>a note on competitors' assessment</i>
          </h5>
          <p>
            Competitors assessment: In preparing for a strategy session, ask a
            selected group of employees, managers, and outsiders to list the top
            three external opportunities and top three external threats facing
            the company. This is a quick and efficient way to tap the insights
            of a range of people as input to your external assessment.
          </p>
          <ul type="disc" className="ps-0 d-grid" style={{ gap: "10px" }}>
            <li>Who are your current competitors?</li>
            <li>Who are potential competitors?</li>
            <li>What are their strengths and weaknesses?</li>
            <li>
              What do you anticipate as being their future moves in the market?
              What are their visions and strategies?
            </li>
            <li>
              How do your strengths, weaknesses, and product line stack up
              against competition? Where are they vulnerable? Where are you
              vulnerable?
            </li>
            <li>
              Do you have a clear, differentiated position with respect to your
              competitors? What is it?
            </li>
          </ul>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>
    </>
  );
};

export default Slide9;
