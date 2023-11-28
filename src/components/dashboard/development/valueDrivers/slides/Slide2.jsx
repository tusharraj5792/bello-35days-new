import React from 'react';

const Slide2 = () => {
    return (
        <>
            {/* Slide 81 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <div className='me-4 row align-items-center'>
                    <div className="col-6">
                        <img src="../static/img/slide81.png" alt="..." className='img-fluid w-100' />
                    </div>
                    <div className="col-6">
                        <h5 className='text-primary slide-heading ps-2 mb-4'>Value Stick: Principals of Value-Based Strategy
                        </h5>
                        <ul>
                            <li className='ps-3 fs-18 mb-3'>
                                Companies that excel at creating value focus squarely on WTP (willingness to pay) and WTS (willingness to sell). Every significant initiative is designed to either enhance the customer experience—that is, increase consumers’ WTP—or make it more attractive for vendors and employees to work with the company, in other words, decrease their WTS. Initiatives that fail to meet this test are cut.

                            </li>
                            <li className='ps-3 fs-18 mb-3'>
                                Companies that outperform their peers increase WTP or decrease WTS in ways that are difficult to imitate.
                            </li>
                            <li className='ps-3 fs-18 mb-3'>
                                Simplicity opens room for creativity and broad engagement.
                            </li>
                            <li className='ps-3 fs-18'>
                                Many of the most successful companies focus on their competitive position inside an industry, as opposed to the average performance of their segment of the economy.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bottom-line'></div>
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
            {/* Slide 81 Ends */}
        </>
    );
};

export default Slide2;