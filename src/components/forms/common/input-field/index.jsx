import React from "react";
const Input = ({
  name,
  register,
  errors,
  type,
  validationSchema,
  placeholder,
  isNestedField,
  parentField,
  handleChange,
  className,
  handleValidate,
  label,
  icon,
  togglePassword,
  showPassword,
}) => {
  return (
    <>
      <div className={`form-group mb-4 ${className}`}>
        <label className="mb-1">
          {label}
          {validationSchema.required && (
            <span className="text-black ms-1 required-field">*</span>
          )}
        </label>
        <div className={`input-control ${icon && "position-relative"}`}>
          <input
            {...register(
              isNestedField && parentField ? `${parentField}.${name}` : name,
              {
                ...validationSchema,
                onChange: handleChange && handleChange,
                validate: handleValidate && handleValidate,
              }
            )}
            className="border-0 h-100 w-100 px-3"
            placeholder={placeholder}
            type={showPassword ? "text" : type}
          />
          {icon && (
            <div
              className="position-absolute top-0 end-0 me-3 mt-2 cursor"
              onClick={() => togglePassword()}
            >
              <img
                src={`/static/img/${
                  showPassword ? "eye" : "u_eye"
                }.svg`}
              />
            </div>
          )}
        </div>

        {errors && errors[name] && (
          <div
            data-testid="titleError"
            className="error-info mb-12 text-danger"
          >
            {errors[name]?.message}
          </div>
        )}
      </div>
    </>
  );
};
export default Input;
