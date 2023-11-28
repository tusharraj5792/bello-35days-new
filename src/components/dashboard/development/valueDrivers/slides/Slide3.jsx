import React from 'react';

const Slide3 = () => {
    return (
        <>
            {/* Slide 82 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <h2 className='slide-heading fw-semibold px-4'>The Value Stick
                </h2>
                <div className='top-line my-3 mx-4'></div>
                <div className='row align-items-xl-start align-items-center'>
                    <div className="col-6 pe-5">
                        <p className='fw-semibold mx-4 mb-4'>to create value either increase WTP or lower WTS
                        </p>
                        <ul className='ps-4 ms-3'>
                            <li className='ps-3 fs-18 mb-3 lh-1_75'>
                                WPT is willingness to pay; this is how much the customer is willing to pay for your product or service.
                            </li>
                            <li className='ps-3 fs-18 mb-3 lh-1_75'>
                                Price is what you are selling at. WTP – Price is the value the customer gets hopefully resulting in customer delight.
                            </li>
                            <li className='ps-3 fs-18 mb-3 lh-1_75'>
                                Cost is about your expenses. Price – Cost is your profit margin.
                            </li>
                            <li className='ps-3 fs-18 mb-3 lh-1_75'>
                                WTS is willingness to sell. This is the lowest value your suppliers are willing to sell at. Cost – WTS is supplier surplus or employee satisfaction (in case your staff are your main suppliers).
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <img src="../static/img/slide82.png" alt="..." className='img-fluid w-75 mx-auto d-block' />
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
                        Instructions: This is meant as an illustrative slide. Not all your audience are well versed in strategy as a knowledge domain. This’ll help establish some level of basic strategy knowledge.{" "}
                    </p>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide 82 Ends */}
        </>
    );
};

export default Slide3;