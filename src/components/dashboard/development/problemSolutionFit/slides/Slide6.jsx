import React from 'react';

const Slide6 = () => {
    return (
        <>
            {/* Slide 75 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>Problem/Solution Fit Diagram
                </h2>
                <div className='top-line my-3 mx-4'></div>
                <img src="../static/img/slide75.png" alt="..." className='img-fluid w-75 mx-auto d-block' />
                <div className='bottom-line mt-5'></div>
            </section>

            {/* Slide Content Starts */}
            <section className="p-3">
                <div className="border border-1">
                    <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                        Slide Content
                    </h1>
                    <img src="../static/img/slide75-content.png" alt="..." className='img-fluid w-100 px-2 py-4'/>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide 75 Ends */}
        </>
    )
};

export default Slide6;