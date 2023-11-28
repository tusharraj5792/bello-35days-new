import React from 'react'

const Slide7 = () => {
    return (
        <>
            {/* Slide26 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>Talent Value Map</h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='row mx-2 px-1'>
                    <div className='col-6'>
                        <h5 className='fw-semibold fst-italic'>Assess your ability to attract and retain talent.</h5>
                        <p className='fw-medium mt-3 mb-2 lh-1_75 fs-18'>Within resources, your people are very important. Perform a talent value map (provided in the attached excel file) to cross check your ability to attract talent compared to competition. Among the most important value drivers attracting candidates are:</p>
                        <ul className='ps-3'>
                            <li className='ps-2 mb-2 fw-medium fs-18'>competitive compensation</li>
                            <li className='ps-2 mb-2 fw-medium fs-18'>work-life balance</li>
                            <li className='ps-2 mb-2 fw-medium fs-18'>opportunities for growth</li>
                            <li className='ps-2 mb-2 fw-medium fs-18'>positive work culture</li>
                            <li className='ps-2 mb-2 fw-medium fs-18'>employees recognition and appreciation</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <img src="../static/img/slide26.png" alt="..." className='mx-auto d-block w-75 px-4' />
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
                        Instructions: Go to the Talent Value Map tab in the provided excel file. Fill out the ratings for all value drivers for your organization and competitors. This is meant to help you understand what areas you need to focus on to improve your people’s perspective within your strategy map later. Copy/paste it here then delete this instruction box.{" "}
                    </p>

                    <table className='mx-5 my-3 border border-2 slide22-table' width={"92%"}>
                        <thead>
                            <tr>
                                <th className='ps-5'>Value Drivers</th>
                                <th className='ps-3 w-14 fs-18'>Your co.</th>
                                <th className='ps-3 w-14 fs-18'>Competitor 1</th>
                                <th className='ps-3 w-14 fs-18'>Competitor 2</th>
                                <th className='ps-3 w-14 fs-18'>Competitor 3</th>
                                <th className='ps-3 w-14 fs-18'>Competitor 4</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td className='fw-medium ps-4'>1 &nbsp; Competitive compensation</td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                            </tr>
                            <tr>
                                <td className='fw-medium ps-4'>2 &nbsp; Work life balance</td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                            </tr>
                            <tr>
                                <td className='fw-medium ps-4'>3 &nbsp; Opportunities for growth</td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                            </tr>
                            <tr>
                                <td className='fw-medium ps-4'>4 &nbsp; Positive work culture</td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                            </tr>
                            <tr>
                                <td className='fw-medium ps-4'>5 &nbsp; Employee recognition and apprecition</td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                            </tr>
                            <tr>
                                <td className='fw-medium ps-4'>6 &nbsp; Strong Leadership</td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td className='fw-medium ps-4'>7 &nbsp; Workforce diversity and inclusion</td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                                <td className=''></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide26 Ends */}
        </>
    )
}

export default Slide7