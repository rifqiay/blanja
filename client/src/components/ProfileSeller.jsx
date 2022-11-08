import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Profil from "../asset/img/Mask Group.png";
import Store from "../asset/img/store.PNG";
import OrderIcon from "../asset/img/order-icon.PNG";
import ProductIcon from "../asset/img/product-icon.PNG";
import "../asset/style/global.css";
import Accordion from "react-bootstrap/Accordion";
import SellingProduct from "./Products/SellingProduct";
import MyProduct from "./Products/MyProduct";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

const ProfileSeller = () => {
  const token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  const idSeller = decoded.id;
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [data, setData] = useState([]);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  useEffect(() => {
    setActive("myProduct");
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/sellers/profile/${idSeller}`)
      .then((res) => {
        setData(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

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
                  <h3>{data.name}</h3>
                  <p>Ubah Profile</p>
                  <button className="btn btn-danger" onClick={logOut}>
                    Logout
                  </button>
                </div>
              </div>
              {/* store */}
              <div className="row">
                <div className="col-2">
                  <img src={Store} alt="" className="img-fluid icon" />
                </div>
                <div className="col">
                  <Accordion ActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h4>Store</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <h5>Store Profile</h5>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              {/* product CRUD */}
              <div className="row">
                <div className="col-2">
                  <img src={ProductIcon} alt="" className="img-fluid icon" />
                </div>
                <div className="col">
                  <Accordion ActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h4>Product</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        {active === "myProduct" ? (
                          <div>
                            <h5
                              className="pointer"
                              onClick={() => setActive("myProduct")}
                            >
                              My Product
                            </h5>
                            <h5
                              className="pointer"
                              onClick={() => setActive("selling")}
                            >
                              Selling Product
                            </h5>
                          </div>
                        ) : (
                          <div>
                            {" "}
                            <h5
                              className="pointer"
                              onClick={() => setActive("myProduct")}
                            >
                              My Product
                            </h5>
                            <h5
                              className="pointer"
                              onClick={() => setActive("selling")}
                            >
                              Selling Product
                            </h5>
                          </div>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              {/* my order */}
              <div className="row">
                <div className="col-2">
                  <img src={OrderIcon} alt="" className="img-fluid icon" />
                </div>
                <div className="col">
                  <Accordion ActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h4>Order</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <h5>My Order</h5>
                        <h5>Order cancel</h5>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            {/* main  */}
            <div className="col p-3 bg-main">
              <main>
                {active === "myProduct" ? <MyProduct /> : <SellingProduct />}
              </main>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileSeller;
