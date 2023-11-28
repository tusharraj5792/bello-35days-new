import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../forms/common/input-field";
import { useNavigate } from "react-router-dom";
import { hideBootstrapModal } from "../../../utilities/utils";

const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/mobilization/introduction");
    hideBootstrapModal("staticBackdrop");
  };
  return (
    <div>
      <div className="">
        <div className="new-presentation py-5">
          <div className="container">
            <h4 className="fs-18 mb-4">New Presentation</h4>
            <div
              className="d-flex align-items-center justify-content-center bg-white white-card cursor"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img src="/static/img/new-doc.png" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="recent-docs my-5">
            <h4 className="fs-18 mb-4">Recent Documents</h4>
            <div className="row w-100">
              <div className="col-4">
                <div className="card">
                  <img src="/static/img/recent-doc.png" />
                  <div className="p-3">
                    <h5>TheStrategist Presentation</h5>
                    <p className="mb-0 fs-12">
                      Last opened Aug 20, 2023 at 2:00PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img src="/static/img/recent-doc.png" />
                  <div className="p-3 d-flex justify-content-between">
                    <div>
                      <h5>TheStrategist Presentation</h5>
                      <p className="mb-0 fs-12">
                        Last opened Aug 20, 2023 at 2:00PM
                      </p>
                    </div>
                    <img src="/static/img/users.svg" />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img src="/static/img/recent-doc.png" />
                  <div className="p-3">
                    <h5>TheStrategist Presentation</h5>
                    <p className="mb-0 fs-12">
                      Last opened Aug 20, 2023 at 2:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      <div className="modal fade" id="staticBackdrop" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="staticBackdropLabel">
                Start New Presentation
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  name="text"
                  register={register}
                  placeholder="Set title of your presentation"
                  label={"Title"}
                  validationSchema={{}}
                />
                <p className="text-end fs-12" style={{ marginTop: "-20px" }}>
                  Max 50 characters
                </p>
                <div className="text-center">
                  <button
                    type="submit"
                    className="border-0 w-50 py-2 text-white primary-btn mt-4"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
