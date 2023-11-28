import React, { useEffect, useState } from "react";

function PasswordComplexity({ valueOfPassword }) {
  const [passwordValidity, setPasswordValidity] = useState({
    minLength: null,
    minLowerCase: null,
    minUpperCase: null,
    minNumbers: null,
    minSpecSymbols: null,
  });
  const oneLowerCase = /^(?=.*?[a-z])/;
  const oneUpperCase = /^(?=.*?[A-Z])/;
  const specialCharacterRegex = /[ !@#$%^$*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const isNumberRegex = /\d/;

  useEffect(() => {
    setPasswordValidity({
      minLength: valueOfPassword?.length >= 8,
      minLowerCase: !!oneLowerCase.test(valueOfPassword),
      minUpperCase: !!oneUpperCase.test(valueOfPassword),
      minNumbers: !!isNumberRegex.test(valueOfPassword),
      minSpecSymbols: !!specialCharacterRegex.test(valueOfPassword),
    });
  }, [valueOfPassword]);

  const PasswordIndicatorItem = ({ isValid, text }) => {
    return <li style={{ color: isValid ? "green" : "red" }}>{text}</li>;
  };
  return (
    <ul style={{ listStyle: "none" }} className="ps-0">
      <PasswordIndicatorItem
        text="Password have at least 8 characters"
        isValid={passwordValidity?.minLength}
      />
      <PasswordIndicatorItem
        text="Password have at least 1 lowercase characters"
        isValid={passwordValidity?.minLowerCase}
      />
      <PasswordIndicatorItem
        text="Password have at least 1 uppercase characters"
        isValid={passwordValidity?.minUpperCase}
      />
      <PasswordIndicatorItem
        text="Password have at least 1 spec symbol"
        isValid={passwordValidity?.minSpecSymbols}
      />
      <PasswordIndicatorItem
        text="Password have at least 1 number "
        isValid={passwordValidity?.minNumbers}
      />
    </ul>
  );
}

export default PasswordComplexity;
