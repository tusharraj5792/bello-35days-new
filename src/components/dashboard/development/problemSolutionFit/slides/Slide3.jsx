import React from 'react';

const Slide3 = () => {
    return (
        <>
            {/* Slide 72 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-black position-relative'>
                <h2 className='slide-heading fw-semibold px-4 text-white mt-2'>Value Proposition Canvas: problem/solution fit
                </h2>
                <div className='top-line my-3 mx-4'></div>
                <p className='text-white px-4'>To further understand the job to be done required by the customer, take a deeper look at the four aspects of the customer JTBD pyramid. This’ll uncover gaps in resources and assets needed to perform the job to be done, which provides further breakdown of your strategic objectives.
                </p>
                <img src="../static/img/slide72.png" alt="..." className='img-fluid w-83 mx-auto d-block' />
                <div className='bottom-line1 mt-5'></div>
            </section>

            {/* Slide Content Starts */}
            <section className="p-3">
                <div className="border border-1">
                    <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                        Slide Content
                    </h1>
                    <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                        Instructions: You may go into further details of customer job to be done as needed. Value-based strategy focuses on delivering value to customers. This is only possible if you really understand the job to be done.{" "}
                    </p>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide 72 Ends */}
        </>
    )
};

export default Slide3;