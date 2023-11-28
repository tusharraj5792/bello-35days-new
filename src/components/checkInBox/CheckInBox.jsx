import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { forgetPasswordActions } from "../../store/reducers/forgetPasswordSlice";

function CheckInBox({ data }) {
  const dispatch = useAppDispatch();
  const handleResendLink = () => {
    dispatch(forgetPasswordActions.forgetPassword(data));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 mt-5">
        <div className="text-center">
          <h2 className="sub-h mb-2">Check Your Inbox!</h2>
          <p className="mb-4">
            {`We have sent you a link to ${
              data ? data.email : johndoe.gmail.com
            }. Please click the link
            to confirm your email address.`}
          </p>
          <hr />
          <p className="mb-4">
            Can’t see the email? please check the spam folder.
          </p>
          <p className="mb-4">
            Incase you didn’t get email in 10mins then hit the send link button
            again.
          </p>
          <button
            className="border-0 w-100 text-white primary-btn"
            onClick={handleResendLink}
          >
            Send Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckInBox;
