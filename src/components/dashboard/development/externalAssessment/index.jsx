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
import Slide8 from "./slides/slide8";
import Slide9 from "./slides/slide9";
import Slide10 from "./slides/slide10";
import Slide11 from "./slides/slide11";
import MainDiv from "../../../../utilities/mainDiv";

export const ExternalAssessment = () => {
  const location = useLocation();
  const [breadcrumbMenu, setBreadcrumbMenu] = useState([]);
  useEffect(() => {
    setBreadcrumbMenu(location.pathname.split("/").filter(Boolean));
  }, []);
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ">
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
            External Assessment
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
              {/* Slide Content Starts */}
              <section className="p-3">
                <div className="border border-1">
                  <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                    Slide Content
                  </h1>
                  <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                    Instructions: Perform external analysis in as many slides as
                    you need by answering the provided questions.
                  </p>
                </div>
              </section>
              {/* Slide Content Ends */}
            </div>
            <div className="carousel-item">
              <Slide3 />
              {/* Slide Content Starts */}
              <section className="p-3">
                <div className="border border-1">
                  <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                    Slide Content
                  </h1>
                  <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                    Instructions: Industry trends are very important. Answer
                    these questions as part of your external assessment.
                  </p>
                </div>
              </section>
              {/* Slide Content Ends */}
            </div>
            <div className="carousel-item">
              <Slide4 />
              {/* Slide Content Starts */}
              <section className="p-3">
                <div className="border border-1 px-5">
                  <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                    Instructions: As part of industry trend analysis, determine
                    your industry level of maturity as it’ll have a high impact
                    on your stratgey development.
                  </p>

                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Emergence</th>
                        <th>Rapid Growth</th>
                        <th>Maturity</th>
                        <th>Decline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Early adaptors of new innovations as key customers
                        </td>
                        <td>
                          Early adaptors influence wider, more conservative
                          group of customers (Follow their lead)
                        </td>
                        <td>Mass market </td>
                        <td>Sophisticated Customers</td>
                      </tr>
                      <tr>
                        <td>Price insensitive customers </td>
                        <td>
                          Fairly high prices and very high margins. Hight
                          marketing costs, but lower as % of sales
                        </td>
                        <td>Falling prices</td>
                        <td>Sophisticated customer</td>
                      </tr>
                      <tr>
                        <td>High price</td>
                        <td>Mass distribution channel opens up</td>
                        <td>Lower margins</td>
                        <td>Low/falling prices margins</td>
                      </tr>
                      <tr>
                        <td>High margin </td>
                        <td>
                          Competitors scrambling to gain presence in emerging
                          distribution channels
                        </td>
                        <td>Market segmentation</td>
                        <td>Industry overcapacity</td>
                      </tr>
                      <tr>
                        <td>High marketing costs; need to educate people</td>
                        <td>
                          Market share battles between pioneers and early
                          followers; early followers often overtake pioneers
                        </td>
                        <td>Expansion of product lines</td>
                        <td>Shift back toward specialized channels</td>
                      </tr>
                      <tr>
                        <td>Specialize distribution channel</td>
                        <td>Many competitors</td>
                        <td>Advertising and service become more important</td>
                        <td>
                          Move back toward shorter production runs; higher costs
                        </td>
                      </tr>
                      <tr>
                        <td>Short production runs; high cost</td>
                        <td>Marketing a more important skill</td>
                        <td>
                          Continued movement to mass distribution channels
                        </td>
                        <td>Fewer competitors</td>
                      </tr>
                      <tr>
                        <td>Early entrants gain quick market share</td>
                        <td>Rapid product improvement</td>
                        <td>
                          Distribution channels pare down number of lines
                          carried
                        </td>
                        <td>Product stagnation</td>
                      </tr>
                      <tr>
                        <td>Few competitors</td>
                        <td></td>
                        <td>Few competitors</td>
                        <td>
                          Can be an ideal time to re-invigorate an industry with
                          a dramatic new innovation
                        </td>
                      </tr>
                      <tr>
                        <td>Many product design no standards</td>
                        <td></td>
                        <td>Dominant players established</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Competitor shake-out</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>
                          Less product differentiation; standardization fewer
                          product changes
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              {/* Slide Content Ends */}
            </div>
            <div className="carousel-item">
              <Slide5 />
              {/* Slide Content Starts */}
              <section className="p-3">
                <div className="border border-1">
                  <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                    Slide Content
                  </h1>
                  <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                    Instructions: This is meant as an illustrative slide. Not
                    all your audience are well versed in strategy as a knowledge
                    domain. This’ll help establish some level of basic strategy
                    knowledge.
                  </p>
                </div>
              </section>
              {/* Slide Content Ends */}
            </div>
            <div className="carousel-item">
              <Slide6 />
              {/* Slide Content Starts */}
              <section className="p-3">
                <div className="border border-1">
                  <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                    Slide Content
                  </h1>
                  <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                    Instructions: This is meant as an illustrative slide. Not
                    all your audience are well versed in strategy as a knowledge
                    domain. This’ll help establish some level of basic strategy
                    knowledge.
                  </p>
                </div>
              </section>
              {/* Slide Content Ends */}
            </div>
            <div className="carousel-item">
              <Slide7 />
              {/* Slide Content Starts */}
              <section className="p-3">
                <div className="border border-1">
                  <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                    Slide Content
                  </h1>
                  <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                    Instructions: This is meant as an illustrative slide. Not
                    all your audience are well versed in strategy as a knowledge
                    domain. This’ll help establish some level of basic strategy
                    knowledge.
                  </p>
                </div>
              </section>
              {/* Slide Content Ends */}
            </div>
            <div className="carousel-item">
              <Slide8 />
              {/* Slide Content Starts */}
              <section className="p-3">
                <div className="border border-1">
                  <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                    Slide Content
                  </h1>
                  <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                    Instructions: This is meant as an illustrative slide. Not
                    all your audience are well versed in strategy as a knowledge
                    domain. This’ll help establish some level of basic strategy
                    knowledge.
                  </p>
                </div>
              </section>
              {/* Slide Content Ends */}
            </div>
            <div className="carousel-item">
              <Slide9 />
              {/* Slide Content Starts */}
              <section className="p-3">
                <div className="border border-1">
                  <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                    Slide Content
                  </h1>
                  <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                    Instructions: This is meant as an illustrative slide. Not
                    all your audience are well versed in strategy as a knowledge
                    domain. This’ll help establish some level of basic strategy
                    knowledge.
                  </p>
                </div>
              </section>
              {/* Slide Content Ends */}
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
              className="carousel-control-prev box-pre-btn mx-3 justify-content-start position-relative"
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
