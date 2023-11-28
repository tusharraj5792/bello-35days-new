import React, { useEffect, useState } from "react";
import "../../../../assets/customCss/style.css";
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../../utilities/utils";
import Slide1 from "../executionandMonititoring/slides/slide1";
import Slide2 from "../executionandMonititoring/slides/slide2";
import Slide3 from "../executionandMonititoring/slides/slide3";



const Execution = () => {
  const location = useLocation();
  const [breadcrumbMenu, setBreadcrumbMenu] = useState([]);
  useEffect(() => {
    setBreadcrumbMenu(location.pathname.split("/").filter(Boolean));
  }, []);
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item ">
            <Link
              className="fw-bolder text-black text-decoration-none"
              to={location.pathname}
            >
              {breadcrumbMenu[0] && capitalizeFirstLetter(breadcrumbMenu[0])}
            </Link>
          </li>
          <li
            class="breadcrumb-item active fw-bolder text-black"
            aria-current="page"
          >
            ExecutionandMonititoring
          </li>
        </ol>
      </nav>

      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
            Slide Preview
          </h1>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Slide1/>
              
            </div>
            <div class="carousel-item">
              <Slide2/>
              
            </div>
            <div class="carousel-item">
              <Slide3/>
               {/* Slide Content Starts */}
               <section className="p-3">
                <div className="border border-1">
                  <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                    Slide Content
                  </h1>
                  <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                  Instructions: You should have all 4P’s covered. Decide on what you’ll use to determine performance within each of the 4P’s.






















                  
                  </p>
                </div>
              </section>
              {/* Slide Content Ends */}
            </div>
            {/* <div class="carousel-item">
              <Slide3 />
            </div>
            <div class="carousel-item">
              <Slide4/>
            </div>
            <div class="carousel-item">
              <Slide5/>
            </div>
            <div class="carousel-item">
              <Slide6/>
            </div>
            <div class="carousel-item">
              <Slide7/>
            </div>
            <div class="carousel-item">
              <Slide8/>
            </div>
            <div class="carousel-item">
              <Slide9/>
            </div>
            <div class="carousel-item">
              <Slide10/>
            </div> */}
          </div>
          <div className="w-100 justify-content-between d-flex box-btn">
            <button
              class="carousel-control-prev box-pre-btn mx-3 justify-content-start position-relative "
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="">Previous</span>
            </button>
            <button
              class="carousel-control-next box-next-btn justify-content-end mx-3 position-relative "
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span class="">Next</span>
              <span
                class="carousel-control-next-icon"
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
      </div>
    </>
  )
}

export default Execution