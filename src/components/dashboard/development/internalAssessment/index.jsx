import React, { useEffect, useState } from "react";
import "../../../../assets/customCss/style.css";
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../../utilities/utils";
import MainDiv from "../../../../utilities/mainDiv";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import { Slide3 } from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide5 from "./slides/slide5";
import Slide6 from "./slides/slide6";
import Slide7 from "./slides/slide7";
import Slide8 from "./slides/slide8";
import Slide9 from "./slides/slide9";
import Slide10 from "./slides/slide10";
import Slide11 from "./slides/slide11";
import Slide12 from "./slides/slide12";
import Slide13 from "./slides/slide13";
import Slide14 from "./slides/slide14";
import Slide15 from "./slides/slide15";
import Slide16 from "./slides/slide16";
import Slide17 from "./slides/slide17";
import Slide18 from "./slides/slide18";
import Slide19 from "./slides/slide19";
import Slide20 from "./slides/slide20";
import Slide21 from "./slides/slide21";
import Slide22 from "./slides/slide22";
import Slide23 from "./slides/slide23";

export const InternalAssessment = () => {
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
            Internal Assessment
          </li>
        </ol>
      </nav>

      <MainDiv>
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold fs-18">
            Slide Preview
          </h1>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Slide1 />
            </div>
            <div className="carousel-item">
              <Slide2 />
            </div>
            <div className="carousel-item">
              <Slide3 />
            </div>
            <div className="carousel-item bg-white">
              <Slide4 />
            </div>
            <div className="carousel-item bg-white">
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
            <div className="carousel-item bg-white">
              <Slide9 />
            </div>
            <div className="carousel-item bg-white">
              <Slide10 />
            </div>
            <div className="carousel-item bg-white">
              <Slide11 />
            </div>
            <div className="carousel-item">
              <Slide12 />
            </div>
            <div className="carousel-item">
              <Slide13 />
            </div>
            <div class="carousel-item">
              <Slide14 />
            </div>
            <div class="carousel-item">
              <Slide15 />
            </div>
            <div class="carousel-item">
              <Slide16 />
            </div>
            <div class="carousel-item">
              <Slide17 />
            </div>
            <div class="carousel-item">
              <Slide18 />
            </div>
            <div class="carousel-item">
              <Slide19 />
            </div>
            <div class="carousel-item">
              <Slide20 />
            </div>
            <div class="carousel-item bg-white">
              <Slide21 />
            </div>
            <div class="carousel-item">
              <Slide22 />
            </div>
            <div class="carousel-item">
              <Slide23 />
            </div>
          </div>
          <div className="w-100 justify-content-between d-flex box-btn">
            <button
              className="carousel-control-prev box-pre-btn mx-3 justify-content-start position-relative "
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="">Previous</span>
            </button>
            <button
              className="carousel-control-next box-next-btn justify-content-end mx-3 position-relative "
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span className="">Next</span>
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
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
