import React, { useEffect, useState } from "react";
import "../../../../assets/customCss/style.css";
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../../utilities/utils";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide5 from "./slides/slide5";
import Slide6 from "./slides/slide6";
import Slide7 from "./slides/slide7";
import SlidesButtons from "../../../slidesButtons/slidesButtons";
import MainDiv from "../../../../utilities/mainDiv";

const ConfirmMission = () => {
  const location = useLocation();
  const [breadcrumbMenu, setBreadcrumbMenu] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    setBreadcrumbMenu(location.pathname.split("/").filter(Boolean));
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  // useEffect(() => {
  //   console.log(currentSlide);
  // }, [currentSlide]);
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
            Confirm Mission
          </li>
        </ol>
      </nav>

      <MainDiv>
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold fs-18">
            Slide Preview
          </h1>
          <div className="carousel-inner" id="parentId">
            <div
              className={`carousel-item  ${
                currentSlide === 0 ? "active" : ""
              } `}
            >
              <Slide1 />
            </div>
            <div
              className={`carousel-item ${currentSlide === 1 ? "active" : ""} `}
            >
              <Slide2 />
            </div>
            <div
              className={`carousel-item ${currentSlide === 2 ? "active" : ""} `}
            >
              <Slide3 />
            </div>
            <div
              className={`carousel-item ${currentSlide === 3 ? "active" : ""} `}
            >
              <Slide4 />
            </div>
            <div
              className={`carousel-item ${currentSlide === 4 ? "active" : ""} `}
            >
              <Slide5
                onChange={handleSlideChange}
                currentSlide={currentSlide}
                totalSlides={7}
              />
            </div>
            <div
              className={`carousel-item ${currentSlide === 5 ? "active" : ""} `}
            >
              <Slide6 />
            </div>
            <div
              className={`carousel-item ${currentSlide === 6 ? "active" : ""} `}
            >
              <Slide7 />
            </div>
          </div>

          {currentSlide !== 4 && (
            <SlidesButtons
              onChange={handleSlideChange}
              currentSlide={currentSlide}
              totalSlides={7}
            />
          )}
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

export default ConfirmMission;
