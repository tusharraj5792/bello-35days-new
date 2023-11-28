import React, { useState } from "react";
import SlidesButtons from "../../../../slidesButtons/slidesButtons";

const Slide5 = ({ onChange, currentSlide, totalSlides }) => {
  const [question1, setquestion1] = useState("");
  const [question2, setquestion2] = useState("");
  const [question3, setquestion3] = useState("");

  return (
    <>
      {/* Slide 16 Starts */}
      {/* Slide preview Starts */}
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">
          Company X Belief System
        </h2>
        <div className="top-line my-3 mx-4"></div>
        <div className="mt-4 pt-2 px-4">
          <h4 className="fs-20 secondary-bg text-white py-2 text-center rounded-3 fw-semibold">
            Belief System Elements
          </h4>
          <div className="d-flex gap-2 mt-3 mb-5">
            <div className="belief-box rounded-4">
              <h5 className="primary-bg text-white py-3 text-uppercase fs-20 mb-4 text-center rounded-top-4 fw-semibold">
                core values & belief
              </h5>
              <div className="w-83 mx-auto">
                <p className="fs-18">
                  Mention your core values and prioritize them based on
                  importance to stakeholders.
                </p>
              </div>
            </div>
            <img
              src="../static/img/right-arrow.svg"
              alt="..."
              className="img-fluid"
            />
            <div className="belief-box rounded-4">
              <h5 className="primary-bg text-white fw-semibold py-3 text-uppercase fs-20 mb-4 text-center rounded-top-4">
                Vision
              </h5>
              <div className="w-83 mx-auto">
                <h6 className="fw-semibold fs-18 mb-3 pt-1">
                  Vision Statement
                </h6>
                <p className="fs-18">
                  State your company vision. The fundamental reason for the
                  organization's existence.
                </p>
                <p className="fs-18">Grow out of core values.</p>
                <p className="fs-18">
                  Like a guiding star always worked towards, but never fully
                  attained.
                </p>
                <p className="fs-18">
                  Should serve to guide the company for 100 years.
                </p>
              </div>
            </div>
            <img
              src="../static/img/right-arrow.svg"
              alt="..."
              className="img-fluid"
            />
            <div className="belief-box rounded-4 pb-4">
              <h5 className="primary-bg text-white fw-semibold py-3 text-uppercase fs-20 mb-4 text-center rounded-top-4">
                Mission
              </h5>
              <div className="w-83 mx-auto">
                <p className="fs-18">
                  State your company mission. A bold, compelling, audacious
                  goal.
                </p>
                <p className="fs-18">Set your finish line and time frame.</p>
                <h6 className="fs-18 fw-semibold mt-4">
                  What type of a mission?
                </h6>
                <ol className="mb-4 ps-3">
                  <li className="ps-3">Targeting</li>
                  <li className="my-2 ps-3">Common Enemy</li>
                  <li className="my-2 ps-3">Role Model</li>
                  <li className="ps-3">Internal Transformation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-line mt-3"></div>
      </section>
      <SlidesButtons
        onChange={onChange}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
      {/* Slide preview Ends */}
      {/* Slide Content Starts */}
      <section className="p-3">
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
            Slide Content
          </h1>
          <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
            Instruction: Fill out the blanks to explain your company belief
            system.{" "}
          </p>
          <form className="mx-5">
            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Core Values & Beliefs
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                placeholder="Write the answer here."
                onChange={(e) => setquestion1(e.target.value)}
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0 text-muted">{`${
                2500 - question1.length
              } Characters left`}</p>
            </div>

            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Vision
              </label>{" "}
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                onChange={(e) => setquestion2(e.target.value)}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-0 text-muted">{`${
                2500 - question2.length
              } Characters left`}</p>
            </div>

            <div>
              <label htmlFor="core-values" className="fw-medium mb-2">
                Mission
              </label>
              <br />
              <textarea
                name="core-values"
                className="textarea-input rounded-2 p-3 fs-14"
                id="core-values"
                maxLength={2500}
                onChange={(e) => setquestion3(e.target.value)}
                placeholder="Write the answer here."
              ></textarea>
              <p className="fs-14 text-end -mt-5 mb-4 text-muted">{`${
                2500 - question3.length
              } Characters left`}</p>
            </div>
          </form>
        </div>
      </section>
      {/* Slide Content Ends */}

      {/* Slide17 Starts */}
      {/* <section className="mx-3">
        <div className="tips-section p-4 rounded-3">
          <h5 className="fs-18 fw-semibold">Tips & Tricks</h5>
          <ol className="ps-4">
            <li>
              {" "}
              Your belief system (values, vision, mission) is your starting
              point.
            </li>
            <li>
              Core values are meant to guide your decision-making process when
              faced with a difficult situation.
            </li>
            <li>
              Vision is there to provide direction but never fully achieved.
            </li>
            <li>
              Missions are meant to be accomplished. Once accomplished, a new
              one is set.
            </li>
            <li>
              Strategy development starts after you set your belief system.
              Strategy is the pan through which you’ll accomplish your current
              mission. You need to determine your mission first then start
              developing strategy.
            </li>
          </ol>
        </div>
        <div className="note-bg my-5 p-4">
          <h6 className="fw-medium">Note</h6>
          <p>
            This is the content of tips and tricks slide. Client can now verify
            in the designs where to add this section.
          </p>
        </div>
      </section> */}
      {/* Slide17 Ends */}

      {/* Slide 16 Ends */}
    </>
  );
};

export default Slide5;
