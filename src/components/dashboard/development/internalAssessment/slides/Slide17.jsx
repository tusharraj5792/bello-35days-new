import React from 'react'

const Slide17 = () => {
    return (
        <>
            {/* Slide 36 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>McKinsey 7S Model Template
                </h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='row g-4 mx-5 mt-4 my-2align-items-stretch'>
                    <div className="col-4">
                        <div>
                            <h5 className='fw-semibold text-end fs-18'>Structure</h5>
                            <p className='text-end text-muted lh-sm'>This is the way your company is organized, including hierarchy, reporting lines, authority matrix, and how work is divided and coordinated.
                            </p>
                        </div>
                        <div className='my-4'>
                            <h5 className='fw-semibold text-end fs-18'>Strategy
                            </h5>
                            <p className='text-end text-muted lh-sm'>This refers to the organization’s plan to accomplish the current mission. It includes the direction you want to pursue, markets you want to serve, primary customers to focus on, and the competitive advantage you want to build.

                            </p>
                        </div>
                        <div>
                            <h5 className='fw-semibold text-end fs-18'>Skills
                            </h5>
                            <p className='text-end text-muted lh-sm'>This is about the capabilities and competencies of your employees, including technical skills, problem-solving abilities, creativity, and innovation.

                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="../static/img/slide36.png" alt="..." className='img-fluid' />
                    </div>
                    <div className="col-4">
                        <div>
                            <h5 className='fw-semibold  fs-18'>Systems
                            </h5>
                            <p className='text-muted lh-sm'>This is about your processes, policies, procedures used to perform work including your IT systems, communication systems, and performance measurement systems.
                            </p>
                        </div>
                        <div className='my-4'>
                            <h5 className='fw-semibold fs-18'>Style
                            </h5>
                            <p className='text-muted lh-sm'>
                                This is about leadership style and culture of the organization, including how decisions are made, how employees are motivated and rewarded, and how communication flows.
                            </p>
                        </div>
                        <div>
                            <h5 className='fw-semibold  fs-18'>Staff
                            </h5>
                            <p className='text-muted lh-sm'>This is about the people including their skills, experience, knowledge, and their way of working.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bottom-line mt-5'></div>
            </section>

            {/* Slide Content Starts */}
            <section className="p-3">
                <div className="border border-1">
                    <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                        Slide Content
                    </h1>
                    <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                        Instructions: Filling out McKinsey 7S model is very useful to sum up your internal assessment cross-checking 7 main parameters against industry best practice or against what is needed to accomplish the current mission. These elements are interdependent and must be aligned to achieve organizational effectiveness. Delete this instruction box once done.{" "}
                    </p>

                    <form className="mx-5">
                        <div>
                            <label htmlFor="structure" className="fw-medium mb-2">
                                Structure
                            </label>{" "}
                            <br />
                            <textarea
                                name="structure"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="structure"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>

                        <div>
                            <label htmlFor="systems" className="fw-medium mb-2">
                            Systems 
                            </label>{" "}
                            <br />
                            <textarea
                                name="systems"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="systems"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>

                        <div>
                            <label htmlFor="Strategy" className="fw-medium mb-2">
                            Strategy
                            </label>{" "}
                            <br />
                            <textarea
                                name="Strategy"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="Strategy"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>

                        <div>
                            <label htmlFor="Style" className="fw-medium mb-2">
                                Style
                            </label>{" "}
                            <br />
                            <textarea
                                name="Style"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="Style"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>

                        <div>
                            <label htmlFor="Skills" className="fw-medium mb-2">
                                Skills
                            </label>{" "}
                            <br />
                            <textarea
                                name="Skills"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="Skills"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>

                        <div>
                            <label htmlFor="Staff" className="fw-medium mb-2">
                                Staff
                            </label>{" "}
                            <br />
                            <textarea
                                name="Staff"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="Staff"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                    </form>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide 36 Ends */}
        </>
    )
}

export default Slide17