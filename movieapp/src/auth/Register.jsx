import React from "react";

const Register = () => {
  return (
    <div className="container mx-auto mt-100">
      <form>
        <h2 className="text-center">Register Form</h2>

        <div className="my-3">
          <label for="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input type="text" aria-label="Full name" className="form-control" />
        </div>

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

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
