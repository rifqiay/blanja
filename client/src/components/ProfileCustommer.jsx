import React, { Fragment } from "react";
import Navbar from "./navbar/Navbar";
import Profil from "../asset/img/Mask Group.png";
import "../asset/style/global.css";
import User from "../asset/img/user.PNG";
import Location from "../asset/img/location.PNG";
import Order from "../asset/img/order.PNG";
import { useNavigate } from "react-router-dom";

const ProfileSeller = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="firstSection">
          <div className="row">
            {/*aside */}
            <div className="col-lg-4">
              {/* profil icon and name */}
              <div className="row">
                <div className="col-2">
                  <img src={Profil} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <h3>Johanes Mikael</h3>
                  <p>Ubah Profile</p>
                  <button className="btn btn-danger" onClick={logOut}>
                    Logout
                  </button>
                </div>
              </div>
              {/* User */}
              <div className="row mt-3">
                <div className="col-2">
                  <img src={User} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <h4>My account</h4>
                </div>
              </div>
              {/* product CRUD */}
              <div className="row mt-3">
                <div className="col-2">
                  <img src={Location} alt="" className="img-fluid " />
                </div>
                <div className="col">
                  <h4>Shpping Address</h4>
                </div>
              </div>
              {/* my order */}
              <div className="row mt-3">
                <div className="col-2">
                  <img src={Order} alt="" className="img-fluid" />
                </div>
                <div className="col">
                  <h4>My order</h4>
                </div>
              </div>
            </div>
            {/* main  */}
            <div className="col p-3 bg-main">
              <main>
                {/* {active === "myProduct" ? <MyProduct /> : <SellingProduct />} */}
              </main>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileSeller;
