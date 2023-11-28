import React from 'react'

const Slide11 = () => {
    return (
        <>

            {/* Slide30 Starts */}
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

                    <div className='mt-4 mb-5 pb-3'>
                        <img src="../static/img/slide30.png" alt="..." className='img-fluid' />
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
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>2</span>How easy is it to change your processes to facilitate development of the proposed product?</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>3</span>Does your profit formula allow for prioritizing multiple financial objectives?</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>4</span>How innovative and creative is your company culture</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>5</span>Your annual planning exercises are detailed or vague?</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>6</span>How easy is it to revise your company budget or business plan during implementation?</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> Score</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> Company Execution Capability</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide30 Ends */}

        </>
    )
}

export default Slide11