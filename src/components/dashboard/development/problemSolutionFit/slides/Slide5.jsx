import React from 'react';

const Slide5 = () => {
    return (
        <>
            {/* Slide 74 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>Problem Elements Gauge
                </h2>
                <div className='top-line my-3 mx-4'></div>
                <p className='px-4'>This is an original TheStrategist.me tool developed by Abdulla Alawadi to help gauge solution requirements level.
                </p>
                <table className='mx-auto my-3 slide73-table' border={3} width={"90%"}>
                    <div className='mt-1 mb-5'>
                        <h5 className='fs-18 fw-semibold mb-1'>Customer Job To Be Done</h5>
                        <h6>problem elements</h6>
                    </div>
                    <tbody>
                        <tr>
                            <th className='fw-medium fst-italic'>answer the following questions on a 0-4 scale:</th>
                            <th className='text-center text-decoration-underline'>select answers</th>
                        </tr>
                        <tr>
                            <td className='fw-medium ps-4'>1-   Customer job to be done is well defined with clear requirements.</td>
                            <td className='text-center fw-medium'>3</td>
                        </tr>
                        <tr>
                            <td className='fw-medium ps-4'>2-  Customer experience expectation is well defined.</td>
                            <td className='text-center fw-medium'>1</td>
                        </tr>
                        <tr>
                            <td className='fw-medium ps-4'>3- Integration requirements to provide the expected experience are well defined.</td>
                            <td className='text-center fw-medium'>1</td>
                        </tr>
                        <tr>
                            <td className='fw-medium ps-4'>4- Customer prefers to deal with certain brands to get this job done?</td>
                            <td className='text-center fw-medium'>2</td>
                        </tr>
                        <tr>
                            <td className='fw-medium ps-4'>5- Getting this customer job done requires high level of quality.</td>
                            <td className='text-center fw-medium'>2</td>
                        </tr>
                        <tr>
                            <td className='fw-medium ps-4'>6- Getting this customer job done entails a lot of regulatory requirements.</td>
                            <td className='text-center fw-medium'>2</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='fw-medium text-end pe-1'>Score</td>
                            <td className='text-center fw-medium bg-lightpink text-danger'>1.8</td>
                        </tr>
                        <tr>
                            <td className='fw-medium text-end pe-1'>Customer JTBD has</td>
                            <td className='text-center fw-medium '>Light Requirements</td>
                        </tr>
                        <tr>
                            <td className='invisible'>.</td>
                            <td className='invisible'>.</td>
                        </tr>
                    </tfoot>
                </table>
                {/* <img src="../static/img/slide12.png" alt="..." className='img-fluid px-4' /> */}
                <div className='bottom-line mt-5'></div>
            </section>

            {/* Slide Content Starts */}
            <section className="p-3">
                <div className="border border-1">
                    <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                        Slide Content
                    </h1>
                    <table className='mx-4 my-3 border border-2 slide22-table' width={"96%"}>
                        <thead>
                            <tr>
                                <th className='ps-xl-5 ps-4'>Answer the following questions on 0-4 scale</th>
                                <th className='px-xl-5 px-4 fs-18'>Select Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>1</span>Customer job to be done is well defined with clear requirements.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>2</span>Customer experience expectation is well defined.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>3</span>Integration requirements to provide the expected experience are well defined.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>4</span>Customer prefers to deal with certain brands to get this job done?</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>5</span>Getting this customer job done requires high level of quality.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='ps-4 fw-medium fs-14'> <span className='pe-3 fs-14'>6</span>Getting this customer job done entails a lot of regulatory requirements.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='pe-3 text-end fw-medium fs-14'>Score</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className='pe-3 text-end fw-medium fs-14'>Your product has</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide 74 Ends */}
        </>
    )
};

export default Slide5;