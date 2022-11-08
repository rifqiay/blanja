import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../components/Logo";
import { useNavigate, Link } from "react-router-dom";
import "../../asset/style/global.css";
import { useDispatch } from "react-redux";
import {
  loginUser,
  loginSeller,
} from "../../config/redux/actions/usersActions";

const Login = () => {
  const [active, setActive] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    setActive("customer");
  }, []);
  const [form, setForm] = useState({
    email: "",
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
    if (active === "customer") {
      dispacth(loginUser(form, navigate, setLoading));
    } else {
      dispacth(loginSeller(form, navigate, setLoading));
    }
  };
  return (
    <Fragment>
      <div className="container hv d-flex justify-content-center align-items-center">
        <main className=" content">
          <div className="row">
            <div className="text-center">
              <Logo />
              <div className="my-3">
                <strong>Please login with your account</strong>
              </div>
              {/* seller/buyer */}
              {active === "customer" ? (
                <div className=" justify-content-center mt-4 d-flex">
                  <button
                    className="btn btn-danger rounded-0 text-white"
                    style={{ width: "100px" }}
                    onClick={() => setActive("customer")}
                  >
                    Customer
                  </button>
                  <button
                    className="btn btn-outline-secondary pr-5 text-reset text-black rounded-0"
                    style={{ width: "100px" }}
                    onClick={() => setActive("seller")}
                  >
                    Seller
                  </button>
                </div>
              ) : (
                <div className="justify-content-center mt-4 d-flex">
                  <button
                    className="btn btn-outline-secondary pr-5 text-reset text-black rounded-0"
                    style={{ width: "100px" }}
                    onClick={() => setActive("customer")}
                  >
                    Customer
                  </button>
                  <button
                    className="btn btn-danger rounded-0 text-white"
                    style={{ width: "100px" }}
                    onClick={() => setActive("seller")}
                  >
                    Seller
                  </button>
                </div>
              )}
              {/* seller/buyer */}
              {/* form */}
              <div>
                <form onSubmit={handleSubmit} className="pt-5">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      // id="inputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group pt-3">
                    <input
                      type="password"
                      className="form-control"
                      // id="inputPassword"
                      placeholder="Password"
                      name="password"
                      required
                      value={form.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-end text-danger mt-3">
                    <Link to="/forgotpassword">Forgot password?</Link>
                  </div>
                  {loading ? (
                    <button
                      type="submit"
                      className="btn btn-danger mt-3 "
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
                      className="btn btn-danger mt-3"
                      style={{ width: "100%", borderRadius: "25px" }}
                    >
                      Submit
                    </button>
                  )}
                </form>
              </div>
              {/* form */}
              <div className="pt-5">
                <span className="text-black">
                  Don't have a Tokopedia account?{" "}
                </span>
                <Link to="/register" className="text-decoration-none">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Login;
