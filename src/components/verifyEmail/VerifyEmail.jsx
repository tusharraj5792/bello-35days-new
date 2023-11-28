import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { verifyEmailActions } from "../../store/reducers/verifyEmailSlice";

function VerifyEmail() {
  const dispatch = useAppDispatch();
  const id = useParams();
  const verifyEmailToken = localStorage.getItem("verifyEmailToken");
  //   useEffect(() => {

  //   }, []);
  const HandleVerifyEmail = () => {
    const payload = {
      id: id.id,
      token: verifyEmailToken,
    };
    dispatch(verifyEmailActions.verifyEmail(payload));
  };
  return (
    <div>
      <h1>Your Email is verifyed</h1>
      <p>
        <Link to={"/login"}>
          <span onClick={HandleVerifyEmail}>Click here</span>
        </Link>
        to go in Login
      </p>
    </div>
  );
}

export default VerifyEmail;
