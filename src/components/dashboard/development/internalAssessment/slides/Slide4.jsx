import React from 'react'

const Slide4 = () => {
    return (
        <>
            {/* Slide23 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-lightgrey position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>Determine What We Can & Cannot Do</h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='row mx-2 px-1'>
                    <div className='col-6'>
                        <h5 className='fw-semibold fst-italic'>a closer look at our resources, processes, and profit formula</h5>
                        <p className='fw-semibold my-3'>To determine execution capacity, ask: <span className='text-decoration-underline fst-italic'>"do we have the resources to do this job? The right processes? And can it be important to us to prioritize it over other tasks? (within our profit formula)"</span> That is important because good people working in an incapable organization will most likely fail. Two best practices are:</p>
                        <div className='my-4 pt-2'>
                            <div className='d-flex gap-4'>
                                <p>1&#41;</p>
                                <p>Set up a separate business unit for disruptive innovations so it can develop the resources, processes, and profit formula needed to win (emergent strategy).</p>
                            </div>
                            <div className='d-flex gap-4'>
                                <p>2&#41;</p>
                                <p>Fold sustaining innovations into the core business unit
                                    (deliberate strategy).</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img src="../static/img/slide23.png" alt="..." className='img-fluid w-75 mx-auto d-block' />
                    </div>
                </div>
                <p className='fs-12 text-muted mx-4 fst-italic mt-4'>Source: HBS Clayton Christensen on Disruption Theory</p>
                <div className='bottom-line mt-3'></div>
            </section>
            {/* Slide23 Ends */}
        </>
    )
}

export default Slide4