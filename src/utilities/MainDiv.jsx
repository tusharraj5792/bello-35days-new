import React from "react";

function MainDiv({ children }) {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      {children}
    </div>
  );
}

export default MainDiv;
