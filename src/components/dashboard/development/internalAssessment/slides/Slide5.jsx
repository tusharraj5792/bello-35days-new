import React from "react";

const Slide5 = () => {
  return (
    <>
      {/* Slide24 Starts */}
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-lightgrey position-relative">
        <h2 className="slide-heading fw-semibold px-4">
          Determine What We Can & Cannot Do
        </h2>
        <div className="top-line my-3 mx-4"></div>
        <div className="row mx-2 px-1 align-items-center mb-5">
          <div className="col-6">
            <h5 className="fw-semibold fst-italic">
              a closer look at our resources
            </h5>
            <h6 className="fw-semibold mt-3">Resources</h6>
            <ul className="ps-3 fw-medium">
              <li className="ps-2 mb-2">
                {" "}
                What resources set you apart from competition? What are you
                doing to maintain that edge?
              </li>
              <li className="ps-2 mb-2">
                {" "}
                What resources do you need to acquire to catch up with
                competition? How vital are these to your success?
              </li>
              <li className="ps-2 mb-2">
                {" "}
                Within your unique resources, do you have excess capacity to
                apply for new initiatives, or are you maxed out?
              </li>
              <li className="ps-2 mb-2">
                {" "}
                What is the effect of your internal process on your resources?
                Can you acquire or maintain resources quickly or easily, or is
                it usually a slow and tedious process?
              </li>
              <li className="ps-2">
                {" "}
                What is the effect of your profit formula on decisions around
                resource acquisition or maintenance? Do you have to plan
                spending items from the beginning of the year, or you are
                flexible enough to add resource items to your budget as they
                emerge?
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img
              src="../static/img/slide24.png"
              alt="..."
              className="img-fluid mx-auto d-block w-75"
            />
          </div>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>

      {/* Slide Content Starts */}
      <section className="p-3">
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
            Slide Content
          </h1>
          <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
            Instruction: Answer these questions. You may add more slides as
            needed.{" "}
          </p>
          <form className="mx-4 px-2 mb-4">
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                What resources set you apart from competition? What are you
                doing to maintain that edge?
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
                What resources do you need to acquire to catch up with
                competition? How vital are these to your success?
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
                What resources do you need to acquire to catch up with
                competition? How vital are these to your success?
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
                Within your unique resources, do you have excess capacity to
                apply for new initiatives, or are you maxed out?
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
            <div className="my-3">
              <label htmlFor="core-values" className="fw-medium mb-2">
                What is the effect of your internal process on your recourses?
                Can you require or maintain resources quickly or easily, or is
                it usually a slow and tedious process?
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
                What is the effect of your profit formula on decisions around
                resource acquisition or maintenance? Do you have to plan
                spending items from the beginning of the year, or you are
                flexible enough to add resource items to your budget as they
                emerge?
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
      {/* Slide24 Ends */}
    </>
  );
};

export default Slide5;
