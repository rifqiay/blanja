import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../asset/style/global.css";
import { useDispatch } from "react-redux";
import { registerSeller } from "../config/redux/actions/usersActions";

const SignupSeller = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    storeName: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispacth(registerSeller(form, navigate, setLoading));
  };

  return (
    <Fragment>
      <form className="pt-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="inputNameSeller"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group pt-3">
          <input
            type="email"
            className="form-control"
            id="inputEmailSeller"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group pt-3">
          <input
            type="text"
            className="form-control"
            id="inputPhoneSeller"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>
        <div className="form-group pt-3">
          <input
            type="text"
            className="form-control"
            id="inputStoreNameSeller"
            placeholder="Store Name"
            name="storeName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group pt-3">
          <input
            type="password"
            className="form-control"
            id="inputPasswordSeller"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>

        {loading ? (
          <button
            type="submit"
            className="btn btn-danger mt-4"
            style={{ width: "100%", borderRadius: "25px" }}
            disabled
          >
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-danger mt-4"
            style={{ width: "100%", borderRadius: "25px" }}
          >
            Primary
          </button>
        )}
      </form>
      <div className="pt-5 mb-3">
        <span className="text-black">Already have a Tokopedia account? </span>
        <Link to="/login" className="text-decoration-none text-danger">
          Login
        </Link>
      </div>
    </Fragment>
  );
};

export default SignupSeller;
