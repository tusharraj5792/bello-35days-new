import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsLoginLoading,
  selectSignInErrorsMsg,
  signInActions,
} from "../../../store/reducers/signInSlice";
import Input from "../common/input-field";
import { emailPattern, successMsg } from "../../../utilities/utils";
import { useAppSelector } from "../../../store/hooks";
import ReactMarkdown from "react-markdown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../loaders";

const SignIn = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { from, search } = location.state || {};
  const responseErrorsMsg = useAppSelector(selectSignInErrorsMsg);
  const isLoading = useAppSelector(selectIsLoginLoading);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const [errorToShow, setErrorToShow] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const handleSignIn = (data) => {
    dispatch(signInActions.signIn(data));
  };

  useEffect(() => {
    if (responseErrorsMsg !== "") {
      setErrorToShow(responseErrorsMsg);
    }
  }, [responseErrorsMsg]);

  useEffect(() => {
    if (isLoggedIn) {
      reset();
      const pageUrl = "/";
      if (from && search) {
        navigate(`${from}${search}`);
      } else {
        navigate(`${pageUrl}`);
      }
      dispatch(signInActions.resetSignInState());
    }
  }, [isLoggedIn]);

  const handleTogglePassword = () => {
    if (watch("password")) {
      setShowPassword(!showPassword);
    }
  };

  // if (isLoggedIn) return successMsg("Login successfully");

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="container vh-100 d-flex align-items-center">
        <div className="row">
          <div className="col-md-6 border-end">
            <div className="d-flex align-items-center h-100">
              <h1 className="main-h">
                Now make your presentation{" "}
                <span className="primary-text">Faster</span>
              </h1>
            </div>
          </div>

          <div className="col-md-6 ps-md-5">
            <form onSubmit={handleSubmit(handleSignIn)}>
              <div className="text-center">
                <img src="/static/img/site-logo.png" className="mb-28" />
                <h2 className="sub-h mb-2">Welcome back!</h2>
                <p className="mb-4">
                  Add your account credentials to start using it.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center input-control mb-28">
                <span className="d-flex fw-medium">
                  <img src="/static/img/google.png" className="me-2" />
                  Sign In with Google
                </span>
              </div>

              <p className="mb-4 d-flex align-items-center justify-content-between lighter-grey">
                <span className="bordered-span"></span>
                <span>or</span>
                <span className="bordered-span"></span>
              </p>

              <Input
                name="email"
                register={register}
                placeholder="Enter your valid email address"
                errors={errors}
                label={"Email"}
                validationSchema={{
                  pattern: {
                    value: emailPattern,
                    message: "Please enter a valid email!",
                  },
                  required: "Email is required!",
                }}
                className="mb-12"
              />

              <Input
                name="password"
                placeholder="Enter your password"
                register={register}
                errors={errors}
                label={"Password"}
                type={"password"}
                validationSchema={{
                  required: "Password is required!",
                }}
                className="mb-12"
                icon="true"
                togglePassword={() => handleTogglePassword()}
                showPassword={showPassword}
              />

              {!!errorToShow && (
                <div className="error-info mb-12 text-danger">
                  <ReactMarkdown>{errorToShow}</ReactMarkdown>
                </div>
              )}

              <div className="text-end" style={{ marginTop: "-1.5rem" }}>
                <Link
                  className="primary-text"
                  to={"/forgot-password"}
                  style={{ textDecoration: "none" }}
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="border-0 w-100 text-white primary-btn mt-4"
              >
                Sign in
              </button>

              <div className="mt-5 pt-6 text-center">
                Don’t have an account?{" "}
                <Link to={"/sign-up"} className="text-decoration-none">
                  <span className="primary-text fw-bold ">
                    Create an account
                  </span>
                </Link>{" "}
                now!
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
