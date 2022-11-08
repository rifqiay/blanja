import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "../asset/img/Rating.svg";
import "../asset/style/global.css";
import getProduct from "../config/redux/actions/ProductActionGetAll";
import { useDispatch, useSelector } from "react-redux";

const NewProduct = ({ title, subTitle }) => {
  //   const dispatch = useDispatch();
  //   const { products } = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // dispatch(getProduct());

    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/products`)
      .then(function (response) {
        // handle success
        setProducts(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <div className="row mt-5">
        <div className="col">
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-5">
            <div className="card shadow p-3">
              <img
                src={item.photo}
                className="card-img-top img-fluid"
                style={{ aspectRatio: "1/1" }}
                alt={item.photo}
              />

              <div className="card-body">
                <Link to={`/detail/${item.id}`}>
                  <h4 className="text-dark">{item.name}</h4>
                  <p>{item.merk}</p>
                  <strong className="text-dark">{item.price}</strong>
                  <br />
                  {/* <p>Zalora Cloth</p> */}
                  <img src={Rating} alt="Rating" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default NewProduct;
