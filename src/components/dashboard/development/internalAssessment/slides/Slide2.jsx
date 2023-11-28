import React from 'react'

const Slide2 = () => {
    return (
        <>
            {/* Slide21 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>Internal Assessment</h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='mx-4'>
                    <h6 className='fst-italic fw-semibold mb-3 mt-4'>assessment will cover:</h6>
                    <ol className='ps-4'>
                        <li className='fs-20 ps-2 mb-2'>Strengths and weaknesses.</li>
                        <li className='fs-20 ps-2 mb-2'>Resources.</li>
                        <li className='fs-20 ps-2 mb-2'>Processes: this is very important as processes shape your culture and determine what you can and cannot do.</li>
                        <li className='fs-20 ps-2 mb-2'>Profit formula priorities; what are we prioritizing?</li>
                        <ol className='mb-2'>
                            <li className='ps-2 fs-20'>risk aversion</li>
                            <li className='ps-2 fs-20'>growth
                            </li>
                            <li className='ps-2 fs-20'>profits</li>
                            <li className='ps-2 fs-20'>cost reduction</li>
                        </ol>
                        <li className='fs-20 ps-2 mb-2'>Innovation and creativity.</li>
                        <li className='fs-20 ps-2 mb-2'>Value chain analysis.</li>
                    </ol>
                    <p className='fs-14 text-muted -mt-5 fst-italic fs-12'>Note: Strategy should focus on attaining the current mission.</p>
                </div>
                <div className='bottom-line mt-3'></div>
            </section>
            {/* Slide21 Ends */}
        </>
    )
}

export default Slide2