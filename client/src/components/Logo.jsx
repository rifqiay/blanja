import React, { Fragment } from "react";
import Logo from "../asset/img/logo.svg";
import { Link } from "react-router-dom";

const logo = () => {
  return (
    <Fragment>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </Fragment>
  );
};

export default logo;
