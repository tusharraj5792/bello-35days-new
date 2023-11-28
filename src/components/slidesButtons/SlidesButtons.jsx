import React from "react";
import { useAppDispatch } from "../../store/hooks";

function SlidesButtons({ onChange, currentSlide, totalSlides }) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-100 justify-content-between d-flex box-btn mb-3">
      <button
        className="carousel-control-prev box-pre-btn mx-3 justify-content-start position-relative "
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        {currentSlide > 0 ? (
          <span
            className="d-flex align-items-center"
            onClick={() => onChange(currentSlide - 1)}
          >
            <img src="../static/img/left-icon.svg" alt="..." />
            <span className="">Previous</span>
          </span>
        ) : null}
      </button>
      <button
        className="carousel-control-next box-next-btn justify-content-end mx-3 position-relative "
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        {currentSlide < totalSlides ? (
          <span
            className="d-flex align-items-center"
            onClick={() => onChange(currentSlide + 1)}
          >
            <span className="">Next</span>
            <img src="../static/img/next-icon.svg" alt="..." />
          </span>
        ) : null}

        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default SlidesButtons;
