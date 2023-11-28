import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { hideBootstrapModal, removeAllItems } from "../../utilities/utils";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    removeAllItems();
    hideBootstrapModal("LogOutModal");
    navigate("/login");
  };

  return (
    <div>
      <header>
        <nav className="navbar bg-white h-100">
          <div className="container-fluid px-4">
            <Link className="navbar-brand" to={"/"}>
              <img src="/static/img/site-logo.png" />
            </Link>
            {location.pathname !== "/forgot-password" &&
              location.pathname !== "/reset-password" &&
              location.pathname !== "/account-setup" && (
                <div className="d-flex align-items-center">
                  <img
                    src="/static/img/bell.png"
                    className="me-3 notification"
                  />
                  <div className="dropdown">
                    <button
                      className="border circle-4 px-2 py-1 bg-white"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div>
                        <img src="/static/img/user.png" />
                        <img src="/static/img/menu-bars.png" className="me-2" />
                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/account-setup" className="dropdown-item">
                          <img
                            src="/static/img/user-icon.svg"
                            className="me-2"
                          />
                          <span>My Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/forgot-password" className="dropdown-item">
                          <img
                            src="/static/img/credit-card.svg"
                            className="me-2"
                          />
                          <span>Payment Method</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          <img src="/static/img/box.svg" className="me-2" />
                          <span>Your Subscription</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#LogOutModal"
                        >
                          <img src="/static/img/log-out.svg" className="me-2" />
                          <span>Log Out</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
          </div>
        </nav>
      </header>
      {/* // modal */}
      <div
        className="modal fade logout-modal"
        id="LogOutModal"
        aria-labelledby="LogOutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-1">
            <div className="modal-header">
              <h5 className="modal-title" id="LogOutModalLabel">
                Log Out
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-4 pb-4">
              Are you sure you want to log out from TheStrategiest.me?
            </div>
            <div className="modal-footer border-0 justify-content-between row m-0 p-4">
              <div className="col-6 m-0 ps-0">
                <button
                  type="button"
                  className="btn primary-border w-100 me-3 m-0 rounded-1 primary-text"
                  data-bs-dismiss="modal"
                >
                  Go Back
                </button>
              </div>

              <div className="col-6 m-0 pe-0">
                <button
                  type="button"
                  className="btn btn-primary w-100 m-0 rounded-1"
                  data-bs-dismiss="modal"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
