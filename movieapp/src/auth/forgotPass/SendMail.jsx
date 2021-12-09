import React from "react";

const SendMail = () => {
  return (
    <div className="container mx-auto mt-100">
      <form>
        <h2>Get Otp Form</h2>
        <div className="my-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Send Otp on Mail
        </button>
      </form>
    </div>
  );
};

export default SendMail;
