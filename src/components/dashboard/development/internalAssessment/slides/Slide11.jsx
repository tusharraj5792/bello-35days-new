import React from 'react';

const Slide11 = () => {
    return (
        <>

            {/* Slide 30 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-lightgrey position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>Company Execution Capability Gauge</h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='mx-4'>
                    <h5 className='fw-semibold fst-italic'>Are you more predictive (waterfall) or agile?</h5>
                    <h6 className='mt-3'>This gauge is meant to help examine your capabilities around six main elements:</h6>
                    <ol className='ps-3'>
                        <li className='mb-2 ps-4'>Resource availability. Agile teams are used to doing more with less and less, while more predictive teams are used to stacking up before starting.</li>
                        <li className='mb-2 ps-4'>Process flexibility.</li>
                        <li className='mb-2 ps-4'>Profit formula flexibility.</li>
                        <li className='mb-2 ps-4'>Innovation capabilities.</li>
                        <li className='mb-2 ps-4'>Company planning process.</li>
                        <li className='mb-2 ps-4'>Applying tactical alterations.</li>
                    </ol>

                    <div className='border border-2 border-black p-1 my-5'>
                        <h6 className='fw-semibold'>Company Execution Capability Gauge</h6>
                        <p className='fw-medium mb-0'>determine what you can and cannot do</p>
                        <div className="row gy-3 mt-2">
                            <div className='col-xl-7'>
                                <table className='mx-auto my-2 slide73-table'>
                                    <tbody style={{ lineHeight: "1.35" }}>
                                        <tr>
                                            <th className='fw-medium fst-italic'>answer the following questions on a 0-4 scale:</th>
                                            <th className='text-center w-25'>select answers</th>
                                        </tr>
                                        <tr>
                                            <td className='fw-medium px-3'>1- do have the resources you need to develop & introduce the product to market?</td>
                                            <td className='text-center fw-medium border border-2 border-black'>
                                                0
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fw-medium px-3'>2- how easy is it to change your processes to faciliate development of proposed product?</td>
                                            <td className='text-center fw-medium border border-2 border-black'>
                                                0
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fw-medium px-3'>3- does your profit formula allow for prioritizing multiple financial objectives?</td>
                                            <td className='text-center fw-medium border border-2 border-black'>
                                                0
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fw-medium px-3'>4- how innovative and creative is your company culture?</td>
                                            <td className='text-center fw-medium border border-2 py-2 border-black'>
                                                0
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fw-medium px-3'>5- your annual planning exercises are detailed or vague?</td>
                                            <td className='text-center fw-medium border border-2 border-black py-2'>
                                                0
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='fw-medium px-3'>6- How easy is it to revise your company budget or business plan during implementation?</td>
                                            <td className='text-center fw-medium border border-2 border-black'>
                                                0
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className='invisible'>0</td>
                                            <td className='invisible'>0</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-medium text-end pe-1'>Score</td>
                                            <td className='text-center fw-medium py-2 lightgreen-answer'>0.0</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-medium text-end pe-1'>Company Execution Capability</td>
                                            <td className='text-center fw-medium'>Predictive</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="col-xl-5">
                                <div className='d-flex my-2 justify-content-center'>
                                    <div>
                                        <h6 className='fw-semibold text-center mb-1'>Predictive</h6>
                                        <hr className='opacity-100 border-2 mb-2 mt-0' />
                                        <p className='mb-1 text-center fw-medium px-3'>Don't have resources</p>
                                        <p className='mb-1 text-center fw-medium px-3'>Hard to change</p>
                                        <p className='mb-1 text-center fw-medium px-3'>No</p>
                                        <p className='mb-1 text-center fw-medium px-3'>Not innovative</p>
                                        <p className='mb-1 text-center fw-medium px-3'>Detailed planning up-front</p>
                                        <p className='mb-1 text-center fw-medium px-3'>Can't change</p>
                                    </div>
                                    <div>
                                        <h6 className='fw-semibold  text-center mb-1'>Agile</h6>
                                        <hr className='opacity-100 border-2 mb-2 mt-0' />
                                        <p className='mb-1 text-center fw-medium px-3'>Fully facilitated</p>
                                        <p className='mb-1 text-center fw-medium px-3'>easy to change</p>
                                        <p className='mb-1 text-center fw-medium px-3'>yes</p>
                                        <p className='mb-1 text-center fw-medium px-3'>very Innovative</p>
                                        <p className='mb-1 text-center fw-medium px-3'>Planning per iteration</p>
                                        <p className='mb-1 text-center fw-medium px-3'>Can change</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <div className='m-3'>
                        <h5 className='fw-semibold'>Company Execution Capability Gauge</h5>
                        <p className='fs-14 fw-medium mb-2'>Determine what you can and cannot do</p>
                        <p className='fs-14 fw-medium fst-italic'>Answer the following questions on 0-4 scale.</p>
                    </div>
                    <table className='mx-4 my-3 border border-2 slide22-table' width={"96%"}>
                        <thead>
                            <tr>
                                <th className='ps-5'>Answer the following questions on 0-4 scale</th>
                                <th className='px-5 fs-18'>Select Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>1</span>You only start projects once requirements, roadmap, and benefits are clear.</td>
                                <td>
                                    <input type="text" class="form-control shadow-none border-0 py-1 px-3 fs-14 fw-medium" />
                                </td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>2</span>How easy is it to change your processes to facilitate development of the proposed product?</td>
                                <td>
                                    <input type="text" class="form-control shadow-none border-0 py-1 px-3 fs-14 fw-medium" />
                                </td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>3</span>Does your profit formula allow for prioritizing multiple financial objectives?</td>
                                <td>
                                    <input type="text" class="form-control shadow-none border-0 py-1 px-3 fs-14 fw-medium" />
                                </td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>4</span>How innovative and creative is your company culture</td>
                                <td>
                                    <input type="text" class="form-control shadow-none border-0 py-1 px-3 fs-14 fw-medium" />
                                </td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>5</span>Your annual planning exercises are detailed or vague?</td>
                                <td>
                                    <input type="text" class="form-control shadow-none border-0 py-1 px-3 fs-14 fw-medium" />
                                </td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>6</span>How easy is it to revise your company budget or business plan during implementation?</td>
                                <td>
                                    <input type="text" class="form-control shadow-none border-0 py-1 px-3 fs-14 fw-medium" />
                                </td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> Score</td>
                                <td>
                                    <input type="text" class="form-control shadow-none border-0 py-1 px-3 fs-14 fw-medium" />
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> Company Execution Capability</td>
                                <td>
                                    <input type="text" class="form-control shadow-none border-0 py-1 px-3 fs-14 fw-medium" />
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide 30 Ends */}

        </>
    );
};

export default Slide11;