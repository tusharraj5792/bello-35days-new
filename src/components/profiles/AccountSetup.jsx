import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../forms/common/input-field";

const AccountSetup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="row justify-content-center w-100 py-5">
      {" "}
      <div className="col-md-5 ps-md-5 mt-74">
        <form>
          <div className="text-center">
            <h2 className="sub-h mb-2">Setup your profile</h2>
            <p className="mb-4">
              Enter the answer for following fields to complete your profile{" "}
              <br />
              setup.
            </p>
            <div className="mx-auto pt-4 profile-img-bg my-4">
              <img
                src="/static/img/profile-dummy.png"
                className="mb-28"
              />
            </div>
          </div>

          <Input
            name="Designation"
            register={register}
            placeholder="Enter your full name"
            errors={errors}
            validationSchema={{
              required: "Email is required!",
            }}
            type="text"
            className="mb-12"
            label={"Your Designation"}
          />

          <Input
            name="Organization"
            type="text"
            placeholder="Enter your valid email address"
            register={register}
            errors={errors}
            validationSchema={{}}
            className="mb-12"
            label={"Your Organization"}
          />
          <Input
            name="Description"
            type="text"
            placeholder="Enter your valid email address"
            register={register}
            errors={errors}
            validationSchema={{}}
            className="mb-12"
            label={"Profile Description"}
          />

          <button
            type="submit"
            className="border-0 w-100 text-white primary-btn mt-4"
          >
            Get started
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSetup;
