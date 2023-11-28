import React, { useEffect, useState } from "react";
import "../../../../assets/customCss/style.css";
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../../utilities/utils";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";

export const PrimaryCustomer = () => {
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
              className="fw-medium fs-18 text-black text-decoration-none"
              to={location.pathname}
            >
              {breadcrumbMenu[0] && capitalizeFirstLetter(breadcrumbMenu[0])}
            </Link>
          </li>
          <li
            class="breadcrumb-item active fs-18 fw-medium text-black"
            aria-current="page"
          >
            Primary Customer
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
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold fs-18">
            Slide Preview
          </h1>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Slide1 />
            </div>
            <div class="carousel-item bg-white">
              <Slide2 />
            </div>
          </div>
          <div className="w-100 justify-content-between d-flex box-btn">
            <button
              class="carousel-control-prev box-pre-btn mx-3 justify-content-start position-relative"
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
  );
};
