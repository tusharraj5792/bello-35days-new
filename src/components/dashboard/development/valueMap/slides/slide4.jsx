import React from 'react';

const Slide4 = () => {
    return (
        <>
            {/* Slide 88 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto position-relative bg-white'>
                <h2 className='slide-heading fw-semibold px-4'>Value Maps
                </h2>
                <div className='top-line my-3 mx-4'></div>
                <p className='mx-4 fw-semibold fst-italic'>a closer look at how to use the MoSCoW prioritization model
                </p>
                <div className='row align-items-xl-start align-items-center pt-2'>
                    <div className="col-6">
                        <img src="../static/img/slide88.png" alt="..." className='img-fluid' />
                    </div>
                    <div className="col-6 pe-5 lh-lg">
                        <ul className="pe-5">
                            <li className='mb-3 ps-3'>Must have are value drivers that you cannot go to market without.
                            </li>
                            <li className='mb-3 ps-3'>Should have are value drivers of high significance to your customer. This of them as features, specifications, or capabilities you should not go to market without.
                            </li>
                            <li className='mb-3 ps-3'>Could have are value drivers are usually the ones at the mid to lower end of your list of value drivers.

                            </li>
                            <li className='mb-3 ps-3'>Will not have are sometime also referred to as would like to have but not at this time. These should be at the bottom of your value drivers list or not to be included at all.
                            </li>
                        </ul>
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
            {/* Slide 88 Ends */}
        </>
    );
};

export default Slide4;