import React, { Fragment, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Filter from "../../asset/img/filter.svg";
import Profil from "../../asset/img/Mask Group.png";
import Cart from "../../asset/img/shopping.svg";
import Bell from "../../asset/img/bell.svg";
import Mail from "../../asset/img/mail.svg";
import Searching from "../search";

import "../../asset/style/global.css";

const NavbarAfterLogin = () => {
  const role = localStorage.getItem("role");
  const [profile, setProfile] = useState(role);

  useEffect(() => {
    setProfile(role);
  }, []);
  return (
    <Fragment>
      <Navbar bg="white" className="shadow d-flex fixed-top" expand="lg">
        <div className="container">
          <Link to="/">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navigation"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/register">
                <img src={Filter} alt="filter" className="filter" />
              </Link>
              <Link to="/register">
                <img src={Cart} alt="" className="cart" />
              </Link>
              <Link to="/notification">
                <img src={Bell} alt="" className="notif" />
              </Link>
              <Link to="/mail">
                <img src={Mail} alt="" className="mail" />
              </Link>
              {profile === "sellers" ? (
                <Link to="/profileseller">
                  <img src={Profil} alt="" className="profil" />
                </Link>
              ) : (
                <Link to="/profilecustommer">
                  <img src={Profil} alt="" className="profil" />
                </Link>
              )}
            </Nav>
            <Searching />
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default NavbarAfterLogin;
