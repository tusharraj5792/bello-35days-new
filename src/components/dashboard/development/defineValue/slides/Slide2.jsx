import React from "react";

export const Slide2 = () => {
  return (
    <div>
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">
          Lean Thinking Defines Value in Terms of:
        </h2>
        <div className="top-line my-3 mx-4"></div>

        <div className="d-flex px-4 justify-content-between align-items-center py-4">
          <div>
            <img src="../static/img/arrow-turn.png" className="" alt="" />
          </div>
          <div className="1 w-25 ">
            <div className="">
              <div className="m-5">
                <div className="d-flex align-items-center justify-content-end">
                  <h2 className="fw-bold fs-5">Specific Product</h2>
                </div>
                <p className="">
                  Conduct external and internal assessments to determine market
                  gaps and determine what product you’ll need to introduce to
                  fill the identified gap.
                </p>
                <p className="p-3 rounded-3 border border-dark border-2 fw-bold">
                  Use the Value Stick to determine your pricing strategy based
                  on specific value drivers that increase WTP.
                </p>
                <div className="text-center">
                  <img src="../static/img/arrow.png" alt="" />
                </div>
              </div>
              <div className="m-5">
                <div>
                  <div className="d-flex align-items-center justify-content-end">
                    <h2 className="fw-bold fs-5 text-end ">Specific Price</h2>
                  </div>

                  <p className="">
                    Describe price strategy comparing WTP against your price and
                    the resulting customer delight.
                  </p>
                  <p className="p-3 rounded-3 border border-dark border-2 fw-bold">
                    Use WTP elements as value drivers to draw your product Value
                    Map to help prioritize your efforts and optimize your
                    resource allocation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="3">
            <img src="../static/img/define-value1.png" className="" alt="" />
          </div>
          <div className="1 w-25">
            <div className="">
              <div className="m-5">
                <div className="d-flex align-items-center">
                  <h2 className="fw-bolder fs-5">Specific Capabilities</h2>
                </div>

                <p className="">Product specs & features.</p>
                <div className="text-center">
                  <img src="../static/img/arrow1.png" alt="" />
                </div>
                <p className="p-3 rounded-3 border border-dark border-2 fw-bold">
                  Use WTP elements as value drivers to draw your product Value
                  Map to help prioritize your efforts and optimize your resource
                  allocation.
                </p>
              </div>
              <div className="m-5">
                <div className="text-center">
                  <img src="../static/img/arrow.png" alt="" />
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <h2 className="fs-5 fw-bold">Specific Customer</h2>
                  </div>
                  <p className="">
                    Details about customer segment, persona, avatar.
                  </p>
                  <div className="text-center">
                    <img src="../static/img/arrow.png" alt="" />
                  </div>
                  <p className="p-3 rounded-3 border border-dark border-2 fw-bold">
                    Use WTP elements as value drivers to draw your product Value
                    Map to help prioritize your efforts and optimize your
                    resource allocation.
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
            Instructions: Fill out value elements: specific product, specific
            capabilities, specific customer, and specific price. Do this for
            each identified product in a separate slide.{" "}
          </p>
          <form className="mx-5">
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Specific Product
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
                Specific Capabilities
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
                Specific Price
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
                Specific Customer
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
