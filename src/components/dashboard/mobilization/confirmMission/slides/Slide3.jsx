import React from 'react'

const Slide3 = () => {
    return (
        <>
            {/* Slide 14 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>Decomposed Belief System</h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='mt-4 pt-2 px-4'>
                    <h4 className='fs-20 secondary-bg text-white py-2 text-center rounded-3 fw-semibold'>Belief System Elements</h4>
                    <div className='d-flex gap-2 mt-3 mb-5'>
                        <div className='belief-box rounded-4'>
                            <h5 className='primary-bg text-white py-3 text-uppercase fs-20 mb-4 text-center rounded-top-4 fw-semibold'>core values & belief</h5>
                            <div className='w-83 mx-auto'>
                                <p className='fs-18'>A system of guiding principles and tenents; a philosophy of business and life.</p>
                                <p className='fs-18'>Principles that are to be held inviolate.</p>
                                <p className='fs-18'>An extension of the personal core values and beliefs of the leaders of the organization.</p>
                            </div>
                        </div>
                        <img src="../static/img/right-arrow.svg" alt="..." className='img-fluid' />
                        <div className='belief-box rounded-4'>
                            <h5 className='primary-bg text-white fw-semibold py-3 text-uppercase fs-20 mb-4 text-center rounded-top-4'>Vision</h5>
                            <div className='w-83 mx-auto'>
                                <h6 className='fw-semibold fs-18 mb-3 pt-1'>Vision Statement</h6>
                                <p className='fs-18'>The fundamental reason for the organization's existence.</p>
                                <p className='fs-18'>Grow out of core values.</p>
                                <p className='fs-18'>Like a guiding star always worked towards, but never fully attained.</p>
                                <p className="fs-18">Should serve to guide the company for 100 years.</p>
                            </div>
                        </div>
                        <img src="../static/img/right-arrow.svg" alt="..." className='img-fluid' />
                        <div className='belief-box rounded-4 pb-4'>
                            <h5 className='primary-bg text-white fw-semibold py-3 text-uppercase fs-20 mb-4 text-center rounded-top-4'>Mission</h5>
                            <div className='w-83 mx-auto'>
                                <p className='fs-18'>A bold, compelling, audacious goal.</p>
                                <p className='fs-18'>Has a clear finish line and a specific time frame. Once completed, a new mission is set.</p>
                                <h6 className='fs-18 fw-semibold mt-4'>4 Types:</h6>
                                <ol className='mb-4 ps-3'>
                                    <li className='ps-3'>Targeting</li>
                                    <li className='my-2 ps-3'>Common Enemy</li>
                                    <li className='my-2 ps-3'>Role Model</li>
                                    <li className='ps-3'>Internal Transformation</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-line mt-3'></div>
            </section>
            {/* Slide 14 Ends */}
        </>
    )
}

export default Slide3