import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto mt-100">
      <form>
        <h2>Get in touch</h2>
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

        <div className="form-floating my-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "200px" }}
          ></textarea>
          <label for="floatingTextarea">Message</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
