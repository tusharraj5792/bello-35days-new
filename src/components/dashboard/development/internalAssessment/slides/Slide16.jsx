import React from 'react'

const Slide16 = () => {
    return (
        <>
            {/* Slide 35 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>What to do with Change Readiness Assessment
                </h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='d-flex gap-5 mx-4'>
                    <div className='d-flex flex-column  justify-content-evenly'>
                        <p className='bg-warning p-3 text-center rounded-4'>Determine cause of lack of organizational readiness and plan for enhancements
                        </p>
                        <p className='bg-danger text-white p-3 text-center rounded-4'>This is a major red flag. Enhance change capabilities before pursuing future plans
                        </p>
                    </div>
                    <img src="../static/img/slide35.png" alt="..." className='img-fluid w-50' />
                    <div className='d-flex flex-column  justify-content-evenly'>
                        <p className='bg-lightgreen text-white p-3 text-center rounded-4'>This is an ideal situation, so plan is to sustain it by further investing in key capabilities
                        </p>
                        <p className='bg-warning p-3 text-center rounded-4'>Determine cause of lack of organizational readiness and plan for enhancements
                        </p>
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
                        Instructions: fill these blanks. Some may be left empty.{" "}
                    </p>
                    <img src="../static/img/slide35-content.png" alt="..." className='img-fluid w-100 p-2' />
                    <div className='row g-3 mx-5 px-3 my-2'>
                        <div className='col-6'>
                            <p className='bg-lightyellow py-3 px-5 fw-medium mb-0'>Determine cause of lack of organizational readiness and plan for enhancements
                            </p>
                        </div>
                        <div className='col-6'>
                            <p className='bg-lightergreen py-3 px-5 fw-medium mb-0'>This is an ideal situation, so plan to sustain it by further investing in key capabilities
                            </p>
                        </div>
                        <div className='col-6'>
                            <p className='bg-lightpink py-3 px-5 fw-medium'>This is major red flag. Enhance change capabilities before pursuing future plan.
                            </p>
                        </div>
                        <div className='col-6'>
                            <p className='bg-lightyellow py-3 px-5 fw-medium'>Determine cause of lack of organizational readiness and plan for enhancements
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide 35 Ends */}
        </>
    )
}

export default Slide16