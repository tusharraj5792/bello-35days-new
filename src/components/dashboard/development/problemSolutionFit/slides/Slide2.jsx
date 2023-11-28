import React from "react";

const Slide2 = () => {
  return (
    <>
      {/* Slide 71 Starts */}
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-black position-relative">
        <h2 className="slide-heading fw-semibold px-4 text-white mt-2">
          Business Opportunity: problem/solution fit
        </h2>
        <div className="top-line my-3 mx-4"></div>
        <p className="text-white px-4">
          Use the VPC to help determine problem/solution fit then define
          opportunity/resource gap to guide your strategic objective choices.
          Perform a separate VPC for each product you want to offer to fill an
          identified market gap.
        </p>
        <img
          src="../static/img/slide71.png"
          alt="..."
          className="img-fluid w-83 mx-auto d-block"
        />
        <div className="bottom-line1 mt-3"></div>
      </section>

      {/* Slide Content Starts */}
      <section className="p-3">
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
            Slide Content
          </h1>
          <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
            Instructions: Fill out the VPC starting from customer job to be done
            on the right. Then customer pains followed by customer anticipated
            gains. Then identify product on the left, what features relieve
            customer pain, and how will it delight customers with further gains{" "}
          </p>
          <form className="mx-4 px-2 mb-4">
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Product
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0 text-muted">
                2500 Characters left
              </p>
            </div>
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Gain Creators
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0 text-muted">
                2500 Characters left
              </p>
            </div>
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Pains Relievers
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0 text-muted">
                2500 Characters left
              </p>
            </div>
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Gains
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0 text-muted">
                2500 Characters left
              </p>
            </div>
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Pains
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0 text-muted">
                2500 Characters left
              </p>
            </div>
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Customer JTBD
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0 text-muted">
                2500 Characters left
              </p>
            </div>
          </form>
        </div>
      </section>
      {/* Slide Content Ends */}
      {/* Slide 71 Ends */}
    </>
  );
};
export default Slide2;
