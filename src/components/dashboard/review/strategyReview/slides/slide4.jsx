import React from 'react';

const Slide4 = () => {
    return (
        <>
            {/* Slide 162 Starts */}
            <section className='w-91 pt-3 mt-2 mb-4 mx-auto bg-white position-relative'>
                <img src="../static/img/slide162.png" alt="..." className='img-fluid w-100' />
                <div className='bottom-line mt-3'></div>
            </section>

            {/* Slide Content Starts */}
            <section className="p-3">
                <div className="border border-1">
                    <h1 className="p-3 border-bottom border-1 mb-0 fw-semibold">
                        Slide Content
                    </h1>
                    <form className="mx-3 px-2 my-4">
                        <div>
                            <label htmlFor="one" className="fw-medium mb-2">
                                Phone
                            </label>{" "}
                            <br />
                            <textarea
                                name="one"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="one"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">
                                50 Characters left
                            </p>
                        </div>
                        <div>
                            <label htmlFor="two" className="fw-medium mb-2">
                                Email
                            </label>{" "}
                            <br />
                            <textarea
                                name="two"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="two"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">
                                50 Characters left
                            </p>
                        </div>
                        <div>
                            <label htmlFor="three" className="fw-medium mb-2">
                                Website
                            </label>{" "}
                            <br />
                            <textarea
                                name="three"
                                className="textarea-input rounded-2 p-3 fs-14"
                                id="three"
                                maxLength={2500}
                                placeholder="Write the answer here."
                            ></textarea>
                            <p className="fs-14 text-end -mt-5 mb-0 text-muted">
                                50 Characters left
                            </p>
                        </div>
                    </form>
                </div>
            </section>
            {/* Slide Content Ends */}
            {/* Slide 162 Ends */}
        </>
    );
};

export default Slide4;