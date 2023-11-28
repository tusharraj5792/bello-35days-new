import React, { useEffect, useState } from "react";
import "../../../../assets/customCss/style.css";
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../../utilities/utils";

import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import { Slide4 } from "./slides/slide4";
import Slide5 from "./slides/slide5";
import Slide6 from "./slides/slide6";
import Slide7 from "./slides/slide7";
import Slide8 from "./slides/slide8";
import Slide9 from "./slides/slide9";
import Slide10 from "./slides/slide10";
import Slide11 from "./slides/slide11";
import MainDiv from "../../../../utilities/mainDiv";
import Slide1 from "./slides/Slide1";

const Introduction = () => {
  const location = useLocation();
  const [breadcrumbMenu, setBreadcrumbMenu] = useState([]);
  useEffect(() => {
    setBreadcrumbMenu(location.pathname.split("/").filter(Boolean));
  }, []);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ">
            <Link
              className="fw-medium fs-18 text-black text-decoration-none"
              to={location.pathname}
            >
              {breadcrumbMenu[0] && capitalizeFirstLetter(breadcrumbMenu[0])}
            </Link>
          </li>
          <li
            className="breadcrumb-item active fw-medium fs-18 text-black"
            aria-current="page"
          >
            Introduction
          </li>
        </ol>
      </nav>
      <MainDiv>
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 fs-18 fw-semibold">Slide Preview</h1>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <Slide1 />
            </div>
            <div className="carousel-item">
              <Slide2 />
            </div>
            <div className="carousel-item">
              <Slide3 />
            </div>
            <div className="carousel-item">
              <Slide4 />
            </div>
            <div className="carousel-item">
              <Slide5 />
            </div>
            <div className="carousel-item">
              <Slide6 />
            </div>
            <div className="carousel-item">
              <Slide7 />
            </div>
            <div className="carousel-item">
              <Slide8 />
            </div>
            <div className="carousel-item">
              <Slide9 />
            </div>
            <div className="carousel-item">
              <Slide10 />
            </div>
            <div className="carousel-item">
              <Slide11 />
            </div>
          </div>
          <div className="w-100 justify-content-between d-flex box-btn mb-3">
            <button
              className="carousel-control-prev box-pre-btn mx-3 justify-content-start position-relative "
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span className="d-flex align-items-center">
                {" "}
                <img src="../static/img/left-icon.svg" alt="..." />
                Previous
              </span>
            </button>
            <button
              className="carousel-control-next box-next-btn justify-content-end mx-3 position-relative"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span className="d-flex align-items-center">
                Next
                <img src="../static/img/next-icon.svg" alt="..." />
              </span>
            </button>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-between mt-3">
          <button className="p-2 btn btn-primary">
            Save and come back later
          </button>
          <button className="p-2 btn btn-primary">Save and Continue</button>
        </div>
      </MainDiv>
    </>
  );
};

export default Introduction;
