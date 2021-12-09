import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto mt-100">
      <form>
        <h2 className="text-center">Login Form</h2>
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

        <div className="my-3">
          <label for="exampleInputEmail1" className="form-label">
            <Link
              to="/send-otp-form"
              className="text-danger"
              style={{ textDecoration: "none" }}
            >
              forgot password
            </Link>
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Login in
        </button>

        <button type="submit" className="btn btn-primary">
          <a href="http://localhost:5000/auth/google">Sign up with Google</a>
        </button>
      </form>
    </div>
  );
};

export default Login;
