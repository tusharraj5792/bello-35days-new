import React from "react";

export const Slide2 = () => {
  return (
    <div>
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">
          SWOT Analysis Template
        </h2>
        <div className="top-line my-3 mx-4"></div>

        <div className="d-flex px-4 justify-content-between py-4">
          <div className="1 w-25 ">
            <div className="">
              <div className="m-5">
                <div className="d-flex align-items-center">
                  <h2>STRENGTHS</h2>
                  <img
                    src="../static/img/product-fit-slide1-strength.png"
                    alt=""
                  />
                </div>
                <p className="">
                  Think of your strengths within your resources, processes,
                  profit formula, brand equity, creativity, innovation, and
                  execution.
                </p>
              </div>
              <div className="m-5">
                <div>
                  <div className="d-flex align-items-center">
                    <h2>THREATS</h2>
                    <img
                      src="../static/img/product-fit-slide1-threats.png"
                      alt=""
                    />
                  </div>
                  <p className="">These could be internal or external.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="3">
            <img src="../static/img/product-fit-slide1m.png" className="" alt="" />
          </div>
          <div className="1 w-25">
            <div className="">
              <div className="m-5">
                <div className="d-flex align-items-center">
                  <img
                    src="../static/img/product-fit-slide1-weakness.png"
                    alt=""
                  />
                  <h2>WEAKNESSES</h2>
                </div>
                <p className="">
                  Think of your weaknesses within your resources, processes,
                  profit formula, brand equity, creativity, innovation, and
                  execution.
                </p>
              </div>
              <div className="m-5">
                <div>
                  <div className="d-flex align-items-center">
                    <img
                      src="../static/img/product-fit-slide1-opportunities.png"
                      alt=""
                    />
                    <h2>OPPORTUNITIES</h2>
                  </div>
                  <p className="">
                    Have you located a market gap you can fill and exploit using
                    your strengths?.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>
      <section className="p-3">
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
            Slide Content
          </h1>
          <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
            Instructions: Fill out the table by summing up the four value
            corners for all identified products.{" "}
          </p>
          <form className="mx-5">
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Strengths
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0">2500 Characters left</p>
            </div>

            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Weaknesses
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0">2500 Characters left</p>
            </div>

            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Threats
              </label>
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-4">2500 Characters left</p>
            </div>
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Opportunities
              </label>
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-4">2500 Characters left</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
