import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./common/input-field";
import { useForm } from "react-hook-form";
import { emailPattern, successMsg } from "../../utilities/utils";
import PasswordComplexity from "../passwordComplexity";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import ReactMarkdown from "react-markdown";

import {
  selectIsRegister,
  selectIsRegistering,
  selectSignUpErrorsMsg,
  signupActions,
} from "../../store/reducers/signUpSlice";
import Loader from "../loaders/loader";
// import { toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectSignUpErrors = useAppSelector(selectSignUpErrorsMsg);
  const isLoading = useAppSelector(selectIsRegistering);
  const isRegister = useAppSelector(selectIsRegister);
  const [errorToShow, setErrorToShow] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm();

  const handleSignUp = (data) => {
    const payload = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    dispatch(signupActions.signUp(payload));
  };

  useEffect(() => {
    if (selectSignUpErrors !== "") {
      setErrorToShow(selectSignUpErrors);
    }
  }, [selectSignUpErrors]);

  useEffect(() => {
    if (isRegister) {
      navigate(`/login`);
    }
    dispatch(signupActions.resetSignUpState());
  }, [isRegister]);

  const handleTogglePassword = () => {
    if (watch("password")) {
      setShowPassword(!showPassword);
    }
  };
  const toggleConfirmPassword = () => {
    if (watch("confirmPassword")) {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  if (isLoading) return <Loader />;
  return (
    <div className="container my-5 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-6 border-end">
          <div className="d-flex align-items-center h-100">
            <h1 className="main-h">
              Now make your <br />
              presentation <span className="primary-text">Faster</span>
            </h1>
          </div>
        </div>
        <div className="col-md-6 ps-md-5">
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="text-center">
              <img src="/static/img/site-logo.png" className="mb-28" />
              <h2 className="sub-h mb-2">Create your account</h2>
              <p className="mb-4">
                Enter the answer for following fields and get started
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
              name="fullName"
              register={register}
              label={"Full Name"}
              className="mb-12"
              placeholder="Enter your full name"
              errors={errors}
              validationSchema={{
                required: "Name is required!",
              }}
            />

            <Input
              name="email"
              register={register}
              placeholder="Enter your valid email address"
              errors={errors}
              label={"Email"}
              validationSchema={{
                pattern: {
                  value: emailPattern,
                  message: "Enter your valid email address",
                },
                required: "Email is required!",
              }}
              className="mb-12"
            />
            <Input
              name="password"
              type="password"
              register={register}
              errors={errors}
              placeholder="Create your password"
              label={"Password"}
              validationSchema={{
                required: "Password is required!",
              }}
              className="mb-12"
              icon="true"
              togglePassword={() => handleTogglePassword()}
              showPassword={showPassword}
            />
            {watch("password") && (
              <PasswordComplexity
                valueOfPassword={getValues().password?.toString()}
              />
            )}
            <div
              className={`form-group ${errorToShow !== "" ? "mb-2" : "mb-4"}`}
            >
              <label className="mb-1">
                Confirm Password
                <span className="text-black ms-1 required-field">*</span>
              </label>
              <div className="input-control position-relative">
                <input
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === getValues().password?.toString() ||
                      "Confirm Password do not match!",
                  })}
                  className="border-0 h-100 w-100 px-3"
                />

                <div
                  className="position-absolute top-0 end-0 me-3 mt-2 cursor"
                  onClick={() => toggleConfirmPassword()}
                >
                  <img
                    src={`/static/img/${
                      showConfirmPassword ? "eye" : "u_eye"
                    }.svg`}
                  />
                </div>
              </div>
              {errors.confirmPassword && (
                <div
                  data-testid="titleError"
                  className="error-info mb-12 text-danger"
                >
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            {!!errorToShow && (
              <div className="error-info mb-12 text-danger">
                <ReactMarkdown>{errorToShow}</ReactMarkdown>
              </div>
            )}
            <div className="form-check mb-5">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I agree to Terms of service and Privacy policy of
                TheStrategist.me
              </label>
            </div>

            <button
              type="submit"
              className="border-0 w-100 text-white primary-btn"
            >
              Create account
            </button>

            <div className="mt-4 pt-6 text-center">
              Already have an account?
              <Link to={"/login"} className="text-decoration-none">
                <span className="primary-text fw-bolder"> Sign In </span>
              </Link>
              to your account.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
