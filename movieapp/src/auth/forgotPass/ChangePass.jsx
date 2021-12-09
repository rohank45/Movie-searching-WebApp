import React from "react";

const ChangePass = () => {
  return (
    <div className="container mx-auto mt-100">
      <form>
        <h2>Change Password Form</h2>

        <div className="my-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="my-3">
          <label for="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePass;
