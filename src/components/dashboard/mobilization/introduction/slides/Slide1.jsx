import React, { useState } from "react";

const Slide1 = () => {
  const [title, setTitle] = useState("Value-baesd Stratergy");
  const [startYear, setStartYear] = useState("202x");
  const [endYear, setEndYear] = useState("202x");
  const [textColor, setTextColor] = useState("#005dff");
  const [logoImage, setLogoImage] = useState("../static/img/logo.svg");
  const handleFile = (e) => {
    setLogoImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className=" ">
        <div className="m-5">
          <div className="box position-relative overflow-hidden">
            <div className="box-img position-absolute"></div>
            <div className="position-absolute color-class">
              <div className="color-black"></div>
              <div
                className="color-blue"
                // style={{ backgroundColor: textColor }}
              ></div>
            </div>
            <div className="box-text position-absolute">
              <p className="text-center">
                <img src={logoImage} alt="" />
              </p>
              <h2 style={{ color: textColor }}>
                {title} <br />
                {startYear}-{endYear}
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
                  <input
                    className="form-control"
                    type="file"
                    onChange={handleFile}
                  />
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
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    title="Choose your color"
                  />
                  <div className="mx-2">or</div>
                  <input
                    type="text"
                    className="form-control "
                    id="exampleColorInput"
                    placeholder="Enter Color Code"
                    title="Choose your color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value.split("-")[0])}
                  />
                  <input
                    type="date"
                    className="form-control ms-2"
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value.split("-")[0])}
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
