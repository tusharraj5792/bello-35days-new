import React from 'react'

const Slide10 = () => {
    return (
        <>
            {/* Slide29 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-lightgrey position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>Determine What We Can & Cannot Do</h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='row mx-2 px-1 align-items-center mb-5'>
                    <div className='col-6'>
                        <h5 className='fw-semibold fst-italic'>a closer look at our resources</h5>
                        <h6 className='fw-semibold mt-3'>Profit formula:</h6>
                        <ul className='ps-3 fw-medium'>
                            <li className='ps-2 mb-2'> What are you prioritizing within your profit formula? What is more
                                important to your organization?</li>
                            <p className='mb-1'><span><img src="../static/img/black-tick.png" alt="..." className='pb-1 px-3 black-tick' /></span>Growth in sales or market share.</p>
                            <p className='mb-1'><span><img src="../static/img/black-tick.png" alt="..." className='pb-1 px-3 black-tick' /></span>Reduction in cost.</p>
                            <p className='mb-2'><span><img src="../static/img/black-tick.png" alt="..." className='pb-1 px-3 black-tick' /></span>Expanding your margins.</p>
                            <li className='ps-2 mb-2'>How tolerant are you to deprioritized profit formula items? What do you usually do when you are focused on expanding profit margins, and you are presented with a future growth opportunity promising to yield returns five years out?</li>
                            <li className='ps-2 mb-2'>How is your profit formula effected by your processes? Are your processes optimized to achieve your prioritized profit formula goal?</li>
                            <li className='ps-2 mb-2'>Are your resources adequate to achieve your profit formula goal? If you are focused on growing sales and market share, do you have the needed resources to achieve that?</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <img src="../static/img/slide29.png" alt="..." className='img-fluid mx-auto d-block' />
                    </div>
                </div>
                <div className='bottom-line'></div>
            </section>

            {/* Slide Content Starts */}
            <section className="p-3">
                <div className="border border-1">
                    <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                        Slide Content
                    </h1>
                    <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                        Instructions: Answer these questions. You may add more slides as needed.{" "}
                    </p>
                    <form className="mx-4 px-2 mb-4">
                        <div>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                What are you prioritizing within your profit formula? What is more important to your organization?
                            </label>{" "}
                            <br />
                            <p className='mb-1 fw-medium'><span><img src="../static/img/tick.svg" alt="..." className='pb-1 pe-3' /></span>Growth in sales or market share.</p>
                            <p className='mb-1 fw-medium'><span><img src="../static/img/tick.svg" alt="..." className='pb-1 pe-3' /></span>Reduction in cost.</p>
                            <p className='mb-2 fw-medium'><span><img src="../static/img/tick.svg" alt="..." className='pb-1 pe-3' /></span>Expanding your margins.</p>
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                        <div className='my-3'>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                How tolerant are you to deprioritized profit formula items? What do you usually do when you are focused on expanding profit
                                margins, and you are presented with a future growth opportunity promising to yield returns five years out?
                            </label>{" "}
                            <br />
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                        <div className='my-3'>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                How is your profit formula effected by your processes? Are your processes optimized to achieve your prioritized profit formula
                                goal?
                            </label>{" "}
                            <br />
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                        <div className='my-3'>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                Are your resources adequate to achieve your profit formula goal? If you are focused on growing sales and market share, do you
                                have the needed resources to achieve that?
                            </label>{" "}
                            <br />
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                    </form>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide29 Ends */}
        </>
    )
}

export default Slide10