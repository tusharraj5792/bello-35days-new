import React from "react";

export const Slide7 = () => {
  return (
    <div>
      <section className="w-91 pt-3  px-5 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">Disruption Strategy</h2>
        <div className="top-line my-3 mx-4"></div>
        <div className="px-5">
          <p className="fw-bold">
            cross-check product strategy to your company’s ability
          </p>
          <ul type="disc" className="ps-0 d-grid" style={{ gap: "10px" }}>
            <li>
              To assess the fit between the product or service you’ve identified
              and your organizational implementation capabilities, use the
              provided Product/Company Fit tool excel sheet.
            </li>
            <li>
              You’ll answer six company related questions (on a scale of 0-4)
              meant to examine your implementation capabilities and style.
            </li>
            <li>
              Do this for each identified market gap you plan on exploiting with
              a specific product.
            </li>
            <li>
              The result will be plotted within one of four quadrants:
              <ul type="none">
                <li className="py-1">
                  ✓ Deliberate Strategy / Predictive Company
                </li>
                <li className="py-1">
                  ✓ Emergent Strategy / Predictive Company
                </li>
                <li className="py-1">✓ Deliberate Strategy / Agile Company</li>
                <li className="py-1">✓ Emergent Strategy / Agile Company</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>
    </div>
  );
};
