import React, { useState } from "react";
import Input from "../forms/common/input-field";
import { useForm } from "react-hook-form";
import { emailPattern } from "../../utilities/utils";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  forgetPasswordActions,
  selectForgetPasswordLoding,
  selectLinkSent,
} from "../../store/reducers/forgetPasswordSlice";
import CheckInBox from "../checkInBox/CheckInBox";
import Loader from "../loaders/loader";

function ForgotPassword() {
  const dispatch = useAppDispatch();
  const linkSent = useAppSelector(selectLinkSent);
  const isLoading = useAppSelector(selectForgetPasswordLoding);
  const [resetEmail, setResetEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) {
      setResetEmail(data);
      dispatch(forgetPasswordActions.forgetPassword(data));
    }
  };

  if (isLoading) return <Loader />;
  return (
    <div className="forget-password">
      {!isLoading && linkSent ? (
        <CheckInBox data={resetEmail} />
      ) : (
        <div
          className="row justify-content-center w-100 align-items-center"
          style={{ height: "80vh" }}
        >
          {/* Forgot Password */}
          <div className="col-lg-4 col-md-5 col-sm-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center">
                <h2 className="sub-h mb-2">Forget Password?</h2>
                <p className="mb-4 peragraph">
                  You can recover password by simply providing us email you used
                  to create account at TheStrategies.me
                </p>
              </div>

              <Input
                name="email"
                register={register}
                placeholder="Enter your email address"
                errors={errors}
                validationSchema={{
                  pattern: {
                    value: emailPattern,
                    message: "Please enter a valid email",
                  },
                  required: "Email is required",
                }}
                className="mb-12"
                label={"Email"}
              />

              <button
                type="submit"
                className="border-0 w-100 text-white primary-btn"
              >
                Send Link
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
