import React, { useState, useEffect, Fragment } from "react";
import Logo from "../../components/Logo";
import SignupCustomer from "../../components/SignupCustomer";
import SignupSeller from "../../components/SignupSeller";
import "../../asset/style/global.css";

const Register = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive("customer");
  }, []);
  return (
    <Fragment>
      <div className="container d-flex  align-items-center vh-100 justify-content-center">
        <main className="content-register">
          <div className="text-center">
            <Logo />
            <p className="my-4">Please register with your account</p>
            {/* custommer/seller */}
            {active === "customer" ? (
              <div className="justify-content-center mt-4 d-flex">
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

            {/* form */}
            <div>
              {active === "customer" ? <SignupCustomer /> : <SignupSeller />}
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Register;
