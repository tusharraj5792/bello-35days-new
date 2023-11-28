import React from 'react'

const Slide6 = () => {
    return (
        <>
            {/* Slide25 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <img src="../static/img/slide25.png" alt="..." className='img-fluid w-100 mb-5 pb-4' />
                <div className='bottom-line'></div>
            </section>

            {/* Slide Content Starts */}
            <section className="p-3">
                <div className="border border-1">
                    <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                        Slide Content
                    </h1>
                    <p className="primary-bg text-white py-2 px-3 m-3 fw-medium">
                        Instructions: VRIO is an internal analysis tool focusing on organizational resources. Use it to identify gaps and guide your resource-related decisions. Start by listing these resources then determine if they are valuable, rare, inimitable, and how organized are you to take advantage of them. You can run the same exercise for future resources by determining what resources do we want to acquire to bring value, rarity, inimitability, and how do we organize ourself to take advantage of them.{" "}
                    </p>
                    <form className="mx-4 px-2 mb-4">
                        <div className='mt-4'>
                            <h6 className='fs-18'>Valuable</h6>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                Do you have special resources which allow for special value delivery? If yes, then what’s your plan to maintain and improve them? If not, then plan to obtain valuable resources to provide and edge.
                            </label>{" "}
                            <br />
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                        <div className='mt-3'>
                            <h6 className='fs-18'>Rarity</h6>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                Are these resources rare or are they readily available? If rare then determine for how long? If not rare then consider what happens once they’re available to others.
                            </label>{" "}
                            <br />
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                        <div className='mt-3'>
                            <h6 className='fs-18'>Inimitability</h6>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                How imitable are these resources? Can competition imitate them easily? If yes, then consider what edge will you loose once others copy you. If not imitable, then determine factors, which makes it hard for others to copy and reinforce them.
                            </label>{" "}
                            <br />
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                        <div className='mt-3'>
                            <h6 className='fs-18'>Organized</h6>
                            <label htmlFor="core-values" className="fw-medium mb-2">
                                How organized the firm is to take advantage of these resources? If well organized, then consider how to reinforce. If not, then plan how you’ll organize yourself to take advantage of your resources.
                            </label>{" "}
                            <br />
                            <textarea
                                name="core-values"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="core-values"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">2500 Characters left</p>
                        </div>
                    </form>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide25 Ends */}
        </>
    )
}

export default Slide6