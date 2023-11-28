import React from "react";

const Slide8 = () => {
  return (
    <>
      {/* Slide27 Starts */}
      <section className="w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative">
        <h2 className="slide-heading fw-semibold px-4">VRIO Analysis</h2>
        <div className="top-line my-3 mx-4"></div>
        <table
          className="mx-4 my-3 border border-2 slide22-table"
          width={"92%"}
        >
          <thead>
            <tr className="primary-bg text-white lh-sm">
              <th className="text-center fs-14 w-12">Resources</th>
              <th className="text-center fs-14 w-12 px-1">
                What value does it deliver
              </th>
              <th className="text-center fs-14 w-12">Is it rare?</th>
              <th className="text-center fs-14 w-12 px-1">
                Is it hard to imitate by others?
              </th>
              <th className="text-center fs-14 w-12 px-1">
                Are you organized to take advantage of this resource?
              </th>
              <th className="text-center fs-14 w-12 px-1">
                Who is the internal owner of this resource?
              </th>
              <th className="text-center fs-14">
                What's your plan to obtain, maintain, or enhance this resource?
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="ps-2 fw-semibold secondary-bg text-white py-4">
                People
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="ps-2 fw-semibold secondary-bg text-white lh-sm">
                Infrastructure (facilities & equipment)
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="ps-2 fw-semibold secondary-bg text-white py-3">
                Internal Process
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="ps-2 fw-semibold secondary-bg text-white py-4">
                Products
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="ps-2 fw-semibold secondary-bg text-white py-4">
                Technology
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="ps-2 fw-semibold secondary-bg text-white py-4">
                Patents
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td className="ps-2 fw-semibold secondary-bg text-white py-4">
                Culture
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <div className="bottom-line mt-3"></div>
      </section>

      {/* Slide Content Starts */}
      <section className="p-3">
        <div className="border border-1">
          <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
            Slide Content
          </h1>
          <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
            Instructions: fill these blanks. Some may be left empty.{" "}
          </p>

          {/* Number Bar */}
          <ul className="nav nav-tabs border-0 mx-5" id="myTab" role="tablist">
            <li className="nav-item after-line" role="presentation">
              <button
                className="nav-link active fs-20"
                id="first-tab"
                data-bs-toggle="tab"
                data-bs-target="#first-tab-pane"
                type="button"
                role="tab"
                aria-controls="first-tab-pane"
                aria-selected="true"
              >
                1
              </button>
            </li>
            <li className="nav-item after-line" role="presentation">
              <button
                className="nav-link fs-20"
                id="second-tab"
                data-bs-toggle="tab"
                data-bs-target="#second-tab-pane"
                type="button"
                role="tab"
                aria-controls="second-tab-pane"
                aria-selected="false"
              >
                2
              </button>
            </li>
            <li className="nav-item after-line" role="presentation">
              <button
                className="nav-link fs-20"
                id="third-tab"
                data-bs-toggle="tab"
                data-bs-target="#third-tab-pane"
                type="button"
                role="tab"
                aria-controls="third-tab-pane"
                aria-selected="false"
              >
                3
              </button>
            </li>
            <li className="nav-item after-line" role="presentation">
              <button
                className="nav-link fs-20"
                id="four-tab"
                data-bs-toggle="tab"
                data-bs-target="#four-tab-pane"
                type="button"
                role="tab"
                aria-controls="four-tab-pane"
                aria-selected="false"
              >
                4
              </button>
            </li>
            <li className="nav-item after-line" role="presentation">
              <button
                className="nav-link fs-20"
                id="fifth-tab"
                data-bs-toggle="tab"
                data-bs-target="#fifth-tab-pane"
                type="button"
                role="tab"
                aria-controls="fifth-tab-pane"
                aria-selected="false"
              >
                5
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fs-20"
                id="sixth-tab"
                data-bs-toggle="tab"
                data-bs-target="#sixth-tab-pane"
                type="button"
                role="tab"
                aria-controls="sixth-tab-pane"
                aria-selected="false"
              >
                6
              </button>
            </li>
          </ul>
          <div className="tab-content mx-4" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="first-tab-pane"
              role="tabpanel"
              aria-labelledby="first-tab"
              tabindex="0"
            >
              <table
                className="mx-3 my-4 border border-2 slide22-table"
                width={"100%"}
              >
                <thead>
                  <tr>
                    <th className="ps-5 w-37">Resources</th>
                    <th className="ps-5">What values does it deliver?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">People</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">
                      Infrastructure (facilities & equipment)
                    </td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Internal Process</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Products</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Technology</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Patents</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Culture</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="second-tab-pane"
              role="tabpanel"
              aria-labelledby="second-tab"
              tabindex="0"
            >
              <table
                className="mx-3 my-4 border border-2 slide22-table"
                width={"100%"}
              >
                <thead>
                  <tr>
                    <th className="ps-5 w-37">Resources</th>
                    <th className="ps-5">Is it rare?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">People</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">
                      Infrastructure (facilities & equipment)
                    </td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Internal Process</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Products</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Technology</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Patents</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Culture</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="third-tab-pane"
              role="tabpanel"
              aria-labelledby="third-tab"
              tabindex="0"
            >
              <table
                className="mx-3 my-4 border border-2 slide22-table"
                width={"100%"}
              >
                <thead>
                  <tr>
                    <th className="ps-5 w-37">Resources</th>
                    <th className="ps-5">Is it hard to imitate by others?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">People</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">
                      Infrastructure (facilities & equipment)
                    </td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Internal Process</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Products</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Technology</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Patents</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Culture</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="four-tab-pane"
              role="tabpanel"
              aria-labelledby="four-tab"
              tabindex="0"
            >
              <table
                className="mx-3 my-4 border border-2 slide22-table"
                width={"100%"}
              >
                <thead>
                  <tr>
                    <th className="ps-5 w-37">Resources</th>
                    <th className="ps-5">
                      Are you organized to take advantage of this resource?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">People</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">
                      Infrastructure (facilities & equipment)
                    </td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Internal Process</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Products</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Technology</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Patents</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Culture</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="fifth-tab-pane"
              role="tabpanel"
              aria-labelledby="fifth-tab"
              tabindex="0"
            >
              <table
                className="mx-3 my-4 border border-2 slide22-table"
                width={"100%"}
              >
                <thead>
                  <tr>
                    <th className="ps-5 w-37">Resources</th>
                    <th className="ps-5">
                      Who is internal owner of this resource?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">People</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">
                      Infrastructure (facilities & equipment)
                    </td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Internal Process</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Products</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Technology</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Patents</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Culture</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="sixth-tab-pane"
              role="tabpanel"
              aria-labelledby="sixth-tab"
              tabindex="0"
            >
              <table
                className="mx-3 my-4 border border-2 slide22-table"
                width={"100%"}
              >
                <thead>
                  <tr>
                    <th className="ps-5 w-37">Resources</th>
                    <th className="ps-5">
                      What’s your plan to obtain, maintain, or enhance this
                      resource?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">People</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">
                      Infrastructure (facilities & equipment)
                    </td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Internal Process</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Products</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Technology</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Patents</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="ps-5 fs-14 fw-medium">Culture</td>
                    <td className="ps-5 fs-14 fw-medium tabs-answers">
                      Write answer here
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* Slide Content Ends */}

      {/* Slide27 Starts */}
    </>
  );
};

export default Slide8;
