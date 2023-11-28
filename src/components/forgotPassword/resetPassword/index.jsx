import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../forms/common/input-field";
import { emailPattern } from "../../../utilities/utils";
import PasswordComplexity from "../../passwordComplexity";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  forgetPasswordActions,
  // selectForgotPasswordToken,
  selectResetPasswordSuccess,
} from "../../../store/reducers/forgetPasswordSlice";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const user = useParams();

  const resetPasswordSuccess = useAppSelector(selectResetPasswordSuccess);
  const forgotPasswordToken = localStorage.getItem("forgotPasswordToken");
  // const forgotPasswordToken = useAppSelector(selectForgotPasswordToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const paramObj = {
      token: forgotPasswordToken,
      id: user.id,
    };
    if (data) {
      const payload = { paramObj, password: data.password };
      dispatch(forgetPasswordActions.resetPassword(payload));
    }
  };
  useEffect(() => {
    if (resetPasswordSuccess) navigate("/login");
  }, [resetPasswordSuccess]);
  return (
    <>
      <div className="forget-password">
        <div
          className="row justify-content-center w-100 align-items-center"
          style={{ height: "80vh" }}
        >
          <div className="col-lg-4 col-md-5 col-sm-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center">
                <h2 className="sub-h mb-2">Forget Password?</h2>
                <p className="mb-4 peragraph">
                  Enter 8 digits new password to gain access to your account.
                </p>
              </div>

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
              />
              {watch("password") && (
                <PasswordComplexity
                  valueOfPassword={getValues().password?.toString()}
                />
              )}
              <label className="mb-1">
                Confirm Password
                <span className="text-black ms-1 required-field">*</span>
              </label>
              <div className="input-control position-relative">
                <input
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  type={"password"}
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === getValues().password?.toString() ||
                      "Confirm Password do not match!",
                  })}
                  className="border-0 h-100 w-100 px-3"
                />
              </div>

              {errors.confirmPassword && (
                <div
                  data-testid="titleError"
                  className="error-info mb-12 text-danger"
                >
                  {errors.confirmPassword.message}
                </div>
              )}
              <p className="peragraph">
                Use at least one upper case, lower case, number and a special
                character.
              </p>

              <button
                type="submit"
                className="border-0 w-100 text-white primary-btn"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
