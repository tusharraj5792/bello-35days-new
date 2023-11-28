import React from "react";

const Slide1 = () => {
  return (
    <>
      <div className=" ">
        <div className="m-5">
          <div className="box position-relative overflow-hidden">
            <div className="box-img position-absolute"></div>
            <div className="position-absolute color-class">
              <div className="color-black"></div>
              <div className="color-blue"></div>
            </div>
            <div className="box-text position-absolute">
              <p className="text-center">
                <img src="../static/img/logo.svg" alt="" />
              </p>
              <h2>
                Value-baesd Stratergy <br/>
                202x-202x
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="p-3">
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
            Slide Content
          </h1>
          ​
          <form className="mx-5">
            <div className="row py-3">
              <div className="col-3">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Logo
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
              </div>
              <div className="col-3">
                <label htmlFor="exampleColorInput" className="form-label">
                  Color
                </label>
                <div className="d-flex align-items-center">
                  <input
                    type="color"
                    className="form-control form-control-color"
                    id="exampleColorInput"
                    // value="#005dff"
                    title="Choose your color"
                  />
                  <div className="mx-2">or</div>
                  <input
                    type="text"
                    className="form-control "
                    id="exampleColorInput"
                    placeholder="Enter Color Code"
                    title="Choose your color"
                  />
                </div>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-12">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write here the title of the presentation"
                  />
                </div>
              </div>
            </div>
            <div className="row pb-3">
              <div className="mb-3 ">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Enter the year
                </label>
                <div className="col-3 d-flex ">
                  <input
                    type="date"
                    className="form-control me-2"
                    placeholder="Write here the title of the presentation"
                  />
                  <input
                    type="date"
                    className="form-control ms-2"
                    placeholder="Write here the title of the presentation"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Slide1;
