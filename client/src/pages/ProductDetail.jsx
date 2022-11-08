import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "../asset/style/global.css";
import NewProduct from "../components/NewProduct";
import Rating from "../asset/img/Rating.svg";
import Ellipse1 from "../asset/img/Ellipse-black.svg";
import Ellipse2 from "../asset/img/Ellipse-blue.svg";
import Ellipse3 from "../asset/img/Ellipse-red.svg";
import Ellipse4 from "../asset/img/Ellipse-green.svg";
import z9 from "../asset/img/z9.png";
import z10 from "../asset/img/z10.png";
import N10 from "../asset/img/10.png";
import z6 from "../asset/img/z6.png";
import { getProductDetail } from "../config/redux/actions/createProductAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  // const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  // const [product, setProduct] = useState("");
  const { productDetail } = useSelector((state) => state.product);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductDetail(id));
  }, [id]);

  const [count, setCount] = useState(0);
  const [size, setSize] = useState(0);

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <section className="firstSection">
          {/* <p>Home > Category > T-Shirt</p> */}
          <section className="item-detail">
            <div className="row">
              <div className="col-lg-4 col-12">
                <img
                  src={productDetail.photo}
                  alt={productDetail.name}
                  className="img-fluid jumbo"
                  id="img-preview"
                />
              </div>
              <div className="col-lg-4 col-12">
                <div className="row">
                  <div className="col">
                    <h1>{productDetail.name}</h1>
                    {/* <p>Zalora Cloth</p> */}
                    <img src={Rating} alt="Rating" />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <p>Price</p>
                    <h1>{`$ ${productDetail.price}`}</h1>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <p>
                      <b> color</b>
                    </p>
                    <img src={Ellipse1} alt="Ellipse" className="p-1" />
                    <img src={Ellipse2} alt="Ellipse" className="p-1" />
                    <img src={Ellipse3} alt="Ellipse" className="p-1" />
                    <img src={Ellipse4} alt="Ellipse" className="p-1" />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col">
                    <p>size</p>
                    <img
                      src={z9}
                      onclick="min()"
                      className="control"
                      alt="Ellipse"
                      onClick={() => {
                        if (size > 0) setSize(size - 1);
                      }}
                    />
                    <span style={{ margin: "0 15px" }}>{size}</span>
                    <img
                      src={z10}
                      onclick="plus()"
                      className="control"
                      alt="Ellipse"
                      onClick={() => setSize(size + 1)}
                    />
                  </div>
                  <div className="col">
                    <p>Jumlah</p>
                    <img
                      src={z9}
                      className="control"
                      alt="Ellipse"
                      onClick={() => {
                        if (count > 0) setCount(count - 1);
                      }}
                    />
                    <span style={{ margin: "0 15px" }}>{count}</span>
                    <img
                      src={z10}
                      className="control"
                      alt="Ellipse"
                      onClick={() => setCount(count + 1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-4 col-12 mt-4">
                <div className="row tumb-item">
                  <div className="col tumb-item">
                    <img
                      src={productDetail.photo}
                      alt="t-shirt1"
                      className="img-fluid thumb active-thumb"
                    />
                  </div>
                  <div className="col tumb-item">
                    <img
                      src={productDetail.photo}
                      alt="t-shirt1"
                      className="img-fluid thumb"
                    />
                  </div>
                  <div className="col tumb-item">
                    <img
                      src={productDetail.photo}
                      alt="t-shirt1"
                      className="img-fluid thumb"
                    />
                  </div>
                  <div className="col tumb-item">
                    <img
                      src={productDetail.photo}
                      alt="t-shirt1"
                      className="img-fluid thumb"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 mt-3">
                <div className="row">
                  <div className="col-lg-2 col-3">
                    <button className="btn btn-light rounded-pill border border-dark btn-full">
                      Chat
                    </button>
                  </div>
                  <div className="col-lg-2 col-3">
                    <button className="btn btn-light rounded-pill border border-dark btn-full">
                      Bag
                    </button>
                  </div>
                  <div className="col-lg-4 col-6">
                    <button className="btn btn-danger rounded-pill btn-full">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* product review */}
        <section class="information">
          <div class="row mt-4">
            <div class="col-12">
              <h1>Informasi Produk</h1>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-12">
              <h3>Conditon</h3>
              <p class="text-danger">
                <b>New</b>
              </p>
            </div>
          </div>

          {/* description */}
          <div class="row">
            <div class="col-12">
              <h4>Description</h4>
              <p>{productDetail.description}</p>
            </div>
          </div>
        </section>

        <section class="review">
          <div class="row">
            <div class="col-12 col-lg-4">
              <h3>Product review</h3>
              <div class="row">
                <div class="col">
                  <h1>
                    5.0
                    <img src={N10} alt="10" />
                  </h1>

                  <img src={Rating} alt="Rating" />
                </div>
                <div class="col">
                  <img src={z6} alt="Rating" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <NewProduct
          title="You can also like this"
          subTitle="You've never seen it before!"
        />
      </div>
    </Fragment>
  );
};

export default ProductDetail;
