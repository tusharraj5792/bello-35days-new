import React from "react";

export const Slide3 = () => {
  return (
    <>
      {/* Slide22 Starts */}
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">
          Organizational Capabilities Value Map
        </h2>
        <div className="top-line my-3 mx-4"></div>
        <div className="row mx-4">
          <div className="col-7">
            <ul className="ps-2 lh-sm">
              <li className="mb-3 ps-3 fs-18">
                Remember, internal assessment is about understanding what you
                can and cannot do within important parameter.
              </li>
              <li className="mb-3 ps-3 fs-18">
                A good place to start is the provided Organizational
                Capabilities Value Map meant to gauge your ranking across 11 key
                capabilities.
              </li>
              <li className="mb-3 ps-3 fs-18">
                These will inform your decisions later on to determine your
                strategic perspectives, which are broad categories of important
                areas you need to work on to accomplish your current mission.
              </li>
              <li className="mb-3 ps-3 fs-18">
                Simply go to the provided excel file, click the Organizational
                Capabilities Value Map, answer the questions by filling the
                cells from the provided drop-downs, then take note of your areas
                of strengths and weaknesses.
              </li>
              <li className="mb-3 ps-3 fs-18">
                Don't mind the prioritization for now, this is meant to start
                your thinking process within important organizational
                capabilities.
              </li>
              <li className="ps-3 mb-3 fs-18">
                Copy/paste your value map here replacing the dummy map on the
                right.
              </li>
              <li className="ps-3 mb-3 fs-18">
                Identify areas of strengths and weaknesses within the provided
                parameters on the left side of this slide replacing this text.
              </li>
            </ul>
          </div>
          <div className="col-5 slide22-img">
            {/* <img src="../static/img/slide22.png" alt="..." className='ms-auto d-block' /> */}
          </div>
        </div>
        <p className="fs-12 text-muted mx-4 fst-italic">
          Source: Capitalizing on Your Capabilities by Dave Ulrich and Norm
          Smallwood, HBR publications.
        </p>
        <div className="bottom-line mt-3"></div>
      </section>

      {/* Slide Content Starts */}
      <section className="p-3">
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold fs-18">
            Slide Content
          </h1>
          <table
            className="mx-5 my-3 border border-2 slide22-table"
            width={"92%"}
          >
            <thead>
              <tr>
                <th className="ps-6 fs-18">Value Drivers</th>
                <th className="ps-6  fs-18">Description</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="fs-14 ps-6 fw-medium ">
                  <span className="me-2 fs-14">1</span> Talent
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in making important changes rapidly?
                </td>
              </tr>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">2</span> Agility & Speed
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in attracting, monitoring and retaining
                  talent?
                </td>
              </tr>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">3</span> Shared Mindset
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in reflecting positive experiences on our
                  brand?
                </td>
              </tr>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">4</span> Accountability
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in obtaining high performance from staff
                  through accountability?
                </td>
              </tr>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">5</span> Collaboration
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in working efficiency across organizational
                  boundary?
                </td>
              </tr>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">6</span> Learning
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in generating and generalizing ideas with
                  impact?
                </td>
              </tr>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">7</span> Leadership
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in embedding and empowering leaders?
                </td>
              </tr>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">8</span> Customer Connectivity
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in building enduring relationship with target
                  customers?
                </td>
              </tr>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">9</span> Strategic Unit
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in articulating and sharing our strategy?
                </td>
              </tr>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">10</span> Innovation
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in content and process when doing something
                  new?
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td className="fs-14 ps-6 fw-medium">
                  <span className="me-2 fs-14">11</span> Efficiency
                </td>
                <td className="fs-14 ps-6 fw-medium">
                  How good are we in managing expense and optimizing output?{" "}
                </td>
              </tr>
            </tfoot>
          </table>

          <table
            className="mx-5 my-3 border border-2 slide22-table"
            width={"92%"}
          >
            <thead>
              <tr>
                <th className="w-20 text-center fs-18">Your co.</th>
                <th className="w-20 text-center fs-18">Competitor 1</th>
                <th className="w-20 text-center fs-18">Competitor 2</th>
                <th className="w-20 text-center fs-18">Competitor 3</th>
                <th className="w-20 text-center fs-18">Competitor 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
                <td className="pt-4 pb-3"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      {/* Slide Content Ends */}

      {/* Slide22 Ends */}
    </>
  );
};
