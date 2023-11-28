import React from 'react'

const Slide9 = () => {
    return (
        <>
            {/* Slide28 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-lightgrey position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>Determine What We Can & Cannot Do</h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='row mx-2 px-1 align-items-center mb-5'>
                    <div className='col-6'>
                        <h5 className='fw-semibold fst-italic'>a closer look at our resources</h5>
                        <h6 className='fw-semibold mt-3'>Proccess:</h6>
                        <ul className='ps-3 fw-medium'>
                            <li className='ps-2 mb-2'> How does communication flow in your organization?</li>
                            <p className='mb-1'><span><img src="../static/img/black-tick.png" alt="..." className='pb-1 px-3 black-tick' /></span>Top-down good for deliberate strategy.</p>
                            <p className='mb-2'><span><img src="../static/img/black-tick.png" alt="..." className='pb-1 px-3 black-tick' /></span>Bottom-up is vital for emergent strategy.</p>
                            <li className='ps-2 mb-2'>How dispersed is your decision-making process?</li>
                            <p className='mb-1 d-flex'><span><img src="../static/img/black-tick.png" alt="..." className='pb-1 px-3 black-tick' /></span>Centralized provides additional governance and is useful within
                                a deliberate strategy.</p>
                            <p className='mb-2 d-flex'><span><img src="../static/img/black-tick.png" alt="..." className='pb-1 px-3 black-tick' /></span>Decentralized promotes quicker actions and ownership and is
                                helpful within an emergent strategy.</p>
                            <li className='ps-2 mb-2'>How are your resources effected by your process? Do you have adequate people, systems, and time to facilitate your processes?</li>
                            <li className='ps-2 mb-2'>How does your profit formula effect your processes? Do you put prioritized profit formula items (growth, cost, margins) on a fast-track process, or do all items follow similar tracks?</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <img src="../static/img/slide28.png" alt="..." className='img-fluid mx-auto d-block' />
                    </div>
                </div>
                <div className='bottom-line mt-3'></div>
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
                                How does  communication flow in your organization?
                            </label>{" "}
                            <br />
                            <p className='mb-1 fw-medium'><span><img src="../static/img/tick.svg" alt="..." className='pb-1 pe-3' /></span>Top-down good for deliberate strategy.</p>
                            <p className='mb-2 fw-medium'><span><img src="../static/img/tick.svg" alt="..." className='pb-1 pe-3' /></span>Bottom-up is vital for emergent strategy.</p>
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                        <div>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                How dispersed is your decision-making process?
                            </label>{" "}
                            <br />
                            <p className='mb-1 d-flex fw-medium'><span><img src="../static/img/tick.svg" alt="..." className='pb-1 pe-3' /></span>Centralized provides additional governance and is useful within
                                a deliberate strategy.</p>
                            <p className='mb-2 d-flex fw-medium'><span><img src="../static/img/tick.svg" alt="..." className='pb-1 pe-3' /></span>Decentralized promotes quicker actions and ownership and is
                                helpful within an emergent strategy.</p>
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                        <div>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                How are your resources effected by your process? Do you have adequate people, system and time to facilitate your processes?
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
                            How does your profit formula effect your processes? Do you put prioritized profit formula items (growth, cost, margins) on a fast-track process, or do all items follow similar tracks?
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
            {/* Slide28 Ends */}
        </>
    )
}

export default Slide9