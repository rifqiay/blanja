import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import logo from "../asset/img/logo.svg";
import Img1 from "../asset/img/img1.svg";
import Img2 from "../asset/img/img2.svg";
import Img3 from "../asset/img/img3.svg";
import Img4 from "../asset/img/img4.svg";
import "../asset/style/global.css";

const Carousel = () => {
  return (
    <OwlCarousel
      className="owl-theme firstSection"
      loop
      margin={10}
      nav
      autoplay
    >
      <div className="item" style={{ maxHeight: "200px" }}>
        <img src={Img1} alt="Img1" />
      </div>
      <div className="item" style={{ maxHeight: "200px" }}>
        <img src={Img2} alt="Img2" />
      </div>
      <div className="item" style={{ maxHeight: "200px" }}>
        <img src={Img3} alt="Img3" />
      </div>
      <div className="item" style={{ maxHeight: "200px" }}>
        <img src={Img4} alt="Img4" />
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
