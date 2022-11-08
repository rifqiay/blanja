import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "../asset/img/Rating.svg";
import Navbar from "../components/navbar/Navbar";

const ResultSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams([]);
  const [product, setProduct] = useState([]);
  const [sort, setSort] = useState("");

  console.log(sort);
  const getProducts = async () => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/products/?${searchParams}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    searchParams.get("key");
    getProducts();
  }, [searchParams]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <main className="firstSection">
          <div className="row">
            {product.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-5">
                <div className="card shadow p-2 test">
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
        </main>
      </div>
    </div>
  );
};

export default ResultSearch;
