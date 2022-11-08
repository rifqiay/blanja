import React, { Fragment, useEffect, useState } from "react";
import NavbarAfterLogin from "./NavbarAfterLogin";
import NavbarBeforeLogin from "./NavbarBeforeLogin";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(token);

  useEffect(() => {
    setIsLogin(token);
  }, []);
  return (
    <Fragment>
      {isLogin ? <NavbarAfterLogin /> : <NavbarBeforeLogin />}
    </Fragment>
  );
};

export default Navbar;
