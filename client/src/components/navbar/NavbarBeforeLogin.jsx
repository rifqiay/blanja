import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Filter from "../../asset/img/filter.svg";
// import Profil from "../asset/img/profil.svg";
import Cart from "../../asset/img/shopping.svg";
import Search from "../../asset/img/Search.svg";
import axios from "axios";
import Searching from "../search";

import "../../asset/style/global.css";

const SearchInput = () => {
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
                <img src={Cart} alt="" />
              </Link>
              <Link to="/login">
                <button className="btn btn-danger rounded-pill mr-ml btn-width">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-light rounded-pill btn-width">
                  Signup
                </button>
              </Link>
            </Nav>
            <Searching />
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default SearchInput;
