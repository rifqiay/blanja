import React, { Fragment, useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import NewProduct from "../components/NewProduct";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../config/redux/actions/usersActions";
import axios from "axios";
// import Navbar form '../components/navbar/Navbar';
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  // const token = localStorage.getItem("token");
  // const [isLogin, setIsLogin] = useState(token);

  // useEffect(() => {
  //   setIsLogin(token);
  // }, []);

  return (
    <Fragment>
      {/* {isLogin ? <NavbarAfterLogin /> : <Navbar />} */}
      <Navbar />
      <div className="container">
        <Carousel />
        <Category />
        <NewProduct title="New" subTitle="You've never seen it before!" />
        <NewProduct title="Popular" subTitle="Find product trending" />
        <br></br>
      </div>
    </Fragment>
  );
};

export default Home;
